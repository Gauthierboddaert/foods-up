import { createAction, createReducer } from "@reduxjs/toolkit";
import User from "../../profil/type/User";

export const setUser = createAction<User>('setUser'); // Ajouter un objet avec une propriété 'user'

const userReducer = createReducer<User | null>(null, (builder) => {
  builder
    .addCase(setUser, (state, action) => {
      const user: User = action.payload

      return user ;
    });
});

export default userReducer;

export type UserState = ReturnType<typeof userReducer>;
