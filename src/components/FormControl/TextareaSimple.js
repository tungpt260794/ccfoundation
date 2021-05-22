import styles from "./TextareaSimple.module.css";

const InputSimple = ({ placeholder, onChange, value }) => {
  return (
    <div className={styles.inputWrapper}>
      <textarea
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};

export default InputSimple;
