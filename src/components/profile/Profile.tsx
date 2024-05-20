import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./posts/MyPostsContainer";
import {ReduxStore} from "../../redux/redux-store";
import {UserProfileType} from "../../redux/store";
import {Preloader} from "../common/preloader/Preloader";
import {Navigate} from "react-router-dom";
import {ChangeStatus} from "../../redux/profile-reducer";

export type Profile = { profile: UserProfileType } & ChangeStatus
export const Profile = (props: Profile) => {
    if (!props.profile) {
        return <Preloader/>
    }



    return (
        <div className={s.content}>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                userId={props.userId}
            />
            <MyPostsContainer/>
        </div>
    );
};

