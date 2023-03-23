import Lottie from "lottie-react";
import { Backdrop, CircularProgress } from "@mui/material"
import groovyWalkAnimation from "./../assets/lotties/tick.json";


const Successspinner = ({ message }) => {


    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <div>
                <h3 align="middle">{message}</h3>
                <Lottie animationData={groovyWalkAnimation} loop={false} />

            </div>
        </Backdrop>
    )
}

export default Successspinner