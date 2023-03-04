import { INestApplicationContext } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import { Server, ServerOptions } from 'socket.io';
import { SocketIoService } from './socket-io.service';

export class WebsocketAuthAdapter extends IoAdapter {
  private socketIoService;

  constructor(private app: INestApplicationContext) {
    super(app);
    this.socketIoService = this.app.get(SocketIoService);
  }

  createIOServer(port: number, options?: ServerOptions) {
    const server: Server = super.createIOServer(port, options);
    server
      .of('/chat')
      .use(this.socketIoService.jwtMiddleware.bind(this.socketIoService));

    return server;
  }
}
