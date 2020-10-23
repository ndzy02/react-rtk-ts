import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { auths, setAuths, clearAuths } from '@/features/auths/authsSlice';
import { useMount, useUpdateEffect } from 'ahooks';

export default function Test() {
  const authsList = useSelector(auths);
  const dispatch = useDispatch();

  useMount(() => {
    console.log(authsList);
  });
  useUpdateEffect(() => {
    console.log(authsList);
  }, [authsList]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(setAuths([{ name: 'zhangyi' }]));
        }}
      >
        <span>setAuths 测试</span>
      </button>
      <span style={{ display: 'inline-block', width: '5px' }}></span>
      <button
        onClick={() => {
          dispatch(clearAuths());
        }}
      >
        <span>clearAuths 测试</span>
      </button>
    </div>
  );
}
