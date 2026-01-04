import { Module } from '@nestjs/common';
import { NoticesService } from './notices.service';
import { NoticesController } from './notices.controller';

@Module({
  controllers: [NoticesController],
  providers: [NoticesService,
    {provide: 'INoticeRepository', useClass: NoticesService}
  ],
})
export class NoticesModule {}
