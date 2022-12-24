import React from 'react';

import styles from './styles.module.css';

export interface TypographyProps {
  children?: string;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle1'
    | 'subtitle2'
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'overline';
}

const htmlVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'p',
  subtitle2: 'p',
  body1: 'p',
  body2: 'p',
  button: 'p',
  caption: 'p',
  overline: 'p',
};

export function Typography({ variant = 'body1', children }: TypographyProps) {
  const Component = htmlVariantMapping[variant] as React.ElementType;

  return <Component className={styles[variant]}>{children}</Component>;
}

export default Typography;
