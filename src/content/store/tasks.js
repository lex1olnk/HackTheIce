import { createSlice } from '@reduxjs/toolkit';
import { createStore } from 'redux'

export const dataSlice = createSlice({
  name: 'data',
  initialState: {
    display: 2,
    authVisible: false,
    authorized: false,
    number: null,
    level: -1,
  },
  reducers: {
    setDisplay: (state, action) => {
      state.move = action.payload
    },
    setAuthVisible: (state, action) => {
        state.authVisible = action.payload
    },
    setAuthorized: (state, action) => {
        state.authorized = action.payload.authorized
        state.number = action.payload.number
        state.level = action.payload.level
    },
  },
});

export const { setDisplay, setAuthVisible, setAuthorized } = dataSlice.actions;

export default dataSlice.reducer;