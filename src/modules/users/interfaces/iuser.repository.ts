import { IRepository } from 'src/common/interfaces/irepository.interface';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '@prisma/client';

export interface IUserRepository
  extends IRepository<User, CreateUserDto, UpdateUserDto> {
  findUserId(email: string): Promise<User | null>;
}
