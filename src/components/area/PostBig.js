import Link from "next/link";

const PostBig = ({
  imgUrl,
  contentCenterImg,
  type,
  title,
  description,
  linkHref,
  linkLabel,
}) => {
  return (
    <div className="about_area gray-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-md-6">
            <div className="about_thumb">
              <img src={imgUrl} alt={imgUrl} />
              {contentCenterImg && (
                <div className="served_over">{contentCenterImg}</div>
              )}
            </div>
          </div>
          <div className="col-xl-6 col-md-6">
            <div className="about_right">
              <div className="section_title">
                <span>{type}</span>
                <h3>{title}</h3>
              </div>
              <p>{description}</p>
              {linkHref && linkLabel && (
                <Link href={linkHref}>
                  <a className="boxed_btn3">{linkLabel}</a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostBig;
