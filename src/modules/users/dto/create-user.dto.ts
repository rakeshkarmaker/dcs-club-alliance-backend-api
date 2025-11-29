import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export enum UserType {
  // admin = 'admin', // Admin user type is commented out beacause admin users are not created via this DTO
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
  firstName: string;

  @ApiProperty({
    example: 'Karmaker',
    description: 'Last name of the user',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  @Matches(/^[A-Za-z]+$/, { message: 'Last name can only contain letters' })
  lastName: string;

  @ApiProperty({
    example: '2000-01-01',
    description: 'Date of birth of the user in YYYY-MM-DD format',
  })
  @IsDate()
  dateOfBirth: Date;

  @ApiProperty({
    example: '+8801712345678',
    description: 'Phone number in Bangladeshi format',
  })
  @IsString()
  @Matches(/^(?:\+8801|8801|01)[3-9][0-9]{8}$/)
  phoneNumber: string;

  @ApiProperty({
    example: 'profile.jpg',
    description: 'Optional profile image URL or file name',
    required: false,
  })
  @IsString()
  @IsOptional()
  @MinLength(8)
  @MaxLength(20)
  profileImage?: string;

  @ApiProperty({
    example: 'alumni',
    enum: UserType,
    description: 'User type, must be one of dcs, alumni, mentor, or other',
  })
  @IsString()
  @IsEnum(UserType, { message: 'Invalid user type' })
  userType: UserType;
}