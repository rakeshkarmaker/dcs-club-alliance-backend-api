import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRepository } from './repositories/auth.repository';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AuthController } from './auth.controller';
import { UsserRepository } from '../users/repositories/user.repository';

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
      useClass: UsserRepository,
    },
  ],
  exports: ['IAuthRepository', AuthService],
})
export class AuthModule {}
