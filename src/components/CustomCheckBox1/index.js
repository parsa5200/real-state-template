import "./index.scss";

const CustomCheckBox1 = ({
  title,
  inputValue,
  inputName,
  onCheckedChange,
  isChecked,
  className
}) => {
  return (
    <section className={`${className ? className : "custom-checkBox-1-container"}`}>
      <label htmlFor={inputName}>{title}</label>
      <input
        id={inputName}
        type="checkBox"
        name={inputName}
        onChange={onCheckedChange}
        value={inputValue}
      // checked={isChecked ? true : false}
      />
    </section>
  );
};

export default CustomCheckBox1;
