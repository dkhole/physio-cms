import React from "react";
import * as styles from "../styles/nav.module.css";

export default function Nav() {
    return (
        <div id={styles.nav}>
            <span id={styles.logo}>Movement Mechanics</span>
            <div id={styles.hamburger}>
            <hr></hr>
            <hr></hr>
            <hr></hr>
            </div>
        </div>
      );
}