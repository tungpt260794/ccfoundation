import numeral from "numeral";

const currencyFormat = (number, unit = false) => {
  if (number === null || number === undefined) {
    return "";
  }
  return `${numeral(number).format("0,0")}${unit ? " VNĐ" : ""}`;
};

export default currencyFormat;
