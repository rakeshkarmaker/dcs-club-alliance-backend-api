import { IsNumber, IsDate, IsString, MaxLength } from "class-validator";

export class CreateLoginhistoryDto {
  @IsNumber()
  userId: number;

  @IsDate()
  loggedIn: Date;

  @IsString()
  @MaxLength(45)
  ipAddress: string;

  @IsString()
  @MaxLength(100)
  location?: string;

  @IsString()
  @MaxLength(255)
  device?: string;
    
}
