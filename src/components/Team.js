import React from "react";
import * as styles from "../styles/team.module.css";
import Profile from "./Profile";
import Fade from 'react-reveal/Fade';

export default function Team({ prof1, prof2, name1, title1, description1, name2, title2, description2 }) {
    return (
        <div id="team">
            <div id={styles.title}><span>OUR TEAM</span></div>
            <div id={styles.profileWrap}>
                <Fade bottom>
                    <Profile image={prof1} name={name1} title={title1} description={description1} position="30% 25%"/>
                </Fade>
                <Fade bottom>
                    <Profile image={prof2} name={name2} title={title2} description={description2} position="30% 30%"/>
                </Fade>
            </div>
        </div>
      );
}