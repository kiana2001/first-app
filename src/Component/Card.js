import React, { Component } from "react";
import styles from "./Card.module.css";
import up from "../arrows/up.png";
import down from "../arrows/down.png";
class Card extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  downHandler = () => {
    if (this.state.counter >= 1) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
      }));
    }
  };
  upHandler = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };

  render() {
    const { image, name, cost } = this.props;
    const { counter } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="whatever  " />
        <h3>
          {name}
          <p>
            {cost}
            {counter
              ? `* ${counter}=${counter * Number(cost.split(" ")[0])}$`
              : ""}
          </p>

          <div className={styles.counter}>
            <img src={up} alt="up" onClick={this.upHandler} />
            <span>{counter}</span>
            <img
              className={this.state.counter ? "" : styles.deactive}
              src={down}
              alt="down"
              onClick={this.downHandler}
            />
          </div>
        </h3>
        <p>{cost}</p>
      </div>
    );
  }
}
export default Card;
