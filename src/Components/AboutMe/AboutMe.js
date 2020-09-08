import React from 'react'
import image from './../../Assets/profile3.jpg'

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <h2 className="about-me-title about-me-title--about">Who I am</h2>
            <p className="about-me-subtitle about-me-subtitle--about"></p>

            <div className="about-me-body">
                <p></p>
                <p></p>
            </div>

            <img src={image} alt="Ana talking in a microphone"/>
        </section>
    )
}

export default AboutMe
