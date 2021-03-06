import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const Mission = () => {
  const { t } = useTranslation("mission");

  return (
    <Layout>
      <Head>
        <title>{t("head-title")}</title>
        <meta name="description" content="Mission" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall
        variant="small"
        title={t("slogan.title")}
        backgroundUrl="/images/mission-banner.png"
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
            <div className="col-xl-12 col-md-12">
              <div className="about_text_info">
                <p>{t("post.content-1")}</p>
                <p>
                  <b style={{ color: "#b00006" }}>{t("post.content-2")}</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(/images/mission-banner.png)` }}
        className="become_volunter volunter_bg_1"
      ></div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "header",
        "footer",
        "mission",
      ])),
    },
  };
};

export default Mission;
