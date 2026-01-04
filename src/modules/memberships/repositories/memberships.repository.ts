import { BaseRepository } from "../../../common/repositories/base.repository"
import { CreateMembershipDto } from "../dto/create-membership.dto"
import { UpdateMembershipDto } from "../dto/update-membership.dto"
import { IMembershipsRepository } from "../interfaces/imemberships.repository"
import { PrismaService } from '../../../prisma/prisma.service';
import { Membership, MembershipStatus, MembershipRole } from "@prisma/client";  
import { Injectable } from "@nestjs/common";


@Injectable()
export class MembershipsRepository extends BaseRepository<Membership, CreateMembershipDto, UpdateMembershipDto> implements IMembershipsRepository {
  // Implementation of MembershipsRepository methods

  constructor(private readonly prisma: PrismaService) {
    super(prisma.membership);
  }

    async findByUserId(userId: number): Promise<Membership[]> { 
        return this.prisma.membership.findMany({ where: { userId } });
    }

    async findByClubId(clubId: number): Promise<Membership[]> {
        return this.prisma.membership.findMany({ where: { clubId } });
    }
    async findByUserIdAndClubId(userId: number, clubId: number): Promise<Membership | null> {
        return this.prisma.membership.findFirst({ where: { userId, clubId } });
    }
    async findActiveMemberships(): Promise<Membership[]> {
        return this.prisma.membership.findMany({ where: { status: MembershipStatus.APPROVED } });
    }
    async findByStatus(status: MembershipStatus): Promise<Membership[]> {
        return this.prisma.membership.findMany({ where: { status } });
    }
    async findByRole(role: MembershipRole): Promise<Membership[]> {
        return this.prisma.membership.findMany({ where: { role } });
    }
    async findJoinedAfter(date: Date): Promise<Membership[]> {
        return this.prisma.membership.findMany({ where: { joinedAt: { gt: date } } });
    }


}