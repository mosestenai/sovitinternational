import React, { useState, useRef, useEffect } from "react";
import { useScrollDirection } from 'react-use-scroll-direction'
import styles from './home.module.css';
import "./../Utils/styles.css";
import Header from "./header";
import Zoomicon from "../Components/zoomicon";
import Sitefooter from "../Components/footer";
import { Check } from "@mui/icons-material";
import { primarycolor } from "../Utils/colors";
import { FaCheck } from "react-icons/fa";


const Ourservices = () => {

    const ref2 = useRef()
    const bottomref = useRef()
    const [scrollup, setscrollup] = useState(false);;
    const [loading, setloading] = useState(true);

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
                <div className="ourservicestopdiv">
                    <Header scrolldown={isScrollingDown} scrollPosition={scrollPosition} />
                    <div className="aboutusheightdiv">
                        <div className="aboutustext">
                            Our Services
                        </div>
                        <div className="aboutusdesc">
                            At Sovit we boast of having the right skillset for your all engineering needs.
                        </div>
                    </div>
                </div>
                <div className="abouscontentdiv">
                    <div className="abouscontentdivleft">
                        <div className="whoweare">What we do</div>
                    </div>
                    <div className="abouscontentdivright">
                        From single asset refurbishment programmes and upgrades,
                        to coordinating complex multi-site projects, we provide
                        the consistency, quality and compliant assurance you need.<br />
                        Our expert engineers, technical designers, project managers, surveyors,
                        technicians, consultants and space planners apply their knowledge
                        and expertise to every industry sector in Kenya<br /><br />
                        Our able team of Architects, Civil engineers, and MEP engineers are ready to offer modern solutions to your needs.<br />
                        •	Feasibility studies<br />
                        •	Engineering design and Supervision<br />
                        •	Project Approvals<br />
                        •	Project Appraisal<br />

                    </div>

                </div>
                <div className={styles.containerwithshadowwithoutflex} id="projects">
                    <div className={styles.homeabouttext}>SERVICES</div>
                    <div className={styles.homeabouttextcompanyname}>
                        WHAT WE DO
                    </div>
                    <div className="whatallwedowrap" >
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/water.png")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Water Solutions</div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Hydrogeological surveys</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Borehole drilling and Equipping</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Water distribution networks piping and Plumbing Solutions</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">WTP and Sanitation designs</div> </div>
                        </div>
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/energy.jpg")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Energy Solutions  </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Solar Installation solutions</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">AC installations</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Structured cabling</div> </div>
                        </div>
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/telecom.jpg")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Telecommunication Industry  </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Construction of communication towers and Masts</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Internet connectivity solutions</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">I.e. Laying of fibre cables</div> </div>
                        </div>
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/road.jpg")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Built environment solutions  </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Road works Grading and culverts</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Construction and Supervision of 5 bedroom House in Nakuru</div> </div>
                        </div>
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/consult.jpg")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Consultancy and Supervision   </div>
                        </div>
                    </div>
                </div>
                <Sitefooter ref={ref2} bottomref={bottomref} scrollup={scrollup} />
            </div>
        </div>
    )
}

export default Ourservices;