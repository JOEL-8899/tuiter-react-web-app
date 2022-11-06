import {createSlice} from "@reduxjs/toolkit";
import initialPostList from "../tuits/tuits.json"
const postSlice = createSlice({
    name : "post",
    initialState : initialPostList
})

export default postSlice.reducer;