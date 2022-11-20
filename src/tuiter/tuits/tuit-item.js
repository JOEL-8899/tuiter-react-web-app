import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks.js";
import "./index.css"
const TuitItem = ({
                      post =
                          {
                              "_id": 123,
                              "userName": "NASA",
                              "handle": "elonmusk",
                              "avatarIcon": "https://tinyurl.com/5n8nzvrm",
                              "time": "23h",
                              "tuit": "Amazing show about a mission!",
                              "title": "Countdown: Inspiration4 mission to space | Netflix Official Site",
                              "description": "From training to launch to landing, this all-access docuseries rides along with the inpiration4 on the first all-civillian orbital space...",
                              "image": "../explore/astronaut.jpg",
                              "replies": 4.2,
                              "retweets": 3.5,
                              "likes": 37.5,
                              "liked" : true,
                              "repost":"40K"
                          }
                  }) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    const incLikeTuitHandler = (post) => {
        dispatch(updateTuitThunk({...post, likes : post.likes+1}));
    }


    return (

        <li className="list-group-item">
            <div className="wd-bookmark-details">
                <img src={`${post.image}`} className="wd-profile-pic"/>
                <div className="wd-bookmarks-username-dots">
                    <div className="wd-bookmark-top d-flex">
                        <h3> {post.userName} <span className="wd-check-icon me-1"><i className="fa fa-check-circle"></i></span><span className="wd-user-id-span">{post.handle}<span
                            className="text-muted">
         - </span>{post.time}</span></h3>
                    </div>
                    <span className="wd-threedots pt-1"><i className="fa fa-times"
                                                           onClick={() => deleteTuitHandler(post._id)}></i></span>
                    <p className="wd-details-bookmark">{post.tuit}</p>
                    <div className="wd-icons">
                        <a href="#">
                            <span className="wd-comment wd-icon-item"><i className="fa  fa-comment me-1"></i></span>
                            <span className="wd-count">
                    {post.replies}
                </span></a>

                        <a href="#">
                            <span className="wd-retweet wd-icon-item">&#x21C5;</span>
                            <span className="wd-count">
                    {post.retuits}
                </span></a>

                        <a href="#" onClick={()=> incLikeTuitHandler(post)}>
                            <span className="wd-likes wd-icon-item">&#x2665;</span>
                            <span className="wd-count">
                    {post.likes}
                </span></a>
                        <a href="#">
                            <span className="wd-share wd-icon-item">&#x21EC;</span>
                            <span className="wd-count">{post.repost}</span>
                        </a>
                    </div>
                    <hr/>
                </div>
            </div>

        </li>
    );
}
export default TuitItem;