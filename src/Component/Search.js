import React, { Component } from 'react'
import styles from "./Search.module.css";

export default class Search extends Component {
    constructor(){
        super();
        this.state = {
            Text:""
        }
    }
    changeHandler=event =>{
        this.setState({
            Text:event.target.value,
        })
    }
    render() {
        return (
            <div className={styles.container}>
                <p>search what you wnat</p>
                <div>
                <input type="text" value={this.state.Text}   onChange={this.changeHandler} placeholder="Search " />
              <br/>
                <span> {this.state.Text} </span>

                

                </div>
            </div>
        )
    }
}
