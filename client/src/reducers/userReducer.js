import { createSlice } from '@reduxjs/toolkit'

const userInitialState =  {
    logedin: false,
    name: "",
    avatar: ""
}

const userSlice = createSlice({
  name: 'user',
  userInitialState,
  reducers: {
    increment(state) {
      state.value++
  },
}});

export const { increment } = userSlice.actions
export const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};
