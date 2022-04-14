import React, { useState } from 'react'
import { useAlert } from 'react-alert'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
    document.title = "Forget Password"
    const alert = useAlert()
    const [email, setEmail] = useState("")

    const hanldeInput = (e) => {
        setEmail(e.target.value)
    }

    const submitForm = (e) => {
        e.preventDefault()
        if (!email) {
            alert.show(<p className='capitalize'>invalid input</p>, {
                type: "error",
                transitions: "fade"
            })
        }
        else {
            alert.show(<p className='capitalize'>Connect Your Backend</p>, {
                type: "info",
                transitions: "fade"
            })
        }

    }
    return (
        <>
            <div id='forgetPassword' className='flex items-center justify-center flex-col lg:px-0 px-4 '>
                <div className='border shadow-md px-10 py-5 rounded-md overflow-hidden md:w-5/12 my-20 '>
                    <h1 className='text-2xl mb-10'>Forget Password ? </h1>
                    <form onSubmit={submitForm} method="POST">
                        <div className='my-4'>
                            <label htmlFor="email" className='block mb-1'>Email Address</label>
                            <input value={email} onChange={hanldeInput} type="email" name="email" id="email" placeholder='Enter email or phone ' autoComplete='off' className='p-2 border w-full rounded-md outline-none hover:border-green-700' />
                        </div>
                        <button className='bg-green-700 mt-1 rounded-md text-white py-1.5  px-10 text-xl'>Find Account</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword