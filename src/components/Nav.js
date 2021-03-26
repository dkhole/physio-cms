import React, { useState } from "react";
import * as styles from "../styles/nav.module.css";
import "../styles/index.css";

export default function Nav() {
    const [ham, setHam] = useState('hamburger');
    const [navMenu, setNavMenu] = useState('closed');

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
            <div tabIndex={0} role="button" className={ham} onKeyDown={setClass} onClick={setClass}>
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
                    <li><a href="#landing">Book Now</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
      );
}