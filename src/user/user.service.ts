import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) 
    private readonly userModel: Model<UserDocument>, 
  ) {}

  async create(createUserDTO: CreateUserDto): Promise<UserDocument> {
    const user = await this.userModel.create(createUserDTO); 
    return user
  }

  async find(): Promise<User[]> {
    return this.userModel.find();
  }

  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id);
  }

  // only used for login, Just Returns _id and password 
  async findByEmail(email: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ email }).select('password email')
  }

  async delete(id: string) {
    return this.userModel.deleteOne({ _id: id });
  }
}