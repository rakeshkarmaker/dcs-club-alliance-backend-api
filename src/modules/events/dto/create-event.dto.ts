import { 
  IsString, 
  IsDate, 
  IsNumber, 
  IsBoolean, 
  IsOptional 
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ example: 1 })
  @IsNumber()
  readonly clubId!: number;

  @ApiProperty({ example: "Annual Tech Fest" })
  @IsString()
  readonly title!: string;
  @ApiProperty({ example: "A celebration of technology and innovation." })
  @IsString()
  readonly description!: string;

  @ApiProperty({
    example: "2025-12-20T10:00:00.000Z",
    type: String,
    description: "ISO date string"
  })
  @IsDate()
  readonly startTime!: Date;

  @ApiProperty({
    example: "2025-12-20T15:00:00.000Z",
    type: String,
    description: "ISO date string"
  })
  @IsDate()
  readonly endTime!: Date;

  @ApiPropertyOptional({
    example: "https://forms.gle/abcd1234"
  })
  @IsOptional()
  @IsString()
  readonly formLink?: string;

  @ApiProperty({ example: "Auditorium Hall A" })
  @IsString()
  readonly venue!: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  readonly isFree?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  readonly isActive?: boolean;

  @ApiProperty({ example: 500 })
  @IsNumber()
  readonly fee!: number;
}



//       clubId      Int      @map("club_id")
//   title       String
//   description String
//   startTime   DateTime @map("start_time")
//   endTime     DateTime @map("end_time")
//   venue       String
//   fee         Float
//   formLink    String?  @map("form_link")
//   isFree    Boolean  @default(true) @map("is_free")
//   isActive  Boolean  @default(true) @map("is_active")
    