import { Module } from '@nestjs/common';
import { MembershipsService } from './memberships.service';
import { MembershipsController } from './memberships.controller';
import { MembershipsRepository } from './repositories/memberships.repository';

@Module({
  controllers: [MembershipsController],
  providers: [MembershipsService,
    {provide: 'IMembershipsRepository', useClass: MembershipsRepository}
  ],
})
export class MembershipsModule {}
