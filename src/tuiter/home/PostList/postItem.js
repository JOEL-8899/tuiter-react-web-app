import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostItem = ({
    post =
        {
            "_id": 123,
            "userName": "NASA",
            "handle": "elonmusk",
            "avatarIcon": "nasa-logo.png",
            "time": "23h",
            "postHead": "Amazing show about a mission!",
            "title": "Countdown: Inspiration4 mission to space | Netflix Official Site",
            "description": "From training to launch to landing, this all-access docuseries rides along with the inpiration4 on the first all-civillian orbital space...",
            "image": "../explore/astronaut.jpg",
            "comments": "4.2K",
            "retweets": "3.5K",
            "likes": "37.5K",
            "repost":"40K"
        }
                  }) => {
    return (
        <li className="list-group-item">
            <div className="wd-bookmark-details">
                <img src={`${post.avatarIcon}`} className="wd-profile-pic"/>
                <div className="wd-bookmarks-username-dots">
                    <div className="wd-bookmark-top d-flex">
                        <h3> {post.userName} <span className="wd-check-icon me-1"><i className="fa fa-check-circle"></i></span><span className="wd-user-id-span">@{post.handle}<span
                            className="text-muted">
         - </span>{post.time}</span></h3>
                    </div>
                    <span className="wd-threedots pt-1">...</span>
                    <p className="wd-details-bookmark">{post.postHead}</p>
                    <div className="wd-bookmark-image-details d-block">
                        <img src={`${post.image}`} className="wd-bookmark-images"/>
                        <p className="wd-bookmark-image-description"><span
                            className="wd-image-desc-title">{post.title ? post.title : ""}</span>
                            <br/>{post.description ? post.description : ""}</p>
                    </div>
                    <div className="wd-icons">
                        <a href="#">
                            <span className="wd-comment wd-icon-item"><i className="fa  fa-comment me-1"></i></span>
                            <span className="wd-count">
                    {post.comments}
                </span></a>

                        <a href="#">
                            <span className="wd-retweet wd-icon-item">&#x21C5;</span>
                            <span className="wd-count">
                    {post.retweets}
                </span></a>

                        <a href="#">
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
export default PostItem;