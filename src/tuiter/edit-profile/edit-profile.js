import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./editProfile.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteTuit} from "../tuits/tuits-reducer";
import {updateProfile} from "../profile/profile-reducer";
const EditProfile = () =>{
    const profile = useSelector(state => state.profile);
    const [profileData, setProfile]  = useState(profile);
    const updateFirst = (e) =>{
            setProfile(profileD => {
                return {
                    ...profileD,
                    firstName: e.target.value,
                }
            });
    }
    const updateLast = (e) =>{
        setProfile(profileD => {
            return {
                ...profileD,
                lastName: e.target.value,
            }
        });
    }
    const updateBio = (e) =>{
        setProfile(profileD => {
            return {
                ...profileD,
                bio: e.target.value,
            }
        });
    }
    const updateLocation = (e) =>{
        setProfile(profileD => {
            return {
                ...profileD,
                location: e.target.value,
            }
        });
    }

    const updateDate = (e) =>{
        setProfile(profileD => {
            return {
                ...profileD,
                date: e.target.value,
            }
        });
    }
    const dispatch = useDispatch();

    const saveProfile = () => {
        dispatch(updateProfile(profileData));
    }
    return(

        <>
            <div className="wd-EditProfile">
        <div className="d-flex flex-row">
            <div className="p-3">
                <Link to = "/tuiter/profile">
                    <i className="fa fa-times text-secondary"></i>
                </Link>
            </div>
            <div className="d-flex flex-fill flex-row justify-content-between align-items-center">
            <h3 className="flex-fill">
                Edit Profile
            </h3>
                <button to = "/tuiter/editProfile" onClick={saveProfile} className = "btn btn-secondary rounded-pill">Save</button>
            </div>
        </div>
            <div className="d-flex flex-row">
                <img src="https://tinyurl.com/33ha7z6j" className="w-100"/>
            </div>
            <div className="position-relative">
                <div className="position-absolute wd-profile-icon">
                    <img src="https://tinyurl.com/3nbx97md" className="position-absolute"/>
                    <div className="position-absolute wd-img-overlay">
                        <i className="fa fa-camera text-white"></i>
                    </div>
                </div>

            </div>
            <div className="d-flex flex-row wd-name-edit">
            </div>
            <div className="customInput mt-5">
                <p className="text-muted m-0">First Name</p>
                <input type="text" onChange = {updateFirst}  className="wd-customInput wd-customInputName" value={profileData.firstName}/>
            </div>
                <div className="customInput mt-3">
                    <p className="text-muted m-0">Last Name</p>
                    <input type="text" onChange={updateLast} className="wd-customInput wd-customInputName" value={profileData.lastName}/>
                </div>
            <div className="customInput mt-3">
                <p className="text-muted m-0">Bio</p>
                <input type="text" onChange={updateBio} className="wd-customInput wd-customInputName" value={profileData.bio}/>
            </div>
            <div className="customInput mt-3">
                <p className="text-muted m-0">Location</p>
                <input type="text" onChange={updateLocation} className="wd-customInput wd-customInputName" value={profileData.location}/>
            </div>
            <div className="customInput mt-3">
                <p className="text-muted m-0">Website</p>
            </div>
            <div className="customInput mt-3">
                <p className="text-muted m-0">Birth date .<span><Link to="#" className = "wd-edit">Edit</Link></span></p>
                <input type="text" onChange={updateDate} className="wd-customInput wd-customInputName" value={profileData.dateOfBirth}/>
            </div>
            <div className=" mt-3">
                <p className="mb-5">Switch to professional</p>
            </div>
            </div>
            </>


    );
}
export default EditProfile;