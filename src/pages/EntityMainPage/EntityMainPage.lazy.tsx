import React, { lazy, Suspense } from 'react';

const LazyEntityMainPage = lazy(() => import('./EntityMainPage'));

const EntityMainPage = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEntityMainPage {...props} />
  </Suspense>
);

export default EntityMainPage;
