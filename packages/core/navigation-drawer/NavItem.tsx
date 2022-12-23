import React, { ReactElement } from 'react';
import styles from './styles.module.css';

export interface NavItemProps {
  icon: ReactElement;
  label: string;
  collapsed: boolean;
  selected: boolean;
}

export function NavItem(props: NavItemProps) {
  return (
    <div
      className={`${styles.navItem} ${props.selected ? styles.selected : ''}`}
    >
      {props.icon}
      {!props.collapsed && <p>{props.label}</p>}
    </div>
  );
}
