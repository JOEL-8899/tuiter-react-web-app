import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks.js";
import TuitItem from "./tuit-item.js";

const TuitList = () =>{
    const {tuits, loading} = useSelector(
        (state) => state.tuitsData);
    const dispatch= useDispatch();
    useEffect(() =>{
        dispatch(findTuitsThunk());
    },[])
    return(
        <>
            <ul className="list-group">
                {
                    loading &&
                    <li className="list-group-item">
                        Loading.....
                    </li>
                }
                {tuits.map(tuit =>
                    <TuitItem post={tuit} key={tuit._id}/>
                )}
            </ul>
        </>
    );
}

export default TuitList;