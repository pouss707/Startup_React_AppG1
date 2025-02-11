import React, { useState } from 'react'

function CustomeConunter({ max, min, pas }) {
    const [counter, setCounter] = useState(min);
    // data ferching tool : fetch(endpoint)/axios() -> api  JSON 

    const increment = (e) => {
        e.preventDefault;
        if (counter >= max) return;
        setCounter(old => old + pas);
    }
    const decrement = (e) => {
        e.preventDefault
        if (counter <= min) return;
        setCounter(old => old - pas);
    }
    return (
        <>
            <button
                onClick={increment}
            > +
            </button>
            <span> {counter}</span>
            <button
                onClick={decrement}
            > -
            </button>
        </>
    )
}

export default CustomeConunter