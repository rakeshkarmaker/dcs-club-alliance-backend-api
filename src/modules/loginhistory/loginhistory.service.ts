import { Injectable } from '@nestjs/common';
import { CreateLoginhistoryDto } from './dto/create-loginhistory.dto';
import { UpdateLoginhistoryDto } from './dto/update-loginhistory.dto';

@Injectable()
export class LoginhistoryService {
  create(createLoginhistoryDto: CreateLoginhistoryDto) {
    return 'This action adds a new loginhistory';
  }

  findAll() {
    return `This action returns all loginhistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loginhistory`;
  }

  update(id: number, updateLoginhistoryDto: UpdateLoginhistoryDto) {
    return `This action updates a #${id} loginhistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} loginhistory`;
  }
}
