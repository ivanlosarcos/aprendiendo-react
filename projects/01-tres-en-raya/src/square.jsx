import { useState } from "react"

export function Square({initialState = 'neutral'}) {

    const [state, setState] = useState(initialState)

    const toggleState = () => {
        if (state == 'neutral') {
            setState('player-x')
        }

        else if (state =='player-x') {
            setState('player-o')
        }

        else {
            setState('player-x')
        }
    }

    const texto = state == 'neutral' ? " " : state == 'player-x' ? 'X' : 'O'

    return (
        <button className='square-button' onClick={toggleState}>
            {texto}
        </button>
    )
}