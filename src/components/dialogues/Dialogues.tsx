import React, {ChangeEvent} from 'react';
import s from './Dialogues.module.css'
import {MessageItem} from "./messageItem/MessageItem";
import {DialogueItem} from "./dialogueItem/DialogueItem";
import {DialoguesPageType} from "../../redux/store";
import {Navigate} from "react-router-dom";

type Dialogues = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
    dialoguesPage: DialoguesPageType
    isAuth: boolean
}
export const Dialogues = (props: Dialogues) => {

    const state = props.dialoguesPage
    const dialoguesElements = state.dialogues.map(el => <DialogueItem key={el.id} name={el.name} id={el.id}/>)
    const messagesElements = state.messages.map(el => <MessageItem key={el.id} message={el.message}
                                                                   id={el.id}/>)
    const newMessageBody = state.newMessageBody

    const onSendMessageClick = () => {
        props.sendMessage()
    }
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    if(!props.isAuth){
        return <Navigate to={'/login'}/>
    }
    return (
        <div className={s.dialoguesWrap}>
            <div className={s.people}>
                {dialoguesElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange}
                                   value={newMessageBody}
                                   placeholder={'Enter your message'}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

