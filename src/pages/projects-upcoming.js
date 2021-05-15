import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import DonateSmall from "components/area/DonateSmall";

const ProjectsUpcoming = () => {
  return (
    <Layout>
      <Head>
        <title>Các dự án sắp triển khai</title>
        <meta name="description" content="Projects Complete" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Các dự án sắp triển khai" />

      <div className="help_area help_area_page ">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-12">
              <div className="help_info">
                <div className="section_title mb-80">
                  <h3>
                    Họ đang chờ đợi sự giúp đỡ của bạn, hãy quyên góp tham gia
                    với chúng tôi
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/1.png"
                title="Help Yeati to continue her Primary Education"
                target="2.783.000đ"
                raised="1.530.000đ"
                linkHref="/project"
                linkLabel="ĐÓNG GÓP"
              />
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/2.png"
                title="Help Yeati to continue her Primary Education"
                target="2.783.000đ"
                raised="1.530.000đ"
                linkHref="/project"
                linkLabel="ĐÓNG GÓP"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/3.png"
                title="Help Yeati to continue her Primary Education"
                target="2.783.000đ"
                raised="1.530.000đ"
                linkHref="/project"
                linkLabel="ĐÓNG GÓP"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/4.png"
                title="Help Yeati to continue her Primary Education"
                target="2.783.000đ"
                raised="1.530.000đ"
                linkHref="/project"
                linkLabel="ĐÓNG GÓP"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/5.png"
                title="Help Yeati to continue her Primary Education"
                target="2.783.000đ"
                raised="1.530.000đ"
                linkHref="/project"
                linkLabel="ĐÓNG GÓP"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
              <DonateSmall
                imgUrl="/templates/img/help/6.png"
                title="Help Yeati to continue her Primary Education"
                target="2.783.000đ"
                raised="1.530.000đ"
                linkHref="/project"
                linkLabel="ĐÓNG GÓP"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsUpcoming;
