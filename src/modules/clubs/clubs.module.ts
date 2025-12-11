import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';
import { ClubRepository } from './repositories/club.repository';

@Module({
  controllers: [ClubsController],
  providers: [
    ClubsService,
    {
      provide: 'IClubRepository',
      useClass: ClubRepository,
    },
  ],
  exports: ['IClubRepository']//v3.2.0- Exporting IClubRepository for use in other modules
})
export class ClubsModule {}
