import {useEffect, useState} from "react"
import s from './app.module.scss'


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
            <button className={s.button} onClick={onInc}>inc</button>
        </div>
    )
}