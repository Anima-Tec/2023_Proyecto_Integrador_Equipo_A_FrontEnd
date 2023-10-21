import Header from "../../components/header/Header";
import LeftContainer from "../../components/left-container/LeftContainer.js";
import "./Home.css";
// @ts-ignore
import logo from "../../assets/logo.png";
import React from "react";
import Footer from "../../components/footer/Footer";
function Home(props: any) {
  return (
    <>
      <div className="home">
        <Header page="Home" isWide={true} />
        <div className="home-content">
          <LeftContainer valor={props.leftContainer} />
          <div className="content">
            <div className="nav-container">
              <div className="content-welcome">
                <h2>Welcome to +FOCO</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Maecenas convallis neque mauris, at mattis augue consequat
                  non. Maecenas sodales, felis sit amet mattis efficitur, libero
                  tortor convallis enim, ut iaculis justo felis aliquam dolor.
                  Sed vitae finibus magna, in luctus sapien.
                </p>
              </div>
              <div className="content-nav">
                <img src={logo} alt="logo" />
                <div className="content-navLine"></div>
                <nav>
                  <a href="#">Reports</a>
                  <a href="#">My Reports</a>
                  <a href="#">Reports History</a>
                  <a href="#">Create Report</a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
