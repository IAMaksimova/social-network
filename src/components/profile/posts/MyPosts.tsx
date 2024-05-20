import React, {ChangeEvent, useRef} from 'react';
import s from "./MyPosts.module.css";
import {Post} from "./Post";
import {PostsType} from "../../../redux/store";

type MyPostsPropsType = {
    posts: PostsType[]
    updateNewPostText: (newText: string) => void
    addPost: () => void
    newPostText: string
}


export const MyPosts = (props: MyPostsPropsType) => {
    let postsElements = props.posts.map(el => <Post message={el.message} likeCounter={el.likeCounter}/>)
    let newPostElement = useRef<HTMLTextAreaElement>(null)
    const onPostChange = () => {
        if (newPostElement && newPostElement.current) {
            const newText = newPostElement.current.value
            props.updateNewPostText(newText)
        }
    }

    const addPost = () => {
        props.addPost()
    }

    return (
        <div className={s.postsblock}>
            <h3>my posts</h3>
            <div>
                <div>
                    {/*почему textarea работает без атрибута value?*/}
                    <textarea value={props.newPostText} onChange={onPostChange} ref={newPostElement}/>
                </div>
                <div>
                    <button onClick={addPost}>Add</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

