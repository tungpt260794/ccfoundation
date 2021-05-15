import { useMemo } from "react";

import Link from "next/link";

const Header = () => {
  const menuItems = useMemo(
    () => [
      {
        label: "Trang chủ",
        link: "/",
      },
      {
        label: "Giới thiệu",
        link: "#",
        subs: [
          {
            label: "Về chúng tôi",
            link: "/about",
          },
          {
            label: "Tầm nhìn",
            link: "/vision",
          },
          {
            label: "Sứ mệnh",
            link: "/mission",
          },
          {
            label: "Giá trị cốt lõi",
            link: "/core-values",
          },
          {
            label: "Lịch sử hoạt động",
            link: "/history",
          },
        ],
      },
      {
        label: "Hoạt động",
        link: "#",
        subs: [
          {
            label: "Hỗ trợ cá nhân",
            link: "/personal-support",
          },
          {
            label: "Hỗ trợ tổ chức",
            link: "/organization-support",
          },
        ],
      },
      {
        label: "Tin tức",
        link: "#",
        subs: [
          {
            label: "Blogs",
            link: "/blogs",
          },
          {
            label: "Các dự án đã hoàn thành",
            link: "/projects-complete",
          },
          {
            label: "Các dự án sắp triển khai",
            link: "/projects-upcoming",
          },
        ],
      },
      {
        label: "Kết nối",
        link: "#",
        subs: [
          {
            label: "Liên hệ",
            link: "#",
          },
          {
            label: "Trở thành tình nguyện viên",
            link: "#",
          },
          {
            label: "Đăng ký dự án",
            link: "#",
          },
        ],
      },
    ],
    []
  );

  return (
    <header>
      <div className="header-area ">
        <div id="sticky-header" className="main-header-area">
          <div className="container-fluid p-0">
            <div className="row align-items-center justify-content-between no-gutters">
              <div className="col-xl-2 col-lg-2">
                <div className="logo-img">
                  <Link href="/">
                    <a>
                      <img src="/images/logo.png" alt="" width="100px" />
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-xl-7 col-lg-7">
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      {menuItems.map((it, i) => (
                        <li key={`menuItem${i}`}>
                          <Link href={it.link}>
                            <a>
                              {it.label}{" "}
                              {it.subs && it.subs.length > 0 && (
                                <i className="ti-angle-down"></i>
                              )}
                            </a>
                          </Link>

                          {it.subs && it.subs.length > 0 && (
                            <ul className="submenu">
                              {it.subs.map((sub, j) => (
                                <li key={`sub${j}`}>
                                  <Link href={sub.link}>
                                    <a>{sub.label}</a>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 d-none d-lg-block">
                <div className="donate_now">
                  <a href="#" className="boxed-btn">
                    ĐÓNG GÓP
                  </a>
                </div>
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
