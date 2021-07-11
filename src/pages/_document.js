import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content="" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />

          <link
            rel="shortcut icon"
            type="image/x-icon"
            href="img/favicon.png"
          />

          <link rel="stylesheet" href="/templates/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/templates/css/owl.carousel.min.css" />
          <link rel="stylesheet" href="/templates/css/magnific-popup.css" />
          <link rel="stylesheet" href="/templates/css/font-awesome.min.css" />
          <link rel="stylesheet" href="/templates/css/themify-icons.css" />
          <link rel="stylesheet" href="/templates/css/nice-select.css" />
          <link rel="stylesheet" href="/templates/css/flaticon.css" />
          <link rel="stylesheet" href="/templates/css/animate.css" />
          <link rel="stylesheet" href="/templates/css/slicknav.css" />
          <link rel="stylesheet" href="/templates/css/style.css" />
        </Head>
        <body>
          <Main />
          {/* JS here */}
          <script src="/templates/js/vendor/modernizr-3.5.0.min.js"></script>
          <script src="/templates/js/vendor/jquery-1.12.4.min.js"></script>
          <script src="/templates/js/popper.min.js"></script>
          <script src="/templates/js/bootstrap.min.js"></script>
          <script src="/templates/js/owl.carousel.min.js"></script>
          <script src="/templates/js/isotope.pkgd.min.js"></script>
          <script src="/templates/js/ajax-form.js"></script>
          <script src="/templates/js/waypoints.min.js"></script>
          <script src="/templates/js/jquery.counterup.min.js"></script>
          <script src="/templates/js/imagesloaded.pkgd.min.js"></script>
          <script src="/templates/js/scrollIt.js"></script>
          <script src="/templates/js/jquery.scrollUp.min.js"></script>
          <script src="/templates/js/wow.min.js"></script>
          <script src="/templates/js/nice-select.min.js"></script>
          <script src="/templates/js/jquery.slicknav.min.js"></script>
          <script src="/templates/js/jquery.magnific-popup.min.js"></script>
          <script src="/templates/js/plugins.js"></script>

          {/* contact js */}
          <script src="/templates/js/contact.js"></script>
          <script src="/templates/js/jquery.ajaxchimp.min.js"></script>
          <script src="/templates/js/jquery.form.js"></script>
          <script src="/templates/js/jquery.validate.min.js"></script>
          <script src="/templates/js/mail-script.js"></script>

          <script src="/templates/js/main.js"></script>

          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
