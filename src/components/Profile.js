import React from "react";
import * as styles from "../styles/profile.module.css";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Profile({ image, name, title, description }) {
    return (
        <div id={styles.wrap}>
            <GatsbyImage className={styles.profImg} objectPosition="30% 30%" image={image} height={500} width={375} loading="lazy"/>
            <div className={styles.textWrap}>
                <div className={styles.name}>{ name }</div>
                <div className={styles.title}>{ title }</div>
                <div className={styles.description}>{ description }</div>
            </div>
        </div>
    );
}