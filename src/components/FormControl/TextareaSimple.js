import styles from "./TextareaSimple.module.css";

const InputSimple = ({ id, name, placeholder, value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};

export default InputSimple;
