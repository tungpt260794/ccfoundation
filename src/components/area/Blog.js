import Link from "next/link";

const Blog = ({ imgUrl, day, month, blogUrl, title, description }) => {
  return (
    <article className="blog_item">
      <div className="blog_item_img">
        <img className="card-img rounded-0" src={imgUrl} alt={imgUrl} />
        <div className="blog_item_date">
          <h3>{day}</h3>
          <p>{month}</p>
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
