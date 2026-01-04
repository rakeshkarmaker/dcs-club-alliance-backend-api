

// import { IEventsRepository } from '../interfaces/ievents.repository';
 //3.3.0- Implemented
import { Injectable } from "@nestjs/common";
import { LoginActivity } from "@prisma/client";
import { IRepository } from "../../../common/interfaces/irepository.interface";
import { BaseRepository } from "../../../common/repositories/base.repository";
import { PrismaService } from "../../../prisma/prisma.service";
import { CreateActivityDto } from "../../activity/dto/create-activity.dto";
import { UpdateActivityDto } from "../../activity/dto/update-activity.dto";

@Injectable()
export class ClubRepository
  extends BaseRepository<LoginActivity,CreateActivityDto, UpdateActivityDto> implements IRepository<LoginActivity,CreateActivityDto, UpdateActivityDto> {
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.loginActivity);
  }
}
