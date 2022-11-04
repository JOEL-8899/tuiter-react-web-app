import {createSlice} from "@reduxjs/toolkit";
import initialPostList from "../home/PostList/post.json"
const postSlice = createSlice({
    name : "post",
    initialState : initialPostList
})

export default postSlice.reducer;