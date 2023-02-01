import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { Message } from "@elton-okawa/websocket-chat";
import MessageItem from "./MessageItem";

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

  function handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    console.log(formData.get("message"));
    socket.emit("message", formData.get("message"));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input id="message" name="message" />
        <input type="submit" />
      </form>
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} owner={index % 2 === 0}/>
      ))}
    </div>
  );
}
