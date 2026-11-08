import { NestFactory } from "@nestjs/core";
import { AppModule, ObserveInstrument } from "./app.module.js";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    instrument: ObserveInstrument,
  });

  app.enableCors({
    origin: process.env.ORIGIN,
    methods: process.env.METHODS?.split(",") ?? [
      "GET",
      "POST",
      "PUT",
      "DELETE",
    ],
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 8080);
}
await bootstrap();
