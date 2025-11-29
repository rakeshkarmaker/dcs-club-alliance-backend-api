import { IRepository } from '../../../common/interfaces/irepository.interface'; // Importing the base repository interface
import { UserAuth } from '@prisma/client'; // Importing the UserAuth model from Prisma
import { CreateAuthDto } from '../dto/create-auth.dto';

export interface IAuthRepository
  extends IRepository<UserAuth, CreateAuthDto, any> {
  // Interface for AuthRepository

  // registerNewUser(data: RegisterDto): Promise<UserAuth>; // Method to create a new UserAuth
  // loginUser(data:LoginDto): Promise<UserAuth | null>; // Method to authenticate a UserAuth
  // update(id: number, data: UpdateUserDto>): Promise<UserAuth>; // Method to update an existing UserAuth
  // updateEmail(date: UpdateEmailDto): Promise<UserAuth>; // Method to update UserAuth email
  // updatePassword(data: UpdatePassDto): Promise<UserAuth>; // Method to update UserAuth password
  // updateAccessInfo(data: UpdateAccesseDto): Promise<UserAuth>; // Method to update UserAuth access information
  findUserByEmail(email: string): Promise<UserAuth | null>; // Method to find a UserAuth by email
  // getActivities(): Promise<userActivityDto[]>;
}
