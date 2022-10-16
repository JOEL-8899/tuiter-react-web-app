import PostSummaryItem from "./PostSummaryItem.js";
import exploreItems from "./postSummary.js"
const PostSummaryList = () => {
    return (`
    <ul class="list-group ms-5">
      ${exploreItems.map(item => {
        return PostSummaryItem(item);
    }).join('')
    }
    </ul>
`);
}

export default PostSummaryList;