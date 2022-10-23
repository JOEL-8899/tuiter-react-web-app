import posts from "./post.json"
import React from "react";
import PostItem from "./postItem.js";
const PostList = () => {
    return (
    <div>
      ${posts.map(item => {
        return PostItem(item);
    }).join('')
    }

    </div>
);
}

export default PostList;