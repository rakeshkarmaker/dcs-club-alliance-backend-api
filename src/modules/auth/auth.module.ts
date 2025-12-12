import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRepository } from './repositories/auth.repository';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../../prisma/prisma.module';
import { UserRepository } from '../users/repositories/user.repository';
import { TokenService } from './services/token.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule,
    JwtModule.register({ //v3.2.1- Added JwtModule registration
      secret: process.env.ACCESS_TOKEN_SECRET,
      signOptions: { expiresIn: '7d' },
    }),
  ],
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
    {
      provide: 'ITokenService',
      useClass: TokenService,
    }
  ],
  exports: ['IAuthRepository','ITokenService', JwtModule],
})
export class AuthModule {}
