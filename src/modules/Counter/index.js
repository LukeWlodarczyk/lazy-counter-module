import { lazy, Suspense } from 'react';

import Loader from './Loader/Loader';

const LazyCounter = lazy(() => import('./Counter'));

const LazyCounterModule = ({ loader = <Loader/>, defaultValue = 0, className = '' }) => (
  <Suspense fallback={loader}>
    <LazyCounter defaultValue={defaultValue} className={className} />
  </Suspense>
);

export default LazyCounterModule;
