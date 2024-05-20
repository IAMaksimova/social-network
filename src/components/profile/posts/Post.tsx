import React from 'react';
import s from "./Post.module.css";
import {PostsType} from "../../../redux/store";

export const Post = (props: PostsType) => {
    return (
        <div>
            <div className={s.item}>
                <img src={'https://i.ytimg.com/vi/BmN_4K03D_I/maxresdefault.jpg'}/>
                {props.message}
                <div>
                    <span>LiKe</span> {props.likeCounter}
                </div>
            </div>
        </div>
    );
};

