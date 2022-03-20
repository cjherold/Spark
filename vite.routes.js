import { resolve } from 'path';

const routes = {
    main: resolve('/index.html'),
    guide: resolve('/guide.html'),
};

const pageData = {
    '/index': {
        title: 'Home Page',
    },
    '/guide': {
        title: 'Starting Guide',
    },
};

export { routes, pageData };
