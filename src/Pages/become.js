import React, { useState, useRef, useEffect } from "react";
import { Link, NavigationType, useLocation } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useScrollDirection } from 'react-use-scroll-direction'
import styles from './home.module.css';
import styless from './how.module.css';
import become from "./become.module.css";
import stories from "./stories.module.css";
import Header from "./header";
import { FaAngleDown, FaArrowCircleDown, FaBeer, FaFacebook, FaInstagramSquare, FaLinkedinIn, FaWhatsapp, FaYoutubeSquare } from 'react-icons/fa';
import { ReactComponent as Iphonelogo } from './../assets/applogo.svg';
import { ReactComponent as Googlelogo } from './../assets/googlelogo.svg';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import useOnScreen from "./detectonview";
import useWindowDimensions from "./detectwindowsize";


const Become = () => {
    const { height, width } = useWindowDimensions();
    const [showmuddlecontents, setshowmuddlecontents] = useState(true);
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const bottomref = useRef()
    const isVisible3 = useOnScreen(ref3)
    const isVisible4 = useOnScreen(ref4)
    const isVisible5 = useOnScreen(ref5)
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
                <div className={become.firstdivhow}>
                    {width > 780 && <div className={styles.bouncingwrap}>
                        <div className={styles.bounce} onClick={() => viewmiddle()}>
                            <FaAngleDown color="white" size={30} />
                        </div>
                    </div>}
                    <div className={styles.howitworkswrap}>
                        <div className={styles.howittext}>BECOME A IPLUG PARTNER</div>
                    </div>
                </div>
                <br /> <br />
                <div style={{
                    backgroundColor: "white"
                }}>
                    <div className={styless.powerbank}>
                        Widen your horizons. Let your location to be discovered by our<br />
                        users, your new clients.<br /><br />
                        To Become a part of IPLUG world, choose your perfect Iplug<br />
                        Station and refine your environment.<br /><br />
                    </div>
                </div>
                <div className={styles.wrapmaxresdefault}>
                    <img src={require("./../assets/Become Partner/B.jpg")} className={styles.maxresdefault} />
                    <div className={styles.watchvideodiv}>
                        <FaYoutubeSquare /> &nbsp; WATCH THE VIDEO
                    </div>
                </div>
                <br /><br /><br />
                {/* mobile divs */}
                <div ref={ref3}>
                    {width < 780 && <div>
                        <div className={!isVisible4 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            GOLD ETERNITY
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible4 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/Become Partner/yellow.jpg")} className={stories.zoomedimage} />
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref4}>
                    {width < 780 && <div>
                        <div className={!isVisible5 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            BORDEAUX
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible5 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("../assets/Become Partner/bord.png")} className={stories.zoomedimage} />
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref5}>
                    {width < 780 && <div>
                        <div className={scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            DEEP BLACK<br /><br />
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/Become Partner/deep.png")} className={stories.zoomedimage} />
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>



                {width > 780 &&
                    <div className={styless.getapphow2} ref={ref3}>
                        {isVisible3 &&
                            <div className={!isVisible4 && scrollup ? styless.rightfixedimageouthow : styless.rightfixedimagehow}>
                                GOLD ETERNITY
                            </div>}
                        <div>
                            {isVisible3 &&
                                <img src={require("./../assets/Become Partner/yellow.jpg")} className={!isVisible4 && scrollup ? styless.iplugdescriptionleftout : styless.iplugdescriptionleft} />
                            }
                        </div>
                    </div>}
                {width > 780 && <div className={styless.getapphow2} ref={ref4}>
                    {isVisible4 && <img src={require("./../assets/Become Partner/bord.png")} className={!isVisible5 && scrollup ? styless.rightfixedimageouthow : styless.rightfixedimagehow} />}
                    <div >
                        {isVisible4 && <div className={!isVisible5 && scrollup ? styless.iplugdescriptionleftout : styless.iplugdescriptionleft}>
                            BORDEAUX
                        </div>}
                    </div>
                </div>}
                {width > 780 && <div className={styless.getapphow2} ref={ref5}>
                    {isVisible5 &&
                        <div className={scrollup ? styless.rightfixedimageouthow : styless.rightfixedimagehow}>
                            DEEP BLACK<br /><br />
                        </div>}
                    <div>
                        {isVisible5 &&
                            <img src={require("./../assets/Become Partner/deep.png")} className={scrollup ? styless.iplugdescriptionleftout : styless.iplugdescriptionleft} />
                        }
                    </div>
                </div>}
                <div className={styles.bottomhomediv} ref={ref2}>
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

export default Become;