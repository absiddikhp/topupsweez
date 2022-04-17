import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DivBox } from '../../components/topuppages/DivBox'
import { GameTitle, Headling } from '../../components/topuppages/Headling'
import { MainBox } from '../../components/topuppages/MainBox'
import { InputDiv } from './../../components/topuppages/InputDiv';
import { IngameFackApi } from './../../Apis/IngameFackApi';
import DaimondBox from '../../components/topuppages/DaimondBox';
import { DaimonSelected } from './../../hooks/DaimonSelected';

const FreeFireInGame = () => {
    document.title = "sweez | freefire"
    const [DaimondApi, setDaimondApi] = useState(IngameFackApi)
    DaimonSelected()
    return (

        <MainBox>
            < GameTitle title={"Free Fire ( INGAME )"} />
            <form>
                <DivBox>
                    <Headling index={1} text={"Free Fire account info"} />
                    <div className="p-2">
                        <div className='flex justify-between lg:flex-row flex-col '>
                            <div className=''>
                                <InputDiv>
                                    <label htmlFor="gmail">Facebook</label>
                                    <input type="text" name="facebook" id="facebook" placeholder='Facebook Username' className='p-2 outline-none  focus:bg-green-200 rounded-md' />
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="fb_password" id="password" placeholder='Facebook Password' className='p-2 outline-none focus:bg-green-200 rounded-md' />
                                </InputDiv>
                            </div>
                            <h1 className='flex items-center mx-auto lg:rotate-90 text-orange-500 '><hr className='w-10 mx-2' /> <span>OR</span> <hr className="w-10 mx-2" /> </h1>
                            <div>
                                <InputDiv>
                                    <label htmlFor="gmail">Gmail</label>
                                    <input type="text" name="gmail" id="gmail" placeholder='Gmail Account' className='p-2 outline-none focus:bg-green-200 rounded-md' />
                                </InputDiv>
                                <InputDiv>
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="gm_password" id="password" placeholder='Gmail Password' className='p-2 outline-none focus:bg-green-200 rounded-md' />
                                </InputDiv>
                            </div>


                        </div>
                    </div>
                </DivBox>

                {/* daimon box */}
                <DivBox>
                    <Headling index={2} text={"Select Recharge"} />
                    {/* Ingame Daimon Box */}
                    <div className='grid lg:grid-cols-2 gap-4 my-2'>
                        {
                            DaimondApi.map(({ id, daimond, price, offer, weekly, monthly, available }) => {
                                return (
                                    <DaimondBox key={id} id={id} daimond={daimond} price={price} offer={offer} text="Daimonds" weekly={weekly} monthly={monthly} available={available} />
                                )
                            })
                        }
                    </div>
                </DivBox>

                <DivBox>
                    <Headling index={3} text={"Select Payment Method"} />
                    <div className='bg-orange-500 px-4 py-3 rounded-lg'>
                        No Payment method found
                    </div>
                </DivBox>

                <div className='text-right mt-4 space-x-4'>
                    <Link to="/add-money" className="bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md p-2">
                        Add Money
                    </Link>
                    <button className="p-2 bg-orange-600 hover:bg-orange-700 transition-all  text-white rounded-lg shadow-md " type="submit">Buy Now</button>
                </div>

            </form>
        </MainBox >

    )
}

export default FreeFireInGame