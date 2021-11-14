import React from "react";
 import styles from "./Navbar.module.css";
import photo1 from "../images/photo1.png";
import {Link} from "react-router-dom";

const Navbar = () =>{
    return (
    <header className = {styles.header}>
        <div className = {styles.listContainer}>
             <ul className= {styles.list}>
                <li><Link to ="/">home page</Link></li>
             <li><Link to = "/products">Products</Link></li>
             <li><Link to = "/aboutus">about us</Link> </li>
        </ul>
</div>
<div className={styles.logo}>
    <img  className = {styles.logo} src={photo1} alt = " js"/>
 </div>
</header>

    );
   
}
export default Navbar;
