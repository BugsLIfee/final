import React, { Component } from "react";
import Nav from "./Nav";
import "./scss/header.scss";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      scrollTop: 0,
    };
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnMount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = (e) => {
    const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };

  
  render() {
    return (
      <div>
        <div
          className={
            this.state.scrollTop < 180 ? "h_container_top" : "h_container_down"
          }
        >
          <a href="/" className="header_logo_a">
            <div className="headerMain">
              {" "}
              <img
                className={
                  this.state.scrollTop < 180 ? "logo_top" : "logo_down"
                }
                src="/logo/logo_st.png"
                href="/"
                alt="logo"
              />
              <h1
                className={
                  this.state.scrollTop < 180 ? "h_title_top" : "h_title_down"
                }
              >
                BUGS LIFE
              </h1>
            </div>
          </a>

          <div className="nav">
            <Nav />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
