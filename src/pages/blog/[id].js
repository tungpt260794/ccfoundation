import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ReactMarkdown from "react-markdown";
import { useState, useCallback, useEffect } from "react";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import InputSimple from "components/FormControl/InputSimple";
import ButtonSimple from "components/FormControl/ButtonSimple";
import Loader from "components/other/Loader";

import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";
import { serviceFindBlog, serviceFindCategories } from "utils/services";

import styles from "./Blog.module.css";

const Blog = ({ blogDataServer, localizations, categoriesDataServer }) => {
  const { t } = useTranslation("blog");
  const [search, setSearch] = useState();
  const router = useRouter();
  const [blogData, setBlogData] = useState(blogDataServer);
  const [categoriesData, setCategoriesData] = useState(categoriesDataServer);
  const [loading, setLoading] = useState(true);

  const getData = useCallback(async () => {
    const _blogData = await serviceFindBlog({
      initData: blogDataServer ? blogDataServer.data : null,
      params: {
        id: localizations.find((l) => l.locale === router.locale)
          ? localizations.find((l) => l.locale === router.locale).id
          : router.params.id,
      },
      query: {
        _locale: router.locale,
      },
    });
    const _categoriesData = await serviceFindCategories({
      initData: categoriesDataServer ? categoriesDataServer.data : null,
      query: {
        _locale: router.locale,
      },
    });

    setBlogData(_blogData);
    setCategoriesData(_categoriesData);

    setLoading(false);
  }, [
    serviceFindBlog,
    serviceFindCategories,
    setBlogData,
    setCategoriesData,
    setLoading,
    router.locale,
    router.params,
    localizations,
    blogDataServer,
    categoriesDataServer,
  ]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Layout>
      <Head>
        <title>{t("head-title")}</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall
        variant="small"
        title={t("slogan.title")}
        backgroundUrl="/images/blogs-banner.png"
      />

      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="single-post">
                <div className="feature-img">
                  <img
                    className="img-fluid"
                    src={
                      blogData && blogData.data && blogData.data.image
                        ? appendFullStrapiUrl(blogData.data.image.url)
                        : ""
                    }
                    alt={
                      blogData && blogData.data && blogData.data.image
                        ? blogData.data.image.url
                        : ""
                    }
                  />
                </div>
                <div className="blog_details">
                  <h2>{blogData && blogData.data && blogData.data.title}</h2>

                  <div className={styles.blogContent}>
                    <ReactMarkdown>
                      {blogData &&
                        blogData.data &&
                        blogData.data.content &&
                        blogData.data.content.replace(
                          /[\]]{1}[(]{1}[\/]{1}[u]{1}[p]{1}[l]{1}[o]{1}[a]{1}[d]{1}[s]{1}/g,
                          `](${process.env.NEXT_PUBLIC_STRAPI_DOMAIN_API}/uploads`
                        )}
                    </ReactMarkdown>
                  </div>
                  {loading && <Loader />}
                </div>
              </div>
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
                        `/blogs?page=1&title=${search || ""}`,
                        `/blogs?page=1&title=${search || ""}`,
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

      const blogDataServer = await serviceFindBlog({
        params: { id: localization ? localization.id : context.params.id },
        query: { _locale: context.locale },
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
            "blog",
          ])),
          blogDataServer: blogDataServer,
          categoriesDataServer: categoriesDataServer,
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
        "blog",
      ])),
      localizations,
    },
  };
};

export default Blog;
