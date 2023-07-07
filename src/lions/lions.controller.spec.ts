import { Test, TestingModule } from '@nestjs/testing';
import { LionsController } from './lions.controller';

describe('LionsController', () => {
  let controller: LionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LionsController],
    }).compile();

    controller = module.get<LionsController>(LionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
