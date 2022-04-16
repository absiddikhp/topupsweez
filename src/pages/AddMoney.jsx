import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';
const AddMoney = () => {
    useEffect(() => {
        let links = document.querySelectorAll("li")
        links.forEach(li => {
            li.addEventListener("click", () => {
                resetLink();
                li.classList.add("active")
            })
        })
        function resetLink() {
            links.forEach(li => {
                li.classList.remove("active")
            })
        }

    })
    const [number, setNumber] = useState({
        bkash: "01621675233",
        nagad: "01254698547",
        rocket: "01621548750"
    })
    const [btnClick, setBtnClick] = useState(false)
    const copyNumber = () => {
        setBtnClick(true)
        setTimeout(() => {
            setBtnClick(false)
        }, 600);
    }


    // error
    const [error, setError] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    setTimeout(() => {
        setError(false)
    }, 1000);
    const [moneyData, SetMoneyData] = useState({
        amount: "",
        number: "",
        transitionid: ""
    })
    const handleInput = (e) => {
        const name = e.target.name;
        SetMoneyData({ ...AddMoney, [name]: e.target.value })
    }
    const AddMoney = (e) => {
        e.preventDefault()
        const { amount, number, transitionid } = moneyData
        if (amount === "" || number === "" || transitionid === "") {
            setError(true)
            setErrMsg("Invalid input form")
        } else {
            // Summit money details to the backend and show in dashboard
            setError(true)
            setErrMsg("Conect to the backend")
        }
    }
    return (
        <>
            <div className='my-4 '>
                {
                    error ? <h1 className='fixed  text-center right-0 left-0 bg-red-500 w-max rounded-md mx-auto py-2 transition-all px-4'><i class="fa-solid fa-triangle-exclamation text-gray-200"></i> {errMsg}</h1> : ""
                }
                <div className='my-10'>
                    <div className='border lg:w-2/4 w-5/6 mx-auto py-3 px-5 rounded shadow-md '>
                        <div className='flex  items-center'>
                            <h1 className='mx-4 bg-green-700 rounded-full text-white px-3 py-1 max-w-max'>1</h1>
                            <h1 className='text-green-700 lg:text-2xl text-md'>Select Payment Method</h1>
                        </div>
                        <ul className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-2   p-2 mt-4 gap-4  '>
                            <li className='lg:text-xl text-sm cursor-pointer shadow hover:border-green-700 rounded overflow-hidden text-center  relative border py-2'>
                                <i className={`icon fa-solid fa-square-check absolute top-0 left-1 text-xl hidden text-green-700`}></i>
                                <img src="/image/bank/bkash.jpg" alt="bkash" className='mx-auto lg:w-full ' />
                                <h1>Bkash</h1>
                                <h2 className='py-2 hidden number'>{number.bkash}</h2>
                                <CopyToClipboard text={number.bkash}>
                                    <button onClick={copyNumber} className='text-sx bg-green-700 px-4 py-1 rounded text-gray-200 active:bg-green-500 mx-auto hidden '>
                                        {btnClick ? "copied" : "copy "}
                                    </button>
                                </CopyToClipboard>

                            </li>
                            <li className=' lg:text-xl text-sm cursor-pointer shadow hover:border-green-700 rounded overflow-hidden text-center  relative border py-2'>
                                <i className={`icon fa-solid fa-square-check absolute top-0 left-1 text-xl hidden text-green-700`}></i>
                                <img src="/image/bank/nagad.jpg" alt="Nagad" className='mx-auto' />
                                <h1>Nagad</h1>
                                <h2 className='number hidden py-2'> {number.nagad}</h2>
                                <CopyToClipboard text={number.nagad}>
                                    <button onClick={copyNumber} className='bg-green-700 px-4 py-1 rounded text-gray-200 active:bg-green-500 hidden mx-auto'>
                                        {btnClick ? "copied" : "copy "}
                                    </button>
                                </CopyToClipboard>
                            </li>
                            <li className='lg:text-xl text-sm cursor-pointer shadow hover:border-green-700 rounded overflow-hidden text-center  relative border py-2'>
                                <i className={`icon fa-solid fa-square-check absolute top-0 left-1 text-xl hidden text-green-700`}></i>
                                <img src="/image/bank/rocket.jpg" alt="bkash" className='mx-auto' />
                                <h1>Rocket</h1>
                                <h2 className='py-2 hidden number'>{number.rocket}</h2>
                                <CopyToClipboard text={number.rocket}>
                                    <button onClick={copyNumber} className='bg-green-700 px-4 py-1 rounded text-gray-200 active:bg-green-500 hidden mx-auto'>
                                        {btnClick ? "copied" : "copy "}
                                    </button>
                                </CopyToClipboard>

                            </li>
                        </ul>

                    </div>
                </div>
                {/* ================= Steps =============*/}
                <div className='my-10 space-y-4'>
                    {/* Step 1 */}
                    <div className='shadow-md lg:w-2/4 w-5/6 mx-auto py-3 px-5 rounded '>
                        <div className='flex mt-4 mb-6 items-center'>
                            <h1 className='mx-4 bg-green-700 rounded-full text-white px-3 py-1 max-w-max'>2</h1>
                            <h1 className='text-green-700 lg:text-2xl text-md'>How to add Money</h1>
                        </div>
                        <h1 className='bg-green-700 text-white max-w-max px-4 py-1 rounded-full pt-1'>Step 01</h1>
                        <ul className='space-y-6 mt-6 lg:ml-6 lg:text-md text-sm'>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i> <h3>
                                    প্রথমে উপরে দেওয়া নাম্বার কপি করুণ
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i><h3>
                                    <b>(bKash,Nagad,Rocket)</b> App অথাবা Ussd কোডের মধ্যেমে
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i><h3>
                                    সেন্ড মানি অপশন সিলেক্ট করুণ।
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i>
                                <h3>
                                    এম্যাউন্ট অর্থাৎ কত টাকা যোগ করবেন তার পরিমাণ প্রবেশ করুণ।
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i>
                                <h3>
                                    রেফারেন্সে আপনার ইউজার আইডি প্রবেশ করুণ।
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i>
                                <h3>
                                    আপনার বিকাশ পিন নাম্বার প্রবেশ করুণ।
                                </h3>
                            </li>
                        </ul>

                    </div>
                    <div className='shadow-md lg:w-2/4 w-5/6 mx-auto py-3 px-5 rounded '>
                        <h1 className='bg-green-700 text-white max-w-max px-4 py-1 rounded-full pt-1'>Step 02</h1>
                        <ul className='space-y-6 mt-6 lg:ml-6 lg:text-md text-sm'>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i>
                                <h3>
                                    নিচে যে তিনটি বক্স দেখতে পারছেন প্রথম বক্স এ কত টাকা পাঠিয়েছেন সেটা লিখুন।
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i>
                                <h3>
                                    দ্বিতীয় বক্সে আপনি যে নাম্বার থেকে টাকা পাঠিয়েছেন সেই নাম্বারটি লিখুন।
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i><h3>
                                    তৃতীয় বক্সে TrxID লিখুন।
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i>
                                <h3>
                                    তারপর Add Money অপশনে ক্লিক করুণ।
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i><h3>
                                    পাঁচ থেকে দশ মিনিটের মধ্যে টাকা যোগ হয়ে যাবে আপনার ওয়ালেটে।
                                </h3>
                            </li>
                            <li className='flex items-center'>
                                <i class="fa-solid fa-arrow-right text-green-700 mr-2"></i><h3>
                                    অবশ্যই টাকা Send Money করার পর এই কাজটি করবেন।
                                </h3>
                            </li>
                        </ul>

                    </div>
                </div>

                {/* form */}
                <div className='mx-auto lg:w-2/4 w-5/6  shadow-md p-2'>
                    <div className='flex  items-center'>
                        <h1 className='mx-4 bg-green-700 rounded-full text-white px-3 py-1 max-w-max'>3</h1>
                        <h1 className='text-green-700 lg:text-2xl text-md'>Request Add Money</h1>
                    </div>
                    <form method='POST' onSubmit={AddMoney} className='border p-3 my-4 rounded-md space-y-4 '>
                        <div className='flex lg:space-x-4 lg:flex-row flex-col lg:space-y-0 space-y-4'>
                            <div>
                                <label className='block' htmlFor="Amount">Amount <span className='text-green-700'>*</span></label>
                                <input type="number" placeholder='Amount'
                                    name='amount'
                                    value={moneyData.amount}
                                    onChange={handleInput}
                                    autoComplete='off'
                                    className={`border lg:w-64 w-full px-1 mt-1 py-2 rounded outline-none focus:outline focus:outline-green-700 focus:text-green-700`} />
                            </div>
                            <div>
                                <label className='block' htmlFor="Number">Number <span className='text-green-700'>*</span></label>
                                <input type="number" placeholder='Number' autoComplete='off'
                                    name='number'
                                    value={moneyData.number}
                                    onChange={handleInput}
                                    className='border  lg:w-64 w-full  px-1 mt-1 py-2  rounded outline-none focus:outline focus:outline-green-700 focus:text-green-700' />
                            </div>
                        </div>
                        <div >
                            <label className='block' htmlFor="transition">Transition Id <span className='text-green-700'>*</span></label>
                            <input type="text" placeholder='Transition id'
                                name='transitionid'
                                autoComplete='off'
                                value={moneyData.transitionid}
                                onChange={handleInput}
                                className='border w-full  px-1 mt-1 py-2  rounded outline-none focus:outline focus:outline-green-700 focus:text-green-700' />
                        </div>
                        <button type='submit' className='w-full bg-green-700 text-gray-100 py-2 rounded-md hover:bg-indigo-600 active:bg-indigo-700'>Add Money</button>
                    </form>
                </div>
            </div>
        </>

    )

}

export default AddMoney