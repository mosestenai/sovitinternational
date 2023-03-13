import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./home.module.css";
import { FaBars, FaCross, FaTimes } from 'react-icons/fa';


const Header = ({ scrolldown, scrollPosition }) => {
    const navigate = useNavigate()
    const [shownavbar, setshownavbar] = useState(false);
    const location = useLocation();
    const route = location.pathname;

    const [currentpath, setcurrentpath] = useState('home');

    const gotocurrent = (path) => {
        setcurrentpath(path)
        const object = { path: path }
        sessionStorage?.setItem("locationmessage", JSON.stringify(object));
    }


    return (
        <div className={scrollPosition >= 5 ? styles.headerdivscrolldown : styles.headerdiv}>
            <div className={styles.headerimageparent}>
                <img style={{
                    height: 50,
                }} src={require('./../assets/common/wlogo.png')} />
            </div>
            <div className={styles.hoverunderlineanimationup} onClick={() => gotocurrent("home")}>{currentpath === "home" ? <u>HOME</u> : "HOME"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => gotocurrent("aboutus")}>{currentpath === "aboutus" ? <u>ABOUT</u> : "ABOUT"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => gotocurrent("services")}>{currentpath === "services" ? <u>SERVICES</u> : "SERVICES"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => gotocurrent("projects")}> {currentpath === "projects" ? <u>PROJECTS</u> : "PROJECTS"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => gotocurrent("clients")}> {currentpath === "clients" ? <u>CLIENTS</u> : "CLIENTS"}</div>
            <div className={styles.languagediv}>ENG</div>
            <div className={scrollPosition >= 5 ? styles.getappbutton : styles.getappbuttondown}>CALL US</div>
            <div className={shownavbar ? styles.navbarmovein : styles.navbar}>
                <div onClick={() => setshownavbar(!shownavbar)} style={{
                    backgroundColor: shownavbar ? "#430f0f" : "black",
                    height: 40,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: 'center',
                    width: "15%",
                    cursor: "pointer"
                }}>
                    {shownavbar ? <FaTimes color="silver" size={30} /> : <FaBars color={"silver"} size={30} />}
                </div>
                <div className={styles.navbarcontentmiddle} onClick={() => setshownavbar(!shownavbar)} />
                <div className={styles.navbarcontent}>
                    <div onClick={() => gotocurrent("home")}>HOME</div>
                    <div onClick={() => gotocurrent("aboutus")}>ABOUT</div>
                    <div onClick={() => gotocurrent("services")}>SERVICES</div>
                    <div onClick={() => gotocurrent("projects")}>PROJECTS</div>
                    <div onClick={() => gotocurrent("clients")}>CLIENTS</div>
                    <button>CALL US</button>
                </div>
            </div>
        </div>
    )
}

export default Header;