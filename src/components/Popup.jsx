import React from 'react'

const Popup = () => {
    const hide = () => {
        const popup = document.querySelector(".popup")
        popup.style.display = "none"
    }
    return (
        <div className='popup'>
            <button onClick={hide}>x</button>
            <h1>hello</h1>
            <button>Order</button>
        </div>
    )
}

export default Popup