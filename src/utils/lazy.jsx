import React, { Suspense } from 'react';

const fallBackLoading = () => <div>loading...</div>;

const LazyComponent = (component) => {
    const LazyComponent = React.lazy(component);
    return () => (
        <Suspense fallback={ fallBackLoading() }>
        <LazyComponent/>
    </Suspense>
    )
}
export default LazyComponent;
