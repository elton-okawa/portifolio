import Container from '@elton-okawa/container';
import React from 'react';
import Chat from '../../components/chat';
import styles from './ChatPage.module.css';

export function getStaticProps() {
  return {
    notFound: true,
  };
}

export default function ChatPage() {
  return (
    <Container extraClasses={[styles.pageContainer]}>
      <Chat />
    </Container>
  );
}
