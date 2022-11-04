import React from "react";
import PostItem from "./postItem.js";
import "./index.css"
import {useSelector} from "react-redux";
const PostList = () => {
    const posts = useSelector(state => state.posts);
    return (
    <div>
        <ul>
        {
            posts.map(post =>
                <PostItem
                    key={post._id}
                    post={post}/> )
        }
        </ul>

    </div>
);
}

export default PostList;