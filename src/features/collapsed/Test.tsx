import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  changeCollapsed,
  clearCollapsed,
  collapsed as c
} from '@/features/collapsed/collapsedSlice';
import { useMount, useUpdateEffect } from 'ahooks';

export default function Test() {
  const collapsed = useSelector(c);
  const dispatch = useDispatch();

  useMount(() => {
    console.log(collapsed);
  });
  useUpdateEffect(() => {
    console.log(collapsed);
  }, [collapsed]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(changeCollapsed());
        }}
      >
        <span>changeCollapsed 测试</span>
      </button>
      <span style={{ display: 'inline-block', width: '5px' }}></span>

      <button
        onClick={() => {
          dispatch(clearCollapsed());
        }}
      >
        <span>clearCollapsed 测试</span>
      </button>
    </div>
  );
}
