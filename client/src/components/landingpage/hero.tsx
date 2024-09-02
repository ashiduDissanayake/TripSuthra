import React from 'react'

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Travel further. Travel longer. Travel deeper.</h1>
                <div className="image">
                    <img className="pexels-harsha" alt="Pexels harsha" src="pexels-harsha-samaranayake-303340503-13391116-1.png" />
                </div>
                <input type="text" placeholder="Search your next destination..." />
                <button>Search</button>
            </div>
        </section>
    )
}

export default Hero