import { Module } from '@nestjs/common';
import { FormresponsesService } from './formresponses.service';
import { FormresponsesController } from './formresponses.controller';

@Module({
  controllers: [FormresponsesController],
  providers: [FormresponsesService],
})
export class FormresponsesModule {}
