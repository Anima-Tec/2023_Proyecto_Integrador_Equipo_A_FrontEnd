import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";
// @ts-ignore
import image1 from "../../assets/aboutus-image.jpg";
// @ts-ignore
import image2 from "../../assets/aboutus-image-0.jpg";
import "./AboutUs.css";
function AboutUs() {
  return (
    <>
      <Header page="About us" isWide={true} />
      <div className="about-us">
        <div className="image-text-aboutus">
          <div className="titulo-aboutus">
            <h1>
              ABOUT <span>US</span>
            </h1>
          </div>
          <div className="empty-blue"></div>
        </div>
        <div>
          <div className="aboutus-desc">
            <p>
              The fact that society lacks a channel through which citizens and
              organizational entities, both state and private, can communicate,
              causes the gap between perceiving a problem and acting accordingly
              to widen more and more. What do we mean when we talk about this
              gap? We all know of some streets in poor condition, inaccessible
              intersections, an educational institution with significant
              structural damage, teachers who delay students' learning process,
              and so on. The fact that we do not communicate these issues,
              whether due to a lack of means, not being assertive, or simply the
              need to unite as a collective to have a stronger voice, makes
              improvement increasingly distant.
            </p>
          </div>
        </div>
        <div>
          <div className="aboutus-image-text-blue">
            <img src={image1} alt="Imagen 1" className="aboutus-image" />
            <div className="aboutus-text">
              <h2 className="aboutus-text-title">+FOCO</h2>
              <p className="aboutus-text-content">
                +FOCO offers a reporting service developed through a web
                application. Our focus is on companies, communities, and
                educational institutions; therefore, the service is specifically
                aimed at improving coexistence within these groups by
                facilitating communication between the parties and achieving the
                centralization and organization of the given information. It is
                based on a system where users from each institution can express
                concerns and/or demands, whether they are social issues or
                infrastructure-related matters within their establishment.
                <br />
                <br />
                Mission: Provide all companies in Uruguay with an application
                that allows their users to express their grievances, issues, or
                doubts related to the institution in order to enhance the
                coexistence among all. It's also aimed at governmental
                organizations so that users can also comment on public spaces,
                making them more inclusive and welcoming to everyone.
                <br />
                <br />
                Vision: To be the most sought-after reporting service at a
                national level, thereby facilitating internal communication for
                societies, departmental bodies, and others.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutus-image-text-black">
          <div className="aboutus-text">
            <h2 className="aboutus-text-title"> Clients</h2>
            <p className="aboutus-text-content">
              +FOCO is aimed at user communities, whether they are businesses,
              residential complexes, educational institutions, or institutional
              departments such as the municipality. To carry out this
              segmentation, we employ a psychographic segmentation criterion.
              The goals of the institutions interested in our service are to
              provide a higher quality, comfortable, and stable space and
              environment for the members of their institution. Additionally,
              there's a focus on improving the infrastructure of the location
              itself or public spaces in the case of institutional departments.
            </p>
          </div>
          <img src={image2} alt="Imagen 2" className="aboutus-image" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
