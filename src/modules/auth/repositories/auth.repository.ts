import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseRepository } from '../../../common/repositories/base.repository';
import { PrismaService } from '../../../prisma/prisma.service';
import { IAuthRepository } from '../interfaces/iauth.repository';
import { UserAuth } from '@prisma/client';
import { CreateAuthDto } from '../dto/create-auth.dto';

@Injectable()
export class AuthRepository
  extends BaseRepository<UserAuth, CreateAuthDto, any>
  implements IAuthRepository
{
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.userAuth);
  }

  async findUserByEmail(email: string): Promise<UserAuth | null> {
    const user = await this.prismaService.userAuth.findUnique({
      where: { email },
    });
    if (!user) return null;
    return user;
  }

  // async updateAccessInfo(data: UpdateAccesseDto): Promise<UserAuth> {
  //     const userAuth = await this.findUserByEmail(data.currentEmail);
  //     if (!userAuth) throw new NotFoundException('User not found');
  //     return this.prismaService.userAuth.update({
  //         where: { id: userAuth.id },
  //         data: {
  //             lastLoginDevice: data.lastLoginDevice,
  //             lastLoginIp: data.lastLoginIp,
  //             lastLoggedIn: data.lastLoggedin ?? new Date(),
  //             loginCount: { increment: 1 },
  //         },

  //     });
  // }
  // async getActivities(): Promise<userActivityDto[]>{
  //     const users = await this.model.findMany();

  //     return users;

  // }

  // async exists(id: number): Promise<boolean> {
  //     const count = await this.prismaService.user.count({
  //         where: { id },
  //     });
  //     return count > 0;
  // }

  // async registerNewUser(data: RegisterDto): Promise<UserAuth> {
  //     const saltOrRounds = 8;
  //     const hashedPassword = await bcrypt.hash(data.password, saltOrRounds);
  //     return this.prismaService.userAuth.create({
  //         data: {
  //             email: data.email,
  //             passwordHash: hashedPassword,
  //             createdAt: data.createdAt ?? new Date(),
  //             updatedAt: data.updatedAt ?? new Date(),
  //         },
  //     });
  // }

  // async loginUser(data: LoginDto): Promise<UserAuth | null> {
  //     try {
  //         const userAuth = await this.findUserByEmail(data.email);
  //         const isPasswordValid = await bcrypt.compare(data.password, userAuth.passwordHash);
  //         return isPasswordValid ? userAuth : null;
  //     } catch {
  //         return null; // email not found or error
  //     }
  // }

  // async updateEmail(data: UpdateEmailDto): Promise<UserAuth> {
  //     const userAuth = await this.findUserByEmail(data.currentEmail);
  //     return this.prismaService.userAuth.update({
  //         where: { id: userAuth.id },
  //         data: { email: data.newEmail },
  //     });
  // }

  // async updatePassword(data: UpdatePassDto): Promise<UserAuth> {
  //     const userAuth = await this.findUserByEmail(data.currentEmail);
  //     const hashedPassword = await bcrypt.hash(data.newPassword, 8);
  //     return this.prismaService.userAuth.update({
  //         where: { id: userAuth.id },
  //         data: { passwordHash: hashedPassword },
  //     });
  // }
}
