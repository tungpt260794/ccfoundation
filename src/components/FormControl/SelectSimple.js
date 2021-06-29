import styles from "./SelectSimple.module.css";

const SelectSimple = ({ id, name, options, value, onChange }) => {
  return (
    <div className={styles.inputWrapper}>
      <select id={id} name={name} value={value} onChange={onChange}>
        {options &&
          options.length > 0 &&
          options.map((op, i) => (
            <option key={`${op.value}i`} value={op.value}>
              {op.label}
            </option>
          ))}
      </select>
    </div>
  );
};

export default SelectSimple;
