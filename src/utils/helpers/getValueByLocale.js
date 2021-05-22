import { useRouter } from "next/router";

const getValueByLocale = (values) => {
  const router = useRouter();

  return values[router.locale];
};

export default getValueByLocale;
