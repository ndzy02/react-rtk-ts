import { combineReducers } from '@reduxjs/toolkit';

import auther from '@/features/auths/authsSlice';
import breadcrumber from '@/features/breadcrumbs/breadcrumbsSlice';
import collapseder from '@/features/collapsed/collapsedSlice';
// 全局数据
const rootReducer = combineReducers({
  auths: auther,
  breadcrumbs: breadcrumber,
  collapsed: collapseder
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
