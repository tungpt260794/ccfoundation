import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const History = () => {
  return (
    <Layout>
      <Head>
        <title>Lịch sử hoạt động</title>
        <meta name="description" content="Activity History" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Lịch sử hoạt động" />

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
                  Được thành lập ngày …/5/2021, CC Foundation đã, đang và sẽ
                  triển khai các chương trình hỗ trợ tài chính cho các cá nhân,
                  tổ chức có các sáng kiến/chương trình/dự án mang lại giá trị
                  phát triển bền vững cho cộng đồng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default History;
