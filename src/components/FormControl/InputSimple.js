import styles from "./InputSimple.module.css";

const InputSimple = ({
  id,
  name,
  type,
  placeholder,
  onChange,
  icon,
  value,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
      {icon}
    </div>
  );
};

export default InputSimple;
