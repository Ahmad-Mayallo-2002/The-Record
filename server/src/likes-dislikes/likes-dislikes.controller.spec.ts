import { Test, TestingModule } from '@nestjs/testing';
import { LikesDislikesController } from './likes-dislikes.controller';
import { LikesDislikesService } from './likes-dislikes.service';

describe('LikesDislikesController', () => {
  let controller: LikesDislikesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikesDislikesController],
      providers: [LikesDislikesService],
    }).compile();

    controller = module.get<LikesDislikesController>(LikesDislikesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
