import {
  IsEmail,
  MaxLength,
  IsString,
  IsDate,
  IsNumber,
} from 'class-validator';

export class CreateActivityDto {
  @IsString()
  @MaxLength(100)
  title:string;
  
  @IsString()
  @MaxLength(500)
  description:string;
  

  images:string[];

  @IsNumber()
  userID: number;

}
