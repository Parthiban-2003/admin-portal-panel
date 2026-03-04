import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    users: JSON.parse(localStorage.getItem('users')) || []
};

const Slice = createSlice({
    name:'dashboard',
    initialState,
    reducers:{
        addUsers: (state,action)=>
        {
            state.users.push(action.payload);
            localStorage.setItem('users',JSON.stringify(state.users));
        },

        deleteusers: (state,action) =>
        {
            state.users = state.users.filter(item=>item !== action.payload);
            localStorage.setItem('users',localStorage.setItem(state.users));
        },

        updateUsers: (state, action) =>
        {
            const Index = state.users.find(item => item.id === action.payload.id);
            state.users[Index] = action.payload;
            localStorage.setItem('users',JSON.stringify(state.users));
        }
    }
});

export const {addUsers, deleteusers, updateUsers} = Slice.actions;
export default Slice.reducer;