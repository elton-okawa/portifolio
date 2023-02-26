import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { Message } from '@elton-okawa/websocket-chat';
import { Flex } from '@elton-okawa/flex';
import MessageItem from './MessageItem';
import MessageInput from './MessageInput';
import styles from './styles.module.css';
import { selectAuthState } from '../../stores/auth.slice';
import { useSelector } from 'react-redux';

const webSocketUrl = 'http://localhost:8080/chat';

let socket;

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const { accessToken } = useSelector(selectAuthState);

  useEffect(() => {
    socket = io(webSocketUrl, {
      auth: (callback) => {
        callback({ token: accessToken });
      },
    });

    socket.on('connect', (data) => console.log(data));
    socket.on('disconnect', () => console.log('disconnected'));
    socket.on('message', (content: string, owner: string, date: string) => {
      setMessages((current) => [
        ...current,
        { content, owner, date: new Date(date) },
      ]);
    });
    console.log('use effect');
    return () => {
      socket.disconnect();
    };
  }, []);

  function handleSubmit(message) {
    socket.emit('message', message);
  }

  return (
    <Flex direction="column" extraClasses={[styles.chatContainer]}>
      <div className={styles.messagesContainer}>
        {messages.map((message, index) => (
          <MessageItem key={index} message={message} owner={index % 2 === 0} />
        ))}
      </div>
      <MessageInput onSubmit={handleSubmit} />
    </Flex>
  );
}
