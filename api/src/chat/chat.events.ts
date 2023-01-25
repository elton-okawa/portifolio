export interface ServerToClientEvents {
  clientConnected: (name: string) => void;
  message: (content: string, sender: string, date: Date) => void;
}

export interface ClientToServerEvents {
  message: (content: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InterEvents {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SocketData {
  name: string;
}
