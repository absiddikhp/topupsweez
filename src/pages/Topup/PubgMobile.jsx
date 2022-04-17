import React from 'react'
import { GameTitle } from '../../components/topuppages/Headling'
import { MainBox } from '../../components/topuppages/MainBox'

const PubgMobile = () => {
    document.title = "sweez | Pubg Mobile"

    return (
        <>
            <MainBox>
                <GameTitle title={"Pubg Mobile"} />
            </MainBox>
        </>
    )
}

export default PubgMobile