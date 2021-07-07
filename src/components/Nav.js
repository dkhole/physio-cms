import React, { useState } from "react";
import Logo from "../assets/svg/logo.svg";
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
            <div id={styles.logoWrap}>
                <Logo />
                <span id={styles.logo}>Movement<span id={styles.mechanics}>Mechanics</span></span>
            </div>
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
                    <li><a href="#__gatsby">Home</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li id={styles.bookLink}><a href="https://movement-mechanics.au2.cliniko.com/bookings#service" aria-label="Link to booking">Book Now</a></li>
                </ul>
            </div>
        </div>
      );
}