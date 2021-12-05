import React from "react";
import styles from "../styles/Card.module.css";
import Image from "next/image";

interface IProps {
  image: string;
  title: string;
}

const Card = ({ image, title, children }: React.PropsWithChildren<IProps>) => (
  <article className={styles.card}>
    <Image src={image} width="256" height="144" alt={title}></Image>
    <h3>{title}</h3>
    <p>{children}</p>
  </article>
);

export default Card;
