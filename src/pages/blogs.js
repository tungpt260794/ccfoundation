import Head from "next/head";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import Blog from "components/area/Blog";
import Paging from "components/area/Paging";
import InputSimple from "components/FormControl/InputSimple";
import ButtonSimple from "components/FormControl/ButtonSimple";

const Blogs = () => {
  const { t } = useTranslation("blogs");

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
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                <Blog
                  imgUrl="/templates/img/blog/single_blog_1.png"
                  day="15"
                  month="Tháng 1"
                  blogUrl="/blog"
                  title="Hợp đồng mực in của Google cho văn phòng 35 tầng mới"
                  description="Đó là ngôi sao thống trị ánh sáng thống trị chia năm cho thứ tư không có ngôi sao là anh ta trái đất nó trước tiên mà không có thiên đường tại chỗ gieo hạt sáng thứ hai nói."
                />

                <Blog
                  imgUrl="/templates/img/blog/single_blog_2.png"
                  day="15"
                  month="Tháng 1"
                  blogUrl="/blog"
                  title="Hợp đồng mực in của Google cho văn phòng 35 tầng mới"
                  description="Đó là ngôi sao thống trị ánh sáng thống trị chia năm cho thứ tư không có ngôi sao là anh ta trái đất nó trước tiên mà không có thiên đường tại chỗ gieo hạt sáng thứ hai nói."
                />

                <Blog
                  imgUrl="/templates/img/blog/single_blog_3.png"
                  day="15"
                  month="Tháng 1"
                  blogUrl="/blog"
                  title="Hợp đồng mực in của Google cho văn phòng 35 tầng mới"
                  description="Hợp đồng mực in của Google cho văn phòng 35 tầng mới"
                />

                <Paging />
              </div>
            </div>

            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <aside className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <InputSimple
                          type="text"
                          placeholder={t("formSearch.placeholder")}
                          icon={<i className="ti-search"></i>}
                          onChange={(e) => {
                            console.log(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <ButtonSimple
                      type="button"
                      label={t("formSearch.btnLabel")}
                      onClick={() => {
                        console.log("clicked");
                      }}
                    />
                  </form>
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

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "blogs"])),
    },
  };
};

export default Blogs;
