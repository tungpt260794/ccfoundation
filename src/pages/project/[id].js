import Head from "next/head";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ReactMarkdown from "react-markdown";
import { useState, useCallback, useEffect } from "react";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import DonateBig from "components/area/DonateBig";

import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";
import { serviceFindProject } from "utils/services";
import Loader from "components/other/Loader";

import styles from "./Project.module.css";

const Project = ({ projectDataServer, localizations }) => {
  const { t } = useTranslation("project");
  const router = useRouter();
  const [projectData, setProjectData] = useState(projectDataServer);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    const _projectData = await serviceFindProject({
      initData: projectDataServer ? projectDataServer.data : null,
      params: {
        id: localizations.find((l) => l.locale === router.locale)
          ? localizations.find((l) => l.locale === router.locale).id
          : router.params.id,
      },
      query: {
        _locale: router.locale,
      },
    });

    setProjectData(_projectData);

    setLoading(false);
  }, [
    serviceFindProject,
    setProjectData,
    setLoading,
    router.locale,
    router.params,
    localizations,
    projectDataServer,
  ]);

  useEffect(() => {
    getData();
  }, [getData]);

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

      <div className="container" style={{ marginTop: 60 }}>
        {loading && <Loader />}
        <DonateBig
          title={projectData && projectData.data && projectData.data.title}
          content={
            <div className={styles.projectContent}>
              <ReactMarkdown>
                {projectData &&
                  projectData.data &&
                  projectData.data.content &&
                  projectData.data.content.replace(
                    "](",
                    `](${process.env.NEXT_PUBLIC_STRAPI_DOMAIN_API}`
                  )}
              </ReactMarkdown>
            </div>
          }
          imgUrl={
            projectData && projectData.data && projectData.data.image
              ? appendFullStrapiUrl(projectData.data.image.url)
              : ""
          }
        />
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const isCsr =
    !context ||
    !context.req ||
    (context.req.url && context.req.url.startsWith("/_next/data"));

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

  if (!isCsr) {
    try {
      const localization = localizations.find(
        (l) => l.locale === context.locale
      );

      const projectDataServer = await serviceFindProject({
        params: { id: localization ? localization.id : context.params.id },
        query: { _locale: context.locale },
      });

      return {
        props: {
          ...(await serverSideTranslations(context.locale, [
            "header",
            "footer",
            "project",
          ])),
          projectDataServer: projectDataServer,
          localizations,
        },
      };
    } catch (error) {}
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "header",
        "footer",
        "project",
      ])),
      localizations,
    },
  };
};

export default Project;
