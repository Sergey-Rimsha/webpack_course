import {useEffect, useState} from "react"
import s from './app.module.scss'
import {Link, Outlet} from "react-router-dom";
import avatarPng from '@/assets/avatar.png';
import avatarJpg from '@/assets/avatar.jpg';
import AvatarSvg from '@/assets/app-image.svg';

export const App = () => {

    const [state, setState] = useState<number>(0)

    const onInc = () => {
        setState(prevState => prevState + 1)
    }

    useEffect(() => {
        console.log(state)
    }, [state]);


    // if (__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    //
    // if (__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }

    return (
        <div>
            <div>
                <img src={avatarPng} alt="avatarPng"/>
                <img src={avatarJpg} alt="avatarPng"/>
            </div>
            <div>
                <AvatarSvg className={s.icon} width={55} height={55}/>
            </div>
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