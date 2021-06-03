import TextScroller from "components/other/TextScroller";

const BannerSmall = ({ title, backgroundUrl, isMove }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        padding: `250px 0 40px 0`,
      }}
      className="breadcam_area bradcam_bg"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcam_text">
              {!isMove && <h3>{title}</h3>}
              {isMove && <TextScroller text={<h3>{title}</h3>} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSmall;
