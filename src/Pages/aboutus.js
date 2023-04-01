import React, { useState, useRef, useEffect } from "react";
import { Link, NavigationType, useLocation, useNavigate } from "react-router-dom";
import CountUp from 'react-countup';
import { useScrollDirection } from 'react-use-scroll-direction'
import styles from './home.module.css';
import "./../Utils/styles.css";
import Header from "./header";
import { FaAngleDown, FaUsers } from 'react-icons/fa';
import { Slide, Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import useOnScreen from "../functions/detectonview";
import { Backdrop } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import Zoomicon from "../Components/zoomicon";
import { isMobile, isTablet, isDesktop } from 'react-device-detect';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { awards, employees, partnersarray, testimonialsarray } from "../Utils/arrays";
import { primarycolor } from "../Utils/colors";
import Sitefooter from "../Components/footer";


const Aboutus = () => {

    const ref2 = useRef()
    const bottomref = useRef()
    const [scrollup, setscrollup] = useState(false);;
    const [loading, setloading] = useState(true);
    const navigate = useNavigate()

    const { isScrollingDown } = useScrollDirection()

    const [scrollPosition, setScrollPosition] = useState(0);


    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };


    setTimeout(() => {
        setloading(false)
    }, 1000);



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
            <Header scrolldown={isScrollingDown} scrollPosition={scrollPosition} />
            <div className={styles.homebody} id="home">
                <div className="aboutustopdiv">
                    <div className="aboutusheightdiv">
                        <div className="aboutustext">
                            ABOUT US<br />
                        </div>
                        <div className="aboutusdesc"> Bringing together the best experts, processes and technologies</div>
                    </div>
                </div>
                <div className="abouscontentdiv">
                    <div className="abouscontentdivleft">
                        <div className="whoweare">Who we are</div>
                        <div className="aboutuslogoleft">
                            <img src={require("./../assets/common/black.jpg")} />
                        </div>
                        <div className="aboutuslinkdiv" onClick={() => navigate("/")} >
                            Home
                        </div>
                        <div className="aboutuslinkdiv" onClick={() => navigate("/safety-and-compliance")}>
                            Safety and Compliance
                        </div>
                        <div className="aboutuslinkdiv" onClick={() => navigatetopath("awards")}>
                            Awards
                        </div>
                        <div className="aboutuslinkdiv" onClick={() => navigate("/ourclients")}>
                            Clients
                        </div>
                        <div className="aboutuslinkdiv" onClick={() => navigatetopath("team")}>
                            Our team
                        </div>
                    </div>
                    <div className="abouscontentdivright">
                        We provide a range of customer-centric solutions through
                        workplace transformation, integrated facilities management,
                        project solutions, data-led asset management services and
                        carbon reduction.<br /><br />
                        We have a track record of success in some of the most
                        complex and regulated workplaces in the Kenya – delivering
                        services to industry sectors including life sciences,
                        schools, roads, hi-tech manufacturing and central
                        government.<br /><br />

                        For both soft and hard services, we bring together the
                        best experts, processes and technologies, to create
                        long-lasting high-value solutions that not only enables
                        our customers to work better, but also offers a better
                        place for their people to work.<br /><br />

                        We help customers transform their workplace by supporting
                        the delivery of: effective safety and assurance
                        solutions, integrating social value into your
                        organisation and helping customers to embed authentic
                        Equality, Diversity and Inclusion solutions whilst
                        also supporting in developing goals that will genuinely
                        contribute towards individual wellbeing and a carbon
                        neutral world.<br /><br />

                        Our deep understanding of the dynamic relationship that
                        exists between people, organisational culture and workplace,
                        has never been more relevant than now. Collaboration,
                        in a world that faces so many major challenges that
                        impact our people and planet, is our way to ensuring
                        we secure a sustainable future for us all.<br /><br />

                        Our purpose at Sovit International is, quite simply, to create a better world at work for everyone.
                        <br /><br />

                        <div className="purposetitle" id="team">Purpose</div>
                        <br />
                        Our purpose at Sovit  is to create a better world at<br />
                        work and we aim to do this by bringing the best possible<br />
                        resources and people together.<br /><br />

                        A Better World at Work has two meanings for us; firstly,<br />
                        to promote a better place for all colleagues across our<br />
                        business, as well as those of our partners and our customers;<br />
                        and, second, that we seek to make significant impact on driving<br />
                        forward the social and environmental agendas to preserve the<br />
                        planet and promote a fair, inclusive and respectful society.
                    </div>

                </div>
                <div className="teammembersheader" id="awards" >Our Team members</div>
                <div className="teammemberswrap">
                    {employees.map((val, key) => {
                        return (
                            <div className="teammemberchild" key={key}>
                                <div className="teamphoto">
                                    <img src={require("./../assets/icons/user.png")} />
                                </div>
                                <div className="teamname">{val.name}</div>
                                <div className="teamtitle">{val.position}</div>
                            </div>
                        )
                    })}

                </div>
                <div className="teammembersheader" id="awards" >Our Accomplishments</div>
                <div className="awardswrap">
                    {awards.map((val, key) => {
                        return (
                            <div className="awardchilddiv" key={key}>
                                <img src={val.src} />
                                <div>{val.name} ~ {val.event} {val.location}</div>
                            </div>
                        )
                    })}
                </div>
                <Sitefooter ref={ref2} bottomref={bottomref} scrollup={scrollup} />
            </div>
        </div>
    )
}

export default Aboutus;