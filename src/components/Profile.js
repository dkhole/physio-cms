import React from "react";
import * as styles from "../styles/profile.module.css";
import { StaticImage } from "gatsby-plugin-image";

export default function Profile({ image, name, title, description }) {
    if(image === 0) {
        return (
            <div id={styles.wrap}>
                <StaticImage className={styles.profImg} objectPosition="50% 25%" src="../assets/imgs/paul.jpg" quality={100} height={500} width={375} loading="lazy"/>
                <div className={styles.textWrap}>
                    <div className={styles.name}>{ name }</div>
                    <div className={styles.title}>{ title }</div>
                    <div className={styles.description}>{ description }</div>
                </div>
            </div>
          );
    } else {
        return (
            <div id={styles.wrap}>
                <StaticImage className={styles.profImg} objectPosition="30% 30%" src="../assets/imgs/mintae.jpg" height={500} width={375} loading="lazy"/>
                <div className={styles.textWrap}>
                    <div className={styles.name}>{ name }</div>
                    <div className={styles.title}>{ title }</div>
                    <div className={styles.description}>{ description }</div>
                </div>
            </div>
          );
    }
}