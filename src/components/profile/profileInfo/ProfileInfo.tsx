import React from 'react';
import s from './ProfileInfo.module.css'
import {UserProfileType} from "../../../redux/store";
import {Status} from "../../status/Status";
import {Profile} from "../Profile";

export const ProfileInfo = (props: Profile) => {
    return (
        <div className={s.ProfileDescriptionWrap}>
            <div>
                <img src={'https://catherineasquithgallery.com/uploads/posts/2021-03/1614808179_190-p-fon-dlya-stroitelnogo-saita-237.jpg'}/>
            </div>
            <img src={props.profile.photos.large} style={{width: '150px', height: '150px'}}/>

            <div className={s.DescriptionBlock}>
                <hr/>
                <Status status={props.status} updateStatus={props.updateStatus} userId={props.profile.userId}/>
                <hr/>
                ava + description {props.profile.aboutMe}
            </div>
        </div>
    );
};

