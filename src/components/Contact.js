import React from "react";
import * as styles from "../styles/contact.module.css";
import Facebook from "../assets/svg/facebook.svg";
import Instagram from "../assets/svg/instagram.svg";
import Arrow from "../assets/svg/right.svg";
import Tada from 'react-reveal/Tada';
import Fade from 'react-reveal/Fade';

export default function Contact({ street, suburb, state, postcode, email, phone }) {
    return (
        <div id="contact">
            <Fade bottom>   
            <div id={styles.title}>CONTACT US</div>
            <div id={styles.contact}>
                <span>
                    {street}<br/>
                    {suburb}, {state}, {postcode}<br/>
                    P: {phone}<br/>
                    E: {email}
                </span>
                <div id={styles.socials}>
                    <Facebook className={styles.socialSvg} />
                    <Instagram className={styles.socialSvg} />
                    <Arrow id={styles.arrow}/>
                    <Tada forever={true} duration={2000}><span id={styles.follow}>Follow Us!</span></Tada>
                </div>
            </div>
            </Fade>
        </div>
      );
}