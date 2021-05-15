import Head from "next/head";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import DonateBig from "components/area/DonateBig";

const Project = () => {
  return (
    <Layout>
      <Head>
        <title>Dự án</title>
        <meta name="description" content="Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall variant="small" title="Dự án" />

      <DonateBig
        title="Hỗ trợ Nahid cho Bệnh viêm phổi"
        content="Truyền cảm hứng cho nhân viên và tổ chức để hỗ trợ các hoạt
                  động mà họ quan tâm. Chúng tôi làm điều này để mang lại nhiều
                  tài nguyên hơn cho các tổ chức phi lợi nhuận đang thay đổi thế
                  giới của chúng ta."
        target="2.783.000đ"
        raised="1.530.000đ"
        linkHref="#"
        linkLabel="ĐÓNG GÓP"
        imgUrl="/templates/img/causes/1.png"
        progressValueNow={90}
      />
    </Layout>
  );
};

export default Project;
