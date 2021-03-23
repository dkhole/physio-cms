import React from "react";
import * as styles from "../styles/contact.module.css";
import Facebook from "../assets/svg/facebook.svg";
import Instagram from "../assets/svg/instagram.svg";
import Arrow from "../assets/svg/right.svg";

export default function Contact() {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}>CONTACT US</div>
            <div id={styles.contact}>
                <span>
                    42 Wallaby Way<br/>
                    Sydney, NSW<br/>
                    P: (02) 9230 3192<br/>
                    E: movement@gmail.com
                </span>
                <div id={styles.socials}>
                    <Facebook className={styles.socialSvg} />
                    <Instagram className={styles.socialSvg} />
                    <Arrow id={styles.arrow}/>
                    <span id={styles.follow}>Follow Us!</span>
                </div>
            </div>
        </div>
      );
}