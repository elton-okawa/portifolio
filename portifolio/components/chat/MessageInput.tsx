import React from 'react';

import { IconButton } from '@elton-okawa/icon-button';
import { SendIcon } from '@elton-okawa/icons';
import { Input } from '@elton-okawa/input';
import { Flex } from '@elton-okawa/flex';
import styles from './styles.module.css';

interface MessageInputProps {
  onSubmit: (string) => void;
}

export default function MessageInput({ onSubmit }: MessageInputProps) {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    onSubmit(formData.get("message"));
  }

  return (
    <form onSubmit={handleSubmit}>
      <Flex gap={1}>
        <Input id="message" name="message" extraClasses={[styles.messageInput]}/>
        <IconButton type='submit'>
          <SendIcon />
        </IconButton>
      </Flex>
    </form>
  )
}
