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
            <div className={styles.headerimageparent}>
                <img style={{
                    height: 50, marginTop: 2
                }} src={require('./../assets/common/test2.png')} />
            </div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/")}>{route === "/" ? <u>HOME</u> : "HOME"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/how-it-works")}>{route === "/how-it-works" ? <u>ABOUT</u> : "ABOUT"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/rates")}>{route === "/rates" ? <u>WORK</u> : "WORK"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/#")}> {route === "/" ? <u>CLIENTS</u> : "CLIENTS"}</div>
            <div className={styles.hoverunderlineanimationup} onClick={() => navigate("/stories")}> {route === "/stories" ? <u>CAREERS</u> : "CAREERS"}</div>
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
                    <div onClick={() => navigate("/how-it-works")}>HOW IT WORKS</div>
                    <div onClick={() => navigate("/rates")}>RATES</div>
                    <div onClick={() => navigate("/#")}>PARTNERS</div>
                    <div onClick={() => navigate("/stories")}>STORIES</div>
                    <div onClick={() => navigate("/become-a-iplug-partner")}>BECOME A IPLUG PARTNER</div>
                    <button>GET THE APP</button>
                </div>
            </div>
        </div>
    )
}

export default Header;