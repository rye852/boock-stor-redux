import { createSlice } from '@reduxjs/toolkit';

const reportSlice = createSlice({
  name: 'report',
  initialState: { logs: [] },
  reducers: {
    logGet(state, action) {
      state.logs.push(action.payload);
    },
  },
});

export const { logGet } = reportSlice.actions;
export default reportSlice.reducer;
