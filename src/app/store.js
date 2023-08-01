import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { ADD_USER } from '../usersSlice';

const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  devTools: true,
  preloadedState: {
    users: {
      value: storedUsers,
    },
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('users', JSON.stringify(state.users.value));
});

export default store;
