import { combineReducers } from '@reduxjs/toolkit';

import auths from '@/features/auths/authsSlice';
import breadcrumbs from '@/features/breadcrumbs/breadcrumbsSlice';
import collapsed from '@/features/collapsed/collapsedSlice';
import openKeys from '@/features/openKeys/openKeysSlice';
import selectedKeys from '@/features/selectedKeys/selectedKeysSlice';
// 全局数据
const rootReducer = combineReducers({
  auths,
  breadcrumbs,
  collapsed,
  openKeys,
  selectedKeys
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
