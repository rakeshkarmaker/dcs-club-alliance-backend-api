import { Club } from '@prisma/client';
import { CreateClubDto } from '../dto/create-club.dto';
import { UpdateClubDto } from '../dto/update-club.dto';
import { IRepository } from '../../../common/interfaces/irepository.interface';

export interface IClubRepository
  extends IRepository<Club, CreateClubDto, UpdateClubDto> {
  // Interface for AuthRepository
  getAllMembers(clubId: number): Promise<Club[]>;
  
}
