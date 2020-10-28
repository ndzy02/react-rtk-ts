import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setOpenKeys,
  clearOpenKeys,
  openKeys as o
} from '@/features/openKeys/openKeysSlice';

import { useMount, useUpdateEffect } from 'ahooks';

export default function Test() {
  const openKeys = useSelector(o);
  const dispatch = useDispatch();

  useMount(() => {
    console.log(openKeys);
  });
  useUpdateEffect(() => {
    console.log(openKeys);
  }, [openKeys]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(setOpenKeys(['111']));
        }}
      >
        <span>setOpenKeys 测试</span>
      </button>
      <span style={{ display: 'inline-block', width: '5px' }}></span>

      <button
        onClick={() => {
          dispatch(clearOpenKeys());
        }}
      >
        <span>clearOpenKeys 测试</span>
      </button>
    </div>
  );
}
