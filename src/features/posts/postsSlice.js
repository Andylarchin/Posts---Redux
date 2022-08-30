import {createSlice} from '@reduxjs/toolkit';


const initialState = [
    {id : 1, title : 'Sandy', content : 'some content'},
    {id : 2, title: 'Madny', content : 'another content'},
    {id : 3, title : 'Andy', content: 'future best dev'},
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers : {
        postAdded(state,action) {
           state.push(action.payload);
        }
    }
});

export const AllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;