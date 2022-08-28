import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react";
import "./index.scss";
function CustomDropDown2({ hasExternalTitle, icon, externalTitle, children, internalTitle, buttonColor, hasTitle }) {
  const menuRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!menuRef?.current.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, []);
  return (
    <section ref={menuRef} id="custom-dropdown-2">
      <div className="titleButton" style={{ backgroundColor: buttonColor }}>
        <div onClick={() => setIsOpen(!isOpen)} className="dd-button">
          <i className={icon}></i>
          {hasTitle && <span className="internalTitle">{internalTitle}</span>}
        </div>
        {hasExternalTitle && <div className="externalTitle">{externalTitle}</div>}
      </div>
      {isOpen && <div style={{width:300}} className={classNames("dd-body", { "scale-up-ver-top": isOpen })}>{children}</div>}
    </section>
  );
}

export default CustomDropDown2;
