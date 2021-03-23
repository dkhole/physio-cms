import React from "react";
import * as styles from "../styles/gallery.module.css";
import Carousel from 'react-elastic-carousel';
import { StaticImage } from "gatsby-plugin-image";

export default function Gallery() {

    return (
        <div id={styles.wrap}>
            <div id={styles.title}>GALLERY</div>
            <div id={styles.carouselWrap}>
                <Carousel>
                    <StaticImage src="../assets/imgs/stock-phys.jpg" height={500} width={375} loading="lazy"/>
                    <StaticImage src="../assets/imgs/stock-phys1.jpeg" height={500} width={375} loading="lazy"/>
                    <StaticImage src="../assets/imgs/stock-phys2.jpg" height={500} width={375} loading="lazy"/>
                </Carousel>
            </div>
        </div>
      );
}