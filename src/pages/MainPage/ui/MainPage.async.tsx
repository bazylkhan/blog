import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-expect-error: временное решение
    setTimeout(() => resolve(import('./MainPage')), 1500)
}));
