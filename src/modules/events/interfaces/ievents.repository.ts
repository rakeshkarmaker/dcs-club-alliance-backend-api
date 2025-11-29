import { IRepository } from 'src/common/interfaces/irepository.interface';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';

export interface IEventsRepository
  extends IRepository<Event, CreateEventDto, UpdateEventDto> {
  // Interface for AuthRepository
}
