import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { JwtGuard } from 'src/auth/guard/jwt.guard';
import { Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(JwtGuard)
@Controller('user')
export class UserController {
  constructor(@InjectModel(User.name) private userService: UserService) {}

  @Get('me')
  @ApiBearerAuth('JWT-auth')
  getMe(@Req() req: Request) {
    if(req.user && req.user['userId']){
      let user =  this.userService.findById(req.user['userId'])
      return user
    }
    return req.user
  }
}
