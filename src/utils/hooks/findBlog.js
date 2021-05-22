import { ENPOINT_FIND_BLOGS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const findBlog = ({ useSWR, fetcher }, options = {}) => {
  const { data, error } = useSWR(
    appendFullStrapiUrl(
      `${ENPOINT_FIND_BLOGS}/${options.params.id}`,
      options.query
    ),
    fetcher,
    {
      initialData: options.initialData,
    }
  );

  return {
    blogData: data,
    blogError: error,
    blogLoading: !error && !data,
  };
};

export default findBlog;
