const BannerSmall = ({ title, backgroundUrl }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundUrl})`,
        padding: `200px 0 100px 0`,
      }}
      className="breadcam_area bradcam_bg"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="breadcam_text">
              <h3>{title}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSmall;
