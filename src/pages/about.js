import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const About = () => {
  const { t } = useTranslation("about");

  return (
    <Layout>
      <Head>
        <title>{t("head-title")}</title>
        <meta name="description" content="About us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall
        variant="small"
        title={t("slogan.title")}
        backgroundUrl="/images/about-banner.png"
      />

      <div className="about_page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <h3>{t("post.title")}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="about_text_info">
                <p>{t("post.content-1")}</p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="about_text_info">
                <p>{t("post.content-2")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "about"])),
    },
  };
};

export default About;
