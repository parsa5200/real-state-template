import { useState } from "react";
import "./index.scss";
const Modal = ({
  open,
  onClose,
  children,
  headerTitle,
  Button,
  className,
  footerChild,
  hasFooter = false

}) => {
  if (!open) return null;
  return (
    <section onClick={onClose} id="overly">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${className ? className : "modal-container"}`}
      >
        <div className="modal-header">
          <div className="closeBtn" onClick={onClose}>
          <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="header-title">{headerTitle}</div>
        </div>
        <div className="modal-body">{children}</div>
        {hasFooter &&
          <div className="modal-footer">
            {footerChild}
          </div>}
      </div>
    </section>
  );
};

export default Modal;
