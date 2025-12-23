
import { IsEmail, IsString } from 'class-validator';

export class SendMailDto {
  @IsEmail() // Ensuring email is valid
  readonly email!: string;

  @IsString() // Ensuring title is a string
  readonly title!: string;

  @IsString() // Ensuring message is a string
  readonly message!: string;
}
