import { ENPOINT_COUNT_BLOGS } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const countBlogs = ({ useSWR, fetcher }, options = {}) => {
  const { data, error } = useSWR(
    appendFullStrapiUrl(ENPOINT_COUNT_BLOGS, options.query),
    fetcher,
    {
      initialData: options.initialData,
    }
  );

  return {
    blogsCountData: data,
    blogsCountError: error,
    blogsCountLoading: !error && (data === null || data === undefined),
  };
};

export default countBlogs;
