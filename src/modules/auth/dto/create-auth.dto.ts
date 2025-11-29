import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";
import { IsEmail, IsDate, IsNotEmpty, isNotEmpty, IsOptional, IsString, Length, Matches, MaxLength, MinLength, IsDateString } from "class-validator";
// import { CreateUserDto } from "src/modules/users/dto/create-user.dto";



export class CreateAuthDto {

    @ApiProperty({ example: 'raj@example.com', description: 'User email address' })
    @IsNotEmpty()
    @IsEmail()
    @MaxLength(50)
    email: string;

    //Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    @ApiProperty({
        example: 'StrongPass@123',
        description: 'Password: minimum 8 Char, Uppercase, Lowercase, Number, Special Char.'
    })
    @IsString()
    @MinLength(8)
    @MaxLength(20)
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, { message: 'Password too weak' }) // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character
    password: string;

    userId: number;
}
