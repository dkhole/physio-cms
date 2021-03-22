import React from "react";
import * as styles from "../styles/landing.module.css";
import Nav from "./Nav";
import Placeholder from "../assets/svg/placeholder.svg";
import { StaticImage } from "gatsby-plugin-image";

export default function Landing({ mainTitle }) {
    return (
        <div id={styles.wrap}>
            <Nav />
            <div id={styles.mainWrap}>
                <div id={styles.photo}><StaticImage className={styles.picWrap} src="../assets/imgs/physio.jpg" height={500} width={375} loading="lazy"/></div>
                <button>BOOK NOW</button>
                <div id={styles.mainTitle}><span>{mainTitle}</span></div>
                <div id={styles.location}><Placeholder className={styles.placeholder}/><span>Newington, Sydney</span></div>
            </div>
        </div>
      );
}