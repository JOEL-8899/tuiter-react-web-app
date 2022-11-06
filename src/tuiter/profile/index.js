import {Link} from "react-router-dom";
import React from "react";
import "./profile.css";
import {useSelector} from "react-redux";

const ProfileComponent = () =>{
    const profile = useSelector(state => state.profile);
    return(
        <>
            <div className="d-flex flex-row">
                <div className="p-3">
                    <i className="fa fa-arrow-left"></i>
                </div>
                <div className="flex-fill">
                    <div className="fw-bold"> {profile.firstName} {profile.lastName}</div>
                    <div className="text-muted">{profile.tweets} Tweets</div>
                </div>
                </div>
            <div className="d-flex flex-row">
                <img src="https://tinyurl.com/33ha7z6j" className="w-100"/>
            </div>
            <div className="position-relative">
                <img src="https://tinyurl.com/3nbx97md" className="wd-profile-icon position-absolute"/>
                <div className="d-flex justify-content-end">
                <Link to = "/tuiter/edit-profile" className = "btn btn-secondary rounded-pill mt-3">Edit Profile</Link>
                </div>
            </div>
            <div className="d-flex flex-row">
                <div className="flex-fill">
                <div className="fw-bold"> {profile.firstName} {profile.lastName}</div>
                <div className="text-muted">{profile.handle}</div>
                <div >{profile.bio}</div>
                </div>
            </div>
            <div className="d-flex flex-row mt-1">
                <i className="fa fa-map-marker-alt text-muted"></i><span className="me-2"> {profile.location}</span>
                <i className="fa fa-baby text-muted ps-5"></i><span className="me-2" >Born {profile.dateOfBirth}</span>
                <i className="fa fa-calendar-minus text-muted ps-5"></i><span className="me-2">Joined {profile.dateJoined}</span>
            </div>
            <div className="d-flex flex-row">
                <p><span className="fw-bold">{profile.followingCount}</span> <span>Following</span> <span className="fw-bold ps-3">
                    {profile.followersCount}</span>
                    <span>Followers</span></p>
            </div>
        </>
    );
}

export default ProfileComponent;