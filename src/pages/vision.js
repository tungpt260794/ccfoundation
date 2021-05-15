import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const Vision = () => {
  return (
    <Layout>
      <Head>
        <title>Tầm nhìn</title>
        <meta name="description" content="Vision" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Tầm nhìn" />

      <div class="about_page">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-md-6">
              <div class="about_image">
                <img src="/templates/img/about/2.png" alt="" />
              </div>
            </div>
            <div class="col-xl-6 col-md-6">
              <div class="about_image">
                <img src="/templates/img/about/1.png" alt="" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12">
              <div class="about_info">
                <h3>CC Foundation</h3>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-xl-12 col-md-12">
              <div class="about_text_info">
                <p>
                  CC Foundation đồng hành cùng các cá nhân/tổ chức có nhu cầu hỗ
                  trợ về tài chính nhằm triển khai các sáng kiến/chương trình/dự
                  án mang lại giá trị phát triển bền vững cho cộng đồng trong cả
                  ngắn, trung và dài hạn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vision;
