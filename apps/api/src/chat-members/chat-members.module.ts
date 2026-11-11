import { Module } from '@nestjs/common';
import { ChatMembersController } from './chat-members.controller.js';
import { ChatMembersService } from './chat-members.service.js';

@Module({
  controllers: [ChatMembersController],
  providers: [ChatMembersService]
})
export class ChatMembersModule {}
