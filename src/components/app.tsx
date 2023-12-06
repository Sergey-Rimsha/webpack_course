import {useEffect, useState} from "react"

export const App = () => {

    const [state, setState] = useState<number>(0)

    const onInc = () => {
        setState(prevState => prevState + 1)
    }

    useEffect(() => {
        console.log(state)
    }, [state]);

    return (
        <div>
            Hello React world!!!
            <div>{state}</div>
            <button onClick={onInc}>inc</button>
        </div>
    )
}