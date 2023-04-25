import React from 'react';

import { FullPageScroll } from '@elton-okawa/full-page-scroll';

import { Introduction } from './Introduction';
import { Experience, ExperienceData } from './Experience';
import { listStaticData } from 'lib/static';

interface HomeProps {
  experience: ExperienceData[];
}

export async function getStaticProps() {
  const data = listStaticData('experience') as ExperienceData[];

  return {
    props: {
      experience: data,
    },
  };
}

export default function Home({ experience }: HomeProps) {
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
              content: <Experience experience={experience} />,
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
