import React, { useCallback, ChangeEvent } from 'react';
import { ExtraProps, mergeClassNames } from '@elton-okawa/commons';

import styles from './styles.module.css';

export interface InputProps {
  value: string;
  onChange: (message: string) => void;
  placeholder?: string;
  id?: string;
  name?: string;
}

export function Input({
  extraClasses = [],
  onChange,
  ...props
}: InputProps & ExtraProps) {
  const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }, []);

  return (
    <input
      className={mergeClassNames(styles.input, ...extraClasses)}
      onChange={handleChange}
      {...props}
    />
  );
}

export default Input;
