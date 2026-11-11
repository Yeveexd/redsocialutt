import { Test, TestingModule } from '@nestjs/testing';
import { ChatMembersController } from './chat-members.controller.js';

describe('ChatMembersController', () => {
  let controller: ChatMembersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChatMembersController],
    }).compile();

    controller = module.get<ChatMembersController>(ChatMembersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
