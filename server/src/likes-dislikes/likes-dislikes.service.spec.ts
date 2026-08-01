import { Test, TestingModule } from '@nestjs/testing';
import { LikesDislikesService } from './likes-dislikes.service';

describe('LikesDislikesService', () => {
  let service: LikesDislikesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikesDislikesService],
    }).compile();

    service = module.get<LikesDislikesService>(LikesDislikesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
