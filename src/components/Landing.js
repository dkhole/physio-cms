import React from "react";
import * as styles from "../styles/landing.module.css";
import Nav from "./Nav";
import Placeholder from "../assets/imgs/placeholder.svg";

export default function Landing({ mainTitle }) {
    return (
        <div id={styles.wrap}>
            <Nav />
            <div id={styles.mainWrap}>
                <div id={styles.photo}></div>
                <button>BOOK NOW</button>
                <div id={styles.mainTitle}><span>{mainTitle}</span></div>
                <div id={styles.location}><Placeholder className={styles.placeholder}/><span>Newington, Sydney</span></div>
            </div>
        </div>
      );
}