import { ForbiddenException, HttpException, Injectable, } from '@nestjs/common';
import { AuthDto } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { MongooseError } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { UserService } from 'src/user/user.service';
import { CustomLoggerService } from 'src/common/logger/logger.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
  
@Injectable()
export class AuthService {
	constructor(
		private userService: UserService,
		private jwt: JwtService,
		private config: ConfigService,
		private logger: CustomLoggerService,
	) {}

	async signup(dto: CreateUserDto) {
		// generate the password hash
		let hash =  bcrypt.hashSync(dto.password);
		dto.password = hash
		// save the new user in the db
		try {
			const user = await this.userService.create(dto);

			return this.signToken(user._id.toString(), user.email);
		} catch (error) {
			if ( error instanceof MongooseError) {
				this.logger.error(error.message, error.name)
				throw new ForbiddenException(error.message);
			}
			if (error.code && error.errmsg){
				this.logger.error(error.message, error.code)
				console.log("error::: ", error.code)
				if (error.code == 11000) throw new ForbiddenException('User Already Exist');
				return HttpException.createBody('', error.message, 400)
			}
			throw error;
		}
	}

	async signin(dto: AuthDto) {
		// find the user by email
		const user = await this.userService.findByEmail(dto.email)
		// if user does not exist throw exception
		if (!user)	throw new ForbiddenException('Credentials Invalid');

		// compare password
		const match = bcrypt.compareSync(dto.password, user.password)
		
		// if password incorrect throw exception
		if (!match)	throw new ForbiddenException('Credentials Invalid');

		return this.signToken(user._id.toString(), user.email);
	}

	async signToken( userId: string, email: string, ): Promise<{ access_token: string }> {
		const payload = {
			sub: userId,
			email,
		};
		const secret = this.config.get('JWT_SECRET');

		const token = await this.jwt.signAsync(
			payload,
			{
				expiresIn: '15m',
				secret: secret,
			},
		);

		return {
			access_token: token,
		};
	}
}
  