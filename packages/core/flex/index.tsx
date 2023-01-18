import React, { ReactNode } from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

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
  ...props
}: FlexProps) {
  const directionClass = direction ? styles[`direction-${direction}`] : '';
  const wrapClass = wrap ? styles[`wrap-${wrap}`] : '';
  const justifyContentClass = justifyContent
    ? styles[`justify-${justifyContent}`]
    : '';
  const alignItemsClass = alignItems ? styles[`align-items-${alignItems}`] : '';
  const alignContentClass = alignContent
    ? styles[`align-content-${alignContent}`]
    : '';
  const gapClass = gap ? styles[`gap-${gap}`] : '';
  const columnGapClass = columnGap ? styles[`column-gap-${columnGap}`] : '';
  const rowGapClass = rowGap ? styles[`row-gap-${rowGap}`] : '';

  return (
    <div
      className={mergeClassNames(
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
