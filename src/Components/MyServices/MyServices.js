import React from 'react'

const MyServices = () => {
    return (
        <section className="my-services" id="services">
            <h2 className="my-services-title my-services-title--services">What I do</h2>
            <div className="my-services-services">
                <div className="my-services-service">
                    <h3>React</h3>
                    <p></p>
                </div>

                <div className="my-services-service">
                    <h3>HTML/CSS/JS</h3>
                    <p></p>
                </div> 
                
                <div className="my-services-service">
                    <h3>WordPress</h3>
                    <p></p>
                </div> 
                
                <div className="my-services-service">
                    <h3>Text Mining</h3>
                    <p></p>
                </div> 
            </div>
            
            <a href="#work" className="my-services-btn">My Work</a>
        </section>
    )
}

export default MyServices
