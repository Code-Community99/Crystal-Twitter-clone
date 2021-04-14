import { createSlice } from '@reduxjs/toolkit';

export const colourSlice = createSlice({
  name: 'colour',
  initialState: {
    colour: {
      colour: '#1da1f2',
      bg: '#ffffff',
      global_colour: '#000000'
    },
  },
  reducers: {
    makeDefaultColour: (state, action) => {
      state.colour.colour = action.payload
    },
    makeDefaultBgColour: (state, action) => {
      state.colour.bg = action.payload
    },
    makeDefaultGlobalColour: (state, action) => {
      state.colour.global_colour = action.payload
    }
  },
});

export const { makeDefaultColour, makeDefaultBgColour, makeDefaultGlobalColour } = colourSlice.actions;

export const selectColour = state => state.colour.colour

export default colourSlice.reducer;
