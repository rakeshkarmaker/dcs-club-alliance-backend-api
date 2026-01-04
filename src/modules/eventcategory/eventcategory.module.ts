import { Module } from '@nestjs/common';
import { EventcategoryService } from './eventcategory.service';
import { EventcategoryController } from './eventcategory.controller';
import { EventCategoryRepository } from './repositories/eventcategory.repository';

@Module({
  controllers: [EventcategoryController],
  providers: [EventcategoryService,
              { useClass: EventCategoryRepository, provide: 'IEventCategoryRepository' }
  ],
})
export class EventcategoryModule {}
