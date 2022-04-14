import React, { useState } from 'react'
import { a } from 'react-router-dom'

const LoginMenu = () => {
    const [dropIcon, setDropIcon] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    const ToggleMenu = () => {
        setDropDown(!dropDown)
        setDropIcon(!dropIcon)
    }
    return (
        <div className='relative ml-auto  space-x-2 md:w-1.5/12 '>
            <button onClick={ToggleMenu} className='hover:bg-green-200 hover:border-green-400 px-5 py-2 rounded-full border-2'>
                SiddikHp
                {
                    dropIcon ? <i class="fa-solid fa-angle-down inline mx-2"></i> : <i class="fa-solid fa-angle-up inline mx-2"></i>
                }

            </button>
            <div className={`absolute top-12 right-2 ${dropDown ? "flex" : "hidden"} flex-col bg-gray-50 shadow-md transition duration-100 px-2 py-3 rounded w-52 border `}>
                <ul className='userInfo'>
                    <a href="/profile">
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i class="fa-regular fa-user mr-4"></i>
                            My Profile
                        </li>
                    </a>
                    <a href="/order">
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i class="fa-solid fa-cart-shopping mr-4"></i>My Orders
                        </li>
                    </a>
                    <a href="/wallet">
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i class="fa-solid fa-wallet mr-4"></i>
                            My Wallet
                        </li>
                    </a>
                    <a href="https://wa.me/+8801947390801" target="_blank">
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i class="fa-solid fa-headset mr-4"></i>
                            Support
                        </li>
                    </a>
                    <a href="#">
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i class="fa-solid fa-power-off mr-4"></i>
                            Logout
                        </li>
                    </a>
                </ul>
            </div>
        </div >
    )
}

export default LoginMenu