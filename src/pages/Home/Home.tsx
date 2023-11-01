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
                  +FOCO, a reporting website created for societies, ranging from
                  educational institutions, companies, institutional
                  organizations, to even residential complexes. With the aim of
                  promoting effective communication and productivity for
                  problem-solving
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
