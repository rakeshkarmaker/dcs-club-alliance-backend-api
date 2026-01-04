import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsString,
  MinLength,
  MaxLength,
} from 'class-validator';

 //3.3.0- Implemented CreateCommentDto with validation and Swagger documentation
export class CreateCommentDto {

  @ApiProperty({
    description: 'Blog ID where the comment is posted',
    example: 15,
  })
  @IsInt()
  blogId!: number;

  @ApiProperty({
    description: 'User ID of the commenter',
    example: 42,
  })
  @IsInt()
  userId!: number;

  @ApiProperty({
    description: 'Comment text',
    minLength: 1,
    maxLength: 1000,
    example: 'Great article, very insightful!',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(1000)
  text!: string;
}
