import { ApiProperty } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import {
  IsEmail,
  IsString,
  Matches,
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
  readonly email!: string;

  @ApiProperty({
    example: 'StrongPass@123',
    description: 'Password: present password.',
  })
  @IsString()
  @MinLength(1, { message: 'Password cannot be empty' })
  @MaxLength(20)
  @IsString({ message: 'Password must be a string' })
    @MinLength(8, { message: 'Password must be at least 8 characters' })
    @MaxLength(20, { message: 'Password must be at most 20 characters' })
    @Matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      { message: 'Password too weak' },
    )
  readonly password!: string;
}

//IntersectionType to combining/merging CreateAuthDto and CreateUserDto
export class RegisterDto extends IntersectionType(
  CreateAuthDto,
  CreateUserDto,
) {}
