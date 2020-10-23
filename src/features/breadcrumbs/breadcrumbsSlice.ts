import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/app/rootReducer';
// import { AppThunk } from '@/app/store';

interface CustomBreadcrumbsState {
  path: string;
  name: string;
}
const initialState: CustomBreadcrumbsState[] = [];

export const breadcrumbsSlice = createSlice({
  name: 'breadcrumbs',
  initialState,
  reducers: {
    resetBreadcrumbs: (
      state,
      action: PayloadAction<CustomBreadcrumbsState[]>
    ) => action.payload,
    changeBreadcrumbs: (
      state,
      action: PayloadAction<CustomBreadcrumbsState>
    ) => {
      return [...state, action.payload];
    },
    clearBreadcrumbs: (state) => []
  }
});

export const {
  changeBreadcrumbs,
  resetBreadcrumbs,
  clearBreadcrumbs
} = breadcrumbsSlice.actions;

export const breadcrumbs = (state: RootState) => state.breadcrumbs;

export default breadcrumbsSlice.reducer;
