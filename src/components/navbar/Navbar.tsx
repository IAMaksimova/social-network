import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import {PagesType, SidebarTypes} from "../../redux/store";
import {AppStateType} from "../../redux/redux-store";


export const Navbar = () => {

    // const mapNav = () => {
    //     props.menu.map(el =>  {
    //         return(
    //             <div ><NavLink to={el.path} className={({ isActive }) => isActive ? s.active : s.item}>{el.menuItem}</NavLink></div>
    //         )
    //     } )
    //}

    return (
        <nav className={s.nav}>
            <div ><NavLink to={'/profile'} className={({ isActive }) => isActive ? s.active : s.item}>profile</NavLink></div>
            <div ><NavLink to={'/messages'} className={({isActive}) => isActive ? s.active : s.item}>messages</NavLink></div>
            <div ><NavLink to={'/news'} className={({isActive}) => isActive ? s.active : s.item }>news</NavLink></div>
            <div ><NavLink to={'/music'} className={({isActive}) => isActive ? s.active : s.item }>music</NavLink></div>
            <div ><NavLink to={'/settings'} className={({isActive}) => isActive ? s.active : s.item }>settings</NavLink></div>
            <div ><NavLink to={'/users'} className={({isActive}) => isActive ? s.active : s.item }>users</NavLink></div>
        </nav>
    );
};

