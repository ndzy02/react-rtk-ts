import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  breadcrumbs,
  changeBreadcrumbs,
  resetBreadcrumbs,
  clearBreadcrumbs
} from '@/features/breadcrumbs/breadcrumbsSlice';
import { useMount, useUpdateEffect } from 'ahooks';

export default function Test() {
  const breadcrumbList = useSelector(breadcrumbs);
  const dispatch = useDispatch();

  useMount(() => {
    console.log(breadcrumbList);
  });
  useUpdateEffect(() => {
    console.log(breadcrumbList);
  }, [breadcrumbList]);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(changeBreadcrumbs({ path: '/test', name: 'test' }));
        }}
      >
        <span>changeBreadcrumbs 测试</span>
      </button>
      <span style={{ display: 'inline-block', width: '5px' }}></span>
      <button
        onClick={() => {
          dispatch(
            resetBreadcrumbs([
              { path: '/test1', name: 'test1' },
              { path: '/test2', name: 'test2' },
              { path: '/test3', name: 'test3' }
            ])
          );
        }}
      >
        <span>resetBreadcrumbs</span>
      </button>
      <span style={{ display: 'inline-block', width: '5px' }}></span>
      <button
        onClick={() => {
          dispatch(clearBreadcrumbs());
        }}
      >
        <span>clearBreadcrumbs 测试</span>
      </button>
    </div>
  );
}
