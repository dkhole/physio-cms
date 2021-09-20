import React from "react";
import * as styles from "../styles/location.module.css";
import Arrow from "../assets/svg/right.svg";
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import { GatsbyImage } from "gatsby-plugin-image";

export default function Location({ address, description, map }) {
    return (
        <div id="location">
            <Fade bottom>
            <div id={styles.title}><span>LOCATION</span></div>
            <div id={styles.address}><span>{address}</span></div>
            <div id={styles.mapWrap}>
                <div id={styles.mapContainer}>
                    <div id={styles.map}><a href="https://www.google.com/maps/place/Movement+Mechanics+Health+and+Performance/@-33.8437876,151.0471529,17z/data=!4m13!1m7!3m6!1s0x6b12a4aa3abf962f:0x80ce581db2f7f964!2s2+Joyner+Ave,+Newington+NSW+2127!3b1!8m2!3d-33.8437876!4d151.0493416!3m4!1s0x6b12a5bc340f66ef:0xa3d457170d071d5e!8m2!3d-33.8438111!4d151.0493915" target="_blank" rel="noreferrer" aria-label="Link to location"><GatsbyImage layout="fixed" image={map} alt="map" height={350} width={350} loading="lazy"/ ></a></div>
                    <div >
                        <Tada forever={true} duration={2000}><div id={styles.here}>We are here</div></Tada>
                        <Arrow id={styles.arrow}/>
                    </div>
                </div>
                <div id={styles.content}><span>{description}</span></div>
            </div>
            </Fade>
        </div>
      );
}