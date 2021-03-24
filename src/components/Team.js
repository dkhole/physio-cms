import React from "react";
import * as styles from "../styles/team.module.css";
import Profile from "./Profile";

export default function Team({ prof1, prof2, intro1, intro2 }) {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}><span>OUR TEAM</span></div>
            <div>
                <Profile image={prof1} name="Paul Yu" title="Physiotherapist" description={intro1}/>
                <Profile image={prof2} name="Mintae Kim" title="Chiropractor" description={intro2}/>
            </div>
        </div>
      );
}