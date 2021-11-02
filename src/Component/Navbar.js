import React from "react";
 import styles from "./Navbar.module.css";
import photo1 from "../images/photo1.png";


const Navbar = () =>{
    return (
    <header className = {styles.header}>
        <div className = {styles.listContainer}>
             <ul className= {styles.list}>
                <li>home page</li>
             <li>about us</li>
             <li>home page</li>
        </ul>
</div>
<div className={styles.logo}>
    <img  className = {styles.logo} src={photo1} alt = " js"/>
 </div>
</header>

    );
   
}
export default Navbar;
