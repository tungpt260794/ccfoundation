const ButtonSimple = ({ type, label, onClick }) => {
  return (
    <button
      className="button rounded-0 primary-bg text-white w-100 btn_1 boxed-btn"
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default ButtonSimple;
