import React, {ChangeEvent, useState} from 'react';
import {Simulate} from "react-dom/test-utils";
import {ChangeStatus} from "../../redux/profile-reducer";

type StatusState = {
    status: string
    editMode: boolean
}
export const Status = (props: ChangeStatus) => {

    const [currentStatus, setStatus] = useState<StatusState>({status: props.status, editMode: false})

    const changeCurrentStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus({status: e.currentTarget.value, editMode: true})
    }
    const deactivateEditeMode = () => {
        setStatus({...currentStatus, editMode: false})
        props.updateStatus(currentStatus.status)
    }

    const activateEditeMode =() => {
        props.userId === 30246 && setStatus({...currentStatus, editMode: true})

    }

    return (
        currentStatus.editMode ?
            <input autoFocus onChange={changeCurrentStatus} value={currentStatus.status} onBlur={deactivateEditeMode}/> :
            <span onDoubleClick={activateEditeMode}>{props.status ? props.status : 'NONONO'}</span>
    );
};

