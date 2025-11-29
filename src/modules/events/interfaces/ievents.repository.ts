import { IRepository } from '../../../common/interfaces/irepository.interface';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

export interface IEventsRepository
  extends IRepository<Event, CreateEventDto, UpdateEventDto> {
  // Interface for AuthRepository
  findBySlug(slug: string): Promise<Event | null>;
  findByDate(date: Date): Promise<Event[]>;
  findUpcomingEvents(): Promise<Event[]>;
}
