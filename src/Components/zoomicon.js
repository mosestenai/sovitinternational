import React from 'react';
import { Backdrop } from '@mui/material';
import styles from './../Pages/home.module.css';

const Zoomicon = () => {

    return (
        <Backdrop
            sx={{ color: 'white', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <div className={styles.backdrop}>
                <img src={require('./../assets/common/black.jpg')} />
            </div>
        </Backdrop>
    )
}

export default Zoomicon;