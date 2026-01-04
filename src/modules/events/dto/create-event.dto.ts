import {
  IsString,
  IsDate,
  IsNumber,
  IsBoolean,
  IsOptional,
  ValidateIf
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateEventDto {

  @ApiProperty({ example: 1 })
  @IsNumber()
  readonly clubId!: number;

  @ApiProperty({ example: 'Annual Tech Fest' })
  @IsString()
  readonly title!: string;

  @ApiProperty({ example: 'A celebration of technology and innovation.' })
  @IsString()
  readonly description!: string;

  @ApiProperty({ example: '2025-12-20T10:00:00.000Z' })
  @Type(() => Date)
  @IsDate()
  readonly startTime!: Date;

  @ApiProperty({ example: '2025-12-20T15:00:00.000Z' })
  @Type(() => Date)
  @IsDate()
  readonly endTime!: Date;

  @ApiProperty({ example: 'Auditorium Hall A' })
  @IsString()
  readonly venue!: string;

  @ApiPropertyOptional({ example: 'https://forms.gle/abcd1234' })
  @IsOptional()
  @IsString()
  readonly formLink?: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  readonly isFree?: boolean;

  @ValidateIf(o => o.isFree === false)
  @IsNumber()
  readonly fee?: number;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;
}
