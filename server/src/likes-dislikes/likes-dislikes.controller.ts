import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LikesDislikesService } from './likes-dislikes.service';

@Controller('likes-dislikes')
export class LikesDislikesController {
  constructor(private readonly likesDislikesService: LikesDislikesService) {}

  @Post('posts/:postId/like')
  addLike(@Param('postId') postId: string, @Body('userId') userId: string) {
    return this.likesDislikesService.addLike(postId, userId);
  }

  @Post('posts/:postId/dislike')
  addDislike(@Param('postId') postId: string, @Body('userId') userId: string) {
    return this.likesDislikesService.addDislike(postId, userId);
  }

  @Get('posts/:postId/reaction-summary')
  getPostReactionSummary(@Param('postId') postId: string) {
    return this.likesDislikesService.getPostReactionSummary(postId);
  }

  @Get('users/:userId/liked-posts')
  getUserLikedPosts(@Param('userId') userId: string) {
    return this.likesDislikesService.getUserLikedPosts(userId);
  }

  @Get('users/:userId/disliked-posts')
  getUserDislikedPosts(@Param('userId') userId: string) {
    return this.likesDislikesService.getUserDislikedPosts(userId);
  }
}
