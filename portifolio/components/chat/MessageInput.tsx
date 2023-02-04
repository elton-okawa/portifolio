import React, { useState } from 'react';

import { IconButton } from '@elton-okawa/icon-button';
import { SendIcon } from '@elton-okawa/icons';
import { Input } from '@elton-okawa/input';
import { Flex } from '@elton-okawa/flex';
import styles from './styles.module.css';

interface MessageInputProps {
  onSubmit: (string) => Promise<void>;
}

export default function MessageInput({ onSubmit }: MessageInputProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(message);
    setMessage('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap={1}>
        <Input id="message" name="message" value={message} onChange={setMessage} extraClasses={[styles.messageInput]}/>
        <IconButton type='submit'>
          <SendIcon />
        </IconButton>
      </Flex>
    </form>
  )
}
