import {ActionType, ProfilePageType} from "./store";
import * as fs from "fs";
import {usersAPI} from "../api/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS '


export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    photos: { small: string, large: string }

}

type UsersStateType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}
const initialState = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state: UsersStateType = initialState, action: ActionType) => {


    switch (action.type) {
        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(u => (u.id === action.payload ? {...u, followed: true} : u))
            }
        }
        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map(u => (u.id === action.payload ? {...u, followed: false} : u))
            }
        }
        case SET_USERS : {
            return {
                ...state, users: action.payload
            }
        }
        case SET_CURRENT_PAGE : {
            return {
                ...state, currentPage: action.payload
            }
        }
        case SET_TOTAL_USERS_COUNT : {
            return {
                ...state, totalUsersCount: action.payload
            }
        }
        case TOGGLE_IS_FETCHING : {
            return {
                ...state, isFetching: action.payload
            }
        }

        case TOGGLE_IS_FOLLOWING_PROGRESS : {
            return {
                ...state,
                followingInProgress: action.payload.isFetching ? [...state.followingInProgress, action.payload.userId] : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        }
        default: {
            return state
        }
    }
}
export const followSuccess = (userID: number) => ({
    type: FOLLOW,
    payload: userID

})
export const unfollowSuccess = (userID: number) => ({
    type: UNFOLLOW,
    payload: userID

})
export const setUsers = (users: UsersType[]) => ({
    type: SET_USERS,
    payload: users
})
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    payload: currentPage
})
export const setTotalUsersCount = (totalCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    payload: totalCount
})
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
})
export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    payload: {isFetching, userId}
})
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: (action: ActionType) => void) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((data) => {
            dispatch(setCurrentPage(currentPage))
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId: number) => {
    return (dispatch: (action: ActionType) => void) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.follow(userId).then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}

export const unfollow = (userId: number) => {
    return (dispatch: (action: ActionType) => void) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId).then((response) => {
            console.log(response)
            if (response.data.resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggleFollowingProgress(false, userId))
        })
    }
}
export default usersReducer