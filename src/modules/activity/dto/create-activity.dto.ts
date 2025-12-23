import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  MaxLength,
  IsArray,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateActivityDto {
  @ApiProperty({
    example: 'Community Hackathon Event',
    description: 'Short title of the activity',
    maxLength: 100,
  })
  @IsString()
  @MaxLength(100)
  readonly title!: string;

  @ApiProperty({
    example:
      'A collaborative coding event focused on building innovative web and AI solutions within 24 hours.',
    description: 'Detailed description of the activity',
    maxLength: 500,
  })
  @IsString()
  @MaxLength(500)
  readonly description!: string;

  @ApiProperty({
    example: [
      'https://example.com/uploads/activity1.jpg',
      'https://example.com/uploads/activity2.jpg',
    ],
    description: 'List of image URLs',
    isArray: true,
  })
  @IsArray()
  @IsString({ each: true }) // Here, we specify that each element in the array should be a string
  readonly images!: string[];

  @ApiProperty({
    example: 105,
    description: 'ID of the user who created the activity',
  })
  @Type(() => Number) // Here, we transform the input to a number
  @IsNumber()
  readonly userID!: number;
}




// import { ApiProperty } from '@nestjs/swagger';
// import {
//   IsEmail,
//   MaxLength,
//   IsString,
//   IsDate,
//   IsNumber,
//   IsArray,
// } from 'class-validator';

// export class CreateActivityDto {
//   @ApiProperty({
//     example: "Community Hackathon Event",
//     description: "Short title of the activity",
//     maxLength: 100
//   })
//   @IsString()
//   @MaxLength(100)
//   title: string;

//   @ApiProperty({
//     example: "A collaborative coding event focused on building innovative web and AI solutions within 24 hours.",
//     description: "Detailed description of the activity",
//     maxLength: 500
//   })
//   @IsString()
//   @MaxLength(500)
//   description: string;

//   @ApiProperty({
//     example: [
//       "https://example.com/uploads/activity1.jpg",
//       "https://example.com/uploads/activity2.jpg"
//     ],
//     description: "List of image URLs",
//     isArray: true
//   })
//   @IsArray()
//   images: string[];

//   @ApiProperty({
//     example: 105,
//     description: "ID of the user who created the activity"
//   })
//   @IsNumber()
//   userID: number;

// }
