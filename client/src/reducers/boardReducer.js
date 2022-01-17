import { createSlice, PayloadAction } from '@reduxjs/toolkit'

Array.prototype.move = function (from, to) {
  this.splice(to, 0, this.splice(from, 1)[0]);
};

interface BoardState {
  logedin: boolean,
  name: string,
  avatar: string
}

let total = Math.floor(Math.random() * 9999);
let completed = (total-Math.floor(Math.random() * 999));
let pending = total-completed;

const boardInitialState = {
id: 1, 
name: "Test Board #"+Math.floor(Math.random() * 9999), 
status: "", 
canEdit: true,
total: total,
completed: completed,
pending: pending,
shared: false,
color: "#FAFAFA", 
icon: "", 
source: "", 
user_id: 1, 
created_at: "6/8/1988",
lanes: [
    {
        id: 'lane1',
        title: 'Todo',
        label: '2/2',
        cards: [
        {id: 'Card1', title: 'Write Blog', description: 'Can AI make memes', label: '30 mins', draggable: true},
        {id: 'Card2', title: 'Pay Rent', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
        ]
    },
    {
        id: 'lane2',
        title: 'Doing',
        label: '0/0',
        cards: []
    },
    {
        id: 'lane3',
        title: 'Done',
        label: '0/0',
        cards: [
        {id: 'Card3', title: 'Do something important', description: 'Cataloge my memes', label: '30 mins', draggable: true}
        ]
    }
    ]
};
const BoardSlice = createSlice({
  name: 'board',
  boardInitialState,
  reducers: {
    increment(state) {
      state.value++
  },
}});

export const { increment } = BoardSlice.actions

export const boardReducer = (state = boardInitialState, action) => {
  switch (action.type) {
    case 'MOVE_LANE':
      console.log(state);
      console.log(action.payload.addedIndex);
      console.log(action.payload.removedIndex);
      console.log(action.payload.payload);
      state.lanes.move(action.payload.addedIndex, action.payload.removedIndex)
      return state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
};
