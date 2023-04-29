import React from 'react';
import { Typography } from '@elton-okawa/typography';
import { Flex } from '@elton-okawa/flex';
import { Link } from '@elton-okawa/link';

import styles from './ExperienceTable.module.css';

interface DetailProps {
  name: string;
  role: string;
  companyWebsite: string;
  startDate: Date;
  endDate: Date | null;
  description: string[];
}

const dateOptions: Intl.DateTimeFormatOptions = {
  month: 'long',
  year: 'numeric',
};

export function Detail({
  name,
  role,
  companyWebsite,
  startDate,
  endDate,
  description,
}: DetailProps) {
  return (
    <Flex direction="column" gap={2}>
      <Flex gap={1}>
        <Typography variant="h6">{role} - </Typography>
        <Link href={companyWebsite}>
          <Typography variant="h6">{name}</Typography>
        </Link>
      </Flex>
      <Typography variant="subtitle2" color="disabled">
        {formatDate(startDate, endDate)}
      </Typography>
      <ul className={styles.description}>
        {description.map((line, index) => (
          <li key={index}>
            <Typography wrap="breakWord">{line}</Typography>
          </li>
        ))}
      </ul>
    </Flex>
  );
}

function formatDate(startDate: Date, endDate: Date | null) {
  const startString = startDate.toLocaleDateString('en-US', dateOptions);
  const endString = endDate
    ? endDate.toLocaleDateString('en-US', dateOptions)
    : 'Present';

  return `${startString} - ${endString}`;
}
