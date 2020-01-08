function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\n  <div class=\"row\">\n    <div class=\"col-md-auto\">\n        <div class=\"card text-white  mb-3\" style=\"max-width: 18rem;\">\n            <div class=\"card-header bg-success\">Total orders of the day</div>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">3 Orders</h5>\n              <p class=\"card-text\">Total products: 15 </p>\n            </div>\n          </div>\n        <div class=\"card text-white  mb-3\"  style=\"max-width: 18rem;\">\n            <div class=\"card-header bg-warning\">Total orders of the month</div>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">30 Orders</h5>\n              <p class=\"card-text\">Total products: 150 </p>\n            </div>\n          </div>\n      <div class=\"card text-white  mb-3\" style=\"max-width: 18rem;\" >\n          <div class=\"card-header bg-info\">Revenue</div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">10,000,000 đ</h5>\n            <p class=\"card-text\">by 8/10 of the previous month's revenue</p>\n          </div>\n        </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"chart\">\n        <!-- <div class=\"bg\"></div> -->\n        <div class=\"card\">\n          <div [chart]=\"chart\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-product/detail-product.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detail-product/detail-product.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailProductDetailProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container card\">\n  <div class=\"row py-5 \">\n    <div class=\"col-4\">\n      <div>\n        <img [src]=\"product?.image\" class=\"img-fluid img-thumbnail\" alt=\"avatar\">\n      </div>\n      <div class=\"custom-file\" *ngIf=\"!isReadonly\">\n        <input type=\"file\" class=\"text-center center-block file-upload\" id=\"inputGroupFile01\" >\n        <label class=\"custom-file-label\" for=\"inputGroupFile01\">Choose file</label>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div>\n        <input type =\"text\" class=\"form-control w-25\" [value]=\"product.name\" [readonly]=\"isReadonly\">\n      </div>\n      <div><input class=\"btn btn-warning w-25\" [value]=\"product.price|currency\" [readonly]=\"isReadonly\">\n        <div class=\"row\">\n          <div class=\"col-2 py-3\">Description</div>\n          <div class=\"col-8\">\n            <div class=\"form-group\">\n              <textarea class=\"form-control\"aria-label=\"With textarea\"\n                [readonly]=\"isReadonly\">{{product.description}}</textarea>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-2 py-2\">Create at</div>\n          <div class=\"col-8 \">\n            <input class=\"form-control w-25\" ng-model=\"date\" [value]=\"product.createAt\"\n             readonly>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-2 py-2\">Update at</div>\n          <div class=\"col-8 \">\n            <input class=\"form-control w-25\" ng-model=\"date\" [value]=\"product.updateAt\" readonly>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-2 py-2\">Quantity</div>\n\n          <div class=\"col-8 \">\n            <input type=\"number\" class=\"btn btn-outline-info w-25\" [value]=\"product.quantity\" [readonly]=\"isReadonly\" >\n          </div>\n        </div>\n        <br>\n        <button class=\"btn btn-info w-25\" (click)=\"onChanges()\" type=\"submit\" [class.myClass]=\"isClicked\">{{edit}}</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n  <app-menu></app-menu>\n  <router-outlet></router-outlet >\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid \">\n  <div class=\"row  align-items-center\">\n    <div id=\"imgBg\" class=\"col-8\"></div>\n    <div class=\"col-4\">\n      <div class=\"\">\n        <article class=\"card-body\">\n          <div class=\"container\">\n            <div class=\"row py-lg-5\">\n              <div class=\"col card py-3\">\n                <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link active\" id=\"signIn-tab\" data-toggle=\"tab\" href=\"#signIn\" role=\"tab\" aria-controls=\"home\"\n                      aria-selected=\"true\">Sign in</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" id=\"register-tab\" data-toggle=\"tab\" href=\"#register\" role=\"tab\" aria-controls=\"profile\"\n                      aria-selected=\"false\">Register</a>\n                  </li>\n                </ul>\n                <div class=\"tab-content\" id=\"myTabContent\">\n                  <div class=\"tab-pane fade show active\" id=\"signIn\" role=\"tabpanel\" aria-labelledby=\"signIn-tab\">\n\n                    <br>\n                    <h4 class=\"card-title text-center mb-4 mt-1\">Sign in</h4>\n                    <hr>\n                    <p class=\"text-danger text-center\" *ngIf=\"condition\">usename or password is not correct</p>\n                    <form>\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i> </span>\n                          </div>\n                          <input name=\"something\" placeholder=\"Username\" [(ngModel)]=\"username\" class=\"form-control\"\n                            placeholder=\"Email or login\" type=\"email\" required>\n                        </div> <!-- input-group.// -->\n                      </div> <!-- form-group// -->\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                          </div>\n                          <input name=\"something1\" placeholder=\"Password\" [(ngModel)]=\"password\" class=\"form-control\" placeholder=\"******\"\n                            type=\"password\" required>\n                        </div> <!-- input-group.// -->\n                      </div> <!-- form-group// -->\n                      <div class=\"form-group\">\n                        <button type=\"button\" (click)=\"login()\" class=\"btn btn-primary btn-block\"> Login </button>\n                      </div> <!-- form-group// -->\n                      <div class=\"row \">\n                        <div class=\"col-sm\">\n                          <p class=\"\"><a href=\"#\" class=\"btn\">Forgot password?</a></p>\n                        </div>\n                        <div class=\"col-sm\">\n                          <p class=\"\"><a href=\"#\" class=\"btn\">Sign up?</a></p>\n                        </div>\n                      </div>\n                    </form>\n                  </div>\n                  <div class=\"tab-pane fade\" id=\"register\" role=\"tabpanel\" aria-labelledby=\"register-tab\">\n                    <br>\n                    <div><strong>Register</strong></div>\n                    <br>\n                    <form>\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"> <i class=\"fa fa-user\"></i></span>\n                          </div>\n                          <input name=\"name\" class=\"form-control\"\n                            placeholder=\"Name\" type=\"email\" required>\n                        </div> <!-- input-group.// -->\n                      </div> <!-- form-group// -->\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"> <i class=\"fa fa-envelope-o\"></i> </span>\n                          </div>\n                          <input name=\"email\" placeholder=\"Email\"  class=\"form-control\" placeholder=\"******\"\n                            type=\"email\" required>\n                        </div> <!-- input-group.// -->\n                      </div> <!-- form-group// -->\n                      <div class=\"form-group\">\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\"> <i class=\"fa fa-lock\"></i> </span>\n                          </div>\n                          <input name=\"password\" placeholder=\"Password\" class=\"form-control\" placeholder=\"******\" type=\"email\" required>\n                        </div> <!-- input-group.// -->\n                      </div> <!-- form-group// -->\n                      <div class=\"form-group\">\n                        <button type=\"button\"  class=\"btn btn-primary btn-block\"> Register </button>\n                      </div> <!-- form-group// -->\n                    </form>\n\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n        </article>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMenuMenuComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" [routerLink]=\"'/home/dashboard'\"><img class=\"logo\" src=\"/assets/image/logo.jpg\" alt=\"\"></a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto left-menu\">\n      <li>\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"'/home/dashboard'\"><i class=\"fa fa-home\"></i> Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"'/home/products'\" routerLinkActive=\"active-link\"><i\n            class=\"fa fa-list-alt\"></i> Product <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <!-- <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"[{ outlets: { shop:['rank']} }]\" [routerLinkActiveOptions]=\"{exact:true}\"\n          [routerLink]=\"['/Category']\" routerLinkActive=\"active-link\">Ranking</a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'/home/shop'\"\n          [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"fa fa-suitcase\"></i> Shop <span\n            class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLinkActive=\"active\" [routerLink]=\"'/home/order'\"\n          [routerLinkActiveOptions]=\"{exact:true}\"><i class=\"fa fa-suitcase\"></i> Order <span\n            class=\"sr-only\">(current)</span></a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav main \">\n      <li>\n        <a class=\"nav-link\" [routerLink]=\"'/home/profile'\">\n          <i class=\"fa fa-fw fa-user\"></i>{{profile}}</a>\n      </li>\n      <li class=\"nav-item dropdown \">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\n          aria-haspopup=\"true\" aria-expanded=\"false\">\n          <i class=\"fa fa-bell\" aria-hidden=\"true\"></i>\n        </a>\n        <ul class=\"dropdown-menu menu\" aria-labelledby=\"navbarDropdown\">\n          <a class=\"dropdown-item child\" href=\"#\">Action</a>\n          <a class=\"dropdown-item child\" href=\"#\">Another action</a>\n          <div class=\"dropdown-divider\"></div>\n          <a class=\"dropdown-item child\" href=\"#\">Something else here</a>\n        </ul>\n      </li>\n      <li>\n        <a class=\"nav-link\" [routerLink]=\"'/login'\" (click)=\"logout()\"><i class=\"fa fa-sign-out\"></i> Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1><p class=\"text-center\">404 NOT FOUND</p></h1>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrderOrderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div>\n    <div class=\"card \">\n      <div class=\"card-body\">\n        <div class=\"row\">\n          <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-warning \">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Order not yet processed</h5>\n                <p class=\"card-text\">3 Orders</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-info\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Orders are shipping</h5>\n                <p class=\"card-text\">10 Orders</p>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-sm-4\">\n            <div class=\"card text-white bg-success\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Orders delivered of the week</h5>\n                <p class=\"card-text\">2 Orders</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br>\n  <div>\n    <ul class=\"list-unstyled\">\n      <li class=\"list-group-item\">\n        <!-- Custom content-->\n        <div class=\"media align-items-lg-center flex-column flex-lg-row p-3\">\n          <div class=\"media-body order-2 order-lg-1\">\n            <a [routerLink]=\"['/home/shop-detail']\">\n              <h5 class=\"mt-0 font-weight-bold mb-2\">Order 1</h5>\n            </a>\n            <div class=\"row\">\n              <div class=\"col-md-auto\">\n                <img\n                  src=\"https://thumbs.dreamstime.com/z/vector-illustration-ice-cream-shop-building-bright-banner-54376713.jpg\"\n                  alt=\"Generic placeholder image\" width=\"200\" class=\"ml-lg-5 order-1 order-lg-2\">\n              </div>\n              <div class=\"col py-5\">\n                <h3>Icream 1</h3>\n                <p class=\"\">Quantity: 10 </p>\n                <div class=\"d-flex align-items-center justify-content-between mt-1\">\n                  <h6 class=\"my-2\">Total: 120,000 đ</h6>\n                </div>\n              </div>\n            </div>\n            <div class=\"dropdown-divider\"></div>\n            <div class=\"row\">\n              <div class=\"col-md-auto\">\n                <img\n                  src=\"https://thumbs.dreamstime.com/z/vector-illustration-ice-cream-shop-building-bright-banner-54376713.jpg\"\n                  alt=\"Generic placeholder image\" width=\"200\" class=\"ml-lg-5 order-1 order-lg-2\">\n              </div>\n              <div class=\"col py-5\">\n                <h3>Icream 1</h3>\n                <p class=\"\">Quantity: 10 </p>\n                <div class=\"d-flex align-items-center justify-content-between mt-1\">\n                  <h6 class=\"my-2\">Total: 120,000 đ</h6>\n                </div>\n              </div>\n            </div>\n            <div class=\"dropdown-divider\"></div>\n            <br>\n            <div class=\"progress\">\n                <div class=\"progress-bar bg-info\" role=\"progressbar\" [style.width]=\"available + '%'\" aria-valuenow=\"15\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n                <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width]=\"deliver + '%'\" aria-valuenow=\"30\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n              </div>\n            <br>\n            <div class=\"row\">\n              <div class=\"col-md-auto\">\n                <button class=\"btn btn-info\" type=\"submit\" (click)=\"confirm()\">Confirm</button><br>\n              </div>\n              <div class=\"col-md-auto\">\n                <button class=\"btn btn-success\" type=\"submit\" (click)=\"finish()\">Delivered</button><br>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- End -->\n      </li>\n    </ul>\n\n  </div>\n  <br>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"leftSide\">\n    <a [routerLink]=\"'/home/profile'\">\n      <h3 class=\"my-4\">Ice Cream Shop</h3>\n    </a>\n    <div class=\"row\">\n      <div class=\"col\">\n        <button class=\"btn btn-outline-info\" data-toggle=\"modal\" data-target=\"#myModal\"><i class=\"fa fa-plus\"\n            aria-hidden=\"true\"></i> Add product</button>\n      </div>\n      <div class=\"col\">\n        <div class=\"row justify-content-end\">\n          <div class=\"col\"><input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n          </div>\n          <div class=\"col-12 col-sm-auto\">\n            <button class=\"btn btn-outline-info\" type=\"submit\">Search <i class=\"fa fa-search\"></i></button>\n          </div>\n        </div>\n        <br>\n      </div>\n    </div>\n  </div>\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"row py-4\">\n          <div class=\"col-lg-4 col-md-6 mb-4\" *ngFor=\"let product of products\">\n            <div class=\"card h-100\">\n              <a><img [src]=\"product.image\" [routerLink]=\"['/home/products', product.productId]\" class=\"card-img-top\"\n                  alt=\"...\"></a>\n              <div class=\"card-body\">\n                <div class=\"card-body\">\n                  <h5>{{product.name}}</h5>\n                  <p class=\"card-text\">{{product.description}}\n                  </p>\n                  <div class=\"row\">\n                    <div class=\"col-3\">\n                      <p>Price:</p>\n                    </div>\n                    <div class=\"col-8\">\n                      <strong>{{product.price|currency}}</strong>\n                    </div>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-4\">\n                      <p>Quantity: </p>\n                    </div>\n                    <div class=\"col-6\">\n                      <strong>{{product.quantity}}</strong>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n              <div class=\"card-footer\">\n                <small class=\"text-muted\">&#9733; &#9733; &#9733; &#9733; &#9734;</small>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\" id=\"myModalLabel\">Add product for store</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n              aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row\">\n            <div class=\"col-3 py-1\">Name:</div>\n            <div class=\"col-8\">\n              <select class=\"form-control\" id=\"exampleFormControlSelect1\">\n                <option>Product 1</option>\n                <option>Product 2</option>\n                <option>Product 3</option>\n                <option>Product 4</option>\n                <option>Product 5</option>\n              </select></div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-3 py-3\">Description:</div>\n            <div class=\"col-8\"><textarea maxlength=\"100\" class=\"form-control\" aria-label=\"With textarea\"\n                readonly></textarea></div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-3 py-1\">Price:</div>\n            <div class=\"col-8\"><input type=\"number\" value=\"0\" class=\"form-control\" readonly></div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-3 py-1\">Quantity:</div>\n            <div class=\"col-8\"><input type=\"number\" value=\"0\" class=\"form-control\"></div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-3 py-1\">Status:</div>\n            <div class=\"col-8\"><select class=\"form-control\" id=\"exampleFormControlSelect1\">\n              <option>Available</option>\n              <option>Unavailable</option>\n            </select></div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col-3 py-1\">Image:</div>\n            <div class=\"col-8\"><img src=\"http://kinhteluat.tmu.edu.vn/templates/not-found.png\"\n                class=\"img-fluid img-thumbnail\" alt=\"avatar\"></div>\n          </div>\n          <br>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary w-25\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-info w-25\">Save</button>\n        </div>\n      </div>\n    </div>\n  </div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row py-lg-5\">\n    <div class=\"col-3\">\n      <div class=\"image-cropper\">\n        <img src=\"https://thuthuatnhanh.com/wp-content/uploads/2019/10/anh-avatar-soai-ca-superman.jpg\"\n          class=\"img-fluid img-thumbnail\" alt=\"avatar\">\n      </div>\n      <br>\n      <div><input type=\"file\" class=\"text-center center-block file-upload\"></div>\n    </div>\n    <div class=\"col card\">\n      <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\"\n            aria-selected=\"true\">Personal Info</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\"\n            aria-selected=\"false\">Account</a>\n        </li>\n        <!-- <li class=\"nav-item\">\n          <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\"\n            aria-selected=\"false\">Contact</a>\n        </li> -->\n      </ul>\n      <div class=\"tab-content\" id=\"myTabContent\">\n        <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n          <br>\n          <div><strong>My profile</strong></div>\n          <br>\n          <div class=\"row\">\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label class=\"col-md-5 control-label\">User Name</label>\n                <div class=\"col-md-10 \">\n                  <input type=\"text\" class=\"form-control\" value=\"Ice Cream Shop\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-5 control-label\">First Name</label>\n                <div class=\"col-md-10 \">\n                  <input type=\"text\" class=\"form-control\" value=\"Rebecca\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-5 control-label\">Last Name</label>\n                <div class=\"col-md-10 \">\n                  <input type=\"text\" class=\"form-control\" value=\"Rebecca\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-5 control-label\">Date of birth</label>\n                <div class=\"col-md-10 \">\n                  <input type=\"text\" class=\"form-control\" value=\"01/01/2020\">\n                </div>\n              </div>\n            </div>\n            <div class=\"col\">\n              <div class=\"form-group\">\n                <label class=\"col-md-5 control-label\">Gender</label>\n                <div class=\"col-md-10 \">\n                  <input type=\"text\" class=\"form-control\" value=\"Female\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-5 control-label\">Phone</label>\n                <div class=\"col-md-10 \">\n                  <input type=\"text\" class=\"form-control\" value=\"0987654321\">\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-5 control-label\">Email</label>\n                <div class=\"col-md-10 \">\n                  <input type=\"text\" class=\"form-control\" value=\"rebecca@gmail.com\" readonly>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label class=\"col-md-5 control-label\">Address</label>\n                <div class=\"col-md-10 \">\n                  <input type=\"text\" class=\"form-control\" value=\"US\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n          <button class=\"btn btn-info w-25\" type=\"submit\">Save</button><br>\n          <br>\n        </div>\n        <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n          <br>\n          <div><strong>Change password</strong></div>\n          <div class=\"notice\">For account security, please do not share the password with others</div>\n          <br>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Enter current password</label>\n            <div class=\"col-md-10 \">\n              <input type=\"text\" class=\"form-control\" placeholder=\"current password\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Enter new password</label>\n            <div class=\"col-md-10 \">\n              <input type=\"text\" class=\"form-control\" placeholder=\"new password\">\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"col-md-5 control-label\">Enter to confirm password</label>\n            <div class=\"col-md-10 \">\n              <input type=\"text\" class=\"form-control\" placeholder=\"confirm password\">\n            </div>\n          </div>\n          <br>\n          <button class=\"btn btn-info w-25\" type=\"submit\">Save</button><br>\n          <br>\n        </div>\n        <!-- <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">CONTACT</div> -->\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-detail/shop-detail.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop-detail/shop-detail.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopDetailShopDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>OK</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppShopShopComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container py-2\">\n  <!-- For demo purpose -->\n  <div class=\"row py-5\">\n    <div class=\"col-lg-12\">\n      <ul class=\"list-unstyled\">\n        <li class=\"list-group-item\">\n          <!-- Custom content-->\n          <div class=\"media align-items-lg-center flex-column flex-lg-row p-3\">\n            <div class=\"media-body order-2 order-lg-1\">\n              <a  [routerLink]=\"['/home/shop-detail']\"><h5 class=\"mt-0 font-weight-bold mb-2\">Ice crean shop</h5></a>\n              <p class=\"font-italic text-muted mb-0 small\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Sequoya Commons (company-owned)\n                555 South Midvale Blvd. | Madison, WI 53711\n                (608) 441-5248\n                Store Hours: Sun-Thurs 11am-9pm, Fri-Sat 11am-10pm</p>\n              <div class=\"d-flex align-items-center justify-content-between mt-1\">\n                <h6 class=\"font-weight-bold my-2\">120 products</h6>\n              </div>\n            </div><img\n              src=\"https://thumbs.dreamstime.com/z/vector-illustration-ice-cream-shop-building-bright-banner-54376713.jpg\"\n              alt=\"Generic placeholder image\" width=\"200\" class=\"ml-lg-5 order-1 order-lg-2\">\n          </div>\n          <!-- End -->\n        </li>\n      </ul>\n      <ul class=\"list-unstyled\">\n        <li class=\"list-group-item\">\n          <!-- Custom content-->\n          <div class=\"media align-items-lg-center flex-column flex-lg-row p-3\">\n            <div class=\"media-body order-2 order-lg-1\">\n              <a [routerLink]=\"['/shopDetail']\">\n                <h5 class=\"mt-0 font-weight-bold mb-2\">Ice crean shop</h5>\n              </a>\n              <p class=\"font-italic text-muted mb-0 small\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Sequoya Commons (company-owned)\n                555 South Midvale Blvd. | Madison, WI 53711\n                (608) 441-5248\n                Store Hours: Sun-Thurs 11am-9pm, Fri-Sat 11am-10pm</p>\n              <div class=\"d-flex align-items-center justify-content-between mt-1\">\n                <h6 class=\"font-weight-bold my-2\">120 products</h6>\n              </div>\n            </div><img\n              src=\"https://thumbs.dreamstime.com/z/vector-illustration-ice-cream-shop-building-bright-banner-54376713.jpg\"\n              alt=\"Generic placeholder image\" width=\"200\" class=\"ml-lg-5 order-1 order-lg-2\">\n          </div>\n          <!-- End -->\n        </li>\n      </ul>\n      <ul class=\"list-unstyled\">\n        <li class=\"list-group-item\">\n          <!-- Custom content-->\n          <div class=\"media align-items-lg-center flex-column flex-lg-row p-3\">\n            <div class=\"media-body order-2 order-lg-1\">\n              <a [routerLink]=\"['/shopDetail']\">\n                <h5 class=\"mt-0 font-weight-bold mb-2\">Ice crean shop</h5>\n              </a>\n              <p class=\"font-italic text-muted mb-0 small\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Sequoya Commons (company-owned)\n                555 South Midvale Blvd. | Madison, WI 53711\n                (608) 441-5248\n                Store Hours: Sun-Thurs 11am-9pm, Fri-Sat 11am-10pm</p>\n              <div class=\"d-flex align-items-center justify-content-between mt-1\">\n                <h6 class=\"font-weight-bold my-2\">120 products</h6>\n              </div>\n            </div><img\n              src=\"https://thumbs.dreamstime.com/z/vector-illustration-ice-cream-shop-building-bright-banner-54376713.jpg\"\n              alt=\"Generic placeholder image\" width=\"200\" class=\"ml-lg-5 order-1 order-lg-2\">\n          </div>\n          <!-- End -->\n        </li>\n      </ul><ul class=\"list-unstyled\">\n        <li class=\"list-group-item\">\n          <!-- Custom content-->\n          <div class=\"media align-items-lg-center flex-column flex-lg-row p-3\">\n            <div class=\"media-body order-2 order-lg-1\">\n              <a [routerLink]=\"['/shopDetail']\">\n                <h5 class=\"mt-0 font-weight-bold mb-2\">Ice crean shop</h5>\n              </a>\n              <p class=\"font-italic text-muted mb-0 small\">Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n                Sequoya Commons (company-owned)\n                555 South Midvale Blvd. | Madison, WI 53711\n                (608) 441-5248\n                Store Hours: Sun-Thurs 11am-9pm, Fri-Sat 11am-10pm</p>\n              <div class=\"d-flex align-items-center justify-content-between mt-1\">\n                <h6 class=\"font-weight-bold my-2\">120 products</h6>\n              </div>\n            </div><img\n              src=\"https://thumbs.dreamstime.com/z/vector-illustration-ice-cream-shop-building-bright-banner-54376713.jpg\"\n              alt=\"Generic placeholder image\" width=\"200\" class=\"ml-lg-5 order-1 order-lg-2\">\n          </div>\n          <!-- End -->\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/order/order.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _service_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./service/guards/authentication.guard */
    "./src/app/service/guards/authentication.guard.ts");
    /* harmony import */


    var _shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shop-detail/shop-detail.component */
    "./src/app/shop-detail/shop-detail.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./detail-product/detail-product.component */
    "./src/app/detail-product/detail-product.component.ts");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");

    var routes = [{
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
      canActivate: [_service_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]],
      children: [{
        path: 'products',
        component: _product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"]
      }, {
        path: 'products/:id',
        component: _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_10__["DetailProductComponent"]
      }, {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["DashboardComponent"]
      }, {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_2__["ProfileComponent"]
      }, {
        path: 'order',
        component: _order_order_component__WEBPACK_IMPORTED_MODULE_1__["OrderComponent"]
      }, {
        path: 'shop',
        component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"]
      }, {
        path: 'shop-detail',
        component: _shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_5__["ShopDetailComponent"]
      }, {
        path: '',
        redirectTo: '/home/dashboard',
        pathMatch: 'full'
      }]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: '**',
      component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'iceCreamShop';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./service/guards/authentication.guard */
    "./src/app/service/guards/authentication.guard.ts");
    /* harmony import */


    var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./service/product.service */
    "./src/app/service/product.service.ts");
    /* harmony import */


    var _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./detail-product/detail-product.component */
    "./src/app/detail-product/detail-product.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./menu/menu.component */
    "./src/app/menu/menu.component.ts");
    /* harmony import */


    var _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shop/shop.component */
    "./src/app/shop/shop.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./not-found/not-found.component */
    "./src/app/not-found/not-found.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _product_product_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./product/product.component */
    "./src/app/product/product.component.ts");
    /* harmony import */


    var _shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shop-detail/shop-detail.component */
    "./src/app/shop-detail/shop-detail.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/profile/profile.component.ts");
    /* harmony import */


    var _order_order_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./order/order.component */
    "./src/app/order/order.component.ts");
    /* harmony import */


    var angular_highcharts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! angular-highcharts */
    "./node_modules/angular-highcharts/fesm2015/angular-highcharts.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"], _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__["ShopComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"], _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_11__["NotFoundComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_13__["DashboardComponent"], _product_product_component__WEBPACK_IMPORTED_MODULE_15__["ProductComponent"], _detail_product_detail_product_component__WEBPACK_IMPORTED_MODULE_3__["DetailProductComponent"], _shop_detail_shop_detail_component__WEBPACK_IMPORTED_MODULE_16__["ShopDetailComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"], _order_order_component__WEBPACK_IMPORTED_MODULE_19__["OrderComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], angular_highcharts__WEBPACK_IMPORTED_MODULE_20__["ChartModule"]],
      providers: [_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _service_guards_authentication_guard__WEBPACK_IMPORTED_MODULE_1__["AuthenticationGuard"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.css":
  /*!***************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".bg {\r\n  /* The image used */\r\n  background-image: url(\"https://wallpapermemory.com/uploads/736/ice-cream-background-hd-1680x1050-394642.jpg\");\r\n\r\n  /* Full height */\r\n  height: 800px;\r\n  width: 100%;\r\n  /* Center and scale the image nicely */\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n}\r\n.bg::-webkit-scrollbar {\r\n  width: 0px; /* Remove scrollbar space */\r\n  background: transparent; /* Optional: just make scrollbar invisible */\r\n}\r\n.chart{\r\n  margin-left: 10px;\r\n}\r\n.main{\r\n  margin: 50px 20px 50px 20px;\r\n}\r\n.card{\r\n  margin-bottom: 10px;\r\n\r\n}\r\n.card-body{\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDZHQUE2Rzs7RUFFN0csZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixXQUFXO0VBQ1gsc0NBQXNDO0VBQ3RDLDJCQUEyQjtFQUMzQiw0QkFBNEI7RUFDNUIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxVQUFVLEVBQUUsMkJBQTJCO0VBQ3ZDLHVCQUF1QixFQUFFLDRDQUE0QztBQUN2RTtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLG1CQUFtQjs7QUFFckI7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZyB7XHJcbiAgLyogVGhlIGltYWdlIHVzZWQgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3dhbGxwYXBlcm1lbW9yeS5jb20vdXBsb2Fkcy83MzYvaWNlLWNyZWFtLWJhY2tncm91bmQtaGQtMTY4MHgxMDUwLTM5NDY0Mi5qcGdcIik7XHJcblxyXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiA4MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBDZW50ZXIgYW5kIHNjYWxlIHRoZSBpbWFnZSBuaWNlbHkgKi9cclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5iZzo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gIHdpZHRoOiAwcHg7IC8qIFJlbW92ZSBzY3JvbGxiYXIgc3BhY2UgKi9cclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgLyogT3B0aW9uYWw6IGp1c3QgbWFrZSBzY3JvbGxiYXIgaW52aXNpYmxlICovXHJcbn1cclxuLmNoYXJ0e1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcbi5tYWlue1xyXG4gIG1hcmdpbjogNTBweCAyMHB4IDUwcHggMjBweDtcclxufVxyXG4uY2FyZHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG4uY2FyZC1ib2R5e1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var angular_highcharts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! angular-highcharts */
    "./node_modules/angular-highcharts/fesm2015/angular-highcharts.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);

        this.options = [];
        this.chart = new angular_highcharts__WEBPACK_IMPORTED_MODULE_2__["Chart"]({
          chart: {
            type: 'column'
          },
          xAxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
          },
          yAxis: {
            title: {
              text: 'Products'
            }
          },
          title: {
            text: 'Sales report'
          },
          credits: {
            enabled: false
          },
          series: [{
            name: 'Products',
            data: [3, 2, 5, 12, 5, 6, 2, 8, 4, 10, 2, 12],
            type: undefined
          }]
        });
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "add",
        value: function add() {
          this.chart.addPoint(Math.floor(Math.random() * 10));
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/dashboard/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/detail-product/detail-product.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/detail-product/detail-product.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailProductDetailProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a {\r\n  color: black;\r\n}\r\ninput {\r\n  width: 5%;\r\n}\r\n.form-control {\r\n  background-color: white;\r\n  border: none;\r\n}\r\ninput {\r\n  text-align: center;\r\n  margin-bottom: 10px;\r\n}\r\n.container{\r\n  margin-top: 50px;\r\n}\r\n.myClass{\r\n  background-color : #10BC13;\r\n}\r\ninput[type=\"text\"]\r\n{\r\n    font-size:25px;\r\n    text-align:left;\r\n    font-weight: bold;\r\n    margin-bottom: 10px;\r\n}\r\n.custom-file{\r\n  margin-top: 5px;\r\n}\r\nimg:hover{\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsLXByb2R1Y3QvZGV0YWlsLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsU0FBUztBQUNYO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBOztJQUVJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsLXByb2R1Y3QvZGV0YWlsLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDUlO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5pbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbi5teUNsYXNze1xyXG4gIGJhY2tncm91bmQtY29sb3IgOiAjMTBCQzEzO1xyXG59XHJcbmlucHV0W3R5cGU9XCJ0ZXh0XCJdXHJcbntcclxuICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5jdXN0b20tZmlsZXtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuaW1nOmhvdmVye1xyXG4gIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggMCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/detail-product/detail-product.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/detail-product/detail-product.component.ts ***!
    \************************************************************/

  /*! exports provided: DetailProductComponent */

  /***/
  function srcAppDetailProductDetailProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailProductComponent", function () {
      return DetailProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../service/product.service */
    "./src/app/service/product.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DetailProductComponent =
    /*#__PURE__*/
    function () {
      function DetailProductComponent(activatedRoute, productService) {
        _classCallCheck(this, DetailProductComponent);

        this.activatedRoute = activatedRoute;
        this.productService = productService;
        this.isReadonly = true;
        this.edit = 'Edit';
        this.isClicked = false;
      }

      _createClass(DetailProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var id = +this.activatedRoute.snapshot.params.id;
          this.productService.getProduct().subscribe(function (data) {
            _this.products = data;

            _this.products.forEach(function (element) {
              if (element.productId === id) {
                _this.product = element;
              }
            });
          });
        }
      }, {
        key: "onChanges",
        value: function onChanges() {
          this.isReadonly = !this.isReadonly;

          if (this.edit === 'Save') {
            this.edit = 'Edit';
            this.isClicked = false;
          } else {
            this.edit = 'Save';
            this.isClicked = true;
          }
        }
      }]);

      return DetailProductComponent;
    }();

    DetailProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    DetailProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-detail-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detail-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detail-product/detail-product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detail-product.component.css */
      "./src/app/detail-product/detail-product.component.css")).default]
    })], DetailProductComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "div{\r\n      margin: 10px 30px 10px 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7TUFDTSwyQkFBMkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdntcclxuICAgICAgbWFyZ2luOiAxMHB4IDMwcHggMTBweCAzMHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card {\r\n  max-width: 400px;\r\n  margin: auto;\r\n}\r\n\r\n#imgBg {\r\n  background-image: url(\"https://w.wallhaven.cc/full/39/wallhaven-392lk9.jpg\");\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  min-height: 750px;\r\n  width: auto;\r\n}\r\n\r\na{\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0RUFBNEU7RUFDNUUsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFDQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbiNpbWdCZyB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93LndhbGxoYXZlbi5jYy9mdWxsLzM5L3dhbGxoYXZlbi0zOTJsazkuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgbWluLWhlaWdodDogNzUwcHg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuYXtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../service/user.service */
    "./src/app/service/user.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var API = 'https://fakerestapi.azurewebsites.net/api/Users';

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(router, userService) {
        _classCallCheck(this, LoginComponent);

        this.router = router;
        this.userService = userService;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.checkLogin();
          this.userService.getUsers().subscribe(function (data) {
            _this2.users = data;
          });
        }
      }, {
        key: "checkLogin",
        value: function checkLogin() {
          if (localStorage.getItem('user')) {
            this.router.navigate(['home/dashboard']);
          } else {
            this.router.navigate(['login']);
          }
        }
      }, {
        key: "login",
        value: function login() {
          var _this3 = this;

          this.users.forEach(function (element) {
            if (element.username === _this3.username && element.password === _this3.password) {
              _this3.condition = false;
              localStorage.setItem('user', JSON.stringify(element));

              _this3.router.navigate(['home/dashboard']);
            } else {
              _this3.condition = true;
            }
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/menu/menu.component.css":
  /*!*****************************************!*\
    !*** ./src/app/menu/menu.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMenuMenuComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".logo {\r\n  width: 120px;\r\n}\r\n.logo:hover {\r\n  width: 150px;\r\n}\r\nul li {\r\n  padding: 0px 30px 0px 30px;\r\n}\r\nul li:hover {\r\n  background-color: #17a2b8;\r\n  transition: background-color 1s;\r\n}\r\nul li:hover a:hover {\r\n  color: white;\r\n}\r\nul li:hover a {\r\n  color: white;\r\n}\r\n.menu{\r\n  background-color: #17a2b8;\r\n\r\n}\r\n.child{\r\n  color: white;\r\n}\r\n.child:hover{\r\n  background-color: #4EB1A9;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx5QkFBeUI7RUFJekIsK0JBQStCO0FBQ2pDO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICB3aWR0aDogMTIwcHg7XHJcbn1cclxuLmxvZ286aG92ZXIge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG51bCBsaSB7XHJcbiAgcGFkZGluZzogMHB4IDMwcHggMHB4IDMwcHg7XHJcbn1cclxudWwgbGk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMxN2EyYjg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcztcclxuICAtby10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXM7XHJcbn1cclxudWwgbGk6aG92ZXIgYTpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbnVsIGxpOmhvdmVyIGEge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1lbnV7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcclxuXHJcbn1cclxuLmNoaWxke1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uY2hpbGQ6aG92ZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRFQjFBOTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/menu/menu.component.ts":
  /*!****************************************!*\
    !*** ./src/app/menu/menu.component.ts ***!
    \****************************************/

  /*! exports provided: MenuComponent */

  /***/
  function srcAppMenuMenuComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponent", function () {
      return MenuComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MenuComponent =
    /*#__PURE__*/
    function () {
      function MenuComponent(router) {
        _classCallCheck(this, MenuComponent);

        this.router = router;
        this.profile = 'Profile';
      }

      _createClass(MenuComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (localStorage.getItem('user')) {
            var data = JSON.parse(localStorage.getItem('user'));
            this.profile = data.name;
          }
        }
      }, {
        key: "logout",
        value: function logout() {
          if (localStorage.getItem('user')) {
            localStorage.removeItem('user');
            this.router.navigate(['login']);
          }
        }
      }]);

      return MenuComponent;
    }();

    MenuComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./menu.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/menu/menu.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./menu.component.css */
      "./src/app/menu/menu.component.css")).default]
    })], MenuComponent);
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.css":
  /*!***************************************************!*\
    !*** ./src/app/not-found/not-found.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/not-found/not-found.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/not-found/not-found.component.ts ***!
    \**************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent =
    /*#__PURE__*/
    function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/not-found/not-found.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/not-found/not-found.component.css")).default]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/order/order.component.css":
  /*!*******************************************!*\
    !*** ./src/app/order/order.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrderOrderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container{\r\n  margin-top: 70px;\r\n}\r\na{\r\n  color:black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvb3JkZXIvb3JkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgbWFyZ2luLXRvcDogNzBweDtcclxufVxyXG5he1xyXG4gIGNvbG9yOmJsYWNrO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/order/order.component.ts":
  /*!******************************************!*\
    !*** ./src/app/order/order.component.ts ***!
    \******************************************/

  /*! exports provided: OrderComponent */

  /***/
  function srcAppOrderOrderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrderComponent", function () {
      return OrderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrderComponent =
    /*#__PURE__*/
    function () {
      function OrderComponent() {
        _classCallCheck(this, OrderComponent);

        this.available = 0;
        this.deliver = 0;
      }

      _createClass(OrderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "confirm",
        value: function confirm() {
          this.available = 50;
        }
      }, {
        key: "finish",
        value: function finish() {
          this.deliver = 50;
        }
      }]);

      return OrderComponent;
    }();

    OrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-order',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./order.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/order/order.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./order.component.css */
      "./src/app/order/order.component.css")).default]
    })], OrderComponent);
    /***/
  },

  /***/
  "./src/app/product/product.component.css":
  /*!***********************************************!*\
    !*** ./src/app/product/product.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card:hover {\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\nh3 {\r\n  color: black;\r\n}\r\n.leftSide {\r\n  margin-left: 15px;\r\n  margin-right: 15px;\r\n}\r\nimg:hover {\r\n    cursor: pointer;\r\n}\r\n.modal-header{\r\n  background-color: #17a2b8;\r\n\r\n}\r\n.modal-title{\r\n  color: white;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0VBQ0UseUJBQXlCOztBQUUzQjtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMCA4cHggMTZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxufVxyXG5oMyB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbi5sZWZ0U2lkZSB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbmltZzpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLm1vZGFsLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG5cclxufVxyXG4ubW9kYWwtdGl0bGV7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/product/product.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/product/product.component.ts ***!
    \**********************************************/

  /*! exports provided: ProductComponent */

  /***/
  function srcAppProductProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductComponent", function () {
      return ProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../service/product.service */
    "./src/app/service/product.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProductComponent =
    /*#__PURE__*/
    function () {
      function ProductComponent(router, productService) {
        var _this4 = this;

        _classCallCheck(this, ProductComponent);

        this.productService = productService;
        this.productService.getProduct().subscribe(function (data) {
          _this4.products = data;
        });
      }

      _createClass(ProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductComponent;
    }();

    ProductComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
      }];
    };

    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: 'app-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/product/product.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product.component.css */
      "./src/app/product/product.component.css")).default]
    })], ProductComponent);
    /***/
  },

  /***/
  "./src/app/profile/profile.component.css":
  /*!***********************************************!*\
    !*** ./src/app/profile/profile.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a{\r\n    color:black;\r\n}\r\nimg {\r\n    height: 250px;\r\n    width: 250px;\r\n    border-radius: 50%;\r\n}\r\nimg:hover{\r\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\r\n}\r\nstrong{\r\n  font-size: 25px;;\r\n  margin-left: 15px;\r\n}\r\n.notice{\r\n  margin-left: 15px;\r\n  font-size: 20px;;\r\n}\r\n.btn{\r\n  margin-left: 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBS1osa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSwyQ0FBMkM7QUFDN0M7QUFDQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgICBjb2xvcjpibGFjaztcclxufVxyXG5pbWcge1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbmltZzpob3ZlcntcclxuICBib3gtc2hhZG93OiAwIDhweCAxNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcbnN0cm9uZ3tcclxuICBmb250LXNpemU6IDI1cHg7O1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbi5ub3RpY2V7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyMHB4OztcclxufVxyXG4uYnRue1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/profile/profile.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/profile/profile.component.ts ***!
    \**********************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent() {
        _classCallCheck(this, ProfileComponent);
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProfileComponent;
    }();

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/service/guards/authentication.guard.ts":
  /*!********************************************************!*\
    !*** ./src/app/service/guards/authentication.guard.ts ***!
    \********************************************************/

  /*! exports provided: AuthenticationGuard */

  /***/
  function srcAppServiceGuardsAuthenticationGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function () {
      return AuthenticationGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AuthenticationGuard =
    /*#__PURE__*/
    function () {
      function AuthenticationGuard(router) {
        _classCallCheck(this, AuthenticationGuard);

        this.router = router;
      }

      _createClass(AuthenticationGuard, [{
        key: "canActivate",
        value: function canActivate(next, state) {
          if (localStorage.getItem('user')) {
            return true;
          }

          this.router.navigate(['login']);
          return false;
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(next, state) {
          return true;
        }
      }, {
        key: "canLoad",
        value: function canLoad(route, segments) {
          return true;
        }
      }]);

      return AuthenticationGuard;
    }();

    AuthenticationGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationGuard);
    /***/
  },

  /***/
  "./src/app/service/product.service.ts":
  /*!********************************************!*\
    !*** ./src/app/service/product.service.ts ***!
    \********************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppServiceProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var API = 'http://www.mocky.io/v2/5e1183c43100005400593eee';

    var ProductService =
    /*#__PURE__*/
    function () {
      function ProductService(http) {
        _classCallCheck(this, ProductService);

        this.http = http;
      }

      _createClass(ProductService, [{
        key: "getProduct",
        value: function getProduct() {
          return this.http.get(API);
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], ProductService);
    /***/
  },

  /***/
  "./src/app/service/user.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/service/user.service.ts ***!
    \*****************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServiceUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var API = 'http://www.mocky.io/v2/5e1194123100004f00593f16';

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
      }

      _createClass(UserService, [{
        key: "getUsers",
        value: function getUsers() {
          return this.http.get(API);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/shop-detail/shop-detail.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/shop-detail/shop-detail.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopDetailShopDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AtZGV0YWlsL3Nob3AtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/shop-detail/shop-detail.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/shop-detail/shop-detail.component.ts ***!
    \******************************************************/

  /*! exports provided: ShopDetailComponent */

  /***/
  function srcAppShopDetailShopDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopDetailComponent", function () {
      return ShopDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShopDetailComponent =
    /*#__PURE__*/
    function () {
      function ShopDetailComponent() {
        _classCallCheck(this, ShopDetailComponent);
      }

      _createClass(ShopDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShopDetailComponent;
    }();

    ShopDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shop-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shop-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop-detail/shop-detail.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shop-detail.component.css */
      "./src/app/shop-detail/shop-detail.component.css")).default]
    })], ShopDetailComponent);
    /***/
  },

  /***/
  "./src/app/shop/shop.component.css":
  /*!*****************************************!*\
    !*** ./src/app/shop/shop.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppShopShopComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "a{\r\n  color: black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaG9wL3Nob3AuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImF7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shop/shop.component.ts":
  /*!****************************************!*\
    !*** ./src/app/shop/shop.component.ts ***!
    \****************************************/

  /*! exports provided: ShopComponent */

  /***/
  function srcAppShopShopComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShopComponent", function () {
      return ShopComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ShopComponent =
    /*#__PURE__*/
    function () {
      function ShopComponent() {
        _classCallCheck(this, ShopComponent);
      }

      _createClass(ShopComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ShopComponent;
    }();

    ShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-shop',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./shop.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shop/shop.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./shop.component.css */
      "./src/app/shop/shop.component.css")).default]
    })], ShopComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! G:\ANGULAR\iceCreamShop\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map