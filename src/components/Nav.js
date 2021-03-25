import React, { useState } from "react";
import * as styles from "../styles/nav.module.css";
import "../styles/index.css";

export default function Nav() {
    const [ham, setHam] = useState('hamburger');
    const [navMenu, setNavMenu] = useState('');

    const setClass = () => {
        if(ham === 'hamburger') {
            setHam('hamburger open');
            setNavMenu('');
        } else {
            setHam('hamburger');
            setNavMenu('closed');
        }
    }

    return (
        <div id={styles.nav}>
            <span id={styles.logo}>Movement Mechanics</span>
            <div className={ham} onClick={setClass}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className={[styles.menu, styles[`${navMenu}`]].join(' ')}>
                <div id={styles.triangle}></div>
                <ul>
                    <li>Book Now</li>
                    <li>Location</li>
                    <li>Team</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
      );
}