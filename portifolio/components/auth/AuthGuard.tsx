import React, { ReactElement, ReactNode, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

import { selectAuthState } from '../../stores/auth.slice';
import { CircularProgress } from '@elton-okawa/progress';
import { Flex } from '@elton-okawa/flex';
import styles from './styles.module.css';

const publicRoutes = ['/', '/login'];

export interface AuthGuardProps {
  children: ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const { loggedIn } = useSelector(selectAuthState);
  const isPublicRoute = !!publicRoutes.find(
    (route) => route === router.pathname
  );

  useEffect(() => {
    if (!isPublicRoute && !loggedIn) {
      router.push('./login');
    }
  }, [router, loggedIn, isPublicRoute]);

  if (!isPublicRoute && !loggedIn) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        extraClasses={[styles.container]}
      >
        <CircularProgress />
      </Flex>
    );
  }

  return <>{children}</>;
}
