import React from "react";
import styles from "../styles/Banner.module.css";
import Button, { IButton } from "../components/button";

interface IProps {
  title: string;
  buttons?: Array<IButton>;
}

const Banner = ({ title, buttons }: IProps) => (
  <section className={styles.banner}>
    <h1 className={styles.title}>{title}</h1>
    <div className={styles.actions}>
      {buttons &&
        buttons.map(({ label, link, action }, i) => (
          <Button key={i} label={label} link={link} action={action} />
        ))}
    </div>
  </section>
);

export default Banner;
