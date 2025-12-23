import { Injectable } from '@nestjs/common';
import { CreateEventcategoryDto } from './dto/create-eventcategory.dto';
import { UpdateEventcategoryDto } from './dto/update-eventcategory.dto';

@Injectable()
export class EventcategoryService {
  create(createEventcategoryDto: CreateEventcategoryDto) {
    return 'This action adds a new eventcategory';
  }

  findAll() {
    return `This action returns all eventcategory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} eventcategory`;
  }

  update(id: number, updateEventcategoryDto: UpdateEventcategoryDto) {
    return `This action updates a #${id} eventcategory`;
  }

  remove(id: number) {
    return `This action removes a #${id} eventcategory`;
  }
}
