import { configureStore } from '@reduxjs/toolkit';
import userReducer from './../features/profile/UserSlice';
import sidebarReducer from './../features/globals/sidebarSlice';
import colourReducer from './../features/display/DisplaySlice';

// Import all reducers here to add to the store
export default configureStore({
  reducer: {
    user: userReducer,
    activesidebarlink: sidebarReducer,
    colour: colourReducer,
  },
});
