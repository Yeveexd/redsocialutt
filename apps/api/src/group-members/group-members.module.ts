import { Module } from '@nestjs/common';
import { GroupMembersController } from './group-members.controller.js';
import { GroupMembersService } from './group-members.service.js';

@Module({
  controllers: [GroupMembersController],
  providers: [GroupMembersService]
})
export class GroupMembersModule {}
