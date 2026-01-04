import { Injectable } from '@nestjs/common';

import { IEventsRepository } from '../interfaces/ievents.repository';
import { CreateEventDto } from '../dto/create-event.dto';
import { UpdateEventDto } from '../dto/update-event.dto';
import { BaseRepository } from '../../../common/repositories/base.repository';
import { PrismaService } from '../../../prisma/prisma.service';
import { ClubEvent } from '@prisma/client'
@Injectable()
export class ClubRepository
  extends BaseRepository<ClubEvent, CreateEventDto, UpdateEventDto>
  implements IEventsRepository {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.clubEvent);
  }
  findBySlug(slug: string): Promise<ClubEvent | null> {

    return this.prismaService.clubEvent.findUnique({ where: { slug } });
  }
  findByDate(date: Date): Promise<ClubEvent[]> {
    return this.prismaService.clubEvent.findMany({ where: { createdAt: date } });
  }

  findOngoingEvents(): Promise<ClubEvent[]> {
    const now = new Date();
    return this.prismaService.clubEvent.findMany({
      where: {
        startTime: {
          lte: now,
        },
        endTime: {
          gte: now,
        },
      },
      orderBy: {
        startTime: 'asc',
      },
    });
  }

  findUpcomingEvents(): Promise<ClubEvent[]> {
    return this.prismaService.clubEvent.findMany({
      where: {
        startTime: {
          gte: new Date(),
        },
      },
      orderBy: {
        startTime: 'asc',
      },
    });
  }

  findPastEvents(): Promise<ClubEvent[]> {
    return this.prismaService.clubEvent.findMany({
      where: {
        endTime: {
          lt: new Date(),
        },
      },
      orderBy: {
        startTime: 'desc',
      },
    });
  }

}
