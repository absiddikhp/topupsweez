import React from 'react'

const Order = () => {
    document.title = "sweez | Order"
    return (
        <div className='my-10 p-2'>
            <button className='bg-green-700 hover:bg-green-600 active:bg-green-700 rounded-lg text-gray-200 py-2 px-5  p'>My Order</button>
            <div className='text-center my-4'>
                <i className="fa-solid fa-magnifying-glass text-7xl text-gray-200 my-2"></i>
                <p className='text-xl '>Sorry no order found right now</p>
            </div>
        </div>
    )
}
export default Order