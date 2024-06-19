import { lazy, Suspense } from 'react';

import Loader from './loader';

const LazyCounter = lazy(() => import('./Counter'));

const LazyCounterModule = ({ loader, defaultValue = 0 }) => (
  <Suspense fallback={loader ? loader : <Loader/>}>
    <LazyCounter defaultValue={defaultValue} />
  </Suspense>
);

export default LazyCounterModule;
