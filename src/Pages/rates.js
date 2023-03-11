import React, { useState, useRef, useEffect } from "react";
import { Link, NavigationType, useLocation } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useScrollDirection } from 'react-use-scroll-direction'
import styles from './home.module.css';
import styless from './how.module.css';
import stylesss from "./rate.module.css";
import Header from "./header";
import { FaAngleDown, FaArrowCircleDown, FaBeer, FaFacebook, FaInstagramSquare, FaLinkedinIn, FaWhatsapp, FaYoutubeSquare } from 'react-icons/fa';
import { ReactComponent as Iphonelogo } from './../assets/applogo.svg';
import { ReactComponent as Googlelogo } from './../assets/googlelogo.svg';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import useOnScreen from "./detectonview";
import useWindowDimensions from "./detectwindowsize";


const Rates = () => {

    const [showmuddlecontents, setshowmuddlecontents] = useState(true);
    const { height, width } = useWindowDimensions();
    const ref = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()
    const bottomref = useRef()

    const [scrollup, setscrollup] = useState(false);
    const [showimageone, setshowimageone] = useState(true);
    const [showimagetwo, setshowimagetwo] = useState(false);
    const [showimagethree, setshowimagethree] = useState(false);
    const [loading, setloading] = useState(true);

    const { isScrollingDown } = useScrollDirection()

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    setTimeout(() => {
        setloading(false)
    }, 5000);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            changepic()
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const changepic = () => {
        if (showimageone) {
            setshowimageone(!showimageone)
            setshowimagetwo(!showimagetwo)
        }
        if (showimagetwo) {
            setshowimagetwo(!showimagetwo)
            setshowimagethree(!showimagethree)
        }
        if (showimagethree) {
            setshowimagethree(!showimagethree)
            setshowimageone(!showimageone)
        }
    }


    const fadeImages = [
        {
            url: './../assets/phone1.png',
            caption: 'Slide 1'
        },
        {
            url: './../assets/icon.png',
            caption: 'Slide 2'
        },
        {
            url: './../assets/phone1.png',
            caption: 'Slide 3'
        },
    ];


    const images = [
        'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
        'https://homepages.cae.wisc.edu/~ece533/images/arctichare.png',
        'https://homepages.cae.wisc.edu/~ece533/images/baboon.png',
        'https://homepages.cae.wisc.edu/~ece533/images/barbara.png',
    ];

    //scroll page to view all restaurants
    const viewmiddle = () => {
        document.getElementById("middle").scrollIntoView({ behavior: 'smooth' });
    }




    return (
        <div onWheel={event => {
            if (event.nativeEvent.wheelDelta > 0) {
                setscrollup(true)
            } else {
                setscrollup(false)
            }
        }}>
            <Backdrop
                sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={loading}
            >
                <div className={styles.backdrop}>
                    <img src={require("./../assets/home.png")} />
                </div>
            </Backdrop>
            <div className={styles.homebody}>
                <Header scrolldown={isScrollingDown} scrollPosition={scrollPosition} />
                <div className={stylesss.firstdivhow}>
                    <div className={stylesss.bouncingwrap}>
                        <div className={styles.bounce} onClick={() => viewmiddle()}>
                            <FaAngleDown color="white" size={30} />
                        </div>
                    </div>
                    <div className={styles.howitworkswrap}>
                        <div className={styless.howittext}>
                            ACCESSORY THAT UNITES<br />
                            DESIGN AND HIGH<br />
                            TECHNOLOGY
                        </div>
                    </div>
                </div>
                <br /> <br />
                <div>
                    <div className={stylesss.rechargerighttoptext}>
                        Recharge your device when you need<br />
                        it and wherever you want
                        <div className={stylesss.rechargemoneytext}>3Ksh / 15Min</div>
                        Return the Iplug Powerbank to keep<br /><br />
                        on with the Sharing Lifestyle, exceeded<br /><br />
                        24 hours the rental will be concluded<br /><br />
                        automatically with a supplement of<br /><br />
                        20ksh.
                    </div>
                    <img className={width < 780 && stylesss.rechargeimage} src={require("./../assets/Rates/test2.jpg")} />
                </div>
                <div className={stylesss.technologydiv}>
                    You will be able to use the Sharing Service again after the Iplug Powerbank is <br />
                    returned to the nearest Iplugi Station.<br /><br />
                    Thanks to its innovative technology, the Iplug Powerbank recharges only inside <br />
                    theIplug Station slots.
                </div>
                <div className={width < 780 ? stylesss.bottomhomediv : styles.bottomhomediv} ref={ref2}>
                    {width < 780 && <div style={{ marginTop: -200 }} />}
                    <div className={styles.gettheappdiv} id="middle">
                        <div className={styles.wrapappdiv}>
                            <div className={styles.getappdivtext}>GET THE APP</div>
                            <div className={styles.applogosparent2}><Iphonelogo className={styles.iphonelogo} /><Googlelogo className={styles.googlelogo} /></div>
                        </div>
                    </div>
                    <div className={styles.almostbottomdiv}>
                        <div className={scrollup ? styles.bottomdivfooterout : styles.bottomdivfooter} ref={bottomref}>
                            <div className={styles.wrapcontents} >
                                <div className={styles.footercontentone}>
                                    <div className={styles.footercontentonetext}>Social </div>
                                    <div className={styles.sociallinks}>
                                        <div className={styles.sociallinkdiv}>
                                            <FaFacebook />
                                        </div>
                                        <div className={styles.sociallinkdiv}>
                                            <FaInstagramSquare />
                                        </div>
                                        <div className={styles.sociallinkdiv}>
                                            <FaLinkedinIn />
                                        </div>
                                        <div className={styles.sociallinkdiv}>
                                            <FaYoutubeSquare />
                                        </div>
                                        <div className={styles.sociallinkdiv}>
                                            <FaWhatsapp />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.footercontentone}>
                                    <img src={require("../assets/blackicon.png")} />
                                </div>
                                <div className={styles.footercontentlast}>
                                    <div className={styles.footercontentonetext}>Contacts </div>
                                    <div className={styles.footercontentonemail}>mail: info@iplug.it</div>
                                </div>
                            </div>
                            <br /> <br />
                            <hr color="white" />
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div className={styles.footerreserved}>© 2022 Iplug s.r.l. P.IVA: 10645650960. All Rights Reserved.</div>
                            </div>
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div className={styles.footerreservedbuttons}>Privacy Policy</div>
                                <div className={styles.footerreservedbuttons}>Cookie Policy</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rates;