import { configureStore } from '@reduxjs/toolkit';
import {
  userReducer,ProfileReducer, subscriptionReducer
} from './reducers/userReducers';
import { courseReducer } from './reducers/courseReducer';
import { adminReducer } from './reducers/adminReducer';
import { otherReducer } from './reducers/otherReducer';
const store = configureStore({
  reducer: {
    user: userReducer,
    profile:ProfileReducer,
    courses:courseReducer,
    admin:adminReducer,
    other:otherReducer,
    subscription:subscriptionReducer
    
  },
});

export default store;
export const server="https://diamondcourse-16bc.onrender.com/api/v1";

