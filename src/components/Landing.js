import React from "react";
import * as styles from "../styles/landing.module.css";
import Placeholder from "../assets/svg/placeholder.svg";
import { GatsbyImage } from "gatsby-plugin-image";
import Jello from 'react-reveal/Jello';

export default function Landing({ mainTitle, suburb, landingImg }) {
    return (
        <div id="landing">
            <Jello duration={950}>
                <div id={styles.mainWrap}>
                    <div id={styles.photo}><GatsbyImage className={styles.picWrap} alt="landing" image={landingImg} height={500} width={375} loading="lazy"/></div>
                    <div id={styles.content}>
                    <a href="https://movement-mechanics.au2.cliniko.com/bookings#service" aria-label="Link to booking"><button id={styles.button}><span>BOOK NOW</span></button></a>
                        <div id={styles.mainTitle}><span>{mainTitle}</span></div>
                        <div id={styles.location}><Placeholder className={styles.placeholder}/><span>{suburb}</span></div>
                    </div>
                </div>
            </Jello>
        </div>
      );
}