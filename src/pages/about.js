import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>Về chúng tôi</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Về chúng tôi" />

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
            <div class="col-xl-6 col-md-6">
              <div class="about_text_info">
                <p>
                  CC Foundation được thành lập ngày …/5/2021 nhằm hỗ trợ triển
                  khai các sáng kiến/chương trình/dự án phát triển cộng đồng bền
                  vững thông qua việc tài trợ tài chính cho các cá nhân/tổ chức
                  có liên quan theo đúng quy định của pháp luật.
                </p>
              </div>
            </div>
            <div class="col-xl-6 col-md-6">
              <div class="about_text_info">
                <p>
                  CC Foundation được tổ chức và hoạt động theo nguyên tắc phi
                  lợi nhuận, hoàn toàn tự nguyện, không chủ động huy động vốn,
                  tự trang trải kinh phí và tự chịu trách nhiệm trước pháp luật,
                  công khai, minh bạch về tài chính, tài sản và các hoạt động,
                  không phân biệt đối xử, độc lập và trung lập với các tổ chức
                  chính trị, kinh tế và tôn giáo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
