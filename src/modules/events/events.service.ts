import { Inject, Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import type { IEventsRepository } from './interfaces/ievents.repository';

@Injectable()
export class EventsService {
  constructor(
    @Inject('IEventsRepository')
    private readonly eventsRepository: IEventsRepository,
  ) { }
  create(createEventDto: CreateEventDto) {
    return this.eventsRepository.create(createEventDto);
  }

  findAll() {
    return this.eventsRepository.findAll();
  }

  findOne(id: number) {
    return this.eventsRepository.findOne(id);
  }

  update(id: number, updateEventDto: UpdateEventDto) {
    return this.eventsRepository.update(id, updateEventDto);
  }

  remove(id: number) {
    return this.eventsRepository.delete(id);
  }

  findBySlug(slug: string) {
    return this.eventsRepository.findBySlug(slug);
  }
  findByDate(date: Date) {
    return this.eventsRepository.findByDate(date);
  }
  findOngoingEvents() {
    return this.eventsRepository.findOngoingEvents();
  }
  findUpcomingEvents() {
    return this.eventsRepository.findUpcomingEvents();
  }
  findPastEvents() {
    return this.eventsRepository.findPastEvents();
  }
  
}
