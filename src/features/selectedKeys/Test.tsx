import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setSelectedKeys,
  clearSelectedKeys,
  selectedKeys as s
} from '@/features/selectedKeys/selectedKeysSlice';

import { useMount, useUpdateEffect } from 'ahooks';

export default function Test() {
  const selectedKeys = useSelector(s);
  const dispatch = useDispatch();

  useMount(() => {
    console.log(selectedKeys);
  });
  useUpdateEffect(() => {
    console.log(selectedKeys);
  }, [selectedKeys]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(setSelectedKeys(['111']));
        }}
      >
        <span>setSelectedKeys 测试</span>
      </button>
      <span style={{ display: 'inline-block', width: '5px' }}></span>

      <button
        onClick={() => {
          dispatch(clearSelectedKeys());
        }}
      >
        <span>clearSelectedKeys 测试</span>
      </button>
    </div>
  );
}
