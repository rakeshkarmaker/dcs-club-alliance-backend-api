import { Inject, Injectable } from '@nestjs/common';
import { CreateMembershipDto } from './dto/create-membership.dto';
import { UpdateMembershipDto } from './dto/update-membership.dto';
import type { IMembershipsRepository } from './interfaces/imemberships.repository';

@Injectable()
export class MembershipsService {
  constructor(
    @Inject('IMembershipsRepository')
    private readonly membershipsRepository: IMembershipsRepository) { }

  create(createMembershipDto: CreateMembershipDto) {
    return this.membershipsRepository.create(createMembershipDto);
  }

  findAll() {
    return this.membershipsRepository.findAll();
  }

  findOne(id: number) {
    return this.membershipsRepository.findOne(id);
  }

  update(id: number, updateMembershipDto: UpdateMembershipDto) {
    return this.membershipsRepository.update(id, updateMembershipDto);
  }

  remove(id: number) {
    return this.membershipsRepository.delete(id);
  }

  
}
