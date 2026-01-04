import { ClubEvent } from './../../../../node_modules/.prisma/client/index.d';
import { IRepository } from '../../../common/interfaces/irepository.interface';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

export interface IEventsRepository
  extends IRepository<ClubEvent, CreateEventDto, UpdateEventDto> {
  // Interface for AuthRepository
  findBySlug(slug: string): Promise<ClubEvent | null>;
  findByDate(date: Date): Promise<ClubEvent[]>;
  findOngoingEvents(): Promise<ClubEvent[]>;
  findUpcomingEvents(): Promise<ClubEvent[]>;
  findPastEvents(): Promise<ClubEvent[]>;
}
