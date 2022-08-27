import classNames from "classnames";
import React, { useState } from "react";
import "./index.scss";
function CustomDropDown2({ hasExternalTitle, icon, externalTitle, children, internalTitle, buttonColor, hasTitle }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section id="custom-dropdown-2">
      <div className="titleButton" style={{ backgroundColor: buttonColor }}>
        <div onClick={() => setIsOpen(!isOpen)} className="dd-button">
          <i className={icon}></i>
          {hasTitle && <span className="internalTitle">{internalTitle}</span>}
        </div>
        {hasExternalTitle && <div className="externalTitle">{externalTitle}</div>}
      </div>
      {isOpen && <div className={classNames("dd-body", { "scale-up-ver-top": isOpen })}>{children}</div>}
    </section>
  );
}

export default CustomDropDown2;
