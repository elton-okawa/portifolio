import React from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import {
  NavigationDrawer,
  NavItem,
  NavHide,
} from '@elton-okawa/navigation-drawer';
import {
  GitHubIcon,
  HomeIcon,
  InformationIcon,
  LinkedinIcon,
  OpenInNewIcon,
} from '@elton-okawa/icons';
import { Avatar } from '@elton-okawa/avatar';
import { Typography } from '@elton-okawa/typography';
import { Flex } from '@elton-okawa/flex';
import Image from 'next/image';
import profilePicture from '../public/profile.jpg';
import { wrapper } from '../stores/store';
import { Divider } from '@elton-okawa/divider';

type ItemData = {
  icon: typeof HomeIcon;
  label: string;
  path: string;
};

const middleNavigation: ItemData[] = [
  {
    icon: HomeIcon,
    label: 'Home',
    path: '/',
  },
  {
    icon: InformationIcon,
    label: 'About',
    path: '/about',
  },
];

function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>Elton Okawa</title>
        <meta name="description" content="Elton Okawa's portifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationDrawer
        top={renderTopNavigation()}
        middle={renderNavigation(middleNavigation, pathname)}
        bottom={renderBottomNavigation()}
      />
      {/* TODO auth disabled for now */}
      {/* <AuthGuard> */}
      <Component {...pageProps} />;{/* </AuthGuard> */}
    </>
  );
}

function renderTopNavigation() {
  return (
    <>
      <Avatar size="container">
        <Image alt="profile picture" src={profilePicture} />
      </Avatar>
      <NavHide>
        <Flex direction="column" alignItems="center" gap={1}>
          <Typography variant="h6" align="center">
            Elton Okawa
          </Typography>
          <Typography variant="subtitle2" align="center">
            Full Stack Developer
          </Typography>
          <Typography variant="subtitle2" color="disabled" align="center">
            Node.js | React | GCP
          </Typography>
        </Flex>
      </NavHide>
    </>
  );
}

function renderBottomNavigation() {
  return (
    <>
      <Divider />
      <NavItem
        startIcon={<LinkedinIcon />}
        endIcon={<OpenInNewIcon />}
        label="Linkedin"
        selected={false}
      />
      <NavItem
        startIcon={<GitHubIcon />}
        endIcon={<OpenInNewIcon />}
        label="GitHub"
        selected={false}
      />
    </>
  );
}

function renderNavigation(navigation: ItemData[], pathname: string) {
  return <>{navigation.map((data) => renderNavItem(pathname, data))}</>;
}

function renderNavItem(pathname: string, data: ItemData) {
  const IconComponent = data.icon;
  return (
    <NextLink key={data.path} href={data.path}>
      <NavItem
        startIcon={<IconComponent />}
        label={data.label}
        selected={pathname === data.path}
      />
    </NextLink>
  );
}

export default wrapper.withRedux(App);
