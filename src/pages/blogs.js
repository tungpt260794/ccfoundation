import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import Blog from "components/area/Blog";
import Paging from "components/area/Paging";

const Blogs = () => {
  return (
    <Layout>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="Blogs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Blogs" />

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

export default Blogs;
