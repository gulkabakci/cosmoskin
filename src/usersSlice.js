//usersSlice.js
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    ADD_USER: (state, action) => {
      return {
        ...state,
        value: [...state.value, action.payload],
      };
    },
    DELETE_USER: (state, action) => {
      state.value = state.value.filter((user) => user.username !== action.payload);
    },

  },
});

export const { ADD_USER,DELETE_USER } = usersSlice.actions;
export default usersSlice.reducer;
