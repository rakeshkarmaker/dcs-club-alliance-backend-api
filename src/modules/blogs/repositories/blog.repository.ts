import { BaseRepository } from '../../../common/repositories/base.repository';
import { CreateBlogDto } from '../dto/create-blog.dto';
import { UpdateBlogDto } from '../dto/update-blog.dto';
import { IBlogRespository } from '../interfaces/iblog.repository';
import { PrismaService } from '../../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Blog } from '@prisma/client';

 //3.3.0- Implemented
@Injectable()
export class BlogRepository 
extends BaseRepository<Blog, CreateBlogDto, UpdateBlogDto> implements IBlogRespository{

    constructor(private readonly PrismaService:PrismaService) {
        super(PrismaService.blog);
    }
}