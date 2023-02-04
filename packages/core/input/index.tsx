import React from 'react';
import { ExtraProps, mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

export interface InputProps {
  placeholder?: string;
  id?: string;
  name?: string;
}

export function Input({ extraClasses = [], ...props }: InputProps & ExtraProps) {
  return <input className={mergeClassNames(styles.input, ...extraClasses)} {...props} />;
}

export default Input;
