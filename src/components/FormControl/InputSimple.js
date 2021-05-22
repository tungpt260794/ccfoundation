import styles from "./InputSimple.module.css";

const InputSimple = ({ type, placeholder, onChange, icon, value }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
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
