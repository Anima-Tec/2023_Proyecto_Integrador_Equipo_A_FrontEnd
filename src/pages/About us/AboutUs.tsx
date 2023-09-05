import PageHeader from '../../components/header/Header';
import PageFooter from '../../components/footer/Footer';
import LeftContainer from '../../components/left-container/wide/WideLeftContainer'
import React from 'react'
import "./AboutUs.css"
function AboutUs() {
    return (
        <>
            <PageHeader />
            <div className="about-us">
                <div>
                    <h1>SOBRE <span className="colorh1">NOSOTROS</span></h1>
                </div>
                <div className="empty-blue">

                </div>
                <div>
                    <div className="sectionP">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis neque mauris, at mattis
                            augue
                            consequat non. Maecenas sodales, felis sit amet mattis efficitur, libero tortor convallis enim, ut
                            iaculis justo felis aliquam dolor. Sed vitae finibus magna, in luctus sapien. Mauris pharetra
                            pretium
                            mauris, elementum interdum nibh. Aliquam vehicula dictum felis sed pellentesque. Aenean blandit
                            ipsum ac
                            lorem imperdiet, quis bibendum justo gravida. Sed consectetur lectus a justo mattis sollicitudin.
                            Donec
                            bibendum magna hendrerit risus mollis lobortis. Nunc turpis velit, vulputate eget ante ut, molestie
                            elementum purus. Integer ultrices sem ipsum, eu porttitor sem pellentesque vitae.
                            Curabitur in sapien tortor. Curabitur convallis sapien ac augue ornare ullamcorper. In et dui ac
                            ante
                            dapibus lobortis. Ut porta turpis nec finibus laoreet. Sed consequat pellentesque turpis finibus
                            hendrerit. Maecenas faucibus luctus mi et efficitur. Donec eu tincidunt nisl.
                            Suspendisse convallis venenatis diam, eu suscipit dui gravida eu. Integer risus augue, volutpat a
                            velit
                            quis, elementum placerat magna. Donec sodales posuere leo vel suscipit. Ut tortor leo, pharetra ut
                            placerat vel, mattis vel nisi. Morbi commodo sit amet risus et molestie. Vivamus at sagittis arcu.
                            Fusce
                            hendrerit et neque eu pellentesque. Duis nec dui at leo lacinia viverra vitae ac urna. Aliquam
                            sodales
                            urna mauris, et vehicula nisi bibendum eget. Quisque at massa cursus, tristique dolor non, posuere
                            magna. Maecenas lacinia rutrum felis eget feugiat. Quisque tempus metus eget neque pellentesque
                            luctus.
                        </p>
                    </div>
                </div>
                <div>
                    <div className="section">
                        <div className="section-image">
                            <img src="image-4.jpg" alt="Imagen 1" />
                        </div>
                        <h2>Suspendisse convallis venenatis</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis neque mauris, at mattis
                            augue
                            consequat non. Maecenas sodales, felis sit amet mattis efficitur, libero tortor convallis enim, ut
                            iaculis justo felis aliquam dolor. Sed vitae finibus magna, in luctus sapien. Mauris pharetra
                            pretium
                            mauris, elementum interdum nibh. Aliquam vehicula dictum felis sed pellentesque. Aenean blandit
                            ipsum ac
                            lorem imperdiet, quis bibendum justo gravida.

                            Suspendisse convallis venenatis diam, eu suscipit dui gravida eu. Integer risus augue, volutpat a
                            velit
                            quis, elementum placerat magna. Donec sodales posuere leo vel suscipit. Ut tortor leo, pharetra ut
                            placerat vel, mattis vel nisi. Morbi commodo sit amet risus et molestie. Vivamus at sagittis arcu.
                            Fusce
                            hendrerit et neque eu pellentesque. Duis nec dui at leo lacinia viverra vitae ac urna. Aliquam
                            sodales
                            urna mauris, et vehicula nisi bibendum eget. Quisque at massa cursus, tristique dolor non, posuere
                            magna.</p>
                    </div>
                </div>
                <div className="section">
                    <h2> Maecenas sodales</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas convallis neque mauris, at mattis augue
                        consequat non. Maecenas sodales, felis sit amet mattis efficitur, libero tortor convallis enim, ut
                        iaculis justo felis aliquam dolor. Sed vitae finibus magna, in luctus sapien. Mauris pharetra pretium
                        mauris, elementum interdum nibh. Aliquam vehicula dictum felis sed pellentesque. Aenean blandit ipsum ac
                        lorem imperdiet, quis bibendum justo gravida.

                        Suspendisse convallis venenatis diam, eu suscipit dui gravida eu. Integer risus augue, volutpat a velit
                        quis, elementum placerat magna. Donec sodales posuere leo vel suscipit. Ut tortor leo, pharetra ut
                        placerat vel, mattis vel nisi. Morbi commodo sit amet risus et molestie. Vivamus at sagittis arcu. Fusce
                        hendrerit et neque eu pellentesque. Duis nec dui at leo lacinia viverra vitae ac urna. Aliquam sodales
                        urna mauris, et vehicula nisi bibendum eget. Quisque at massa cursus, tristique dolor non, posuere
                        magna.
                    </p>
                    <div className="section-image">
                        <img src="image-5.jpg" alt="Imagen 2" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default AboutUs;