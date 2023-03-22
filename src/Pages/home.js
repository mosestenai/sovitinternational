import React, { useState, useRef, useEffect } from "react";
import { Link, NavigationType, useLocation, useNavigate } from "react-router-dom";
import CountUp from 'react-countup';
import { useScrollDirection } from 'react-use-scroll-direction'
import styles from './home.module.css';
import Header from "./header";
import { FaAngleDown, FaArrowCircleDown, FaBars, FaBeer, FaEnvelope, FaFacebook, FaInstagramSquare, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaPlus, FaTimes, FaWhatsapp, FaYoutubeSquare } from 'react-icons/fa';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import useOnScreen from "../functions/detectonview";
import { Backdrop, Button, Container } from "@mui/material";
import { ArrowForward, ArrowRight, Diversity1Outlined, HealthAndSafetyOutlined, MiscellaneousServices, SettingsAccessibility, WorkspacePremiumOutlined } from "@mui/icons-material";
import Zoomicon from "../Components/zoomicon";
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { partnersarray, testimonialsarray } from "../Utils/arrays";
import { primarycolor } from "../Utils/colors";
import Sitefooter from "../Components/footer";


const Homepage = () => {

    //header states
    const [shownavbar, setshownavbar] = useState(false);
    const location = useLocation();
    const navigate = useNavigate()


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
    const [scrollup, setscrollup] = useState(false);;
    const [loading, setloading] = useState(true);

    const [currentpath, setcurrentpath] = useState('home');

    const { isScrollingDown } = useScrollDirection()

    const [scrollPosition, setScrollPosition] = useState(0);


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };


    setTimeout(() => {
        setloading(false)
    }, 3000);



    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    //scroll page to the specified path
    const navigatetopath = (path) => {
        document.getElementById(path).scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div onWheel={event => {
            if (event.nativeEvent.wheelDelta > 0) {
                setscrollup(true)
            } else {
                setscrollup(false)
            }
        }}>
            {loading && <Zoomicon />}
            <div className={styles.homebody} id="home">
                <div className={styles.firstdiv}>
                    {/* <Localheader scrolldown={isScrollingDown} scrollPosition={scrollPosition} /> */}
                    <Header scrolldown={isScrollingDown} scrollPosition={scrollPosition} />
                    <div className={styles.nomoretext}>SOVIT</div>
                    <div className={styles.nomoretext2}>FIRST CHOICE</div>
                    <div className={styles.nomoretextbelow}>Contruction partner</div>
                    <div className={styles.nomoretextbelow2}>
                        <button className={styles.viewworkbutton}>View our work</button>
                    </div>

                    <div style={{ width: "100%", justifyContent: "center", alignItems: "center", display: "flex", position: "absolute" }}>
                        <div className={styles.bounce} onClick={() => navigatetopath("projects")}>
                            <FaAngleDown color="white" size={30} />
                        </div>
                    </div>
                    <div className={styles.middlehomediv}>
                        <img className={styles.homephone} src={require("./../assets/icons/const2.png")} />
                    </div>
                </div>
                <div className={styles.image}></div>
                <div ref={ref}>
                    {isVisible && <img src={require("./../assets/home/image5.jpg")} className={scrollup && !isVisible4 ? styles.rightfixedimageout : styles.rightfixedimage} />}
                </div>
                <div ref={ref4}>
                    {isVisible4 && <img src={require("./../assets/home/imageone.jpg")} className={scrollup && !isVisible3 ? styles.rightfixedimage2out : styles.rightfixedimage2} />}
                </div>
                <div className={styles.middledivwrap} id="aboutus">
                    <div ref={ref3}>
                        {isVisible3 && <div className={scrollup ? styles.iplugdescriptionleftout : styles.iplugdescriptionleft}>
                            Sovit International Limited was <br />
                            formed in the year 2015 with the<br />
                            focus to intelligent quality <br />
                            engineering solutions in response <br />
                            to the dynamic needs in the <br />
                            Engineering and technology <br />
                            industry. At Sovit we seek to<br />
                            provide innovative professional<br />
                            touch in all our services.<br /><br />
                            <div className={styles.discoverbutton} onClick={() => navigate("/aboutus")}>
                                DISCOVER MORE ABOUT US
                            </div>
                        </div>}
                    </div>
                </div>

                <div className={styles.containerwithshadowflex} >
                    <div className={styles.qualitydiv} >
                        <div className={styles.midicon}>
                            <MiscellaneousServices />
                        </div>
                        <div className={styles.qualityname}>SERVICES</div>
                        <div>
                            Offering a full contract<br />
                            construction service in<br />
                            industrial and commercial<br />
                            sectors<br /><br /><br />
                        </div>
                        <Button variant="outlined" endIcon={<ArrowForward />} onClick={() => navigate("/ourservices")}>
                            Read more
                        </Button>
                    </div>
                    <div className={styles.qualitydiv} >
                        <div className={styles.midicon}>
                            <HealthAndSafetyOutlined />
                        </div>
                        <div className={styles.qualityname}>HEALTH & SAFETY</div>
                        <div>
                            Keeping all those <br />
                            involved  and affected<br />
                            by our work safe is at <br />
                            core to Sovit's values<br /><br /><br /><br />
                        </div>
                        <Button variant="outlined" endIcon={<ArrowForward />} onClick={() => navigate("/safety-and-compliance")}>
                            Read more
                        </Button>
                    </div>
                    <div className={styles.qualitydiv} >
                        <div className={styles.midicon}>
                            <Diversity1Outlined />
                        </div>
                        <div className={styles.qualityname}>PEOPLE</div>
                        <div>
                            We are a tight team <br />
                            of effective and <br />
                            motivated  civil <br />
                            professionals.We all <br />
                            love to build, we are engineers<br /><br />
                        </div>
                        <Button variant="outlined" endIcon={<ArrowForward />} onClick={() => navigate("/aboutus")}>
                            Read more
                        </Button>
                    </div>
                    <div className={styles.qualitydiv} >
                        <div className={styles.midicon}>
                            <WorkspacePremiumOutlined />
                        </div>
                        <div className={styles.qualityname}>STANDARDS</div>
                        <div>
                            Delivering a quality <br />
                            product is important to <br />
                            us, and we attend to <br />
                            maintenance items long <br />
                            after we are obliged to.<br /><br />
                        </div>
                        <Button variant="outlined" endIcon={<ArrowForward />} onClick={() => navigate("/safety-and-compliance")}>
                            Read more
                        </Button>
                    </div>
                </div>
                <div className={styles.containerwithshadowflex} id="services">
                    <div className={styles.homeaboutyear}>
                        <div className={styles.wrapyears}>
                            <div className={styles.wrapyearnumber}>
                                <CountUp start={0} end={8} enableScrollSpy={true} delay={0} duration={5}>
                                    {({ countUpRef }) => (
                                        <span ref={countUpRef} />
                                    )}
                                </CountUp>
                            </div>
                            <div className={styles.wrapyearplus}>
                                <FaPlus />
                            </div>
                        </div>
                        <div className={styles.yearsname}>
                            YEARS<br />
                            EXPERIENCE
                        </div>
                    </div>
                    <div className={styles.homeabouttextdiv}>
                        <div className={styles.homeabouttext}>ABOUT US</div>
                        <div className={styles.homeabouttextcompanyname}>
                            SOVIT <br /> INTERNATIONAL
                        </div>
                        <div className={styles.homeabouttextcompanydesc}>
                            We are constructors not managers.<br />
                            Sovit international is dedicated to safely delivering<br />
                            industrial and commercial construction projects.<br /><br />
                            We've been constructing for 20 years and we are<br />
                            committed to improving ourselves and the wider <br />
                            industry we work within.<br /><br />
                        </div >
                        <Button variant="outlined" endIcon={<ArrowForward />} onClick={() => navigate("/aboutus")}>
                            Read more
                        </Button>
                    </div>
                    <div className={styles.homeabouttextdiv}>
                        <img src={require("./../assets/home/image12.jpg")} style={{ height: "100%", width: "100%" }} />
                    </div>
                </div>
                <br />  <br />  <br />
                <div className={styles.containerwithshadowwithoutflex} id="projects">
                    <div className={styles.homeabouttext}>SERVICES</div>
                    <div className={styles.homeabouttextcompanyname}>
                        WHAT WE DO
                    </div>
                    <div className={styles.containerwithshadowflex} >
                        <div className={styles.whatwedowrap}>
                            <img src={require("./../assets/home/water.png")} className={styles.whatwedoimage} />
                            <div className={styles.whatwedotext}>Water Solutions  </div>
                        </div>
                        <div className={styles.whatwedowrap}>
                            <img src={require("./../assets/home/energy.jpg")} className={styles.whatwedoimage} />
                            <div className={styles.whatwedotext}>Energy Solutions  </div>
                        </div>
                        <div className={styles.whatwedowrap}>
                            <img src={require("./../assets/home/telecom.jpg")} className={styles.whatwedoimage} />
                            <div className={styles.whatwedotext}>Telecommunication Industry  </div>
                        </div>
                        <div className={styles.whatwedowrap}>
                            <img src={require("./../assets/home/road.jpg")} className={styles.whatwedoimage} />
                            <div className={styles.whatwedotext}>Built environment solutions  </div>
                        </div>
                        <div className={styles.whatwedowrap}>
                            <img src={require("./../assets/home/consult.jpg")} className={styles.whatwedoimage} />
                            <div className={styles.whatwedotext}>Consultancy and Supervision   </div>
                        </div>
                    </div>
                </div>
                <br />  <br />
                <div className={styles.containerwithshadowwithoutflex}>
                    <text align="middle"> <div className={styles.homeabouttext}>PROJECTS</div></text>
                    <text align="middle">
                        <div className={styles.homeabouttextcompanyname}>
                            CURRENT WORK
                        </div></text>
                    <div className={styles.middivshadownoflex} >
                        <div style={{ display: "flex" }}>
                            <img src={require("./../assets/home/image1.jpg")} className={styles.currentworkimage} />
                            <img src={require("./../assets/home/image2.jpg")} className={styles.currentworkimage} />
                        </div>
                        <div style={{ display: "flex" }}>
                            <img src={require("./../assets/home/fibre.jpg")} className={styles.currentworkimage} />
                            <img src={require("./../assets/home/image4.jpg")} className={styles.currentworkimage} />
                        </div>
                    </div>
                </div>
                <div className={styles.counterdivwrap}>
                    <div className={styles.projectprevdiv}>
                        <div className={styles.homeabouttext}>PROJECTS</div>
                        <div className={styles.homeabouttextcompanyname}>
                            PREVIOUS <br />
                            WORK
                        </div>
                        <div className={styles.previousprojectdesc}>
                            From early Contractor involvement to current <br />
                            market advice on constructability, safety, <br />
                            budgets and programming - we have the < br />
                            skills, knowledge and experience
                        </div ><br />
                        <Button variant="outlined" endIcon={<ArrowForward />} onClick={() => navigate("/ourprojects")}>
                            VIEW ALL PROJECTS
                        </Button>
                    </div>
                    <div className={styles.projectprevdivimage}>
                        <img title="Road works" src={require("./../assets/home/test1.jpg")} className={styles.fleximage} />
                        <img title="Building construction" src={require("./../assets/home/test2.jpg")} className={styles.fleximage} />
                        <img title="Dam construction" src={require("./../assets/home/test3.jpg")} className={styles.fleximage} />
                        <img title="Dam construction" src={require("./../assets/home/test4.jpg")} className={styles.fleximage} />
                        <img title="Borehole drilling" src={require("./../assets/home/test5.jpg")} className={styles.fleximage} />
                    </div>
                </div>
                <div className={styles.counterdivwrap} id="reviews">
                    <div className={styles.counterimagewrap} >
                        <img src={require("./../assets/home/counter.png")} className={styles.counterimage} />
                    </div>
                    <div className={styles.wrapcounterwhole}>
                        <div className={styles.wrapcounter}>
                            <div className={styles.projectscounter}>
                                <div className={styles.projectscounterfirst} />
                                <div className={styles.projectscountersecond} />
                                <div className={styles.projectscountertext}>
                                    <div className={styles.projectscountertextnumber}>
                                        <CountUp start={0} end={88} delay={0} enableScrollSpy={true} duration={10}>
                                            {({ countUpRef }) => (
                                                <span ref={countUpRef} />
                                            )}
                                        </CountUp>
                                        +
                                    </div>
                                    <div className={styles.projectscountertextname}>
                                        PROJECTS
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectscounter}>
                                <div className={styles.employeescounterfirst} />
                                <div className={styles.projectscountersecond} />
                                <div className={styles.projectscountertext}>
                                    <div className={styles.projectscountertextnumber}>
                                        <CountUp start={0} end={58} delay={0} enableScrollSpy={true} duration={8}>
                                            {({ countUpRef }) => (
                                                <span ref={countUpRef} />
                                            )}
                                        </CountUp>    +
                                    </div>
                                    <div className={styles.projectscountertextname}>
                                        EMPLOYEES
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectscounter}>
                                <div className={styles.awardscounterfirst} />
                                <div className={styles.projectscountersecond} />
                                <div className={styles.projectscountertext}>
                                    <div className={styles.projectscountertextnumber}>
                                        <CountUp start={0} end={9} delay={0} enableScrollSpy={true} duration={5}>
                                            {({ countUpRef }) => (
                                                <span ref={countUpRef} />
                                            )}
                                        </CountUp> +
                                    </div>
                                    <div className={styles.projectscountertextname}>
                                        AWARDS
                                    </div>
                                </div>
                            </div>
                            <div className={styles.projectscounter}>
                                <div className={styles.clientscounterfirst} />
                                <div className={styles.projectscountersecond} />
                                <div className={styles.projectscountertext}>
                                    <div className={styles.projectscountertextnumber}>
                                        <CountUp start={0} end={50} delay={0} enableScrollSpy={true} duration={10}>
                                            {({ countUpRef }) => (
                                                <span ref={countUpRef} />
                                            )}
                                        </CountUp> +
                                    </div>
                                    <div className={styles.projectscountertextname}>
                                        CLIENTS
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.containerwithshadowwithoutflex} id="clients">
                    <text align="middle"> <div className={styles.homeabouttext}>TESTIMONIALS</div></text>
                    <text align="middle">
                        <div className={styles.homeabouttextcompanyname}>
                            CLIENT REVIEWS
                        </div></text>
                    <br /><br />
                    <div className={styles.myswiper}>
                        <Swiper
                            slidesPerView={isMobile ? 1 : isTablet ? 2 : isDesktop && 3}
                            spaceBetween={20}
                            slidesPerGroup={3}
                            loop={false}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,

                            }}
                            color={primarycolor}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            style={{
                                "--swiper-pagination-color": "#000",
                                "--swiper-navigation-color": "#000",
                                "--swiper-navigation-size": "20px"
                            }}
                        >
                            {Array.isArray(testimonialsarray) && testimonialsarray.map((val, key) => {

                                return (
                                    <SwiperSlide key={key} className={styles.testimonialdiv}>
                                        <div className={styles.testimonialchild}>
                                            <div className={styles.testimonialreview}>{val.review}</div>
                                            <text align="middle"><div className={styles.testimonialname}>{val.name}</div></text>
                                        </div>
                                    </SwiperSlide>
                                )
                            })

                            }
                        </Swiper>
                    </div>
                </div>
                <div className={styles.ourpartnersdiv} id="contactus">
                    <div className={styles.myswiper}>
                        <Swiper
                            slidesPerView={isMobile ? 3 : isTablet ? 4 : isDesktop && 5}
                            spaceBetween={20}
                            slidesPerGroup={3}
                            loop={false}
                            loopFillGroupWithBlank={true}
                            pagination={{
                                clickable: true,

                            }}
                            color={primarycolor}
                            navigation={false}
                            modules={[Pagination, Navigation]}
                            style={{
                                "--swiper-pagination-color": "#000",
                                "--swiper-navigation-color": "#000",
                                "--swiper-navigation-size": "20px"
                            }}
                        >
                            {Array.isArray(partnersarray) && partnersarray.map((val, key) => {
                                return (
                                    <SwiperSlide key={key} >
                                        <div className={styles.partnerdivwrap}>
                                            <img title={val.name} src={val.src} style={{ backgroundColor: val.background && val.background, padding: val.background && 10 }} className={styles.partnerimage} />
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                            }
                        </Swiper>
                    </div>
                </div>
                <div className={styles.contactusdiv}>
                    <img src={require("./../assets/icons/const3.png")} height={200} />
                    <div className={styles.bottomabout}>
                        <div style={{ display: "flex" }}>
                            <img src={require("./../assets/common/ico.png")} height={40} />
                            <div>
                                <div className={styles.homeabouttext}>SOVIT</div>
                                <div className={styles.homeabouttextcompanyname}>
                                    INTERNATIONAL
                                </div><br />
                                <div className={styles.previousprojectdesc}>
                                    Having successfully delivered more
                                    than 1000 construction contracts for
                                    fewer than 200 clients we're proud that
                                    Sovit international is often the first
                                    choice construction partner.
                                </div ><br />
                            </div>
                        </div>
                    </div>
                    <div className={styles.bottomabout}>
                        <div className={styles.officelocation}>
                            Nairobi
                        </div>
                        <br />
                        <div>
                            <FaMapMarkerAlt /> Kindaruma Apartments, off Kindaruma road.<br /> Nairobi<br />
                            <br />
                            P.O BOX 1285-00502  NAIROBI<br />
                        </div>
                        <div style={{ display: "flex", marginTop: 5 }}>
                            <FaEnvelope style={{ marginTop: 3, marginRight: 5 }} /> info@sovitinternational.co.ke
                        </div>
                        <div style={{ display: "flex", marginTop: 5 }}>
                            <FaPhoneAlt style={{ marginTop: 3, marginRight: 5 }} /> +254 717 254 347
                        </div>
                    </div>
                    <div className={styles.bottomabout}>
                        <div className={styles.officelocation}>
                            Nakuru
                        </div>
                        <br />
                        <div>
                            <FaMapMarkerAlt /> Kindaruma Apartments, off Kindaruma road.<br /> Nairobi<br />
                            <br />
                            P.O BOX 1285-00502  NAIROBI<br />
                        </div>
                        <div style={{ display: "flex", marginTop: 5 }}>
                            <FaEnvelope style={{ marginTop: 3, marginRight: 5 }} /> support@sovitinternational.co.ke
                        </div>
                        <div style={{ display: "flex", marginTop: 5 }}>
                            <FaPhoneAlt style={{ marginTop: 3, marginRight: 5 }} /> +254 717 254 347
                        </div>
                    </div>
                </div>
                <Sitefooter ref={ref2} bottomref={bottomref} scrollup={scrollup} />

            </div>
        </div>
    )
}

export default Homepage;