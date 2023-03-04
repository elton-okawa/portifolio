import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatModule } from './chat/chat.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { WebsocketsModule } from './websockets/websockets.module';

@Module({
  imports: [ChatModule, AuthModule, UsersModule, WebsocketsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
