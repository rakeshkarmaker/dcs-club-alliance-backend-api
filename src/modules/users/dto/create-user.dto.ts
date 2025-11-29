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
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  @Matches(/^[A-Za-z]+$/, { message: 'First name can only contain letters' })
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(30)
  @Matches(/^[A-Za-z]+$/, { message: 'Last name can only contain letters' })
  lastName: string;

  @IsDate()
  @IsDate() //Expects the value to be a string like "2025-11-28" or "2025-11-28T11:29:00Z".
  dateOfBirth: Date;

  @IsString()
  @Matches(/^(?:\+8801|8801|01)[3-9][0-9]{8}$/) //regexr.com/ to test regex
  phoneNumber: string;

  @IsString()
  @IsOptional()
  @MinLength(8)
  @MaxLength(20)
  profileImage: string;

  @IsString()
  @IsEnum(UserType, { message: 'Invalid user type' })
  userType: UserType;
}
