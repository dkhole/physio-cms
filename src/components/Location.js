import React from "react";
import * as styles from "../styles/location.module.css";
import Arrow from "../assets/svg/right.svg";
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import { GatsbyImage } from "gatsby-plugin-image";

export default function Location({ address, description, map }) {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}><span>LOCATION</span></div>
            <div id={styles.address}><span>{address}</span></div>
            <Fade left>
                <div id={styles.mapWrap}>
                    <div id={styles.mapContainer}>
                        <div id={styles.map}><GatsbyImage layout="fixed" image={map} height={350} width={350} loading="lazy"/></div>
                        <Tada forever={true} duration={2000}><div id={styles.here}>We are here</div></Tada>
                        <Arrow id={styles.arrow}/>
                    </div>
                </div>
            </Fade>
            <div id={styles.content}><span>{description}</span></div>
        </div>
      );
}