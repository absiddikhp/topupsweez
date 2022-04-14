import React from 'react'
import Slider from "react-slick";
const HomeSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }
    return (
        <>
            <div className='relative'>
                <Slider {...settings} className="lg:p-4 p-2">
                    <div>
                        <a href="#">
                            <figure>
                                <img className='w-full' src="/image/1.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <figure>
                                <img className='w-full' src="/image/2.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <figure>
                                <img className='w-full' src="/image/3.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                    <div>
                        <a href="#">
                            <figure>
                                <img className='w-full' src="/image/4.jpg" alt="" />
                            </figure>
                        </a>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default HomeSlider