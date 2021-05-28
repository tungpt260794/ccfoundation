import { ENPOINT_FIND_PROJECTS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const findProjects = ({ useSWR, fetcher }, options = {}) => {
  const { data, error } = useSWR(
    appendFullStrapiUrl(ENPOINT_FIND_PROJECTS, options.query),
    fetcher,
    {
      initialData: options.initialData,
    }
  );

  console.log(error);
  console.log(data);
  return {
    projectsData: data,
    projectsError: error,
    projectsLoading: !error && !data,
  };
};

export default findProjects;
