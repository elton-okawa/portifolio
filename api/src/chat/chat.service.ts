import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class ChatService {
  constructor(private authService: AuthService) {}

  async getUserFromSocket(
    socket: Socket,
  ): Promise<{ id: string; name: string }> {
    // Workaround because postman cannot send Socket.IO auth object
    // https://github.com/postmanlabs/postman-app-support/issues/11789
    const token =
      socket.handshake.auth?.token ?? socket.handshake.headers['authorization'];
    const user = await this.authService.getUserFromToken(token);

    return user;
  }
}
