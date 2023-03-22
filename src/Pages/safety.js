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


const Safety = () => {

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
                            Safety & Compliance
                        </div>
                        <div className="aboutusdesc">
                            better safety, standards and compliance
                        </div>
                    </div>
                </div>
                <div className="safetymiddiv">
                    <div className="standardsdiv">
                        We consistently achieve the highest standards for Health, Safety
                        and Compliance in the Kenyan Facilities Management market. Our safety
                        culture is leading in the industry, all our activities are planned,
                        monitored and completed safely.
                    </div>
                    <div className="betterworldtitle">A Better World</div>
                    <div>
                        The most important thing we do every day is make sure all our
                        people are safe and healthy- no matter where they are. That’s
                        why we work tirelessly to protect everyone we work and partner with,
                        as part of our mission to create A Better World for everyone.
                    </div>
                    <div className="safetywrap">
                        <div className="safetyleftdiv">
                            <img src={require("./../assets/icons/safe2.png")} />
                            <div className="safetyworddiv">
                                <div className="safetychildtitle">Health & Safety</div>
                                <div className="safetydesc">
                                    Construction sites are dynamic activities where workers
                                    engage in many activities that may expose them to a
                                    variety of safety hazards, such as falling objects,
                                    working from rooftops or scaffolding, exposure to heavy
                                    construction equipment, or the use of temporary electrical
                                    circuits while operating electrical equipment and machinery
                                    in damp locations.At sovit we ensure our workers have protective
                                    gears, trained and well informed to avoid any accidents at
                                    any construction or project that we engage in.
                                </div>
                            </div>
                        </div>
                        <div className="safetyimageright">
                            <img src={require("./../assets/icons/gear.jpeg")} />
                        </div>
                    </div>
                    <div className="safetywrap">
                        <div className="safetyimageright">
                            <img src={require("./../assets/home/imageone.jpg")} />
                        </div>
                        <div className="safetyleftdiv">
                            <img src={require("./../assets/icons/safe3.png")} />
                            <div className="safetyworddiv">
                                <div className="safetychildtitle">Standards</div>
                                <div className="safetydesc">
                                    Delivering high quality and safe structures is
                                    embodied in one of our core values. We continuously
                                    evolve how we partner with our clients, with safety
                                    always at the heart of the success of our people and business.
                                    At sovit the work that we have accomplished so far
                                    is highy rated to the best standards. We are registered
                                    with National Construction Authority and also permitted
                                    to operate in most of the counties in kenya.
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
                <Sitefooter ref={ref2} bottomref={bottomref} scrollup={scrollup} />
            </div>
        </div>
    )
}

export default Safety;