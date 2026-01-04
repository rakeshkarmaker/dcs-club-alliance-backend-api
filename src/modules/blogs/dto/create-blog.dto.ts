import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsArray,
  IsDate,
  IsInt,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBlogDto {

  @ApiProperty({
    description: 'Author user ID',
    example: 12,
  })
  @IsInt()
  userId!: number;

  @ApiProperty({
    description: 'Club ID associated with the blog',
    example: 3,
  })
  @IsInt()
  clubId!: number;

  @ApiProperty({
    description: 'Blog title',
    minLength: 5,
    maxLength: 150,
    example: 'How AI Is Transforming Modern Tourism',
  })
  @IsString()
  @MinLength(5)
  @MaxLength(150)
  title!: string;

  @ApiProperty({
    description: 'Main blog content (markdown or HTML)',
    example: 'Artificial Intelligence is reshaping how people travel...',
  })
  @IsString()
  @MinLength(20)
  content!: string;

  @ApiProperty({
    description: 'SEO-friendly unique slug',
    example: 'ai-transforming-modern-tourism',
  })
  @IsString()
  @MaxLength(200)
  slug!: string;

  @ApiPropertyOptional({
    description: 'Publish date (null = draft)',
    example: '2025-01-10T08:00:00.000Z',
  })
  @IsOptional()
  @Type(() => Date)
  @IsDate()
  publishedAt?: Date;

  @ApiProperty({
    description: 'Blog images (URLs)',
    example: [
      'https://cdn.site.com/blog/ai-1.png',
      'https://cdn.site.com/blog/ai-2.png',
    ],
    type: [String],
  })
  @IsArray()
  @IsUrl({}, { each: true })
  image!: string[];
}
