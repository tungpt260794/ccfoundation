import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

import styles from "styles/TermsOfUse.module.css";

const About = () => {
  const { t } = useTranslation("privacy-and-security");

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
              <div className={`about_text_info ${styles.contentWrapper}`}>
                <p>{t("post.description-1")}</p>
                <p>{t("post.description-2")}</p>
                <b>{t("post.sub-1")}</b>
                <ul>
                  <li>{t("post.content-1.li-1")}</li>
                  <li>{t("post.content-1.li-2")}</li>
                  <li>{t("post.content-1.li-3")}</li>
                </ul>
                <br />
                <b>{t("post.sub-2")}</b>
                <ul>
                  <li>{t("post.content-2.li-1")}</li>
                  <li>{t("post.content-2.li-2")}</li>
                  <li>{t("post.content-2.li-3")}</li>
                  <li>{t("post.content-2.li-4")}</li>
                  <li>{t("post.content-2.li-5")}</li>
                  <li>{t("post.content-2.li-6")}</li>
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
                  <li>{t("post.content-4.li-2")}</li>
                  <li>{t("post.content-4.li-3")}</li>
                </ul>
                <br />
                <b>{t("post.sub-5")}</b>
                <ul>
                  <li>{t("post.content-5.li-1")}</li>
                  <li>{t("post.content-5.li-2")}</li>
                  <li>{t("post.content-5.li-3")}</li>
                  <li>{t("post.content-5.li-4")}</li>
                </ul>
                <br />
                <b>{t("post.sub-6")}</b>
                <p>{t("post.content-6")}</p>
                <b>{t("post.sub-7")}</b>
                <ul>
                  <li>{t("post.content-7.li-1")}</li>
                  <li>{t("post.content-7.li-2")}</li>
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
        "privacy-and-security",
      ])),
    },
  };
};

export default About;
