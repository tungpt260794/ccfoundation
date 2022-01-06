import Head from "next/head";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect, useCallback } from "react";

import Layout from "components/Layout";
// import BannerBig from "components/area/BannerBig";
// import DonateBig from "components/area/DonateBig";
import PostBig from "components/area/PostBig";
// import SliderSmall from "components/area/SliderSmall";
// import DonateSmall from "components/area/DonateSmall";
import BannerSmall from "components/area/BannerSmall";
import Loader from "components/other/Loader";
import Blog from "components/area/Blog";
import PersonArea from "components/area/PersonArea";

import getValueByLocale from "utils/helpers/getValueByLocale";
import { serviceFindBlogs } from "utils/services";
import formatDate from "utils/helpers/formatDate";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const Home = ({ blogsDataServer }) => {
  const { t } = useTranslation("home");
  const router = useRouter();
  const [blogsData, setBlogsData] = useState(blogsDataServer);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    const _blogsData = await serviceFindBlogs({
      initData: blogsDataServer ? blogsDataServer.data : null,
      query: {
        _start: 0,
        _limit: 1,
        _locale: router.locale,
        _sort: "published_at:DESC",
      },
    });

    setBlogsData(_blogsData);

    setLoading(false);
  }, [
    serviceFindBlogs,
    setBlogsData,
    setLoading,
    router.locale,
    blogsDataServer,
  ]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Layout>
      <Head>
        <title>{t("head-title")}</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <BannerBig
        variant="big"
        title={t("slogan.title")}
        content={t("slogan.content")}
        backgroundUrl="/images/home-banner.png"
        linkHref="/become-volunteer"
        linkLabel={t("slogan.link-label")}
      /> */}
      <BannerSmall
        variant="small"
        title={t("slogan.title")}
        backgroundUrl="/images/home-banner.png"
        isMove={true}
      />

      <PostBig
        imgUrl="/images/home-about-us.png"
        type={t("aboutUs.type")}
        title={t("aboutUs.title")}
        description={t("aboutUs.description")}
        linkHref="/about"
        linkLabel={t("aboutUs.link-label")}
      />

      <div className="about_area gray-bg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12">
              {blogsData && blogsData.data && !!blogsData.data.length && (
                <div className="blog_left_sidebar">
                  {blogsData.data.map((bd, i) => (
                    <Blog
                      key={`blog${i}`}
                      imgUrl={bd.image ? appendFullStrapiUrl(bd.image.url) : ""}
                      day={formatDate({
                        value: bd.published_at,
                        formatStr: "dd",
                        type: "utc",
                      })}
                      month={formatDate({
                        value: bd.published_at,
                        formatStr: getValueByLocale(router.locale),
                        type: "utc",
                      })}
                      blogUrl={`/blog/${bd.id}?localizations=${bd.id}-${
                        bd.locale
                      }&${bd.localizations
                        .map((l) => `localizations=${l.id}-${l.locale}`)
                        .join("&")}`}
                      title={bd.title}
                      description={bd.description}
                    />
                  ))}
                </div>
              )}
              {loading && <Loader />}
            </div>
          </div>
        </div>
      </div>

      <div className="volunteers_area" style={{ paddingTop: 60 }}>
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
            <div className="col-xl-2 col-md-3">
              <PersonArea
                imgUrl="/images/bach-ngoc-an.png"
                name={t("persons.name1")}
                position={t("persons.position1")}
              />
            </div>
            <div className="col-xl-2 col-md-3">
              <PersonArea
                imgUrl="/images/vo-hang-phuong.png"
                name={t("persons.name2")}
                position={t("persons.position2")}
              />
            </div>
            <div className="col-xl-2 col-md-3">
              <PersonArea
                imgUrl="/images/ganga-wanduragala.png"
                name={t("persons.name3")}
                position={t("persons.position3")}
              />
            </div>
            <div className="col-xl-2 col-md-3">
              <PersonArea
                imgUrl="/images/le-hong-hien.png"
                name={t("persons.name4")}
                position={t("persons.position4")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* <SliderSmall
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
      /> */}
    </Layout>
  );
};

export const getStaticProps = async (context) => {
  const isCsr =
    !context ||
    !context.req ||
    (context.req.url && context.req.url.startsWith("/_next/data"));

  if (!isCsr) {
    try {
      const blogsDataServer = await serviceFindBlogs({
        query: {
          _start: 0,
          _limit: 1,
          _locale: context.locale,
          _sort: "published_at:DESC",
        },
      });

      return {
        props: {
          ...(await serverSideTranslations(context.locale, [
            "header",
            "footer",
            "home",
          ])),
          blogsDataServer: blogsDataServer,
        },
      };
    } catch (error) {}
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "header",
        "footer",
        "home",
        "blogs",
      ])),
    },
  };
};

export default Home;
