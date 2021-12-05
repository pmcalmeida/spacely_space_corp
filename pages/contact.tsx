import { useState, useCallback } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Contact: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header link="home" href="/" />
      <main className={styles.main}>
        <form>
          <div className={styles.contact}>
            <h1>Contact us</h1>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Email</label>
            <input type="text" name="email" />
            <label>Message</label>
            <textarea name="message" />
            <input type="submit" value="Send" />
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
