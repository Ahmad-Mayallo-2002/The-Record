import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(@Body() createPostDto: CreatePostDto) {
    return await this.postsService.create(createPostDto);
  }

  @Get()
  async findAll(@Query('take') take: number, @Query('skip') skip: number) {
    return await this.postsService.findAll(take, skip);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.postsService.findOne(id);
  }

  @Get(':authorId')
  async findByAuthorId(
    @Param('authorId') authorId: string,
    @Query('take') take: number,
    @Query('skip') skip: number,
  ) {
    return await this.postsService.findByAuthorId(authorId, take, skip);
  }

  @Get(':categoryId')
  async findByCategoryId(
    @Param('categoryId') categoryId: string,
    @Query('take') take: number,
    @Query('skip') skip: number,
  ) {
    return await this.postsService.findByCategoryId(categoryId, take, skip);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {
    return await this.postsService.update(id, updatePostDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.postsService.remove(id);
  }
}
