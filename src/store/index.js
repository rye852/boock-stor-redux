import { configureStore } from '@reduxjs/toolkit';
import boocks from './boockSlice';
import auth from './authSlice';
import report from './reportSlice';
export default configureStore({
  reducer: {
    boocks,
    auth,
    report,
  },
});
