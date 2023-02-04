import React from 'react';
import { mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

export interface InputProps {
  placeholder?: string;
  id?: string;
  name?: string;
}

export function Input({ ...props }: InputProps) {
  return <input className={mergeClassNames(styles.input)} {...props} />;
}

export default Input;
