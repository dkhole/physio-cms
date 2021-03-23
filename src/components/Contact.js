import React from "react";
import * as styles from "../styles/contact.module.css";
import Facebook from "../assets/svg/facebook.svg";
import Instagram from "../assets/svg/instagram.svg";

export default function Contact() {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}>CONTACT US</div>
            <div id={styles.contact}>
                <span>42 Wallaby Way<br/></span>
                <span>Sydney, NSW<br/></span>
                <span>P: (02) 9230 3192<br/></span>
                <span>E: movement@gmail.com</span>
                <div id={styles.socials}>
                    <Facebook />
                    <Instagram />
                </div>
            </div>
        </div>
      );
}