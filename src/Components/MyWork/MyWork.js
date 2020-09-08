import React from 'react'

const MyWork = () => {
    return (
        <section className="my-work" id="work">
            <h2 className="my-work-title">My work</h2>
            <p className="my-work-subtitle"></p>
            <div className="my-work-portfolio">
                <a href="#" className="my-work-portfolio__item">
                    {/* <img src={portfolio1} alt=" " /> */}
                </a>
                <a href="#" className="my-work-portfolio__item">
                    {/* <img src={portfolio2} alt="" /> */}
                </a> 
                <a href="#" className="my-work-portfolio__item">
                    {/* <img src={portfolio3} alt="" /> */}
                </a>
                <a href="#" className="my-work-portfolio__item">
                    {/* <img src={portfolio4} alt="" /> */}
                </a>
            </div>
        </section>
    )
}

export default MyWork
