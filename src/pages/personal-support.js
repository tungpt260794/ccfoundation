import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const PersonalSupport = () => {
  return (
    <Layout>
      <Head>
        <title>Hỗ trợ cá nhân</title>
        <meta name="description" content="Personal Support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Hỗ trợ cá nhân" />

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
                <h3>CC Foundation</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="about_text_info">
                <p>
                  CC Foundation trực tiếp hỗ trợ tài chính nhằm cung cấp cơ hội
                  học tập và phát triển cho các cá nhân có sáng kiến/chương
                  trình/dự án phát triển sự nghiệp, cải thiện chất lượng cuộc
                  sống, hướng tới tương lai tươi sáng cho bản thân và cộng đồng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PersonalSupport;
