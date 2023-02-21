import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppState } from './store';

export interface AuthState {
  logging: boolean;
  loggedIn: boolean;
  error: string;
}

const initialState: AuthState = {
  logging: false,
  loggedIn: false,
  error: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStarted(state, action) {
      state.logging = true;
      console.log('login');
    },

    loginSuccessfully(state, action) {
      state.logging = false;
      state.loggedIn = true;
    },

    loginFailed(state, action) {
      state.logging = false;
      state.error = 'Logging failed';
    },
  },
});

export const { loginStarted, loginSuccessfully, loginFailed } =
  authSlice.actions;
export const selectAuthState = (state: AppState) => state.auth.loggedIn;
export default authSlice.reducer;

export const requestLogin =
  (username: string, password: string) => async (dispatch, getState) => {
    dispatch(loginStarted(null));
    try {
      await axios.post('/auth/login', { username, password });
      dispatch(loginSuccessfully(null));
    } catch (error) {
      console.error(error);
      dispatch(loginFailed(null));
    }
  };
