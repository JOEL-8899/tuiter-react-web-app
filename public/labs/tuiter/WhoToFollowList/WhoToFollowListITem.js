const WhoToFollowListItem = (item) => {
    return (`
     <li class="list-group-item">
                    <div class="d-flex">
                        <img src="../explore/${item.avatarIcon}" width="48" height="48"class="wd-round-img" />
                        <div class="flex-fill ps-1">
                            <p class="fw-bold">${item.userName} <i class="fa fa-check-circle"></i></p>
                            <p class=" wd-reduce-margin-top">@${item.handle}</p>
                        </div>
                        <button type="button" class="wd-follow-btn rounded-pill">Follow</button>
                    </div>
                </li>`
    );
}
export default WhoToFollowListItem;