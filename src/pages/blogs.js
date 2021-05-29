import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState, useEffect, useCallback } from "react";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import Blog from "components/area/Blog";
import Paging from "components/area/Paging";
import InputSimple from "components/FormControl/InputSimple";
import ButtonSimple from "components/FormControl/ButtonSimple";
import Loader from "components/other/Loader";

import getValueByLocale from "utils/helpers/getValueByLocale";
import {
  serviceFindBlogs,
  serviceCountBlogs,
  serviceFindCategories,
} from "utils/services";
import formatDate from "utils/helpers/formatDate";
import { BLOGS_PAGE_LIMIT } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const Blogs = ({ blogsDataServer, blogsCountServer, categoriesDataServer }) => {
  const { t } = useTranslation("blogs");
  const [search, setSearch] = useState();
  const router = useRouter();
  const [blogsData, setBlogsData] = useState(blogsDataServer);
  const [blogsCount, setBlogsCount] = useState(blogsCountServer);
  const [categoriesData, setCategoriesData] = useState(categoriesDataServer);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    const _blogsData = await serviceFindBlogs({
      initData: blogsDataServer ? blogsDataServer.data : null,
      query: {
        _start:
          (Number(router.query.page) || 1) * BLOGS_PAGE_LIMIT -
          BLOGS_PAGE_LIMIT,
        _limit: BLOGS_PAGE_LIMIT,
        _locale: router.locale,
        title_contains: router.query.title,
        _sort: "published_at:DESC",
        ...(router.query.category
          ? {
              "categories.id_in": router.query.category,
            }
          : {}),
      },
    });
    const _blogsCount = await serviceCountBlogs({
      initData: blogsCountServer ? blogsCountServer.data : null,
      query: {
        _locale: router.locale,
        title_contains: router.query.title,
        ...(router.query.category
          ? {
              "categories.id_in": router.query.category,
            }
          : {}),
      },
    });
    const _categoriesData = await serviceFindCategories({
      initData: categoriesDataServer ? categoriesDataServer.data : null,
      query: {
        _locale: router.locale,
      },
    });

    setBlogsData(_blogsData);
    setBlogsCount(_blogsCount);
    setCategoriesData(_categoriesData);

    setLoading(false);
  }, [
    serviceFindBlogs,
    serviceCountBlogs,
    serviceFindCategories,
    setBlogsData,
    setBlogsCount,
    setCategoriesData,
    setLoading,
    router.locale,
    router.query.page,
    router.query.title,
    router.query.category,
    blogsDataServer,
    blogsCountServer,
    categoriesDataServer,
  ]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Layout>
      <Head>
        <title>{t("head-title")}</title>
        <meta name="description" content="Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall
        variant="small"
        title={t("slogan.title")}
        backgroundUrl="/images/blogs-banner.png"
      />

      <section className="blog_area section-padding">
        <div className="container">
          {router.query && router.query.category && (
            <div className="row">
              <h1 style={{ marginBottom: 24 }}>
                {categoriesData &&
                categoriesData.data.find((cd) =>
                  router.query.category
                    ? Array.isArray(router.query.category)
                      ? router.query.category.find((c) => c === cd.id)
                      : router.query.category === cd.id
                    : false
                )
                  ? categoriesData.data.find((cd) =>
                      router.query.category
                        ? Array.isArray(router.query.category)
                          ? router.query.category.find((c) => c === cd.id)
                          : router.query.category === cd.id
                        : false
                    ).name
                  : ""}
              </h1>
            </div>
          )}
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
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

                  <Paging
                    count={blogsCount && blogsCount.data}
                    limit={BLOGS_PAGE_LIMIT}
                  />
                </div>
              )}
              {loading && <Loader />}
            </div>

            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <div className="form-group">
                    <div className="input-group mb-3">
                      <InputSimple
                        type="text"
                        placeholder={t("formSearch.placeholder")}
                        icon={<i className="ti-search"></i>}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                    </div>
                  </div>
                  <ButtonSimple
                    type="button"
                    label={t("formSearch.btnLabel")}
                    onClick={() => {
                      router.push(
                        {
                          path: router.pathname,
                          query: { page: 1, title: search },
                        },
                        {
                          path: router.pathname,
                          query: { page: 1, title: search },
                        },
                        { locale: router.locale }
                      );
                    }}
                  />
                </aside>

                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">{t("categories.title")}</h4>
                  {categoriesData &&
                    categoriesData.data &&
                    !!categoriesData.data.length && (
                      <ul className="list cat-list">
                        {categoriesData.data.map((cd, i) => (
                          <li key={`category${i}`}>
                            <Link
                              href={`/blogs?page=1&category=${
                                cd.id
                              }&${cd.localizations
                                .map((l) => `category=${l.id}`)
                                .join("&")}`}
                            >
                              <a className="d-flex">
                                <p>{cd.name}</p>
                                <p style={{ marginLeft: 4 }}>
                                  ({cd.blogs && cd.blogs.length})
                                </p>
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                </aside>

                {/* <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title">
                    {t("formSignUpNewsletter.title")}
                  </h4>

                  <form action="#">
                    <div className="form-group">
                      <InputSimple
                        type="text"
                        placeholder={t("formSignUpNewsletter.placeholder")}
                        onChange={(e) => {
                          console.log(e.target.value);
                        }}
                      />
                    </div>
                    <ButtonSimple
                      type="button"
                      label={t("formSignUpNewsletter.btnLabel")}
                      onClick={() => {
                        console.log("clicked");
                      }}
                    />
                  </form>
                </aside> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        style={{
          backgroundImage: `url(/images/blogs-banner.png)`,
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
      const blogsDataServer = await serviceFindBlogs({
        query: {
          _start:
            (Number(context.query.page) || 1) * BLOGS_PAGE_LIMIT -
            BLOGS_PAGE_LIMIT,
          _limit: BLOGS_PAGE_LIMIT,
          _locale: context.locale,
          title_contains: context.query.title,
          _sort: "published_at:DESC",
          ...(context.query.category
            ? {
                "categories.id_in": context.query.category,
              }
            : {}),
        },
      });
      const blogsCountServer = await serviceCountBlogs({
        query: {
          _locale: context.locale,
          title_contains: context.query.title,
          ...(context.query.category
            ? {
                "categories.id_in": context.query.category,
              }
            : {}),
        },
      });
      const categoriesDataServer = await serviceFindCategories({
        query: {
          _locale: context.locale,
        },
      });

      return {
        props: {
          ...(await serverSideTranslations(context.locale, [
            "header",
            "footer",
            "blogs",
          ])),
          blogsDataServer: blogsDataServer,
          blogsCountServer: blogsCountServer,
          categoriesDataServer: categoriesDataServer,
        },
      };
    } catch (error) {}
  }

  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "header",
        "footer",
        "blogs",
      ])),
    },
  };
};

export default Blogs;
