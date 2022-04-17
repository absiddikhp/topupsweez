import React, { useState } from 'react'
import { FacKUser } from '../../Apis/FackUser'
const Profile = () => {
    document.title = "sweez | Profile"
    const [userData, setUserData] = useState(FacKUser)
    const [addNumber, setAddNumber] = useState(false)
    // if phone state have the number then number field not showing 
    const [Phone, setPhone] = useState()
    // 👍 To Show or hide Number field in Profile
    const showNumberInput = () => {
        setAddNumber(!addNumber)
    }

    // ✌ To Update the number and save user profile in database
    const UpdateNumber = (e) => {
        e.preventDefault()
        const num = document.querySelector('#phone')
        setPhone(num.value)
        setAddNumber(false)

    }
    return (
        <>
            <div className='my-4'>
                <div>
                    <div className='text-center my-4 mt-10 space-y-4 text-2xl '>
                        <img src="/image/icon/man.png" className='w-32 mx-auto h-32 rounded-full' alt="" />
                        <h1>{userData.name}</h1>
                    </div>

                    <div className='lg:w-2/4 w-full mx-auto flex flex-col gap-4 shadow-lg rounded-md lg:p-5 p-2 mb-10 border'>
                        <div className=' p-3  flex justify-between items-center hover:bg-green-400 rounded cursor-pointer active:bg-green-500'>
                            <h1>Profile ID</h1>
                            <h1>{userData.porfileId}</h1>
                        </div>
                        <div className=' p-3  flex justify-between items-center hover:bg-blue-400 rounded cursor-pointer active:bg-blue-500'>
                            <h1>Email</h1>
                            <h1>{userData.email}</h1>
                        </div>
                        <div>
                            <div className=' p-3  flex  justify-between items-center hover:bg-cyan-400 rounded cursor-pointer active:bg-cyan-500'>
                                <h1>Phone Number</h1>
                                {
                                    // if number is exist then add number not shoing other wise it show number field
                                    userData.phone ? userData.phone : <>
                                        <h1>
                                            {
                                                addNumber ? <i onClick={showNumberInput} className="fa-solid fa-minus ml-4 text-xl"></i> : <i onClick={showNumberInput} className="fa-solid fa-plus ml-4 text-xl"></i>
                                            }
                                        </h1></>
                                }
                            </div>
                            {
                                addNumber ? <form onSubmit={UpdateNumber} method='POST' className='my-3'>
                                    <input type="number" name="phone" id="phone" className='w-full border p-2 rounded-md' placeholder='Enter Your number' autoComplete='off' />
                                    <button className='bg-green-600 py-2 px-4  text-white rounded-full my-2 float-right hover:bg-green-700'>Add Number</button>
                                </form> : <></>
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile