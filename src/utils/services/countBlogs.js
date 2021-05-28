import { ENPOINT_COUNT_BLOGS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const countBlogs = async ({ axios }, options = {}) => {
  let data = options.initData;
  let error = "";

  if (!data) {
    try {
      const res = await axios.get(
        appendFullStrapiUrl(ENPOINT_COUNT_BLOGS, options.query)
      );
      data = res.data;
    } catch (err) {
      error = err.message;
    }
  }

  return {
    data: data || 0,
    error,
  };
};

export default countBlogs;
