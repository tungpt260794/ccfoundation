import Head from "next/head";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import classnames from "classnames";
import { useState, useMemo } from "react";

import Layout from "components/Layout";
import BannerSmall from "components/area/BannerSmall";
import ButtonSimple from "components/FormControl/ButtonSimple";
import FormControl from "components/FormControl";

import { serviceCreateGrantApplication } from "utils/services";

import styles from "styles/SignUpProject.module.css";

const SignUpProject = () => {
  const { t } = useTranslation("sign-up-project");
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [accepted, setAccepted] = useState(false);
  const [errorAccept, setErrorAccept] = useState("");

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
        type: "text",
        id: "websiteRegister",
        name: "websiteRegister",
        label: t("contact.form-register.label-websiteRegister"),
        placeholder: t("contact.form-register.placeholder-websiteRegister"),
        required: true,
      },
    ];

    return _inputs;
  }, []);

  const inputsProject = useMemo(() => {
    const _inputs = [
      {
        type: "text",
        id: "nameProject",
        name: "nameProject",
        label: t("contact.form-project.label-nameProject"),
        placeholder: t("contact.form-project.placeholder-nameProject"),
        required: true,
      },
      {
        type: "textarea",
        id: "descriptionProject",
        name: "descriptionProject",
        label: t("contact.form-project.label-descriptionProject"),
        placeholder: t("contact.form-project.placeholder-descriptionProject"),
        required: true,
      },
      {
        type: "date",
        id: "estimatedDateCompleteProject",
        name: "estimatedDateCompleteProject",
        label: t("contact.form-project.label-estimatedDateCompleteProject"),
        placeholder: t(
          "contact.form-project.placeholder-estimatedDateCompleteProject"
        ),
        required: true,
      },
      {
        type: "textarea",
        id: "potentialImpactProject",
        name: "potentialImpactProject",
        label: t("contact.form-project.label-potentialImpactProject"),
        placeholder: t(
          "contact.form-project.placeholder-potentialImpactProject"
        ),
        required: true,
      },
      {
        type: "textarea",
        id: "organizationStrengthPriorityProject",
        name: "organizationStrengthPriorityProject",
        label: t(
          "contact.form-project.label-organizationStrengthPriorityProject"
        ),
        placeholder: t(
          "contact.form-project.placeholder-organizationStrengthPriorityProject"
        ),
        required: true,
      },
      {
        type: "textarea",
        id: "fundraisingPlanProject",
        name: "fundraisingPlanProject",
        label: t("contact.form-project.label-fundraisingPlanProject"),
        placeholder: t(
          "contact.form-project.placeholder-fundraisingPlanProject"
        ),
      },
      {
        type: "textarea",
        id: "additionalInformationProject",
        name: "additionalInformationProject",
        label: t("contact.form-project.label-additionalInformationProject"),
        placeholder: t(
          "contact.form-project.placeholder-additionalInformationProject"
        ),
        required: true,
      },
    ];

    return _inputs;
  }, []);

  const inputsBudget = useMemo(() => {
    const _inputs = [
      {
        type: "currency",
        id: "amountBudget",
        name: "amountBudget",
        label: t("contact.form-budget.label-amountBudget"),
        placeholder: t("contact.form-budget.placeholder-amountBudget"),
        required: true,
        onChange: (e) => {
          const _value = e.target.value;
          const _name = e.target.name;

          setValues((prev) => ({
            ...prev,
            [_name]: Number(_value),
          }));
        },
      },
      {
        type: "currency",
        id: "totalBudget",
        name: "totalBudget",
        label: t("contact.form-budget.label-totalBudget"),
        placeholder: t("contact.form-budget.placeholder-totalBudget"),
        required: true,
        onChange: (e) => {
          const _value = e.target.value;
          const _name = e.target.name;

          setValues((prev) => ({
            ...prev,
            [_name]: Number(_value),
          }));
        },
      },
    ];

    return _inputs;
  }, [setValues]);

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
          {/* Register form */}
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <h3>{t("contact.title")}</h3>
                <h4>{t("contact.form-title1")}</h4>
                <h6>{t("contact.form-subtitle1")}</h6>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className={classnames({
                ["col-xl-6"]: true,
                [styles.formWrapper]: true,
              })}
            >
              {inputsRegister.map((ip, i) => (
                <FormControl
                  key={`register${i}`}
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
          {/* Project form */}
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <h4>{t("contact.form-title2")}</h4>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className={classnames({
                ["col-xl-6"]: true,
                [styles.formWrapper]: true,
              })}
            >
              {inputsProject.map((ip, i) => (
                <FormControl
                  key={`project${i}`}
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
          {/* Budget form */}
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <h4>{t("contact.form-title3")}</h4>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className={classnames({
                ["col-xl-6"]: true,
                [styles.formWrapper]: true,
              })}
            >
              {inputsBudget.map((ip, i) => (
                <FormControl
                  key={`project${i}`}
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
          {/* Additional materials */}
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <h4>{t("contact.form-title4")}</h4>
                <h6>
                  {`${t("contact.additional-materials")} `}
                  <a
                    style={{ color: "#007bff" }}
                    href="mailto:tuananh@ccfoundation.org.vn"
                  >
                    tuananh@ccfoundation.org.vn
                  </a>
                  .
                </h6>
              </div>
            </div>
          </div>
          <br />
          {/* Required project updates */}
          <div className="row">
            <div className="col-xl-12">
              <div className="about_info">
                <h4>{t("contact.form-title5")}</h4>
                <h6>{t("contact.required-project-updates")}</h6>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div
              className={classnames({
                ["col-xl-6"]: true,
                [styles.formWrapper]: true,
              })}
            >
              <FormControl
                type="checkbox"
                id="accept"
                name="accept"
                label={t("contact.label-accept")}
                error={errorAccept}
                required={true}
                onChange={(e) => {
                  setAccepted(e.target.checked);
                }}
                value="accept"
                checked={accepted}
                checkboxLabel={t("contact.label-checkbox-accept")}
              />

              <ButtonSimple
                type="button"
                label={t("contact.btnLabel")}
                onClick={async () => {
                  const _inputs = [
                    ...inputsRegister,
                    ...inputsProject,
                    ...inputsBudget,
                  ];
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

                  if (!accepted) {
                    setErrorAccept(t("contact.select-required"));
                  } else {
                    setErrorAccept("");
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

                  if (accepted && isValid) {
                    await serviceCreateGrantApplication({ body: values });
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
          </div> */}
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
