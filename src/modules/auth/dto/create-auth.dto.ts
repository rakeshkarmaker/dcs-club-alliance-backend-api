import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsEmail, MaxLength, MinLength, Matches, IsString, IsInt } from 'class-validator';

export class CreateAuthDto {
  @ApiProperty({
    example: 'raj@example.com',
    description: 'User email address',
  })
  @IsNotEmpty({ message: 'Email is required' })
  @IsEmail({}, { message: 'Email must be valid' })
  @MaxLength(50, { message: 'Email must be at most 50 characters' })
  email: string;

  @ApiProperty({
    example: 'StrongPass@123',
    description:
      'Password: minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special character.',
  })
  @IsString({ message: 'Password must be a string' })
  @MinLength(8, { message: 'Password must be at least 8 characters' })
  @MaxLength(20, { message: 'Password must be at most 20 characters' })
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: 'Password too weak' },
  )
  password: string;

  userId?: number;
}
