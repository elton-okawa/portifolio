import Container from '@elton-okawa/container';
import React from 'react';
import { getDocsHtmlMarkdown } from '../../lib/docs';
import styles from './styles.module.css';

export async function getStaticProps() {
  return {
    props: {
      htmlContent: await getDocsHtmlMarkdown('about'),
    },
  };
}

interface AboutProps {
  htmlContent: string;
}

export default function About({ htmlContent }: AboutProps) {
  return (
    <div className={styles.about}>
      <Container>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </Container>
    </div>
  );
}
