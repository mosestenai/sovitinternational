import React, { useState, useRef, useEffect } from "react";
import { Link, NavigationType, useLocation } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useScrollDirection } from 'react-use-scroll-direction'
import styles from './home.module.css';
import Header from "./header";
import { FaAngleDown, FaArrowCircleDown, FaBeer, FaFacebook, FaInstagramSquare, FaLinkedinIn, FaWhatsapp, FaYoutubeSquare } from 'react-icons/fa';
import { ReactComponent as Iphonelogo } from './../assets/applogo.svg';
import { ReactComponent as Googlelogo } from './../assets/googlelogo.svg';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import useOnScreen from "./detectonview";


const Homepage = () => {

    const [showmuddlecontents, setshowmuddlecontents] = useState(true);
    const ref = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const bottomref = useRef()
    const isVisible = useOnScreen(ref)
    const isVisible3 = useOnScreen(ref3)
    const isVisible4 = useOnScreen(ref4)
    const isbottomvisible = useOnScreen(ref)
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
                <div className={styles.firstdiv}>
                    <Header scrolldown={isScrollingDown} scrollPosition={scrollPosition} />
                    <div className={styles.nomoretext}>NO MORE</div>
                    <div className={styles.nomoretext2}>WITHOUT BATTERY</div>
                    <div className={styles.nomoretextbelow}>Get the app and find the nearest</div>
                    <div className={styles.nomoretextbelow2}>Iplug Powerbank</div>
                    <div className={styles.applogosparent}><Iphonelogo className={styles.iphonelogo} /><Googlelogo className={styles.googlelogo} /></div>

                    <div className={styles.homephoneslider}>
                        {showimageone && <img src={require("./../assets/slider2.png")} />}
                        {showimagetwo && <img src={require("./../assets/slider2.png")} />}
                        {showimagethree && <img src={require("./../assets/slider3.png")} />}
                    </div>
                    <div style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex", position: "absolute" }}>
                        <div className={styles.bounce} onClick={() => viewmiddle()}>
                            <FaAngleDown color="white" size={30} />
                        </div>
                    </div>
                    <div className={styles.middlehomediv}>
                        <img className={styles.homephone} src={require("./../assets/phone.png")} />
                    </div>
                </div>
                <div className={styles.image}></div>
                <div ref={ref}>
                    {isVisible && <img src={require("./../assets/Landing Page/C.png")} className={scrollup && !isVisible4 ? styles.rightfixedimageout : styles.rightfixedimage} />}
                </div>
                <div ref={ref4}>
                    {isVisible4 && <img src={require("./../assets/final/8.jpg")} className={scrollup && !isVisible3 ? styles.rightfixedimage2out : styles.rightfixedimage2} />}
                </div>
                <div className={styles.middledivwrap}>
                    <div ref={ref3}>
                        {isVisible3 && <div className={scrollup ? styles.iplugdescriptionleftout : styles.iplugdescriptionleft}>
                            Iplug is the first Powerbank Rental<br />
                            Service that combines high <br />
                            technology and design in an <br />
                            increasingly dynamic and <br />
                            demanding world.<br /><br />
                            Iplug is not a simple Powerbank<br />
                            Sharing Service, but the only one<br />
                            to have the innovative Fast Charge <br />
                            technology that allows you to<br />
                            recharge any type of device in a <br />
                            few minutes with total freedom of<br />
                            movement.<br /><br />
                            <div className={styles.discoverbutton} >
                                DISCOVER HOW IT WORKS
                            </div>
                        </div>}
                    </div>
                </div>
                <div className={styles.bottomhomediv} ref={ref2}>
                    <div className={styles.bottomdivimageswrap}  >
                        <div className={styles.wrapmaxresdefault2}>
                            <img src={require("./../assets/Landing Page/slot2.jpg")} className={styles.maxresdefault2} />
                            <div className={styles.howitworks}>
                                <div className={styles.imagebuttondescription}>HOW IT WORKS</div>
                                <div className={styles.morebutton}>MORE</div>
                            </div>
                        </div>
                        <div className={styles.wrapmaxresdefault2}>
                            <img src={require("./../assets/Landing Page/F.png")} className={styles.maxresdefault2} />
                            <div className={styles.howitworks}>
                                <div className={styles.imagebuttondescription}>RATES</div>
                                <div className={styles.morebutton}>MORE</div>
                            </div>
                        </div>
                    </div>
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
                                    <div className={styles.footercontentonemail}>mail: info@theiplug.com</div>
                                </div>
                            </div>
                            <br /> <br />
                            <hr color="white" />
                            <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <div className={styles.footerreserved}>© 2023 Iplug s.r.l. P.IVA: 10645650960. All Rights Reserved.</div>
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

export default Homepage;