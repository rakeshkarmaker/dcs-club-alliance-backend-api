import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDate, IsNumber, IsString, MaxLength, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

 //3.3.0- Implemented
export class CreateLoginactivityDto {

  @ApiProperty({
    description: 'ID of the user who logged in',
    example: 101,
  })
  @IsNumber()
  readonly userId!: number;

  @ApiProperty({
    description: 'Login timestamp',
    example: '2025-01-01T12:30:00.000Z',
  })
  @Type(() => Date)
  @IsDate()
  readonly loggedIn!: Date;

  @ApiProperty({
    description: 'IP address of the user',
    maxLength: 45,
    example: '103.45.67.89',
  })
  @IsString()
  @MaxLength(45)
  readonly ipAddress!: string;

  @ApiPropertyOptional({
    description: 'Geographical location inferred from IP',
    maxLength: 100,
    example: 'Dhaka, Bangladesh',
  })
  @IsOptional()
  @IsString()
  @MaxLength(100)
  location?: string;

  @ApiPropertyOptional({
    description: 'Device or browser information',
    maxLength: 255,
    example: 'Chrome 121 on Windows 11',
  })
  @IsOptional()
  @IsString()
  @MaxLength(255)
  device?: string;
}
