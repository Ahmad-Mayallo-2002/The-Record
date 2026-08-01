import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { calculationPagination } from '../common/calculationPagination';
import { IPaginatedData } from '../interfaces/paginatedData.interface';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment, CommentDocument } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name)
    private readonly commentModel: Model<CommentDocument>,
  ) {}

  async create(createCommentDto: CreateCommentDto): Promise<CommentDocument> {
    const createdComment = new this.commentModel({
      ...createCommentDto,
      author: new Types.ObjectId(createCommentDto.author),
    });

    return createdComment.save();
  }

  async findAll(
    take: number,
    skip: number,
  ): Promise<IPaginatedData<CommentDocument>> {
    const [data, count] = await Promise.all([
      this.commentModel.find().skip(skip).limit(take).exec(),
      this.commentModel.countDocuments().exec(),
    ]);

    return {
      pagination: calculationPagination(count, take, skip),
      data,
    };
  }

  async findOne(id: string): Promise<CommentDocument> {
    if (!Types.ObjectId.isValid(id))
      throw new BadRequestException('Invalid comment id');

    const comment = await this.commentModel.findById(id).exec();

    if (!comment)
      throw new NotFoundException(`Comment with id ${id} not found`);

    return comment;
  }

  async findByPostId(
    postId: string,
    take: number,
    skip: number,
  ): Promise<IPaginatedData<CommentDocument>> {
    if (!Types.ObjectId.isValid(postId))
      throw new BadRequestException('Invalid post id');

    const [data, count] = await Promise.all([
      this.commentModel
        .find({ post: new Types.ObjectId(postId) })
        .skip(skip)
        .limit(take)
        .exec(),
      this.commentModel
        .countDocuments({ post: new Types.ObjectId(postId) })
        .exec(),
    ]);

    return {
      pagination: calculationPagination(count, take, skip),
      data,
    };
  }

  async findByAuthorId(
    authorId: string,
    take: number,
    skip: number,
  ): Promise<IPaginatedData<CommentDocument>> {
    if (!Types.ObjectId.isValid(authorId)) {
      throw new BadRequestException('Invalid author id');
    }

    const [data, count] = await Promise.all([
      this.commentModel.find({}).skip(skip).limit(take).exec(),
      this.commentModel.countDocuments({}).exec(),
    ]);

    return {
      pagination: calculationPagination(count, take, skip),
      data,
    };
  }

  async update(
    id: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<CommentDocument> {
    const comment = await this.findOne(id);

    Object.assign(comment, updateCommentDto);
    return comment.save();
  }

  async remove(id: string): Promise<CommentDocument> {
    const comment = await this.findOne(id);
    await this.commentModel.deleteOne({ _id: comment._id }).exec();
    return comment;
  }
}
