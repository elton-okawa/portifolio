import React from 'react';

import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {
  NavigationDrawer,
  NavItem,
  NavHide,
} from '@elton-okawa/navigation-drawer';
import { HomeIcon, InformationIcon } from '@elton-okawa/icons';
import { Avatar } from '@elton-okawa/avatar';
import { Typography } from '@elton-okawa/typography';
import { Flex } from '@elton-okawa/flex';
import Image from 'next/image';
import profilePicture from '../public/profile.jpg';
import { ContactLinks } from '../components/contact-links';
import { AuthGuard } from '../components/auth';
import { wrapper } from '../stores/store';

import axios from 'axios';
axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;

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
  // TODO eventually create this page
  // {
  //   icon: BriefcaseIcon,
  //   label: "Experience",
  //   path: "/experience",
  // },
];

const bottomNavigation: ItemData[] = [
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
        <title>Portifolio - Elton Okawa</title>
        <meta name="description" content="Elton Okawa's portifolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavigationDrawer
        top={renderTopNavigation()}
        middle={renderNavigation(middleNavigation, pathname)}
        bottom={renderNavigation(bottomNavigation, pathname)}
      />
      <AuthGuard>
        <Component {...pageProps} />;
      </AuthGuard>
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
          <Typography align="center">Full Stack Developer</Typography>
          <Typography variant="body2" align="center">
            NodeJS | ReactJS | GCloud
          </Typography>
          <ContactLinks />
        </Flex>
      </NavHide>
    </>
  );
}

function renderNavigation(navigation: ItemData[], pathname: string) {
  return <>{navigation.map((data) => renderNavItem(pathname, data))}</>;
}

function renderNavItem(pathname: string, data: ItemData) {
  const IconComponent = data.icon;
  return (
    <Link key={data.path} href={data.path}>
      <NavItem
        icon={<IconComponent />}
        label={data.label}
        selected={pathname === data.path}
      />
    </Link>
  );
}

export default wrapper.withRedux(App);
