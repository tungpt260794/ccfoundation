import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
        <meta name="description" content="Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Blog" />

      <section className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div class="single-post">
                <div class="feature-img">
                  <img
                    class="img-fluid"
                    src="/templates/img/blog/single_blog_1.png"
                    alt=""
                  />
                </div>
                <div class="blog_details">
                  <h2>
                    Thứ hai phân chia từ hình thức cá quái thú làm cho tất cả
                    các biển đều tập hợp chúng tôi nói rằng ông của chúng tôi
                  </h2>

                  <p class="excert">
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
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Nhập tên bài viết"
                        />
                        <div className="input-group-append">
                          <button className="btn" type="button">
                            <i className="ti-search"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Tìm kiếm
                    </button>
                  </form>
                </aside>

                <aside className="single_sidebar_widget post_category_widget">
                  <h4 className="widget_title">Thể loại</h4>
                  <ul className="list cat-list">
                    <li>
                      <a href="#" className="d-flex">
                        <p>Dự án</p>
                        <p>(37)</p>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="d-flex">
                        <p>Tin tức</p>
                        <p>(10)</p>
                      </a>
                    </li>
                  </ul>
                </aside>

                <aside className="single_sidebar_widget newsletter_widget">
                  <h4 className="widget_title">Đăng ký bản tin</h4>

                  <form action="#">
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Nhập email của bạn"
                        required
                      />
                    </div>
                    <button
                      className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Đăng ký
                    </button>
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

export default Blog;
