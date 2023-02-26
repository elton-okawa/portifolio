import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppState } from './store';
import { LoginResponse } from '@elton-okawa/types';

export interface AuthState {
  accessToken: string;
  logging: boolean;
  loggedIn: boolean;
  error: string;
}

const initialState: AuthState = {
  accessToken: '',
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
    },

    loginSuccessfully(state, action) {
      state.accessToken = action.payload.accessToken;
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${state.accessToken}`;
      state.logging = false;
      state.loggedIn = true;
    },

    loginFailed(state, action) {
      state.logging = false;
      state.error = action.payload;
    },
  },
});

export const { loginStarted, loginSuccessfully, loginFailed } =
  authSlice.actions;
export const selectAuthState = (state: AppState) => state.auth;
export default authSlice.reducer;

export const requestLogin =
  (username: string, password: string) => async (dispatch, getState) => {
    dispatch(loginStarted(null));
    try {
      const response = await axios.post<LoginResponse>('/api/auth/login', {
        username,
        password,
      });
      dispatch(loginSuccessfully(response.data));
    } catch (error) {
      console.error(error);
      dispatch(loginFailed(error.message));
    }
  };
