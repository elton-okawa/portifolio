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
import { SocketData } from './chat.events';
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterEvents,
} from '@elton-okawa/websocket-chat';

@WebSocketGateway({ namespace: 'chat', cors: true })
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
    console.log(data);
    this.server.emit('message', data, client.data.name, new Date());
  }
}
