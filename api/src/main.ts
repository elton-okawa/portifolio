import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { WebsocketAuthAdapter } from './websockets/websocket-auth.adapter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const websocketAuthAdapter = new WebsocketAuthAdapter(app);
  app.useWebSocketAdapter(websocketAuthAdapter);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
