import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService,
    {
      provide: 'ICommentRepository',
      useClass: CommentsService,
    }
  ],
})
export class CommentsModule {}
