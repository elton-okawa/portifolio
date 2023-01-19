import React, { ReactNode } from 'react';
import {
  ExtraProps,
  mergeClassNames,
  styleOrEmpty,
} from '@elton-okawa/commons';

import styles from './styles.module.css';

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse';
export type JustifyContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type AlignItems =
  | 'stretch'
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'baseline';
export type AlignContent =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'
  | 'stretch';
export type Gap = 0 | 1 | 2 | 3;

export interface FlexProps {
  children: ReactNode;
  direction?: Direction;
  wrap?: Wrap;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  alignContent?: AlignContent;
  gap?: Gap;
  columnGap?: Gap;
  rowGap?: Gap;
}

export function Flex({
  direction,
  wrap,
  justifyContent,
  alignItems,
  alignContent,
  gap,
  columnGap,
  rowGap,
  extraClasses = [],
  ...props
}: FlexProps & ExtraProps) {
  const directionClass = styleOrEmpty(styles, 'direction', direction);
  const wrapClass = styleOrEmpty(styles, 'wrap', wrap);
  const justifyContentClass = styleOrEmpty(styles, 'justify', justifyContent);
  const alignItemsClass = styleOrEmpty(styles, 'align-items', alignItems);
  const alignContentClass = styleOrEmpty(styles, 'align-content', alignContent);
  const gapClass = styleOrEmpty(styles, 'gap', gap);
  const columnGapClass = styleOrEmpty(styles, 'column-gap', columnGap);
  const rowGapClass = styleOrEmpty(styles, 'row-gap', rowGap);

  return (
    <div
      className={mergeClassNames(
        ...extraClasses,
        styles.flex,
        directionClass,
        wrapClass,
        justifyContentClass,
        alignItemsClass,
        alignContentClass,
        gapClass,
        columnGapClass,
        rowGapClass
      )}
    >
      {props.children}
    </div>
  );
}

export default Flex;
