import { Module } from '@nestjs/common';
import { ChatModule } from 'src/chat/chat.module';
import { SocketIoService } from './socket-io.service';

@Module({
  imports: [ChatModule],
  providers: [SocketIoService],
  exports: [SocketIoService],
})
export class WebsocketsModule {}
