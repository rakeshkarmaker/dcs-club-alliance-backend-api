import { Injectable } from '@nestjs/common';
import { Activity, Club } from '@prisma/client';
import { BaseRepository } from '../../../common/repositories/base.repository';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateActivityDto } from '../dto/create-activity.dto';
import { UpdateActivityDto } from '../dto/update-activity.dto';
import { IActivityRepository } from '../interfaces/iactivity.repository';

@Injectable()
export class ActivityRepository extends BaseRepository<Activity, CreateActivityDto, UpdateActivityDto> implements IActivityRepository{
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.activity);
  }
  getActivitiesByClubId(clubId: number): Promise<Activity[]> {
    return this.prismaService.activity.findMany({
      where:{
        clubId: clubId
      }
    });
  }
}
