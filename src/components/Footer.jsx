import React from 'react'

export const Footer = () => {
    return (
        <footer className='bg-green-700 text-gray-50  py-4 '>
            <div className='grid lg:grid-cols-4 p-5 lg:gap-x-8 gap-y-10'>
                <div className=''>
                    <h1 className='mb-10 text-2xl'>Support</h1>
                    <div className='footer_support flex gap-3 items-center py-2 px-4 rounded-full mb-4'>
                        <span>

                            <i className="fa-solid fa-phone"></i>
                        </span>
                        <div className='border-l-2 pl-3 space-y-1'>
                            <p>9AM - 10PM</p>
                            <h1 className='text-xl'>+88107343433</h1>
                        </div>
                    </div>
                    <div className='footer_support flex gap-3 items-center py-2 px-4 rounded-full'>
                        <span>
                            <i className="fa-brands fa-whatsapp"></i>
                        </span>
                        <div className='border-l-2 pl-3 space-y-1'>
                            <p>9AM - 10PM</p>
                            <h1 className='text-xl'>+88107343433</h1>
                        </div>
                    </div>

                </div>
                <div className='lg:col-span-2'>
                    <h1 className='mb-10 text-2xl'>About</h1>
                    <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
                        <ul>
                            <a href="#">
                                <li>Terms & Condition</li>
                            </a>
                            <a href="#">
                                <li>Privacy Polici</li>
                            </a>
                            <a href="#">
                                <li>Shipment info</li>
                            </a>
                            <a href="#">
                                <li>Refund and Return Policy</li>
                            </a>
                        </ul>
                        <ul>
                            <a href="#">
                                <li>Contact Us</li>
                            </a>
                            <a href="#">
                                <li>About Us</li>
                            </a>
                        </ul>
                        <ul>
                            <a href="#">
                                <li>Free Fire</li>
                            </a>
                            <a href="#">
                                <li>Pubg Mobile</li>
                            </a>
                            <a href="#">
                                <li>Clash of clan</li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div>
                    <h1 className='mb-10 text-2xl'>Stay Conected</h1>
                    <ul>
                        <li className='text-xl font-semibold text-white '>website name</li>
                        <li>House #20 (3rd Floor) Road # 17, Nikanjia-2 Dhaka,</li>
                        <li>Email: <span className='font-semibold text-white'>example@gmail.com</span></li>
                        <div className='flex items-center space-x-4 social_icon mt-2'>
                            <div className=''>
                                <a href="#">
                                    <img src="/image/icon/facebook.png" alt="facebook" className='w-10 h-10 ' />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="/image/icon/youtube.png" alt="Youtube" className='w-10' />
                                </a>
                            </div>
                            <div>
                                <a href="#">
                                    <img src="/image/icon/instagram.png" alt="instagram" className='w-10' />
                                </a>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>
            <div className='mt-3 px-4 flex justify-between items-center'>
                <p className='text-sm'>&copy; Copyright 2022. All Right Reserved. Developed by <span className='text-black font-bold text-xl'>sweez</span></p>
                <div className='flex space-x-4'>
                    <a href="#">
                        <img src="/image/icon/youtube.png" alt="instagram" className='w-6 ' />
                    </a>
                    <a href="#">
                        <img src="/image/icon/facebook.png" alt="instagram" className='w-6' />
                    </a>
                </div>
            </div>
        </footer>
    )
}
