import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserAuth } from '@prisma/client';
import * as bcrypt from 'bcrypt';

import { LoginDto, RegisterDto } from './dto/auth.dto';
import { UpdateEmailDto, UpdatePassDto } from './dto/update-auth.dto';

import type { IAuthRepository } from './interfaces/iauth.repository';
import type { IUserRepository } from '../users/interfaces/iuser.repository';
import type { ITokenService } from './interfaces/itoken.interface';


@Injectable()
export class AuthService {
  constructor(
    @Inject('IAuthRepository')
    private readonly authRepo: IAuthRepository,
    @Inject('IUserRepository')
    private readonly userRepo: IUserRepository,
    @Inject('ITokenService')
    private readonly tokenService: ITokenService,
  ) { }

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

  async login({ email, password }: LoginDto) {
    if (!email || !password)
      throw new UnauthorizedException('Email and password are required');

    const userAuth = await this.findUserByEmail(email);
    if (!userAuth) throw new UnauthorizedException('Incorrect Email or password');

    const passwordIsValid = await bcrypt.compare(password, userAuth.password);
    if (!passwordIsValid)
      throw new UnauthorizedException('Incorrect Email or password');

    // Also  check if user account is active, not locked, etc. if needed but I think that is for the controller right?
    // Login successful and we will register the device, ip and other access info later
    if (!userAuth.userId)
      throw new UnauthorizedException('User ID not found for the given email Contact administrator');

    //v3.2.0- Added return type for login method (JWT token generation)
    const user = await this.userRepo.findOne(userAuth.userId);
    if (!user)
      throw new UnauthorizedException('User not found. Contact administrator');

    //v3.2.1- Updated token payload to include Autherization Scopes

    const AccessToken = this.tokenService.generateAccessToken(
      {
        sub: userAuth.userId,
        email: userAuth.email,
        userType: user.userType, // This should ideally come from user roles/permissions management
        status: userAuth.accountStatus, // This should be replaced with actual device ID
      });

    const RefreshToken = this.tokenService.generateRefreshToken(
      {
        sub: userAuth.userId,
        email: userAuth.email,
      }
    );


    return { user, AccessToken, RefreshToken }; //will be used to generate JWT token and return to client end
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

  async refreshToken(refreshToken: string) {
    if (!refreshToken)
      throw new UnauthorizedException("Missing tokens or device or IP address.");
    const payload = this.tokenService.verifyRefreshToken(refreshToken);

    if (payload.type !== 'refresh')
      throw new UnauthorizedException("Invalid token type.");

    const userRecord = await this.userRepo.findOne(payload.sub);
    if (!userRecord)
      throw new UnauthorizedException("Invalid! not found.");

    const authRecord = await this.authRepo.findUserByEmail(payload.email);
    if (!authRecord)
      throw new UnauthorizedException("Invalid! Auth associated to the email was not found.");

    const newAccessToken = this.tokenService.generateAccessToken({
      sub: userRecord.id,
      email: payload.email,
      userType: userRecord.userType, // This should ideally come from user roles/permissions management
      status: authRecord.accountStatus, // This should be replaced with actual device ID
    });

    const newRefreshToken = this.tokenService.generateRefreshToken({
      sub: userRecord.id,
      email: payload.email,
    });
    return {
      AccessToken: newAccessToken,
      RefreshToken: newRefreshToken
    };
  }
}
