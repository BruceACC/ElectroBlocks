
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  routes: [
  {
    "renderMode": 2,
    "route": "/https://BruceACC.github.io/ElectroBlocks"
  },
  {
    "renderMode": 2,
    "route": "/https://BruceACC.github.io/ElectroBlocks/new-section"
  }
],
  assets: new Map([
['index.csr.html', {size: 550, hash: '643b6575d1568bc84d8149fe57e6fc1bd132a5d7889426a3a36d66aaffceb5a3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)}], 
['index.server.html', {size: 1063, hash: '591bf53b409baa91f56d2bb5d991ff8f0ef16176b54acc8d6192a8ae053b2729', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)}], 
['index.html', {size: 2229, hash: 'a7a284b55c0870b8f3b78ecd33e5da2a36d30ee114ca1937a3a4d8f9c65a24bb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}], 
['new-section/index.html', {size: 2229, hash: 'a7a284b55c0870b8f3b78ecd33e5da2a36d30ee114ca1937a3a4d8f9c65a24bb', text: () => import('./assets-chunks/new-section_index_html.mjs').then(m => m.default)}], 
['styles-5INURTSO.css', {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}]
]),
  locale: undefined,
};
