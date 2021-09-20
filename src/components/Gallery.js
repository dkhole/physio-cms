import React, {useEffect, useState} from "react";
import * as styles from "../styles/gallery.module.css";
import Carousel from 'react-elastic-carousel';
import { GatsbyImage } from "gatsby-plugin-image";
import Fade from 'react-reveal/Fade';
import { Link } from "gatsby";

export default function Gallery({ gallery1, gallery2, gallery3, isMobile }) {
    const [gal1, setGal1] = useState(null);
    const [gal2, setGal2] = useState(null);
    const [gal3, setGal3] = useState(null);

    useEffect(() => {
        if(gallery1) {
            setGal1(window.location.origin + gallery1.images.fallback.src);
            setGal2(window.location.origin + gallery2.images.fallback.src);
            setGal3(window.location.origin + gallery3.images.fallback.src);
        }
    }, [gallery1, gallery2, gallery3])

    if(isMobile) {
        return (
            <div id="gallery">
                <Fade bottom>
                <div id={styles.title}>GALLERY</div>
                    <div id={styles.carouselWrap}>
                        <Carousel itemPadding={[0, 25, 0, 25]}>
                            <Link to={gal1}><GatsbyImage image={gallery1} height={500} width={375} loading="lazy" alt="gallery1"/></Link>
                            <Link to={gal2}><GatsbyImage image={gallery2} height={500} width={375} loading="lazy" alt="gallery2"/></Link>
                            <Link to={gal3}><GatsbyImage image={gallery3} height={500} width={375} loading="lazy" alt="gallery3"/></Link>
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
                            <Link to={gal1}><GatsbyImage image={gallery1} height={500} width={175} loading="lazy"/></Link>
                            <Link to={gal2}><GatsbyImage image={gallery2} height={500} width={175} loading="lazy"/></Link>
                            <Link to={gal3}><GatsbyImage image={gallery3} height={500} width={175} loading="lazy"/></Link>
                        </Carousel>
                    </div>
                </Fade>
            </div>
          );
    }

}