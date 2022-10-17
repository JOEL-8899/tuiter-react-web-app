import posts from "./post.js"
import PostItem from "./postItem.js";
const PostList = () => {
    return (`
    <div class="pe-5 ps-2">
      ${posts.map(item => {
        return PostItem(item);
    }).join('')
    }
    </div>
`);
}

export default PostList;