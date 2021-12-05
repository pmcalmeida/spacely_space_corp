import React from "react";
import Link from "next/link";

import styles from "../styles/Header.module.css";

interface IProps {
  href: string;
  link: string;
}

const Header = ({ href, link }: IProps) => (
  <header className={styles.header}>
    <h2>Spacely Space Corp 🚀</h2>
    <Link href={href}>{link}</Link>
  </header>
);

export default Header;
