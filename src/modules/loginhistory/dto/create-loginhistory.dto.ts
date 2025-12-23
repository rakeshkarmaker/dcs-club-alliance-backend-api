import { IsNumber, IsDate, IsString, MaxLength } from "class-validator";

export class CreateLoginhistoryDto {
  @IsNumber()
  readonly userId!: number;

  @IsDate()
  readonly loggedIn!: Date;

  @IsString()
  @MaxLength(45)
  readonly ipAddress!: string;
  @IsString()
  @MaxLength(100)
  location?: string;

  @IsString()
  @MaxLength(255)
  device?: string;
    
}
