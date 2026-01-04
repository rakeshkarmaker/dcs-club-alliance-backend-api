import { Inject, Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import type { IBlogRespository } from './interfaces/iblog.repository';

@Injectable()
export class BlogsService {

  constructor(
    @Inject('IBlogRespository')
    private readonly blogRepository: IBlogRespository
  ){}
  create(createBlogDto: CreateBlogDto) {
    return this.blogRepository.create(createBlogDto);
  }

  findAll() {
    return this.blogRepository.findAll();
  }
  

  findOne(id: number) {
    return this.blogRepository.findOne(id);
  }

  update(id: number, updateBlogDto: UpdateBlogDto) {
    return this.blogRepository.update(id, updateBlogDto);
  }

  remove(id: number) {
    return this.blogRepository.delete(id);
  }
}


