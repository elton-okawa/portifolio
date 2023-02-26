import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

@Injectable()
export class ChatService {
  getUserFromSocket(socket: Socket): string {
    // TODO for now client only sends a name in this header
    console.log(socket.handshake.auth);
    return socket.handshake.headers.authorization;
  }
}
