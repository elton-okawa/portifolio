import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppState } from './store';
import { LoginResponse } from '@elton-okawa/types';

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
    },

    loginSuccessfully(state, action) {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${action.payload.accessToken}`;
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
export const selectAuthState = (state: AppState) => state.auth.loggedIn;
export default authSlice.reducer;

export const requestLogin =
  (username: string, password: string) => async (dispatch, getState) => {
    dispatch(loginStarted(null));
    try {
      const response = await axios.post<LoginResponse>('/auth/login', {
        username,
        password,
      });
      dispatch(loginSuccessfully(response.data));
    } catch (error) {
      console.error(error);
      dispatch(loginFailed(error.message));
    }
  };
