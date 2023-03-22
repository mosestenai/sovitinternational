import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useScrollDirection } from 'react-use-scroll-direction'
import styles from './home.module.css';
import "./../Utils/styles.css";
import Header from "./header";
import { FaAngleDown, FaUsers } from 'react-icons/fa';
import Zoomicon from "../Components/zoomicon";
import { awards, employees } from "../Utils/arrays";
import Sitefooter from "../Components/footer";
import { Button, TextareaAutosize, TextField } from "@mui/material";
import { Textarea } from "@mui/joy";
import { Send } from "@mui/icons-material";
import Officemap from "../Components/map";


const Contactus = () => {

    const ref2 = useRef()
    const bottomref = useRef()
    const [scrollup, setscrollup] = useState(false);;
    const [loading, setloading] = useState(true);
    const navigate = useNavigate()

    const { isScrollingDown } = useScrollDirection()
    const [scrollPosition, setScrollPosition] = useState(0);

    //contact form
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [subject, setsubject] = useState('');
    const [message, setmessage] = useState('');


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
                <div className="aboutustopdiv">
                    <Header scrolldown={isScrollingDown} scrollPosition={scrollPosition} />
                    <div className="aboutusheightdiv">
                        <div className="aboutustext">
                            Contact us<br />
                        </div>
                        <div className="aboutusdesc">We will catch you as early as we receive the message</div>
                    </div>
                </div>
                <div className="abouscontentdiv">
                    <div className="abouscontentdivleft">
                        <div className="whoweare">Request a Quote</div>

                    </div>
                    <div className="abouscontentdivright">
                        <div className="contactusform">
                            <div className="basictextinputwrap">
                                <TextField value={name} onChange={(e) => setname(e.target.value)} className="basictextinput" id="standard-basic" label="Your name" variant="standard" />
                                <TextField value={email} onChange={(e) => setemail(e.target.value)} className="basictextinput" autoComplete="email" id="standard-basic" label="Your email" variant="standard" />
                            </div>
                            <br /><br />
                            <div className="basictextinputwrap">
                                <TextField value={subject} onChange={(e) => setsubject(e.target.value)} className="messageheading" id="standard-basic" label="Subject" variant="standard" />
                            </div>
                            <div className="messagecontentwrap">
                                <TextField value={message} onChange={(e) => setmessage(e.target.value)} multiline inputProps={{ maxLength: 300 }} className="messagecontent" id="standard-basic" label="Your message (max 300 characters)" variant="standard" />
                                <br /><br />
                                <Button disabled={!name || !email || !subject || !message ? true : false} variant="contained" endIcon={<Send />} >
                                    SEND
                                </Button>
                            </div>


                        </div>

                    </div>

                </div>
                <div className="teammembersheader" id="awards" >Where we are located</div>
                <br /><br />
                <Officemap />

                <Sitefooter ref={ref2} bottomref={bottomref} scrollup={scrollup} />
            </div>
        </div>
    )
}

export default Contactus;