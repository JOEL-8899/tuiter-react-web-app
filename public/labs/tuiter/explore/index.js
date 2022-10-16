import NavigationSidebar from "../NavigationSidebar/index.js";

import WhoToFollowList from "../WhoToFollowList/index.js";
function exploreComponent() {
    $('#wd-explore').append(`
   <div class="row mt-2">
        <div class="col-2 col-xl-2 wd-first-column">
      ${NavigationSidebar}
   </div>
   <div class="col-10 col-lg-6">
    <h3>ExploreComponent</h3>
   </div>
   <div class="d-none col-lg-4 col-xl-4 d-lg-block" >
<!--    <h3>WhoToFollowList </h3>-->
   ${WhoToFollowList}
    
    
   </div>
  </div>

   `);
}

$(exploreComponent);

