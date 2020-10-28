import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/rootReducer';
// import { AppThunk } from '@/app/store';

const initialState: string[] = [];

export const openKeysSlice = createSlice({
  name: 'openKeys',
  initialState,
  reducers: {
    setOpenKeys: (state, action: PayloadAction<string[]>) => action.payload,
    clearOpenKeys: (state) => []
  }
});
export const { setOpenKeys, clearOpenKeys } = openKeysSlice.actions;
export const openKeys = (state: RootState) => state.openKeys;

export default openKeysSlice.reducer;
