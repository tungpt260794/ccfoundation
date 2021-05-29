import Head from "next/head";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect, useCallback } from "react";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import DonateSmall from "components/area/DonateSmall";
import Paging from "components/area/Paging";
import Loader from "components/other/Loader";

import { serviceFindProjects, serviceCountProjects } from "utils/services";
import { PROJECTS_PAGE_LIMIT } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const ProjectsUpcoming = ({ projectsDataServer, projectsCountServer }) => {
  const { t } = useTranslation("projects-upcoming");
  const router = useRouter();
  const [projectsData, setProjectsData] = useState(projectsDataServer);
  const [projectsCount, setProjectsCount] = useState(projectsCountServer);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    const _projectsData = await serviceFindProjects({
      initData: projectsDataServer ? projectsDataServer.data : null,
      query: {
        _start:
          (Number(router.query.page) || 1) * PROJECTS_PAGE_LIMIT -
          PROJECTS_PAGE_LIMIT,
        _limit: PROJECTS_PAGE_LIMIT,
        _locale: router.locale,
        completed: false,
        _sort: "published_at:DESC",
      },
    });
    const _projectsCount = await serviceCountProjects({
      initData: projectsCountServer ? projectsCountServer.data : null,
      query: {
        _locale: router.locale,
        completed: false,
      },
    });

    setProjectsData(_projectsData);
    setProjectsCount(_projectsCount);

    setLoading(false);
  }, [
    serviceFindProjects,
    serviceCountProjects,
    setProjectsData,
    setProjectsCount,
    setLoading,
    router.locale,
    router.query.page,
    projectsDataServer,
    projectsCountServer,
  ]);

  useEffect(() => {
    getData();
  }, [getData]);

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
        backgroundUrl="/images/projects-complete-banner.png"
      />

      <div className="help_area help_area_page ">
        <div className="container">
          <div className="row">
            {projectsData && projectsData.data && !!projectsData.data.length && (
              <>
                {projectsData.data.map((pd, i) => (
                  <div
                    key={`project${i}`}
                    className="col-xl-4 col-lg-4 col-md-6"
                  >
                    <DonateSmall
                      imgUrl={pd.image ? appendFullStrapiUrl(pd.image.url) : ""}
                      title={pd.title}
                      linkHref={`/project/${pd.id}?localizations=${pd.id}-${
                        pd.locale
                      }&${pd.localizations
                        .map((l) => `localizations=${l.id}-${l.locale}`)
                        .join("&")}`}
                      linkLabel={t("item.link-label")}
                    />
                  </div>
                ))}

                <div className="col-xl-12">
                  <Paging
                    count={projectsCount && projectsCount.data}
                    limit={PROJECTS_PAGE_LIMIT}
                  />
                </div>
              </>
            )}
            {loading && <Loader />}
            {!loading &&
              (!projectsData ||
                !projectsData.data ||
                projectsData.data.length === 0) &&
              t("updating")}
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(/images/projects-complete-banner.png)`,
        }}
        className="become_volunter volunter_bg_1"
      ></div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  const isCsr =
    !context ||
    !context.req ||
    (context.req.url && context.req.url.startsWith("/_next/data"));

  if (!isCsr) {
    try {
      const projectsDataServer = await serviceFindProjects({
        query: {
          _start:
            (context.query.page || 1) * PROJECTS_PAGE_LIMIT -
            PROJECTS_PAGE_LIMIT,
          _limit: PROJECTS_PAGE_LIMIT,
          _locale: context.locale,
          completed: false,
          _sort: "published_at:DESC",
        },
      });
      const projectsCountServer = await serviceCountProjects({
        query: {
          _locale: context.locale,
          completed: false,
        },
      });

      return {
        props: {
          ...(await serverSideTranslations(context.locale, [
            "header",
            "footer",
            "projects-upcoming",
          ])),
          projectsDataServer: projectsDataServer,
          projectsCountServer: projectsCountServer,
        },
      };
    } catch (error) {}
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "header",
        "footer",
        "projects-upcoming",
      ])),
    },
  };
};

export default ProjectsUpcoming;
