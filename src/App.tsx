import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import {ActionType} from "./redux/store";
import store, {ReduxState} from "./redux/redux-store";
import DialoguesContainer from "./components/dialogues/DialoguesContainer";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/header/HeaderContainer";
import Login from "./components/login/Login";
import ProfileContainer from "./components/profile/ProfileContainer";

export type AppPropsType = {
    state: ReduxState
    dispatch: (action: ActionType) => void
}

// function App(props: AppPropsType & ReduxStore) {
function App() {
    return (
            <div className="App">
                <HeaderContainer/>
                {/*<Navbar friends={props.state.sidebar.friends} menu={props.state.sidebar.menu}/>*/}
                {/*<Navbar friends={props.state.sidebarReducer.friends} menu={props.state.sidebarReducer.menu}/>*/}
                {/*<Navbar friends={store.getState().sidebarReducer?.friends} menu={store.getState().sidebarReducer?.menu}/>*/}
                <Navbar />
                {/*ЧТО ЭТО ТАКОЕ*/}
                <div className={"content-wrap"}>

                    <Routes>
                        {/*<Route element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch.bind(store)}/>}  path={'/profileInfo/*'}/>*/}
                        <Route element={<ProfileContainer/>}  path={'/profile/:userId?'}/>
                        {/*<Route element={<ProfileContainer/>}  path={'/profile'}/>*/}
                        <Route element={<DialoguesContainer/>} path={'/messages'}/>
                        <Route element={<UsersContainer/>} path={'/users'}/>
                        <Route element={<Login/>} path={'/login'}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
