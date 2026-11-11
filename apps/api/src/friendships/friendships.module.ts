import { Module } from '@nestjs/common';
import { FriendshipsService } from './friendships.service.js';

@Module({
  providers: [FriendshipsService]
})
export class FriendshipsModule {}
