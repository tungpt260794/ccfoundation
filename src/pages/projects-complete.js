import Head from "next/head";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import DonateSmall from "components/area/DonateSmall";
import Paging from "components/area/Paging";

import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";
import { useProjects, useProjectsCount } from "utils/hooks";
import {
  PROJECTS_PAGE_LIMIT,
  ENPOINT_FIND_PROJECTS,
  ENPOINT_COUNT_PROJECTS,
} from "utils/helpers/const";

const ProjectsComplete = ({ projectsDataServer, projectsCountDataServer }) => {
  const { t } = useTranslation("projects-complete");
  const router = useRouter();
  const { projectsData } = useProjects({
    initialData: projectsDataServer,
    query: router.query.title
      ? {
          _start:
            (Number(router.query.page) || 1) * PROJECTS_PAGE_LIMIT -
            PROJECTS_PAGE_LIMIT,
          _limit: PROJECTS_PAGE_LIMIT,
          _locale: router.locale,
          completed: true,
          title: router.query.title,
        }
      : {
          _start:
            (Number(router.query.page) || 1) * PROJECTS_PAGE_LIMIT -
            PROJECTS_PAGE_LIMIT,
          _limit: PROJECTS_PAGE_LIMIT,
          _locale: router.locale,
          completed: true,
        },
  });
  const { projectsCountData } = useProjectsCount({
    initialData: projectsCountDataServer,
    query: router.query.title
      ? {
          _locale: router.locale,
          completed: true,
          title: router.query.title,
        }
      : {
          _locale: router.locale,
          completed: true,
        },
  });

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
            {projectsData && !!projectsData.length && (
              <>
                {projectsData.map((pd, i) => (
                  <div
                    key={`project${i}`}
                    className="col-xl-4 col-lg-4 col-md-6"
                  >
                    <DonateSmall
                      imgUrl={appendFullStrapiUrl(pd.image ? pd.image.url : "")}
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
                    count={projectsCountData}
                    limit={PROJECTS_PAGE_LIMIT}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (context) => {
  try {
    const projectsDataServer = await axios.get(
      appendFullStrapiUrl(
        ENPOINT_FIND_PROJECTS,
        context.query.title
          ? {
              _start:
                (context.query.page || 1) * PROJECTS_PAGE_LIMIT -
                PROJECTS_PAGE_LIMIT,
              _limit: PROJECTS_PAGE_LIMIT,
              _locale: context.locale,
              completed: true,
              title: context.query.title,
            }
          : {
              _start:
                (context.query.page || 1) * PROJECTS_PAGE_LIMIT -
                PROJECTS_PAGE_LIMIT,
              _limit: PROJECTS_PAGE_LIMIT,
              _locale: context.locale,
              completed: true,
            }
      )
    );
    const projectsCountDataServer = await axios.get(
      appendFullStrapiUrl(
        ENPOINT_COUNT_PROJECTS,
        context.query.title
          ? {
              _locale: context.locale,
              completed: true,
              title: context.query.title,
            }
          : {
              _locale: context.locale,
              completed: true,
            }
      )
    );

    return {
      props: {
        ...(await serverSideTranslations(context.locale, [
          "header",
          "footer",
          "projects-complete",
        ])),
        projectsDataServer: projectsDataServer.data,
        projectsCountDataServer: projectsCountDataServer.data,
      },
    };
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(context.locale, [
          "header",
          "footer",
          "projects-complete",
        ])),
        projectsDataServer: [],
        projectsCountDataServer: 0,
      },
    };
  }
};

export default ProjectsComplete;
