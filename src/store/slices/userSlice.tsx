import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    loggedIn: false,
    name: "",
    email: "",
    password: "",
  },
  reducers: {
    addUser: (state, action) => {
      state.loggedIn = true;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.loggedIn = false;
      state.name = "";
      state.email = "";
      state.password = "";
    },
  },
});

console.log(userSlice.actions);

export const { addUser, logout } = userSlice.actions;
export default userSlice.reducer;
