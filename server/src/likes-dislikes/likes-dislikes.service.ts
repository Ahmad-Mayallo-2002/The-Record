import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import {
  LikesDislike,
  LikesDislikeDocument,
} from './entities/likes-dislike.entity';

@Injectable()
export class LikesDislikesService {
  constructor(
    @InjectModel(LikesDislike.name)
    private readonly likesDislikeModel: Model<LikesDislikeDocument>,
  ) {}

  async addLike(postId: string, userId: string): Promise<{ message: string }> {
    if (!Types.ObjectId.isValid(postId) || !Types.ObjectId.isValid(userId)) {
      throw new BadRequestException('Invalid ids');
    }

    const existingReaction = await this.likesDislikeModel.findOne({});

    if (!existingReaction) {
      await this.likesDislikeModel.create({
        value: true,
      });
      return { message: 'Like added' };
    }

    if (existingReaction.value === true) {
      await this.likesDislikeModel.deleteOne({ _id: existingReaction._id });
      return { message: 'Like removed' };
    }

    existingReaction.value = true;
    await existingReaction.save();
    return { message: 'Like added' };
  }

  async addDislike(
    postId: string,
    userId: string,
  ): Promise<{ message: string }> {
    if (!Types.ObjectId.isValid(postId) || !Types.ObjectId.isValid(userId))
      throw new BadRequestException('Invalid ids');

    const existingReaction = await this.likesDislikeModel.findOne({});

    if (!existingReaction) {
      await this.likesDislikeModel.create({
        value: false,
      });
      return { message: 'Dislike added' };
    }

    if (existingReaction.value === false) {
      await this.likesDislikeModel.deleteOne({ _id: existingReaction._id });
      return { message: 'Dislike removed' };
    }

    existingReaction.value = false;
    await existingReaction.save();
    return { message: 'Dislike added' };
  }

  async getPostReactionSummary(postId: string) {
    if (!Types.ObjectId.isValid(postId))
      throw new BadRequestException('Invalid post id');

    const [likes, dislikes] = await Promise.all([
      this.likesDislikeModel.countDocuments({
        value: true,
      }),
      this.likesDislikeModel.countDocuments({
        value: false,
      }),
    ]);

    return { postId, likes, dislikes };
  }

  async getUserLikedPosts(userId: string) {
    if (!Types.ObjectId.isValid(userId))
      throw new BadRequestException('Invalid user id');

    return this.likesDislikeModel.find({ value: true }).populate('post');
  }

  async getUserDislikedPosts(userId: string) {
    if (!Types.ObjectId.isValid(userId))
      throw new BadRequestException('Invalid user id');

    return this.likesDislikeModel.find({ value: false }).populate('post');
  }
}
