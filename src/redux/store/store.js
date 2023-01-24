import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../state/CounterSlice";
import TodoSlice from "../state/TodoSlice";


export default configureStore({
    reducer:{
        counter:CounterSlice,
        todo:TodoSlice
    }
})

