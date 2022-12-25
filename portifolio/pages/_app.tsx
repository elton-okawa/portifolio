import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { NavigationDrawer, NavItem } from "@elton-okawa/navigation-drawer";
import { Icon, mdiHome, mdiAccount } from "@elton-okawa/icons";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  return (
    <>
      <NavigationDrawer>
        <NavItem
          icon={<Icon icon={mdiHome} />}
          label="Home"
          selected={pathname === "/"}
        />
        <NavItem
          icon={<Icon icon={mdiAccount} />}
          label="Account"
          selected={pathname === "/about"}
        />
      </NavigationDrawer>
      <Component {...pageProps} />;
    </>
  );
}
