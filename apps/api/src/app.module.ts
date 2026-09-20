import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { HelloController } from './hello/hello.controller.js';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
