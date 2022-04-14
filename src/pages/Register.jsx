import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {
    document.title = "Register"
    const navigate = useNavigate()
    const alert = useAlert()
    const [input, setInput] = useState({
        email: "",
        password: "",
        cpassword: "",
        username: "",
        phone: null
    })
    const handleInput = (e) => {
        const name = e.target.name
        setInput({ ...input, [name]: e.target.value })
    }
    const [showPassword, setShowPassword] = useState(false)
    const [visiblePassword, setVisiblePassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [visibleConfirmPassword, setVisibleConfirmPassword] = useState(false)
    const showPass = () => {
        setShowPassword(!showPassword)
        setVisiblePassword(!visiblePassword)
    }
    const showConfirmPass = () => {
        setShowConfirmPassword(!showConfirmPassword)
        setVisibleConfirmPassword(!visibleConfirmPassword)
    }
    const submitForm = (e) => {
        e.preventDefault()
        const { username, phone, email, password, cpassword } = input
        if (!username || !email || !password || !cpassword || !phone) {
            alert.show(<p className='normal-case'>Invalid Input Field</p>, {
                type: "error"
            })
        } else if (phone.length < 11 || phone.length > 11) {
            alert.show(<p className='normal-case'>insert 11 digit num</p>, {
                type: "error"
            })
        } else if (password.length < 8) {
            alert.show(<p className='normal-case'>At list 8 character</p>, {
                type: "error"
            })
        } else if (password !== cpassword) {
            alert.show(<p className='normal-case'>Password not match</p>, {
                type: "error"
            })
        } else {
            alert.show(<p className='normal-case'>Connect Backend</p>, {
                type: "info"
            })
            setTimeout(() => {
                navigate("/login")
            }, 1500);

        }


    }


    return (
        <>
            <div id='login' className='flex items-center justify-center flex-col lg:px-0 px-2'>
                <div className='border shadow-md px-10 py-5 my-10 rounded-md overflow-hidden md:w-5/12 w-full'>
                    <h1 className='text-2xl mb-10'>Register</h1>
                    <div className='flex justify-center items-center space-x-3 border p-2 rounded-full hover:border-green-700 cursor-pointer my-4'>
                        <img src="/image/icon/google.png" alt="Google" className='w-8' />
                        <h1>Signup with Google</h1>
                    </div>
                    <form onSubmit={submitForm} method="POST">
                        <div className='my-3'>
                            <label htmlFor="username" className='block mb-1'>User name</label>
                            <input value={input.username} onChange={handleInput} type="text" name="username" id="usernmae" placeholder='Username' autoComplete='off' className='p-2 border w-full rounded-md outline-none hover:border-green-700' />
                        </div>
                        <div className='my-3'>
                            <label htmlFor="phone" className='block mb-1'>Phone Number</label>
                            <input type="number" value={input.phone} onChange={handleInput} name="phone" id="phone" placeholder="Phone" autoComplete='off' className='p-2 border w-full rounded-md outline-none hover:border-green-700' />
                        </div>
                        <div className='my-3'>
                            <label htmlFor="email" className='block mb-1'>Email Address</label>
                            <input value={input.email} onChange={handleInput} type="email" name="email" id="email" placeholder='expample@gmail.com' autoComplete='off' className='p-2 border w-full rounded-md outline-none hover:border-green-700' />
                        </div>
                        <div className='my-3 relative '>
                            <label htmlFor="password" className='block'>Password</label>
                            <input value={input.password} onChange={handleInput} type={visiblePassword ? "text" : "password"} name="password" id="password" placeholder='Password' autoComplete='off' className='p-2 border w-full rounded-md outline-none hover:border-green-700  ' />
                            {
                                showPassword ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute bottom-2 right-3 cursor-pointer" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    onClick={showPass}
                                    strokeWidth={2}>

                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute bottom-2 right-3 cursor-pointer"
                                    onClick={showPass} fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            }
                        </div>
                        <div className='my-3 relative '>
                            <label htmlFor="password" className='block'>Confirm Password</label>
                            <input value={input.cpassword} onChange={handleInput} type={visibleConfirmPassword ? "text" : "password"} name="cpassword" id="password" placeholder='Confirm Password' autoComplete='off' className='p-2 border w-full rounded-md outline-none hover:border-green-700  ' />
                            {
                                showConfirmPassword ? <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute bottom-2 right-3 cursor-pointer" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    onClick={showConfirmPass}
                                    strokeWidth={2}>

                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute bottom-2 right-3 cursor-pointer"
                                    onClick={showConfirmPass} fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                </svg>
                            }
                        </div>
                        <button className='bg-green-700 mt-1 rounded-md text-white py-1.5  px-10 text-xl' type='submit'>Register</button>
                    </form>
                    <div className='mt-6'>
                        <p className='text-center  text-md'>Already have an account <Link to="/login" className='text-blue-700 hover:underline'>Login</Link> </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register