import React from "react";

import "../styles/globals.css";
import styles from "./App.module.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  NavigationDrawer,
  NavItem,
  NavHide,
} from "@elton-okawa/navigation-drawer";
import { HomeIcon, AccountIcon } from "@elton-okawa/icons";
import { Avatar } from "@elton-okawa/avatar";
import { Typography } from "@elton-okawa/typography";
import Image from "next/image";
import profilePicture from "../public/profile.jpg";
import { ContactLinks } from "../components/contact-links";

type ItemData = {
  icon: typeof HomeIcon;
  label: string;
  path: string;
};

const navigation: ItemData[] = [
  {
    icon: HomeIcon,
    label: "Home",
    path: "/",
  },
  {
    icon: AccountIcon,
    label: "About",
    path: "/about",
  },
];

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <NavigationDrawer
        top={renderTopNavigation()}
        middle={renderMiddleNavigation(pathname)}
      />
      <Component {...pageProps} />;
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
        <div className={styles.infoHide}>
          <Typography variant="h6" align="center">
            Elton Okawa
          </Typography>
          <Typography align="center">Full Stack Developer</Typography>
          <Typography variant="body2" align="center">
            NodeJS | ReactJS | GCloud
          </Typography>
          <ContactLinks />
        </div>
      </NavHide>
    </>
  );
}

function renderMiddleNavigation(pathname: string) {
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
