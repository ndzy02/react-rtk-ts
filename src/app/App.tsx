import React from 'react';
import AuthTest from '@/features/auths/Test';
import BreadcrumbsTest from '@/features/breadcrumbs/Test';
import { useMount } from 'ahooks';

const App: React.FC = () => {
  useMount(() => {
    //
  });

  return (
    <div className="App">
      <AuthTest />
      <br />
      <BreadcrumbsTest />
    </div>
  );
};

export default App;
