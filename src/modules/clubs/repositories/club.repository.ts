import { Injectable } from '@nestjs/common';
import { Club } from '@prisma/client';
import { BaseRepository } from 'src/common/repositories/base.repository';
import { CreateClubDto } from '../dto/create-club.dto';
import { UpdateClubDto } from '../dto/update-club.dto';
import { IClubRepository } from '../interfaces/iclub.repository';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClubRepository
  extends BaseRepository<Club, CreateClubDto, UpdateClubDto>
  implements IClubRepository
{
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.club);
  }
}
