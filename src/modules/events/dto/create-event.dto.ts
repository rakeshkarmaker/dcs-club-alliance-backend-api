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
  clubId: number;

  @ApiProperty({ example: "Annual Tech Fest" })
  @IsString()
  title: string;

  @ApiProperty({ example: "A celebration of technology and innovation." })
  @IsString()
  description: string;

  @ApiProperty({
    example: "2025-12-20T10:00:00.000Z",
    type: String,
    description: "ISO date string"
  })
  @IsDate()
  startTime: Date;

  @ApiProperty({
    example: "2025-12-20T15:00:00.000Z",
    type: String,
    description: "ISO date string"
  })
  @IsDate()
  endTime: Date;

  @ApiPropertyOptional({
    example: "https://forms.gle/abcd1234"
  })
  @IsOptional()
  @IsString()
  formLink?: string;

  @ApiProperty({ example: "Auditorium Hall A" })
  @IsString()
  venue: string;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isFree?: boolean;

  @ApiPropertyOptional({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ example: 500 })
  @IsNumber()
  fee: number;
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
    