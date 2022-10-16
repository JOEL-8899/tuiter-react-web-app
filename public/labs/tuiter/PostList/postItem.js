const PostItem = (item) => {
    return (`
    <div class="wd-bookmark-details me-3 mt-0">
        <img src="${item.avatarIcon}" class="wd-profile-pic"/>
    <div class="wd-bookmarks-username-dots">
    <div class="wd-bookmark-top" style="display: flex">
        <h3> ${item.userName} <span class="wd-user-id-span">@${item.handle}<span class="text-muted">
         - </span>${item.time}</span></h3>
                 </div>
        <span class="wd-threedots">...</span>
        <p class="wd-details-bookmark">${item.postHead}</p>
        <div class="wd-bookmark-image-details d-block">
            <img src="${item.image}" class="wd-bookmark-images"/>           
            <p class="wd-bookmark-image-description"><span class="wd-image-desc-title">${item.title ? item.title : ""}</span>
                <br/>${item.description ? item.description : ""}</p>
        </div>
        <div class="wd-icons">
        <a href="#" >
        <span class="wd-comment wd-icon-item">&#x1F4AC;</span>
        <span class="wd-count" >
                    ${item.comments}
                </span></a>
               
                <a href="#" >
        <span class="wd-retweet wd-icon-item">&#x21C5;</span>
        <span class="wd-count">
                    ${item.retweets}
                </span></a>
                
                <a href="#" >
        <span class="wd-likes wd-icon-item">&#x2665</span>
        <span class="wd-count">
                    ${item.likes}
                </span></a>
                
                 <a href="#">
        <span class="wd-share wd-icon-item">&#x21EC;</span>
      </a>
        
     </div>
        <hr/>
      </div>


</div>
  `);
}
export default PostItem;