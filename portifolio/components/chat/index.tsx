import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Message } from "@elton-okawa/websocket-chat";
import MessageItem from "./MessageItem";
import MessageInput from './MessageInput';

const webSocketUrl = "http://localhost:8080/chat";

let socket;

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket = io(webSocketUrl);

    socket.on("connect", () => console.log("connected"));
    socket.on("disconnect", () => console.log("disconnected"));
    socket.on("message", (content: string, owner: string, date: string) => {
      setMessages((current) => [
        ...current,
        { content, owner, date: new Date(date) },
      ]);
    });
    console.log("use effect");
    return () => {
      socket.disconnect();
    };
  }, []);

  function handleSubmit(message) {
    socket.emit("message", message);
  }

  return (
    <div>
      <MessageInput onSubmit={handleSubmit} />
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} owner={index % 2 === 0}/>
      ))}
    </div>
  );
}
