import { Injectable } from '@nestjs/common';
import { CreateFormresponseDto } from './dto/create-formresponse.dto';
import { UpdateFormresponseDto } from './dto/update-formresponse.dto';

@Injectable()
export class FormresponsesService {
  create(createFormresponseDto: CreateFormresponseDto) {
    return 'This action adds a new formresponse';
  }

  findAll() {
    return `This action returns all formresponses`;
  }

  findOne(id: number) {
    return `This action returns a #${id} formresponse`;
  }

  update(id: number, updateFormresponseDto: UpdateFormresponseDto) {
    return `This action updates a #${id} formresponse`;
  }

  remove(id: number) {
    return `This action removes a #${id} formresponse`;
  }
}
