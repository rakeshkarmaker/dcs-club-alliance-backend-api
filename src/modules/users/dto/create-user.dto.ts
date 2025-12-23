import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export enum UserType {
  dcs = 'dcs',
  alumni = 'alumni',
  mentor = 'mentor',
  other = 'other',
}

export class CreateUserDto {
  @ApiProperty({
    example: 'Raj',
    description: 'First name of the user',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  @Matches(/^[A-Za-z]+$/, { message: 'First name can only contain letters' })
  readonly firstName!: string;

  @ApiProperty({
    example: 'Karmaker',
    description: 'Last name of the user',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  @Matches(/^[A-Za-z]+$/, { message: 'Last name can only contain letters' })
  readonly lastName!: string;

  @ApiProperty({
    example: '2000-01-01',
    description: 'Date of birth of the user in YYYY-MM-DD format',
  })
  @Type(() => Date)
  @IsDate()
  readonly dateOfBirth!: Date;

  @ApiProperty({
    example: '+8801712345678',
    description: 'Phone number in Bangladeshi format',
  })
  @IsString()
  @Matches(/^(?:\+8801|8801|01)[3-9][0-9]{8}$/)
  readonly phoneNumber!: string;

  @ApiProperty({
    example: 'profile.jpg',
    description: 'Optional profile image URL or file name',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MinLength(8)
  @MaxLength(20)
  readonly profileImage?: string;

  @ApiProperty({
    example: 'alumni',
    enum: UserType,
    description: 'User type, must be one of dcs, alumni, mentor, or other',
  })
  @IsEnum(UserType, { message: 'Invalid user type' })
  readonly userType!: UserType;
}
