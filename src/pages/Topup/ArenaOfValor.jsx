import React, { useState } from 'react'
import { GameTitle } from '../../components/topuppages/Headling'
import { MainBox } from '../../components/topuppages/MainBox'
import { DivBox } from './../../components/topuppages/DivBox';
import { Headling } from './../../components/topuppages/Headling';
import { InputDiv } from './../../components/topuppages/InputDiv';
import { Link } from 'react-router-dom';
import { DaimonSelected } from '../../hooks/DaimonSelected';
import { ArenaFackApi } from '../../Apis/ArenaFackApi';
import ArenaVoucherBox from '../../components/Card/ArenaVoucherBox';
import CallOfDutyBox from './../../components/Card/CallOfDutyBox';

const ArenaOfValor = () => {
    document.title = "sweez | Arena of Valor"
    const [VoucherApi, setVoucherApi] = useState(ArenaFackApi)
    DaimonSelected()
    return (
        <>
            <MainBox>
                <GameTitle title={"Arena of Valor"} />
                <form>
                    <DivBox>
                        <Headling index={1} text={"Arena of valor account info"} />
                        <div className="p-2">
                            <div className='flex justify-between lg:flex-row flex-col '>
                                <div className=''>
                                    <InputDiv>
                                        <label htmlFor="gmail">Facebook</label>
                                        <input type="text" name="facebook" id="facebook" placeholder='Facebook Username' className='p-2 outline-none  focus:bg-green-200 rounded-md' />
                                    </InputDiv>
                                    <InputDiv>
                                        <label htmlFor="facebookpassword">Password</label>
                                        <input type="password" name="fb_password" id="facebookpassword" placeholder='Facebook Password' className='p-2 outline-none focus:bg-green-200 rounded-md' />
                                    </InputDiv>
                                </div>
                                <h1 className='flex items-center mx-auto lg:rotate-90 text-orange-500 '><hr className='w-10 mx-2' /> <span>OR</span> <hr className="w-10 mx-2" /> </h1>
                                <div>
                                    <InputDiv>
                                        <label htmlFor="gmail">Gmail</label>
                                        <input type="text" name="gmail" id="gmail" placeholder='Gmail Account' className='p-2 outline-none focus:bg-green-200 rounded-md' />
                                    </InputDiv>
                                    <InputDiv>
                                        <label htmlFor="gmailpassword">Password</label>
                                        <input type="password" name="gm_password" id="gmailpassword" placeholder='Gmail Password' className='p-2 outline-none focus:bg-green-200 rounded-md' />
                                    </InputDiv>
                                </div>
                            </div>
                        </div>
                    </DivBox>
                    <DivBox>
                        <div className="flex lg:flex-row flex-col justify-between lg:space-y-0 space-y-3 space-x-2">
                            <div className='flex flex-col w-full'>
                                <label htmlFor="playerId">Name</label>
                                <input type="text" name="playerName" id="playerName" placeholder='Enter your name [ optional ]' autoComplete='off' className='border-2 px-3 py-2 my-1.5 rounded-md border-green-600 focus:border-green-800 outline-none ' />
                            </div>
                            <div className='flex flex-col w-full'>
                                <label htmlFor="playerId">Phone Number</label>
                                <input type="number" name="playerPhone" id="playerNumber" placeholder='Enter your Number [ optional ]' autoComplete='off' className='border-2 px-3 py-2 my-1.5 rounded-md border-green-600 focus:border-green-800 outline-none' />
                            </div>
                        </div>
                    </DivBox>
                    <DivBox>
                        <Headling index={3} text={"Select Payment Method"} />
                        <div className='bg-orange-500 px-4 py-3 rounded-lg'>
                            No Payment method found
                        </div>
                    </DivBox>
                    <DivBox>
                        <Headling index={2} text={"Select Recharge"} />
                        {/* Ingame Daimon Box */}
                        <div className='grid lg:grid-cols-2 gap-4 my-2'>
                            {
                                VoucherApi.map(({ id, voucher, price, available }) => {
                                    return (
                                        <ArenaVoucherBox key={id} voucher={voucher} price={price} available={available} text={"VOUCHER"} />
                                    )
                                })
                            }
                        </div>
                    </DivBox>
                    <div className='text-right mt-4 space-x-4'>
                        <Link to="/add-money" className="bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-md p-2">
                            Add Money
                        </Link>
                        <button className="p-2 bg-orange-600 hover:bg-orange-700 transition-all  text-white rounded-lg shadow-md " type="submit">Buy Now</button>
                    </div>

                </form>
            </MainBox>
        </>
    )
}

export default ArenaOfValor