import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { logGet } from './reportSlice';

export const getBoocks = createAsyncThunk(
  'boock/getBoocks',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:3009/books');
      const data = await response.json();

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addBoock = createAsyncThunk(
  'boock/addBoock',
  async (boockInfo, { rejectWithValue, getState, dispatch }) => {
    try {
      const {
        auth: { auth },
      } = getState();
      const res = await fetch('http://localhost:3009/books ', {
        method: 'post',
        body: JSON.stringify({ ...boockInfo, auth: auth }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      dispatch(
        logGet({ name: 'addBoocks', status: 'success', itemId: data.id })
      );
      return data;
    } catch (error) {
      dispatch(
        logGet({ name: 'addBoocks', status: 'failed', error: error.message })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const deleteBoock = createAsyncThunk(
  'boock/deleteBoock',
  async (boock, { rejectWithValue }) => {
    try {
      const res = await fetch(`http://localhost:3009/books/${boock.id}`, {
        method: 'DELETE',
      });
      return boock;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const boockSlice = createSlice({
  name: 'boock',
  initialState: { boocks: [], isLoading: false, error: null, boockInfo: null },
  reducers: {
    getBoockInfo(state, action) {
      state.boockInfo = state.boocks.filter(
        (boock) => boock.id === action.payload
      );
    },
  },
  extraReducers: {
    // getBoocks
    [getBoocks.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [getBoocks.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boocks = action.payload;
    },
    [getBoocks.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // addBoocks
    [addBoock.pending]: (state, action) => {
      state.isLoading = true;
      state.error = null;
    },
    [addBoock.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boocks.push(action.payload);
    },
    [addBoock.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    // delete boock
    [deleteBoock.pending]: (state, action) => {
      state.isLoading = true;
    },
    [deleteBoock.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.boocks = state.boocks.filter(
        (boock) => boock.id !== action.payload.id
      );
    },
    [deleteBoock.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export const { getBoockInfo } = boockSlice.actions;
export default boockSlice.reducer;
