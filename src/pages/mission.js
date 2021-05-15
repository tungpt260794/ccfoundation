import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const Mission = () => {
  return (
    <Layout>
      <Head>
        <title>Sứ mệnh</title>
        <meta name="description" content="Mission" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Sứ mệnh" />

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
                <h3>CC Foundation: Chắp cánh cơ hội - Kết nối yêu thương</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="about_text_info">
                <p>
                  CC Foundation hỗ trợ tài chính cho các sáng kiến/chương
                  trình/dự án phát triển cộng đồng bền vững, hướng tới 05 giá
                  trị cốt lõi: minh bạch, bền vững, hiệu quả, lan tỏa và nhân
                  văn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Mission;
