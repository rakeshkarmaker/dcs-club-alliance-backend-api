import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import {
  IsEmail,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { CreateAuthDto } from './create-auth.dto';
// import { IntersectionType } from '@nestjs/mapped-types';
import { IntersectionType } from '@nestjs/swagger';
import { CreateUserDto } from '../../users/dto/create-user.dto';

export class LoginDto {
  @ApiProperty({
    example: 'raj@example.com',
    description: 'Existing email address',
  })
  @IsEmail()
  @MaxLength(50)
  email: string;

  @ApiProperty({
    example: 'StrongPass@123',
    description: 'Password: present password.',
  })
  @IsString()
  @MinLength(1, { message: 'Password cannot be empty' })
  @MaxLength(20)
  password: string;
}

//IntersectionType to combining/merging CreateAuthDto and CreateUserDto
export class RegisterDto extends IntersectionType(
  CreateAuthDto,
  CreateUserDto,
) {}
