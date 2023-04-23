import React from 'react';

import { FullPageScroll } from '@elton-okawa/full-page-scroll';

import { Introduction } from './Introduction';

export default function Home() {
  return (
    <>
      <main>
        <FullPageScroll
          sections={[
            {
              id: 'introduction',
              title: 'Introduction',
              content: <Introduction />,
            },
            {
              id: 'experience',
              title: 'Experience',
              content: <p>Experience</p>,
            },
            {
              id: 'contact',
              title: 'Contacts',
              content: <p>Contacts</p>,
            },
          ]}
        />
      </main>
    </>
  );
}
