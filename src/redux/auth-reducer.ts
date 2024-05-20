import {ActionType, ProfilePageType} from "./store";
import * as fs from "fs";
import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA'


export type AuthState = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
const initialState: AuthState = {
    id: null,
    email: null,
    login: null,
    isAuth: false

}
const authReducer = (state: AuthState = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA : {
            return {
                ...state, ...action.payload, isAuth: true
            }
        }
        default: {
            return state
        }
    }
}
export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: SET_USER_DATA,
    payload: {id, email, login}
})
export const getAuthUserData = () => (dispatch: (action: ActionType) => void) => {
    authAPI.me().then((response) => {
        if (response.data.resultCode === 0) {
            const {id, email, login } = response.data.data
            dispatch(setAuthUserData(id, email, login))
        }
    })
}


export default authReducer