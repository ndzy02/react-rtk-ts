import React from 'react';
import AuthTest from '@/features/auths/Test';
import BreadcrumbsTest from '@/features/breadcrumbs/Test';
import CollapsedTest from '@/features/collapsed/Test';
import { useMount } from 'ahooks';
import Clock from '@/components/clock';

const App: React.FC = () => {
  useMount(() => {
    //
  });

  return (
    <div className="App">
      <Clock />
      <br />
      <AuthTest />
      <br />
      <BreadcrumbsTest />
      <br />
      <CollapsedTest />
    </div>
  );
};

export default App;
