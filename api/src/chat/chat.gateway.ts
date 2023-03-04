import {
  MessageBody,
  OnGatewayConnection,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  ConnectedSocket,
  BaseWsExceptionFilter,
  WsException,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatService } from './chat.service';
import { SocketData } from './chat.events';
import {
  ServerToClientEvents,
  ClientToServerEvents,
  InterEvents,
} from '@elton-okawa/websocket-chat';
import { UseFilters } from '@nestjs/common';
import { AllExceptionsFilter } from 'src/websockets/websocket.filter';

@UseFilters(new AllExceptionsFilter())
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

  async handleConnection(
    client: Socket<
      ClientToServerEvents,
      ServerToClientEvents,
      InterEvents,
      SocketData
    >,
    ...args: any[]
  ) {
    const name = client.data.user.name;
    this.server.emit('clientConnected', name);
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
