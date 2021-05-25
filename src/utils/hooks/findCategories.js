import { ENPOINT_FIND_CATEGORIES } from "utils/helpers/const";
import appendFullStrapiUrl from "utils/helpers/appendFullStrapiUrl";

const findCategories = ({ useSWR, fetcher }, options = {}) => {
  const { data, error } = useSWR(
    appendFullStrapiUrl(ENPOINT_FIND_CATEGORIES, options.query),
    fetcher,
    {
      initialData: options.initialData,
    }
  );

  return {
    categoriesData: data,
    categoriesError: error,
    categoriesLoading: !error && !data,
  };
};

export default findCategories;
