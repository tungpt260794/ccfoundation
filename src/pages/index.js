import Head from "next/head";

import Layout from "components/Layout";
import BannerBig from "components/area/BannerBig";
import DonateBig from "components/area/DonateBig";
import PostBig from "components/area/PostBig";
import SliderSmall from "components/area/SliderSmall";
import DonateSmall from "components/area/DonateSmall";

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>Trang chủ</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerBig
        variant="big"
        title="CHẮP CÁNH CƠ HỘI - KẾT NỐI YÊU THƯƠNG"
        content="Chúng tôi đồng hành cùng các cá nhân/tổ chức có nhu cầu hỗ
                    trợ về tài chính nhằm triển khai các sáng kiến/chương
                    trình/dự án mang lại giá trị phát triển bền vững cho cộng
                    đồng trong cả ngắn, trung và dài hạn."
        linkHref="#"
        linkLabel="THAM GIA CÙNG CHÚNG TÔI"
      />

      <DonateBig
        type="Hoạt động sắp tới"
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

      <PostBig
        imgUrl="/templates/img/about/about.png"
        contentCenterImg={
          <>
            <span>Đã Giúp Đỡ</span>
            <h3>356728</h3>
            <p>Hoàn cảnh khó khăn trên 64 tỉnh thành Việt Nam</p>
          </>
        }
        type="Về chúng tôi"
        title="CC Foundation"
        description="CC Foundation được thành lập ngày …/5/2021 nhằm hỗ trợ triển
        khai các sáng kiến/chương trình/dự án phát triển cộng đồng bền
        vững thông qua việc tài trợ tài chính cho các cá nhân/tổ chức có
        liên quan theo đúng quy định của pháp luật."
        linkHref="#"
        linkLabel="XEM THÊM"
      />

      <SliderSmall
        type="Hãy giúp đỡ họ"
        title="Họ Cần Sự Giúp Đỡ Của Bạn"
        description="Truyền cảm hứng cho nhân viên và tổ chức để hỗ trợ các nguyên
                nhân mà họ quan tâm làm điều này để mang lại nhiều nguồn lực
                hơn."
        linkHref="#"
        linkLabel="Xem Thêm"
        items={[
          <DonateSmall
            imgUrl="/templates/img/help/1.png"
            title="Help Yeati to continue her Primary Education"
            target="2.783.000đ"
            raised="1.530.000đ"
            linkHref="#"
            linkLabel="ĐÓNG GÓP"
          />,
          <DonateSmall
            imgUrl="/templates/img/help/2.png"
            title="Help Yeati to continue her Primary Education"
            target="2.783.000đ"
            raised="1.530.000đ"
            linkHref="#"
            linkLabel="ĐÓNG GÓP"
          />,
        ]}
      />
    </Layout>
  );
};

export default Home;
