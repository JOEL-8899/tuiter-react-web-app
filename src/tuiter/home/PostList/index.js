import posts from "./post.json"
import React from "react";
import PostItem from "./postItem.js";
import "./index.css"
const PostList = () => {
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