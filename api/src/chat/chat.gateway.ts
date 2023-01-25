import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterEvents,
  SocketData,
} from './chat.events';

@WebSocketGateway({ namespace: 'chat' })
export class ChatGateway implements OnGatewayConnection<Socket> {
  @WebSocketServer()
  private server: Server<
    ClientToServerEvents,
    ServerToClientEvents,
    InterEvents,
    SocketData
  >;

  constructor(private readonly chatService: ChatService) {}

  handleConnection(
    client: Socket<
      ClientToServerEvents,
      ServerToClientEvents,
      InterEvents,
      SocketData
    >,
    ...args: any[]
  ) {
    const user = this.chatService.getUserFromSocket(client);
    client.data.name = user;
    this.server.emit('clientConnected', user);
  }

  @SubscribeMessage('message')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() data: string,
  ) {
    // TODO save
    this.server.emit('message', data, client.data.name, new Date());
  }
}
