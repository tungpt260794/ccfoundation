import Link from "next/link";

import { useMemo } from "react";
import { useTranslation } from "next-i18next";

const Footer = () => {
  const { t } = useTranslation("footer");

  const footerGroups = useMemo(
    () => [
      {
        title: t("connect-with-us"),
        className: "col-xl-4 col-md-6 col-lg-4",
        content: (
          <p className="footer_text doanar">
            {" "}
            <Link href="/become-volunteer">
              <a className="first">{t("become-volunteer")}</a>
            </Link>{" "}
            <br />
            <Link href="/sign-up-project">
              <a>{t("sign-up-project")}</a>
            </Link>
          </p>
        ),
      },
      {
        title: t("contact"),
        className: "col-xl-4 col-md-6 col-lg-4",
        content: (
          <>
            <p className="footer_text">
              <a
                className="domain"
                href="https://www.google.com/maps/place/65+C%E1%BA%A3m+H%E1%BB%99i,+%C4%90%E1%BB%91ng+M%C3%A1c,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0112076,105.8607926,17z/data=!4m5!3m4!1s0x3135ab0a9a327d8b:0x812102c524c9eca3!8m2!3d21.0111378!4d105.8608031?hl=vi"
                target="_blank"
              >
                {t("address")}
              </a>{" "}
              <br />
              <a
                className="domain"
                href="mailto:info@ccfoundation.org.vn"
                target="_blank"
              >
                info@ccfoundation.org.vn
              </a>
            </p>
            <div className="socail_links">
              <ul>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </>
        ),
      },
      {
        title: "CC Foundation",
        className: "col-xl-4 col-md-6 col-lg-4",
        content: (
          <p className="footer_text doanar">
            <Link href="/">
              <a>{t("home-page")}</a>
            </Link>
            <br />
            <Link href="/about">
              <a>{t("about-us")}</a>
            </Link>
            <br />
            <Link href="/blogs?page=1">
              <a>{t("blogs")}</a>
            </Link>
            <br />
            <Link href="/terms-of-use">
              <a>{t("terms-of-use")}</a>
            </Link>
            <br />
            <Link href="/privacy-and-security">
              <a>{t("privacy-and-security")}</a>
            </Link>
          </p>
        ),
      },
    ],
    []
  );

  return (
    <>
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              {footerGroups.map((g, i) => (
                <div key={`footerGroup${i}`} className={g.className}>
                  <div className="footer_widget">
                    <h3 className="footer_title">{g.title}</h3>
                    {g.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="copy-right_text">
          <div className="container">
            <div className="footer_border"></div>
            <div className="row">
              <div className="col-xl-12">
                <p className="copy_right text-center">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  Copyright &copy;
                  {new Date().getFullYear()} CCF. All rights reserved.
                  <i className="fa fa-heart-o" aria-hidden="true"></i>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
