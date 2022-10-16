import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
    <div class="row">
        <div class="col-2 col-xl-2 wd-first-column">
        ${NavigationSidebar('explore')}
      </div>
      <div class="col-10 col-lg-7 col-xl-6 wd-tech-list-last">
        ${ExploreComponent()}
      </div>
        <div class="d-none col-lg-4 col-xl-4 d-lg-block" >
        ${WhoToFollowList()}
      </div>
    </div>
  `);
}
const handleEventTarget = (event) => {
    const target = event.target;
    console.log(target);
    // $(target)
    //     .css('background-color', 'blue')
    //     .css('color', 'white');
}
const eventTarget = $(".list-group-item");
eventTarget.click(handleEventTarget);


$(exploreComponent);

