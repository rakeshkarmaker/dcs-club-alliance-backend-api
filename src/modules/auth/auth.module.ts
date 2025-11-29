import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRepository } from './repositories/auth.repository';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { UserRepository } from '../users/repositories/user.repository';

@Module({
  imports: [PrismaModule],
  controllers: [AuthController],
  providers: [
    AuthService,
    {
      provide: 'IAuthRepository',
      useClass: AuthRepository,
    },
    {
      provide: 'IUserRepository',
      useClass: UserRepository,
    },
  ],
  exports: ['IAuthRepository', AuthService],
})
export class AuthModule {}
