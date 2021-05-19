import Link from "next/link";

const DonateBig = ({
  type,
  title,
  content,
  target,
  raised,
  linkHref,
  linkLabel,
  imgUrl,
  progressValueNow,
}) => {
  return (
    <div className="causes_area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-6">
            <div className="causes_info">
              <div className="section_title">
                <span>{type}</span>
                <h3>{title}</h3>
              </div>
              <p>{content}</p>
              <div className="target_rais_area d-flex">
                {target && (
                  <div className="single_raise">
                    <span>Mục tiêu :</span>
                    <h4>{target}</h4>
                  </div>
                )}
                {raised && (
                  <div className="single_raise">
                    <span>Đã quyên góp :</span>
                    <h4>{raised}</h4>
                  </div>
                )}
                <div className="doante_btn">
                  {linkHref && linkLabel && (
                    <Link href={linkHref}>
                      <a className="boxed_btn3">{linkLabel}</a>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="causes_thumb">
              <img className="img-fluid" src={imgUrl} alt={imgUrl} />
              {progressValueNow && (
                <div className="custom_progress_bar">
                  <div className="progress">
                    <div
                      className="progress-bar wow slideInLeft"
                      role="progressbar"
                      aria-valuenow={progressValueNow}
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style={{ width: `${progressValueNow}%` }}
                    >
                      <div className="value_progress">
                        <span>{progressValueNow}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateBig;
