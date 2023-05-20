import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const

const authSlice = createSlice({
  name: 'auth',
  initialState: { auth: 'unknown', isLogin: false },
  reducers: {
    logInOut(state) {
      state.isLogin = !state.isLogin;
      if (state.isLogin) {
        state.auth = 'Mohammed';
      } else {
        state.auth = 'unknown';
      }
    },
  },
});
export const { logInOut } = authSlice.actions;
export default authSlice.reducer;
