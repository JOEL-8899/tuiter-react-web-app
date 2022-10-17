import NavigationSidebar from "../NavigationSidebar/index.js";
import PostList from "../PostList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";

function exploreComponent() {
    $('#wd-explore').append(`
    <div class="row">
        <div class="col-2 col-xl-2 wd-first-column">
        ${NavigationSidebar("home")}
      </div>
      <div class="col-10 col-lg-7 col-xl-6 wd-tech-list-last">
        ${PostList()}
      </div>
        <div class="d-none col-lg-4 col-xl-4 d-lg-block" >
        ${PostSummaryList()}
      </div>
    </div>
  `);
}
$(exploreComponent);

