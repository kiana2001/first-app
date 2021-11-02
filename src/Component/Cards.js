import React, { Component } from 'react'
import Card from "./Card";
import photo4 from "../images/photo4.png";
import photo1 from "../images/photo1.png";
import photo2 from "../images/photo2.png";
import styles from "./Cards.module.css"
 class Cards extends Component {
     constructor(){
         super();
         this.state={
                 phoneData :[
                     {id :1 , image: photo1,name :"iphone1", cost:"500 $" },
                     {id:2, image:photo2, name :"iphone2", cost:"600 $"},
                     { id :3,image: photo4, name :"iphone4", cost:"700"},
                     { id :4, image:photo4, name :"iphone4" ,cost:"500"},
                 ]
             }
         }
      
    render() {
        
        return (
            <div className={styles.container}>
           
        {this.state.phoneData.map(phone =><Card  key={phone.id} image={phone.image}  name={phone.name} cost={phone.cost}/>)}
            </div>
        )
    }
}
export default Cards;

