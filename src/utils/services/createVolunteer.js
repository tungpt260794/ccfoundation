import { ENPOINT_VOLUNTEERS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const createVolunteer = async ({ axios }, options = {}) => {
  await axios.post(appendFullStrapiUrl(ENPOINT_VOLUNTEERS), options.body);
};

export default createVolunteer;
