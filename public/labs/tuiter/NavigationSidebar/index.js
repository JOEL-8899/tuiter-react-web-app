const NavigationSidebar = (active) => {
    return (`
    <div class="wd-first-column-items">
                <a href="#" class="list-group-item">
                    <i class="fa fa-t"></i>
                </a>
                <a href="../HomeScreen/index.html" class="list-group-item ${active=="home" ? "active":""}">
                    <i class="fa fa-home"></i> <span class="d-none d-xl-inline"> Home</span>
                </a>
                <a href="../explore/index.html" class="list-group-item ${active=="explore" ? "active":""}">
                    <i class="fa fa-hashtag"></i> <span class="d-xl-inline d-none "> Explore</span>
                </a>
                <a href="#" class="list-group-item ${active=="notification" ? "active":""}">
                    <i class="fa fa-bell"></i> <span class="d-xl-inline d-none "> Notifications</span>
                </a>
                <a href="#" class="list-group-item ${active=="messages" ? "active":""}">
                    <i class="fa fa-envelope"></i> <span class="d-none d-xl-inline"> Messages</span>
                </a>
                <a href="#" class="list-group-item ${active=="bookmarks" ? "active":""}">
                    <i class="fa fa-bookmark"></i> <span class=" d-xl-inline d-none"> Bookmarks</span>
                </a>
                <a href="#" class="list-group-item ${active=="lists" ? "active":""}">
                    <i class="fa fa-list"></i> <span class="d-none d-xl-inline"> Lists</span>
                </a>
                <a href="#" class="list-group-item ${active=="profile" ? "active":""}">
                    <i class="fa fa-user"></i> <span class="d-none d-xl-inline"> Profile</span>
                </a>
                <a href="#" class="list-group-item ${active=="more" ? "active":""}">
                    <i class="fa fa-ellipsis-h"></i> <span class="d-none d-xl-inline"> More</span>
                </a>
            </div>
            <div class="d-grid mt-2 d-block ">
                <button class="wd-tweet-btn rounded-pill" type="button">Tweet</button>
            </div>
  `);
}
export default NavigationSidebar;

