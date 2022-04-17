import React from 'react'
import HomeSlider from '../components/HomeSlider'
import TopUp from '../components/TopUp'
const Home = ({ progress }) => {
    document.title = "sweez | Home"
    return (
        <>
            <div className='container mx-auto'>
                <HomeSlider />
                <TopUp progress={progress} />
                <div className='my-10 px-5'>
                    <img src="/image/5.jpg" alt="image" className='mx-auto shadow-xl' />
                </div>
            </div>
        </>
    )
}

export default Home