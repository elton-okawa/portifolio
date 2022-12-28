import React from 'react';

import { Card } from '../index';

export default {
  title: 'Card',
  component: Card,
};

const variants = ['elevated', 'outlined', 'filled'];

const Template = ({ ...args }) => {
  const cards = [];

  for (const variant of variants) {
    cards.push(
      <div style={{ width: '300px', height: '250px' }}>
        <Card variant={variant}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vel
            arcu sit amet elit ultrices pretium quis facilisis magna. Maecenas
            mollis feugiat eros, sit amet accumsan quam luctus tristique. Cras
            eros ligula, volutpat id ornare rutrum, faucibus in purus. Fusce
            lacinia ultricies augue, et sollicitudin mi sodales sollicitudin.
            Praesent posuere risus eu massa maximus, vitae consectetur sapien
            vulputate. Nam vitae feugiat quam. Curabitur laoreet purus mi
          </p>
        </Card>
      </div>
    );
    cards.push(<br />);
  }

  return cards;
};

export const Default = Template.bind({});
Default.args = {};
