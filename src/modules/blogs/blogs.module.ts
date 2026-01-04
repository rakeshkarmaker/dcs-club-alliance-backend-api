import { Module } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { BlogsController } from './blogs.controller';
import { BlogRepository } from './repositories/blog.repository';

@Module({
  controllers: [BlogsController],
  providers: [BlogsService,
    {
      provide: 'IBlogRespository',
      useClass: BlogRepository,
    }
    ],
  exports: ['IBlogRespository', BlogRepository],
  
})
export class BlogsModule {}
