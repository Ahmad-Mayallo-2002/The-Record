import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: CreateCommentDto) {
    return this.commentsService.create(createCommentDto);
  }

  @Get()
  findAll(@Query('skip') skip: number, @Query('take') take: number) {
    return this.commentsService.findAll(skip, take);
  }

  @Get('post/:postId')
  findByPostId(
    @Param('postId') postId: string,
    @Query('skip') skip: number,
    @Query('take') take: number,
  ) {
    return this.commentsService.findByPostId(postId, skip, take);
  }

  @Get('author/:authorId')
  findByAuthorId(
    @Param('authorId') authorId: string,
    @Query('skip') skip: number,
    @Query('take') take: number,
  ) {
    return this.commentsService.findByAuthorId(authorId, skip, take);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto) {
    return this.commentsService.update(id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.remove(id);
  }
}
