import { Module } from "@nestjs/common";
import { createObserveModule } from "@nestjs/observe";
import { ConfigModule } from "@nestjs/config";
import { AnnouncementsModule } from "./announcements/announcements.module.js";
import { BlocksModule } from "./blocks/blocks.module.js";
import { CareersModule } from "./careers/careers.module.js";
import { ChatsModule } from "./chats/chats.module.js";
import { CommentsModule } from "./comments/comments.module.js";
import { GroupsModule } from "./groups/groups.module.js";
import { MessagesModule } from "./messages/messages.module.js";
import { ChatMembersModule } from "./chat-members/chat-members.module.js";
import { GroupMembersModule } from "./group-members/group-members.module.js";
import { MediaModule } from "./media/media.module.js";
import { NotificationsModule } from "./notifications/notifications.module.js";
import { ProfilesModule } from "./profiles/profiles.module.js";
import { PostsModule } from "./posts/posts.module.js";
import { ReactionsModule } from "./reactions/reactions.module.js";
import { ReportsModule } from "./reports/reports.module.js";
import { RolesModule } from "./roles/roles.module.js";
import { SanctionsModule } from "./sanctions/sanctions.module.js";
import { UsersModule } from "./users/users.module.js";
import { FriendshipsController } from "./friendships/friendships.controller.js";
import { FriendshipsModule } from "./friendships/friendships.module.js";

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot(),
    FriendshipsModule,
    AnnouncementsModule,
    BlocksModule,
    CareersModule,
    ChatsModule,
    CommentsModule,
    GroupsModule,
    MessagesModule,
    ChatMembersModule,
    GroupMembersModule,
    MediaModule,
    NotificationsModule,
    ProfilesModule,
    PostsModule,
    ReactionsModule,
    ReportsModule,
    RolesModule,
    SanctionsModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
