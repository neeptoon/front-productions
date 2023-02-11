import { lazy } from 'react';

// eslint-disable-next-line no-return-await
export const AboutPageAsync = lazy(async () => await new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => { resolve(import('./AboutPage')); }, 1500);
}));
