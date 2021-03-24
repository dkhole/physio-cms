import React from "react";
import * as styles from "../styles/location.module.css";
import Arrow from "../assets/svg/right.svg";

export default function Location({ address, description }) {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}><span>LOCATION</span></div>
            <div id={styles.address}><span>{address}</span></div>
            <div id={styles.mapWrap}>
                <div id={styles.mapContainer}>
                    <div id={styles.map}></div>
                    <div id={styles.here}>We are here</div>
                    <Arrow id={styles.arrow}/>
                </div>
            </div>
            <div id={styles.content}><span>{description}</span></div>
        </div>
      );
}