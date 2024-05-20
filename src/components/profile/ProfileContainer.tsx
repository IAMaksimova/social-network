import React from 'react';
import {AppStateType, ReduxStore} from "../../redux/redux-store";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getStatus, getUserProfile, setUserProfile, updateStatus} from "../../redux/profile-reducer";
import {Navigate, useParams} from "react-router-dom";
import {usersAPI} from "../../api/api";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

export function withRouter(Children: typeof ProfileContainer) {

    return (props: any) => {
        const match = {params: useParams()};
        return <Children {...props} match={match}/>
    }
}

class ProfileContainer extends React.Component<any, any> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 30246
        }
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
        //     this.props.setUserProfile(response.data)
        // })
        // usersAPI.getProfile(userId).then((response) => {
        //         this.props.setUserProfile(response.data)
        //     })
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to={'/login'}/>
        }
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     userId={this.props.userId}
            />
        );
    }
}

const mapDispatchToProps = (state: AppStateType) => ({
    profile: state.profileReducer.profile,
    isAuth: state.authReducer.isAuth,
    status: state.profileReducer.status
})

export default compose(
    WithAuthRedirect,
    connect(mapDispatchToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)