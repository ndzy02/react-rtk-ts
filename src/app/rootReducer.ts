import { combineReducers } from '@reduxjs/toolkit';

import auther from '@/features/auths/authsSlice';
import breadcrumber from '@/features/breadcrumbs/breadcrumbsSlice';
// 全局数据
const rootReducer = combineReducers({
  auths: auther,
  breadcrumbs: breadcrumber
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
