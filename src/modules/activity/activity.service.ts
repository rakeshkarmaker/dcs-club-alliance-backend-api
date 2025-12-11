import { Inject, Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import type { IActivityRepository } from './interfaces/iactivity.repository';

@Injectable()
export class ActivityService {

  constructor(
    @Inject('IActivityRepository')
    private readonly activityRepository: IActivityRepository) {}
  create(createActivityDto: CreateActivityDto) {
    return this.activityRepository.create(createActivityDto);
  }
  getByClub(clubId: number) {
    return this.activityRepository.getActivitiesByClubId(clubId);
  }

  findAll() {
    return this.activityRepository.findAll();
  }

  findOne(id: number) {
    return this.activityRepository.findOne(id);
  }

  update(id: number, updateActivityDto: UpdateActivityDto) {
    return this.activityRepository.update(id, updateActivityDto);
  }

  remove(id: number) {
    return this.activityRepository.delete(id);
  }
}
