import { createAction, createReducer } from "@reduxjs/toolkit";
import User from "../../profil/type/User";

export const setUser = createAction<User>('setUser'); 

const userReducer = createReducer<User | null>(null, (builder) => {
  builder
    .addCase(setUser, (_state, action) => {
      return action.payload ;
    });
});

export default userReducer;

