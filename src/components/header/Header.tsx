import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {setAuthUserData} from "../../redux/auth-reducer";

export const Header = ({...props}) => {
    return (
        <header className={s.header}>
            <img
                src={'https://vignette.wikia.nocookie.net/heyarnold/images/5/50/Arnold_Pissed_Off.png/revision/latest?cb=20160620044736'}/>
            <div className={s.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>login</NavLink>}
            </div>
        </header>
    );
};

