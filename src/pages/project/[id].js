import Head from "next/head";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";
import ReactMarkdown from "react-markdown";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import DonateBig from "components/area/DonateBig";

import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";
import { ENPOINT_FIND_PROJECTS } from "utils/helpers/const";
import { useProject } from "utils/hooks";

import styles from "./Project.module.css";

const Project = ({ projectDataServer, params, localizations }) => {
  const { t } = useTranslation("project");
  const router = useRouter();
  const { projectData } = useProject({
    initialData: projectDataServer,
    params: {
      id: localizations.find((l) => l.locale === router.locale)
        ? localizations.find((l) => l.locale === router.locale).id
        : params.id,
    },
    query: {
      _locale: router.locale,
    },
  });

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
        title={projectData.title}
        content={
          <div className={styles.projectContent}>
            <ReactMarkdown>
              {projectData.content &&
                projectData.content.replace(
                  "](",
                  `](${process.env.NEXT_PUBLIC_STRAPI_DOMAIN_API}`
                )}
            </ReactMarkdown>
          </div>
        }
        imgUrl={projectData.image ? projectData.image.url : ""}
      />
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const localizations = Array.isArray(context.query.localizations)
    ? context.query.localizations.map((l) => {
        const array = l.split("-");
        const id = array[0];
        const locale = array[1];

        return {
          id,
          _id: id,
          locale,
        };
      })
    : context.query.localizations
    ? (() => {
        const array = context.query.localizations.split("-");
        const id = array[0];
        const locale = array[1];

        return [
          {
            id,
            _id: id,
            locale,
          },
        ];
      })()
    : [];
  const localization = localizations.find((l) => l.locale === context.locale);

  try {
    const projectDataServer = await axios.get(
      appendFullStrapiUrl(
        `${ENPOINT_FIND_PROJECTS}/${
          localization ? localization.id : context.params.id
        }`,
        {
          _locale: context.locale,
        }
      )
    );

    return {
      props: {
        ...(await serverSideTranslations(context.locale, [
          "header",
          "footer",
          "project",
        ])),
        projectDataServer: projectDataServer.data,
        localizations,
        params: context.params,
      },
    };
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(context.locale, [
          "header",
          "footer",
          "project",
        ])),
        projectDataServer: {},
        localizations: [],
        params: context.params,
      },
    };
  }
};

export default Project;
