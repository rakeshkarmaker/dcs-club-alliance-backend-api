import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsserRepository } from './repositories/user.repository';

@Module({
  controllers: [UsersController],
  providers: [
    UsersService,
    {
      provide: 'IUserRepository',
      useClass: UsserRepository,
    },
  ],
  exports: ['IUserRepository', UsersService],
})
export class UsersModule {}
