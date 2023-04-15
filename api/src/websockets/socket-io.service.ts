import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { ChatService } from 'src/chat/chat.service';

@Injectable()
export class SocketIoService {
  constructor(private chatService: ChatService) {}

  async jwtMiddleware(socket: Socket, next: (error?: Error) => void) {
    try {
      const user = await this.chatService.getUserFromSocket(socket);
      socket.data.user = user;
      next();
    } catch (error) {
      next(error);
    }
  }
}
