// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-home-js": () => import("./../../../src/pages/home.js" /* webpackChunkName: "component---src-pages-home-js" */),
  "component---src-pages-menu-js": () => import("./../../../src/pages/menu.js" /* webpackChunkName: "component---src-pages-menu-js" */)
}

