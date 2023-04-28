import React from 'react';

import { FullPageScroll } from '@elton-okawa/full-page-scroll';

import {
  Contacts,
  UnderConstruction,
  Experience,
  ExperienceData,
  Introduction,
} from 'components/introduction-sections';
import { listStaticData } from 'lib/static';

interface HomeProps {
  experienceData: RawExperienceData[];
}

interface RawExperienceData {
  id: string;
  name: string;
  role: string;
  companyWebsite: string;
  startDate: string;
  endDate: string | null;
  description: string;
}

export async function getStaticProps() {
  const dataList = listStaticData('experience') as RawExperienceData[];

  return {
    props: {
      experienceData: dataList,
    },
  };
}

export default function Home({ experienceData }: HomeProps) {
  const experience = experienceData.map((data) => ({
    ...data,
    startDate: new Date(data.startDate),
    endDate: data.endDate ? new Date(data.endDate) : null,
  }));

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
              id: 'portifolio',
              title: 'Portifolio',
              content: <UnderConstruction title="Portifolio" />,
            },
            {
              id: 'contact',
              title: 'Contacts',
              content: <Contacts />,
            },
          ]}
        />
      </main>
    </>
  );
}
