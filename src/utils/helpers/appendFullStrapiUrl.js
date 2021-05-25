import qs from "querystring";

const appendFullStrapiUrl = (endpoint, queryObj) => {
  console.log(queryObj);
  console.log(qs.stringify(queryObj));
  if (endpoint) {
    return `${process.env.NEXT_PUBLIC_STRAPI_DOMAIN_API}${endpoint}${
      queryObj && Object.keys(queryObj).length > 0
        ? `?${qs.stringify(queryObj)}`
        : ""
    }`;
  }

  return "";
};

export default appendFullStrapiUrl;
