import Link from "next/link";

const DonateSmall = ({
  imgUrl,
  title,
  target,
  raised,
  linkHref,
  linkLabel,
}) => {
  return (
    <div className="single_help_wrap">
      <div className="thumb">
        <img src={imgUrl} alt={imgUrl} />
      </div>
      <div className="help_content">
        <h3>{title}</h3>
        <div className="donate_amount d-flex">
          {target && (
            <div className="single_amount">
              <span>Mục Tiêu:</span>
              <h3>{target}</h3>
            </div>
          )}
          {raised && (
            <div className="single_amount">
              <span>Đã Quyên Góp:</span>
              <h3>{raised}</h3>
            </div>
          )}
        </div>
        {linkHref && linkLabel && (
          <Link href={linkHref}>
            <a className="boxed-btn4 ">{linkLabel}</a>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DonateSmall;
