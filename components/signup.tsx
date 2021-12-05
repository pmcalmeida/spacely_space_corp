import React, { useState, useCallback } from "react";
import styles from "../styles/Signup.module.css";

interface IProps {
  closeModal: () => void;
}

const Modal = ({ closeModal }: IProps) => {
  const [validEmail, setValidEmail] = useState(true);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const form = e.target;
      const isEmailValid = form.elements[0].validity.valid;
      setValidEmail(isEmailValid);

      if (isEmailValid) {
        closeModal();
      }
    },
    [closeModal]
  );

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className={styles.signup_form}>
        <input
          type="email"
          name="email"
          className={styles.email}
          placeholder="email"
          required
        />
        <div className={styles.error}>
          {!validEmail ? "Please enter a valid email." : ""}
        </div>
        <input type="submit" className={styles.signup} value="Sign up" />
      </div>
    </form>
  );
};

export default Modal;
