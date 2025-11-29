import { Injectable } from '@nestjs/common';

import { UpdateUserDto } from '../dto/update-user.dto';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '@prisma/client';
import { BaseRepository } from '../../../common/repositories/base.repository';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class UserRepository extends BaseRepository<
  User,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(private readonly prismaService: PrismaService) {
    // Injecting PrismaService to interact with the database
    super(prismaService.user); // Calling the parent constructor with the user model
  }

  async findUserId(email: string): Promise<User | null> {
    const userAuth = await this.prismaService.userAuth.findUnique({
      where: { email },
    });
    if (!userAuth || !userAuth.userId) return null;
    const user = this.prismaService.user.findUnique({
      where: { id: userAuth.userId },
    });
    return user;
  }
}
