import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userReducer";


const store = configureStore({
    reducer:{
        user: userReducer,
    }
})

store.subscribe(() => {
    localStorage.setItem("user", JSON.stringify(store.getState().user));
});


export default store;