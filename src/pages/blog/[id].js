import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import InputSimple from "components/FormControl/InputSimple";
import ButtonSimple from "components/FormControl/ButtonSimple";

import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";
import { ENPOINT_FIND_BLOGS } from "utils/helpers/const";
import { useBlog } from "utils/hooks";

import styles from "./Blog.module.css";

const Blog = ({ blogDataServer, params, localizations }) => {
  const { t } = useTranslation("blog");
  const [search, setSearch] = useState();
  const router = useRouter();
  const { blogData } = useBlog({
    initialData: blogDataServer,
    params: {
      id: localizations.find((l) => l.locale === router.locale).id,
    },
    query: {
      _locale: router.locale,
    },
  });

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
                    src={appendFullStrapiUrl(
                      blogData.image ? blogData.image.url : ""
                    )}
                    alt={blogData.image}
                  />
                </div>
                <div className="blog_details">
                  <h2>{blogData.title}</h2>

                  <div className={styles.blogContent}>
                    <ReactMarkdown>
                      {blogData.content.replace(
                        "](",
                        `](${process.env.NEXT_PUBLIC_STRAPI_DOMAIN_API}`
                      )}
                    </ReactMarkdown>
                  </div>
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
                  <ul className="list cat-list">
                    <li>
                      <Link href="#">
                        <a className="d-flex">
                          <p>Dự án</p>
                          <p>(37)</p>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="#">
                        <a className="d-flex">
                          <p>Tin tức</p>
                          <p>(10)</p>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </aside>

                <aside className="single_sidebar_widget newsletter_widget">
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
                </aside>
              </div>
            </div>
          </div>
        </div>
      </section>
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
    : (() => {
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
      })();

  const localization = localizations.find((l) => l.locale === context.locale);

  const blogDataServer = await axios.get(
    appendFullStrapiUrl(`${ENPOINT_FIND_BLOGS}/${localization.id}`, {
      _locale: context.locale,
    })
  );

  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "header",
        "footer",
        "blog",
      ])),
      blogDataServer: blogDataServer.data,
      localizations,
      params: context.params,
    },
  };
};

export default Blog;
