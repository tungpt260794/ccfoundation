import styles from "./TextareaSimple.module.css";

const InputSimple = ({ placeholder, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <textarea placeholder={placeholder} onChange={onChange}></textarea>
    </div>
  );
};

export default InputSimple;
