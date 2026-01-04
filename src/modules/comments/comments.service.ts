import { Inject, Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import type { ICommentsRepository } from './interfaces/icomment.Repositories';

@Injectable()
export class CommentsService {

  constructor(
    @Inject('ICommentRepository')
    private readonly CommentRepository: ICommentsRepository
  ){}

  create(createCommentDto: CreateCommentDto) {
    return this.CommentRepository.create(createCommentDto);
  }

  findAll() {
    return this.CommentRepository.findAll();
  }

  findOne(id: number) {
    return this.CommentRepository.findOne(id);
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return this.CommentRepository.update(id, updateCommentDto);
  }

  remove(id: number) {
    return this.CommentRepository.delete(id);
  }
}
