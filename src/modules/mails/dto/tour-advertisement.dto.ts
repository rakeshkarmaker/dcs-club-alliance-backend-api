// v1.4.0 - Email promotional API system and email sending system added
import { IsEmail, IsString, IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class TourAdvertisementDto {
  @IsEmail()
  readonly mail!: string;

  @IsString()
  readonly tourName!: string;

  @IsString()
  readonly location!: string;

  @IsString()
  readonly description!: string;

  @Type(() => Number)
  @IsNumber()
  readonly price!: number;

  @IsOptional()
  @IsString()
  readonly imageUrl?: string;
}
