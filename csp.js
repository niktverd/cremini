const isDev = process.env.NODE_ENV === 'development';

const YOUTUBE = 'www.youtube.com';
const GOOGLE = 'www.google.com';
const anikiyevichm = 'anikiyevichm.github.io';
const ASSETS_STORAGE = [
    'https://storage.yandexcloud.net',
    'https://i.ibb.co/',
    'https://leonardo.osnova.io',
    'https://www.svgrepo.com',
    'https://www.google.com',
    'https://anikiyevichm.github.io',
];

const policiesConfig = {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", isDev ? "'unsafe-eval'" : ''],
    'script-src-elem': ["'self'", "'unsafe-inline'"],
    'style-src': ["'self'", "'unsafe-inline'"],
    'object-src': ["'self'", 'data:'],
    'style-src-elem': ["'self'", "'unsafe-inline'"],
    'style-src-attr': ["'self'", "'unsafe-inline'"],
    'img-src': ["'self'", ...ASSETS_STORAGE, 'data:'],
    'font-src': ["'self'"],
    'child-src': ["'self'", YOUTUBE],
    'frame-src': ["'self'", YOUTUBE],
    'child-src': ["'self'", GOOGLE],
    'frame-src': ["'self'", GOOGLE],
    'child-src': ["'self'", anikiyevichm],
    'frame-src': ["'self'", anikiyevichm],
    'frame-ancestors': ["'self'"],
    'connect-src': ["'self'"],
};

const getCSP = (config) =>
    Object.entries(config)
        .map(([name, values]) => {
            const policies = values.map((v) => (Array.isArray(v) ? v.join(' ') : v)).join(' ');

            return `${name} ${policies};`;
        })
        .join(' ');

module.exports = getCSP(policiesConfig);
