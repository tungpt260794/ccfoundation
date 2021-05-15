import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const CoreValues = () => {
  return (
    <Layout>
      <Head>
        <title>Giá trị cốt lõi</title>
        <meta name="description" content="Core Values" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Giá trị cốt lõi" />

      <div className="about_page">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-md-6">
              <div className="about_image">
                <img src="/templates/img/about/2.png" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-md-6">
              <div className="about_image">
                <img src="/templates/img/about/1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <h3>
                  CC Foundation: Minh bạch - Bền vững - Hiệu quả - Lan tỏa -
                  Nhân văn
                </h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="about_text_info">
                <p>
                  CC Foundation luôn hoạt động minh bạch, đúng luật, mang lại
                  những giá trị phát triển bền vững và hiệu quả cho cả tự nhiên
                  và xã hội, góp phần lan tỏa những hành động mang lại lợi ích
                  và giá trị nhân văn cho cả cộng đồng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CoreValues;
