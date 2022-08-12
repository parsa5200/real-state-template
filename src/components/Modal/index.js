import styles from './modal.module.scss';
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
    <section onClick={onClose} id={styles.overly}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className={`${className ? className : "modal-container"}`}
      >
        <div className={styles.modalHeader}>
          <div className={styles.closeBtn} onClick={onClose}>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="header-title">{headerTitle}</div>
        </div>
        <div className={styles.modalBody}>{children}</div>
        {hasFooter &&
          <div className={styles.modalFooter}>
            {footerChild}
          </div>}
      </div>
    </section>
  );
};

export default Modal;
