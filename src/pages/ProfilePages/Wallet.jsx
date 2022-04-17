import React, { useState } from 'react'
import { FackTransition } from '../../Apis/FackTransition';
import { Link } from 'react-router-dom';

const Wallet = () => {
    document.title = "sweez | Wallet"
    const [amount, setAmount] = useState(48)
    const [transition, setTransition] = useState(FackTransition)
    return (
        <>
            <div className='my-4 p-2 '>
                <div className={`${amount <= 50 ? 'bg-blue-100 ' : ""} text-center border shadow-lg lg:w-4/12 w-full mx-auto py-10 rounded`}>
                    <h1 className='text-2xl'>
                        <i className={`fa-solid fa-dollar-sign mx-2 text-2xl ${amount < 50 ? "text-red-400" : ""}`}></i>
                        <span className='text-blue-400'>{amount}</span> </h1>
                    <h1>
                        Available Balance
                    </h1>
                    {
                        amount < 50 ? <p className='text-sm text-red-600'>
                            <i className="fa-solid fa-circle-exclamation text-xl mr-2 "></i>
                            You Account balance very low. <Link to="/add-money" className='underline text-blue-400'>add money</Link>
                        </p> : ""
                    }
                </div>
                <div className='border my-10  lg:mx-10 mx-3 lg:p-5 p-2 rounded-lg shadow-md relative'>
                    <span className='bg-green-700 p-2 rounded-md text-white absolute -top-4'>Transitions</span>
                    {
                        // if transition length 0 < then show no transition found else table
                        transition.length <= 0 ? <div className='text-center my-4'>
                            <i className="fa-solid fa-magnifying-glass text-7xl text-gray-200 my-2"></i>
                            <p className='text-xl '>Sorry no transition found</p>
                        </div> : <>
                            <div className='my-4'>
                                <h1 className='text-right my lg:text-xl text-sm'>Total Transition <span className='border bg-green-500 py-2 px-3 text-white rounded-full'> {transition.length}</span></h1>

                                {
                                    transition.reverse().map(({ id, account, number, transitionId }) => {
                                        return (
                                            <div key={id} className={`mt-4 bg-gray-200 p-4 lg:w-1/3 rounded mx-auto`}  >
                                                <div className='flex justify-between '>
                                                    <h1>Account : </h1>
                                                    <h1>{account}</h1>
                                                </div>
                                                <div className='flex justify-between '>
                                                    <h1>Number : </h1>
                                                    <h1>{number}</h1>
                                                </div>
                                                <div className='flex justify-between '>
                                                    <h1>Transition Id :</h1>
                                                    <h1>{transitionId}</h1>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                            <div>
                                <h1 className='text-cyan-500 lg:text-md text-xm text-center'>
                                    <i class="fa-solid fa-circle-info inline mx-4 text-xl"></i>
                                    Dear user. Wait Some Moment when transiton process running.</h1>
                            </div>
                        </>

                    }


                </div>
            </div>
        </>
    )
}

export default Wallet