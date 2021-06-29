import "react-datepicker/dist/react-datepicker.css";
import styles from "./DatePickerSimple.module.css";

import DatePicker from "react-datepicker";

const DatePickerSimple = ({ id, name, placeholder, value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <DatePicker
        id={id}
        name={name}
        placeholderText={placeholder}
        selected={value}
        onChange={(date) => {
          onChange({ target: { name, value: date } });
        }}
        dateFormat="dd/MM/yyyy"
      />
    </div>
  );
};

export default DatePickerSimple;
