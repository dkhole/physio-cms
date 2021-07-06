import React from "react";
import * as styles from "../styles/gallery.module.css";
import Carousel from 'react-elastic-carousel';
import { GatsbyImage } from "gatsby-plugin-image";
import Fade from 'react-reveal/Fade';

export default function Gallery({ gallery1, gallery2, gallery3, isMobile }) {

    if(isMobile) {
        return (
            <div id="gallery">
                <Fade bottom>
                <div id={styles.title}>GALLERY</div>
                    <div id={styles.carouselWrap}>
                        <Carousel itemPadding={[0, 25, 0, 25]}>
                            <GatsbyImage image={gallery1} height={500} width={375} loading="lazy"/>
                            <GatsbyImage image={gallery2} height={500} width={375} loading="lazy"/>
                            <GatsbyImage image={gallery3} height={500} width={375} loading="lazy"/>
                        </Carousel>
                    </div>
                </Fade>
            </div>
          );
    } else {
        return (
            <div id="gallery">
                <Fade bottom>
                <div id={styles.title}>GALLERY</div>
                    <div id={styles.carouselWrap}>
                        <Carousel itemsToShow={3} itemPadding={[0, 25, 0, 25]}>
                            <GatsbyImage image={gallery1} height={500} width={375} loading="lazy"/>
                            <GatsbyImage image={gallery2} height={500} width={375} loading="lazy"/>
                            <GatsbyImage image={gallery3} height={500} width={375} loading="lazy"/>
                        </Carousel>
                    </div>
                </Fade>
            </div>
          );
    }

}