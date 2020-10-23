import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/rootReducer';
import { AppThunk } from '@/app/store';

interface CustomAuthsState {
  [key: string]: any;
}

const initialState: CustomAuthsState[] = [];

export const authersSlice = createSlice({
  name: 'auths',
  initialState,
  reducers: {
    setAuths: (state, action: PayloadAction<CustomAuthsState[]>) =>
      action.payload,
    clearAuths: (state) => []
  }
});

export const { setAuths, clearAuths } = authersSlice.actions;

// 异步
export const setAuthsAsync = (auths: CustomAuthsState[]): AppThunk => (
  dispatch
) => {
  setTimeout(() => {
    dispatch(setAuths(auths));
  }, 1000);
};

export const auths = (state: RootState) => state.auths;

export default authersSlice.reducer;
