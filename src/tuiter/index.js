import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import {Route} from "react-router";
import {Routes} from "react-router";
import HomeComponent from "./home/home.js";
import tuitsReducer from "./tuits/tuits-reducer";
import whoReducer from "./reducers/who-reducer";
import profileReducer from "./profile/profile-reducer"
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import newReducer from "./reducers/tuits-list-reducer";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile/edit-profile";
import {updateProfile} from "./profile/profile-reducer";
const store = configureStore(
    {reducer: {who: whoReducer, tuits : tuitsReducer, posts : newReducer, profile : profileReducer}});

function Tuiter() {
    return (
        <Provider store={store}>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <Routes>

                    <Route index element={<HomeComponent/>}></Route>
                    <Route path="home"    element={<HomeComponent/>}/>
                    <Route path="profile" element={<ProfileComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                    <Route path="edit-profile" element={<EditProfile/>}/>

                </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
        </Provider>
    );
}

export default Tuiter