import {Action, applyMiddleware, combineReducers, createStore, Store} from "redux";
import dialoguesReducer from "./dialogues-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import {ActionType, DialoguesPageType, ProfilePageType, SidebarTypes} from "./store";
import usersReducer, {UsersType} from "./users-reducer";
import authReducer, {AuthState} from "./auth-reducer";
import {thunk as thunkMiddleware} from "redux-thunk"

export type ReduxState = {
    profileReducer: ProfilePageType;
    dialoguesReducer: DialoguesPageType;
    sidebarReducer: SidebarTypes;
    usersReducer: UsersType[]
    authReducer: AuthState
}
export type ReduxStore = {
    store: Store<{ authReducer: AuthState; profileReducer: ProfilePageType; dialoguesReducer: DialoguesPageType; sidebarReducer: SidebarTypes; usersReducer: UsersType[]; }, ActionType, unknown>
}

//-----------------------------------------
let rootReducer = combineReducers({
    profileReducer,
    dialoguesReducer,
    sidebarReducer,
    usersReducer,
    authReducer
})


export type AppStateType = ReturnType <typeof rootReducer>

//исправить типизацию стора
// @ts-ignore
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store