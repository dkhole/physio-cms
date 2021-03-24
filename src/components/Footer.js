import React from "react";
import * as styles from "../styles/footer.module.css";

export default function Footer() {
    return (
        <div id={styles.wrap}>
            <div id={styles.contentWrap}>
                <div>
                    <span>
                        42 Wallaby Way<br/>
                        Sydney, NSW<br/>
                        P: (02) 9230 3192
                    </span>
                </div>
                <div>
                    <span>
                        Bobo Pty Ltd.<br/>
                        ABN 88 151 821 242 <br/>
                        E: movement@gmail.com<br/>
                    </span>
                </div>
            </div>
            <div id={styles.sig}><span>Designed by dkhole</span></div>
        </div>
      );
}