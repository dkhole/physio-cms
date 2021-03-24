import React from "react";
import * as styles from "../styles/team.module.css";
import Profile from "./Profile";
import Fade from 'react-reveal/Fade';

export default function Team({ prof1, prof2, intro1, intro2 }) {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}><span>OUR TEAM</span></div>
            <div>
                <Fade right>
                    <Profile image={prof1} name="Paul Yu" title="Physiotherapist" description={intro1} position="30% 25%"/>
                </Fade>
                <Fade left>
                    <Profile image={prof2} name="Mintae Kim" title="Chiropractor" description={intro2} position="30% 30%"/>
                </Fade>
            </div>
        </div>
      );
}