import React from 'react';

import Container from '@elton-okawa/container';
import styles from './styles.module.css';
import Flex from '@elton-okawa/flex';
import Button from '@elton-okawa/button';
import Typography from '@elton-okawa/typography';
import { selectAuthState, requestLogin } from '../stores/auth.slice';
import { useDispatch, useSelector } from 'react-redux';

const fakeAccounts = [
  { name: 'Dog', username: 'dog', password: 'dogdog' },
  { name: 'Cat', username: 'cat', password: 'catcat' },
];

export default function LoginPage() {
  const loggedIn = useSelector(selectAuthState);
  const dispatch = useDispatch();

  return (
    <Container extraClasses={[styles.container]}>
      <Flex direction="column">
        <Typography>Fake login</Typography>
        <div>{loggedIn ? 'Logged in' : 'Not Logged In'}</div>
        {fakeAccounts.map((account) => (
          <Button
            key={account.username}
            variant="filled"
            onClick={() =>
              dispatch(requestLogin(account.username, account.password))
            }
          >
            {account.name}
          </Button>
        ))}
      </Flex>
    </Container>
  );
}
