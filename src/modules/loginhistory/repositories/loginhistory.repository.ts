import { Injectable } from "@nestjs/common";
import { BaseRepository } from "src/common/repositories/base.repository";
import { PrismaService } from "src/prisma/prisma.service";
import { IEventsRepository } from "../interfaces/ievents.repository";
import { CreateEventDto } from "../dto/create-event.dto";
import { UpdateEventDto } from "../dto/update-event.dto";




@Injectable()
export class ClubRepository extends BaseRepository<Event,CreateEventDto,UpdateEventDto> implements IEventsRepository {
    constructor(private readonly prismaService: PrismaService) {
        super(prismaService.event);
    }

}