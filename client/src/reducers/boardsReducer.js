import { createSlice } from '@reduxjs/toolkit'

const boardsInitialState = [];

const BoardsSlice = createSlice({
  name: 'boards',
  boardsInitialState,
  reducers: {
    increment(state) {
      state.value++
  },
}});

export const { increment } = BoardsSlice.actions

export const boardsReducer = (state = boardsInitialState, action) => state;
