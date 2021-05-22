import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerBig from "components/area/BannerBig";
import DonateBig from "components/area/DonateBig";
import PostBig from "components/area/PostBig";
import SliderSmall from "components/area/SliderSmall";
import DonateSmall from "components/area/DonateSmall";

const Home = () => {
  const { t } = useTranslation("home");

  return (
    <Layout>
      <Head>
        <title>{t("head-title")}</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerBig
        variant="big"
        title={t("slogan.title")}
        content={t("slogan.content")}
        backgroundUrl="/images/home-banner.png"
        linkHref="/become-volunteer"
        linkLabel={t("slogan.link-label")}
      />

      <PostBig
        imgUrl="/images/home-about-us.png"
        type={t("aboutUs.type")}
        title={t("aboutUs.title")}
        description={t("aboutUs.description")}
        linkHref="/about"
        linkLabel={t("aboutUs.link-label")}
      />

      <SliderSmall
        type={t("projectsUpcoming.type")}
        title={t("projectsUpcoming.title")}
        description={t("projectsUpcoming.description")}
        linkHref="/projects-upcoming"
        linkLabel={t("projectsUpcoming.link-label")}
        items={[
          <DonateSmall
            imgUrl="/templates/img/help/1.png"
            title="Help Yeati to continue her Primary Education"
            linkHref="/project"
            linkLabel={t("projectUpcoming.link-label")}
          />,
          <DonateSmall
            imgUrl="/templates/img/help/2.png"
            title="Help Yeati to continue her Primary Education"
            linkHref="/project"
            linkLabel={t("projectUpcoming.link-label")}
          />,
        ]}
      />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "home"])),
    },
  };
};

export default Home;
