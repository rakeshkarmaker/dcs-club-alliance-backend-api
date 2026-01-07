

//v3.3.1-Added Dto
import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateNoticeDto {

  @ApiProperty({
    description: 'Club ID where the notice is published',
    example: 3,
  })
  @IsInt()
  clubId!: number;

  @ApiProperty({
    description: 'User ID who created the notice',
    example: 17,
  })
  @IsInt()
  userId!: number;

  @ApiProperty({
    description: 'Notice title',
    example: 'Weekly Club Meeting Announcement',
    maxLength: 150,
  })
  @IsString()
  @MinLength(5)
  @MaxLength(150)
  title!: string;

  @ApiProperty({
    description: 'Notice content / body',
    example: 'The weekly club meeting will be held on Friday at 6 PM in Room 204.',
  })
  @IsString()
  @MinLength(10)
  content!: string;
}
