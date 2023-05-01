import React from 'react';

import { Backdrop } from '../index';

export default {
  title: 'Backdrop',
  component: Backdrop,
};

const Template = ({ filter, ...args }) => {
  return (
    <>
      <Backdrop filter={filter}>
        <h1>Background is a checkered one</h1>
      </Backdrop>
      <div
        style={{
          width: '100vw',
          height: '100vh',
          background: `repeating-linear-gradient(
            to right, transparent, 
            transparent 50px, 
            white 50px, 
            white 55px
          ),
          repeating-linear-gradient(
            to bottom, transparent,  
            transparent 50px, 
            white 50px, 
            white 55px
          );`,
        }}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  filter: 'blur',
};
