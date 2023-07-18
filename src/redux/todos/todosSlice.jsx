import { createSlice } from "@reduxjs/toolkit";

export const todosSlice = createSlice({
    name: 'todos',
    initialState:{
        items:[{
            id:"1",
            title:"learn react",
            completed: true
        },
        {
            id:"2",
            title:"learn redux",
            completed: false
        }],
    },
    reducers:{
        addTodo: (state, action)=>{
            state.items.push(action.payload)
        }
    },
});

export default todosSlice.reducer;
export const { addTodo} = todosSlice.actions;