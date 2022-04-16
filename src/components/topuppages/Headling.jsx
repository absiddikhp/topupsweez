import React from 'react'

export const Headling = ({ index, text }) => {
    return (
        <div className='flex items-center my-3'>
            <h1 className='mr-4 bg-green-700 rounded-full text-white px-3 py-1 max-w-max'>{index}</h1>
            <h1 className='text-green-700 lg:text-2xl text-md'>{text}</h1>
        </div>
    )
}

export const GameTitle = ({ title }) => {
    return (
        <h1 className='lg:text-3xl text-center my-2 bg-green-700 py-1.5 rounded text-white'>
            {title}
        </h1>
    )
}