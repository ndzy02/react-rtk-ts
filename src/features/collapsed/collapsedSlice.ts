import {
  createSlice
  // PayloadAction
} from '@reduxjs/toolkit';
import { RootState } from '@/app/rootReducer';
// import { AppThunk } from '@/app/store';

const initialState: boolean = false;
export const collapsedSlice = createSlice({
  name: 'collapsed',
  initialState,
  reducers: {
    changeCollapsed: (state) => !state,
    clearCollapsed: (state) => false
  }
});
export const { changeCollapsed, clearCollapsed } = collapsedSlice.actions;
export const collapsed = (state: RootState) => state.collapsed;

export default collapsedSlice.reducer;
