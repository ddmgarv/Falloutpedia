import React, { Component } from "react";
import { home } from "../../constants/content";
import "./home.scss";

class Home extends Component {
  insertContent() {
    return home.map(item => (
      <div className="home__container--items">
        <div>
          <img src={item.img} alt="fallout background" />
        </div>
        <p>{item.p}</p>
      </div>
    ));
  }
  render() {
    return (
      <section className="home">
        <div className="home__container">{this.insertContent()}</div>
      </section>
    );
  }
}

export default Home;
