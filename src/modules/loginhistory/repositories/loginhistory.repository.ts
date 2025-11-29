import { Injectable } from '@nestjs/common';
import { IRepository } from 'src/common/interfaces/irepository.interface';
import { BaseRepository } from 'src/common/repositories/base.repository';
import { CreateEventDto } from 'src/modules/events/dto/create-event.dto';
import { UpdateEventDto } from 'src/modules/events/dto/update-event.dto';
import { PrismaService } from 'src/prisma/prisma.service';
// import { IEventsRepository } from '../interfaces/ievents.repository';

@Injectable()
export class ClubRepository
  extends BaseRepository<Event, CreateEventDto, UpdateEventDto> implements IRepository<Event, CreateEventDto, UpdateEventDto> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.event);
  }
}
