import "./index.scss";

const CustomInput1 = ({
  badgeText,
  icon,
  isDisable,
  label,
  placeHolder,
  value,
  className,
  type,
  onValueChange,
  name,
  onFocus,
  inputStyle,
  maxLength,
  badgeStyle
}) => {
  return (
    <section
      className={`${className ? className : "custom-input-1-container"}`}
    >
      <label>{label}</label>
      <div className="input-wrapper">
        {icon ? <i className={icon}></i> : null}
        <input
          type={type}
          placeholder={placeHolder}
          readOnly={isDisable ? true : false}
          onChange={onValueChange}
          value={value}
          name={name}
          onFocus={onFocus}
          className={inputStyle}
          maxLength={maxLength}
        />
        {badgeText ? <span className={badgeStyle}>{badgeText}</span> : null}

      </div>
    </section>
  );
};

export default CustomInput1;
