import {createSlice} from "@reduxjs/toolkit";
import profileObject from "./profile.json"
const profileSlice = createSlice(
    {
        name : 'profile',
        initialState : profileObject,
        reducers : {
            updateProfile(state, action) {
                return(action.payload);
            }
        }
    }
)

export const {updateProfile} = profileSlice.actions;

export default profileSlice.reducer;