import React from 'react'

export const MainBox = ({ children }) => {
    return (
        <div className=' lg:w-2/4 w-5/6 mx-auto lg:my-10 my-5 '>
            {children}
        </div>
    )
}
