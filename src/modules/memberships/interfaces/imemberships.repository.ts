import { Membership } from "@prisma/client";
import { IRepository } from "../../../common/interfaces/irepository.interface";
import { CreateMembershipDto } from "../dto/create-membership.dto";
import { UpdateMembershipDto } from "../dto/update-membership.dto";




export interface IMembershipsRepository extends IRepository<Membership, CreateMembershipDto, UpdateMembershipDto> {
  // Interface for MembershipsRepository
  
  // Returns ARRAY because a user can be in multiple clubs
  findByUserId(userId: number): Promise<Membership[]>;

  // Returns ARRAY because a club has many members
  findByClubId(clubId: number): Promise<Membership[]>;

  // Returns SINGLE because a user acts uniquely within one specific club
  findByUserIdAndClubId(userId: number, clubId: number): Promise<Membership | null>;

  // Filter methods
  findActiveMemberships(): Promise<Membership[]>;
  findByStatus(status: string): Promise<Membership[]>;
  findByRole(role: string): Promise<Membership[]>;
  
  // Replaces exact date match with a range or "Since" logic
  findJoinedAfter(date: Date): Promise<Membership[]>;
}