import React from 'react'
import image from './../../Assets/profile2.jpg'
import './Introduction.css'

const Introduction = () => {
    return (
        <section className="introduction">
            <h1 className="section-title section-title--intro">
                Hi, I'm <strong>Ana Spinola</strong>
            </h1>
            <p className="section-subtitle section-subtitle--intro">frontend dev</p>
            <img src={image} alt="a picture of Ana Spinola smiling"/>
        </section>
    )
}

export default Introduction
