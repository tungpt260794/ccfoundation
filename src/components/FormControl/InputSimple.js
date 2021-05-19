import styles from "./InputSimple.module.css";

const InputSimple = ({ type, placeholder, onChange, icon }) => {
  return (
    <div className={styles.inputWrapper}>
      <input type={type} placeholder={placeholder} onChange={onChange} />
      {icon}
    </div>
  );
};

export default InputSimple;
