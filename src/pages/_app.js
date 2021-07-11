import "styles/globals.css";
import "react-multi-carousel/lib/styles.css";

import Head from "next/head";
import { useRouter } from "next/router";

import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";
import { pageView, event } from "lib/ga";

const MyApp = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      pageView(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on("routeChangeComplete", handleRouteChange);

    // Menu
    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
      });
    }

    return () => {
      // If the component is unmounted, unsubscribe
      // from the event with the `off` method
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default appWithTranslation(MyApp);
