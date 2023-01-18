import React from 'react';

import { Flex, FlexProps } from '../index';

export default {
  title: 'Flex',
  component: Flex,
};

const Template = ({ ...args }) => {
  return (
    <div style={{ width: '400px', height: '50px' }}>
      <Flex {...args}>
        {Array.from({ length: 5 }).map((_, i) => (
          <p key={i}>
            {Array.from({ length: 20 })
              .map(() => i)
              .join('')}
          </p>
        ))}
      </Flex>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  direction: 'row',
  wrap: 'nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 0,
  columnGap: 0,
  rowGap: 0,
} as FlexProps;
