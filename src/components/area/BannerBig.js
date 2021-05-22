import Link from "next/link";

import styles from "./BannerBig.module.css";

const BannerBig = ({ title, content, linkHref, linkLabel, backgroundUrl }) => {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundUrl})` }}
      className="slider_area slider_bg_1 d-flex align-items-center"
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="single_slider">
              <div className="slider_text">
                <h3>{title}</h3>
                <p>{content}</p>
                {linkLabel && linkHref && (
                  <Link href={linkHref}>
                    <a className="boxed-btn2">{linkLabel}</a>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerBig;
