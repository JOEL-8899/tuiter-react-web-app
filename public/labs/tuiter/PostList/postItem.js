const PostItem = (item) => {
    return (`
    <div class="wd-bookmark-details">
        <img src="${item.avatarIcon}" class="wd-profile-pic"/>
    <div class="wd-bookmarks-username-dots">
    <div class="wd-bookmark-top" style="display: flex">
        <h3> ${item.userName} <span class="wd-user-id-span">@${item.handle}<span class="text-muted">
         - </span>${item.time}</span></h3>
                 </div>
        <span class="wd-threedots">...</span>
        <p class="wd-details-bookmark">${item.postHead}</p>
        <div class="wd-bookmark-image-details">
            <img src="${item.image}" class="wd-bookmark-images"/>           
            <p class="wd-bookmark-image-description"><span class="wd-image-desc-title">${item.title ? item.title : ""}</span>
                <br/>${item.description ? item.description : ""}</p>
        </div>
        <hr/>
      </div>


</div>
  `);
}
export default PostItem;