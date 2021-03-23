import React from "react";
import * as styles from "../styles/team.module.css";
import Profile from "./Profile";

export default function Team() {
    return (
        <div id={styles.wrap}>
            <div id={styles.title}><span>Our Team</span></div>
            <div id={styles.profileWrap}>
                <Profile image={0} name="Paul Yu" title="physiotherapist" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dui eget egestas lacinia. In viverra, erat eu euismod consectetur, purus quam consectetur elit, in."/>
                <Profile image={1} name="Mintae Kim" title="chiropractor" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec condimentum dui eget egestas lacinia. In viverra, erat eu euismod consectetur, purus quam consectetur elit, in."/>
            </div>
        </div>
      );
}