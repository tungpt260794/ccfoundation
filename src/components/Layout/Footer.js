import { useMemo } from "react";

import Link from "next/link";

const Footer = () => {
  const footerGroups = useMemo(
    () => [
      {
        title: "Kết nối với chúng tôi",
        className: "col-xl-3 col-md-6 col-lg-3",
        content: (
          <p className="footer_text doanar">
            {" "}
            <Link href="#">
              <a className="first">Trở thành tình nguyện viên</a>
            </Link>{" "}
            <br />
            <Link href="#">
              <a>Đăng ký dự án</a>
            </Link>
          </p>
        ),
      },
      {
        title: "Liên Hệ",
        className: "col-xl-3 col-md-6 col-lg-3",
        content: (
          <>
            <p className="footer_text">
              <a
                className="domain"
                href="https://www.google.com/maps/place/65+C%E1%BA%A3m+H%E1%BB%99i,+%C4%90%E1%BB%91ng+M%C3%A1c,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0112076,105.8607926,17z/data=!4m5!3m4!1s0x3135ab0a9a327d8b:0x812102c524c9eca3!8m2!3d21.0111378!4d105.8608031?hl=vi"
                target="_blank"
              >
                65 Cảm Hội, phường Đống Mác, quận Hai Bà Trưng, Hà Nội.
              </a>{" "}
              <br />
              <a className="domain" href="tel:+84 123456789" target="_blank">
                +84 123456789
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
        className: "col-xl-2 col-md-6 col-lg-2",
        content: (
          <ul>
            <li>
              <Link href="/">
                <a>Trang chủ</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Về chúng tôi</a>
              </Link>
            </li>
            <li>
              <Link href="#">
                <a>Blog</a>
              </Link>
            </li>
          </ul>
        ),
      },
      {
        title: "Đăng Ký Bản Tin",
        className: "col-xl-4 col-md-6 col-lg-4",
        content: (
          <>
            <form action="#" className="newsletter_form">
              <input type="text" placeholder="Nhâp email của bạn" />
              <button type="submit">Đăng ký</button>
            </form>
            <p className="newsletter_text">
              Đăng ký bản tin để nhận thông tin cập nhật
            </p>
          </>
        ),
      },
    ],
    []
  );

  return (
    <>
      <div className="become_volunter volunter_bg_1">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 col-md-10 offset-md-1">
              <div className="volunter_text text-center">
                <h3>Trở Thành Tình Nguyện Viên</h3>
                <p>
                  Truyền cảm hứng cho nhân viên và tổ chức để hỗ trợ các hoạt
                  động mà họ quan tâm trong khoảng. Chúng tôi làm điều này để
                  mang lại nhiều tài nguyên hơn cho các tổ chức phi lợi nhuận
                  đang thay đổi thế giới của chúng ta.
                </p>
                <a className="boxed-btn4" href="#">
                  THAM GIA NGAY
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
                  {new Date().getFullYear()} - Bản quyền{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i> của{" "}
                  <Link href="/">
                    <a>CC FOUNDATION</a>
                  </Link>
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
