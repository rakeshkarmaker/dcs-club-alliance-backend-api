import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsObject,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateFormDto { //v3.3.1-Added Dto

  @ApiProperty({
    description: 'Event ID this form belongs to',
    example: 12,
  })
  @IsInt()
  eventId!: number;

  @ApiProperty({
    description: 'Event category ID',
    example: 4,
  })
  @IsInt()
  categoryId!: number;

  @ApiProperty({
    description: 'Form title',
    example: 'Participant Registration Form',
    maxLength: 150,
  })
  @IsString()
  @MinLength(5)
  @MaxLength(150)
  title!: string;

  @ApiProperty({
    description: 'Dynamic form schema in JSON format',
    example: {
      fields: [
        { name: 'fullName', type: 'text', required: true },
        { name: 'email', type: 'email', required: true },
        { name: 'phone', type: 'text' }
      ]
    },
  })
  @IsObject()
  schemaJson!: Record<string, any>;
}
