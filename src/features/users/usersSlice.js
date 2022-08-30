import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Andy" },
  { id: 2, name: "Paul" },
  { id: 3, name: "Test1" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
