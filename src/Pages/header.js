import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./home.module.css";
import { FaBars, FaCross, FaTimes } from 'react-icons/fa';


const Header = ({ scrolldown, scrollPosition }) => {
    const navigate = useNavigate()
    const [shownavbar, setshownavbar] = useState(false);
    const location = useLocation();
    const route = location.pathname;


    return (
        <div className={scrollPosition >= 5 ? styles.headerdivscrolldown : styles.headerdiv}>
            <div className={styles.headerimageparent} onClick={() => navigate("/")}>
                <img style={{
                    height: 50,
                }} src={require('./../assets/common/wlogo.png')} />
            </div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/")}>{route === "/" ? <u>HOME</u> : "HOME"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/aboutus")}>{route === "/aboutus" ? <u>ABOUT</u> : "ABOUT"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/ourservices")}>{route === "/ourservices" ? <u>SERVICES</u> : "SERVICES"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/ourprojects")}> {route === "/ourprojects" ? <u>PROJECTS</u> : "PROJECTS"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/ourclients")}> {route === "/ourclients" ? <u>CLIENTS</u> : "CLIENTS"}</div>
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
                    <div onClick={() => navigate("/")}>HOME</div>
                    <div onClick={() => navigate("/aboutus")}>ABOUT</div>
                    <div onClick={() => navigate("/ourservices")}>SERVICES</div>
                    <div onClick={() => navigate("/ourprojects")}>PROJECTS</div>
                    <div onClick={() => navigate("/ourclients")}>CLIENTS</div>
                    <button>CALL US</button>
                </div>
            </div>
        </div>
    )
}

export default Header;