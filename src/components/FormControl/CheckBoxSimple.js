import styles from "./CheckBoxSimple.module.css";

const CheckBoxSimple = ({
  id,
  name,
  onChange,
  value,
  checked,
  checkboxLabel,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        id={id}
        name={name}
        value={value}
        checked={checked}
        type="checkbox"
        onChange={onChange}
      />
      <label htmlFor={id}>{checkboxLabel}</label>
    </div>
  );
};

export default CheckBoxSimple;
