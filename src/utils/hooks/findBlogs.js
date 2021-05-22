import { ENPOINT_FIND_BLOGS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const findBlogs = ({ useSWR, fetcher }, options = {}) => {
  const { data, error } = useSWR(
    appendFullStrapiUrl(ENPOINT_FIND_BLOGS, options.query),
    fetcher,
    {
      initialData: options.initialData,
    }
  );

  return {
    blogsData: data,
    blogsError: error,
    blogsLoading: !error && !data,
  };
};

export default findBlogs;
