import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import DonateBig from "components/area/DonateBig";

const Project = () => {
  const { t } = useTranslation("project");

  return (
    <Layout>
      <Head>
        <title>{t("head-title")}</title>
        <meta name="description" content="Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall
        variant="small"
        title={t("slogan.title")}
        backgroundUrl="/images/projects-complete-banner.png"
      />

      <DonateBig
        title="Hỗ trợ Nahid cho Bệnh viêm phổi"
        content="Truyền cảm hứng cho nhân viên và tổ chức để hỗ trợ các hoạt
                  động mà họ quan tâm. Chúng tôi làm điều này để mang lại nhiều
                  tài nguyên hơn cho các tổ chức phi lợi nhuận đang thay đổi thế
                  giới của chúng ta."
        imgUrl="/templates/img/causes/1.png"
      />
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "header",
        "footer",
        "project",
      ])),
    },
  };
};

export default Project;
