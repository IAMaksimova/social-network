import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData, setAuthUserData} from "../../redux/auth-reducer";
import store, {AppStateType} from "../../redux/redux-store";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component<any, any> {

    componentDidMount() {
        // console.log(store.getState())

       // authAPI.me().then((response) => {
       //      if (response.data.resultCode === 0) {
       //          const {id, email, login } = response.data.data
       //          this.props.setAuthUserData(id, email, login)
       //      }
       //  })
        this.props.getAuthUserData()
    }


    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.authReducer.isAuth,
    login: state.authReducer.login
})
export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer)


