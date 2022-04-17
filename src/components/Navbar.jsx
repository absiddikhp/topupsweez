import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import LoginMenu from './LoginMenu';
import { FacKUser } from '../Apis/FackUser';
const Navbar = ({ progress, isAuth }) => {
    return (
        <header className='flex p-4 justify-between items-center shadow sticky top-0 bg-white z-50'>
            <div className=' text-center' >
                <Link to="/" onClick={progress}>
                    <img src="/image/logo.png" alt="logo" className='lg:w-40 w-32 ' />
                </Link>
            </div>
            <ul className='lg:flex space-x-5 lg:visible hidden justify-between font-medium ' >
                <Link to="/topup/freefire-id-code" onClick={progress}>
                    <li className='hover:text-orange-600'>Free Fire</li>
                </Link>
                <Link to="/topup/freefire-in-game" onClick={progress}>
                    <li className='hover:text-orange-600'>Free Fire inline</li>
                </Link>
                <Link to="/topup/pubg-mobile" onClick={progress}>
                    <li className='hover:text-orange-600'>Pubg</li>
                </Link>
                <Link to="/topup/call-of-duty" onClick={progress}>
                    <li className='hover:text-orange-600'>Call of duty</li>
                </Link>
                <Link to="/topup/arena-of-valor" onClick={progress}>
                    <li className='hover:text-orange-600'>Arena of valor</li>
                </Link>

            </ul>
            <div className=''>
                {
                    isAuth ? <LoginMenu logout={isAuth} user={FacKUser} progress={progress} /> : <div className='md:space-x-4  ml-auto flex space-x-2 '>
                        <Link to="/register" onClick={progress}>
                            <button className='bg-green-700 px-4 py-1.5 rounded-full text-white hover:bg-blue-700 transition-all inline'>Register</button>
                        </Link>
                        <Link to="/login" onClick={progress}>
                            <button className='flex items-center justify-center outline outline-green-700 outline-1 px-4 py-1.5 rounded-full text-black hover:bg-blue-600 hover:text-white  hover:outline-0 transition-all'>Login <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 " viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            </button>
                        </Link>
                    </div>
                }
            </div>

        </header>
    )
}

export default Navbar