import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

import styles from "styles/TermsOfUse.module.css";

const About = () => {
  const { t } = useTranslation("terms-of-use");

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
        backgroundUrl="/images/home-banner.png"
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
            <div className="col-xl-12">
              <div className={`about_text_info ${styles.contentWrapper}`}>
                <p>{t("post.description")}</p>
                <b>{t("post.sub-1")}</b>
                <p>{t("post.content-1")}</p>
                <b>{t("post.sub-2")}</b>
                <ul>
                  <li>{t("post.content-2.li-1")}</li>
                  <li>{t("post.content-2.li-2")}</li>
                  <li>
                    <ul>
                      <li>{t("post.content-2.li-2_1")}</li>
                      <li>{t("post.content-2.li-2_2")}</li>
                      <li>{t("post.content-2.li-2_3")}</li>
                    </ul>
                  </li>
                  <li>{t("post.content-2.li-3")}</li>
                  <li>{t("post.content-2.li-4")}</li>
                  <li>{t("post.content-2.li-5")}</li>
                </ul>
                <br />
                <b>{t("post.sub-3")}</b>
                <ul>
                  <li>{t("post.content-3.li-1")}</li>
                  <li>{t("post.content-3.li-2")}</li>
                  <li>{t("post.content-3.li-3")}</li>
                  <li>{t("post.content-3.li-4")}</li>
                  <li>{t("post.content-3.li-5")}</li>
                </ul>
                <br />
                <b>{t("post.sub-4")}</b>
                <ul>
                  <li>{t("post.content-4.li-1")}</li>
                  <li>
                    <ul>
                      <li>{t("post.content-4.li-1_1")}</li>
                      <li>{t("post.content-4.li-1_2")}</li>
                      <li>{t("post.content-4.li-1_3")}</li>
                      <li>{t("post.content-4.li-1_4")}</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ backgroundImage: `url(/images/home-banner.png)` }}
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
        "terms-of-use",
      ])),
    },
  };
};

export default About;
