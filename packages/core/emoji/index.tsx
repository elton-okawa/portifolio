import React from 'react';

export interface EmojiProps {
  label: string;
  children: string;
}

export function Emoji(props: EmojiProps) {
  return (
    <span role="img" aria-label={props.label}>
      {props.children}
    </span>
  );
}

export default Emoji;
