import {createSlice} from "@reduxjs/toolkit";
import {findTuitsThunk, updateTuitThunk}
    from "../services/tuits-thunks.js";
import {createTuitThunk, deleteTuitThunk} from "../services/tuits-thunks.js";
const initialState = {
    tuits: [],
    loading: false
}


const tuitsReducer = createSlice(
    {
        name: 'tuits',
        initialState: initialState,
        extraReducers: {
            [findTuitsThunk.pending]:
                (state) => {
                    state.loading = true
                    state.tuits = []
                },
            [findTuitsThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.tuits = payload
                },
            [findTuitsThunk.rejected]:
                (state) => {
                    state.loading = false
                },

            [deleteTuitThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.tuits = state.tuits
                        .filter(t => t._id !== payload)
                },
            [createTuitThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    state.tuits.push(payload)
                    state.tuits.map(t =>{console.log(t._id)})
                },

            [updateTuitThunk.fulfilled]:
                (state, {payload}) => {
                    state.loading = false
                    const tuitNdx = state.tuits
                        .findIndex((t) => t._id === payload._id)
                    state.tuits[tuitNdx] = {
                        ...state.tuits[tuitNdx],
                        ...payload
                    }
                },


        },

        reducers : {
            findAllTuits : (state, action) => {
                state.tuits = action.payload;
            }
        }
    }
)
export default tuitsReducer.reducer;