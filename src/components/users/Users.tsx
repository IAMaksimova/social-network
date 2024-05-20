import React from 'react';
import s from "./styles.module.css";
import {UsersType} from "../../redux/users-reducer";
import userDefaultPhoto from "../../assets/userimage.png";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    unfollow: (userID: number) => void
    follow: (userID: number) => void
    onPageChanged: (pageNumber: number) => void
    followingInProgress: number[]

}
const Users = (props: UsersPropsType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = Array.from({length: pagesCount}, (_, i) => i + 1)

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span onClick={() => props.onPageChanged(p)}
                              className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                    )
                })}
            </div>
            {props.users.map((u: UsersType) => {
                return (
                    <div key={u.id}>
                        <span>
                             <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small === null ? userDefaultPhoto : u.photos.small}
                                 style={{width: '100px', height: '100px'}}/>
                        </NavLink>
                        <div>
                            {u.followed ?
                                // <button disabled={props.followingIsProgress.some(id => id === u.id)}
                                <button disabled={props.followingInProgress.some(id => u.id === id)}
                                    onClick={
                                    () => {
                                        props.unfollow(u.id)

                                        //  props.toggleFollowingProgress(true, u.id)
                                       // usersAPI.unfollow(u.id).then((response) => {
                                       //      if (response.data.resultCode === 0) {
                                       //          props.unfollow(u.id)
                                       //      }
                                       //      props.toggleFollowingProgress(false, u.id)
                                       //
                                       //  })
                                    }
                                }>unfollow</button>
                                :
                                // <button disabled={props.followingIsProgress.some(id => id === u.id)}
                                <button disabled={props.followingInProgress.some(id => u.id === id)}
                                    onClick={
                                    () => {
                                        props.follow(u.id)
                                        // props.toggleFollowingProgress(true, u.id)
                                        // axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        //     withCredentials: true,
                                        //     headers: {'API-KEY': '32011f67-7ebe-42e9-857e-25684b20e3fc'}
                                        // }).then((response) => {
                                        //     if (response.data.resultCode === 0) {
                                        //         props.follow(u.id)
                                        //     }
                                        //     props.toggleFollowingProgress(false, u.id)
                                        //
                                        // })
                                    }
                                }>follow</button>}
                        </div>
                        </span>

                        <span>
                            <span>
                            <div>{u.name}</div><div>{u.status}</div>
                        </span>
                            <span>
                                <div>u.location.country</div><div>u.location.city</div>
                            </span>
                        </span>

                    </div>
                )
            })}
        </div>
    );
};

export default Users;
