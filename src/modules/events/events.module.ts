import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';

@Module({
  controllers: [EventsController],
  providers: [EventsService,{
    provide: 'IEventsRepository',
    useClass: EventsService,
  }
  ],
})
export class EventsModule {}
