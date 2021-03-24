import React from "react";
import * as styles from "../styles/team.module.css";
import Profile from "./Profile";

export default function Team({ prof1, prof2 }) {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}><span>OUR TEAM</span></div>
            <div>
                <Profile image={prof1} name="Paul Yu" title="Physiotherapist" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dui eget egestas lacinia. In viverra, erat eu euismod consectetur, purus quam consectetur elit, in."/>
                <Profile image={prof2} name="Mintae Kim" title="Chiropractor" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dui eget egestas lacinia. In viverra, erat eu euismod consectetur, purus quam consectetur elit, in."/>
            </div>
        </div>
      );
}