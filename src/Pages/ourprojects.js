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


const Ourprojects = () => {

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
                            PROJECTS
                        </div>
                        <div className="aboutusdesc">
                            We meet the challenges of the most complex projects with our unrivalled combination of expertise
                        </div>
                    </div>
                </div>
                <div className="abouscontentdiv">
                    <div className="abouscontentdivleft">
                        <div className="whoweare">What we've done</div>
                    </div>
                    <div className="abouscontentdivright">
                        Every day we help our customers to plan, design, implement and
                        maintain their mission-critical buildings, systems and programmes.
                        From refurbishing and upgrading buildings, to modernising mechanical
                        and electrical systems and investing in new energy efficient assets:
                        our integrated project teams help to enhance business performance by
                        re-imagining working environments.<br /><br />
                        Together, we are playing our part in creating a better world at work
                        which is more sustainable, efficient and productive.
                    </div>

                </div>
                <div className={styles.containerwithshadowwithoutflex} id="projects">
                    <div className={styles.homeabouttext}>PROJECTS</div>
                    <div className={styles.homeabouttextcompanyname}>
                        WHAT WE'VE DONE
                    </div>
                    <div className="whatallwedowrap" >
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/image2.jpg")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Building construction ~ Nairobi</div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext"> Site clearing</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Foundation</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Bricklaying</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Roofing</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Electrical and plumbing</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Exterior and interior finishing</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Painting</div> </div>
                        </div>
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/image4.jpg")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Personal house contruction ~ Nakuru  </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Foundation</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Bricklaying</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Roofing</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Exterior and interior finishing</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Painting</div> </div>
                        </div>
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/image5.jpg")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Ultra-modern facility ~ Nairobi </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Foundation</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Bricklaying</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Roofing</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Exterior and interior finishing</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Painting</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Solar Installation solutions</div> </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">AC installations</div> </div>
                        </div>
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/road.jpg")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Meru-Maua road construction  </div>
                            <div className="whatwedosubtextwrap"><Check color={primarycolor} style={{ fontSize: 18 }} /> <div className="whatwedosubtext">Road works Grading and culverts</div> </div>
                        </div>
                        <div className="whatwedowrap">
                            <img src={require("./../assets/home/test4.jpg")} className="whatwedoimage" />
                            <div className={styles.whatwedotext}>Kelechi Dam construction</div>
                        </div>
                    </div>
                </div>
                <Sitefooter ref={ref2} bottomref={bottomref} scrollup={scrollup} />
            </div>
        </div>
    )
}

export default Ourprojects;