import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'
import LoginMenu from './LoginMenu';

const Navbar = () => {
    const [logdin, setLogdin] = useState(true)
    const alert = useAlert()
    const findSomething = (e) => {
        e.preventDefault()
        alert.show(<p className='normal-case'>Fail to found</p>, {
            type: "info",

        })
    }
    return (
        <header className=' flex md:px-4 px-4 justify-between  items-center md:py-2 py-5 shadow sticky top-0 z-10 bg-white'>
            <div className='md:w-2/12 text-center' >
                <Link to="/">
                    <h1>Logo Logo </h1>
                </Link>
            </div>
            <div className=' md:block hidden md:w-10/12 ml-auto mr-auto p-2'>
                <form method='GET' onSubmit={findSomething}>
                    <input type="text" className='px-4 py-2  w-10/12 ' name="search" id="search" placeholder='Search...' autoComplete='off' />
                    <button className='px-4 py-2 text-white ml-1 bg-green-700 rounded-md '>
                        search
                    </button>
                </form>
            </div>
            {
                logdin ? <LoginMenu /> : <div className='md:space-x-4  ml-auto flex space-x-2 md:w-3/12 '>
                    <Link to="/register">
                        <button className='bg-green-700 px-4 py-1.5 rounded-full text-white hover:bg-blue-700 transition-all inline'>Register</button>
                    </Link>
                    <Link to="/login">
                        <button className='flex items-center justify-center outline outline-green-700 outline-1 px-4 py-1.5 rounded-full text-black hover:bg-blue-600 hover:text-white  hover:outline-0 transition-all'>Login <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 " viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </Link>
                </div>
            }

        </header>
    )
}

export default Navbar