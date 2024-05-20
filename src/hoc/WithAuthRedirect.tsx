import React, {Component, ComponentClass} from 'react';
import {Navigate} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

export const WithAuthRedirect = (Children: any) => {

    const mapStateToProps = (state: AppStateType) => {
        return {
            isAuth: state.authReducer.isAuth
        }
    }
    class RedirectComponent extends React.Component<any, any>{
        render() {
            if(!this.props.isAuth){
                return <Navigate to={'/login'}/>
            }
            return <Children {...this.props}/>
        }
    }
    return connect(mapStateToProps)(RedirectComponent)
};

