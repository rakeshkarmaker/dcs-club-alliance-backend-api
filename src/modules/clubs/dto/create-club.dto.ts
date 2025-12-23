//v3.2.1-  Added DTO for creating a new club
import { 
  IsString, 
  IsOptional 
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateClubDto {
  @ApiProperty({ example: "AI Club" })
  @IsString()
  readonly name!: string;

  @ApiProperty({ example: "ai-club" })
  @IsString()
  readonly slug!: string;

  @ApiProperty({ example: "To promote AI learning" })
  @IsString()
  readonly mission!: string;

  @ApiProperty({ example: "To become a leading AI community" })
  @IsString()
  readonly vision!: string;
  @ApiProperty({ example: "We organize workshops, seminars, and competitions." })
  @IsString()
  readonly description!: string;

  @ApiPropertyOptional({ example: "https://cdn.example.com/logos/aiclub.png" })
  @IsOptional()
  @IsString()
  logo?: string;

  @ApiPropertyOptional({ example: "https://cdn.example.com/banners/aiclub-banner.png" })
  @IsOptional()
  @IsString()
  banner?: string;

  @ApiPropertyOptional({ example: 12 })
  @IsOptional()
  mentorId?: number;
}
