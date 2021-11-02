import React from 'react';
import styles from "./Banner.module.css";
import new22 from "../images/new22.jpg";

const Banner = () => {
    return (
        <div className={styles.container}>
            <img src= {new22} alt="apple product"/>
            <div className={styles.textContainer}>
                <h1>Botostart</h1>
                <p>
                    we are learning <span>React.js</span>
                </p>
            </div>
        </div>
    );
};

export default Banner;