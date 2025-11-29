import { Club } from '@prisma/client';
import { IRepository } from 'src/common/interfaces/irepository.interface';
import { CreateClubDto } from '../dto/create-club.dto';
import { UpdateClubDto } from '../dto/update-club.dto';

export interface IClubRepository
  extends IRepository<Club, CreateClubDto, UpdateClubDto> {
  // Interface for AuthRepository
}
