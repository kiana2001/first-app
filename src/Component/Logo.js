import React from 'react';
import styles from "./Logo.module.css";
import apple from "../logo/apple.png";
import samsung  from "../logo/samsung.png";
import Xiaomi from "../logo/Xiaomi.png";

const Logo = () => {
    return (
        <div className={styles.container}>
            <h3>who support us </h3>
            <img className={styles.image} src={apple} alt="logo apple"/>
            <img className={styles.image} src={samsung} alt="logo "/>
            <img   src={Xiaomi} alt="logo"/>
        </div>
    );
};

export default Logo;