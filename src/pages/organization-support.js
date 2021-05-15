import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const OrganizationSupport = () => {
  return (
    <Layout>
      <Head>
        <title>Hỗ trợ tổ chức</title>
        <meta name="description" content="Organization Support" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Hỗ trợ tổ chức" />

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
                  CC Foundation trực tiếp cung cấp các gói hỗ trợ tài chính cho
                  các tổ chức có sáng kiến/chương trình/dự án mang lại giá trị
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

export default OrganizationSupport;
