import WhatsHappening from "./whats-happening";
import TuitList from "../tuits/tuit-list";
const HomeComponent = ()=>{
    return(
        <div className="wd-post-summary">
            <WhatsHappening/>
            <TuitList/>
        </div>
    );
}

export default HomeComponent;