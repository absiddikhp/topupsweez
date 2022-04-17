import React from 'react'
import { MainBox } from "../../components/topuppages/MainBox"
import { GameTitle } from "../../components/topuppages/Headling"
const ArenaOfValor = () => {
    document.title = "sweez | Arena of valor"

    return (
        <MainBox>
            <GameTitle title="Arena Of Valor" />
        </MainBox>
    )
}

export default ArenaOfValor