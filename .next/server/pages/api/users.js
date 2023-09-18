"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 4938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fusers_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fusers_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./pages/api/users.ts
var users_namespaceObject = {};
__webpack_require__.r(users_namespaceObject);
__webpack_require__.d(users_namespaceObject, {
  "default": () => (users)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
;// CONCATENATED MODULE: external "@faker-js/faker"
const faker_namespaceObject = require("@faker-js/faker");
;// CONCATENATED MODULE: ./pages/api/users.ts

/* harmony default export */ const users = ((req, res)=>{
    const usersPerPage = 10;
    const page = parseInt(req.query.page) || 1;
    const startIndex = (page - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const users = [];
    const seed = page * 100;
    faker_namespaceObject.faker.seed(seed);
    for(let i = startIndex; i < endIndex; i++){
        if (i >= 0 && i < 50) {
            const user = {
                userId: i + 1,
                username: faker_namespaceObject.faker.internet.userName(),
                email: faker_namespaceObject.faker.internet.email(),
                password: faker_namespaceObject.faker.internet.password(),
                dob: faker_namespaceObject.faker.date.between("1980-01-01", "2000-12-31").toISOString().split("T")[0],
                assessmentSubmitted: faker_namespaceObject.faker.datatype.boolean(),
                picture: faker_namespaceObject.faker.image.url()
            };
            users.push(user);
        }
    }
    res.status(200).json(users);
});

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fusers&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fusers.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fusers_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fusers_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(users_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(users_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/users",
        pathname: "/api/users",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: users_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(4938)));
module.exports = __webpack_exports__;

})();