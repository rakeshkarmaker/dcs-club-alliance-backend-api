import { Activity } from '@prisma/client';
import { IRepository } from '../../../common/interfaces/irepository.interface';
import { CreateActivityDto } from '../dto/create-activity.dto';
import { UpdateActivityDto } from '../dto/update-activity.dto';

export interface IActivityRepository
  extends IRepository<Activity, CreateActivityDto, UpdateActivityDto> {
  // Interface for AuthRepository
  getActivitiesByClubId(clubId: number): Promise<Activity[]>;

}
