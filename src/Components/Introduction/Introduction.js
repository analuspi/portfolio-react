import React from 'react'
import image from './../../Assets/profile2.jpg'

const Introduction = () => {
    return (
        <section className="introduction">
            <h1 className="introduction-title introduction-title--intro">
                Hi, I'm <strong>Ana Spinola</strong>
            </h1>
            <p className="introduction-subtitle introduction-subtitle--intro">frontend dev</p>
            <img src={image} alt="a picture of Ana Spinola smiling"/>
        </section>
    )
}

export default Introduction
