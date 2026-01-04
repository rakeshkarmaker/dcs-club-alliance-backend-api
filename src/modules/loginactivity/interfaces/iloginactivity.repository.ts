import { LoginActivity } from '@prisma/client';
import { IRepository } from '../../../common/interfaces/irepository.interface';
import { PrismaService } from '../../../prisma/prisma.service';
import { CreateActivityDto } from '../../activity/dto/create-activity.dto';
import { UpdateActivityDto } from '../../activity/dto/update-activity.dto';

export interface ILoginActivityRepository extends IRepository<LoginActivity,CreateActivityDto, UpdateActivityDto> {
 //3.3.0- Define additional methods specific to LoginHistory if needed
  
}   
