import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { ClubRepository } from './repositories/club.repository';

@Module({
  controllers: [ClubsController],
  providers: [ClubsService,
    {
      provide: 'IClubRepository',
      useClass: ClubRepository,
    },
  ],
  // exports: ['IClubRepository', ClubRepository]
})
export class ClubsModule { }
