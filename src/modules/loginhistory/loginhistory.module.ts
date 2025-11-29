import { Module } from '@nestjs/common';
import { LoginhistoryService } from './loginhistory.service';
import { LoginhistoryController } from './loginhistory.controller';

@Module({
  controllers: [LoginhistoryController],
  providers: [LoginhistoryService],
})
export class LoginhistoryModule {}
