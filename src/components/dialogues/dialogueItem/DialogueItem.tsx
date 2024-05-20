import s from "../Dialogues.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {DialogueType} from "../../../redux/store";



export const DialogueItem = (props: DialogueType) => {
    let path = '/dialogues/' + props.id
    return(
        <div className={s.human}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}