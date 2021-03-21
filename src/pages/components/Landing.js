import React from "react";
import * as styles from "../styles/landing.module.css";
import Nav from "./Nav";

export default function Landing({ mainTitle }) {
    return (
        <div id={styles.wrap}>
            <Nav />
            <div id={styles.mainWrap}>
                <div id={styles.photo}></div>
                <button>Book Now</button>
                <div id={styles.mainTitle}><span>{mainTitle}</span></div>
            </div>
        </div>
      );
}