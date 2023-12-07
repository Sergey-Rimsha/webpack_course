import {useEffect, useState} from "react"
import s from './app.module.scss'
import {Link, Outlet} from "react-router-dom";


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
            <div>
                navigate:
                <div>
                    <Link to={'/'}>link to main app</Link>
                </div>
                <div>
                    <Link to={'/about'}>link to about</Link>
                </div>
                <div>
                    <Link to={'/shop'}>link to shop</Link>
                </div>
            </div>
            <br/>
            <div>{state}</div>
            <button className={s.button} onClick={onInc}>inc</button>
            <div>
                <Outlet/>
            </div>
        </div>
    )
}