'use client';
import styles from './ScrollDownIcon.module.css';
import swipeStyles from './SwipeLeftIcon.module.css';
import {useEffect, useState} from "react";

export const ScrollDownIcon = () => {
    const [isShow, setIsShow] = useState<boolean>(false);


    useEffect(() => {
        setTimeout(()=>{
            setIsShow(true);
        }, 500);
    }, []);

    if(!isShow) return null;

    if(isMobileUserAgent()) return <SwipeLeftIcon />


    return(
        <div className={styles.wrapper}>
            <div className={styles.title}>scroll down</div>
            <div className={styles.arrow} ></div>
            <div className={styles.arrow} style={{animationDelay:'1s'}}></div>
            <div className={styles.arrow} style={{animationDelay:'2s'}}></div>
        </div>
    )
}


const SwipeLeftIcon = () => {
    return(
        <div className={swipeStyles.wrapper}>
            <div className={swipeStyles.hand}></div>
            <div className={swipeStyles.line}></div>
        </div>
    )
}



function isMobileUserAgent() {
    const userAgent = navigator.userAgent;
    // Regular expressions to match common mobile user agent patterns.
    const mobileUserAgentPatterns = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    return mobileUserAgentPatterns.test(userAgent);
}
