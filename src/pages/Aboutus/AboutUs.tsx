import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import React from "react";
// @ts-ignore
import image1 from "../../assets/aboutus-image.png";
// @ts-ignore
import image2 from "../../assets/aboutus-image-0.png";
import "./AboutUs.css";
function AboutUs() {
  return (
    <>
      <Header page="About us" isWide={true} />
      <div className="about-us">
        <div className="image-text-aboutus">
          <div className="titulo-aboutus">
            <h1>
              SOBRE <span>NOSOTROS</span>
            </h1>
          </div>
          <div className="empty-blue"></div>
        </div>
        <div>
          <div className="aboutus-desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              convallis neque mauris, at mattis augue consequat non. Maecenas
              sodales, felis sit amet mattis efficitur, libero tortor convallis
              enim, ut iaculis justo felis aliquam dolor. Sed vitae finibus
              magna, in luctus sapien. Mauris pharetra pretium mauris, elementum
              interdum nibh. Aliquam vehicula dictum felis sed pellentesque.
              Aenean blandit ipsum ac lorem imperdiet, quis bibendum justo
              gravida. Sed consectetur lectus a justo mattis sollicitudin. Donec
              bibendum magna hendrerit risus mollis lobortis. Nunc turpis velit,
              vulputate eget ante ut, molestie elementum purus. Integer ultrices
              sem ipsum, eu porttitor sem pellentesque vitae.
              <br />
              Curabitur in sapien tortor. Curabitur convallis sapien ac augue
              ornare ullamcorper. In et dui ac ante dapibus lobortis. Ut porta
              turpis nec finibus laoreet. Sed consequat pellentesque turpis
              finibus hendrerit. Maecenas faucibus luctus mi et efficitur. Donec
              eu tincidunt nisl.
              <br />
              Suspendisse convallis venenatis diam, eu suscipit dui gravida eu.
              Integer risus augue, volutpat a velit quis, elementum placerat
              magna. Donec sodales posuere leo vel suscipit. Ut tortor leo,
              pharetra ut placerat vel, mattis vel nisi. Morbi commodo sit amet
              risus et molestie. Vivamus at sagittis arcu. Fusce hendrerit et
              neque eu pellentesque. Duis nec dui at leo lacinia viverra vitae
              ac urna. Aliquam sodales urna mauris, et vehicula nisi bibendum
              eget. Quisque at massa cursus, tristique dolor non, posuere magna.
              Maecenas lacinia rutrum felis eget feugiat. Quisque tempus metus
              eget neque pellentesque luctus.
            </p>
          </div>
        </div>
        <div>
          <div className="aboutus-image-text-blue">
            <img src={image1} alt="Imagen 1" className="aboutus-image" />
            <div className="aboutus-text">
              <h2 className="aboutus-text-title">
                Suspendisse convallis venenatis
              </h2>
              <p className="aboutus-text-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas convallis neque mauris, at mattis augue consequat non.
                Maecenas sodales, felis sit amet mattis efficitur, libero tortor
                convallis enim, ut iaculis justo felis aliquam dolor. Sed vitae
                finibus magna, in luctus sapien. Mauris pharetra pretium mauris,
                elementum interdum nibh. Aliquam vehicula dictum felis sed
                pellentesque. Aenean blandit ipsum ac lorem imperdiet, quis
                bibendum justo gravida. Suspendisse convallis venenatis diam, eu
                suscipit dui gravida eu. Integer risus augue, volutpat a velit
                quis, elementum placerat magna. Donec sodales posuere leo vel
                suscipit. Ut tortor leo, pharetra ut placerat vel, mattis vel
                nisi. Morbi commodo sit amet risus et molestie. Vivamus at
                sagittis arcu. Fusce hendrerit et neque eu pellentesque. Duis
                nec dui at leo lacinia viverra vitae ac urna. Aliquam sodales
                urna mauris, et vehicula nisi bibendum eget. Quisque at massa
                cursus, tristique dolor non, posuere magna.
              </p>
            </div>
          </div>
        </div>
        <div className="aboutus-image-text-black">
          <div className="aboutus-text">
            <h2 className="aboutus-text-title"> Maecenas sodales</h2>
            <p className="aboutus-text-content">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              convallis neque mauris, at mattis augue consequat non. Maecenas
              sodales, felis sit amet mattis efficitur, libero tortor convallis
              enim, ut iaculis justo felis aliquam dolor. Sed vitae finibus
              magna, in luctus sapien. Mauris pharetra pretium mauris, elementum
              interdum nibh. Aliquam vehicula dictum felis sed pellentesque.
              Aenean blandit ipsum ac lorem imperdiet, quis bibendum justo
              gravida. Suspendisse convallis venenatis diam, eu suscipit dui
              gravida eu. Integer risus augue, volutpat a velit quis, elementum
              placerat magna. Donec sodales posuere leo vel suscipit. Ut tortor
              leo, pharetra ut placerat vel, mattis vel nisi. Morbi commodo sit
              amet risus et molestie. Vivamus at sagittis arcu. Fusce hendrerit
              et neque eu pellentesque. Duis nec dui at leo lacinia viverra
              vitae ac urna. Aliquam sodales urna mauris, et vehicula nisi
              bibendum eget. Quisque at massa cursus, tristique dolor non,
              posuere magna.
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
