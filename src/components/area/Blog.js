import Link from "next/link";

import { useTranslation } from "next-i18next";

const Blog = ({ imgUrl, day, month, blogUrl, title, description }) => {
  const { t } = useTranslation("blogs");

  return (
    <article className="blog_item">
      <div className="blog_item_img">
        <img className="card-img rounded-0" src={imgUrl} alt={imgUrl} />
        <div className="blog_item_date">
          <h3>{day}</h3>
          <p>{`${t("month")} ${month}`}</p>
        </div>
      </div>

      <div className="blog_details">
        <Link href={blogUrl}>
          <a className="d-inline-block">
            <h2>{title}</h2>
          </a>
        </Link>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Blog;
