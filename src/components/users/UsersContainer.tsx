import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/preloader/Preloader";
import {
    follow,
    setCurrentPage,

    unfollow, toggleFollowingProgress, getUsers
} from "../../redux/users-reducer";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

class UsersContainer extends React.Component<any, any> {
    componentDidMount() {
        // this.props.toggleIsFetching(true)
        // const currentPage = this.props.currentPage
        // const pageSize = this.props.pageSize
        // usersAPI.getUsers(currentPage, pageSize).then((data) => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        //     this.props.setTotalUsersCount(data.totalCount)
        // })
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        // this.props.setCurrentPage(pageNumber)
        // this.props.toggleIsFetching(true)
        //
        // const pageSize = this.props.pageSize
        // usersAPI.getUsers(pageNumber, pageSize).then((data) => {
        //     this.props.toggleIsFetching(false)
        //     this.props.setUsers(data.items)
        // })
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isFetching && <Preloader/>}
            <Users
                users={this.props.users}
                follow={this.props.follow}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                followingInProgress={this.props.followingInProgress}

            />
        </>
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersReducer.users,
        pageSize: state.usersReducer.pageSize,
        totalUsersCount: state.usersReducer.totalUsersCount,
        currentPage: state.usersReducer.currentPage,
        isFetching: state.usersReducer.isFetching,
        followingInProgress: state.usersReducer.followingInProgress
    }
}
// const mapDispatchToProps = (dispatch: (action: ActionType) => void) => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: UsersType[]) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (pageNumber: number) => {
//             dispatch(setCurrentPageAC(pageNumber))
//         },
//         setTotalCount: (totalCount: number) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching: boolean) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default compose(
    WithAuthRedirect,
    connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
}) )(UsersContainer)
