import {
  IsEmail,
  MaxLength,
  IsDate,
  IsString,
  MinLength,
  Matches,
  IsNumber,
} from 'class-validator';

export class UpdateEmailDto {
  @IsEmail()
  @MaxLength(50)
  readonly currentEmail!: string;
  @IsEmail()
  @MaxLength(50)
  readonly newEmail!: string;

  @IsDate()
  readonly updatedAt!: Date;
}

export class UpdatePassDto {
  @IsEmail()
  @MaxLength(50)
  readonly currentEmail!: string;

  //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: 'Password too weak' },
  ) // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  currentPassword?: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    { message: 'Password too weak' },
  ) // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
  newPassword?: string;

  @IsDate()
  readonly updatedAt!: Date;
}
