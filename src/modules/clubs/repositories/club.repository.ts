import { Injectable } from '@nestjs/common';
import { Club } from '@prisma/client';
import { CreateClubDto } from '../dto/create-club.dto';
import { UpdateClubDto } from '../dto/update-club.dto';
import { IClubRepository } from '../interfaces/iclub.repository';
import { BaseRepository } from '../../../common/repositories/base.repository';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class ClubRepository extends BaseRepository<Club, CreateClubDto, UpdateClubDto> implements IClubRepository{
  constructor(private readonly prismaService: PrismaService) {
    super(prismaService.club);
  }

  async getAllMembers(clubId: number): Promise<Club[]> {
    return this.prismaService.club.findMany({
      where: {
        id: clubId,
      },
      include: {
        memberships: true,
      },
    });
  }
}
