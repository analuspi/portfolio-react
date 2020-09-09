import React from 'react'
import image from './../../Assets/profile3.jpg'

const AboutMe = () => {
    return (
        <section className="about-me" id="about">
            <h2 className="section-title section-title--about">Who I am</h2>
            <p className="section-subtitle section-subtitle--about">Frontend developer based in Québec city</p>

            <div className="about-me-body">
                <p>I'm a self-learning developer, who started coding as a R-Ladie (I did part of my PhD with R statistical language).</p>
                <p>Currently, I'm seeking to leverage my expertise to learn and grow in the role of fullstack developer. </p>
                <p> This transition is mostly inspired by an open source project that I worked as collaborator (with Node.js and React.js).</p>
                <p>I'm proactive and I have large experience in oral presentations, mentoring and teaching in three idioms (english, french and portuguese).</p>
            </div>

            <img src={image} alt="Ana talking in a microphone"/>
        </section>
    )
}

export default AboutMe
