import s from "./Message.module.css";
import React from "react";
import {MessagesType} from "../../../redux/store";


export const MessageItem = (props: MessagesType) => {
    return(
        <div className={s.message}>
            {props.message}
            </div>
    )
};