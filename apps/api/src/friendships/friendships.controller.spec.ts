import { Test, TestingModule } from '@nestjs/testing';
import { FriendshipsController } from './friendships.controller.js';

describe('FriendshipsController', () => {
  let controller: FriendshipsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FriendshipsController],
    }).compile();

    controller = module.get<FriendshipsController>(FriendshipsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
