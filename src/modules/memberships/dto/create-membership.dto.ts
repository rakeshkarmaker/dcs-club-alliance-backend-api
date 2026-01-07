
//v3.3.1-Added Dto
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsInt } from 'class-validator';

export enum MembershipRole {
    precedent = 'precedent',
    moderator = 'moderator',
    member = 'member',
    unassigned = 'unassigned',
}

export enum MembershipStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  SUSPENDED = 'SUSPENDED',
}

export class CreateMembershipDto {

  @ApiProperty({
    description: 'User ID requesting or receiving club membership',
    example: 21,
  })
  @IsInt()
  userId!: number;

  @ApiProperty({
    description: 'Club ID the user wants to join',
    example: 5,
  })
  @IsInt()
  clubId!: number;

  @ApiPropertyOptional({
    description: 'Role of the user inside the club',
    enum: MembershipRole,
    example: MembershipRole.unassigned,
  })
  @IsEnum(MembershipRole)
  role?: MembershipRole;

  @ApiPropertyOptional({
    description: 'Membership approval status',
    enum: MembershipStatus,
    example: MembershipStatus.PENDING,
  })
  @IsEnum(MembershipStatus)
  status?: MembershipStatus;
}

