import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";
import { useState, useEffect } from "react";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import Blog from "components/area/Blog";
import Paging from "components/area/Paging";
import InputSimple from "components/FormControl/InputSimple";
import ButtonSimple from "components/FormControl/ButtonSimple";

import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";
import getValueByLocale from "utils/helpers/getValueByLocale";
import { useBlogs, useBlogsCount, useCategories } from "utils/hooks";
import formatDate from "utils/helpers/formatDate";
import {
  BLOGS_PAGE_LIMIT,
  ENPOINT_FIND_BLOGS,
  ENPOINT_COUNT_BLOGS,
  ENPOINT_FIND_CATEGORIES,
} from "utils/helpers/const";

const Blogs = ({
  blogsDataServer,
  blogsCountDataServer,
  categoriesDataServer,
}) => {
  const { t } = useTranslation("blogs");
  const [search, setSearch] = useState();
  const router = useRouter();
  const { blogsData } = useBlogs({
    initialData: blogsDataServer,
    query: {
      _start:
        (Number(router.query.page) || 1) * BLOGS_PAGE_LIMIT - BLOGS_PAGE_LIMIT,
      _limit: BLOGS_PAGE_LIMIT,
      _locale: router.locale,
      title_contains: router.query.title,
      ...(router.query.category
        ? {
            "categories.id_in": router.query.category,
          }
        : {}),
    },
  });
  const { blogsCountData } = useBlogsCount({
    initialData: blogsCountDataServer,
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
  const { categoriesData } = useCategories({
    initialData: categoriesDataServer,
    query: {
      _locale: router.locale,
    },
  });

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
                {categoriesData.find((cd) =>
                  router.query.category
                    ? router.query.category.length > 0
                      ? router.query.category.find((c) => c === cd.id)
                      : router.query.category === cd.id
                    : false
                )
                  ? categoriesData.find((cd) =>
                      router.query.category
                        ? router.query.category.length > 0
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
              {blogsData && !!blogsData.length && (
                <div className="blog_left_sidebar">
                  {blogsData.map((bd, i) => (
                    <Blog
                      key={`blog${i}`}
                      imgUrl={bd.image ? bd.image.url : ""}
                      day={formatDate({
                        value: bd.updatedAt,
                        formatStr: "dd",
                        type: "utc",
                      })}
                      month={formatDate({
                        value: bd.updatedAt,
                        formatStr: getValueByLocale({ vi: "M", en: "LLL" }),
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

                  <Paging count={blogsCountData} limit={BLOGS_PAGE_LIMIT} />
                </div>
              )}
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
                  {categoriesData && !!categoriesData.length && (
                    <ul className="list cat-list">
                      {categoriesData.map((cd, i) => (
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
                              <p>({cd.blogs && cd.blogs.length})</p>
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
  try {
    const blogsDataServer = await axios.get(
      appendFullStrapiUrl(ENPOINT_FIND_BLOGS, {
        _start: (context.query.page || 1) * BLOGS_PAGE_LIMIT - BLOGS_PAGE_LIMIT,
        _limit: BLOGS_PAGE_LIMIT,
        _locale: context.locale,
        title_contains: context.query.title,
        ...(context.query.category
          ? {
              "categories.id_in": context.query.category,
            }
          : {}),
      })
    );
    const blogsCountDataServer = await axios.get(
      appendFullStrapiUrl(ENPOINT_COUNT_BLOGS, {
        _locale: context.locale,
        title_contains: context.query.title,
        ...(context.query.category
          ? {
              "categories.id_in": context.query.category,
            }
          : {}),
      })
    );
    const categoriesDataServer = await axios.get(
      appendFullStrapiUrl(ENPOINT_FIND_CATEGORIES, {
        _locale: context.locale,
      })
    );

    return {
      props: {
        ...(await serverSideTranslations(context.locale, [
          "header",
          "footer",
          "blogs",
        ])),
        blogsDataServer: blogsDataServer.data,
        blogsCountDataServer: blogsCountDataServer.data,
        categoriesDataServer: categoriesDataServer.data,
      },
    };
  } catch (error) {
    return {
      props: {
        ...(await serverSideTranslations(context.locale, [
          "header",
          "footer",
          "blogs",
        ])),
        blogsDataServer: [],
        blogsCountDataServer: 0,
        categoriesDataServer: [],
      },
    };
  }
};

export default Blogs;
