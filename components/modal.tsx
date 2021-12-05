import React from "react";
import styles from "../styles/Modal.module.css";

interface IProps {
  isOpen: boolean;
  closeModal: () => void;
}

const Modal = ({
  isOpen,
  closeModal,
  children,
}: React.PropsWithChildren<IProps>) => {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.backdrop} onClick={closeModal} />
      <div className={styles.modal}>{children}</div>
    </>
  );
};

export default Modal;
