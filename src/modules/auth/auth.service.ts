import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAuth } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import { LoginDto, RegisterDto } from './dto/auth.dto';
import { UpdateEmailDto, UpdatePassDto } from './dto/update-auth.dto';

import type { IAuthRepository } from './interfaces/iauth.repository';
import type { IUserRepository } from '../users/interfaces/iuser.repository';
import type { ITokenService } from './interfaces/itoken.interface';
import { AccessTokenDto } from './dto/access-token.dto';
import { access } from 'fs';
import { RefreshTokenDto } from './dto/refresh-token.dto';
@Injectable()
export class AuthService {
  constructor(
    @Inject('IAuthRepository')
    private readonly authRepo: IAuthRepository,
    @Inject('IUserRepository')
    private readonly userRepo: IUserRepository,
    @Inject('ITokenService')
    private readonly tokenService: ITokenService,
  ) {}

  async findUserByEmail(email: string) {
    return this.authRepo.findUserByEmail(email);
  }

  async register(data: RegisterDto): Promise<UserAuth> {
    if (await this.authRepo.findUserByEmail(data.email)) {
      throw new UnauthorizedException('Email already in use');
    }

    const saltOrRounds: number = Number(process.env.HASHING_SECRET);
    const hashedPassword: string = await bcrypt.hash(
      data.password,
      saltOrRounds,
    );

    const user = await this.userRepo.create({
      firstName: data.firstName,
      lastName: data.lastName,
      userType: data.userType,
      dateOfBirth: data.dateOfBirth,
      phoneNumber: data.phoneNumber,
      profileImage: data.profileImage,
    });

    const auth = await this.authRepo.create({
      email: data.email,
      password: hashedPassword,
      userId: user.id,
    });

    return auth;
  }

  async login({ email, password,deviceId,ipAddress }: LoginDto) {
    if (!email || !password)
      throw new UnauthorizedException('Email and password are required');

    const userAuth = await this.findUserByEmail(email);
    if (!userAuth) throw new UnauthorizedException('Incorrect Email or password');

    const passwordIsValid = await bcrypt.compare(password, userAuth.password);
    if (!passwordIsValid)
      throw new UnauthorizedException('Incorrect Email or password');

    // Also  check if user account is active, not locked, etc. if needed but I think that is for the controller right?
    // Login successful and we will register the device, ip and other access info later
    if (!userAuth.userId )
      throw new UnauthorizedException('User ID not found for the given email Contact administrator');

    //v3.2.0- Added return type for login method (JWT token generation)
    const user = await this.userRepo.findOne(userAuth.userId);
    if (!user)
      throw new UnauthorizedException('User not found. Contact administrator');

    const AccessToken = this.tokenService.generateAccessToken(
      {userId: userAuth.userId,
        email: userAuth.email,
        role: user.userType, // This should ideally come from user roles/permissions management
        deviceId: deviceId, // This should be replaced with actual device ID
        ipAddress: ipAddress, // This should be replaced with actual IP address
      });

      const RefreshToken = this.tokenService.generateRefreshToken(
        {
          userId: userAuth.userId,
          deviceId: deviceId, // This should be replaced with actual device ID
          ipAddress: ipAddress, // This should be replaced with actual IP address
        }
    );


    return {user,AccessToken, RefreshToken}; //will be used to generate JWT token and return to client end
  }

  async updatePassword(data: UpdatePassDto): Promise<UserAuth> {
    const user = await this.findUserByEmail(data.currentEmail);
    if (!user) throw new UnauthorizedException('User not found');

    const saltOrRounds = process.env.HASHING_SECRET;
    const hashedPassword = await bcrypt.hash(data.newPassword, saltOrRounds);
    return this.authRepo.update(user.id, {
      password: hashedPassword,
      updatedAt: data.updatedAt,
    });
  }

  async updateEmail(data: UpdateEmailDto): Promise<UserAuth> {
    if (data.currentEmail === data.newEmail)
      throw new UnauthorizedException(
        'New email cannot be the same as current email',
      );

    const user = await this.findUserByEmail(data.currentEmail);
    if (!user) throw new UnauthorizedException('User not found');

    return this.authRepo.update(user.id, {
      email: data.newEmail,
      updatedAt: data.updatedAt,
    });
  }

  async refreshToken(refreshToken: string,deviceId:string,ipAddress:string) {
    if (!refreshToken || !deviceId || !ipAddress) 
      throw new UnauthorizedException("Missing tokens or device or IP address.");
    
    const payload  = this.tokenService.verifyRefreshToken(refreshToken);

    if (payload.type !== 'refresh')
      throw new UnauthorizedException("Invalid token type.");

    const authRecord = await this.authRepo.findOne(payload.sub);
    if (!authRecord)
      throw new UnauthorizedException("Invalid! not found.");

    
  // Device binding check
  if (authRecord.device !== deviceId) throw new UnauthorizedException();

  // (Optional but recommended)
  // IP binding check
  if (authRecord.ip !== payload.ip) throw new UnauthorizedException();
  
    
  
  }
}
