import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import PersonArea from "components/area/PersonArea";

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

      <div className="volunteers_area" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section_title text-center mb-60">
                <h3 style={{ fontWeight: 500 }}>{t("volunteers-title")}</h3>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-xl-3 col-md-4">
              <PersonArea
                imgUrl="/templates/img/volunteers/2.png"
                name="Anila Miller"
                position="Volunteer & Donner"
              />
            </div>
            <div className="col-xl-3 col-md-4">
              <PersonArea
                imgUrl="/templates/img/volunteers/2.png"
                name="Anila Miller"
                position="Volunteer & Donner"
              />
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
      ...(await serverSideTranslations(locale, ["header", "footer", "about"])),
    },
  };
};

export default About;
