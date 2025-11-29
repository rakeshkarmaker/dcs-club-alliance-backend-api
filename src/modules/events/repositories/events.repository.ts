import { Injectable } from '@nestjs/common';

import { IEventsRepository } from '../interfaces/ievents.repository';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { BaseRepository } from '../../../common/repositories/base.repository';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ClubRepository
  extends BaseRepository<Event, CreateEventDto, UpdateEventDto>
  implements IEventsRepository
{
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.event);
  }
  findBySlug(slug: string): Promise<Event | null> {
    throw new Error('Method not implemented.');
  }
  findByDate(date: Date): Promise<Event[]> {
    throw new Error('Method not implemented.');
  }
  findUpcomingEvents(): Promise<Event[]> {
    throw new Error('Method not implemented.');
  }
}
