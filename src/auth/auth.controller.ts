import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { CustomLoggerService } from 'src/common/logger/logger.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';


@Controller('auth')
// @ApiTags('Auth')
export class AuthController {
constructor(private authService: AuthService,
    private logger: CustomLoggerService
    ) {}

    @Post('signup')
    @ApiOperation({ summary: 'Register new user' })
    @ApiResponse({
        status: 201,
        description: 'It will return the user in the response',
    })
    signup(@Body() dto: CreateUserDto) {
        return this.authService.signup(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('signin')
    signin(@Body() dto: AuthDto) {
        return this.authService.signin(dto);
    }

}
  