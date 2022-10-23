import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
          <div class="d-flex">
            <div class="input-group d-flex">
                <div class="input-group-text wd-search-icon"><i class="fa fa-search"></i></div>
                <input type="text" class="wd-search-field flex-grow-1"  placeholder="Search Tuiter"/>
            </div>
                <a href="explore-settings.html" class="wd-settings-icon">
                    <span class="wd-settings-icon"><i class="fa fa-cog ps-3 pe-3"></i></span>
                </a>
            </div>
        <div class="wd-navigation-bar">
                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active pb-1"  href="#">For You</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div >
                <div >
                    <img src="starship.jpg" class="position-relative img-fluid mb-2" />
                    <h2 class="text-white position-absolute wd-img-labels">SpaceX's Starship</h2>
                </div>

        ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;

