import { ENPOINT_COUNT_PROJECTS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const countProjects = async ({ axios }, options = {}) => {
  let data = options.initData;
  let error = "";

  if (!data) {
    try {
      const res = await axios.get(
        appendFullStrapiUrl(ENPOINT_COUNT_PROJECTS, options.query)
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

export default countProjects;
