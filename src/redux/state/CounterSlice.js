import { createSlice } from "@reduxjs/toolkit";

 const counterSlice=createSlice({
    name:'counter',
    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value+=1;
        },
        decrement:(state)=>{
            if(state.value>0){
                state.value-=1
            }
           
        },
        addNumbers:(state,action)=>{
            state.value=state.value+parseInt(action.payload)
        }
    }

});

export const {increment,decrement,addNumbers} = counterSlice.actions;
export default counterSlice.reducer;

