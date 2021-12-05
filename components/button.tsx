import React from "react";
import styles from "../styles/Button.module.css";

export interface IButton {
  label: string;
  link?: string;
  action?: () => void;
}

const Button = ({ label, link, action }: IButton) =>
  link ? (
    <a
      className={styles.button}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      title={label}
      onClick={action}
    >
      {label}
    </a>
  ) : (
    <button className={styles.button} onClick={action}>
      {label}
    </button>
  );

export default Button;
