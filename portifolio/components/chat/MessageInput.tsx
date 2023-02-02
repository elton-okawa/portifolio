import React from 'react';

import { IconButton } from '@elton-okawa/icon-button';
import { SendIcon } from '@elton-okawa/icons';

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
      <input id="message" name="message" />
      <IconButton type='submit'>
        <SendIcon />
      </IconButton>
    </form>
  )
}
