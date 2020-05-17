function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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
  "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutAboutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"about\">\r\n    <div class=\"title\"><p>About</p></div>\r\n    <div class=\"about-content\">\r\n        <div class=\"text-container\">\r\n            <div class=\"blob-container\" #canvas></div>\r\n            <p>\r\n                I am a Front-End Developer with a keen interest in JavaScript and performance\r\n                optimisation. I have experience building websites and web applications, working with\r\n                technologies like HTML, CSS, Javascript, PHP and frameworks such as Angular.\r\n            </p>\r\n            <div class=\"social-icons\">\r\n                <a href=\"https://github.com/mjd123\" target=\"_blank\"\r\n                    ><img src=\"assets/git-hub-mark-light-64-px@3x.png\" alt=\"Github\"\r\n                /></a>\r\n                <a href=\"https://linkedin.com/in/marcus-d-518a7a11a\" target=\"_blank\"\r\n                    ><img src=\"assets/linkedin@3x.png\" alt=\"Linkedin\"\r\n                /></a>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"image-container\">\r\n            <img src=\"assets/me.png\" alt=\"picture of me\" />\r\n            <img class=\"about-spotty-blob\" src=\"assets/about-blob-spotty.png\" />\r\n            <div class=\"blob-container-two\" #canvas></div>\r\n        </div>\r\n    </div>\r\n</section>\r\n";
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


    __webpack_exports__["default"] = "<div class=\"app-content\">\r\n  <app-header></app-header>\r\n  <app-projects></app-projects>\r\n  <app-about></app-about>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\r\n    <div class=\"header-text\">\r\n        <img class=\"logo\" src=\"assets/logo-brown.svg\" />\r\n        <p class=\"title\">Marcus Denny</p>\r\n        <p class=\"sub-title\">I am a Frontend Developer</p>\r\n    </div>\r\n    <div class=\"header-links\">\r\n        <a class=\"link\" pageScroll href=\".projects-text\">Projects</a>\r\n        <a class=\"link\" pageScroll href=\".about\">About</a>\r\n        <div class=\"blob-container\" #canvas>\r\n            <img src=\"assets/header-blob-spotty.png\" />\r\n        </div>\r\n    </div>\r\n</header>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"projects\" #projects>\r\n    <app-single-project\r\n        *ngIf=\"!this.delete\"\r\n        (delete)=\"toggleChildComponent($event)\"\r\n        [projectsData]=\"singleProject\"\r\n        [projectsContainer]=\"projectsContainer\"\r\n        (changeProject)=\"nextChildComponent($event)\"\r\n    ></app-single-project>\r\n\r\n    <div class=\"blob-container\" #canvas>\r\n        <img src=\"assets/project-blob-spotty.png\" />\r\n    </div>\r\n    <div class=\"projects-text\" #projectsText>\r\n        <p>Projects</p>\r\n    </div>\r\n\r\n    <div class=\"project-container one\" (click)=\"toggleChildComponent('saffron')\">\r\n        <div class=\"overlay\" (mouseenter)=\"isOverflown($event)\">\r\n            <p class=\"title\" #overlayTitle>{{ singleProjects.saffron.text.title }}</p>\r\n            <p class=\"sub-title\">{{ singleProjects.saffron.text.subTitle }}</p>\r\n        </div>\r\n\r\n        <img src=\"{{ singleProjects.saffron.image.src }}\" alt=\"Project Image\" />\r\n    </div>\r\n    <div class=\"project-container two\" (click)=\"toggleChildComponent('elPastor')\">\r\n        <div class=\"overlay\" (mouseenter)=\"isOverflown($event)\">\r\n            <p class=\"title\" #overlayTitle>{{ singleProjects.elPastor.text.title }}</p>\r\n            <p class=\"sub-title\">{{ singleProjects.elPastor.text.subTitle }}</p>\r\n        </div>\r\n        <img\r\n            (load)=\"onImageLoad($event)\"\r\n            src=\"{{ singleProjects.elPastor.image.src }}\"\r\n            alt=\"Project Image\"\r\n        />\r\n    </div>\r\n    <div class=\"project-container three\" (click)=\"toggleChildComponent('creativeFamily')\">\r\n        <div class=\"overlay\" (mouseenter)=\"isOverflown($event)\">\r\n            <p class=\"title\" #overlayTitle>{{ singleProjects.creativeFamily.text.title }}</p>\r\n            <p class=\"sub-title\">{{ singleProjects.creativeFamily.text.subTitle }}</p>\r\n        </div>\r\n        <img src=\"{{ singleProjects.creativeFamily.image.src }}\" alt=\"Project Image\" />\r\n    </div>\r\n    <div class=\"project-container four\" (click)=\"toggleChildComponent('oneSohoPlace')\">\r\n        <div class=\"overlay\" (mouseenter)=\"isOverflown($event)\">\r\n            <p class=\"title\" #overlayTitle>{{ singleProjects.oneSohoPlace.text.title }}</p>\r\n            <p class=\"sub-title\">{{ singleProjects.oneSohoPlace.text.subTitle }}</p>\r\n        </div>\r\n        <img src=\"{{ singleProjects.oneSohoPlace.image.src }}\" alt=\"Project Image\" />\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/single-project/single-project.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/projects/single-project/single-project.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProjectsSingleProjectSingleProjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"single-project-container\" #singleProjectContainer>\r\n    <div class=\"image-container\">\r\n        <a class=\"close-mobile\" (click)=\"close()\">[ close ]</a>\r\n        <video autoplay loop muted playsinline>\r\n            <source src=\"{{ projectsData?.image.video }}\" type=\"video/mp4\" />\r\n        </video>\r\n    </div>\r\n    <div class=\"text-container\">\r\n        <a class=\"close\" (click)=\"close()\">[ close ]</a>\r\n        <div class=\"description\">\r\n            <p class=\"title\">{{ projectsData?.text.title }}</p>\r\n            <p class=\"sub-title\">{{ projectsData?.text.subTitle }}</p>\r\n            <nav class=\"project-nav-mobile\">\r\n                <a (click)=\"prevousProject()\"></a>\r\n                <a (click)=\"nextProject()\"></a>\r\n            </nav>\r\n            <p class=\"text\">{{ projectsData?.text.text }}</p>\r\n            <a class=\"link\" href=\"{{ projectsData?.image.url }}\" target=\"_blank\">Visit site</a>\r\n        </div>\r\n\r\n        <nav class=\"project-nav\">\r\n            <a (click)=\"prevousProject()\">Prevous project</a>\r\n            <a (click)=\"nextProject()\">next project</a>\r\n        </nav>\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

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


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
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
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
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
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

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
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
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

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/about/about.component.scss":
  /*!********************************************!*\
    !*** ./src/app/about/about.component.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutAboutComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;600&display=swap\");\n* {\n  font-family: \"Oswald\", sans-serif;\n}\n.title {\n  font-size: 60px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  text-transform: uppercase;\n}\n.title span {\n  font-weight: 300;\n}\n.sub-title {\n  font-size: 32px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-transform: uppercase;\n}\n.link {\n  font-size: 18px;\n  text-align: center;\n}\n@media screen and (max-height: 750px) {\n  :host::ng-deep .blob-one {\n    width: 200px;\n    height: 200px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host::ng-deep .blob-one {\n    width: 90px;\n    height: 110px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host::ng-deep .blob-one {\n    width: 90px;\n    height: 110px;\n  }\n}\n.about {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  background-color: #f5eee2;\n  padding: 60px;\n  height: 100%;\n}\n@media screen and (max-width: 850px) {\n  .about {\n    height: 100%;\n  }\n}\n@media screen and (max-width: 420px) {\n  .about {\n    padding: 25px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about {\n    height: 100%;\n    padding: 25px;\n  }\n}\n.about .blob-container {\n  position: absolute;\n  left: -150px;\n  top: -150px;\n  z-index: -1;\n}\n@media screen and (max-height: 750px) {\n  .about .blob-container {\n    left: -100px;\n    top: -100px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .blob-container {\n    top: -60px;\n    left: -30px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .about .blob-container {\n    top: -60px;\n    left: -30px;\n  }\n}\n.about .blob-container-two {\n  position: absolute;\n  left: 300px;\n  top: 200px;\n  z-index: 1;\n}\n@media screen and (max-height: 750px) {\n  .about .blob-container-two {\n    left: 351px;\n    top: 301px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .blob-container-two {\n    display: none;\n  }\n}\n@media screen and (max-width: 420px) {\n  .about .blob-container-two {\n    display: none;\n  }\n}\n.about .title {\n  color: #ffffff;\n  font-size: 48px;\n  grid-column-start: 1;\n  align-self: flex-end;\n  font-size: 140px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-transform: uppercase;\n  text-align: left;\n}\n@media screen and (min-width: 1400px) {\n  .about .title {\n    font-size: 200px;\n  }\n}\n@media screen and (max-height: 750px) {\n  .about .title {\n    font-size: 100px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  .about .title {\n    font-size: 100px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .about .title {\n    font-size: 100px;\n    line-height: 1;\n  }\n}\n@media screen and (max-width: 420px) {\n  .about .title {\n    font-size: 70px;\n    line-height: 1;\n  }\n}\n@media screen and (max-width: 360px) {\n  .about .title {\n    font-size: 52px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .title {\n    font-size: 70px;\n    line-height: 1;\n  }\n}\n@media screen and (max-width: 850px) {\n  .about .title {\n    grid-row-start: 1;\n    z-index: 1;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .title {\n    grid-row-start: 2;\n  }\n}\n.about .title p {\n  margin: 0;\n}\n@media screen and (max-width: 850px) {\n  .about .title p {\n    margin-bottom: 40px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .title p {\n    margin-bottom: 40px;\n  }\n}\n.about .about-content {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  justify-self: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: relative;\n  margin-top: 240px;\n  grid-column-start: 1;\n  grid-column-end: 3;\n  grid-row-start: 1;\n}\n@media screen and (max-width: 850px) {\n  .about .about-content {\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    margin-top: 112px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .about-content {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n  }\n}\n.about .about-content .text-container {\n  display: grid;\n  width: 330px;\n  height: 329px;\n  background-color: #ffffff;\n  padding: 25px 30px 30px 30px;\n  z-index: 1;\n  position: relative;\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .about-content .text-container {\n    width: 270px;\n    height: 270px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 20px 20px 28px 20px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .about .about-content .text-container {\n    width: 270px;\n    height: 270px;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    padding: 20px 20px 28px 20px;\n  }\n}\n.about .about-content .text-container p {\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.78;\n  letter-spacing: normal;\n  color: #006b64;\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .about-content .text-container p {\n    font-size: 14px;\n    line-height: 1.71;\n  }\n}\n@media screen and (max-width: 420px) {\n  .about .about-content .text-container p {\n    font-size: 14px;\n    line-height: 1.71;\n  }\n}\n.about .about-content .text-container .social-icons {\n  grid-row: 2;\n  align-self: end;\n}\n.about .about-content .text-container .social-icons img {\n  width: 35px;\n  height: 34px;\n  margin-right: 14px;\n  cursor: pointer;\n}\n.about .about-content .image-container {\n  position: relative;\n  left: -25px;\n}\n@media screen and (max-width: 850px) {\n  .about .about-content .image-container {\n    left: 0;\n    top: -20px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .about-content .image-container img {\n    width: 218px;\n    height: 204px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .about .about-content .image-container img {\n    width: 218px;\n    height: 204px;\n  }\n}\n.about .about-content .image-container svg {\n  opacity: 0.8;\n}\n.about .about-content .image-container .about-spotty-blob {\n  width: 242px;\n  height: 270px;\n  position: absolute;\n  right: 0px;\n  top: 50%;\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .about .about-content .image-container .about-spotty-blob {\n    display: none;\n  }\n}\n@media screen and (max-width: 420px) {\n  .about .about-content .image-container .about-spotty-blob {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvQzpcXFVzZXJzXFxNYXJjdXNcXERlc2t0b3BcXHBvcnRmb2xpby9zcmNcXHNjc3NcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hYm91dC9DOlxcVXNlcnNcXE1hcmN1c1xcRGVza3RvcFxccG9ydGZvbGlvL3NyY1xcYXBwXFxhYm91dFxcYWJvdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Fib3V0L0M6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxwb3J0Zm9saW8vc3JjXFxzY3NzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RkFBQTtBQWFSO0VBQ0ksaUNBQUE7QUNYSjtBRDJFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ3hFSjtBRDBFSTtFQUNJLGdCQUFBO0FDeEVSO0FENEVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ3pFSjtBRDRFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ3pFSjtBQzVCSTtFQURKO0lBRVEsWUFBQTtJQUNBLGFBQUE7RURnQ047QUFDRjtBQzlCSTtFQU5KO0lBT1EsV0FBQTtJQUNBLGFBQUE7RURpQ047QUFDRjtBQy9CSTtFQVhKO0lBWVEsV0FBQTtJQUNBLGFBQUE7RURrQ047QUFDRjtBQy9CQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUVBLHlCQ3BCSTtFRHFCSixhQUFBO0VBQ0EsWUFBQTtBRGlDSjtBQy9CSTtFQVJKO0lBU1EsWUFBQTtFRGtDTjtBQUNGO0FDaENJO0VBWko7SUFhUSxhQUFBO0VEbUNOO0FBQ0Y7QUNoQ0k7RUFqQko7SUFrQlEsWUFBQTtJQUNBLGFBQUE7RURtQ047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RmdCO0VBREo7SUFFUSxZQUFBO0lBQ0EsYUFBQTtFRDZGbEI7QUFDRjtBQzNGZ0I7RUFOSjtJQU9RLFlBQUE7SUFDQSxhQUFBO0VEOEZsQjtBQUNGO0FDM0ZZO0VBQ0ksWUFBQTtBRDZGaEI7QUMxRlk7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7QUQ0RmhCO0FDMUZnQjtFQVBKO0lBUVEsYUFBQTtFRDZGbEI7QUFDRjtBQzNGZ0I7RUFYSjtJQVlRLGFBQUE7RUQ4RmxCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NjAwJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0ICcuL2JyZWFrcG9pbnRzLnNjc3MnO1xyXG5cclxuLy8gQGZvbnQtZmFjZSB7XHJcbi8vICAgICBmb250LWZhbWlseTogJ09zd2FsZCc7XHJcbi8vICAgICBzcmM6IHVybCgnfi9hc3NldHMvZm9udHMvT3N3YWxkLVJlZ3VsYXIudHRmJykgZm9ybWF0KCdvcGVudHlwZScpO1xyXG4vLyB9XHJcblxyXG4vLyBAZm9udC1mYWNlIHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcclxuLy8gICAgIHNyYzogdXJsKCd+L2Fzc2V0cy9mb250cy9Pc3dhbGQtUmVndWxhci50dGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XHJcbi8vIH1cclxuXHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5AbWl4aW4gc2VjdGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE0MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcblxyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAvL2Rlc2t0b3BcclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LWhlaWdodDogNzUwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLW1vYmlsZSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiB0ZXh0LWJsb2NrIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjc4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcclxuICAgIH1cclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG5AbWl4aW4gdW5kZXJsaW5lLXNsaWRlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJyb3duO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcclxuXHJcbiAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicm93bjtcclxuICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0IHVybChcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs2MDAmZGlzcGxheT1zd2FwXCIpO1xuKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk9zd2FsZFwiLCBzYW5zLXNlcmlmO1xufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDYwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi50aXRsZSBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmxpbmsge1xuICBmb250LXNpemU6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIC5ibG9iLW9uZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICA6aG9zdDo6bmctZGVlcCAuYmxvYi1vbmUge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIC5ibG9iLW9uZSB7XG4gICAgd2lkdGg6IDkwcHg7XG4gICAgaGVpZ2h0OiAxMTBweDtcbiAgfVxufVxuXG4uYWJvdXQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWVlZTI7XG4gIHBhZGRpbmc6IDYwcHg7XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5hYm91dCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYWJvdXQge1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuYWJvdXQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyNXB4O1xuICB9XG59XG4uYWJvdXQgLmJsb2ItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTUwcHg7XG4gIHRvcDogLTE1MHB4O1xuICB6LWluZGV4OiAtMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkge1xuICAuYWJvdXQgLmJsb2ItY29udGFpbmVyIHtcbiAgICBsZWZ0OiAtMTAwcHg7XG4gICAgdG9wOiAtMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuYWJvdXQgLmJsb2ItY29udGFpbmVyIHtcbiAgICB0b3A6IC02MHB4O1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYWJvdXQgLmJsb2ItY29udGFpbmVyIHtcbiAgICB0b3A6IC02MHB4O1xuICAgIGxlZnQ6IC0zMHB4O1xuICB9XG59XG4uYWJvdXQgLmJsb2ItY29udGFpbmVyLXR3byB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMzAwcHg7XG4gIHRvcDogMjAwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIHtcbiAgLmFib3V0IC5ibG9iLWNvbnRhaW5lci10d28ge1xuICAgIGxlZnQ6IDM1MXB4O1xuICAgIHRvcDogMzAxcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuYWJvdXQgLmJsb2ItY29udGFpbmVyLXR3byB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmFib3V0IC5ibG9iLWNvbnRhaW5lci10d28ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hYm91dCAudGl0bGUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gIGZvbnQtc2l6ZTogMTQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgLmFib3V0IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XG4gIC5hYm91dCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5hYm91dCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5hYm91dCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5hYm91dCAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgLmFib3V0IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmFib3V0IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuYWJvdXQgLnRpdGxlIHtcbiAgICBncmlkLXJvdy1zdGFydDogMTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmFib3V0IC50aXRsZSB7XG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XG4gIH1cbn1cbi5hYm91dCAudGl0bGUgcCB7XG4gIG1hcmdpbjogMDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5hYm91dCAudGl0bGUgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5hYm91dCAudGl0bGUgcCB7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgfVxufVxuLmFib3V0IC5hYm91dC1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMjQwcHg7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIGdyaWQtcm93LXN0YXJ0OiAxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmFib3V0IC5hYm91dC1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDExMnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmFib3V0IC5hYm91dC1jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB9XG59XG4uYWJvdXQgLmFib3V0LWNvbnRlbnQgLnRleHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDMyOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nOiAyNXB4IDMwcHggMzBweCAzMHB4O1xuICB6LWluZGV4OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmFib3V0IC5hYm91dC1jb250ZW50IC50ZXh0LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDI3MHB4O1xuICAgIGhlaWdodDogMjcwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHggMjhweCAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYWJvdXQgLmFib3V0LWNvbnRlbnQgLnRleHQtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMjcwcHg7XG4gICAgaGVpZ2h0OiAyNzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDIwcHggMjBweCAyOHB4IDIwcHg7XG4gIH1cbn1cbi5hYm91dCAuYWJvdXQtY29udGVudCAudGV4dC1jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNzg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIGNvbG9yOiAjMDA2YjY0O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5hYm91dCAuYWJvdXQtY29udGVudCAudGV4dC1jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYWJvdXQgLmFib3V0LWNvbnRlbnQgLnRleHQtY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS43MTtcbiAgfVxufVxuLmFib3V0IC5hYm91dC1jb250ZW50IC50ZXh0LWNvbnRhaW5lciAuc29jaWFsLWljb25zIHtcbiAgZ3JpZC1yb3c6IDI7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cbi5hYm91dCAuYWJvdXQtY29udGVudCAudGV4dC1jb250YWluZXIgLnNvY2lhbC1pY29ucyBpbWcge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiAzNHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5hYm91dCAuYWJvdXQtY29udGVudCAuaW1hZ2UtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAtMjVweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5hYm91dCAuYWJvdXQtY29udGVudCAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogLTIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuYWJvdXQgLmFib3V0LWNvbnRlbnQgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAyMThweDtcbiAgICBoZWlnaHQ6IDIwNHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYWJvdXQgLmFib3V0LWNvbnRlbnQgLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAyMThweDtcbiAgICBoZWlnaHQ6IDIwNHB4O1xuICB9XG59XG4uYWJvdXQgLmFib3V0LWNvbnRlbnQgLmltYWdlLWNvbnRhaW5lciBzdmcge1xuICBvcGFjaXR5OiAwLjg7XG59XG4uYWJvdXQgLmFib3V0LWNvbnRlbnQgLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtc3BvdHR5LWJsb2Ige1xuICB3aWR0aDogMjQycHg7XG4gIGhlaWdodDogMjcwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiA1MCU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmFib3V0IC5hYm91dC1jb250ZW50IC5pbWFnZS1jb250YWluZXIgLmFib3V0LXNwb3R0eS1ibG9iIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuYWJvdXQgLmFib3V0LWNvbnRlbnQgLmltYWdlLWNvbnRhaW5lciAuYWJvdXQtc3BvdHR5LWJsb2Ige1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi9zY3NzL2NvbG9ycy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vc2Nzcy9mb250cy5zY3NzJztcclxuXHJcbjpob3N0OjpuZy1kZWVwIC5ibG9iLW9uZSB7XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiRtb2JpbGUpIHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWJvdXQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIC8vY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAxNCUsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJvd247XHJcbiAgICBwYWRkaW5nOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgLy9vdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJsb2ItY29udGFpbmVyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogLTE1MHB4O1xyXG4gICAgICAgIHRvcDogLTE1MHB4O1xyXG4gICAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgICAgICBsZWZ0OiAtMTAwcHg7XHJcbiAgICAgICAgICAgIHRvcDogLTEwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgIHRvcDogLTYwcHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgICAgICB0b3A6IC02MHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJsb2ItY29udGFpbmVyLXR3byB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDMwMHB4O1xyXG4gICAgICAgIHRvcDogMjAwcHg7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LWhlaWdodDogNzUwcHgpIHtcclxuICAgICAgICAgICAgbGVmdDogMzUxcHg7XHJcbiAgICAgICAgICAgIHRvcDogMzAxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDokbW9iaWxlKSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHNlY3Rpb24tdGl0bGU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMTtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICBncmlkLXJvdy1zdGFydDogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFib3V0LWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjQwcHg7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XHJcbiAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgIGdyaWQtcm93LXN0YXJ0OiAxO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDExMnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAvLyAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAvLyAgICAgbWFyZ2luLXRvcDogMTEycHg7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICB3aWR0aDogMzMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzI5cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweCAzMHB4IDMwcHggMzBweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjcwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAyOHB4IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNzBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjcwcHg7XHJcbiAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMjBweCAyMHB4IDI4cHggMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0ZXh0LWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnNvY2lhbC1pY29ucyB7XHJcbiAgICAgICAgICAgICAgICBncmlkLXJvdzogMjtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGVuZDtcclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0yNXB4O1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgLy8gICAgIHRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIxOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjA0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5hYm91dC1zcG90dHktYmxvYiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjQycHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI3MHB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJHdoaXRlOiAjZmZmZmZmO1xyXG4kZ3JlZW46ICMwMDZiNjQ7XHJcbiRvcmFuZ2U6ICNmNTZmNGY7XHJcbiRncmVlbjogIzAwNmI2NDtcclxuJGJyb3duOiAjZjVlZWUyO1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../animations/blob-canvas-animation */
    "./src/app/animations/blob-canvas-animation.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutComponent = /*#__PURE__*/function () {
      function AboutComponent(ngZone, CanvasBlob) {
        _classCallCheck(this, AboutComponent);

        this.ngZone = ngZone;
        this.CanvasBlob = CanvasBlob;
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this = this;

          var blobOne = new _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_1__["CanvasBlob"]();
          var blobTwo = new _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_1__["CanvasBlob"]();
          this.ngZone.runOutsideAngular(function () {
            return blobOne.createBlob(_this.canvas.first.nativeElement, 'rgba(245,111,79,1)', 'blob-one', 136, 180, 180, 0, 0, 0.3);
          });
          this.ngZone.runOutsideAngular(function () {
            return blobTwo.createBlob(_this.canvas.last.nativeElement, 'rgba(245,111,79,0.9)', 'blob-one', 136, 180, 180, 0, 0, 0.2);
          });
        }
      }]);

      return AboutComponent;
    }();

    AboutComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_1__["CanvasBlob"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('canvas')], AboutComponent.prototype, "canvas", void 0);
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.component.scss */
      "./src/app/about/about.component.scss"))["default"]]
    })], AboutComponent);
    /***/
  },

  /***/
  "./src/app/animations/blob-canvas-animation.ts":
  /*!*****************************************************!*\
    !*** ./src/app/animations/blob-canvas-animation.ts ***!
    \*****************************************************/

  /*! exports provided: CanvasBlob */

  /***/
  function srcAppAnimationsBlobCanvasAnimationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasBlob", function () {
      return CanvasBlob;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CanvasBlob = /*#__PURE__*/function () {
      function CanvasBlob() {
        _classCallCheck(this, CanvasBlob);
      }

      _createClass(CanvasBlob, [{
        key: "createBlob",
        value: function createBlob(canvasContainer, fill, elementClass, circleX, circleY, radius) {
          var _this2 = this;

          var moveToX = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 20;
          var moveToY = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 15;
          var modifier = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : 0.2;
          this.canvas = document.createElement('canvas');
          document.createElement('canvas');
          canvasContainer.appendChild(this.canvas);
          this.canvas.classList.add(elementClass);
          this.ctx = this.canvas.getContext('2d');
          var width = this.canvas.width = 300,
              height = this.canvas.height = 300;
          var circ = 4 * (Math.sqrt(2) - 1) / 3;
          var c = circ;
          var count = Math.PI * 2;

          var drawBezierCircle = function drawBezierCircle(circleX, circleY, radius, modifier) {
            var c;
            var offsetX = moveToX * Math.sin(count); //20 * Math.sin(count);

            var offsetY = moveToY * Math.cos(count * 2); //15 * Math.cos(count * 2);

            var r = radius / 2; //speed

            count += 0.01;

            _this2.ctx.translate(circleX, circleY); // translate to centerpoint


            _this2.ctx.beginPath(); // top right


            c = circ + modifier * Math.sin(count);

            _this2.ctx.moveTo(offsetX + 0, offsetY + -r);

            _this2.ctx.bezierCurveTo(offsetX + c * r, offsetY + -r, offsetX + r, offsetY + -c * r, offsetX + r, offsetY + 0); // bottom right


            c = circ + modifier * Math.cos(count);

            _this2.ctx.bezierCurveTo(offsetX + r, offsetY + c * r, offsetX + c * r, offsetY + r, offsetX + 0, offsetY + r); // bottom left


            c = circ + modifier * Math.sin(count * 2);

            _this2.ctx.bezierCurveTo(offsetX + -c * r, offsetY + r, offsetX + -r, offsetY + c * r, offsetX + -r, offsetY + 0); // top left


            c = circ + modifier * Math.cos(count + 1);

            _this2.ctx.bezierCurveTo(offsetX + -r, offsetY + -c * r, offsetX + -c * r, offsetY + -r, offsetX + 0, offsetY + -r);

            _this2.ctx.fill();
          };

          var render = function render() {
            requestAnimationFrame(render);

            _this2.ctx.setTransform(1, 0, 0, 1, 0, 0);

            _this2.ctx.clearRect(0, 0, width, height);

            _this2.ctx.fillStyle = "".concat(fill);
            drawBezierCircle(circleX, circleY, radius, modifier);
          };

          render();
        }
      }]);

      return CanvasBlob;
    }();

    CanvasBlob = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CanvasBlob);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".app-content {\n  background-color: #006b64;\n}\n\nbody {\n  background-color: #006b64;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxNYXJjdXNcXERlc2t0b3BcXHBvcnRmb2xpby9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL0M6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxwb3J0Zm9saW8vc3JjXFxzY3NzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHlCQUFBO0FDREo7O0FESUE7RUFDSSx5QkVKSTtBREdSIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vc2Nzcy9jb2xvcnMuc2Nzcyc7XHJcblxyXG4uYXBwLWNvbnRlbnQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxufVxyXG4iLCIuYXBwLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2YjY0O1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNmI2NDtcbn0iLCIkd2hpdGU6ICNmZmZmZmY7XHJcbiRncmVlbjogIzAwNmI2NDtcclxuJG9yYW5nZTogI2Y1NmY0ZjtcclxuJGdyZWVuOiAjMDA2YjY0O1xyXG4kYnJvd246ICNmNWVlZTI7XHJcbiJdfQ== */";
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
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'portfolio';
        this.windowwWidth = window.innerWidth;
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.resizeObservable$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'resize');
          this.resizeSubscription$ = this.resizeObservable$.pipe( //debounceTime(500),
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) {
            return e.target.innerWidth; // <-- target does not exist on {}
          })).subscribe(function (evt) {
            if (_this3.windowwWidth !== evt) {
              location.reload();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.resizeSubscription$.unsubscribe();
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
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


    var _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./animations/blob-canvas-animation */
    "./src/app/animations/blob-canvas-animation.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./projects/projects.component */
    "./src/app/projects/projects.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _projects_single_project_single_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./projects/single-project/single-project.component */
    "./src/app/projects/single-project/single-project.component.ts");
    /* harmony import */


    var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-page-scroll-core */
    "./node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
    /* harmony import */


    var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-page-scroll */
    "./node_modules/ngx-page-scroll/fesm2015/ngx-page-scroll.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _projects_projects_component__WEBPACK_IMPORTED_MODULE_7__["ProjectsComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"], _projects_single_project_single_project_component__WEBPACK_IMPORTED_MODULE_9__["SingleProjectComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_10__["NgxPageScrollCoreModule"].forRoot({
        duration: 1000
      }), ngx_page_scroll__WEBPACK_IMPORTED_MODULE_11__["NgxPageScrollModule"]],
      providers: [_animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_1__["CanvasBlob"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/header/header.component.scss":
  /*!**********************************************!*\
    !*** ./src/app/header/header.component.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;600&display=swap\");\n* {\n  font-family: \"Oswald\", sans-serif;\n}\n.title {\n  font-size: 60px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  text-transform: uppercase;\n}\n.title span {\n  font-weight: 300;\n}\n.sub-title {\n  font-size: 32px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-transform: uppercase;\n}\n.link {\n  font-size: 18px;\n  text-align: center;\n}\n:host::ng-deep .blob-one {\n  position: absolute;\n  left: 0;\n  z-index: 1;\n}\n@media screen and (max-height: 750px) {\n  :host::ng-deep .blob-one {\n    width: 200px;\n    height: 200px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host::ng-deep .blob-one {\n    width: 90px;\n    height: 110px;\n    left: 50px;\n    top: 20px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host::ng-deep .blob-one {\n    width: 90px;\n    height: 110px;\n    left: 50px;\n    top: 20px;\n  }\n}\n:host::ng-deep .blob-two {\n  position: absolute;\n  left: -10%;\n  top: 60%;\n  z-index: 1;\n}\n@media screen and (max-height: 750px) {\n  :host::ng-deep .blob-two {\n    width: 200px;\n    height: 200px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host::ng-deep .blob-two {\n    width: 120px;\n    height: 140px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host::ng-deep .blob-two {\n    width: 120px;\n    height: 140px;\n  }\n}\nheader {\n  display: grid;\n  -webkit-box-pack: space-evenly;\n      -ms-flex-pack: space-evenly;\n          justify-content: space-evenly;\n  justify-items: center;\n  width: 100%;\n  height: 100vh;\n  padding: 90px 60px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  position: relative;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr;\n  background-color: #006b64;\n}\n@media screen and (max-width: 420px) {\n  header {\n    padding: 20px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  header {\n    padding: 20px;\n  }\n}\n.header-links {\n  position: relative;\n  justify-self: right;\n}\n@media screen and (max-width: 420px) {\n  .header-links {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n  }\n}\n.header-links .link {\n  display: inline-block;\n  font-size: 24px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  color: #f5eee2;\n  position: relative;\n  text-decoration: none;\n  cursor: pointer;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.header-links .link::after {\n  content: \"\";\n  position: absolute;\n  width: 0%;\n  height: 2px;\n  background-color: #f5eee2;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  -webkit-transition: all 0.6s ease-in-out;\n  transition: all 0.6s ease-in-out;\n}\n.header-links .link:hover {\n  -webkit-transition: all 0.6s ease-in-out;\n  transition: all 0.6s ease-in-out;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-rendering: optimizeLegibility;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n.header-links .link:hover::after {\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 2px;\n  background-color: #f5eee2;\n  bottom: 0;\n  left: 0;\n  opacity: 1;\n}\n@media screen and (max-width: 420px) {\n  .header-links .link {\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .header-links .link {\n    font-size: 14px;\n    font-weight: normal;\n    font-stretch: normal;\n    font-style: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    text-align: center;\n  }\n}\n.header-links .link:first-of-type {\n  margin-right: 47px;\n}\n@media screen and (max-width: 420px) {\n  .header-links .link:first-of-type {\n    margin-right: 15px;\n  }\n}\n.header-links .blob-container {\n  position: absolute;\n  top: 60px;\n  right: -60px;\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  .header-links .blob-container {\n    top: -30px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .header-links .blob-container {\n    top: 60px;\n  }\n}\n.header-links .blob-container img {\n  width: 500px;\n  height: 720.1px;\n  -o-object-fit: contain;\n     object-fit: contain;\n  position: relative;\n  z-index: 1;\n}\n@media screen and (max-height: 750px) {\n  .header-links .blob-container img {\n    width: 350px;\n    height: initial;\n  }\n}\n@media screen and (max-width: 1300px) {\n  .header-links .blob-container img {\n    width: 450px;\n    height: initial;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  .header-links .blob-container img {\n    width: 400px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .header-links .blob-container img {\n    width: 400px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .header-links .blob-container img {\n    width: 200px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .header-links .blob-container img {\n    width: 200px;\n  }\n}\n.header-links .blob-container canvas {\n  position: absolute;\n  left: 0;\n}\n.header-text {\n  justify-self: left;\n  text-align: center;\n  color: #f5eee2;\n  position: relative;\n  display: grid;\n}\n@media screen and (max-width: 420px) {\n  .header-text {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n}\n.header-text .logo {\n  display: block;\n  margin-bottom: auto;\n}\n@media screen and (max-width: 1300px) {\n  .header-text .logo {\n    width: 120px;\n    height: auto;\n  }\n}\n@media screen and (max-width: 420px) {\n  .header-text .logo {\n    width: 70px;\n    height: 70px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .header-text .logo {\n    width: 70px;\n    height: 70px;\n  }\n}\n.header-text .title {\n  font-size: 140px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-transform: uppercase;\n  line-height: 1;\n  text-align: left;\n  margin: 0 0 10px 0;\n  -ms-flex-item-align: end;\n      align-self: end;\n}\n@media screen and (min-width: 1400px) {\n  .header-text .title {\n    font-size: 200px;\n  }\n}\n@media screen and (max-height: 750px) {\n  .header-text .title {\n    font-size: 100px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  .header-text .title {\n    font-size: 100px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .header-text .title {\n    font-size: 100px;\n    line-height: 1;\n  }\n}\n@media screen and (max-width: 420px) {\n  .header-text .title {\n    font-size: 70px;\n    line-height: 1;\n  }\n}\n@media screen and (max-width: 360px) {\n  .header-text .title {\n    font-size: 52px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .header-text .title {\n    font-size: 70px;\n    line-height: 1;\n  }\n}\n@media screen and (max-width: 420px) {\n  .header-text .title {\n    margin-top: auto;\n  }\n}\n.header-text .sub-title {\n  font-size: 46px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: left;\n  color: #f5eee2;\n  margin: 0;\n}\n@media screen and (min-width: 1400px) {\n  .header-text .sub-title {\n    font-size: 64px;\n  }\n}\n@media screen and (max-height: 750px) {\n  .header-text .sub-title {\n    font-size: 40px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  .header-text .sub-title {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .header-text .sub-title {\n    font-size: 40px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .header-text .sub-title {\n    font-size: 32px;\n    margin-bottom: 80px;\n  }\n}\n@media screen and (max-width: 360px) {\n  .header-text .sub-title {\n    font-size: 26px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .header-text .sub-title {\n    font-size: 28px;\n    margin-bottom: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0M6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxwb3J0Zm9saW8vc3JjXFxzY3NzXFxmb250cy5zY3NzIiwic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9oZWFkZXIvQzpcXFVzZXJzXFxNYXJjdXNcXERlc2t0b3BcXHBvcnRmb2xpby9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9DOlxcVXNlcnNcXE1hcmN1c1xcRGVza3RvcFxccG9ydGZvbGlvL3NyY1xcc2Nzc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNEZBQUE7QUFhUjtFQUNJLGlDQUFBO0FDWEo7QUQyRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUN4RUo7QUQwRUk7RUFDSSxnQkFBQTtBQ3hFUjtBRDRFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUN6RUo7QUQ0RUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUN6RUo7QUM3QkE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0FEZ0NKO0FDOUJJO0VBTEo7SUFNUSxZQUFBO0lBQ0EsYUFBQTtFRGlDTjtBQUNGO0FDL0JJO0VBVko7SUFXUSxXQUFBO0lBQ0EsYUFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VEa0NOO0FBQ0Y7QUNoQ0k7RUFqQko7SUFrQlEsV0FBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsU0FBQTtFRG1DTjtBQUNGO0FDaENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7QURtQ0o7QUNqQ0k7RUFOSjtJQU9RLFlBQUE7SUFD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M0hRO0VBbENKO0lBbUNRLGVBQUE7RUQ4SFY7QUFDRjtBQzVIUTtFQXRDSjtJQXVDUSxlQUFBO0lBQ0EsbUJBQUE7RUQrSFY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCAnLi9icmVha3BvaW50cy5zY3NzJztcclxuXHJcbi8vIEBmb250LWZhY2Uge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xyXG4vLyAgICAgc3JjOiB1cmwoJ34vYXNzZXRzL2ZvbnRzL09zd2FsZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxuLy8gfVxyXG5cclxuLy8gQGZvbnQtZmFjZSB7XHJcbi8vICAgICBmb250LWZhbWlseTogJ09zd2FsZCc7XHJcbi8vICAgICBzcmM6IHVybCgnfi9hc3NldHMvZm9udHMvT3N3YWxkLVJlZ3VsYXIudHRmJykgZm9ybWF0KCdvcGVudHlwZScpO1xyXG4vLyB9XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG5cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgLy9kZXNrdG9wXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC1oZWlnaHQ6IDc1MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbC1tb2JpbGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1ibG9jayB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS43ODtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHVuZGVybGluZS1zbGlkZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicm93bjtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJvd247XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udGl0bGUgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5saW5rIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbjpob3N0OjpuZy1kZWVwIC5ibG9iLW9uZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkge1xuICA6aG9zdDo6bmctZGVlcCAuYmxvYi1vbmUge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6aG9zdDo6bmctZGVlcCAuYmxvYi1vbmUge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgbGVmdDogNTBweDtcbiAgICB0b3A6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICA6aG9zdDo6bmctZGVlcCAuYmxvYi1vbmUge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogMTEwcHg7XG4gICAgbGVmdDogNTBweDtcbiAgICB0b3A6IDIwcHg7XG4gIH1cbn1cblxuOmhvc3Q6Om5nLWRlZXAgLmJsb2ItdHdvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMTAlO1xuICB0b3A6IDYwJTtcbiAgei1pbmRleDogMTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkge1xuICA6aG9zdDo6bmctZGVlcCAuYmxvYi10d28ge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6aG9zdDo6bmctZGVlcCAuYmxvYi10d28ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3Q6Om5nLWRlZXAgLmJsb2ItdHdvIHtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgfVxufVxuXG5oZWFkZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogOTBweCA2MHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDZiNjQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICBoZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cbn1cblxuLmhlYWRlci1saW5rcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAganVzdGlmeS1zZWxmOiByaWdodDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5oZWFkZXItbGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5oZWFkZXItbGlua3MgLmxpbmsge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2Y1ZWVlMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG59XG4uaGVhZGVyLWxpbmtzIC5saW5rOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZWVlMjtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcbn1cbi5oZWFkZXItbGlua3MgLmxpbms6aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XG59XG4uaGVhZGVyLWxpbmtzIC5saW5rOmhvdmVyOjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVlZWUyO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaGVhZGVyLWxpbmtzIC5saW5rIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5oZWFkZXItbGlua3MgLmxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4uaGVhZGVyLWxpbmtzIC5saW5rOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tcmlnaHQ6IDQ3cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaGVhZGVyLWxpbmtzIC5saW5rOmZpcnN0LW9mLXR5cGUge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgfVxufVxuLmhlYWRlci1saW5rcyAuYmxvYi1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjBweDtcbiAgcmlnaHQ6IC02MHB4O1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmhlYWRlci1saW5rcyAuYmxvYi1jb250YWluZXIge1xuICAgIHRvcDogLTMwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaGVhZGVyLWxpbmtzIC5ibG9iLWNvbnRhaW5lciB7XG4gICAgdG9wOiA2MHB4O1xuICB9XG59XG4uaGVhZGVyLWxpbmtzIC5ibG9iLWNvbnRhaW5lciBpbWcge1xuICB3aWR0aDogNTAwcHg7XG4gIGhlaWdodDogNzIwLjFweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XG4gIC5oZWFkZXItbGlua3MgLmJsb2ItY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIGhlaWdodDogaW5pdGlhbDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5oZWFkZXItbGlua3MgLmJsb2ItY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIGhlaWdodDogaW5pdGlhbDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmhlYWRlci1saW5rcyAuYmxvYi1jb250YWluZXIgaW1nIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5oZWFkZXItbGlua3MgLmJsb2ItY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaGVhZGVyLWxpbmtzIC5ibG9iLWNvbnRhaW5lciBpbWcge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5oZWFkZXItbGlua3MgLmJsb2ItY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICB9XG59XG4uaGVhZGVyLWxpbmtzIC5ibG9iLWNvbnRhaW5lciBjYW52YXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG59XG5cbi5oZWFkZXItdGV4dCB7XG4gIGp1c3RpZnktc2VsZjogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2Y1ZWVlMjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBncmlkO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmhlYWRlci10ZXh0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5oZWFkZXItdGV4dCAubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTMwMHB4KSB7XG4gIC5oZWFkZXItdGV4dCAubG9nbyB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmhlYWRlci10ZXh0IC5sb2dvIHtcbiAgICB3aWR0aDogNzBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaGVhZGVyLXRleHQgLmxvZ28ge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgfVxufVxuLmhlYWRlci10ZXh0IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE0MDBweCkge1xuICAuaGVhZGVyLXRleHQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIHtcbiAgLmhlYWRlci10ZXh0IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLmhlYWRlci10ZXh0IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLmhlYWRlci10ZXh0IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLmhlYWRlci10ZXh0IC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICAuaGVhZGVyLXRleHQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDUycHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaGVhZGVyLXRleHQgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDcwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDE7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5oZWFkZXItdGV4dCAudGl0bGUge1xuICAgIG1hcmdpbi10b3A6IGF1dG87XG4gIH1cbn1cbi5oZWFkZXItdGV4dCAuc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiA0NnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogI2Y1ZWVlMjtcbiAgbWFyZ2luOiAwO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XG4gIC5oZWFkZXItdGV4dCAuc3ViLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDY0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkge1xuICAuaGVhZGVyLXRleHQgLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaGVhZGVyLXRleHQgLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuaGVhZGVyLXRleHQgLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICAuaGVhZGVyLXRleHQgLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAzMnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDgwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIC5oZWFkZXItdGV4dCAuc3ViLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuaGVhZGVyLXRleHQgLnN1Yi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi9zY3NzL2NvbG9ycy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vc2Nzcy9mb250cy5zY3NzJztcclxuXHJcbjpob3N0OjpuZy1kZWVwIC5ibG9iLW9uZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDokbW9iaWxlKSB7XHJcbiAgICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMTBweDtcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgIHRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG46aG9zdDo6bmctZGVlcCAuYmxvYi10d28ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogLTEwJTtcclxuICAgIHRvcDogNjAlO1xyXG4gICAgei1pbmRleDogMTtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDokbW9iaWxlKSB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiA5MHB4IDYwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgLy9wb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgLy9jbGlwLXBhdGg6IHBvbHlnb24oMCAwLCAxMDAlIDAsIDEwMCUgODYlLCAwJSAxMDAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6JG1vYmlsZSkge1xyXG4gICAgICAgIC8vaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuLmhlYWRlci1saW5rcyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC13aWR0aDokbW9iaWxlKSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH1cclxuXHJcbiAgICAubGluayB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAkYnJvd247XHJcblxyXG4gICAgICAgIEBpbmNsdWRlIHVuZGVybGluZS1zbGlkZTtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQobWF4LXdpZHRoOiRtb2JpbGUpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQ3cHg7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtd2lkdGg6JG1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5ibG9iLWNvbnRhaW5lciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNjBweDtcclxuICAgICAgICByaWdodDogLTYwcHg7XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgIHRvcDogLTMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgdG9wOiA2MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcyMC4xcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblxyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc21hbGwtbGFwdG9wKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDUwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGluaXRpYWw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjYW52YXMge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uaGVhZGVyLXRleHQge1xyXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICRicm93bjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuXHJcbiAgICAubG9nbyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLWxhcHRvcCkge1xyXG4gICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIEBpbmNsdWRlIHNlY3Rpb24tdGl0bGU7XHJcblxyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG5cclxuICAgICAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yOiAkYnJvd247XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIC8vYWxpZ24tc2VsZjogZW5kO1xyXG5cclxuICAgICAgICAvL2Rlc2t0b3BcclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkZGVza3RvcCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDY0cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLW1vYmlsZSkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCIkd2hpdGU6ICNmZmZmZmY7XHJcbiRncmVlbjogIzAwNmI2NDtcclxuJG9yYW5nZTogI2Y1NmY0ZjtcclxuJGdyZWVuOiAjMDA2YjY0O1xyXG4kYnJvd246ICNmNWVlZTI7XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../animations/blob-canvas-animation */
    "./src/app/animations/blob-canvas-animation.ts");

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(ngZone, CanvasBlob) {
        _classCallCheck(this, HeaderComponent);

        this.ngZone = ngZone;
        this.CanvasBlob = CanvasBlob;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          var blobOne = new _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_2__["CanvasBlob"]();
          var blobTwo = new _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_2__["CanvasBlob"]();
          this.ngZone.runOutsideAngular(function () {
            return blobOne.createBlob(_this4.canvas.nativeElement, '#f56f4f', 'blob-one', 136, 180, 180, 10, 10, 0.2);
          });
          this.ngZone.runOutsideAngular(function () {
            return blobTwo.createBlob(_this4.canvas.nativeElement, 'rgba(245,111,79,0.8)', 'blob-two', 136, 180, 180, 0, 0, 0.25);
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_2__["CanvasBlob"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas', {
      "static": true
    })], HeaderComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('slide')], HeaderComponent.prototype, "slides", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/header/header.component.scss"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/projects/projects.component.scss":
  /*!**************************************************!*\
    !*** ./src/app/projects/projects.component.scss ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsProjectsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;600&display=swap\");\n* {\n  font-family: \"Oswald\", sans-serif;\n}\n.title {\n  font-size: 60px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  text-transform: uppercase;\n}\n.title span {\n  font-weight: 300;\n}\n.sub-title {\n  font-size: 32px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-transform: uppercase;\n}\n.link {\n  font-size: 18px;\n  text-align: center;\n}\n:host::ng-deep .blob-one {\n  position: absolute;\n  z-index: 1;\n  left: 340px;\n  top: 150px;\n}\n@media screen and (max-height: 750px) {\n  :host::ng-deep .blob-one {\n    width: 200px;\n    height: 200px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host::ng-deep .blob-one {\n    width: 74px;\n    height: 96px;\n    left: 160px;\n    top: 100px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host::ng-deep .blob-one {\n    width: 74px;\n    height: 96px;\n    left: 160px;\n    top: 100px;\n  }\n}\n:host .projects {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  padding: 60px;\n  background-color: #006b64;\n}\n@media screen and (max-height: 750px) {\n  :host .projects {\n    height: initial;\n  }\n}\n@media screen and (max-width: 850px) {\n  :host .projects {\n    height: 100vh;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host .projects {\n    height: 100vh;\n    padding: 24px 20px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host .projects {\n    padding: 24px 20px;\n  }\n}\n:host .projects p {\n  color: #006b64;\n  text-align: center;\n  margin: 0;\n  font-size: 140px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-transform: uppercase;\n}\n@media screen and (min-width: 1400px) {\n  :host .projects p {\n    font-size: 200px;\n  }\n}\n@media screen and (max-height: 750px) {\n  :host .projects p {\n    font-size: 100px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  :host .projects p {\n    font-size: 100px;\n  }\n}\n@media screen and (max-width: 850px) {\n  :host .projects p {\n    font-size: 100px;\n    line-height: 1;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host .projects p {\n    font-size: 70px;\n    line-height: 1;\n  }\n}\n@media screen and (max-width: 360px) {\n  :host .projects p {\n    font-size: 52px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host .projects p {\n    font-size: 70px;\n    line-height: 1;\n  }\n}\n:host .projects .blob-container {\n  justify-self: flex-start;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n  margin-bottom: auto;\n}\n:host .projects .blob-container img {\n  max-width: 407px;\n  max-height: 475px;\n}\n@media screen and (max-width: 850px) {\n  :host .projects .blob-container img {\n    width: 400px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host .projects .blob-container img {\n    position: relative;\n    width: 171px;\n    height: 228px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host .projects .blob-container img {\n    position: relative;\n    width: 171px;\n    height: 228px;\n  }\n}\n:host .projects .projects-text {\n  display: block;\n  overflow: hidden;\n  -ms-flex-item-align: start;\n      align-self: flex-start;\n}\n@media screen and (max-width: 420px) {\n  :host .projects .projects-text {\n    -ms-flex-item-align: center;\n        align-self: center;\n    margin-bottom: 40px;\n  }\n}\n:host .projects .project-container {\n  position: absolute;\n  cursor: pointer;\n  z-index: 1;\n}\n@media screen and (max-width: 1300px) {\n  :host .projects .project-container {\n    top: 100px;\n  }\n}\n@media screen and (max-height: 750px) {\n  :host .projects .project-container {\n    top: 120px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  :host .projects .project-container {\n    top: 180px;\n  }\n}\n@media screen and (max-width: 850px) {\n  :host .projects .project-container {\n    top: 0;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host .projects .project-container {\n    top: 120px;\n  }\n}\n:host .projects .project-container:hover .overlay {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n:host .projects .project-container:hover .overlay p {\n  visibility: visible;\n  opacity: 1;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n}\n:host .projects .project-container .overlay {\n  visibility: hidden;\n  -webkit-transition: all 0.5s ease-in-out;\n  transition: all 0.5s ease-in-out;\n  opacity: 0;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: #006b64;\n}\n@media screen and (max-width: 850px) {\n  :host .projects .project-container .overlay {\n    display: none;\n  }\n}\n:host .projects .project-container .overlay p {\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  font-size: 16px;\n  font-weight: 300;\n  color: #ffffff;\n  line-height: normal;\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  :host .projects .project-container .overlay p {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 850px) {\n  :host .projects .project-container .overlay p {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host .projects .project-container .overlay p {\n    font-size: 14px;\n  }\n}\n:host .projects .project-container .overlay p:first-of-type {\n  font-size: 82px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: inherit;\n  letter-spacing: normal;\n  text-align: center;\n  margin-bottom: 10px;\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  :host .projects .project-container .overlay p:first-of-type {\n    font-size: 60px;\n  }\n}\n@media screen and (max-width: 850px) {\n  :host .projects .project-container .overlay p:first-of-type {\n    font-size: 60px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host .projects .project-container .overlay p:first-of-type {\n    font-size: 38px;\n  }\n}\n:host .projects .project-container.one {\n  width: 394px;\n  height: auto;\n}\n:host .projects .project-container.one img {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (max-width: 1300px) {\n  :host .projects .project-container.one {\n    width: 342px;\n  }\n}\n@media screen and (max-height: 750px) {\n  :host .projects .project-container.one {\n    width: 270px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  :host .projects .project-container.one {\n    width: 300px;\n  }\n}\n@media screen and (max-width: 850px) {\n  :host .projects .project-container.one {\n    width: 250px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host .projects .project-container.one {\n    width: 150px;\n    left: 0;\n  }\n}\n@media screen and (max-width: 360px) {\n  :host .projects .project-container.one {\n    width: 119px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host .projects .project-container.one {\n    width: 119px;\n  }\n  :host .projects .project-container.one img {\n    width: 119px;\n    height: 140px;\n  }\n}\n:host .projects .project-container.two {\n  width: 280px;\n}\n:host .projects .project-container.two img {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (max-width: 1300px) {\n  :host .projects .project-container.two {\n    width: 262.5px;\n  }\n}\n@media screen and (max-height: 750px) {\n  :host .projects .project-container.two {\n    width: 220px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  :host .projects .project-container.two {\n    width: 225px;\n  }\n}\n@media screen and (max-width: 850px) {\n  :host .projects .project-container.two {\n    width: 250px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host .projects .project-container.two {\n    width: 176px;\n    left: 50px;\n  }\n}\n@media screen and (max-width: 360px) {\n  :host .projects .project-container.two {\n    width: 120px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host .projects .project-container.two {\n    width: 120px;\n  }\n}\n:host .projects .project-container.three {\n  width: 360px;\n}\n:host .projects .project-container.three img {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (max-width: 1300px) {\n  :host .projects .project-container.three {\n    width: 314px;\n  }\n}\n@media screen and (max-height: 750px) {\n  :host .projects .project-container.three {\n    width: 240px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  :host .projects .project-container.three {\n    width: 266px;\n  }\n}\n@media screen and (max-width: 850px) {\n  :host .projects .project-container.three {\n    width: 250px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host .projects .project-container.three {\n    width: 200px;\n    left: 0;\n  }\n}\n@media screen and (max-width: 360px) {\n  :host .projects .project-container.three {\n    width: 143px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host .projects .project-container.three {\n    width: 143px;\n  }\n}\n:host .projects .project-container.four {\n  width: 359px;\n}\n:host .projects .project-container.four img {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (max-width: 1300px) {\n  :host .projects .project-container.four {\n    width: 350px;\n  }\n}\n@media screen and (max-height: 750px) {\n  :host .projects .project-container.four {\n    width: 265px;\n  }\n}\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {\n  :host .projects .project-container.four {\n    width: 300px;\n  }\n}\n@media screen and (max-width: 850px) {\n  :host .projects .project-container.four {\n    width: 250px;\n  }\n}\n@media screen and (max-width: 420px) {\n  :host .projects .project-container.four {\n    width: 197px;\n    left: 50px;\n  }\n}\n@media screen and (max-width: 360px) {\n  :host .projects .project-container.four {\n    width: 180px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  :host .projects .project-container.four {\n    width: 180px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvQzpcXFVzZXJzXFxNYXJjdXNcXERlc2t0b3BcXHBvcnRmb2xpby9zcmNcXHNjc3NcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9DOlxcVXNlcnNcXE1hcmN1c1xcRGVza3RvcFxccG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9qZWN0c1xccHJvamVjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL0M6XFxVc2Vyc1xcTWFyY3VzXFxEZXNrdG9wXFxwb3J0Zm9saW8vc3JjXFxzY3NzXFxjb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBUSw0RkFBQTtBQWFSO0VBQ0ksaUNBQUE7QUNYSjtBRDJFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ3hFSjtBRDBFSTtFQUNJLGdCQUFBO0FDeEVSO0FENEVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ3pFSjtBRDRFQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQ3pFSjtBQzdCQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FEZ0NKO0FDOUJJO0VBTko7SUFPUSxZQUFBO0lBQ0EsYUFBQTtFRGlDTjtBQUNGO0FDL0JJO0VBWEo7SUFZUSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VEa0NOO0FBQ0Y7QUNoQ0k7RUFsQko7SUFtQlEsV0FBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFRG1DTjtBQUNGO0FDaENJO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUFBLG9CQUFBO0VBQUEsYUFBQTtFQUNB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QSxZQUFBO0FENEZwQjtBQ3pGZ0I7RUFUSjtJQVVRLFlBQUE7RUQ0RmxCO0FBQ0Y7QUMxRmdCO0VBYko7SUFjUSxZQUFBO0VENkZsQjtBQUNGO0FDM0ZnQjtFQWpCSjtJQWtCUSxZQUFBO0VEOEZsQjtBQUNGO0FDNUZnQjtFQXJCSjtJQXNCUSxZQUFBO0VEK0ZsQjtBQUNGO0FDN0ZnQjtFQXpCSjtJQTBCUSxZQUFBO0lBRUEsT0FBQTtFRCtGbEI7QUFDRjtBQzdGZ0I7RUEvQko7SUFnQ1EsWUFBQTtFRGdHbEI7QUFDRjtBQzlGZ0I7RUFuQ0o7SUFvQ1EsWUFBQTtFRGlHbEI7QUFDRjtBQzlGWTtFQUVJLFlBQUE7QUQrRmhCO0FDN0ZnQjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FEK0ZwQjtBQzVGZ0I7RUFUSjtJQVVRLFlBQUE7RUQrRmxCO0FBQ0Y7QUM3RmdCO0VBYko7SUFjUSxZQUFBO0VEZ0dsQjtBQUNGO0FDOUZnQjtFQWpCSjtJQWtCUSxZQUFBO0VEaUdsQjtBQUNGO0FDL0ZnQjtFQXJCSjtJQXNCUSxZQUFBO0VEa0dsQjtBQUNGO0FDaEdnQjtFQXpCSjtJQTBCUSxZQUFBO0lBRUEsVUFBQTtFRGtHbEI7QUFDRjtBQ2hHZ0I7RUEvQko7SUFnQ1EsWUFBQTtFRG1HbEI7QUFDRjtBQ2pHZ0I7RUFuQ0o7SUFvQ1EsWUFBQTtFRG9HbEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3N3YWxkOndnaHRAMjAwOzMwMDs2MDAmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgJy4vYnJlYWtwb2ludHMuc2Nzcyc7XHJcblxyXG4vLyBAZm9udC1mYWNlIHtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJztcclxuLy8gICAgIHNyYzogdXJsKCd+L2Fzc2V0cy9mb250cy9Pc3dhbGQtUmVndWxhci50dGYnKSBmb3JtYXQoJ29wZW50eXBlJyk7XHJcbi8vIH1cclxuXHJcbi8vIEBmb250LWZhY2Uge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xyXG4vLyAgICAgc3JjOiB1cmwoJ34vYXNzZXRzL2ZvbnRzL09zd2FsZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxuLy8gfVxyXG5cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ09zd2FsZCcsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBtaXhpbiBzZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMTQwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIC8vZGVza3RvcFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQwMHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc21hbGwtbW9iaWxlKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA1MnB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHRleHQtYmxvY2sge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNzg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS43MTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xyXG4gICAgfVxyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAzMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubGluayB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbkBtaXhpbiB1bmRlcmxpbmUtc2xpZGUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBzdWJwaXhlbC1hbnRpYWxpYXNlZDtcclxuXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJvd247XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC42cyBlYXNlLWluLW91dDtcclxuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XHJcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJyb3duO1xyXG4gICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzYwMCZkaXNwbGF5PXN3YXBcIik7XG4qIHtcbiAgZm9udC1mYW1pbHk6IFwiT3N3YWxkXCIsIHNhbnMtc2VyaWY7XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnRpdGxlIHNwYW4ge1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ubGluayB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdDo6bmctZGVlcCAuYmxvYi1vbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGxlZnQ6IDM0MHB4O1xuICB0b3A6IDE1MHB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIC5ibG9iLW9uZSB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpob3N0OjpuZy1kZWVwIC5ibG9iLW9uZSB7XG4gICAgd2lkdGg6IDc0cHg7XG4gICAgaGVpZ2h0OiA5NnB4O1xuICAgIGxlZnQ6IDE2MHB4O1xuICAgIHRvcDogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICA6aG9zdDo6bmctZGVlcCAuYmxvYi1vbmUge1xuICAgIHdpZHRoOiA3NHB4O1xuICAgIGhlaWdodDogOTZweDtcbiAgICBsZWZ0OiAxNjBweDtcbiAgICB0b3A6IDEwMHB4O1xuICB9XG59XG5cbjpob3N0IC5wcm9qZWN0cyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nOiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2YjY0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XG4gIDpob3N0IC5wcm9qZWN0cyB7XG4gICAgaGVpZ2h0OiBpbml0aWFsO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICA6aG9zdCAucHJvamVjdHMge1xuICAgIGhlaWdodDogMTAwdmg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpob3N0IC5wcm9qZWN0cyB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICA6aG9zdCAucHJvamVjdHMge1xuICAgIHBhZGRpbmc6IDI0cHggMjBweDtcbiAgfVxufVxuOmhvc3QgLnByb2plY3RzIHAge1xuICBjb2xvcjogIzAwNmI2NDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTQwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIHAge1xuICAgIGZvbnQtc2l6ZTogMjAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkge1xuICA6aG9zdCAucHJvamVjdHMgcCB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIHAge1xuICAgIGZvbnQtc2l6ZTogMTAwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIDpob3N0IC5wcm9qZWN0cyBwIHtcbiAgICBmb250LXNpemU6IDEwMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6aG9zdCAucHJvamVjdHMgcCB7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICA6aG9zdCAucHJvamVjdHMgcCB7XG4gICAgZm9udC1zaXplOiA1MnB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIHAge1xuICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICBsaW5lLWhlaWdodDogMTtcbiAgfVxufVxuOmhvc3QgLnByb2plY3RzIC5ibG9iLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktc2VsZjogZmxleC1zdGFydDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcbn1cbjpob3N0IC5wcm9qZWN0cyAuYmxvYi1jb250YWluZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiA0MDdweDtcbiAgbWF4LWhlaWdodDogNDc1cHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLmJsb2ItY29udGFpbmVyIGltZyB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLmJsb2ItY29udGFpbmVyIGltZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNzFweDtcbiAgICBoZWlnaHQ6IDIyOHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5ibG9iLWNvbnRhaW5lciBpbWcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTcxcHg7XG4gICAgaGVpZ2h0OiAyMjhweDtcbiAgfVxufVxuOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0cy10ZXh0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3RzLXRleHQge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG59XG46aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHotaW5kZXg6IDE7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgdG9wOiAxMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XG4gIDpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIge1xuICAgIHRvcDogMTIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIDpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIge1xuICAgIHRvcDogMTgwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIDpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIge1xuICAgIHRvcDogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIDpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIge1xuICAgIHRvcDogMTIwcHg7XG4gIH1cbn1cbjpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXI6aG92ZXIgLm92ZXJsYXkge1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xufVxuOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lcjpob3ZlciAub3ZlcmxheSBwIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbn1cbjpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLm92ZXJsYXkge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2YjY0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciAub3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciAub3ZlcmxheSBwIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciAub3ZlcmxheSBwIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIDpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIgLm92ZXJsYXkgcCB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5vdmVybGF5IHAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lciAub3ZlcmxheSBwOmZpcnN0LW9mLXR5cGUge1xuICBmb250LXNpemU6IDgycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5vdmVybGF5IHA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5vdmVybGF5IHA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyIC5vdmVybGF5IHA6Zmlyc3Qtb2YtdHlwZSB7XG4gICAgZm9udC1zaXplOiAzOHB4O1xuICB9XG59XG46aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLm9uZSB7XG4gIHdpZHRoOiAzOTRweDtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci5vbmUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLm9uZSB7XG4gICAgd2lkdGg6IDM0MnB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci5vbmUge1xuICAgIHdpZHRoOiAyNzBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci5vbmUge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci5vbmUge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci5vbmUge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBsZWZ0OiAwO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLm9uZSB7XG4gICAgd2lkdGg6IDExOXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci5vbmUge1xuICAgIHdpZHRoOiAxMTlweDtcbiAgfVxuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLm9uZSBpbWcge1xuICAgIHdpZHRoOiAxMTlweDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICB9XG59XG46aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLnR3byB7XG4gIHdpZHRoOiAyODBweDtcbn1cbjpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIudHdvIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50d28ge1xuICAgIHdpZHRoOiAyNjIuNXB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50d28ge1xuICAgIHdpZHRoOiAyMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50d28ge1xuICAgIHdpZHRoOiAyMjVweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50d28ge1xuICAgIHdpZHRoOiAyNTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50d28ge1xuICAgIHdpZHRoOiAxNzZweDtcbiAgICBsZWZ0OiA1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLnR3byB7XG4gICAgd2lkdGg6IDEyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50d28ge1xuICAgIHdpZHRoOiAxMjBweDtcbiAgfVxufVxuOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50aHJlZSB7XG4gIHdpZHRoOiAzNjBweDtcbn1cbjpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIudGhyZWUgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLnRocmVlIHtcbiAgICB3aWR0aDogMzE0cHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3NTBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLnRocmVlIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIDpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIudGhyZWUge1xuICAgIHdpZHRoOiAyNjZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50aHJlZSB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLnRocmVlIHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzYwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50aHJlZSB7XG4gICAgd2lkdGg6IDE0M3B4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci50aHJlZSB7XG4gICAgd2lkdGg6IDE0M3B4O1xuICB9XG59XG46aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLmZvdXIge1xuICB3aWR0aDogMzU5cHg7XG59XG46aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLmZvdXIgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLmZvdXIge1xuICAgIHdpZHRoOiAzNTBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XG4gIDpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIuZm91ciB7XG4gICAgd2lkdGg6IDI2NXB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICA6aG9zdCAucHJvamVjdHMgLnByb2plY3QtY29udGFpbmVyLmZvdXIge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci5mb3VyIHtcbiAgICB3aWR0aDogMjUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIDpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIuZm91ciB7XG4gICAgd2lkdGg6IDE5N3B4O1xuICAgIGxlZnQ6IDUwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2MHB4KSB7XG4gIDpob3N0IC5wcm9qZWN0cyAucHJvamVjdC1jb250YWluZXIuZm91ciB7XG4gICAgd2lkdGg6IDE4MHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgOmhvc3QgLnByb2plY3RzIC5wcm9qZWN0LWNvbnRhaW5lci5mb3VyIHtcbiAgICB3aWR0aDogMTgwcHg7XG4gIH1cbn0iLCJAaW1wb3J0ICcuLi8uLi9zY3NzL2NvbG9ycy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vc2Nzcy9mb250cy5zY3NzJztcclxuXHJcbjpob3N0OjpuZy1kZWVwIC5ibG9iLW9uZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbGVmdDogMzQwcHg7XHJcbiAgICB0b3A6IDE1MHB4O1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC1oZWlnaHQ6IDc1MHB4KSB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICBsZWZ0OiAxNjBweDtcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIHdpZHRoOiA3NHB4O1xyXG4gICAgICAgIGhlaWdodDogOTZweDtcclxuICAgICAgICBsZWZ0OiAxNjBweDtcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgfVxyXG59XHJcbjpob3N0IHtcclxuICAgIC5wcm9qZWN0cyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgLy9oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNzUwcHgpIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjRweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZ3JlZW47XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzZWN0aW9uLXRpdGxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJsb2ItY29udGFpbmVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIC8vcmF0aW8gMC44NVxyXG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MDdweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDQ3NXB4O1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMjhweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE3MXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjI4cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0cy10ZXh0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9qZWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLWxhcHRvcCkge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDc1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDEyMHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxODBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgIHRvcDogMTIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLm92ZXJsYXkge1xyXG4gICAgICAgICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmVlbjtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLWRldmljZS13aWR0aDogNzY4cHgpIGFuZCAobWF4LWRldmljZS13aWR0aDogMTAyNHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogODJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAmLm9uZSB7XHJcbiAgICAgICAgICAgICAgICAvL3JhdGlvIDAuODVcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAzOTRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc21hbGwtbGFwdG9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0MnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC1oZWlnaHQ6IDc1MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI3MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi1kZXZpY2Utd2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDEwMjRweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkc21hbGwtbW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExOXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMTlweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDExOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJi50d28ge1xyXG4gICAgICAgICAgICAgICAgLy8gcmF0aW8gMC43NVxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbC1sYXB0b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjYyLjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTc2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLW1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYudGhyZWUge1xyXG4gICAgICAgICAgICAgICAgLy9yYXRpbyAxLjA1XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzYwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLWxhcHRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLW1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNDNweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTQzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICYuZm91ciB7XHJcbiAgICAgICAgICAgICAgICAvL3JhdGlvIDEuODk1XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzU5cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLWxhcHRvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZChtYXgtaGVpZ2h0OiA3NTBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTk3cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHNtYWxsLW1vYmlsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxODBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiJHdoaXRlOiAjZmZmZmZmO1xyXG4kZ3JlZW46ICMwMDZiNjQ7XHJcbiRvcmFuZ2U6ICNmNTZmNGY7XHJcbiRncmVlbjogIzAwNmI2NDtcclxuJGJyb3duOiAjZjVlZWUyO1xyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/projects/projects.component.ts":
  /*!************************************************!*\
    !*** ./src/app/projects/projects.component.ts ***!
    \************************************************/

  /*! exports provided: ProjectsComponent */

  /***/
  function srcAppProjectsProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function () {
      return ProjectsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _assets_project_data_projects_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../assets/project-data/projects.json */
    "./src/assets/project-data/projects.json");

    var _assets_project_data_projects_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../assets/project-data/projects.json */
    "./src/assets/project-data/projects.json", 1);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../animations/blob-canvas-animation */
    "./src/app/animations/blob-canvas-animation.ts");
    /* harmony import */


    var gsap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! gsap */
    "./node_modules/gsap/index.js");
    /* harmony import */


    var scrollmagic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! scrollmagic */
    "./node_modules/scrollmagic/scrollmagic/uncompressed/ScrollMagic.js");
    /* harmony import */


    var scrollmagic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(scrollmagic__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! scrollmagic-plugin-gsap */
    "./node_modules/scrollmagic-plugin-gsap/index.js");
    /* harmony import */


    var scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_6__); //import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators';


    Object(scrollmagic_plugin_gsap__WEBPACK_IMPORTED_MODULE_6__["ScrollMagicPluginGsap"])(scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a, gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"], gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]);

    var ProjectsComponent = /*#__PURE__*/function (_animations_blob_canv) {
      _inherits(ProjectsComponent, _animations_blob_canv);

      var _super = _createSuper(ProjectsComponent);

      function ProjectsComponent(el, ngZone) {
        var _this5;

        _classCallCheck(this, ProjectsComponent);

        _this5 = _super.call(this);
        _this5.el = el;
        _this5.ngZone = ngZone;
        _this5["delete"] = true;
        _this5.singleProjects = _assets_project_data_projects_json__WEBPACK_IMPORTED_MODULE_1__;
        _this5.currentState = 'initial';
        _this5.controller = new scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a.Controller();
        return _this5;
      }

      _createClass(ProjectsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "findX",
        value: function findX(sideOfScreen, landscapePos, elementWidth, margin) {
          //landscape phones
          if (this.width < 850 && this.height < 500) {
            return this.width / 2 + landscapePos;
            return 0 + landscapePos; //this.width / 2 - elementWidth;
          }

          if (sideOfScreen === 'right') {
            if (this.width > 900) {
              return this.width / 2 + margin;
            } else {
              return this.width / 2 - elementWidth + 60 - 30;
            }
          }

          if (sideOfScreen === 'left') {
            if (this.width > 900) {
              return this.width / 2 - elementWidth - margin;
            } else {
              return this.width / 2 - 60 - 30;
            }
          }
        }
      }, {
        key: "findY",
        value: function findY(row, elementHeight, top, margin, overlap, sideOfScreen) {
          //landscape phones
          if (this.width < 850 && this.height < 500) {
            return 0;
          }

          if (this.height < 650 && this.width > 900) {
            return elementHeight + margin + top + 60;
          }

          if (this.width > 900) {
            return elementHeight + margin + top + 30;
          } else {
            return this.height / 2 - row;
          }
        } // wait for image to load before getting height and width

      }, {
        key: "onImageLoad",
        value: function onImageLoad(evt) {
          var _this6 = this;

          if (evt && evt.target) {
            setTimeout(function () {
              _this6.width = window.innerWidth;
              _this6.height = window.innerHeight;
              _this6.elementChildren = _this6.projects.first.nativeElement.children;
              _this6.projectsContainer = _this6.projects.last.nativeElement;
              var tweens = {
                headerColorFadeOut: gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to('body, .app-content, header, .projects', 300, {
                  backgroundColor: '#f5eee2',
                  immediateRender: false
                }),
                projectsColorFadeOut: gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to('.projects ,body,.app-content, .about ', 300, {
                  backgroundColor: '#006b64',
                  immediateRender: false
                }),
                // start of projects sliding in
                startTween: gsap__WEBPACK_IMPORTED_MODULE_4__["TweenMax"].to('.projects-text', 800, {
                  opacity: 0,
                  overwrite: 'auto',
                  immediateRender: false
                }),
                wipeAnimations: [new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]().fromTo('.one', 8000, {
                  x: _this6.width - _this6.elementChildren[2].clientWidth / 2,
                  y: -50,
                  scale: 1.5
                }, {
                  scale: 1,
                  x: _this6.findX('right', 0 - _this6.elementChildren[2].clientWidth - 7.5, _this6.elementChildren[2].clientWidth, 15),
                  y: _this6.findY(_this6.elementChildren[3].clientHeight + _this6.elementChildren[2].clientHeight - 48, 0, 0, 80, 0),
                  overwrite: false
                }), new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]().fromTo('.two', 1000, {
                  x: 0 - _this6.width - _this6.elementChildren[3].clientWidth,
                  y: 0,
                  scale: 2
                }, {
                  scale: 1,
                  x: _this6.findX('left', 0 - (_this6.elementChildren[2].clientWidth + _this6.elementChildren[3].clientWidth) - 22.5, _this6.elementChildren[3].clientWidth, 15),
                  y: _this6.findY(_this6.elementChildren[3].clientHeight - 24, 0, 0, 80, 30),
                  overwrite: false
                }), new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]().fromTo('.three', 500, {
                  x: _this6.width > 900 ? _this6.width - _this6.elementChildren[4].clientWidth / 4 : _this6.width - _this6.elementChildren[4].clientWidth / 10,
                  y: _this6.height - 30 + 20,
                  scale: 1.25
                }, {
                  scale: 1,
                  x: _this6.width > 900 ? _this6.width / 2 - _this6.elementChildren[4].clientWidth - 15 : _this6.height < 500 && _this6.width < 850 ? _this6.width / 2 + 7.5 : _this6.width / 2 - _this6.elementChildren[4].clientWidth + 60 - 30,
                  y: _this6.findY(0, _this6.elementChildren[3].clientHeight, 30, 80, 60),
                  overwrite: false
                }), new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]().fromTo('.four', 2500, {
                  x: _this6.width + _this6.elementChildren[4].clientWidth * 2,
                  y: _this6.height - 50,
                  scale: 2
                }, {
                  scale: 1,
                  x: _this6.findX(_this6.width > 900 ? 'right' : 'left', _this6.elementChildren[4].clientWidth + 22.5, 0, 15),
                  y: _this6.findY(0 - _this6.elementChildren[4].clientHeight + 24, _this6.elementChildren[2].clientHeight, 30, 80, 90),
                  overwrite: false
                })]
              };
              var timeline = new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]();
              var timelineTwo = new gsap__WEBPACK_IMPORTED_MODULE_4__["TimelineMax"]();
              timeline.add([tweens.headerColorFadeOut]);
              timelineTwo.add([tweens.projectsColorFadeOut]); // header color fade

              new scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a.Scene({
                triggerHook: 0,
                duration: 800,
                offset: _this6.width > 900 ? 200 : 0
              }) //.addIndicators()
              .setTween(timeline).addTo(_this6.controller); // assign the scene to the controller
              //container

              new scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a.Scene({
                triggerElement: '.projects',
                duration: _this6.width > 900 ? _this6.height * 2.1 : _this6.height * 1.6,
                offset: _this6.width > 900 ? 550 : _this6.height / 2
              }) //.addIndicators()
              .setTween(tweens.startTween).setPin('.projects-text, .projects') // pins the element for the the scene's duration
              .addTo(_this6.controller); // assign the scene to the controller
              // text scale

              new scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a.Scene({
                triggerElement: '.projects',
                duration: _this6.width > 900 ? _this6.height * 1.5 : _this6.height,
                offset: _this6.width > 900 ? 550 : 600
              }) //.addIndicators()
              .setTween(tweens.startTween).addTo(_this6.controller); // assign the scene to the controller
              // project image

              new scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a.Scene({
                triggerElement: '.projects',
                duration: _this6.width > 900 ? _this6.height : _this6.height,
                offset: _this6.width > 900 ? 800 : 500
              }) //.addIndicators()
              .setTween(tweens.wipeAnimations[0]).addTo(_this6.controller); // assign the scene to the controller
              // project image

              new scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a.Scene({
                triggerElement: '.projects',
                duration: _this6.width > 900 ? _this6.height : _this6.height,
                offset: _this6.width > 900 ? 800 : 500
              }) //.addIndicators()
              .setTween(tweens.wipeAnimations[1]).addTo(_this6.controller); // assign the scene to the controller
              // project image

              new scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a.Scene({
                triggerElement: '.projects',
                duration: _this6.width > 900 ? _this6.height : _this6.height,
                offset: _this6.width > 900 ? 700 : 500
              }) //.addIndicators()
              .setTween(tweens.wipeAnimations[2]).addTo(_this6.controller); // assign the scene to the controller
              // project image

              new scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a.Scene({
                triggerElement: '.projects',
                duration: _this6.width > 900 ? _this6.height : _this6.height,
                offset: _this6.width > 900 ? 800 : 500
              }) //.addIndicators()
              .setTween(tweens.wipeAnimations[3]).addTo(_this6.controller); // assign the scene to the controller

              new scrollmagic__WEBPACK_IMPORTED_MODULE_5___default.a.Scene({
                triggerElement: '.about',
                duration: 600,
                offset: -200
              }) //.addIndicators()
              .setTween(timelineTwo).addTo(_this6.controller); // assign the scene to the controller

              var blobOne = new _animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_3__["CanvasBlob"]();

              _this6.ngZone.runOutsideAngular(function () {
                return blobOne.createBlob(_this6.canvas.nativeElement, '#f56f4f', 'blob-one', 136, 180, 190, 10, 10);
              });
            }, 200);
          }
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "projectHover",
        value: function projectHover() {
          this.isOverflown(this.overlayTitle);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {} // listen to event from single project to close it or decide what data it should hold

      }, {
        key: "toggleChildComponent",
        value: function toggleChildComponent(index) {
          this["delete"] = !this["delete"];
          this.singleProject = this.singleProjects[index];
          this.currentSingleProjectIndex = index;
        } // todo move to service
        // when user clicks next or prev on single projects component -- work out what project to show

      }, {
        key: "nextChildComponent",
        value: function nextChildComponent(event) {
          // turn object into useable array
          var entries = Object.entries(this.singleProjects); // next and prev projects

          var sp = this.singleProjects[this.currentSingleProjectIndex]['index'] + 1;
          var negSP = this.singleProjects[this.currentSingleProjectIndex]['index'] - 1; // loop though object find useful info and conditionally extract

          for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
            var value = _entries[_i];

            if (event) {
              if (value[1].index === sp) {
                this.currentSingleProjectIndex = value[0];
                this.singleProject = value[1];
              } else if (sp >= 3) {
                this.currentSingleProjectIndex = 'saffron';
                this.singleProject = this.singleProjects['saffron'];
              }
            } else {
              if (value[1].index === negSP) {
                this.currentSingleProjectIndex = value[0];
                this.singleProject = value[1];
              } else if (negSP <= 0) {
                this.currentSingleProjectIndex = 'saffron';
                this.singleProject = this.singleProjects['saffron'];
              }
            }
          }
        } // if overlay text overflows element, change color of part of text that s overflown

      }, {
        key: "isOverflown",
        value: function isOverflown(element) {
          var parentWidth = element.target.clientWidth;
          var elementWidth = element.target.firstElementChild.clientWidth;
          var widthDelta = elementWidth - parentWidth;
          element.target.firstElementChild.style.background = "linear-gradient(to right, #006b64 ".concat(widthDelta / 2, "px, #ffffff ").concat(widthDelta / 2, "px, #ffffff ").concat(parentWidth, "px, #ffffff ").concat(parentWidth + widthDelta / 2, "px, #006b64 ").concat(parentWidth + widthDelta / 2, "px )");
          element.target.firstElementChild.style.webkitTextFillColor = 'transparent';
          element.target.firstElementChild.style.webkitBackgroundClip = 'text'; // if subtitle is outside of container div

          element.target.firstElementChild.clientHeight > element.target.clientHeight ? element.target.lastElementChild.style.color = '#006b64' : element.target.lastElementChild.style.color = 'white';
        }
      }]);

      return ProjectsComponent;
    }(_animations_blob_canvas_animation__WEBPACK_IMPORTED_MODULE_3__["CanvasBlob"]);

    ProjectsComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('projectsText', {
      "static": true
    })], ProjectsComponent.prototype, "projectsText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('projects')], ProjectsComponent.prototype, "projects", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('canvas', {
      "static": true
    })], ProjectsComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChildren"])('overlayTitle')], ProjectsComponent.prototype, "overlayTitle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()], ProjectsComponent.prototype, "delete", void 0);
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/projects.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./projects.component.scss */
      "./src/app/projects/projects.component.scss"))["default"]]
    })], ProjectsComponent);
    /***/
  },

  /***/
  "./src/app/projects/single-project/single-project.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/projects/single-project/single-project.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProjectsSingleProjectSingleProjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(\"https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;600&display=swap\");\n* {\n  font-family: \"Oswald\", sans-serif;\n}\n.title {\n  font-size: 60px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-align: center;\n  text-transform: uppercase;\n}\n.title span {\n  font-weight: 300;\n}\n.sub-title {\n  font-size: 32px;\n  font-weight: 300;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  text-transform: uppercase;\n}\n.link {\n  font-size: 18px;\n  text-align: center;\n}\n.single-project-container {\n  height: 100vh;\n  width: 100%;\n  position: absolute;\n  top: 100px;\n  left: 0;\n  z-index: 99;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n  background-color: #006b64;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container {\n    height: 100%;\n    overflow-y: auto;\n  }\n}\n.single-project-container.no-scroll {\n  position: fixed;\n  top: 0;\n  -ms-scroll-chaining: none;\n      overscroll-behavior: contain;\n}\n.single-project-container a {\n  cursor: pointer;\n  color: #f5eee2;\n  text-decoration: none;\n}\n.single-project-container .image-container {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  height: 100%;\n  width: 100%;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .image-container {\n    grid-column-start: 1;\n    grid-column-end: 3;\n  }\n}\n.single-project-container .image-container video {\n  position: absolute;\n  height: 100%;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .image-container video {\n    position: static;\n    height: 100%;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n  }\n}\n.single-project-container .image-container .close-mobile {\n  display: none;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .image-container .close-mobile {\n    display: block;\n    background-color: #f5eee2;\n    opacity: 0.68;\n    width: 70px;\n    position: absolute;\n    height: 40px;\n    right: 0;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    z-index: 1;\n    font-size: 14px;\n    color: #006b64;\n  }\n}\n.single-project-container .text-container {\n  grid-column-start: 2;\n  padding: 40px 40px 28px 40px;\n  color: #ffffff;\n  background: #006b64;\n  opacity: 0.91;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .text-container {\n    grid-column-start: 1;\n    grid-column-end: 3;\n    opacity: 1;\n    padding: 40px 60px 28px 60px;\n    position: relative;\n  }\n}\n.single-project-container .text-container .close {\n  -ms-flex-item-align: end;\n      align-self: flex-end;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .text-container .close {\n    display: none;\n  }\n}\n.single-project-container .text-container .description {\n  text-align: left;\n  max-width: 420px;\n  margin-bottom: auto;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .text-container .description {\n    margin-bottom: 40px;\n  }\n}\n.single-project-container .text-container .description .title {\n  font-size: 70px;\n  text-align: left;\n  margin-bottom: -10px;\n  margin-top: 20px;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .text-container .description .title {\n    font-size: 60px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .single-project-container .text-container .description .title {\n    font-size: 52px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .single-project-container .text-container .description .title {\n    font-size: 40px;\n    line-height: inherit;\n    margin-bottom: 10px;\n  }\n}\n.single-project-container .text-container .description .sub-title {\n  font-size: 18px;\n  margin-bottom: 25px;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .text-container .description .sub-title {\n    font-size: 16px;\n  }\n}\n@media screen and (max-width: 420px) {\n  .single-project-container .text-container .description .sub-title {\n    font-size: 14px;\n  }\n}\n.single-project-container .text-container .description .text {\n  font-size: 18px;\n  font-weight: normal;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.78;\n  letter-spacing: normal;\n  color: #ffffff;\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .single-project-container .text-container .description .text {\n    font-size: 14px;\n    line-height: 1.71;\n  }\n}\n@media screen and (max-width: 420px) {\n  .single-project-container .text-container .description .text {\n    font-size: 14px;\n    line-height: 1.71;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .single-project-container .text-container .description .text {\n    margin-bottom: 20px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .text-container .description .link {\n    font-size: 16px;\n  }\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .single-project-container .text-container .description .link {\n    font-size: 16px;\n  }\n}\n.single-project-container .text-container .description .project-nav-mobile {\n  display: none;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .text-container .description .project-nav-mobile {\n    display: block;\n    position: absolute;\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    left: 0;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n  }\n  .single-project-container .text-container .description .project-nav-mobile a {\n    width: 100%;\n  }\n  .single-project-container .text-container .description .project-nav-mobile a:first-of-type {\n    display: block;\n    width: 30px;\n    height: 30px;\n    background-image: url('/assets/arrow-left.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-left: 8px;\n  }\n  .single-project-container .text-container .description .project-nav-mobile a:last-of-type {\n    display: block;\n    width: 30px;\n    height: 30px;\n    background-image: url('/assets/arrow-right.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin-right: 8px;\n  }\n}\n.single-project-container .text-container .project-nav {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n@media only screen and (max-width: 850px) and (orientation: landscape) {\n  .single-project-container .text-container .project-nav {\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .text-container .project-nav {\n    display: none;\n  }\n}\n.single-project-container .text-container .project-nav a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n@media screen and (max-width: 850px) {\n  .single-project-container .text-container .project-nav a {\n    font-size: 14px;\n  }\n}\n.single-project-container .text-container .project-nav a:first-of-type:hover::before {\n  -webkit-animation: bounce-left 1s forwards;\n          animation: bounce-left 1s forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n.single-project-container .text-container .project-nav a:first-of-type::before {\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-image: url('/assets/arrow-left.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-right: 10px;\n}\n.single-project-container .text-container .project-nav a:last-of-type:hover::after {\n  -webkit-animation: bounce-right 1s forwards;\n          animation: bounce-right 1s forwards;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-timing-function: ease-in-out;\n          animation-timing-function: ease-in-out;\n}\n.single-project-container .text-container .project-nav a:last-of-type::after {\n  content: \"\";\n  display: block;\n  width: 30px;\n  height: 30px;\n  background-image: url('/assets/arrow-right.svg');\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-left: 10px;\n}\n@-webkit-keyframes bounce-right {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n  50% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes bounce-right {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n  50% {\n    -webkit-transform: translateX(10px);\n            transform: translateX(10px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@-webkit-keyframes bounce-left {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n  50% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n@keyframes bounce-left {\n  0% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n  50% {\n    -webkit-transform: translateX(-10px);\n            transform: translateX(-10px);\n  }\n  100% {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvc2luZ2xlLXByb2plY3QvQzpcXFVzZXJzXFxNYXJjdXNcXERlc2t0b3BcXHBvcnRmb2xpby9zcmNcXHNjc3NcXGZvbnRzLnNjc3MiLCJzcmMvYXBwL3Byb2plY3RzL3NpbmdsZS1wcm9qZWN0L3NpbmdsZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9zaW5nbGUtcHJvamVjdC9DOlxcVXNlcnNcXE1hcmN1c1xcRGVza3RvcFxccG9ydGZvbGlvL3NyY1xcYXBwXFxwcm9qZWN0c1xcc2luZ2xlLXByb2plY3RcXHNpbmdsZS1wcm9qZWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9qZWN0cy9zaW5nbGUtcHJvamVjdC9DOlxcVXNlcnNcXE1hcmN1c1xcRGVza3RvcFxccG9ydGZvbGlvL3NyY1xcc2Nzc1xcY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQVEsNEZBQUE7QUFhUjtFQUNJLGlDQUFBO0FDWEo7QUQyRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUN4RUo7QUQwRUk7RUFDSSxnQkFBQTtBQ3hFUjtBRDRFQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUN6RUo7QUQ0RUE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7QUN6RUo7QUM3QkE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsOEJBQUE7VUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7TUFBQSw0QkFBQTtFQUNBLHlCQ1pJO0FGNENSO0FDOUJJO0VBZEo7SUFlUSxZQUFBO0lBQ0Es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Qk47QUFDRjtBQzVCQTtFQUNJO0lBQ0ksZ0NBQUE7WUFBQSx3QkFBQTtFRDhCTjtFQzVCRTtJQUNJLG9DQUFBO1lBQUEsNEJBQUE7RUQ4Qk47RUM1QkU7SUFDSSxnQ0FBQTtZQUFBLHdCQUFBO0VEOEJOO0FBQ0Y7QUN2Q0E7RUFDSTtJQUNJLGdDQUFBO1lBQUEsd0JBQUE7RUQ4Qk47RUM1QkU7SUFDSSxvQ0FBQTtZQUFBLDRCQUFBO0VEOEJOO0VDNUJFO0lBQ0ksZ0NBQUE7WUFBQSx3QkFBQTtFRDhCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvc2luZ2xlLXByb2plY3Qvc2luZ2xlLXByb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Pc3dhbGQ6d2dodEAyMDA7MzAwOzYwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCAnLi9icmVha3BvaW50cy5zY3NzJztcclxuXHJcbi8vIEBmb250LWZhY2Uge1xyXG4vLyAgICAgZm9udC1mYW1pbHk6ICdPc3dhbGQnO1xyXG4vLyAgICAgc3JjOiB1cmwoJ34vYXNzZXRzL2ZvbnRzL09zd2FsZC1SZWd1bGFyLnR0ZicpIGZvcm1hdCgnb3BlbnR5cGUnKTtcclxuLy8gfVxyXG5cclxuLy8gQGZvbnQtZmFjZSB7XHJcbi8vICAgICBmb250LWZhbWlseTogJ09zd2FsZCc7XHJcbi8vICAgICBzcmM6IHVybCgnfi9hc3NldHMvZm9udHMvT3N3YWxkLVJlZ3VsYXIudHRmJykgZm9ybWF0KCdvcGVudHlwZScpO1xyXG4vLyB9XHJcblxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuQG1peGluIHNlY3Rpb24tdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxNDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xyXG5cclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgLy9kZXNrdG9wXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kKG1heC1oZWlnaHQ6IDc1MHB4KSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4tZGV2aWNlLXdpZHRoOiA3NjhweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiAxMDI0cHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJG1vYmlsZSkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRzbWFsbC1tb2JpbGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gdGV4dC1ibG9jayB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMS43ODtcclxuICAgIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNzE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuQG1peGluIHVuZGVybGluZS1zbGlkZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xyXG4gICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IHN1YnBpeGVsLWFudGlhbGlhc2VkO1xyXG5cclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6IDAlO1xyXG4gICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRicm93bjtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjZzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbiAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogc3VicGl4ZWwtYW50aWFsaWFzZWQ7XHJcblxyXG4gICAgICAgICY6OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYnJvd247XHJcbiAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU9zd2FsZDp3Z2h0QDIwMDszMDA7NjAwJmRpc3BsYXk9c3dhcFwiKTtcbioge1xuICBmb250LWZhbWlseTogXCJPc3dhbGRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4udGl0bGUgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5saW5rIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiA5OTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2YjY0O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIubm8tc2Nyb2xsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XG59XG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIGEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZjVlZWUyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC5pbWFnZS1jb250YWluZXIge1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLmltYWdlLWNvbnRhaW5lciB2aWRlbyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIHZpZGVvIHtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIC5jbG9zZS1tb2JpbGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAuaW1hZ2UtY29udGFpbmVyIC5jbG9zZS1tb2JpbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWVlZTI7XG4gICAgb3BhY2l0eTogMC42ODtcbiAgICB3aWR0aDogNzBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzAwNmI2NDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIge1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgcGFkZGluZzogNDBweCA0MHB4IDI4cHggNDBweDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6ICMwMDZiNjQ7XG4gIG9wYWNpdHk6IDAuOTE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciB7XG4gICAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgcGFkZGluZzogNDBweCA2MHB4IDI4cHggNjBweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC5jbG9zZSB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmNsb3NlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciAuZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXgtd2lkdGg6IDQyMHB4O1xuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciAuZGVzY3JpcHRpb24gLnRpdGxlIHtcbiAgZm9udC1zaXplOiA3MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC5kZXNjcmlwdGlvbiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC5kZXNjcmlwdGlvbiAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNTJweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC5kZXNjcmlwdGlvbiAuc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIC5zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDIwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIC5zdWItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIC50ZXh0IHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS43ODtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIC50ZXh0IHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbGluZS1oZWlnaHQ6IDEuNzE7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyMHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC5kZXNjcmlwdGlvbiAudGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjcxO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIC50ZXh0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciAuZGVzY3JpcHRpb24gLmxpbmsge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gIC5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC5kZXNjcmlwdGlvbiAubGluayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciAuZGVzY3JpcHRpb24gLnByb2plY3QtbmF2LW1vYmlsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xuICAuc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciAuZGVzY3JpcHRpb24gLnByb2plY3QtbmF2LW1vYmlsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGVmdDogMDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIC5wcm9qZWN0LW5hdi1tb2JpbGUgYSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLmRlc2NyaXB0aW9uIC5wcm9qZWN0LW5hdi1tb2JpbGUgYTpmaXJzdC1vZi10eXBlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKH4vYXNzZXRzL2Fycm93LWxlZnQuc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogOHB4O1xuICB9XG4gIC5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC5kZXNjcmlwdGlvbiAucHJvamVjdC1uYXYtbW9iaWxlIGE6bGFzdC1vZi10eXBlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKH4vYXNzZXRzL2Fycm93LXJpZ2h0LnN2Zyk7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIH1cbn1cbi5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC5wcm9qZWN0LW5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAuc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciAucHJvamVjdC1uYXYge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gIC5zaW5nbGUtcHJvamVjdC1jb250YWluZXIgLnRleHQtY29udGFpbmVyIC5wcm9qZWN0LW5hdiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLnByb2plY3QtbmF2IGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcbiAgLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLnByb2plY3QtbmF2IGEge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLnByb2plY3QtbmF2IGE6Zmlyc3Qtb2YtdHlwZTpob3Zlcjo6YmVmb3JlIHtcbiAgYW5pbWF0aW9uOiBib3VuY2UtbGVmdCAxcyBmb3J3YXJkcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xufVxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLnByb2plY3QtbmF2IGE6Zmlyc3Qtb2YtdHlwZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCh+L2Fzc2V0cy9hcnJvdy1sZWZ0LnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLnNpbmdsZS1wcm9qZWN0LWNvbnRhaW5lciAudGV4dC1jb250YWluZXIgLnByb2plY3QtbmF2IGE6bGFzdC1vZi10eXBlOmhvdmVyOjphZnRlciB7XG4gIGFuaW1hdGlvbjogYm91bmNlLXJpZ2h0IDFzIGZvcndhcmRzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG59XG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIC50ZXh0LWNvbnRhaW5lciAucHJvamVjdC1uYXYgYTpsYXN0LW9mLXR5cGU6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCh+L2Fzc2V0cy9hcnJvdy1yaWdodC5zdmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZS1yaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5Aa2V5ZnJhbWVzIGJvdW5jZS1sZWZ0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgfVxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9jb2xvcnMuc2Nzcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3Njc3MvZm9udHMuc2Nzcyc7XHJcblxyXG4uc2luZ2xlLXByb2plY3QtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMTAwcHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgei1pbmRleDogOTk7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZWVuO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAmLm5vLXNjcm9sbCB7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xyXG4gICAgfVxyXG5cclxuICAgIGEge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogJGJyb3duO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDI7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2aWRlbyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgLy9vYmplY3QtZml0OiBjb3ZlcjtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAvL3dpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAvL29iamVjdC1wb3NpdGlvbjogMDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2UtbW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJyb3duO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42ODtcclxuXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzBweDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRncmVlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGV4dC1jb250YWluZXIge1xyXG4gICAgICAgIC8vcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xyXG4gICAgICAgIC8vaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIC8vd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCA0MHB4IDI4cHggNDBweDtcclxuICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRncmVlbjtcclxuICAgICAgICBvcGFjaXR5OiAwLjkxO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gICAgICAgICAgICBncmlkLWNvbHVtbi1zdGFydDogMTtcclxuICAgICAgICAgICAgZ3JpZC1jb2x1bW4tZW5kOiAzO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0MHB4IDYwcHggMjhweCA2MHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2xvc2Uge1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XHJcblxyXG4gICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5zdWItdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC50ZXh0IHtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRleHQtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg1MHB4KSBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5wcm9qZWN0LW5hdi1tb2JpbGUge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkdGFibGV0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKH4vYXNzZXRzL2Fycm93LWxlZnQuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKH4vYXNzZXRzL2Fycm93LXJpZ2h0LnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0LW5hdiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogJHRhYmxldCkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogYm91bmNlLWxlZnQgMXMgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKH4vYXNzZXRzL2Fycm93LWxlZnQuc3ZnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6bGFzdC1vZi10eXBlIHtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBib3VuY2UtcmlnaHQgMXMgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKH4vYXNzZXRzL2Fycm93LXJpZ2h0LnN2Zyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGJvdW5jZS1yaWdodCB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG4gICAgNTAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYm91bmNlLWxlZnQge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgIH1cclxufVxyXG4iLCIkd2hpdGU6ICNmZmZmZmY7XHJcbiRncmVlbjogIzAwNmI2NDtcclxuJG9yYW5nZTogI2Y1NmY0ZjtcclxuJGdyZWVuOiAjMDA2YjY0O1xyXG4kYnJvd246ICNmNWVlZTI7XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/projects/single-project/single-project.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/projects/single-project/single-project.component.ts ***!
    \*********************************************************************/

  /*! exports provided: SingleProjectComponent */

  /***/
  function srcAppProjectsSingleProjectSingleProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleProjectComponent", function () {
      return SingleProjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SingleProjectComponent = /*#__PURE__*/function () {
      function SingleProjectComponent(renderer) {
        _classCallCheck(this, SingleProjectComponent);

        this.renderer = renderer;
        this["delete"] = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeProject = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(SingleProjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // stop user being able to scroll
          this.renderer.addClass(document.body, 'no-scroll');
          this.renderer.addClass(this.singleProjectContainer.nativeElement, 'no-scroll');
          this.renderer.addClass(this.projectsContainer, 'no-scroll');
          this.renderer.setStyle(document.documentElement, 'overflow-y', 'hidden');
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // reset all
          this.projectsData = {};
          this.renderer.removeClass(document.body, 'no-scroll');
          this.renderer.removeClass(this.singleProjectContainer.nativeElement, 'no-scroll');
          this.renderer.removeStyle(document.documentElement, 'overflow-y');
        }
      }, {
        key: "close",
        value: function close() {
          // pass close event back to parent component
          this["delete"].emit(true);
        }
      }, {
        key: "nextProject",
        value: function nextProject() {
          this.changeProject.emit(true); // change video with project info

          this.singleProjectContainer.nativeElement.children[0].children[1].load();
        }
      }, {
        key: "prevousProject",
        value: function prevousProject() {
          this.changeProject.emit(false); // change video with project info

          this.singleProjectContainer.nativeElement.children[0].children[1].load();
        }
      }]);

      return SingleProjectComponent;
    }();

    SingleProjectComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SingleProjectComponent.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SingleProjectComponent.prototype, "projectsData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SingleProjectComponent.prototype, "projectsContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('singleProjectContainer', {
      "static": true
    })], SingleProjectComponent.prototype, "singleProjectContainer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SingleProjectComponent.prototype, "changeProject", void 0);
    SingleProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-single-project',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./single-project.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/projects/single-project/single-project.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./single-project.component.scss */
      "./src/app/projects/single-project/single-project.component.scss"))["default"]]
    })], SingleProjectComponent);
    /***/
  },

  /***/
  "./src/assets/project-data/projects.json":
  /*!***********************************************!*\
    !*** ./src/assets/project-data/projects.json ***!
    \***********************************************/

  /*! exports provided: saffron, elPastor, creativeFamily, oneSohoPlace, default */

  /***/
  function srcAssetsProjectDataProjectsJson(module) {
    module.exports = JSON.parse("{\"saffron\":{\"index\":0,\"text\":{\"title\":\"Saffron Brand Barometer\",\"subTitle\":\"Wordpress • PHP • javascript • CSS • website\",\"text\":\"Single page marketing website. Makes use of a variety of animations to showcase work. Built using Javascript , PHP, Wordpress. CSS was preprocessed using SASS and GULP. utilises Javascript libraries and uses wordpress to allow client to modify content \"},\"image\":{\"src\":\"assets/saffron.png\",\"alt\":\"picture of project\",\"url\":\"https://cbb19.saffron-consultants.com/\",\"video\":\"assets/videos/saffron.mp4\"}},\"elPastor\":{\"index\":1,\"text\":{\"title\":\"El Pastor\",\"subTitle\":\"javascript • CSS • website\",\"text\":\"Website for restaurant makes use of Spotify API, Instagram API and Google maps API. Build using Wordpress, PHP, advanced custom fields to allow the client to easily modify content. CSS was preprocessed using SASS and GULP. and Javascript for the API calls.\"},\"image\":{\"src\":\"assets/el_pastor.png\",\"alt\":\"picture of project\",\"url\":\"https://www.tacoselpastor.co.uk/\",\"video\":\"assets/videos/elpastor.mp4\"}},\"creativeFamily\":{\"index\":2,\"text\":{\"title\":\"Creative Family\",\"subTitle\":\"Wordpress • PHP • javascript • CSS\",\"text\":\"Website to Showcase agencies work and skills, it focuses on design and simplicity. It needed to be fully responsive and have low load times.Built using Wordpress, PHP, advanced custom fields to allow the client to easily modify content. CSS was preprocessed using SASS and GULP. and Javascript for the animations.\"},\"image\":{\"src\":\"assets/creative_family.png\",\"alt\":\"picture of project\",\"url\":\"https://www.creativefamily.com/\",\"video\":\"assets/videos/creativefamily.mp4\"}},\"oneSohoPlace\":{\"index\":3,\"text\":{\"title\":\"One Soho Place\",\"subTitle\":\"javascript • CSS • website\",\"text\":\"Landing page to provide users with the product and  contact information I focused on using HTML5 for semantics. The CSS was preprocessed using SASS and GULP. Javascript library JQuery used for simplicity and speed.\"},\"image\":{\"src\":\"assets/one_oxford_st.png\",\"alt\":\"picture of project\",\"url\":\"https://1sohoplace.london/\",\"video\":\"assets/videos/sohoplace.mp4\"}}}");
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\Marcus\Desktop\portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map