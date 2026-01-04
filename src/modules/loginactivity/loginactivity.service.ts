import { Injectable } from '@nestjs/common';
import { CreateLoginactivityDto } from './dto/create-loginactivity.dto';
import { UpdateLoginactivityDto } from './dto/update-loginactivity.dto';
 //3.3.0- Implemented
@Injectable()
export class LoginactivityService {
  create(createLoginactivityDto: CreateLoginactivityDto) {
    return 'This action adds a new loginactivity';
  }

  findAll() {
    return `This action returns all loginactivity`;
  }

  findOne(id: number) {
    return `This action returns a #${id} loginactivity`;
  }

  update(id: number, updateLoginactivityDto: UpdateLoginactivityDto) {
    return `This action updates a #${id} loginactivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} loginactivity`;
  }
}
