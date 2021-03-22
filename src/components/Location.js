import React from "react";
import * as styles from "../styles/location.module.css";
import Arrow from "../assets/svg/right.svg";

export default function Location() {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}><span>Location</span></div>
            <div id={styles.address}><span>42 Wallaby Way, Sydney</span></div>
            <div id={styles.mapWrap}>
                <div id={styles.map}></div>
                <div id={styles.here}>We are here</div>
                <Arrow />
                <div id={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dui eget egestas lacinia. In viverra, erat eu euismod consectetur, purus quam consectetur elit, in. </div>
            </div>
        </div>
      );
}