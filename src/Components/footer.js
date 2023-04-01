import React from "react"
import styles from '../Pages/home.module.css';
import { FaFacebook, FaInstagramSquare, FaLinkedinIn, FaWhatsapp, FaYoutubeSquare } from "react-icons/fa"


const Sitefooter = ({ scrollup, ref2, bottomref }) => {

    return (
        <div className={styles.almostbottomdiv} ref={ref2}>
            <div className={scrollup ? styles.bottomdivfooterout : styles.bottomdivfooter} ref={bottomref}>
                <div className={styles.wrapcontents} >
                    <div className={styles.footercontentone}>
                        <div className={styles.footercontentonetext}>Social </div>
                        <div className={styles.sociallinks}>
                            <div className={styles.sociallinkdiv}>
                                <FaFacebook />
                            </div>
                            <div className={styles.sociallinkdiv}>
                                <FaInstagramSquare />
                            </div>
                            <div className={styles.sociallinkdiv}>
                                <FaLinkedinIn />
                            </div>
                            <div className={styles.sociallinkdiv}>
                                <FaYoutubeSquare />
                            </div>
                            <div className={styles.sociallinkdiv}>
                                <FaWhatsapp />
                            </div>
                        </div>
                    </div>
                    <div className={styles.footercontentone}>
                        <img src={require("./../assets/common/wlogo.png")} height={60} />
                    </div>
                    <div className={styles.footercontentlast}>
                        <div className={styles.footercontentonetext}>Contacts </div>
                        <div className={styles.footercontentonemail}>mail: info@sovitinternational.co.ke</div>
                    </div>
                </div>
                <br /> <br />
                <hr color="white" />
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className={styles.footerreserved}>© 2023 Sovit International:. All Rights Reserved.</div>
                </div>
                <div style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <div className={styles.footerreservedbuttons}>Privacy Policy</div>
                    <div className={styles.footerreservedbuttons}>Cookie Policy</div>
                </div>
            </div>
        </div>
    )
}

export default Sitefooter