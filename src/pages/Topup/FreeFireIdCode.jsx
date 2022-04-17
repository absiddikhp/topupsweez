import React, { useEffect, useState } from 'react'
import { GameTitle } from '../../components/topuppages/Headling';
import { MainBox } from './../../components/topuppages/MainBox';
import { Headling } from './../../components/topuppages/Headling';
import DaimondBox from '../../components/topuppages/DaimondBox';
import { FackDaimondApi } from '../../Apis/FackDaimonApi';
import { DivBox } from '../../components/topuppages/DivBox';
import { DaimonSelected } from '../../hooks/DaimonSelected';

const FreeFireIdCode = () => {
    document.title = "sweez | freefire"
    const [daimonList, setDaimonList] = useState(FackDaimondApi)
    // For Selecte Each Daimond Box
    DaimonSelected()

    return (
        <>
            <MainBox>
                <GameTitle title="Free Fire ( ID CODE )" />
                <form>
                    <DivBox className='mt-8 mb-3 shadow-md rounded-md py-3 lg:px-5 px-3'>
                        <Headling index={1} text="Account Info" />
                        <div className='flex flex-col'>
                            <label htmlFor="playerId">Player Id <span className='text-green-700'>*</span></label>
                            <input type="text" name="playerId" id="playerId" placeholder='Enter Player Id' autoComplete='off' className='border-2 px-3 py-2 my-1.5 rounded-md border-green-600 focus:border-green-800 outline-none' />
                        </div>
                    </DivBox>
                    <DivBox className='mt-8 mb-3 shadow-md rounded-md py-3 lg:px-5 px-3'>
                        <Headling index={2} text="Select Recharge" />
                        <div className='mainBox mt-4 mb-3 text-center grid lg:grid-cols-2 sm:grid-cols-2 gap-2 gap-y-5'>
                            {
                                daimonList.map(({ id, daimond, price, offer }) => {
                                    return (
                                        <DaimondBox key={id} id={id} daimond={daimond} price={price} offer={offer} text="Daimonds" />

                                    )
                                })
                            }
                        </div>
                    </DivBox>
                    <DivBox className='mt-8 mb-3 shadow-md rounded-md py-3 lg:px-5 px-3'>
                        <Headling index={3} text="Select Payment Method" />
                        <div className='my-4'>
                            <h1 className='bg-orange-500 p-4 rounded-lg w-max'>No Payment Mathod Found</h1>
                        </div>
                    </DivBox>
                    <div className=' my-4  p-4 space-x-3 text-right'>
                        <button className=' p-3 bg-gray-400 rounded-lg font-bold hover:bg-gray-600'>
                            Add Money
                        </button>
                        <button type='submit' className='p-3 bg-green-600 rounded-lg font-bold text-gray-100 shadow-md hover:bg-orange-600'>
                            Buy Now
                        </button>
                    </div>
                </form>
            </MainBox>
        </>
    )
}

export default FreeFireIdCode