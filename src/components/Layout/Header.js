import Link from "next/link";
import { useRouter } from "next/router";

import { useMemo } from "react";
import { useTranslation } from "next-i18next";
import classnames from "classnames";

import styles from "./Header.module.css";

const Header = () => {
  const { t } = useTranslation("header");
  const router = useRouter();

  const menuItems = useMemo(
    () => [
      {
        label: t("home-page"),
        link: "/",
      },
      {
        label: t("introduce"),
        link: "#",
        subs: [
          {
            label: t("about-us"),
            link: "/about",
          },
          {
            label: t("vision"),
            link: "/vision",
          },
          {
            label: t("mission"),
            link: "/mission",
          },
          {
            label: t("core-values"),
            link: "/core-values",
          },
          {
            label: t("activity-history"),
            link: "/history",
          },
        ],
      },
      {
        label: t("activity"),
        link: "#",
        subs: [
          {
            label: t("personal-support"),
            link: "/personal-support",
          },
          {
            label: t("organization-support"),
            link: "/organization-support",
          },
        ],
      },
      {
        label: t("news"),
        link: "#",
        subs: [
          {
            label: t("blogs"),
            link: "/blogs",
          },
          {
            label: t("projects-complete"),
            link: "/projects-complete",
          },
          {
            label: t("projects-upcoming"),
            link: "/projects-upcoming",
          },
        ],
      },
      {
        label: t("connect"),
        link: "#",
        subs: [
          {
            label: t("contact"),
            link: "/contact",
          },
          {
            label: t("become-volunteer"),
            link: "/become-volunteer",
          },
          {
            label: t("sign-up-project"),
            link: "/sign-up-project",
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
              <div className="col-xl-3 col-lg-3">
                <div className={styles.multiLang}>
                  <img
                    src="/images/vi-flag.png"
                    alt="/images/vi-flag.png"
                    width="24px"
                    className={classnames({
                      [styles.langUnfocus]: router.locale === "en",
                    })}
                    onClick={() => {
                      router.replace(router.asPath, router.asPath, {
                        locale: "vi",
                      });
                    }}
                  />
                  <img
                    src="/images/en-flag.png"
                    alt="/images/en-flag.png"
                    width="24px"
                    className={classnames({
                      [styles.langUnfocus]: router.locale === "vi",
                    })}
                    onClick={() => {
                      router.replace(router.asPath, router.asPath, {
                        locale: "en",
                      });
                    }}
                  />
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
