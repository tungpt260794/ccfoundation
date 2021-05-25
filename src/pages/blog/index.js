import Head from "next/head";
import Link from "next/link";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import InputSimple from "components/FormControl/InputSimple";
import ButtonSimple from "components/FormControl/ButtonSimple";

const Blog = () => {
  const { t } = useTranslation("blog");

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
                    src="/templates/img/blog/single_blog_1.png"
                    alt=""
                  />
                </div>
                <div className="blog_details">
                  <h2>
                    Thứ hai phân chia từ hình thức cá quái thú làm cho tất cả
                    các biển đều tập hợp chúng tôi nói rằng ông của chúng tôi
                  </h2>

                  <p className="excert">
                    Chương trình đào tạo MCSE có những người ủng hộ và những
                    người gièm pha. Một số người không hiểu tại sao bạn phải chi
                    tiền cho chương trình đào tạo khi bạn có thể tự nhận tài
                    liệu học MCSE với giá chỉ bằng một phần nhỏ của chương trình
                    đào tạo. Tuy nhiên, ai là người có ý chí
                  </p>
                  <p>
                    Chương trình đào tạo MCSE có những người ủng hộ và những
                    người gièm pha. Một số người không hiểu tại sao bạn phải chi
                    tiền cho chương trình đào tạo khi bạn có thể tự nhận tài
                    liệu học MCSE với giá chỉ bằng một phần nhỏ của chương trình
                    đào tạo. Tuy nhiên, ai là người có ý chí
                  </p>

                  <p>
                    Chương trình đào tạo MCSE có những người ủng hộ và những
                    người gièm pha. Một số người không hiểu tại sao bạn phải chi
                    tiền cho chương trình đào tạo khi bạn có thể tự nhận tài
                    liệu học MCSE với giá chỉ bằng một phần nhỏ của chương trình
                    đào tạo. Tuy nhiên, ai là người có ý chí
                  </p>
                  <p>
                    Chương trình đào tạo MCSE có những người ủng hộ và những
                    người gièm pha. Một số người không hiểu tại sao bạn phải chi
                    tiền cho chương trình đào tạo khi bạn có thể tự nhận tài
                    liệu học MCSE với giá chỉ bằng một phần nhỏ của chương trình
                    đào tạo. Tuy nhiên, ai là người có ý chí
                  </p>
                </div>
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

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["header", "footer", "blog"])),
    },
  };
};

export default Blog;
