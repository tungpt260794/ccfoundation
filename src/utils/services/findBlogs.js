import { ENPOINT_FIND_BLOGS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const findBlogs = async ({ axios }, options = {}) => {
  let data = options.initData;
  let error = "";

  if (!data || data.length === 0) {
    try {
      const res = await axios.get(
        appendFullStrapiUrl(ENPOINT_FIND_BLOGS, options.query)
      );
      data = res.data;
    } catch (err) {
      error = err.message;
    }
  }

  return {
    data: data || [],
    error,
  };
};

export default findBlogs;
