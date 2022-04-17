import React from 'react'

const PubgUcBox = ({ royalPass, uc, available, price, text, offer }) => {

    return (
        // <div>
        <div id='Daimond' className={`${available === false ? "cursor-not-allowed " : "daimonCard cursor-pointer"}  bg-grau-100  flex  px-3 pt-4 pb-6 rounded-lg shadow-lg border-2 border-white  shadow-gray-300 text-sm font-semibold text-gray-800`}>
            <div className='shadowIcon mr-4 mt-1 w-6 h-5 bg-slate-300 rounded-full'>
            </div>
            <div className="h-5 w-6 daimondIcon mr-4 text-xl fa-solid fa-circle-check text-orange-500 hidden "></div>
            <div className='w-full flex space-x-3 justify-between '>
                <h1>{uc ? uc : royalPass === "" ? "" : royalPass} {royalPass ? "" : offer ? `+ ${offer}` : ""} {royalPass ? "" : text}</h1>
                <h1 className='text-orange-500'>Tk {price}</h1>
            </div>
        </div>
        // </div>
    )
}

export default PubgUcBox