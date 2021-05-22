import { ENPOINT_FIND_PROJECTS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const findProject = ({ useSWR, fetcher }, options = {}) => {
  const { data, error } = useSWR(
    appendFullStrapiUrl(
      `${ENPOINT_FIND_PROJECTS}/${options.params.id}`,
      options.query
    ),
    fetcher,
    {
      initialData: options.initialData,
    }
  );

  return {
    projectData: data,
    projectError: error,
    projectLoading: !error && !data,
  };
};

export default findProject;
