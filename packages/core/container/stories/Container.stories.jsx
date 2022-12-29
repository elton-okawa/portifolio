import React from 'react';

import { Container } from '../index';

export default {
  title: 'Container',
  component: Container,
};

const Template = ({ ...args }) => {
  return (
    <Container {...args}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
        imperdiet lorem risus, in luctus ligula lacinia et. Suspendisse augue
        orci, ultricies vitae euismod in, tempor id ligula. Integer efficitur
        ante at dui lobortis egestas. Donec quam libero, fringilla sit amet
        hendrerit sit amet, vulputate hendrerit lorem. Duis auctor ullamcorper
        ullamcorper. Sed ultrices ultricies lectus quis lacinia. Duis eleifend
        libero vitae placerat tempor. Integer pharetra malesuada orci, eget
        mollis nisl eleifend in. Praesent nisi nunc, molestie a turpis quis,
        scelerisque auctor eros. Donec dictum orci laoreet sodales blandit.
        Fusce imperdiet risus mauris, vitae sodales nisl faucibus ac. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
        curae; Etiam convallis mauris vel hendrerit lobortis. Suspendisse
        finibus convallis nulla, sed convallis libero vestibulum fringilla.
        Vivamus lobortis accumsan velit, a tempor est pellentesque non.
        Pellentesque malesuada dui massa, eu semper sem finibus at. Praesent
        fermentum elit erat. Morbi a fringilla enim. Duis vestibulum mi orci,
        non hendrerit odio sagittis ac. Nulla ornare mi sed libero ornare,
        eleifend aliquet quam fermentum. Vivamus imperdiet, orci ut vulputate
        luctus, ipsum felis sodales metus, ac volutpat erat odio imperdiet
        tortor. Ut fringilla viverra sem, at facilisis elit ornare in.
        Vestibulum vel felis convallis, molestie arcu id, mollis dui. Sed
        ultrices scelerisque sodales. Phasellus nibh ipsum, accumsan fringilla
        erat non, ultrices mattis nulla. Vestibulum pharetra lectus quis ante
        convallis feugiat.
      </p>
    </Container>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: 'medium',
};
