import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches, MinLength } from 'class-validator';

export class CreateUserDto {
  
  @ApiProperty({
    example: 'Jane',
    description: 'provide the Name of the user',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    example: 'jane_doe@gmail.com',
    description: 'provide the email of the user',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'provide the password of the user',
  })
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
    message: 'Password must contain at least one letter, one number, and one special character.',
  })
  password: string;

}
