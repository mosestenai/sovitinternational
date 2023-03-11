import React, { useState, useRef, useEffect } from "react";
import { Link, NavigationType, useLocation } from "react-router-dom";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { useScrollDirection } from 'react-use-scroll-direction'
import styles from './home.module.css';
import styless from './how.module.css';
import stories from "./stories.module.css";
import Header from "./header";
import { FaAngleDown, FaArrowCircleDown, FaBeer, FaFacebook, FaInstagramSquare, FaLinkedinIn, FaWhatsapp, FaYoutubeSquare } from 'react-icons/fa';
import { ReactComponent as Iphonelogo } from './../assets/applogo.svg';
import { ReactComponent as Googlelogo } from './../assets/googlelogo.svg';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import useOnScreen from "./detectonview";
import useWindowDimensions from "./detectwindowsize";


const Stories = () => {
    const { height, width } = useWindowDimensions();
    const [showmuddlecontents, setshowmuddlecontents] = useState(true);
    const ref = useRef()
    const ref2 = useRef()
    const ref3 = useRef()
    const ref4 = useRef()
    const ref5 = useRef()
    const ref6 = useRef()
    const ref7 = useRef()
    const ref8 = useRef()
    const ref9 = useRef()
    const ref10 = useRef()
    const bottomref = useRef()
    const isVisible = useOnScreen(ref)
    const isVisible3 = useOnScreen(ref3)
    const isVisible4 = useOnScreen(ref4)
    const isVisible5 = useOnScreen(ref5)
    const isVisible6 = useOnScreen(ref6)

    const isVisible7 = useOnScreen(ref7)
    const isVisible8 = useOnScreen(ref8)
    const isVisible9 = useOnScreen(ref9)
    const isVisible10 = useOnScreen(ref10)
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
                <Header scrolldown={isScrollingDown} scrollPosition={scrollPosition} />
                <div className={stories.firstdivhow}>
                    {width > 780 && <div className={styles.bouncingwrap}>
                        <div className={styles.bounce} onClick={() => viewmiddle()}>
                            <FaAngleDown color="white" size={30} />
                        </div>
                    </div>}
                    <div className={styles.howitworkswrap}>
                        <div className={styles.howittext}>STORIES</div>
                    </div>
                </div>
                <br /> <br />

                {/* mobile divs */}
                <div ref={ref}>
                    {width < 780 && <div>
                        <div className={!isVisible3 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Your Style, Your Energy, Iplug
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible3 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/Stories/A.jpg")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref3}>
                    {width < 780 && <div>
                        <div className={!isVisible4 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            No more without Battery
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible4 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/Stories/C.png")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref4}>
                    {width < 780 && <div>
                        <div className={!isVisible5 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Recharge yourself with Style
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible5 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/Stories/D.png")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref5}>
                    {width < 780 && <div>
                        <div className={!isVisible6 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Myfo x Iplug
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible6 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/Stories/E.png")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref6}>
                    {width < 780 && <div>
                        <div className={!isVisible7 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Iplug x Nairobi
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible7 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/final/15.jpg")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref7}>
                    {width < 780 && <div>
                        <div className={!isVisible8 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Iplug x Caffè Nairobi
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible8 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/Stories/G.png")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref8}>
                    {width < 780 && <div>
                        <div className={!isVisible9 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Iplug x Nakuru
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible9 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/final/5.jpg")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref9}>
                    {width < 780 && <div>
                        <div className={!isVisible10 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Talk to Iplug
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible10 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/final/7.jpg")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>
                <div ref={ref10}>
                    {width < 780 && <div>
                        <div className={scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            SOS Iplug
                        </div>
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/final/12.jpg")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    </div>}
                </div>






                {width > 780 && <div className={stories.getapphow} ref={ref}>
                    {isVisible &&
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible3 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/Stories/A.jpg")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    }
                    {isVisible &&
                        <div className={!isVisible3 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Your Style, Your Energy, Iplug
                        </div>}

                </div>}

                {width > 780 && <div className={stories.getapphow2} ref={ref3}>
                    {isVisible3 &&
                        <div className={stories.zoomwrap}>
                            <div className={!isVisible4 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                <div className={stories.nomore}>No more without Battery</div>
                            </div>
                        </div>
                    }
                    {isVisible3 &&
                        <div className={!isVisible4 && scrollup ? stories.iplugdescriptionleftout2 : stories.iplugdescriptionleft2}>
                            <div className={stories.zoomwrap2}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div className={stories.ontop} style={{ top: "40%" }} ><FaYoutubeSquare size={30} /></div>
                                </div>

                                <img src={require("./../assets/Stories/C.png")} className={stories.zoomedimage} />

                            </div>
                        </div>}
                </div>}<br />
                {width > 780 && <div className={stories.getapphow} ref={ref4}>
                    {isVisible4 &&
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible5 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/Stories/D.png")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    }
                    {isVisible4 &&
                        <div className={!isVisible5 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Recharge yourself with Style
                        </div>}

                </div>}<br />
                {width > 780 && <div className={stories.getapphow2} ref={ref5}>
                    {isVisible5 &&
                        <div className={stories.zoomwrap}>
                            <div className={!isVisible6 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                <div className={stories.nomore}>Myfo x Iplug</div>
                            </div>
                        </div>
                    }
                    {isVisible5 &&
                        <div className={!isVisible6 && scrollup ? stories.iplugdescriptionleftout2 : stories.iplugdescriptionleft2}>
                            <div className={stories.zoomwrap2}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div className={stories.ontop} style={{ top: "40%" }} ><FaYoutubeSquare size={30} /></div>
                                </div>

                                <img src={require("./../assets/Stories/E.png")} className={stories.zoomedimage} />

                            </div>
                        </div>}
                </div>}<br />
                {width > 780 && <div className={stories.getapphow} ref={ref6}>
                    {isVisible6 &&
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible7 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/final/15.jpg")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    }
                    {isVisible6 &&
                        <div className={!isVisible7 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Iplug x Nairobi
                        </div>}

                </div>}<br />
                {width > 780 && <div className={stories.getapphow2} ref={ref7}>
                    {isVisible7 &&
                        <div className={stories.zoomwrap}>
                            <div className={!isVisible8 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                <div className={stories.nomore}>Iplug x Caffè Nairobi</div>
                            </div>
                        </div>
                    }
                    {isVisible7 &&
                        <div className={!isVisible8 && scrollup ? stories.iplugdescriptionleftout2 : stories.iplugdescriptionleft2}>
                            <div className={stories.zoomwrap2}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div className={stories.ontop} style={{ top: "40%" }} ><FaYoutubeSquare size={30} /></div>
                                </div>

                                <img src={require("./../assets/Stories/G.png")} className={stories.zoomedimage} />

                            </div>
                        </div>}
                </div>}<br />
                {width > 780 && <div className={stories.getapphow} ref={ref8}>
                    {isVisible8 &&
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={!isVisible9 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/final/5.jpg")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    }
                    {isVisible8 &&
                        <div className={!isVisible9 && scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            Iplug x Nakuru
                        </div>}

                </div>}<br />
                {width > 780 && <div className={stories.getapphow} ref={ref9}>
                    {isVisible9 &&
                        <div className={stories.zoomwrap}>
                            <div className={!isVisible10 && scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                <div className={stories.nomore}>Talk to Iplug</div>
                            </div>
                        </div>
                    }
                    {isVisible9 &&
                        <div className={!isVisible10 && scrollup ? stories.iplugdescriptionleftout2 : stories.iplugdescriptionleft2}>
                            <div className={stories.zoomwrap2}>
                                <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                    <div className={stories.ontop} style={{ top: "40%" }} ><FaYoutubeSquare size={30} /></div>
                                </div>

                                <img src={require("./../assets/final/7.jpg")} className={stories.zoomedimage} />

                            </div>
                        </div>}
                </div>}<br />
                {width > 780 && <div className={stories.getapphow} ref={ref10}>
                    {isVisible10 &&
                        <div className={stories.zoomwrap}>
                            <div className={stories.zoomwrap2}>
                                <div className={scrollup ? stories.rightfixedimageouthow : stories.rightfixedimagehow}>
                                    <img src={require("./../assets/final/12.jpg")} className={stories.zoomedimage} />
                                    <div className={stories.ontop}><FaYoutubeSquare size={30} /></div>
                                </div>
                            </div>
                        </div>
                    }
                    {isVisible10 &&
                        <div className={scrollup ? stories.iplugdescriptionleftout : stories.iplugdescriptionleft}>
                            SOS Iplug
                        </div>}

                </div>}

                <div className={styles.bottomhomediv} ref={ref2}>
                {width < 780 && <div style={{ marginTop: -400 }} />}
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

export default Stories;