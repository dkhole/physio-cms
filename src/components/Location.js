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
                    <div id={styles.map}><a href="https://www.google.com/maps/place/2+Joyner+Ave,+Newington+NSW+2127/@-33.8437831,151.0471529,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12a4aa3abf962f:0x80ce581db2f7f964!8m2!3d-33.8437876!4d151.0493416" target="_blank" rel="noreferrer" aria-label="Link to location"><GatsbyImage layout="fixed" image={map} alt="map" height={350} width={350} loading="lazy"/ ></a></div>
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