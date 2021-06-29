import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classnames from "classnames";
import { useState, useMemo } from "react";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import ButtonSimple from "components/FormControl/ButtonSimple";
import FormControl from "components/FormControl";

import { serviceCreateVolunteer } from "utils/services";

import styles from "styles/BecomeVolunteer.module.css";

const BecomeVolunteer = () => {
  const { t } = useTranslation("become-volunteer");
  const [values, setValues] = useState({ genderRegister: "MALE" });
  const [errors, setErrors] = useState({});

  const inputsRegister = useMemo(() => {
    const _inputs = [
      {
        type: "text",
        id: "nameRegister",
        name: "nameRegister",
        label: t("contact.form-register.label-nameRegister"),
        placeholder: t("contact.form-register.placeholder-nameRegister"),
        required: true,
      },
      {
        type: "text",
        id: "addressRegister",
        name: "addressRegister",
        label: t("contact.form-register.label-addressRegister"),
        placeholder: t("contact.form-register.placeholder-addressRegister"),
        required: true,
      },
      {
        type: "text",
        id: "emailRegister",
        name: "emailRegister",
        label: t("contact.form-register.label-emailRegister"),
        placeholder: t("contact.form-register.placeholder-emailRegister"),
        required: true,
      },
      {
        type: "text",
        id: "phoneRegister",
        name: "phoneRegister",
        label: t("contact.form-register.label-phoneRegister"),
        placeholder: t("contact.form-register.placeholder-phoneRegister"),
        required: true,
      },
      {
        type: "date",
        id: "birthdayRegister",
        name: "birthdayRegister",
        label: t("contact.form-register.label-birthdayRegister"),
        placeholder: t("contact.form-register.placeholder-birthdayRegister"),
        required: true,
      },
      {
        type: "select",
        id: "genderRegister",
        name: "genderRegister",
        label: t("contact.form-register.label-genderRegister"),
        options: [
          {
            value: "MALE",
            label: t("contact.form-register.label-genderRegister-option1"),
          },
          {
            value: "FEMALE",
            label: t("contact.form-register.label-genderRegister-option2"),
          },
        ],
        required: true,
      },
      {
        type: "text",
        id: "hearAboutUsRegister",
        name: "hearAboutUsRegister",
        label: t("contact.form-register.label-hearAboutUsRegister"),
        placeholder: t("contact.form-register.placeholder-hearAboutUsRegister"),
        required: true,
      },
    ];

    return _inputs;
  }, []);

  const inputsProgram = useMemo(() => {
    const _inputs = [
      {
        type: "text",
        id: "categoryApplyProgram",
        name: "categoryApplyProgram",
        label: t("contact.form-program.label-categoryApplyProgram"),
        placeholder: t("contact.form-program.placeholder-categoryApplyProgram"),
        required: true,
      },
      {
        type: "text",
        id: "workedProgram",
        name: "workedProgram",
        label: t("contact.form-program.label-workedProgram"),
        placeholder: t("contact.form-program.placeholder-workedProgram"),
        required: true,
      },
      {
        type: "text",
        id: "timeProgram",
        name: "timeProgram",
        label: t("contact.form-program.label-timeProgram"),
        placeholder: t("contact.form-program.placeholder-timeProgram"),
        required: true,
      },
    ];

    return _inputs;
  }, []);

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
        backgroundUrl="/images/become-volunteer-banner.png"
      />

      <div className="about_page">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <h3>{t("contact.title")}</h3>
                <h4>{t("contact.form-title")}</h4>
                <h6>{t("contact.form-subtitle")}</h6>
                <p>{t("contact.form-sub1")}</p>
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
              {inputsRegister.map((ip, i) => (
                <FormControl
                  key={`volunteer${i}`}
                  type={ip.type}
                  id={ip.id}
                  name={ip.name}
                  label={ip.label}
                  error={errors[ip.name]}
                  placeholder={ip.placeholder}
                  value={values[ip.name] || ""}
                  onChange={(e) => {
                    setValues((prev) => ({
                      ...prev,
                      [ip.name]: e.target.value,
                    }));
                  }}
                  required={ip.required}
                  {...ip}
                />
              ))}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <p>{t("contact.form-sub2")}</p>
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
              {inputsProgram.map((ip, i) => (
                <FormControl
                  key={`volunteer${i}`}
                  type={ip.type}
                  id={ip.id}
                  name={ip.name}
                  label={ip.label}
                  error={errors[ip.name]}
                  placeholder={ip.placeholder}
                  value={values[ip.name] || ""}
                  onChange={(e) => {
                    setValues((prev) => ({
                      ...prev,
                      [ip.name]: e.target.value,
                    }));
                  }}
                  required={ip.required}
                  {...ip}
                />
              ))}

              <ButtonSimple
                type="button"
                label={t("contact.btnLabel")}
                onClick={async () => {
                  const _inputs = [...inputsRegister, ...inputsProgram];
                  const _errors = {};

                  _inputs.forEach((ip) => {
                    if (ip.required) {
                      values[ip.name]
                        ? (_errors[ip.name] = "")
                        : (_errors[ip.name] = t("contact.typing-required"));
                    }
                  });

                  setErrors((prev) => ({ ...prev, ..._errors }));

                  const _errorsKeys = Object.keys(_errors);

                  // Focus input error
                  for (let i = 0; i < _errorsKeys.length; i++) {
                    const _key = _errorsKeys[i];

                    if (_errors[_key]) {
                      document.getElementById(_key).focus();
                      break;
                    }
                  }

                  // check valid
                  let isValid = true;
                  for (let i = 0; i < _errorsKeys.length; i++) {
                    const _key = _errorsKeys[i];

                    if (_errors[_key]) {
                      isValid = false;
                      break;
                    }
                  }

                  if (isValid) {
                    await serviceCreateVolunteer({ body: values });
                    alert(t("sign-up-success"));
                    setValues({});
                  }
                }}
              />
            </div>
          </div>
          <br />

          {/* <div className="row">
            <div className="col-xl-12 col-md-12">
              <div className="about_text_info">
                <p>
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
          </div> */}
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(/images/become-volunteer-banner.png)`,
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
        "become-volunteer",
      ])),
    },
  };
};

export default BecomeVolunteer;
