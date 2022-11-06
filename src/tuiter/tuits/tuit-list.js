import React from "react";
import TuitItem from "./tuit-item.js";
import "./index.css"
import {useSelector} from "react-redux";
const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    return (
        <div>
            <ul>
                {
                    tuits.map(post =>
                        <TuitItem
                            key={post._id}
                            post={post}/> )
                }
            </ul>

        </div>
    );
}

export default TuitList;