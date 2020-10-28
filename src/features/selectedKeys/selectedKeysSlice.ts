import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/rootReducer';
// import { AppThunk } from '@/app/store';

const initialState: string[] = [];

export const selectedKeysSlice = createSlice({
  name: 'selectedKeys',
  initialState,
  reducers: {
    setSelectedKeys: (state, action: PayloadAction<string[]>) => action.payload,
    clearSelectedKeys: (state) => []
  }
});
export const { setSelectedKeys, clearSelectedKeys } = selectedKeysSlice.actions;
export const selectedKeys = (state: RootState) => state.selectedKeys;

export default selectedKeysSlice.reducer;
