import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { IPaginatedData } from '../interfaces/paginatedData.interface';
import { calculationPagination } from '../common/calculationPagination';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}
  async getUsers(
    take: number,
    skip: number,
  ): Promise<IPaginatedData<UserDocument>> {
    const data = await this.userModel.find().select('-password');
    if (data.length === 0) throw new NotFoundException('Users not found');
    const counts = await this.userModel.countDocuments();
    const pagination = calculationPagination(counts, take, skip);
    return { data, pagination };
  }

  async getUserById(id: string): Promise<UserDocument> {
    const user = await this.userModel.findById(id).select('-password');
    if (!user) throw new NotFoundException(`User not found`);
    return user;
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserDocument> {
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      updateUserDto,
      { new: true },
    );
    if (!updatedUser) throw new NotFoundException(`User not found`);
    return updatedUser;
  }

  async deleteUser(id: string): Promise<UserDocument> {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) throw new NotFoundException(`User not found`);
    return deletedUser;
  }
}
