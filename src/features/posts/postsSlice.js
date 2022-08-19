import {createSlice} from '@reduxjs/toolkit';


const initialState = [
    {id : 1, title : 'Sandy', content : 'some content'},
    {id : 2, title: 'Madny', content : 'another content'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers : {}
});

export default postsSlice.reducer;
