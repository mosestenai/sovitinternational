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
                                <div className="safetychildtitle">Safe & Secure</div>
                                <div>

                                </div>
                            </div>
                        </div>
                        <div className="safetyimageright">
                            <img src={require("./../assets/home/imageone.jpg")} />
                        </div>
                    </div>


                </div>
                <Sitefooter ref={ref2} bottomref={bottomref} scrollup={scrollup} />
            </div>
        </div>
    )
}

export default Safety;