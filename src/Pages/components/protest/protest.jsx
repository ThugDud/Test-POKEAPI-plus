import { useState } from 'react'
import Styled from './protest.module.css'

function Protest(prop) {

    const [search, setSearch] = useState('')

    return (
        <>
            <div className={Styled.Container}>
                <h1> ANIMES POPULARES </h1>
                <input className={Styled.inputSRCH} type='search' placeholder='Pesquisa...' onChange={(e) => setSearch(e.target.value)} />
            </div>
        </>
    )
}

export default Protest
export var search