import "styles/globals.css";
import "react-multi-carousel/lib/styles.css";

import Head from "next/head";

import { useEffect } from "react";
import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    var menu = $("ul#navigation");
    if (menu.length) {
      menu.slicknav({
        prependTo: ".mobile_menu",
        closedSymbol: "+",
        openedSymbol: "-",
      });
    }
  });

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
