import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) { }

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }

  @Get('slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.eventsService.findBySlug(slug);
  }
  @Get('date/:date')
  findByDate(@Param('date') date: string) {
    return this.eventsService.findByDate(new Date(date));
  }
  @Get('ongoing')
  findOngoingEvents() {
    return this.eventsService.findOngoingEvents();
  }
  @Get('upcoming')
  findUpcomingEvents() {
    return this.eventsService.findUpcomingEvents();
  }
  @Get('past')
  findPastEvents() {
    return this.eventsService.findPastEvents();
  }

}
