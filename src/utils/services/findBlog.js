import { ENPOINT_FIND_BLOGS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const findBlog = async ({ axios }, options = {}) => {
  let data = options.initData;
  let error = "";

  if (!data || Object.keys(data).length === 0) {
    try {
      const res = await axios.get(
        appendFullStrapiUrl(
          `${ENPOINT_FIND_BLOGS}/${options.params.id}`,
          options.query
        )
      );
      data = res.data;
    } catch (err) {
      error = err.message;
    }
  }

  return {
    data: data || {},
    error,
  };
};

export default findBlog;
