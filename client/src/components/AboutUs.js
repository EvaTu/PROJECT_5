import React from 'react';

function AboutUs(){

    return(
        <div>
            <h1 style={{margin:"45px"}}>About WWW</h1>
            <img style={{"margin-bottom":"45px"}}src="https://www.eco-stylist.com/wp-content/uploads/2021/07/EVERLANE-x-Nordstrom.jpeg" />
            <div className="about-us-words">
                <h2>Our ethical approach</h2>
                <p>We spend months finding the best factories around the world—the same ones that produce your favorite designer labels. We visit them often and build strong personal relationships with the owners. Each factory is given a compliance audit to evaluate factors like fair wages, reasonable hours, and environment. Our goal? A score of 90 or above for every factory.</p>
                <h2>Designed to last</h2>
                <p>We’re not big on trends. We want you to wear our pieces for years, even decades, to come. That’s why we source the finest materials and factories for our timeless products— like our Grade-A cashmere sweaters, Italian shoes, and Peruvian Pima tees.</p>
                <h2>Radically transparent</h2>
                <p>We believe our customers have a right to know how much their clothes cost to make. We reveal the true costs behind all of our products—from materials to labor to transportation—then offer them to you, minus the traditional retail markup.</p>
            </div>
        </div>
    )

}

export default AboutUs