import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classnames from "classnames";
import { useState } from "react";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import InputSimple from "components/FormControl/InputSimple";
import TextareaSimple from "components/FormControl/TextareaSimple";
import ButtonSimple from "components/FormControl/ButtonSimple";

import { mutateCreateGrantApplication } from "utils/hooks";

import styles from "styles/SignUpProject.module.css";

const SignUpProject = () => {
  const { t } = useTranslation("sign-up-project");
  const [values, setValues] = useState({});

  return (
    <Layout>
      <Head>
        <title>{t("head-title")}</title>
        <meta name="description" content="Activity History" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BannerSmall
        variant="small"
        title={t("slogan.title")}
        backgroundUrl="/images/sign-up-project-banner.png"
      />

      <div className="about_page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <h3>{t("contact.title")}</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className={classnames({
                ["col-xl-6"]: true,
                [styles.formWrapper]: true,
              })}
            >
              <InputSimple
                name="fullName"
                value={values.fullName || ""}
                type="text"
                placeholder={t("contact.input-name-placeholder")}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, fullName: e.target.value }));
                }}
              />
              <InputSimple
                name="phone"
                value={values.phone || ""}
                type="text"
                placeholder={t("contact.input-phone-placeholder")}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, phone: e.target.value }));
                }}
              />
              <InputSimple
                name="email"
                value={values.email || ""}
                type="text"
                placeholder={t("contact.input-email-placeholder")}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, email: e.target.value }));
                }}
              />
              <TextareaSimple
                name="content"
                value={values.content || ""}
                placeholder={t("contact.input-content-placeholder")}
                onChange={(e) => {
                  setValues((prev) => ({ ...prev, content: e.target.value }));
                }}
              />
              <ButtonSimple
                type="button"
                label={t("contact.btnLabel")}
                onClick={async () => {
                  await mutateCreateGrantApplication({ body: values });
                  alert("Đăng ký thành công");
                  setValues({});
                }}
              />
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="about_text_info">
                <p>
                  {t("contact.or")}
                  <br />
                  {t("contact.name")}
                  <br />
                  <a
                    href="https://www.google.com/maps/place/65+C%E1%BA%A3m+H%E1%BB%99i,+%C4%90%E1%BB%91ng+M%C3%A1c,+Hai+B%C3%A0+Tr%C6%B0ng,+H%C3%A0+N%E1%BB%99i,+Vi%E1%BB%87t+Nam/@21.0112076,105.8607926,17z/data=!4m5!3m4!1s0x3135ab0a9a327d8b:0x812102c524c9eca3!8m2!3d21.0111378!4d105.8608031?hl=vi"
                    target="_blank"
                  >
                    {t("contact.address")}
                  </a>{" "}
                  <br />
                  <a href="mailto:info@ccfoundation.org.vn" target="_blank">
                    info@ccfoundation.org.vn
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(/images/sign-up-project-banner.png)`,
        }}
        className="become_volunter volunter_bg_1"
      ></div>
    </Layout>
  );
};

export const getStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "header",
        "footer",
        "sign-up-project",
      ])),
    },
  };
};

export default SignUpProject;
