import { Module } from '@nestjs/common';
import { ActivityService } from './activity.service';
import { ActivityController } from './activity.controller';
import { ActivityRepository } from './repositories/activity.repository';

@Module({
  controllers: [ActivityController],
  providers: [ActivityService,
    {
      provide: 'IActivityRepository',
      useClass: ActivityRepository,
    }
  ],
  exports: ["IActivityRepository", ActivityRepository],
})
export class ActivitiesModule {}
