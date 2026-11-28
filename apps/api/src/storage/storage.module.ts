import { Module } from "@nestjs/common";
import { StorageService } from "./storage.services.js";
import { StorageController } from "./storage.controller.js";

@Module({
  providers: [StorageService],
  controllers: [StorageController],
  exports: [StorageService],
})
export class StorageModule {}