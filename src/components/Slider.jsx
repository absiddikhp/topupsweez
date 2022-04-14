import React from 'react'
import Slider from "react-slick";
const HomeSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <>
            <Slider {...settings}>
                <div>
                    <h1>First</h1>
                </div>
                <div>
                    <h1>Scound</h1>
                </div>
                <div>
                    <h1>Third</h1>
                </div>
            </Slider>
        </>
    )
}

export default HomeSlider