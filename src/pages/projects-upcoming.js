import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import DonateSmall from "components/area/DonateSmall";

const ProjectsUpcoming = () => {
  const { t } = useTranslation("projects-upcoming");

  return (
    <Layout>
      <Head>
        <title>{t("head-title")}</title>
        <meta name="description" content="Projects Complete" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall
        variant="small"
        title={t("slogan.title")}
        backgroundUrl="/images/projects-upcoming-banner.png"
      />

      <div className="help_area help_area_page ">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/1.png"
                title="Help Yeati to continue her Primary Education"
                linkHref="/project"
                linkLabel={t("item.link-label")}
              />
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/2.png"
                title="Help Yeati to continue her Primary Education"
                linkHref="/project"
                linkLabel={t("item.link-label")}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/3.png"
                title="Help Yeati to continue her Primary Education"
                linkHref="/project"
                linkLabel={t("item.link-label")}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/4.png"
                title="Help Yeati to continue her Primary Education"
                linkHref="/project"
                linkLabel={t("item.link-label")}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/5.png"
                title="Help Yeati to continue her Primary Education"
                linkHref="/project"
                linkLabel={t("item.link-label")}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/6.png"
                title="Help Yeati to continue her Primary Education"
                linkHref="/project"
                linkLabel={t("item.link-label")}
              />
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
      ...(await serverSideTranslations(locale, [
        "header",
        "footer",
        "projects-upcoming",
      ])),
    },
  };
};

export default ProjectsUpcoming;
