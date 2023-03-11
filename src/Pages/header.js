import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styles from "./home.module.css";
import { FaBars, FaCross, FaTimes } from 'react-icons/fa';


const Header = ({ scrolldown, scrollPosition }) => {
    const navigate = useNavigate()
    const [shownavbar, setshownavbar] = useState(false);
    const location = useLocation();
    const route = location.pathname;
    console.log(route)

    return (
        <div className={scrollPosition >= 5 ? styles.headerdivscrolldown : styles.headerdiv}>
            <div className={styles.headerimageparent}>
                iPLU
                <img style={{
                    height: 28,marginTop:2
                }} src={require("./../assets/trans.png")} />
            </div>
            <div className={styles.hoverunderlineanimation} onClick={() => navigate("/")}>{route === "/" ? <u>HOME</u> : "HOME"}</div>
            <div className={styles.hoverunderlineanimation} onClick={() => navigate("/how-it-works")}>{route === "/how-it-works" ? <u>HOW IT WORKS</u> : "HOW IT WORKS"}</div>
            <div className={styles.hoverunderlineanimation} onClick={() => navigate("/rates")}>{route === "/rates" ? <u>RATES</u> : "RATES"}</div>
            <div className={styles.hoverunderlineanimation} onClick={() => navigate("/#")}> {route === "/" ? <u>PARTNERS</u> : "PARTNERS"}</div>
            <div className={styles.hoverunderlineanimation} onClick={() => navigate("/stories")}> {route === "/stories" ? <u>STORIES</u> : "STORIES"}</div>
            <div className={styles.hoverunderlineanimation} onClick={() => navigate("/become-a-iplug-partner")}>{route === "/become-a-iplug-partner" ? <u>BECOME A IPLUG PARTNER</u> : "BECOME A IPLUG PARTNER"} </div>
            <div className={styles.languagediv}>ENG</div>
            <div className={scrollPosition >= 5 ? styles.getappbutton : styles.getappbuttondown}>GET THE APP</div>
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