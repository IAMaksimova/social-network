import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {ActionType, PagesType, StoreRootType} from "../../../redux/store";
import {AppStateType} from "../../../redux/redux-store";

// type MyPostsPropsType = {
//     posts: PostsType[]
//     dispatch: (action: ActionType) => void
// }

//
// export const MyPostsContainer = (props: ReduxStore) => {
//     let state = props.store.getState()
//     //onPostChange
//     const updateNewPostText = (newText: string) => {
//         let action = updateNewPostTextActionCreator(newText)
//         props.store.dispatch(action)
//     }
//
//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator())
//     }
//
//     return (
//         <MyPosts posts={state.profileReducer.posts}
//                  updateNewPostText={updateNewPostText}
//                  addPost={addPost}
//                  newPostText={state.profileReducer.newPostText}
//         />
//     );
// };

const mapStateToProps = (state: AppStateType) => {
    return {
        posts: state.profileReducer.posts,
        newPostText: state.profileReducer.newPostText
        // posts: store._state.profilePage.posts,
        // newPostText: store._state.profilePage.newPostText
    }
}

const mapToDispatchProps = (dispatch: (action: ActionType) => void) => {
    return {
        updateNewPostText: (newText: string) => {
            let action = updateNewPostTextActionCreator(newText)
            dispatch(action)
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapToDispatchProps)(MyPosts)

export default MyPostsContainer