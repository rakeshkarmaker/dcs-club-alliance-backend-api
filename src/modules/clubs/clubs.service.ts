import { Inject, Injectable } from '@nestjs/common';
import { CreateClubDto } from './dto/create-club.dto';
import { UpdateClubDto } from './dto/update-club.dto';
import type { IClubRepository } from './interfaces/iclub.repository';

 //3.3.0- Implemented ClubsService with dependency injection for IClubRepository
@Injectable()
export class ClubsService {
  constructor(
    @Inject('IClubRepository')
    private readonly clubRepository: IClubRepository
  ) {}
  create(createClubDto: CreateClubDto) {
    return this.clubRepository.create(createClubDto);
  }

  findAll() {
    return this.clubRepository.findAll();
  }

  findOne(id: number) {
    return this.clubRepository.findOne(id);
  }

  update(id: number, updateClubDto: UpdateClubDto) {
    return this.clubRepository.update(id, updateClubDto);
  }

  remove(id: number) {
    return this.clubRepository.delete(id);
  }
}
