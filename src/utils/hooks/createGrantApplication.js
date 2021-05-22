import { ENPOINT_GRANT_APPLICATION } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const createGrantApplication = async ({ axios }, options = {}) => {
  await axios.post(
    appendFullStrapiUrl(ENPOINT_GRANT_APPLICATION),
    options.body
  );
};

export default createGrantApplication;
