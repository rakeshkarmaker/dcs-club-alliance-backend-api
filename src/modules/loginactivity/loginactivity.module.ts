import { Module } from '@nestjs/common';
import { LoginactivityService } from './loginactivity.service';
import { LoginactivityController } from './loginactivity.controller';
 //3.3.0- Implemented
@Module({
  controllers: [LoginactivityController],
  providers: [LoginactivityService],
})
export class LoginactivityModule {}
