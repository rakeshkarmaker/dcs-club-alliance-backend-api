import { EventCategory } from "@prisma/client";
import { BaseRepository } from "../../../common/repositories/base.repository";
import { CreateEventcategoryDto } from "../dto/create-eventcategory.dto";
import { UpdateEventcategoryDto } from "../dto/update-eventcategory.dto";
import type { IEventCategoryRepository } from "../interfaces/ieventcategory.repository";
import { PrismaService } from "../../../prisma/prisma.service";



export class EventCategoryRepository extends BaseRepository<EventCategory,CreateEventcategoryDto,UpdateEventcategoryDto> 
    implements IEventCategoryRepository {
        
        constructor(private readonly prismaService: PrismaService){
            super(prismaService.eventCategory); // Here Super is required to call the BaseRepository constructor with the Prisma model{

        }

}
