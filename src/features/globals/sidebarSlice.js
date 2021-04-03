import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
  name: 'activesidebarlink',
  initialState: {
    activesidebarlink: './',
  },
  reducers: {
    activateLink: (state, action) => {
      state.activesidebarlink = action.payload
    },
    deactivateLink: (state, action) => {
      state.activesidebarlink = './';
    }
  },
});

export const { activateLink, deactivateLink } = sidebarSlice.actions;

export const selectActiveSidebarLink = state => state.activesidebarlink.activesidebarlink

export default sidebarSlice.reducer;
