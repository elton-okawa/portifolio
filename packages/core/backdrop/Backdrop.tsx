import React, { ReactNode } from 'react';
import { ExtraProps, mergeClassNames } from '@elton-okawa/commons';
import styles from './Backdrop.module.css';

type BackdropFilter = 'blur';

export interface BackdropFilterProps extends ExtraProps {
  filter?: BackdropFilter;
  children?: ReactNode;
}

export function Backdrop({
  filter = 'blur',
  extraClasses = [],
  ...props
}: BackdropFilterProps) {
  return (
    <div
      className={mergeClassNames(
        styles.backdrop,
        styles[filter],
        ...extraClasses
      )}
    >
      {props.children}
    </div>
  );
}

export default Backdrop;
