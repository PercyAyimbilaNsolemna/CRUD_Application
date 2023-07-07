import { Test, TestingModule } from '@nestjs/testing';
import { GoatController } from './goat.controller';

describe('GoatController', () => {
  let controller: GoatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GoatController],
    }).compile();

    controller = module.get<GoatController>(GoatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
