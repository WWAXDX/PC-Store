
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/PC-Store/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Program%20Files/Git/PC-Store/home",
    "route": "/Program%20Files/Git/PC-Store"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-UWWHBHLI.js"
    ],
    "route": "/Program%20Files/Git/PC-Store/home"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 576, hash: '9568e655db61bb45bc9885ab2efc1e4cba13d119e23346a0b15f3ec2febcae5e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1089, hash: '603282374a05b9039249f05633ccbecebba66621c932ec782764a707f2c4c506', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
