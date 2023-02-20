import Container from '@elton-okawa/container';
import React from 'react';
import Chat from '../../components/chat';
import styles from './ChatPage.module.css';

export default function ChatPage() {
  return (
    <Container extraClasses={[styles.pageContainer]}>
      <Chat />
    </Container>
  );
}
