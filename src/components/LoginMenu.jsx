import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const LoginMenu = ({ logding, user }) => {
    const navigate = useNavigate()
    // Navbar profile Drop Down menu toggle system
    const [dropIcon, setDropIcon] = useState(false)
    const [dropDown, setDropDown] = useState(false)
    // toggle menu
    const ToggleMenu = () => {
        setDropDown(!dropDown)
        setDropIcon(!dropIcon)
    }

    // Fack Logout System . real logout will remove  user cookie from browser
    //  Link : >> req.cookie and remove cookiee
    const logout = () => {
        navigate("/")
        setDropDown(!dropDown)
        logding(false)
    }
    return (
        <div className='relative ml-auto  space-x-2 md:w-1.5/12 '>
            <button onClick={ToggleMenu} className='hover:bg-green-200 hover:border-green-400 px-2 py-2 rounded-full border-2 flex items-center text-sm w-40 gap-2'>
                <img src="/image/icon/man.png" className='w-8 h-8' alt="" />
                <h1 className=''>
                    {user.username}
                </h1>
                {
                    dropIcon ? <i className="fa-solid fa-angle-down inline mx-2"></i> : <i className="fa-solid fa-angle-up inline mx-2"></i>
                }

            </button>
            <div className={`absolute top-14 right-2 ${dropDown ? "flex" : "hidden"} flex-col bg-gray-50 shadow-md transition duration-100 px-2 py-3 rounded w-52 border `}>
                <ul className='userInfo'>
                    <Link to="/profile" onClick={ToggleMenu}>
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i className="fa-regular fa-user mr-4"></i>
                            My Profile
                        </li>
                    </Link>
                    <Link to="/profile/order" onClick={ToggleMenu}>
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i className="fa-solid fa-cart-shopping mr-4"></i>My Orders
                        </li>
                    </Link>
                    <Link to="/wallet" onClick={ToggleMenu}>
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i className="fa-solid fa-wallet mr-4"></i>
                            My Wallet
                        </li>
                    </Link>
                    <Link to="/add-money" onClick={ToggleMenu}>
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i className="fa-solid fa-right-left mr-4"></i>
                            Add Wallet
                        </li>
                    </Link>
                    <a href="https://wa.me/+8801947390801" target="_blank">
                        <li className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                            <i className="fa-solid fa-headset mr-4"></i>
                            Support
                        </li>
                    </a>
                    {/* Logout Button */}
                    <li onClick={logout} className='px-2 py-2 hover:bg-green-200 rounded cursor-pointer'>
                        <i className="fa-solid fa-power-off mr-4"></i>
                        Logout
                    </li>
                </ul>
            </div>
        </div >
    )
}

export default LoginMenu