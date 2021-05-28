import { format } from "date-fns";

const formatDate = ({ value, formatStr, type }) => {
  switch (type) {
    case "utc":
      return format(new Date(value), formatStr);

    default:
      return value;
  }
};

export default formatDate;
