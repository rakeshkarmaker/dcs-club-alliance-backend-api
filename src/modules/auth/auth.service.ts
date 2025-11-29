import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import type { IAuthRepository } from './interfaces/iauth.repository';
import type { IUserRepository } from '../users/interfaces/iuser.repository';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { UpdateEmailDto, UpdatePassDto } from './dto/update-auth.dto';
import * as bcrypt from 'bcrypt';
import { UserAuth } from '@prisma/client';
@Injectable()
export class AuthService {

    constructor(
        @Inject('IAuthRepository')
        private readonly authRepo: IAuthRepository,
        @Inject('IUserRepository')
        private readonly userRepo: IUserRepository,
    ) {}

    async findUserByEmail(email: string) {
        return this.authRepo.findUserByEmail(email);
    }

    async register(data: RegisterDto): Promise<UserAuth> {
        
        if (await this.authRepo.findUserByEmail(data.email)) {
            throw new UnauthorizedException('Email already in use');
        }
        
        const saltOrRounds :number = Number(process.env.HASHING_SECRET);
        const hashedPassword:string = await bcrypt.hash(data.password, saltOrRounds);

        const user = await this.userRepo.create({
            firstName: data.firstName, lastName: data.lastName, userType: data.userType,
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
        if (!email || !password)throw new UnauthorizedException('Email and password are required');

        const user = await this.findUserByEmail(email);
        if (!user) throw new UnauthorizedException('Invalid Email or password');

        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) throw new UnauthorizedException('Invalid Email or password');
        // Also  check if user account is active, not locked, etc. if needed but I think that is for the controller right? 
        // Login successful and we will register the device, ip and other access info later
        
        return user; //will be used to generate JWT token and return to client end
    }

    async updatePassword(data: UpdatePassDto): Promise<UserAuth> {
        const user = await this.findUserByEmail(data.currentEmail);
        if (!user) throw new UnauthorizedException('User not found');

        const saltOrRounds = process.env.HASHING_SECRET;
        const hashedPassword = await bcrypt.hash(data.newPassword, saltOrRounds);
        return this.authRepo.update(user.id, { password: hashedPassword,updatedAt: data.updatedAt });
    }

    async updateEmail(data: UpdateEmailDto): Promise<UserAuth> {
        if(data.currentEmail === data.newEmail) throw new UnauthorizedException('New email cannot be the same as current email');

        const user = await this.findUserByEmail(data.currentEmail);
        if (!user) throw new UnauthorizedException('User not found');

        return this.authRepo.update(user.id, { email: data.newEmail,updatedAt: data.updatedAt });
    }


    
}
