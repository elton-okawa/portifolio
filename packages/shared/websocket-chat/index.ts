export interface Message {
  content: string;
  owner: string;
  date: Date;
}

export interface ServerToClientEvents {
  clientConnected: (name: string) => void;
  message: (content: string, sender: string, date: Date) => void;
}

export interface ClientToServerEvents {
  message: (content: string) => void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface InterEvents {}
