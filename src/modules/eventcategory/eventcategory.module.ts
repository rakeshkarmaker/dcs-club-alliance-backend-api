import { Module } from '@nestjs/common';
import { EventcategoryService } from './eventcategory.service';
import { EventcategoryController } from './eventcategory.controller';

@Module({
  controllers: [EventcategoryController],
  providers: [EventcategoryService],
})
export class EventcategoryModule {}
