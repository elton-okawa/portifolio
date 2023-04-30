import React, { ReactNode } from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './Typography.module.css';

type TypographyVariant =
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

type TypographyAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'initial'
  | 'inherit';

type TypographyColor =
  | 'inherit'
  | 'text'
  | 'disabled'
  | 'primary'
  | 'secondary';

type TypographyWrap = 'normal' | 'breakWord' | 'anywhere';

export interface TypographyProps {
  children?: string | ReactNode;
  variant?: TypographyVariant;
  align?: TypographyAlign;
  color?: TypographyColor;
  wrap?: TypographyWrap;
  extraClasses?: string[];
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

export function Typography({
  variant = 'body1',
  align = 'left',
  color = 'inherit',
  wrap = 'normal',
  children,
  extraClasses = [],
}: TypographyProps) {
  const Component = htmlVariantMapping[variant] as React.ElementType;

  return (
    <Component
      className={mergeClassNames(
        styles[variant],
        styles[align],
        styles[color],
        styles[wrap],
        ...extraClasses
      )}
    >
      {children}
    </Component>
  );
}
