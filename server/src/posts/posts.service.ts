import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { calculationPagination } from '../common/calculationPagination';
import { IPaginatedData } from '../interfaces/paginatedData.interface';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Post, PostDocument } from './entities/post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<PostDocument>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<PostDocument> {
    const createdPost = new this.postModel({
      ...createPostDto,
    });

    return await createdPost.save();
  }

  async findAll(
    take: number,
    skip: number,
  ): Promise<IPaginatedData<PostDocument>> {
    const data = await this.postModel.find().limit(take).skip(skip);
    if (!data) throw new NotFoundException('No posts found');

    const count = await this.postModel.countDocuments();

    return {
      pagination: calculationPagination(count, take, skip),
      data,
    };
  }

  async findOne(id: string): Promise<PostDocument> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException('Invalid post id');

    const post = await this.postModel.findById(id);
    if (!post) throw new NotFoundException(`Post with id ${id} not found`);

    return post;
  }

  async findByAuthorId(
    authorId: string,
    take: number,
    skip: number,
  ): Promise<IPaginatedData<PostDocument>> {
    if (!Types.ObjectId.isValid(authorId))
      throw new BadRequestException('Invalid author id');

    const data = await this.postModel.find().limit(take).skip(skip);
    if (!data) throw new NotFoundException('No posts found');

    const count = await this.postModel.countDocuments();

    return {
      pagination: calculationPagination(count, take, skip),
      data,
    };
  }

  async findByCategoryId(
    categoryId: string,
    take: number,
    skip: number,
  ): Promise<IPaginatedData<PostDocument>> {
    if (!Types.ObjectId.isValid(categoryId))
      throw new BadRequestException('Invalid author id');

    const data = await this.postModel.find().limit(take).skip(skip);
    if (!data) throw new NotFoundException('No posts found');

    const count = await this.postModel.countDocuments();

    return {
      pagination: calculationPagination(count, take, skip),
      data,
    };
  }

  async update(
    id: string,
    updatePostDto: UpdatePostDto,
  ): Promise<PostDocument> {
    const post = await this.postModel.findByIdAndUpdate(id, updatePostDto);
    if (!post) throw new BadRequestException('No post found');
    return post;
  }

  async remove(id: string): Promise<PostDocument> {
    const post = await this.postModel.findByIdAndDelete(id);
    if (!post) throw new BadRequestException('No post found');
    return post;
  }
}
