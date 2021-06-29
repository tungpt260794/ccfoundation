import currencyFormat from "utils/helpers/currencyFormat";

import InputSimple from "./InputSimple";
import TextareaSimple from "./TextareaSimple";
import DatePickerSimple from "./DatePickerSimple";
import CheckBoxSimple from "./CheckBoxSimple";
import SelectSimple from "./SelectSimple";

const FormControl = ({
  type,
  id,
  name,
  label,
  error,
  placeholder,
  value,
  onChange,
  icon,
  required,
  checked,
  checkboxLabel,
  options,
}) => {
  return (
    <div>
      {label && (
        <h6>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </h6>
      )}
      {["text", "currency"].includes(type) && (
        <InputSimple
          id={id}
          name={name}
          type={type === "currency" ? "text" : type}
          placeholder={placeholder}
          value={type === "currency" ? currencyFormat(value) : value}
          onChange={(e) => {
            let _value = e.target.value;
            if (type === "currency") {
              _value = _value.split(",").join("");
            }

            onChange({
              ...e,
              target: { ...e.target, name: e.target.name, value: _value },
            });
          }}
          icon={icon}
        />
      )}
      {type === "textarea" && (
        <TextareaSimple
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {type === "date" && (
        <DatePickerSimple
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
      {type === "checkbox" && (
        <CheckBoxSimple
          id={id}
          name={name}
          onChange={onChange}
          value={value}
          checked={checked}
          checkboxLabel={checkboxLabel}
        />
      )}
      {type === "select" && (
        <SelectSimple
          id={id}
          name={name}
          options={options}
          value={value}
          onChange={onChange}
        />
      )}
      {error && (
        <h6 style={{ color: "red", fontStyle: "italic", fontWeight: "bold" }}>
          {error}
        </h6>
      )}
    </div>
  );
};

export default FormControl;
