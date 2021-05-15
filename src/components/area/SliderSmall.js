import { Fragment, useMemo } from "react";
import Carousel from "react-multi-carousel";

import Link from "next/link";

const SliderSmall = ({
  type,
  title,
  description,
  linkHref,
  linkLabel,
  items,
}) => {
  const responsive = useMemo(
    () => ({
      superLargeDesktop: {
        breakpoint: { min: 1500 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 1500, min: 1200 },
        items: 2,
      },
      tablet: {
        breakpoint: { max: 1200, min: 992 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 992, min: 0 },
        items: 1,
      },
    }),
    []
  );

  return (
    <div className="help_area gray-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="help_info">
              <div className="section_title">
                <span>{type}</span>
                <h3>{title}</h3>
              </div>
              <p>{description}</p>
              <Link href={linkHref}>
                <a>{linkLabel}</a>
              </Link>
            </div>
          </div>
          <div className="col-xl-8">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              arrows={false}
              slidesToSlide={1}
              ontainerClass="carousel-container"
              itemClass="carousel-item-padding-40-px"
            >
              {items.map((it, i) => (
                <Fragment key={`slideSmallItem${i}`}>{it}</Fragment>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderSmall;
