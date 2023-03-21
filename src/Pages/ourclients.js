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
import { partnersarray } from "../Utils/arrays";


const Ourclients = () => {

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
                            Our Clients
                        </div>
                        <div className="aboutusdesc">
                            See how everyone across the country have partnered with sovit to improve visibility, collaboration, and management.
                        </div>
                    </div>
                </div>
                <div className="abouscontentdiv">
                    <div className="abouscontentdivleft">
                        <div className="whoweare">Who we serve</div>
                    </div>
                    <div className="abouscontentdivright">
                        With decades of experience in delivering facilities management
                        at the highest level, and an enviable track record collaborating
                        with customers, take a look at our clients that we’ve helped to create high
                        performing, productive, and sustainable workplaces that they
                        can be proud of.<br /><br />
                        Leaders are forced to make reactive decisions, and it’s impossible to
                        strategically plan and accurately forecast. Sovit breaksdown tasks,
                        connecting entire project to enable
                        collaborative planning, optimize workload, and provide actionable insights
                    </div>

                </div>
                <div className={styles.containerwithshadowwithoutflex} id="projects">
                    <div className={styles.homeabouttext}>CLIENTS</div>
                    <div className={styles.homeabouttextcompanyname}>
                        WHO WE SERVE
                    </div>
                    <div className="whatallwedowrap" >
                        {Array.isArray(partnersarray) && partnersarray.map((val, key) => {
                            return (
                                <div className="whoweservewrap" key={key}>
                                    <img src={val.src} className="partnerimage" style={{ backgroundColor: val.background && val.background, padding: val.background && 10 }} />
                                    <div className={styles.whatwedotext}>{val.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <Sitefooter ref={ref2} bottomref={bottomref} scrollup={scrollup} />
            </div>
        </div>
    )
}

export default Ourclients;