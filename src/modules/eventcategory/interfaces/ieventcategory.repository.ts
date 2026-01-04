import { EventCategory } from '@prisma/client';
import { IRepository } from '../../../../dist/common/interfaces/irepository.interface';
import { UpdateEventcategoryDto } from '../dto/update-eventcategory.dto';
import { CreateEventcategoryDto } from '../dto/create-eventcategory.dto';



export interface IEventCategoryRepository extends IRepository<EventCategory,CreateEventcategoryDto,UpdateEventcategoryDto>{
}