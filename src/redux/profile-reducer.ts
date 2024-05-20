import {ActionType, ProfilePageType} from "./store";
import {profileAPI, usersAPI} from "../api/api";

export type ChangeStatus = {
    status: string
    updateStatus: (status: string) => void
    userId: number
}

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET_STATUS'

const initialState = {
    posts: [
        {message: 'hi, how are you?', likeCounter: 23},
        {message: 'its myfirst post', likeCounter: 23},
        {message: 'its second post', likeCounter: 237},
        {message: 'bugaga', likeCounter: 5}
    ],
    newPostText: '',
    profile: null,
    status: ''
}
const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {


    switch (action.type) {
        case ADD_POST : {
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likeCounter: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }
        case UPDATE_NEW_POST_TEXT : {
            const stateCopy = {...state}
            stateCopy.newPostText = action.payload
            return stateCopy

        }
        case SET_USER_PROFILE : {
            return {...state, profile: action.payload}
        }
            console.log('status:' + action.payload)
        case SET_STATUS : {
            return {...state, status: action.payload }
        }

        default: {
            return state
        }
    }
}
export const addPostActionCreator = () => ({
    type: ADD_POST,
    payload: ''

})
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    payload: text
})
export const setUserProfile = (userID: number) => ({
    type: SET_USER_PROFILE,
    payload: userID
})
export const setUserStatus = (status: string) => ({
    type: SET_STATUS,
    payload: status
})
export const getUserProfile = (userId: number) => (dispatch: (action: ActionType) => void) => {
    usersAPI.getProfile(userId).then((response) => {
        dispatch(setUserProfile(response.data))
    })
}

export const getStatus = (userId: number) => (dispatch: (action: ActionType) => void) => {
    profileAPI.getStatus(userId).then((response) => {
        dispatch(setUserStatus(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: (action: ActionType) => void) => {
    profileAPI.updateStatus(status).then((response) => {
        if(response.data.resultCode === 0){
            dispatch(setUserStatus(status))
        }
    })
}
export default profileReducer