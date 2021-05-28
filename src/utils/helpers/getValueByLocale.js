const getValueByLocale = (locale) => {
  return { vi: "M", en: "LLL" }[locale];
};

export default getValueByLocale;
