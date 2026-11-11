import { Test, TestingModule } from '@nestjs/testing';
import { SanctionsController } from './sanctions.controller.js';

describe('SanctionsController', () => {
  let controller: SanctionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SanctionsController],
    }).compile();

    controller = module.get<SanctionsController>(SanctionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
