import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Link from "next/link";
import { NavigationDrawer, NavItem } from "@elton-okawa/navigation-drawer";
import { Icon, mdiHome, mdiAccount } from "@elton-okawa/icons";

type ItemData = {
  icon: string;
  label: string;
  path: string;
};

const navigation: { top: ItemData[]; bottom: ItemData[] } = {
  top: [
    {
      icon: mdiHome,
      label: "Home",
      path: "/",
    },
    {
      icon: mdiAccount,
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
        {navigation.top.map((data) => renderNavItem(pathname, data))}
      </NavigationDrawer>
      <Component {...pageProps} />;
    </>
  );
}

function renderNavItem(pathname: string, data: ItemData) {
  return (
    <Link href={data.path}>
      <NavItem
        key={data.path}
        icon={<Icon icon={data.icon} />}
        label={data.label}
        selected={pathname === data.path}
      />
    </Link>
  );
}
