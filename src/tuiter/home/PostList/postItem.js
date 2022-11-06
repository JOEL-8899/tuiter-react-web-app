import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PostItem = ({
    post =
        {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "time": "2h",
            "image": "https://tinyurl.com/mrxttpxp",
            "liked": false,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars" },


                  }) => {
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
                    <span className="wd-threedots pt-1"></span>
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

                        <a href="#">
                            <span className="wd-likes wd-icon-item">&#x2665;</span>
                            <span className="wd-count">
                    {post.likes}
                </span></a>
                        <a href="#">
                            <span className="wd-share wd-icon-item" >&#x21EC;</span>
                            <span className="wd-count"></span>
                        </a>
                    </div>
                    <hr/>
                </div>
            </div>

        </li>
  );
}
export default PostItem;