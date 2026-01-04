import { Inject, Injectable } from '@nestjs/common';
import { CreateNoticeDto } from './dto/create-notice.dto';
import { UpdateNoticeDto } from './dto/update-notice.dto';
import type { INoticeRepository } from './interfaces/inotices.repository';

@Injectable()
export class NoticesService {
  constructor(
    @Inject('INoticeRepository')
    private readonly noticeRepository: INoticeRepository
  ){}
  create(createNoticeDto: CreateNoticeDto) {
    return this.noticeRepository.create(createNoticeDto);
  }

  findAll() {
    return this.noticeRepository.findAll();
  }

  findOne(id: number) {
    return this.noticeRepository.findOne(id);
  }

  update(id: number, updateNoticeDto: UpdateNoticeDto) {
    return this.noticeRepository.update(id, updateNoticeDto);
  }

  remove(id: number) {
    return this.noticeRepository.delete(id);
  }
}
