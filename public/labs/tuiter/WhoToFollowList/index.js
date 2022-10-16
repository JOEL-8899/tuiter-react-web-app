import WhoToFollowListItem from "../WhoToFollowList/WhoToFollowListITem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    console.log("Helloooo");
    return (`
    <ul class="list-group">
                <li class="list-group-item">
                    <span class="fw-bold">Who to follow</span>
                </li>
      ${who.map(item => {
        return WhoToFollowListItem(item);
    }).join('')
    }
    </ul>
`);
}

export default WhoToFollowList;