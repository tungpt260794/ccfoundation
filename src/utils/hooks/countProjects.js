import { ENPOINT_COUNT_PROJECTS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const countProjects = ({ useSWR, fetcher }, options = {}) => {
  const { data, error } = useSWR(
    appendFullStrapiUrl(ENPOINT_COUNT_PROJECTS, options.query),
    fetcher,
    {
      initialData: options.initialData,
    }
  );

  return {
    projectsCountData: data,
    projectsCountError: error,
    projectsCountLoading: !error && (data === null || data === undefined),
  };
};

export default countProjects;
