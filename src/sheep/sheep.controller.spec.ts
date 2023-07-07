import { Test, TestingModule } from '@nestjs/testing';
import { SheepController } from './sheep.controller';

describe('SheepController', () => {
  let controller: SheepController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SheepController],
    }).compile();

    controller = module.get<SheepController>(SheepController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
