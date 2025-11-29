import { IsDate, IsEmail, IsString, MaxLength } from 'class-validator';

export class userActivityDto {
  @IsEmail()
  @MaxLength(50)
  currentEmail: string;
  // @IsNumber()
  // userId: number;

  @IsString()
  @MaxLength(255)
  lastLoginDevice?: string;

  @IsString()
  @MaxLength(45)
  lastLoginIp: string;

  @IsString()
  @MaxLength(100)
  lastLoginLocation: string;

  @IsDate()
  lastLoggedin: Date;
}
