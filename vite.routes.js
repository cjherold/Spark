import { resolve } from 'path';

const routes = {
    main: resolve('/index.html'),
    about: resolve('/about.html'),
};

const pageData = {
    '/index': {
        title: 'Home Page',
    },
    '/about': {
        title: 'About Page',
    },
};

export { routes, pageData };
