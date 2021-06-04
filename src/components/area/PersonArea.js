const PersonArea = ({
  imgUrl,
  linkHrefFacebook,
  linkHrefTwitter,
  linkHrefLinkedin,
  name,
  position,
}) => {
  return (
    <div className="single_volunteer">
      <div className="thumb">
        <img src={imgUrl} alt={imgUrl} />
        <div className="social_links">
          <ul>
            <li>
              <a href={linkHrefFacebook || "#"} target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href={linkHrefTwitter || "#"} target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href={linkHrefLinkedin || "#"} target="_blank">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{ whiteSpace: "pre-line" }}
        className="author_name text-center"
      >
        <h3>{name}</h3>
        <span>{position}</span>
      </div>
    </div>
  );
};

export default PersonArea;
