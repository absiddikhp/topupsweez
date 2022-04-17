import React from 'react'
import { GameTitle } from '../../components/topuppages/Headling'
import { MainBox } from '../../components/topuppages/MainBox'

const CallOfDuty = () => {
    document.title = "sweez | Call of duty"
    return (
        <>
            <MainBox>
                <GameTitle title={"Call Of Duty"} />
            </MainBox>
        </>
    )
}

export default CallOfDuty