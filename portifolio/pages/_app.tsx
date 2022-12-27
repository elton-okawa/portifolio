import React from "react";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavigationDrawer, NavItem } from "@elton-okawa/navigation-drawer";
import { HomeIcon, AccountIcon } from "@elton-okawa/icons";
import { Avatar } from "@elton-okawa/avatar";
import { Typography } from "@elton-okawa/typography";
import Image from "next/image";
import profilePicture from "../public/profile.jpg";

type ItemData = {
  icon: typeof HomeIcon;
  label: string;
  path: string;
};

const navigation: { top: ItemData[]; bottom: ItemData[] } = {
  top: [
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
  ],
  bottom: [],
};

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <NavigationDrawer>
        <Avatar size="container">
          <Image alt="profile picture" src={profilePicture} />
        </Avatar>
        <Typography variant="h6" align="center">
          Elton Okawa
        </Typography>
        <Typography align="center">Full Stack Developer</Typography>
        <Typography variant="body2" align="center">
          NodeJS | ReactJS | GCloud
        </Typography>
        {navigation.top.map((data) => renderNavItem(pathname, data))}
      </NavigationDrawer>
      <Component {...pageProps} />;
    </>
  );
}

function renderNavItem(pathname: string, data: ItemData) {
  const IconComponent = data.icon;
  return (
    <Link href={data.path}>
      <NavItem
        key={data.path}
        icon={<IconComponent />}
        label={data.label}
        selected={pathname === data.path}
      />
    </Link>
  );
}
