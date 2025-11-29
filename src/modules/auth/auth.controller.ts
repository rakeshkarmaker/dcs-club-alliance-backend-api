import { Controller,Post,Body, Patch } from '@nestjs/common';
import { UpdateEmailDto, UpdatePassDto } from './dto/update-auth.dto';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService:AuthService){};;
    
    // @Post('signup')
    @Post('register')
    async registerUser(@Body() registerDto: RegisterDto) {
        // Registration logic here
        return this.authService.register(registerDto);
    }

    @Post('login')
    async loginUser(@Body() loginDto: LoginDto){
        return this.authService.login(loginDto);
    }

    @Patch('update-email')
    async updateEmail(@Body () updateEmailDto: UpdateEmailDto){
        return this.authService.updateEmail(updateEmailDto);
    }

    @Patch('forgot-password')
    async updatePassword(@Body () updatePassDto: UpdatePassDto){
        return this.authService.updatePassword(updatePassDto);
    }
    
}

