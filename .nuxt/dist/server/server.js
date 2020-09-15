module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/index"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(22);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("6ac3c623", content, true, context)
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("7e56e4e3", content, true, context)
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(26);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(10).default
module.exports.__inject__ = function (context) {
  add("4e8213bc", content, true, context)
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Header.vue?vue&type=template&id=4d4f2586&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"left\">","</div>",[_c('Navigation')],1),_vm._ssrNode(" <form class=\"right\"><input type=\"text\" placeholder=\"Поиск по названию картины\"> <button type=\"submit\">\n      Найти\n    </button></form>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Header.vue?vue&type=template&id=4d4f2586&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Header.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "b293ca98"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(14).default})


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Footer.vue?vue&type=template&id=2197648c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container"},[_vm._ssrNode("<div class=\"left\">","</div>",[_c('Navigation')],1),_vm._ssrNode(" <div class=\"right\"><a href=\"tel:+7 (495) 555-55-55\" class=\"phone\">+7 (495) 555-55-55</a> <a href=\"https://www.google.com/maps?q=%D0%B3.+%D0%9C%D0%BE%D1%81%D0%BA%D0%B2%D0%B0,+%D1%83%D0%BB.+%D0%A0%D0%B0%D1%81%D0%BF%D0%BB%D0%B5%D1%82%D0%B8%D0%BD%D0%B0,+24&um=1&ie=UTF-8&sa=X&ved=2ahUKEwim0YDR3ejrAhVlk4sKHZcuCX8Q_AUoAXoECAsQAw\" target=\"_blank\" class=\"location\">г. Москва, ул. Расплетина, 24</a></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Footer.vue?vue&type=template&id=2197648c&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Footer.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "f4f8927c"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Navigation: __webpack_require__(14).default})


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Navigation.vue?vue&type=template&id=99396398&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"navigation"},[_c('nuxt-link',{attrs:{"to":'/'}},[_c('Logo')],1),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":'/catalog'}},[_c('h5',[_vm._v("\n      Каталог\n    ")])]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":'/delivery'}},[_c('h5',[_vm._v("\n      Доставка\n    ")])]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":'/pay'}},[_c('h5',[_vm._v("\n      Оплата\n    ")])]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":'/contact'}},[_c('h5',[_vm._v("\n      Контакты\n    ")])]),_vm._ssrNode(" "),_c('nuxt-link',{attrs:{"to":'/about'}},[_c('h5',[_vm._v("\n      О галереи\n    ")])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Navigation.vue?vue&type=template&id=99396398&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Navigation.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "a518f18a"
  
)

/* harmony default export */ var Navigation = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(29).default})


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(28);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  const options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

const functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  const render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(9);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap);"]);
// Module
exports.push([module.i, "html{font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background:#e5e5e5}html *,html :after,html :before{box-sizing:border-box;margin:0;font-family:\"Merriweather\",serif}html .page{display:flex;flex-direction:column;align-items:center;justify-content:space-between;min-height:100vh}html .container{width:1206px;display:flex}html h1{font-weight:700;font-size:24px;color:#343030}html h2{font-size:18px;font-weight:400}html h2,html h3{line-height:150%;color:#343030}html h3{font-weight:700;font-size:16px}html h4{font-weight:700}html h4,html h5{font-size:16px;color:#343030;line-height:150%}html h5{font-weight:400}html h6{font-weight:300;font-size:16px;color:#343030;line-height:150%}html a{text-decoration:none}html .through-text{text-decoration:line-through}html button{min-width:118px;text-align:center;padding:14px;font-weight:700;font-size:14px;background:#403432;border:none;color:#f4f6f9;transition:background-color .2s ease-in-out}html button:hover{background-color:#776763}html button:disabled{background-color:#c1b4b1}html button:focus{outline:none}html button.active,html button.active:disabled{background:#5b3a32}html input[type=text]{font-weight:400;font-size:14px;color:#343030;min-width:416px;border:1px solid #e1e1e1;padding:13px 16px;background:#e5e5e5;transition:border .2s ease-in-out}html input[type=text]::-moz-placeholder{font-size:14px;color:#9f9f9f}html input[type=text]:-ms-input-placeholder{font-size:14px;color:#9f9f9f}html input[type=text]::placeholder{font-size:14px;color:#9f9f9f}html input[type=text]:focus{background:#e5e5e5;outline:none;border:1px solid #b5b5b5}html footer,html header{width:100%;display:flex;align-items:center;justify-content:center;border-bottom:1px solid #e1e1e1;padding:24px 0}html footer .container,html header .container{justify-content:space-between}html footer .container .right,html header .container .right{width:50%;display:flex;justify-content:flex-end}html footer .container .left,html header .container .left{width:50%}html footer .container .left nav,html header .container .left nav{display:flex;align-items:center;justify-content:space-between}html footer{background:#eceaea}html footer .container .right{display:flex;align-items:center;justify-content:space-around}html footer .container .right a{color:#555}html .container-page{min-height:calc(100vh - 202px);padding-top:45px}html .container-page .art-list{width:100%;display:flex;flex-wrap:wrap;align-items:center}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
const state = () => ({
  artList: []
});
const mutations = {
  setArtList(state, artList) {
    state.artList = artList;
  }

};
const actions = {
  fetch({
    commit
  }) {
    const artList = [{
      id: 1,
      name: '«Рождение Венеры» Сандро Боттичелли',
      imgUrl: 'img/painting-63186_1280 1.jpg',
      cost: 1000000,
      discount: 2000000,
      purchased: false
    }, {
      id: 2,
      name: '«Тайная вечеря»  Леонардо да Винчи',
      imgUrl: 'img/ae973f6678e037cd297053384aa7dca0 1.jpg',
      cost: 3000000,
      discount: null,
      purchased: false
    }, {
      id: 3,
      name: '«Тайная вечеря»  Леонардо да Винчи',
      imgUrl: 'img/image-19 1.jpg',
      cost: 5000000,
      discount: 6000000,
      purchased: false
    }, {
      id: 4,
      name: '«Тайная вечеря»  Леонардо да Винчи',
      imgUrl: 'img/20152310142330 1.jpg',
      cost: 1000000,
      discount: 2000000,
      purchased: true
    }];
    commit('setArtList', artList);
  }

};
const getters = {
  artList: s => s.artList
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(15);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(16);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
}
function stripTrailingSlash(path) {
  return path.replace(/\/+$/, '') || '/';
}
function isSamePath(p1, p2) {
  return stripTrailingSlash(p1) === stripTrailingSlash(p2);
}
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(17);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(11);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(8);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(3);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const Pages = getMatchedComponents(to); // Scroll to the top of the page if...

  if ( // One of the children set `scrollToTop`
  Pages.some(Page => Page.options.scrollToTop) || // scrollToTop set in only page without children
  Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt;

  if ( // Route hash changes
  to.path === from.path && to.hash !== from.hash || // Initial load (vuejs/vue-router#3199)
  to === from) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _2b9f789b = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 1).then(__webpack_require__.bind(null, 38))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _2b9f789b,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=38a3918a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(21)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "4ac2ec1a"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "1c0f4ace"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=60a2850d&
var defaultvue_type_template_id_60a2850d_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"page"},[_vm._ssrNode("<header class=\"header\">","</header>",[_c('Header')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container container-page\">","</div>",[_c('Nuxt')],1),_vm._ssrNode(" "),_vm._ssrNode("<footer class=\"footer\">","</footer>",[_c('Footer')],1)],2)}
var defaultvue_type_template_id_60a2850d_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=60a2850d&

// CONCATENATED MODULE: ./layouts/default.vue

var script = {}
function default_injectStyles (context) {
  
  var style0 = __webpack_require__(25)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  script,
  defaultvue_type_template_id_60a2850d_render,
  defaultvue_type_template_id_60a2850d_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "600a412f"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);

/* nuxt-component-imports */
installComponents(default_component, {Header: __webpack_require__(12).default,Header: __webpack_require__(12).default,Footer: __webpack_require__(13).default,Footer: __webpack_require__(13).default})

// CONCATENATED MODULE: ./.nuxt/App.js




const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (NuxtError.options || NuxtError).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  // If store is an exported method = classic mode (deprecated)
  // Enforce store modules
  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(27), 'artList.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./.nuxt/components/plugin.js

const globalComponents = {};

for (const name in globalComponents) {
  external_vue_default.a.component(name, globalComponents[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(18);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;
const baseStoreOptions = {
  preserveState: false
};

function registerModule(path, rawModule, options = {}) {
  return originalRegisterModule.call(this, path, rawModule, { ...baseStoreOptions,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "redsoft-test",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "## Build Setup"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "style": [],
      "script": []
    },
    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, err => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err);
        if (err.type !== 2
        /* NavigationFailureType.redirected */
        ) return resolve(); // navigated to a different route in router guard

        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router,
    store
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=d956a770&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"width":"48","height":"48","viewBox":"0 0 48 48","fill":"none","xmlns":"http://www.w3.org/2000/svg"}},[_vm._ssrNode("<path d=\"M24.02 47.96C16.2864 47.96 8.53289 47.96 0.799334 47.98C0.199833 47.98 0 47.8599 0 47.2193C0.0199833 31.7264 0.0199833 16.2135 0 0.7206C0 0.100083 0.199834 0 0.759368 0C16.2465 0.0200167 31.7136 0.0200167 47.2007 0C47.9001 0 48 0.200166 48 0.8407C47.98 16.2936 47.98 31.7465 48 47.1993C48 47.8999 47.8002 48 47.1607 48C39.4471 47.9399 31.7336 47.96 24.02 47.96Z\" fill=\"#776763\"></path> <path d=\"M33.3322 25.9416C33.4122 26.7022 32.8127 26.9625 32.3131 27.1226C31.6336 27.3428 31.0142 27.8832 30.1948 27.6631C29.955 27.603 29.7352 27.8832 29.7752 28.1635C29.8152 28.4037 29.7552 28.6038 29.7352 28.824C29.3555 28.864 29.1957 28.5238 28.9559 28.4437C29.6353 29.0642 30.1349 29.8649 30.6145 30.7056C31.194 31.7064 31.8734 32.6472 33.0525 33.1276C33.0924 32.8274 32.7927 32.6872 32.8526 32.447C33.3122 32.5071 34.0716 33.2477 34.0716 33.648C34.0716 33.7882 34.0316 33.9683 33.9117 33.9483C33.3122 33.8282 32.7127 34.1885 32.1332 33.9683C30.6744 33.4279 29.1757 33.1076 27.7369 32.4671C25.7386 31.5863 23.8801 30.5054 21.9817 29.4646C19.9634 28.3636 17.985 27.2227 15.7669 26.5421C15.1873 26.362 14.5479 26.342 13.9484 26.2619C13.8085 26.2419 13.6286 26.2419 13.5687 26.1017C13.4888 25.9216 13.6486 25.8215 13.7685 25.7414C14.2881 25.4212 14.5878 24.8207 15.2873 24.7406C15.567 24.7006 15.647 24.2402 15.7269 24C16.0067 23.1393 16.6062 22.4787 17.1457 21.8182C17.6853 21.1576 18.0849 20.5171 17.945 19.6564C17.8651 19.0959 18.2848 18.3553 17.7852 17.955C17.0258 17.3545 16.826 16.4337 16.5862 15.6931C16.2065 14.5321 15.1674 13.4512 15.6669 12.0901C15.9267 11.3695 16.1266 10.7289 16.0666 9.90825C16.0266 9.2477 16.5462 8.5271 16.9459 7.90659C17.0458 7.74645 16.846 7.206 17.3855 7.36614C17.4654 7.46622 17.5654 7.54629 17.6053 7.68641C17.6253 7.78649 17.6253 7.88657 17.6053 7.98666C17.5654 8.14679 17.5254 8.30692 17.4255 8.44704C17.4055 8.48707 17.3655 8.5271 17.3455 8.56714C17.2856 8.70725 17.0458 8.78732 17.2256 8.98749C17.2456 9.00751 17.4455 9.22769 17.3455 8.92744C17.3256 8.84737 17.3855 8.74729 17.4255 8.64721C17.4455 8.58716 17.4854 8.5271 17.5454 8.46705C17.7652 8.34695 18.025 8.36697 18.2648 8.34696C18.9642 8.28691 19.0042 8.32694 18.7444 8.98749C18.5246 9.56797 19.1041 9.72811 19.2839 10.0884C19.5637 10.5888 20.0833 10.1685 20.443 10.4087C20.6828 10.5688 20.7227 10.809 20.7427 11.0692C20.2032 11.3895 20.3031 11.7698 20.6228 12.1902C20.7427 12.3503 20.8227 12.5304 20.7827 12.7306C20.7627 12.7907 20.7427 12.8707 20.7027 12.9308C20.383 13.0309 20.0233 13.0909 20.1432 13.5713C20.0033 13.6714 19.8435 13.7314 19.6636 13.7515C19.6037 13.7515 19.5237 13.7515 19.4638 13.7114C19.224 13.6113 19.164 13.2911 18.9042 13.251C18.7444 13.211 18.5845 13.231 18.4246 13.251C18.3447 13.251 18.2848 13.231 18.2048 13.231C18.045 13.231 17.985 12.8507 17.8052 13.0709C17.6053 13.3111 17.8651 13.3912 18.025 13.4912C18.3247 13.6914 18.5046 13.9316 18.1849 14.2719C18.1249 14.3119 18.0649 14.3319 18.005 14.352C17.9051 14.372 17.8052 14.352 17.7252 14.3119C17.6853 14.3119 17.6653 14.2919 17.6253 14.2519C17.6053 14.352 17.7052 14.2919 17.7252 14.3319C17.9051 14.432 18.0849 14.4721 18.2848 14.4721C18.5246 14.5121 18.8043 14.452 18.9242 14.7723C18.7444 15.0125 18.4846 14.8324 18.3447 14.8724C18.1848 14.8524 18.3048 15.0325 18.2848 14.9324C18.2648 14.9124 18.3047 14.8924 18.3447 14.8924C18.6644 14.9324 18.6644 14.9324 18.6445 15.2127C18.5645 15.3328 18.4446 15.4529 18.6045 15.573C18.6644 15.613 18.7444 15.573 18.8043 15.573C18.7444 15.4729 18.5645 15.4729 18.5445 15.3128C18.6644 15.1126 18.9242 15.1126 19.0441 14.9124C19.144 14.7923 19.184 14.6522 19.244 14.5121C19.2839 14.432 19.3439 14.352 19.4238 14.2919C19.4638 14.2519 19.5237 14.2118 19.5637 14.1718C19.6836 14.0717 19.8235 13.9516 20.0033 13.9917C20.2431 14.0717 20.3031 14.5721 20.6828 14.2719C20.8826 14.2919 21.0025 14.392 21.0824 14.5721C21.1624 14.8123 21.0824 15.0525 21.0824 15.2927C21.0824 15.3528 21.0824 15.4329 21.0625 15.4929C20.9825 15.9533 21.1024 16.3536 21.4022 16.6939C22.3414 17.4545 23.2406 18.2752 24.5595 18.2352C24.6195 18.2752 24.6595 18.3353 24.6994 18.3953C24.7794 18.5755 24.8593 18.7756 24.7594 18.9558C24.6595 19.1159 24.4796 19.256 24.6794 19.4762C24.8793 19.6764 25.1191 19.6964 25.3589 19.6364C25.6786 19.5363 25.9184 19.3361 26.1982 19.176C27.0974 18.6355 27.637 18.8157 28.0566 19.7965C28.0366 19.8966 27.9767 20.0167 27.8768 19.9967C26.8376 19.7164 26.0583 20.437 25.159 20.7173C25.0991 20.7573 24.9592 20.7773 24.9592 20.7973C24.9792 20.8974 25.0991 20.8574 25.159 20.9174C25.6187 21.1776 26.1382 21.0776 26.6978 21.1176C26.3381 20.8574 26.2981 20.5972 26.5978 20.357C26.8976 20.1168 27.4172 20.2369 27.657 20.5771C27.9567 21.0375 27.7769 21.4178 27.0375 21.9383C27.3572 22.1384 27.7169 22.2585 28.0966 22.3186C28.3963 22.3586 28.6961 22.4587 28.6961 22.859C28.6761 22.9591 28.5762 22.9992 28.5362 23.0992C28.6162 23.0792 28.6561 23.0392 28.7161 22.9791C28.9159 22.7189 28.836 22.3987 28.9759 22.1384C29.0358 22.0384 29.1157 21.9783 29.2356 21.9783C29.8751 22.4387 29.8551 23.1793 29.2157 23.5997C28.9759 23.7398 28.7161 23.8198 28.4363 23.8799C28.2165 23.9199 28.0566 24.06 28.0766 24.2802C28.1166 24.5404 28.3364 24.5404 28.5362 24.5404C28.836 24.5204 29.1157 24.4203 29.4155 24.4404C29.7152 24.4604 30.055 24.4804 30.1349 24.8407C30.2148 25.181 29.9351 25.3211 29.6753 25.4412C29.4555 25.5413 29.2556 25.6814 28.9159 25.7615C29.3156 25.9416 29.5154 26.1818 29.4555 26.5821C29.4355 26.6422 29.4155 26.7223 29.3755 26.7823C29.4155 26.8023 29.4355 26.7823 29.4754 26.7223C29.5354 26.6022 29.5554 26.4821 29.5154 26.362C29.4754 26.1418 29.2556 25.8415 29.4754 25.7414C29.7552 25.6213 29.8951 25.3011 30.2148 25.2811C30.5346 25.261 30.8543 25.3011 30.8343 25.7214C30.8143 26.0017 30.8343 26.2218 31.1341 26.3219C31.4538 26.8023 31.8934 26.5421 32.2931 26.4621C32.413 26.442 32.4729 26.3219 32.5529 26.2419C32.6528 26.1218 32.7327 26.0017 32.8127 25.8616C32.8526 25.8015 32.9126 25.7815 32.9725 25.7615C33.1124 25.7414 33.2123 25.8015 33.3122 25.9016C33.2923 25.8816 33.3122 25.9216 33.3322 25.9416Z\" fill=\"#201A16\"></path> <path d=\"M19.1041 10.1885C18.8443 10.0083 18.7844 9.608 18.3647 9.62802C18.1249 9.62802 18.2248 9.42785 18.3247 9.30775C18.5246 9.04754 18.4846 8.66722 18.8643 8.46705C18.3647 8.54712 17.9051 8.5271 17.4655 8.54712C17.4255 8.50709 17.4055 8.46705 17.4255 8.42702C17.4255 8.38699 17.4255 8.36697 17.4455 8.36697C17.5254 8.22685 17.6453 8.10675 17.7852 8.02669C17.985 7.8065 18.3847 7.76647 18.4047 7.34612C18.3647 7.10592 18.1849 7.16597 18.025 7.14595C17.8651 7.10592 17.7252 6.8457 17.9451 6.80567C18.5246 6.70559 18.4646 5.96497 19.0042 5.86489C20.1033 5.0442 21.1224 4.18349 22.6611 4.14345C23.6803 4.12344 24.6595 4.18349 25.6786 4.24354C25.9584 4.26355 26.1582 4.3236 26.2981 4.58382C26.3381 4.6839 26.358 4.78399 26.378 4.88407C26.418 5.02419 26.3381 5.20434 26.4979 5.32444C26.6778 5.22435 26.5179 5.00417 26.6778 4.90408C26.7377 4.88407 26.8177 4.86405 26.8976 4.86405C27.2773 4.9241 27.657 4.90408 27.9967 5.10425C28.0766 5.1643 28.1765 5.22435 28.2565 5.2844C28.5362 5.5246 28.3564 5.68474 28.1965 5.86489C28.1366 5.92494 28.0766 5.98499 28.0366 6.06505C28.0366 6.2452 28.1965 6.3653 28.1965 6.54545C28.1765 6.58549 28.1765 6.64554 28.2165 6.68557C28.2565 6.66555 28.2964 6.62552 28.3364 6.58549C29.1757 6.08507 29.6353 6.18515 30.5346 7.02585C30.9742 7.8065 30.8743 8.08674 30.1549 8.30692C29.9351 8.0467 30.055 7.60634 29.6753 7.4462C29.6353 7.4462 29.5954 7.42619 29.5754 7.38615C29.5554 7.48624 29.6753 7.40617 29.6953 7.46622C29.8551 7.64637 30.0749 7.78649 29.995 8.06672C29.9351 8.26689 30.055 8.32694 30.2148 8.34695C30.6145 8.56714 30.7144 9.00751 30.9542 9.34779C31.0741 9.66806 30.9942 10.0284 31.1341 10.3486C31.2739 10.6689 31.3139 11.0092 31.4938 11.3294C31.6536 11.6097 31.6536 11.97 31.4138 12.2302C31.174 12.5104 30.8743 12.3703 30.5745 12.2902C30.055 12.1501 29.5554 11.8299 28.9958 12.1501C28.776 12.1902 28.6162 12.3303 28.3164 12.5304C28.5962 12.3703 28.7361 12.2102 28.9359 12.1902C29.0958 12.1301 29.2356 12.01 29.4355 12.05C29.6353 12.0701 29.7352 12.2102 29.7952 12.3903C29.8351 12.5705 29.7552 12.6706 29.6153 12.7506C29.3755 12.8907 29.1357 13.0108 28.9159 13.171C28.5162 13.3912 28.1166 13.4712 27.7569 13.1309C27.3972 12.7907 27.4771 12.3503 27.6769 11.97C27.8768 11.5696 27.8368 11.0892 28.0766 10.7089C28.0966 10.6689 28.1565 10.6289 28.1366 10.6088C28.0966 10.5088 27.9967 10.5888 27.9367 10.5888C27.597 10.4087 27.3372 10.6889 27.0375 10.7289C26.6978 10.6489 26.6978 11.0492 26.4779 11.1293C26.2581 11.4295 26.0383 11.5496 25.8585 11.0892C25.7386 10.749 25.4788 10.4487 25.5187 10.0484C25.5387 9.64804 25.2989 10.0484 25.199 9.98832C25.0791 9.98832 24.9992 9.92827 24.9392 9.82819C24.9192 9.74812 24.9192 9.68807 24.9392 9.608C25.0591 9.28774 25.4188 9.18765 25.5787 8.92744C25.6786 8.7673 26.0583 8.54712 25.4788 8.50709C25.3189 8.48707 25.1391 8.34695 24.9792 8.14679C25.159 8.48707 25.6786 8.5271 25.4988 9.0075C25.3189 9.14762 25.0192 9.16764 24.9392 9.42785C24.8993 9.46789 24.8593 9.50792 24.7993 9.52794C24.5995 9.50792 24.6395 9.7281 24.5396 9.80817C24.2998 9.9683 24.1799 10.2485 23.98 10.4487C23.7602 10.6088 23.5004 10.6689 23.3605 10.9691C23.2406 11.2294 22.9609 11.3294 22.7211 11.2294C22.4013 11.0892 22.3414 11.3695 22.1815 11.4696C22.1615 11.5096 22.0816 11.3895 22.0616 11.4896C22.0616 11.5897 22.0217 11.4495 22.1216 11.4896C22.1815 11.5096 22.2015 11.5496 22.2015 11.6097C22.1615 11.8299 22.3814 11.99 22.3614 12.2102C22.0017 12.8907 21.2023 13.1309 20.6628 12.7106C20.5629 12.5104 20.6028 12.2302 20.3231 12.1101C19.6436 11.8499 20.463 11.3895 20.2032 11.0692C20.363 10.9491 20.403 11.2494 20.5429 11.1893C20.5629 11.1893 20.5829 11.1693 20.6028 11.1693C20.6228 11.1493 20.6028 11.1293 20.6028 11.0892C20.6428 10.4287 20.3231 9.9683 19.8635 9.50792C19.7835 9.76814 19.5837 9.92827 19.4438 10.1084C19.3039 10.1685 19.224 10.2285 19.1041 10.1885Z\" fill=\"#FEFEFE\"></path> <path d=\"M19.8834 42.7756C20.8826 41.3945 21.8618 40.0534 22.841 38.7123C22.9009 38.7323 22.9609 38.7523 23.0208 38.7723C23.0208 40.4937 23.0208 42.2152 23.0208 43.9566C22.781 43.9566 22.4213 43.9566 22.0616 43.9566C22.3813 42.8557 22.1216 41.7348 22.0416 40.5338C21.2623 41.6747 20.4629 42.8157 19.6436 44.0167C18.8843 42.8557 18.1649 41.7548 17.4455 40.6539C17.3855 41.7748 17.1657 42.8757 17.4854 43.9766C17.2256 44.0567 16.9659 44.0767 16.7261 43.9766C16.9659 42.2152 16.766 40.4537 16.8859 38.5321C17.945 39.9933 18.9242 41.3745 19.8834 42.7756Z\" fill=\"#FCFCFC\"></path> <path d=\"M27.597 38.372C29.3156 38.392 30.5545 39.613 30.5345 41.2544C30.5146 42.8957 29.1757 44.1368 27.4571 44.1168C25.6786 44.0967 24.4596 42.8957 24.4796 41.1943C24.4996 39.553 25.8385 38.352 27.597 38.372Z\" fill=\"#FCFBFC\"></path> <path d=\"M32.1132 13.6514C32.5129 14.412 32.9126 15.1726 33.3122 15.9333C33.552 16.1735 33.552 16.4537 33.3122 16.6539C33.0525 16.8741 32.8127 16.6939 32.5928 16.5138C32.5129 16.4537 32.4729 16.3536 32.393 16.2936C32.1932 16.1134 32.2132 15.633 31.7735 15.8132C31.3339 15.9733 30.8943 16.1334 30.8343 16.7339C30.7744 17.4145 30.6345 17.4545 29.975 17.1743C29.6353 16.6939 29.2356 16.3336 28.6761 16.1334C28.3963 16.0334 28.1565 15.8732 27.9967 15.593C27.8768 15.2527 27.8768 14.8724 27.7369 14.5321C27.7369 14.452 27.7769 14.392 27.8368 14.3319C28.0566 14.2118 28.2764 14.2118 28.5162 14.2319C28.796 14.2919 29.0758 14.372 29.3555 14.352C29.5154 14.2319 29.9151 14.5521 29.8551 14.0717C29.8751 13.9716 29.9151 13.8916 29.955 13.7915C30.055 13.5713 29.995 13.151 30.3547 13.231C30.6944 13.2911 30.6944 13.6514 30.6545 13.9716C30.6545 14.0117 30.6345 14.0717 30.6345 14.1118C30.6145 14.1918 30.5945 14.2519 30.5346 14.3119C30.5745 14.3119 30.6145 14.2919 30.6145 14.2319C30.7544 13.9116 30.8543 13.5913 31.2939 13.8515C31.3139 13.8716 31.3339 13.9116 31.3539 13.9516C31.3938 13.8515 31.2939 13.8115 31.2739 13.7515C31.0741 13.3912 30.6944 12.9308 31.234 12.6706C31.6736 12.4504 31.8535 13.0108 32.0733 13.3311C32.1132 13.3912 32.1132 13.5113 32.1132 13.6514Z\" fill=\"#FDFDFD\"></path> <path d=\"M37.0891 38.7123C36.7494 39.653 36.9692 40.6339 36.9492 41.5947C36.9292 43.4362 36.1699 44.1968 34.3514 44.1168C32.9126 44.0567 32.1732 43.2961 32.1332 41.8549C32.1132 41.1143 32.1332 40.3536 32.1332 39.613C32.1332 39.2327 32.1532 38.8724 31.8934 38.5321C32.3331 38.5321 32.7327 38.5321 33.0924 38.5321C32.7927 39.9133 32.7927 41.2744 33.0525 42.6155C33.1923 43.3761 33.7719 43.6964 34.6911 43.7164C35.5704 43.7364 36.1699 43.4362 36.3097 42.7156C36.5695 41.3945 36.5895 40.0534 36.3097 38.7323C36.5695 38.3319 36.8293 38.3319 37.0891 38.7123Z\" fill=\"#FCFCFC\"></path> <path d=\"M15.8868 43.9366C15.1873 44.1968 14.7477 43.9566 14.6078 43.216C14.5079 42.5955 14.1282 42.4153 13.5487 42.4954C13.3489 42.5154 13.149 42.5154 12.9492 42.4954C12.1699 42.3753 11.6703 42.6155 11.5504 43.4562C11.4704 44.0167 11.0908 44.0967 10.5712 43.9366C11.6703 42.1151 12.3697 40.1334 13.209 38.0717C14.1682 40.0534 14.8676 42.055 15.8868 43.9366Z\" fill=\"#FBFBFB\"></path> <path d=\"M41.7252 39.593C41.3855 39.0726 40.9459 38.7723 40.3064 38.7923C39.9667 38.7923 39.647 38.8724 39.5071 39.2327C39.3672 39.593 39.4271 39.9533 39.7269 40.1935C40.0666 40.4737 40.4663 40.7139 40.826 40.9741C41.1457 41.2143 41.4854 41.4345 41.7852 41.6947C42.2248 42.0751 42.3447 42.5955 42.1649 43.1159C41.985 43.6364 41.6053 43.9967 41.0458 44.0967C40.6261 44.1768 40.2065 44.1568 39.7868 44.1168C38.8276 43.9967 38.7477 43.8766 38.8476 42.8157C39.3072 43.3761 39.7669 43.8565 40.5262 43.8165C40.9459 43.7965 41.3056 43.7164 41.4854 43.256C41.6453 42.8157 41.5054 42.4554 41.1657 42.1952C40.6261 41.7748 40.0666 41.4145 39.5271 41.0142C38.9675 40.6138 38.5679 40.1134 38.8276 39.3728C39.0874 38.6322 39.7069 38.392 40.4263 38.412C40.9459 38.412 41.4654 38.4921 41.8851 38.8724C41.9251 39.1126 42.1249 39.4128 41.7252 39.593Z\" fill=\"#FBFAFA\"></path> <path d=\"M30.055 17.0542C30.3547 17.2744 30.7344 17.4946 30.6944 16.854C30.6345 16.1935 30.8743 15.8532 31.4938 15.7531C31.7735 15.7131 31.8734 15.4529 32.0733 15.3328C32.2531 15.653 32.393 15.9733 32.5928 16.2535C32.7327 16.4737 32.9525 16.754 33.2523 16.5938C33.552 16.4537 33.3522 16.1535 33.3522 15.9133C33.7719 16.0133 33.7519 16.0133 33.8718 16.6739C33.9317 17.0342 33.7119 17.1743 33.4921 17.1943C33.0125 17.2344 33.0325 17.5146 33.1524 17.8148C33.2523 18.055 33.2123 18.1551 33.0525 18.3553C32.6928 18.7756 33.1324 19.3161 32.9326 19.7965C33.0525 19.9166 33.0525 20.0367 33.0125 20.1968C32.5529 20.437 32.393 19.9366 32.0733 19.8365C31.9334 19.7965 31.7735 19.9166 31.6536 19.7565C31.6137 19.6964 31.6137 19.6364 31.5937 19.5763C31.5537 19.256 31.7735 19.0759 31.9534 18.8957C31.9334 18.8957 31.9334 18.8757 31.9134 18.8757C31.5337 19.0759 31.6536 19.5363 31.4538 19.8365C30.8143 19.7965 31.0541 19.2961 30.9942 18.9558C30.9542 18.6155 30.9542 18.2952 31.3739 18.1751C31.6936 18.0951 31.9734 17.955 32.2931 17.8549C31.4938 17.4145 31.0741 17.5546 30.6744 18.3553C30.6145 18.4954 30.5745 18.6355 30.3947 18.6555C29.8551 18.1751 30.035 17.5947 30.055 17.0542Z\" fill=\"#221E1B\"></path> <path d=\"M31.254 13.9316C30.9542 13.7915 30.9542 13.7915 30.6345 14.392C30.4946 14.412 30.4147 14.392 30.4746 14.2118C30.4746 13.8716 30.6145 13.5113 30.2348 13.211C30.2748 13.6314 30.0749 13.9316 29.8951 14.2519C29.7752 14.2919 29.6953 14.2118 29.6553 14.1318C29.5554 13.8916 29.5753 13.6113 29.4355 13.3912C29.4155 13.3111 29.4155 13.231 29.4754 13.171C29.4355 13.0108 29.3755 13.191 29.3355 13.171C29.2156 13.251 29.1157 13.2911 28.9759 13.251C28.8759 13.211 28.816 13.1309 28.776 13.0309C28.9359 12.9108 29.1157 12.8307 29.2356 12.6906C29.3555 12.5705 29.6952 12.7306 29.5953 12.3903C29.5154 12.0701 29.2956 12.2502 29.1157 12.2502C29.0158 12.2502 28.9159 12.2702 28.836 12.2902C28.776 12.2702 28.756 12.2302 28.776 12.1902C28.796 12.1501 28.816 12.1301 28.836 12.1301C29.4355 11.6897 30.055 11.8699 30.6545 12.1301C30.8543 12.2102 31.0341 12.3903 31.254 12.1902C31.4738 11.99 31.3938 11.7298 31.3139 11.4896C31.194 11.1293 30.8942 10.809 30.9142 10.3887C30.7544 10.0484 30.9942 9.62802 30.7544 9.28774C30.3347 9.14762 30.3747 8.62719 30.035 8.42702C29.975 8.34695 29.975 8.24687 30.055 8.1668C30.8943 7.96664 30.4746 7.48624 30.3147 7.06589C30.2348 6.94579 30.2348 6.8457 30.3147 6.74562C30.8343 6.86572 30.9142 7.26605 30.9142 7.70642C30.9142 8.96747 31.194 10.1485 31.6936 11.2894C31.8135 11.5696 31.7136 11.8499 31.7535 12.1301C31.8135 12.5304 31.9734 12.6505 32.2731 12.8507C32.7327 13.151 32.2731 13.4112 32.0932 13.6514C31.9334 13.4112 31.7735 13.171 31.5937 12.9508C31.4937 12.8107 31.3938 12.6105 31.194 12.7106C30.9742 12.8307 31.0541 13.0509 31.1341 13.231C31.214 13.4112 31.2939 13.5913 31.3739 13.7715C31.4538 13.9316 31.3739 13.9516 31.254 13.9316Z\" fill=\"#231E1B\"></path> <path d=\"M7.65362 43.9766C7.23397 43.9766 6.89426 43.9766 6.5945 43.9766C6.7144 42.1551 6.75437 40.3536 6.55454 38.4721C7.55371 38.4721 8.59284 38.4921 9.63197 38.4721C10.1715 38.452 9.97169 38.8324 10.0716 39.1726C9.33223 38.9124 8.63281 38.8724 7.95337 38.8724C7.59367 38.8724 7.35387 38.9525 7.41382 39.3728C7.47377 39.8732 7.15404 40.6739 7.57369 40.834C8.17319 41.0742 8.93256 41.0742 9.61199 40.794C9.67194 40.774 9.73189 40.7139 9.85179 40.6539C9.85179 40.9341 9.85179 41.1943 9.85179 41.5146C9.19234 41.1943 8.51291 41.2944 7.83347 41.2744C7.63364 41.2744 7.39384 41.2744 7.41382 41.5546C7.49376 42.3353 7.27394 43.1359 7.65362 43.9766Z\" fill=\"#FAFAFA\"></path> <path d=\"M27.9367 5.06422C27.537 5.06422 27.0974 5.22435 26.7177 4.94412C26.5179 4.82402 26.2181 4.9241 26.1382 4.62385C26.0583 4.42368 25.8784 4.42368 25.6986 4.40367C24.9192 4.34362 24.1199 4.14345 23.3605 4.26355C22.3014 4.42368 21.1024 4.2035 20.2231 5.1643C19.9034 5.50458 19.3639 5.62468 18.9242 5.86488C18.6245 5.60467 18.9242 5.46455 19.0641 5.34445C20.383 4.18348 21.9617 3.50292 23.6803 3.7231C24.7993 3.86322 26.0783 3.74312 27.0575 4.58382C27.2173 4.72393 27.4771 4.78398 27.7569 4.74395C28.0766 4.6839 28.0166 4.90408 27.9367 5.06422Z\" fill=\"#221D1B\"></path> <path d=\"M32.8326 32.427C32.9925 32.7273 33.3722 32.8674 33.4521 33.2477C33.0125 33.4279 32.6728 33.2077 32.353 32.9875C31.5937 32.447 30.9542 31.7465 30.5345 30.9258C30.015 29.9249 29.3555 29.0842 28.5762 28.3036C28.4763 28.2035 28.3364 28.1234 28.3963 27.8632C28.9359 28.0434 29.2956 28.4637 29.7152 28.804C30.1549 29.3645 30.5945 29.9249 31.0341 30.4854C31.7136 31.0859 32.2731 31.7665 32.8326 32.427Z\" fill=\"#F9F9F8\"></path> <path d=\"M10.1515 33.4679C10.3913 33.4679 10.6112 33.4679 10.851 33.4679C10.811 33.9683 10.4313 34.6689 10.9109 34.8891C11.4505 35.1293 12.2498 35.1293 12.8093 34.8891C13.189 34.7289 12.9692 34.0083 12.8693 33.5079C13.0691 33.3878 13.3089 33.4279 13.5687 33.4879C13.3689 34.5088 13.4488 35.5096 13.4888 36.5104C13.4888 36.7106 13.6686 36.9508 13.249 36.9508C12.8893 36.9508 12.9492 36.7907 12.9692 36.5505C13.0092 35.2694 13.0092 35.2694 11.7702 35.2694C10.6511 35.2694 10.6711 35.2694 10.751 36.4504C10.771 36.6305 11.0508 36.9508 10.5512 36.9708C10.0117 36.9908 10.2914 36.6505 10.2714 36.4304C10.2115 35.4495 10.3514 34.4887 10.1515 33.4679Z\" fill=\"#FBFBFB\"></path> <path d=\"M5.81516 34.1485C5.65529 33.628 5.71524 33.3678 6.31474 33.4078C7.11407 33.4479 7.91341 33.4479 8.71274 33.4078C9.27227 33.3678 9.37219 33.588 9.23231 34.0684C9.03247 34.1685 8.99251 33.9483 8.89259 33.8682C8.59284 33.6681 8.23314 33.548 7.91341 33.7081C7.59367 33.8482 7.77352 34.2085 7.77352 34.4487C7.79351 35.2494 7.65362 36.0701 7.89342 36.8707C7.33389 37.0709 7.17402 36.9308 7.27394 36.3303C7.37386 35.6897 7.29392 35.0292 7.29392 34.3887C7.29392 33.608 6.93422 33.4078 6.2348 33.8082C6.05495 33.9083 5.95504 34.0284 5.81516 34.1485Z\" fill=\"#F7F7F7\"></path> <path d=\"M15.5071 35.2494C15.4871 36.8707 15.7269 37.0509 17.2456 36.4504C17.3056 36.6305 17.2856 36.8907 17.1257 36.8907C16.4263 36.9308 15.7469 36.9308 15.0475 36.9108C14.8276 36.8907 14.9875 36.6906 14.9875 36.5505C14.9875 35.7098 15.0075 34.849 15.0075 34.0083C15.0075 33.8282 14.9475 33.6681 14.8876 33.4078C15.547 33.4078 16.1665 33.4078 16.806 33.4078C17.0058 33.4078 17.1657 33.4279 17.1257 33.6881C17.0658 33.9683 16.8859 33.7481 16.786 33.7281C15.4471 33.548 15.4471 33.548 15.4871 34.9091C15.587 35.0292 15.587 35.1493 15.5071 35.2494Z\" fill=\"#F8F8F8\"></path> <path d=\"M34.2315 21.7381C34.6711 21.9183 34.3114 22.1985 34.3114 22.4387C34.2714 23.2594 34.6112 24.1001 34.0716 24.9007C33.9118 25.1409 33.6719 25.7014 33.3322 25.9616C33.1923 25.8015 33.1524 25.6213 33.1724 25.4212C33.1923 25.3411 33.2123 25.2811 33.2323 25.201C33.4321 24.9007 33.6919 24.6205 33.7519 24.2402C33.7719 24.0801 33.8718 23.8198 33.7119 23.7598C32.9326 23.4595 33.3322 23.1593 33.632 22.759C33.8518 22.4587 33.612 21.9783 33.8118 21.618C34.1116 21.1977 34.1316 21.578 34.2315 21.7381Z\" fill=\"#211D1B\"></path> <path d=\"M30.3347 6.7256C30.3347 6.82568 30.3347 6.94578 30.3347 7.04587C29.995 6.88573 29.7752 6.32527 29.2556 6.7256C29.0758 5.8849 28.7161 6.62552 28.4363 6.62552C28.3764 6.62552 28.3164 6.68557 28.2365 6.7256C28.0766 6.78565 28.0566 6.70558 28.0766 6.56547C28.0966 6.34528 27.8968 6.30525 27.7569 6.20517C27.617 6.10508 27.5371 6.005 27.7769 5.90492C27.8168 5.8849 27.8768 5.8849 27.9167 5.8849C27.9967 5.8849 28.0566 5.8849 28.1366 5.8849C28.0766 5.84487 27.9967 5.86488 27.9767 5.78482C28.0966 5.62468 28.2964 5.48457 28.1765 5.22435C28.5562 4.96413 28.5362 5.46455 28.796 5.5246C29.2157 5.6447 29.5154 6.04503 29.995 6.1251C30.3147 6.20517 30.3347 6.4854 30.3347 6.7256Z\" fill=\"#24201D\"></path> <path d=\"M32.8326 32.427C32.0933 31.9066 31.5537 31.226 31.0541 30.4854C31.154 30.3253 31.254 30.2652 31.3739 30.4454C31.7935 31.0859 32.3331 31.5863 32.9525 32.0467C33.2323 32.2669 32.8127 32.2869 32.8326 32.427Z\" fill=\"#201A16\"></path> <path d=\"M34.2315 21.7381C34.1116 21.7581 34.0916 21.3778 33.9117 21.638C33.2123 21.4379 33.0525 20.8374 32.8726 20.2569C32.8726 20.0967 32.8726 19.9366 32.8726 19.7765C32.8926 19.7765 32.9326 19.7765 32.9525 19.7765C33.2923 19.9366 34.1915 21.3178 34.2315 21.7381Z\" fill=\"#221E1D\"></path> <path d=\"M18.3847 7.34612C18.4846 7.46622 18.5645 7.56631 18.6644 7.68641C18.7244 7.98666 17.8651 7.36614 18.2448 8.10675C18.3247 8.24687 17.945 8.0467 17.7852 8.10675C17.7252 8.08674 17.6853 8.02669 17.6653 7.96664C17.7452 7.74645 17.5454 7.74645 17.4255 7.66639C17.2456 7.60634 17.2856 7.48624 17.3056 7.36614C17.6853 7.24604 18.025 7.76647 18.3847 7.34612Z\" fill=\"#FDFCFA\"></path> <path d=\"M15.5071 35.2488C15.5071 35.1489 15.5071 35.029 15.5071 34.9291C15.9467 35.009 16.4263 34.8492 16.846 35.089C16.8859 35.1489 16.8859 35.2089 16.846 35.2688C16.4063 35.2488 15.9467 35.2488 15.5071 35.2488Z\" fill=\"#E0DDDE\"></path> <path d=\"M37.0891 38.7117C36.8293 38.4519 36.5695 38.4719 36.3098 38.7117C36.2098 38.6518 36.05 38.5119 36.1699 38.4719C36.5096 38.352 36.8893 38.352 37.229 38.4719C37.3489 38.5119 37.209 38.6518 37.0891 38.7117Z\" fill=\"#878485\"></path> <path d=\"M16.846 35.2494C16.846 35.1893 16.846 35.1293 16.846 35.0692C16.846 34.9491 16.806 34.789 16.9659 34.769C17.2656 34.749 17.1257 35.0092 17.1257 35.1293C17.1257 35.3695 17.0458 35.4896 16.846 35.2494Z\" fill=\"#7B7779\"></path> <path d=\"M41.7252 39.593C42.005 39.3928 41.8052 39.0726 41.8851 38.8324C42.1249 39.0926 42.0649 39.4128 41.985 39.6731C41.9051 39.9133 41.7652 39.7531 41.7252 39.593Z\" fill=\"#7D797A\"></path> <path d=\"M32.8726 20.2569C33.2923 20.6572 33.3722 21.3178 33.9117 21.638C33.9517 21.9183 33.8318 22.1785 33.9117 22.4787C34.0516 22.9791 33.6519 23.1593 33.1923 23.2794C33.5121 23.4796 33.9917 23.2794 34.0117 23.6397C34.0516 24.2402 33.9117 24.8407 33.3122 25.181C33.2523 25.221 33.1923 25.221 33.1324 25.161C33.0924 25.1009 33.0724 25.0208 33.0724 24.9408C33.0924 24.1201 32.8526 23.4595 32.0533 23.2794C32.413 23.4996 32.9925 23.6997 32.8127 24.4203C32.7127 24.8207 32.453 25.161 31.9734 25.161C31.5537 25.161 31.214 25.0008 31.1341 24.5805C31.2939 25.1409 31.7136 25.241 32.2531 25.161C32.5928 25.1009 32.9126 25.0209 32.6728 25.5613C32.4729 25.8415 32.1732 25.9416 31.8535 25.9816C31.6137 26.0017 31.3539 26.0217 31.254 26.3019C31.214 26.362 31.154 26.402 31.0941 26.442C30.7943 26.3219 30.3147 26.362 30.6345 25.8015C30.7344 25.6414 30.7544 25.3611 30.5545 25.4012C30.3547 25.4412 29.935 25.1409 29.9151 25.6213C29.8951 26.2619 29.6553 25.7615 29.4555 25.7214C29.4155 26.1017 30.035 26.5021 29.4555 26.8624C29.2956 26.8824 29.2356 26.8424 29.2756 26.6822C29.5354 25.8415 28.4962 26.0817 28.3164 25.5013C28.8559 25.7014 29.2556 25.5012 29.6353 25.221C29.7552 25.1209 30.035 25.181 29.975 24.9208C29.9151 24.6605 29.6953 24.5605 29.4555 24.6005C29.1157 24.6405 28.776 24.7406 28.4363 24.7606C28.1166 24.8007 27.6769 24.8407 27.7169 24.4003C27.7569 24.1001 27.7569 23.5196 28.4563 23.6397C28.836 23.7198 29.2756 23.4996 29.4355 23.0992C29.5753 22.7389 29.5554 22.3186 29.1757 22.0384C29.0158 21.9783 28.8959 21.9583 29.0158 22.1985C29.0558 22.5388 29.1757 22.9191 28.756 23.1193C28.5762 23.1793 28.5162 23.0792 28.5562 22.9191C28.5762 22.6389 28.4163 22.4787 28.1565 22.5188C27.4971 22.6188 27.0974 22.0784 26.398 21.9583C26.9375 21.618 27.7169 21.7381 27.577 20.9374C27.5371 20.6572 27.3572 20.437 27.0375 20.397C26.7177 20.357 26.5179 20.4771 26.4779 20.8574C26.6978 20.7573 26.9176 20.5972 27.0574 20.8974C27.1574 21.1376 26.9376 21.1977 26.7777 21.2377C26.1382 21.3978 25.5187 21.4579 24.9392 21.0175C24.8793 20.8774 24.9592 20.8173 25.0591 20.7973C25.239 20.7973 25.3988 20.7773 25.5787 20.7973C25.4388 20.7773 25.3189 20.7973 25.179 20.7773C25.159 20.7573 25.1191 20.7373 25.0991 20.7173C25.159 20.6372 24.9992 20.457 25.219 20.437C25.6586 20.417 26.0383 20.1968 26.378 19.9566C26.8776 19.5763 27.4371 19.8766 27.9567 19.8165C27.8768 19.5763 28.0566 19.4962 28.2165 19.3962C28.776 19.236 29.3156 19.0959 29.5953 19.8365C29.7352 20.8774 29.7352 20.8774 31.0141 21.0575C31.1141 21.0776 31.0341 20.9174 31.0541 21.0175C30.2748 21.0175 29.7152 20.7773 29.6353 19.8766C29.6353 19.7965 29.6553 19.7364 29.6753 19.6564C29.7552 19.5163 29.8751 19.4362 30.035 19.4362C30.2548 19.4962 30.3747 19.6964 30.4946 19.8365C30.3947 19.4362 30.015 19.0759 30.3747 18.6155C30.6345 18.3153 30.4147 17.8549 30.9542 17.5947C31.4538 17.3545 32.2931 17.2344 32.6128 17.7148C32.7127 17.8549 32.7927 18.1551 32.5329 18.035C32.1132 17.8549 31.9534 18.1751 31.6736 18.2752C31.4938 18.3553 31.0541 18.1751 31.154 18.4554C31.3139 18.8957 30.7943 19.4562 31.4138 19.7565C31.4738 19.6764 31.5137 19.5363 31.6736 19.6163C31.6936 19.6564 31.7136 19.6964 31.7336 19.7364C32.0333 19.8165 31.8734 19.5163 31.9734 19.4562C32.2731 19.7364 32.5729 19.9967 32.8726 20.2569Z\" fill=\"#FDFDFC\"></path> <path d=\"M27.1574 27.8832C27.1973 27.7031 27.1374 27.4429 27.3772 27.3828C27.5171 27.3428 27.597 27.543 27.6769 27.6631C28.6761 29.0842 29.6753 30.5054 30.4546 32.0867C30.5545 32.3069 30.7943 32.5471 30.5745 32.7673C30.3947 32.9475 30.1549 32.7273 29.955 32.6472C29.3555 32.427 28.756 32.1668 28.1565 31.9266C27.3972 31.6063 26.7577 31.1259 26.418 30.3653C25.6786 28.784 24.5795 27.4629 23.4605 26.1818C22.9009 25.5413 22.3813 24.8607 22.1016 24.0601C22.0216 23.8399 21.9017 23.5997 22.0017 23.3395C22.1016 23.0993 22.2415 22.8791 22.5012 22.839C22.801 22.799 22.9409 23.0192 23.0208 23.2794C23.2206 23.98 23.4005 24.6606 23.6003 25.3611C24.02 25.2611 23.7602 24.9608 23.7602 24.7606C23.7402 24.5204 23.7202 24.2602 23.6803 24.02C23.6003 23.3595 23.4005 22.6589 24.3597 22.4787C24.4796 22.4587 24.5595 22.2786 24.6794 22.1385C25.2789 23.0192 25.8984 23.8799 26.458 24.7606C26.6978 25.141 26.8776 25.5413 27.3772 25.6814C27.7769 25.7815 27.4571 26.1218 27.6769 26.422C26.7777 25.9016 26.8376 26.5021 26.7777 26.9825C26.7377 27.3628 26.8376 27.7231 26.8976 28.0834C27.1174 28.2035 27.0974 27.9433 27.1574 27.8832Z\" fill=\"#FDFDFD\"></path> <path d=\"M22.0216 27.9633C21.3422 27.0826 20.7427 26.2018 19.7435 25.7014C19.3039 25.4812 18.7444 25.0208 18.8643 24.6806C19.144 23.9199 18.4846 23.7598 18.2448 23.3194C18.045 22.9591 17.965 22.5588 17.985 22.1585C18.025 21.638 18.2448 21.2977 18.8643 21.4379C18.3847 22.3786 18.4446 22.819 19.5037 23.4395C22.1016 24.9608 23.4005 27.583 25.199 29.8048C25.219 29.8449 25.199 29.9049 25.219 29.985C24.9192 30.1051 24.6595 29.945 24.3797 29.8649C23.3006 29.4846 22.3014 28.9241 21.3022 28.3436C19.5037 27.3228 17.6653 26.382 15.627 25.5613C16.3863 25.4012 16.3264 24.6605 16.766 24.3002C17.2456 23.8999 17.4455 23.8999 17.5654 24.5004C17.6853 25.1409 18.045 25.4812 18.5645 25.8215C19.4838 26.422 20.363 27.0826 21.2623 27.7031C21.4421 27.8632 21.622 28.1234 22.0216 27.9633Z\" fill=\"#FDFDFD\"></path> <path d=\"M21.9417 11.3495C22.4213 11.5096 22.0216 10.9491 22.2415 10.9691C22.4813 10.9892 22.7011 11.1893 22.9609 11.1093C23.0608 11.0892 23.2206 11.0092 23.2206 10.9892C23.1407 10.4087 23.6603 10.5088 23.94 10.3486C24.0799 10.3286 24.1199 10.4287 24.1199 10.5488C23.6403 11.4696 22.9209 12.2302 22.4413 13.0909C22.6811 12.9108 22.801 12.3503 23.3405 12.5705C23.3805 13.0309 23.1207 13.4712 23.2406 13.9516C23.3006 14.1518 23.3605 14.3319 23.5803 14.392C23.8601 14.4721 23.94 14.3119 23.96 14.0717C24 13.9716 24.0599 13.8916 24.1599 13.8515C24.1199 13.9516 24.1998 13.7515 24.2398 13.8315C24.2598 13.8716 24.3597 13.7915 24.3197 13.7715C24.0999 13.5713 23.6803 13.5513 23.7002 13.1309C23.7402 13.0108 23.8201 12.9508 23.94 12.9508C24.3797 13.0909 24.8593 13.1109 25.219 13.4312C25.3389 13.5713 25.4588 13.7314 25.4188 13.8916C25.219 14.8123 25.4388 15.6731 25.8584 16.4937C25.7985 16.854 25.5187 16.834 25.2589 16.8941C24.8193 16.9141 24.5395 17.1943 24.2798 17.4946C24 17.8148 23.7202 17.8148 23.3605 17.6547C22.8809 17.4345 22.4413 17.1543 22.0616 16.814C21.7419 16.5138 21.642 16.1735 21.7818 15.7331C22.0816 14.8324 22.0616 14.8324 21.0824 14.7723C21.0425 14.7723 20.9825 14.7323 20.9425 14.7123C20.8826 14.5521 20.8027 14.452 20.6428 14.372C20.5828 14.352 20.5629 14.3119 20.5429 14.2519C20.5429 14.1518 20.6028 14.0517 20.5828 13.9316C20.4629 13.8515 20.2831 13.8315 20.2431 13.6514C20.3231 13.3912 20.3231 13.0909 20.6028 12.9108C20.6028 12.8307 20.6228 12.7706 20.6228 12.6906C20.9425 12.8107 21.2823 13.0909 21.4621 12.4704C21.4821 12.3903 22.1016 12.5304 22.2415 12.0901C22.3414 11.8699 22.1016 11.7298 22.0816 11.5496C22.0416 11.5296 22.0017 11.5096 21.9617 11.4896C21.9217 11.4495 21.9017 11.4095 21.9217 11.3895C21.9217 11.3695 21.9417 11.3495 21.9417 11.3495Z\" fill=\"#201B17\"></path> <path d=\"M20.9026 14.7323C21.1024 14.7923 21.2223 14.6522 21.4022 14.5922C21.642 14.5121 21.9017 14.4921 22.1016 14.6922C22.3014 14.9124 22.2415 15.1526 22.1415 15.3928C21.7219 16.3937 21.7419 16.4537 22.6012 17.0542C22.6411 17.0742 22.6811 17.1143 22.7211 17.1343C23.7402 17.8148 23.8201 17.8148 24.5995 16.8941C24.7993 16.6739 24.9992 16.5938 25.239 16.774C25.3988 16.9341 25.3988 17.1343 25.4188 17.3144C25.4388 17.4545 25.5187 17.5346 25.6386 17.5947C25.8385 17.7348 26.0383 17.8549 26.1182 18.1151C26.1382 18.2152 26.1582 18.3353 26.1582 18.4354C26.1382 18.6155 26.1182 18.7957 25.9384 18.8957C25.3589 18.8757 24.9592 18.4754 24.4796 18.2352C24.1998 18.4153 23.8401 18.5154 23.5604 18.3553C22.7211 17.8949 21.8218 17.5346 21.1824 16.774C21.1224 16.6739 21.0824 16.5738 21.0624 16.4537C21.0425 16.2335 21.0025 16.0133 21.0225 15.7932C21.0025 15.613 21.1624 15.3728 20.9026 15.2527C20.6628 15.0926 21.0025 14.9124 20.9026 14.7323Z\" fill=\"#FBFBFA\"></path> <path d=\"M25.9983 18.1351C25.8385 17.975 25.6986 17.8148 25.5387 17.6547C25.4188 17.5146 25.4188 17.3545 25.5187 17.1943C26.0383 17.0942 26.5179 17.3945 27.0375 17.3745C27.2773 17.4545 27.5371 17.4345 27.7769 17.5146C28.2964 17.6547 28.796 17.8549 28.9359 18.4354C29.0758 19.0158 28.5562 19.176 28.2365 19.4562C28.1366 19.5563 28.0366 19.6564 27.9367 19.7765C27.3572 18.8557 26.9176 18.7756 26.0183 19.4562C25.5787 19.7765 25.1391 20.0167 24.5795 19.7364C24.3397 19.6163 24.1998 19.4162 24.1799 19.1359C24.1599 18.8157 24.2798 18.8957 24.5196 18.9158C24.6994 18.9158 24.4196 18.6155 24.4996 18.4554C24.7394 18.1751 24.8793 18.4554 25.0191 18.5555C25.2589 18.7356 25.5587 18.7156 25.8185 18.8557C25.9983 18.7556 25.9784 18.5555 25.9784 18.3953C26.0383 18.3553 26.0983 18.3153 26.1382 18.2752C26.1982 18.2352 26.2981 18.2752 26.3381 18.1751C26.2781 18.2152 26.1982 18.2152 26.1382 18.2152C26.0983 18.2352 26.0383 18.1952 25.9983 18.1351Z\" fill=\"#F9F9F8\"></path> <path d=\"M19.5437 14.392C19.4838 14.412 19.4438 14.432 19.3839 14.452C19.224 14.4721 19.0841 14.5521 18.9242 14.5121C18.6445 14.412 18.2848 14.5121 18.045 14.2519C18.3247 13.8315 18.025 13.6914 17.7052 13.5913C17.4654 13.5113 17.3655 13.4112 17.4255 13.1309C17.4854 12.8507 17.6653 12.6505 17.8851 12.6305C18.1849 12.6105 18.045 12.8907 18.065 13.0709C18.1049 13.3111 18.2248 12.9908 18.3047 13.0709C18.5046 13.231 18.5445 13.5513 18.8243 13.6714C18.8843 13.7114 18.9442 13.7314 18.9842 13.7915C19.164 13.9716 19.5837 13.9917 19.5437 14.392Z\" fill=\"#EDECEB\"></path> <path d=\"M20.7427 18.6155C20.3231 18.5555 19.8834 18.5755 19.7036 18.0951C19.9434 17.7748 20.6428 18.3553 20.6628 17.5947C20.9825 17.6347 21.2623 17.7948 21.4421 18.055C21.7619 18.5354 21.0625 18.3153 21.0625 18.5755C20.9426 18.6756 20.8426 18.6756 20.7427 18.6155Z\" fill=\"#EFEEED\"></path> <path d=\"M18.7644 10.7089C19.244 10.6689 19.164 11.4295 19.6636 11.4295C19.6636 11.4495 19.6436 11.4896 19.6436 11.4896C19.5037 11.6297 19.4238 11.9299 19.144 11.7898C18.7843 11.6297 18.3047 11.6097 18.2648 11.1093C18.2248 10.9892 18.3647 10.6289 18.7644 10.7089Z\" fill=\"#EEEDEC\"></path> <path d=\"M19.2839 9.96831C19.244 9.74812 20.0033 9.78816 19.4438 9.38783C19.3439 9.30776 19.5437 9.28774 19.6236 9.24771C19.7635 9.18766 19.9034 9.14762 20.0033 9.30776C20.3031 9.84821 20.9026 10.3086 20.5629 11.0492C20.363 10.9091 20.5629 10.5688 20.3031 10.4487C19.9434 10.3086 19.4638 10.4287 19.2839 9.96831Z\" fill=\"#34312E\"></path> <path d=\"M31.0741 26.442C31.0941 26.362 31.0941 26.2819 31.1141 26.2018C31.2939 26.1218 31.4538 26.0017 31.6336 25.9216C32.2331 25.7214 32.4929 26.0017 32.413 26.6822C31.8135 26.2218 31.8734 27.1827 31.3938 27.1026C31.4138 26.8424 31.3739 26.5621 31.0741 26.442Z\" fill=\"#F1F1F0\"></path> <path d=\"M20.6028 14.2319C20.6028 14.2919 20.6228 14.3319 20.6228 14.392C20.383 14.412 20.4829 14.9124 20.2231 14.7723C20.0433 14.6522 19.9833 14.3119 19.8834 14.0717C19.6636 14.0117 19.3639 14.0117 19.5437 13.6314C19.7036 13.5913 19.8435 13.5313 20.0033 13.4912C20.0833 13.5713 20.2231 13.5113 20.2831 13.6314C20.423 13.8916 20.9026 13.4512 20.9226 13.9516C20.8027 14.0517 20.5029 13.9116 20.6028 14.2319Z\" fill=\"#D9D8D6\"></path> <path d=\"M32.413 26.6822C32.5129 26.362 32.413 26.1418 32.1132 26.0217C31.8535 25.9016 31.6536 25.9416 31.5137 26.2419C31.3739 26.5421 31.234 26.2218 31.1141 26.2018C31.154 25.8015 31.4538 25.7214 31.7735 25.7615C32.1132 25.8015 32.353 25.6614 32.5928 25.5012C32.6928 25.5213 32.7527 25.5813 32.8127 25.6614C32.8127 25.7214 32.8127 25.7815 32.7927 25.8415C32.7527 25.9616 32.7327 26.0817 32.6328 26.1618C32.5928 26.362 32.6328 26.5621 32.413 26.6822Z\" fill=\"#393633\"></path> <path d=\"M21.0425 18.7156C21.4221 18.9358 21.3422 19.216 21.1424 19.4962C21.0025 19.6964 20.7227 19.6964 20.5429 19.6163C20.2831 19.5363 20.2431 19.256 20.2831 18.9958C20.3231 18.8357 20.4629 18.8757 20.5828 18.8757C20.8227 19.0759 20.8826 18.7756 21.0425 18.7156Z\" fill=\"#EFEEED\"></path> <path d=\"M20.2631 13.6314C20.1632 13.5913 20.0833 13.5313 19.9833 13.4912C19.8634 13.2911 19.4838 13.191 19.6636 12.8507C19.8634 12.5104 20.0633 12.8907 20.2631 12.8707C20.363 12.8507 20.4629 12.8907 20.5429 12.9108C20.6628 13.251 20.443 13.4312 20.2631 13.6314Z\" fill=\"#BEBCBA\"></path> <path d=\"M18.4846 15.2927C18.7044 15.593 19.1241 15.2727 19.3639 15.573C19.184 15.8532 18.8643 15.7131 18.6445 15.8332C18.4246 15.9533 18.1449 15.8932 18.0649 15.6731C17.965 15.3728 18.3047 15.3928 18.4846 15.2927Z\" fill=\"#CDCBC9\"></path> <path d=\"M17.4455 8.46705V8.54712C17.4654 8.76731 17.7652 9.06756 17.3655 9.18766C17.1857 9.24771 16.846 9.20767 16.786 8.98749C16.6861 8.60717 17.1057 8.56714 17.3056 8.407C17.4055 8.32694 17.4455 8.34695 17.4455 8.46705Z\" fill=\"#EBEBE9\"></path> <path d=\"M19.2839 9.9683C19.6636 10.0284 19.9833 10.2285 20.2831 10.4687C20.0433 10.5888 19.7635 10.4487 19.5037 10.5888C19.204 10.7289 19.0641 10.4887 19.1041 10.1885C19.164 10.1084 19.224 10.0484 19.2839 9.9683Z\" fill=\"#E9E4E0\"></path> <path d=\"M18.7843 13.7715C18.2448 13.7715 18.4246 13.3311 18.3447 13.0509C18.5645 13.0509 18.7843 13.0709 19.0042 13.0709C19.1041 13.3511 19.144 13.6314 18.7843 13.7715Z\" fill=\"#3F3B38\"></path> <path d=\"M19.5437 13.6314C19.4238 13.9716 19.7635 13.9116 19.8834 14.0717C19.7635 14.1718 19.6636 14.2919 19.5437 14.392C19.4038 14.1318 18.9442 14.1918 18.9242 13.7915C19.0441 13.5713 19.224 13.5113 19.4438 13.6514C19.4838 13.6113 19.5038 13.6113 19.5437 13.6314Z\" fill=\"#3B3835\"></path> <path d=\"M25.8385 18.8757C25.2989 19.0559 24.9792 18.5354 24.5196 18.4754C24.5196 18.3953 24.4996 18.3353 24.4996 18.2552C25.0391 18.2152 25.4188 18.6155 25.8385 18.8757Z\" fill=\"#2C2722\"></path> <path d=\"M20.1432 15.653C20.1432 16.3336 19.6636 16.5938 19.3439 16.9541C19.3839 16.4337 19.7036 16.0734 20.1432 15.653Z\" fill=\"#E2E0E0\"></path> <path d=\"M19.3039 12.3503C19.3439 12.5304 19.2639 12.5705 19.0841 12.5705C18.8843 12.5505 18.7644 12.5304 18.8043 12.2902C18.8243 12.1701 18.7843 11.97 19.0241 12.03C19.184 12.05 19.3639 12.1101 19.3039 12.3503Z\" fill=\"#F9F7F5\"></path> <path d=\"M18.4846 15.2927C18.6245 14.8123 18.1049 15.0926 17.985 14.8324C18.2648 14.8324 18.5046 14.8324 18.7644 14.8324C18.8043 14.7723 18.8643 14.7723 18.9242 14.7723C19.0042 14.8123 19.0641 14.8924 19.0841 14.9925C19.0841 15.4929 18.6445 15.1126 18.4846 15.2927Z\" fill=\"#DFDDDA\"></path> <path d=\"M21.1624 16.4337C21.1624 16.5538 21.1824 16.6939 21.1824 16.814C20.7028 16.1735 20.6628 16.0534 20.8826 15.4729C20.9625 15.5329 21.0025 15.613 21.0225 15.7131C21.0624 15.9533 21.0824 16.1935 21.1624 16.4337Z\" fill=\"#F4F2EF\"></path> <path d=\"M32.7127 25.7815C32.7127 25.7214 32.7127 25.6814 32.7127 25.6213C32.7127 25.3411 32.8526 25.181 33.1324 25.161C33.1923 25.161 33.2523 25.161 33.3122 25.161C33.3122 25.201 33.3122 25.241 33.3122 25.2811C33.1724 25.4412 33.3722 25.7615 33.0325 25.8215C32.9925 25.8015 32.9326 25.7815 32.8926 25.7815C32.8326 25.8415 32.7727 25.8415 32.7127 25.7815Z\" fill=\"#E5E4E2\"></path> <path d=\"M19.9234 18.9355C19.7635 18.9954 19.7036 19.0354 19.6436 19.0354C19.4838 19.0354 19.3039 19.0154 18.9442 18.9754C19.3639 18.6957 19.6037 18.6757 19.9234 18.9355Z\" fill=\"#DEDEDE\"></path> <path d=\"M19.4638 13.6314C19.2839 13.6514 19.0841 13.6514 18.9442 13.7715C18.8843 13.7715 18.8443 13.7515 18.7843 13.7515C19.0042 13.5713 18.9442 13.2911 19.0042 13.0509C19.144 13.251 19.3039 13.4512 19.4638 13.6314Z\" fill=\"#C1BEBC\"></path> <path d=\"M20.9226 15.7331C20.9026 15.653 20.9026 15.553 20.8826 15.4729C20.8826 15.4128 20.8826 15.3528 20.8826 15.2927C20.9825 15.2527 21.1624 15.1526 21.2023 15.1927C21.3822 15.3728 21.1624 15.553 21.1624 15.7331C21.0824 15.8132 21.0025 15.8132 20.9226 15.7331Z\" fill=\"#4B4948\"></path> <path d=\"M23.7602 24.7206C23.9201 24.9208 23.8801 25.181 23.8801 25.4212C23.8801 25.5213 23.9201 25.7014 23.7202 25.6414C23.6003 25.6013 23.5604 25.4812 23.5804 25.3411C23.8801 25.201 23.6403 24.9208 23.7602 24.7206Z\" fill=\"#959493\"></path> <path d=\"M28.5162 22.9191C28.5762 22.979 28.6561 23.059 28.7161 23.1189C28.6961 23.1589 28.6561 23.1989 28.6361 23.2188C28.4563 23.3188 28.2764 23.3987 28.0966 23.2188C28.0566 23.1789 27.9767 23.079 27.9967 23.039C28.1366 22.8392 28.3564 22.999 28.5162 22.9191Z\" fill=\"#E4E3E1\"></path> <path d=\"M17.4455 8.46706C17.4055 8.44704 17.3456 8.42702 17.3056 8.40701C17.2856 8.22686 17.2257 8.04671 17.4055 7.90659C17.5254 7.84654 17.6253 7.84654 17.7252 7.94662C17.7452 8.00667 17.7652 8.04671 17.7852 8.10676C17.8052 8.32694 17.6053 8.38699 17.4455 8.46706Z\" fill=\"#94918F\"></path> <path d=\"M21.0425 18.7156C21.0025 18.8957 21.0025 19.1359 20.7427 19.156C20.5629 19.176 20.6228 18.9758 20.5828 18.8757C20.7027 18.8157 20.7427 18.7156 20.7427 18.5955C20.8426 18.5955 20.9425 18.5755 21.0425 18.5755C21.0425 18.6355 21.0425 18.6756 21.0425 18.7156Z\" fill=\"#262522\"></path> <path d=\"M18.9442 14.8324C18.8843 14.8324 18.8243 14.8324 18.7644 14.8324C18.5845 14.5321 18.2648 14.7923 18.045 14.6722C18.005 14.5321 18.0849 14.4721 18.1849 14.412C18.2648 14.392 18.3247 14.392 18.4047 14.372C18.6245 14.352 18.8443 14.392 19.0641 14.4721C19.204 14.6722 19.0841 14.7523 18.9442 14.8324Z\" fill=\"#FAF9F6\"></path> <path d=\"M18.2248 14.5121C18.1649 14.5721 18.1049 14.6122 18.0649 14.6722C17.8451 14.6922 17.7052 14.5721 17.5654 14.432C17.5254 14.3319 17.5454 14.2319 17.6053 14.1518C17.6853 14.1918 17.7852 14.2118 17.8651 14.2519C17.985 14.352 18.2448 14.2519 18.2248 14.5121Z\" fill=\"#CBC9C7\"></path> <path d=\"M18.2248 14.5116C18.1049 14.4317 17.985 14.3318 17.8651 14.2518C17.9251 14.2518 17.985 14.2319 18.0649 14.2319C18.3447 14.3318 18.7044 14.112 18.9642 14.3917C18.7843 14.5516 18.5445 14.3917 18.3647 14.5116L18.3047 14.5316L18.2248 14.5116Z\" fill=\"#33302E\"></path> <path d=\"M25.1391 20.8173C25.0791 20.8774 24.9992 20.9374 24.9392 21.0175C24.6994 20.9174 24.5396 20.7573 24.5196 20.437C24.7394 20.5371 24.9192 20.6172 25.0991 20.6972V20.6772C25.1191 20.7173 25.1391 20.7573 25.1391 20.8173Z\" fill=\"#DDDAD8\"></path> <path d=\"M17.6053 14.1517C17.5853 14.2516 17.5853 14.3315 17.5654 14.4314C17.3855 14.3915 17.1857 14.3915 17.0258 14.1717C17.2256 14.0518 17.4055 14.0518 17.6053 14.1517Z\" fill=\"#989593\"></path> <path d=\"M28.9759 22.1778C28.816 22.0579 28.5762 22.0379 28.4963 21.7781C28.796 21.6982 28.9759 21.8181 29.1357 22.0179C29.0958 22.0779 29.0358 22.1378 28.9759 22.1778Z\" fill=\"#43413F\"></path> <path d=\"M18.3447 14.5119C18.5046 14.332 18.7444 14.412 18.9442 14.392C19.0841 14.412 19.244 14.432 19.3838 14.4519C19.3439 14.4919 19.2839 14.5119 19.244 14.5519C19.204 14.6318 19.144 14.6318 19.0841 14.5718C18.8443 14.5319 18.6045 14.5319 18.3447 14.5119Z\" fill=\"#2C2927\"></path> <path d=\"M29.2756 26.6622C29.3356 26.7223 29.3955 26.7823 29.4555 26.8424C29.3755 27.0025 29.2556 27.2827 29.0558 27.0626C28.8759 26.9024 29.1357 26.7823 29.2756 26.6622Z\" fill=\"#FCFAF7\"></path> <path d=\"M32.7127 25.7815C32.7727 25.7815 32.8326 25.7815 32.8926 25.7815C32.8127 25.9214 33.0525 26.301 32.6128 26.1412C32.6128 26.0413 32.5329 25.8814 32.7127 25.7815Z\" fill=\"#B8B5B1\"></path> <path d=\"M27.1574 27.8832C27.1574 28.0634 27.1574 28.2435 27.1574 28.4437C26.9376 28.3436 26.8776 28.2035 26.8976 28.0234C26.9975 27.9833 27.0774 27.9233 27.1574 27.8832Z\" fill=\"#646363\"></path> <path d=\"M20.5828 19.8962C20.3231 19.9561 20.0833 20.076 19.9434 19.7363C20.2231 19.5365 20.383 19.7563 20.5828 19.8962Z\" fill=\"#EDEBEB\"></path> <path d=\"M18.4446 12.3297C18.4246 12.4297 18.3247 12.4496 18.2248 12.4097C18.1049 12.3697 18.005 12.2898 18.025 12.1299C18.045 11.99 18.1249 11.99 18.2248 12.05C18.3247 12.1099 18.4646 12.1499 18.4446 12.3297Z\" fill=\"#D6D3D0\"></path> <path d=\"M33.0325 25.8415C33.3722 25.7815 33.0525 25.4012 33.3122 25.3011C33.3122 25.5012 33.3122 25.7214 33.3122 25.9216C33.2323 25.9016 33.1324 25.8816 33.0325 25.8415Z\" fill=\"#231F20\"></path> <path d=\"M19.0841 14.5521C19.144 14.5521 19.184 14.5321 19.244 14.5321C19.244 14.6922 19.2639 14.8724 19.0841 14.9925C19.0441 14.9324 18.9842 14.8924 18.9442 14.8324C19.0042 14.7323 19.0441 14.6522 19.0841 14.5521Z\" fill=\"#EEECEA\"></path> <path d=\"M17.7252 7.92612C17.6253 7.90614 17.5054 7.90614 17.4055 7.88615C17.4055 7.80622 17.4255 7.72629 17.4255 7.64636C17.5853 7.70631 17.965 7.4665 17.7252 7.92612Z\" fill=\"#656361\"></path> <path d=\"M17.3456 11.7094C17.2856 11.8093 17.2256 11.9092 17.2057 11.8892C17.0858 11.8692 16.9659 11.8093 16.9859 11.6494C16.9859 11.5895 17.0258 11.5295 17.0658 11.4696C17.1457 11.5695 17.2456 11.6294 17.3456 11.7094Z\" fill=\"#B9B5B3\"></path> <path d=\"M28.776 13.0108C28.836 13.0709 28.9159 13.1109 28.9759 13.171C29.0958 13.3111 28.9159 13.4912 29.0358 13.6113C29.1157 13.7515 29.1557 13.8916 29.2356 14.0117C29.3156 14.1718 29.5154 14.2919 29.3955 14.5121C29.0758 14.5521 28.776 14.5721 28.5162 14.352C28.3963 14.2919 28.1965 14.3319 28.1765 14.1718C28.1366 13.9516 28.0566 14.1718 28.0166 14.1518C27.7768 14.1918 27.4771 14.0517 27.3572 14.412C27.3372 14.4921 27.3572 14.5922 27.4371 14.6122C28.0566 14.7723 27.9567 15.1726 27.8168 15.613C27.7569 15.653 27.6969 15.6731 27.637 15.6731C27.4171 15.633 27.2773 15.4529 27.1374 15.2727C27.1374 15.5129 27.1174 15.7331 26.9775 15.9133C26.8576 16.0334 26.7177 16.1134 26.5779 16.1935C26.398 16.2736 26.2981 16.4937 26.0982 16.5338C25.9783 16.5138 25.9184 16.4337 25.8784 16.3336C25.7186 15.9333 25.3988 15.553 25.7585 15.1126C25.9384 14.8524 26.2581 14.7323 26.438 14.392C26.2581 14.5521 26.0983 14.7123 25.8784 14.5922C25.7186 14.2919 25.7985 13.9316 25.6586 13.6314C25.5987 13.3912 25.3589 13.2911 25.2589 13.0709C25.179 12.8707 25.1191 12.6706 25.2589 12.4304C25.6386 11.7698 25.4188 10.9691 24.7594 10.5088C24.6594 10.1685 24.8593 10.0284 25.139 9.92827C25.2589 9.78815 25.3589 9.608 25.4987 9.50792C25.5987 9.44787 25.8385 9.40784 25.8185 9.62802C25.7785 9.92827 25.4588 10.2085 25.6986 10.5288C25.8984 10.789 26.0783 11.0492 25.9384 11.4095C26.3181 11.3495 26.1582 11.0492 26.2981 10.9291C26.4779 10.789 26.9376 11.0292 26.8776 10.5488C26.9975 10.6088 27.1773 10.6289 27.2173 10.5488C27.4171 9.86822 27.6769 10.4487 27.9167 10.4887C28.0966 10.4287 28.2764 10.3686 28.2764 10.6889C28.0766 11.2894 27.8568 11.8899 27.6769 12.4904C27.617 12.6906 27.617 12.9108 27.8568 13.0709C28.1565 13.2911 28.4563 13.151 28.776 13.0108Z\" fill=\"#211C18\"></path> <path d=\"M25.1191 9.90825C24.9992 10.1284 24.8793 10.3486 24.7594 10.5888C24.5995 11.2294 24.04 11.6297 23.7202 12.1701C23.5804 12.3103 23.4804 12.4904 23.3006 12.5905C22.9009 12.5505 22.861 12.9308 22.6411 13.1109C22.4413 13.2711 22.3414 13.5513 21.9417 13.6113C22.5212 12.4304 23.3406 11.4896 24.04 10.4887C24.1399 10.2485 24.2998 10.0684 24.4996 9.88824C24.5396 9.84821 24.5995 9.80817 24.6395 9.76814C24.7194 9.70809 24.8193 9.68807 24.9192 9.70809C24.9792 9.76814 25.0591 9.82819 25.1191 9.90825Z\" fill=\"#EFEEED\"></path> <path d=\"M29.2756 8.40701C29.3156 8.62719 29.2756 8.84737 29.0558 9.00751C28.8959 9.12761 28.6761 9.22769 28.4963 9.12761C28.2964 9.00751 28.4563 8.82736 28.5162 8.66722C28.5562 8.54712 28.6162 8.40701 28.5762 8.30692C28.4763 7.94662 28.7361 7.72644 28.9559 7.72644C29.3156 7.72644 29.2756 8.08674 29.2756 8.40701Z\" fill=\"#312D2A\"></path> <path d=\"M25.3389 8.96747C25.4188 8.70725 25.259 8.58715 25.0591 8.5271C24.6994 8.407 24.7394 8.12677 24.7993 7.76647C25.179 8.26688 25.5787 8.5271 26.2381 8.14679C26.0583 8.62719 25.7785 8.78732 25.5387 8.98749C25.4788 9.04754 25.3988 9.04754 25.3389 8.96747Z\" fill=\"#3C3937\"></path> <path d=\"M26.5379 4.94412C26.6178 5.08424 26.8376 5.12427 26.7977 5.32443C26.4979 5.24437 26.458 5.66472 26.418 5.6447C26.1782 5.48457 26.0383 5.22435 26.1382 4.9241C26.2781 4.84403 26.418 4.82402 26.5379 4.94412Z\" fill=\"#5B5956\"></path> <path d=\"M25.3389 8.96747C25.3988 8.96747 25.4788 8.98749 25.5387 8.98749C25.3788 9.22769 25.199 9.44787 24.9392 9.56797C24.8793 9.54796 24.8393 9.48791 24.8193 9.42786C24.7394 9.00751 24.8193 8.72727 25.3389 8.96747Z\" fill=\"#555251\"></path> <path d=\"M24.6195 9.88824C24.4596 10.1284 24.2997 10.3686 24.04 10.4887C24 10.4487 23.96 10.4087 23.94 10.3686C23.94 10.0083 24 9.68807 24.4796 9.70809C24.5595 9.7281 24.6195 9.78815 24.6195 9.88824Z\" fill=\"#3D3A37\"></path> <path d=\"M30.055 8.1668C30.055 8.24687 30.035 8.32694 30.035 8.42702C29.8751 8.50709 29.6153 8.74728 29.7352 8.30692C29.8351 7.98665 29.7952 7.72643 29.5554 7.50625C29.5154 7.46622 29.4954 7.42618 29.5354 7.40617C29.5554 7.38615 29.5754 7.36613 29.5953 7.36613C29.995 7.48623 30.035 7.82652 30.055 8.1668Z\" fill=\"#24201D\"></path> <path d=\"M22.5412 10.0679C22.3614 10.028 22.1416 10.0679 21.9817 9.78815C22.3814 9.82812 22.761 9.86809 23.1207 9.90805C23.0208 10.2877 22.7411 10.0679 22.5412 10.0679Z\" fill=\"#232120\"></path> <path d=\"M23.2206 8.86725C23.4604 8.78732 23.6603 8.70738 23.8002 8.9272C23.8201 8.96717 23.7402 9.14702 23.6803 9.167C23.5004 9.22695 23.3405 9.12703 23.2206 8.86725Z\" fill=\"#302C2A\"></path> <path d=\"M22.0816 11.5696C22.2015 11.7298 22.5013 11.8499 22.2415 12.1101C22.0416 11.97 21.5221 11.9299 22.0816 11.5696Z\" fill=\"#B8B5B3\"></path> <path d=\"M24.3797 5.80444C24.0999 5.76447 23.8002 5.72451 23.5204 5.68454C23.8202 5.50469 24.1199 5.52467 24.3797 5.80444Z\" fill=\"#41403F\"></path> <path d=\"M19.9034 8.06647C19.8235 8.12642 19.7635 8.24633 19.6636 8.28629C19.5237 8.32626 19.4438 8.20636 19.4438 8.08646C19.4438 7.92659 19.5837 7.90661 19.7036 7.92659C19.7635 7.92659 19.8834 7.88662 19.9034 8.06647Z\" fill=\"#6B6967\"></path> <path d=\"M22.5412 10.0681C22.7211 9.96821 22.9809 10.168 23.1207 9.90826C23.2606 9.96821 23.5004 10.0481 23.2007 10.168C23.0008 10.248 22.7411 10.228 22.5412 10.0681Z\" fill=\"#ABABAA\"></path> <path d=\"M24.9792 5.28408C24.7194 5.38399 24.5595 5.42396 24.3997 5.30406C24.3397 5.26409 24.3197 5.16418 24.4197 5.12421C24.5995 5.02429 24.7394 5.14419 24.9792 5.28408Z\" fill=\"#8D8C8C\"></path> <path d=\"M28.816 12.1101C28.816 12.1501 28.816 12.2102 28.816 12.2502C28.6361 12.4504 28.4363 12.6105 28.0166 12.5505C28.3564 12.3503 28.5362 12.1501 28.816 12.1101Z\" fill=\"#211F1D\"></path> <path d=\"M27.9967 9.68762C28.0566 9.40785 28.2565 9.38787 28.4763 9.42783C28.4963 9.42783 28.5362 9.5877 28.5162 9.60768C28.3764 9.80752 28.1765 9.76755 27.9967 9.68762Z\" fill=\"#322F2E\"></path> <path d=\"M23.8002 8.36697C23.8201 8.18682 23.8601 8.02668 23.8801 7.78648C24.0999 8.02668 24.0599 8.20683 23.8002 8.36697Z\" fill=\"#353431\"></path> <path d=\"M30.7544 9.28774C31.0741 9.60801 30.8743 10.0083 30.9142 10.3887C30.6345 10.0484 30.9342 9.62803 30.7544 9.28774Z\" fill=\"#24201D\"></path> <path d=\"M26.8576 10.5288C27.1774 11.428 26.358 10.6087 26.2781 10.9085C26.4779 10.7886 26.6578 10.6487 26.8576 10.5288Z\" fill=\"#B5B2AF\"></path> <path d=\"M21.1824 9.72811C21.1824 9.84821 21.2423 9.96831 21.1224 10.0684C21.0624 9.96831 20.9825 9.88824 20.9625 9.78816C20.9226 9.66806 20.9425 9.54796 20.9425 9.42786C21.1823 9.38783 21.0625 9.66806 21.1824 9.72811Z\" fill=\"#6E6D6D\"></path> <path d=\"M29.5953 7.36583C29.6153 7.42578 29.5953 7.46575 29.5554 7.50572C29.3156 7.5257 29.1357 7.44577 28.9958 7.24594C29.2556 7.08607 29.4155 7.2859 29.5953 7.36583Z\" fill=\"#7E7D7C\"></path> <path d=\"M26.5379 4.94356C26.398 4.94356 26.2581 4.92357 26.1382 4.92357C26.1382 4.82365 26.1382 4.72374 26.1582 4.60384C26.2981 4.78369 26.6178 4.68377 26.7377 4.92357C26.6578 4.94355 26.5978 4.94356 26.5379 4.94356Z\" fill=\"#EBE9E6\"></path> <path d=\"M24.6195 9.88824C24.5595 9.82819 24.5196 9.76814 24.4596 9.70809C24.4396 9.56797 24.2798 9.48791 24.3597 9.32777C24.4396 9.38782 24.5396 9.42786 24.6195 9.48791C24.7594 9.60801 24.7394 9.74812 24.6195 9.88824Z\" fill=\"#25211E\"></path> <path d=\"M28.2365 10.6483C28.1565 10.5084 28.0167 10.4884 27.8768 10.4484C28.0566 10.3085 28.2964 10.2086 28.4763 10.3485C28.5762 10.4284 28.3764 10.5883 28.2365 10.6483Z\" fill=\"#2C2928\"></path> <path d=\"M24.6395 9.86749C24.6395 9.72761 24.6395 9.60771 24.6395 9.46782C24.6994 9.44784 24.7594 9.44784 24.8193 9.42786C24.8593 9.46782 24.8992 9.50779 24.9392 9.56774C24.9192 9.60771 24.9192 9.64767 24.9192 9.68764C24.8193 9.74759 24.7194 9.80754 24.6395 9.86749Z\" fill=\"#383635\"></path> <path d=\"M27.9967 7.58621C28.0167 7.78605 27.8768 7.78605 27.7769 7.846C27.6969 7.88596 27.637 7.84599 27.637 7.76606C27.617 7.60619 27.7769 7.58621 27.8568 7.52626C27.8568 7.50628 27.9367 7.56623 27.9967 7.58621Z\" fill=\"#706F6E\"></path> <path d=\"M28.0766 6.58549C28.1366 6.64544 28.1765 6.6854 28.2365 6.74535C28.1166 6.88524 27.9167 7.10506 27.7968 6.94519C27.597 6.6854 27.9767 6.70539 28.0766 6.58549Z\" fill=\"#575654\"></path> <path d=\"M19.244 6.44515C19.244 6.54506 19.184 6.60501 19.0641 6.56504C18.9842 6.54506 18.9043 6.52508 18.8243 6.50509C18.8843 6.44514 18.9442 6.36521 19.0242 6.32524C19.1241 6.28528 19.224 6.32525 19.244 6.44515Z\" fill=\"#575755\"></path> <path d=\"M27.9967 5.80484C28.1565 5.84481 28.3364 5.76487 28.4763 5.92474C28.2365 6.12457 28.0167 6.00467 27.7769 5.92474C27.8568 5.88477 27.9167 5.84481 27.9967 5.80484Z\" fill=\"#E8E5E2\"></path> <path d=\"M21.9417 11.3492C21.9417 11.4092 21.9417 11.4691 21.9417 11.5091C21.7619 11.5291 21.642 11.4292 21.5021 11.3293C21.6619 11.1494 21.8018 11.2094 21.9417 11.3492Z\" fill=\"#62605F\"></path> <path d=\"M21.1824 9.72811C21.1024 9.62802 21.0225 9.52794 20.9226 9.42786C20.9226 9.26772 21.0225 9.18766 21.1424 9.26772C21.3222 9.38782 21.2223 9.56797 21.1824 9.72811Z\" fill=\"#3B3937\"></path> <path d=\"M27.4571 38.7923C28.856 38.8524 29.7752 39.9533 29.6952 41.4946C29.6353 42.8757 28.796 43.7565 27.597 43.7164C26.1582 43.6764 25.2789 42.6155 25.3389 40.9541C25.3988 39.613 26.2381 38.7323 27.4571 38.7923Z\" fill=\"#776763\"></path> <path d=\"M27.637 15.593C27.6969 15.593 27.7369 15.593 27.7968 15.593C27.8968 15.4929 27.9967 15.5129 28.0766 15.593C28.2964 15.7932 28.5362 15.9533 28.836 16.0133C29.4355 16.1334 29.8351 16.4937 30.055 17.0542C30.2748 17.5546 30.1749 18.1151 30.3547 18.6155C30.3747 19.236 30.6345 19.7565 30.8743 20.3369C30.4147 20.2569 30.3147 19.7765 30.035 19.4962C29.9351 19.4162 29.8551 19.3361 29.8351 19.216C29.7352 19.3561 29.8551 19.5163 29.7752 19.6564C29.7552 19.6964 29.7352 19.7565 29.7152 19.7965C29.6353 19.8766 29.5554 19.8966 29.4754 19.7965C29.1757 19.196 28.6761 19.5363 28.2365 19.4962C28.2565 19.3361 28.1765 19.156 28.3764 19.0359C28.9559 18.6756 28.9159 18.3153 28.3364 17.9149C27.9367 17.6347 27.4172 17.8949 27.0575 17.5346C27.0774 17.5146 27.0974 17.4746 27.0974 17.4545C27.3172 17.2544 27.4371 16.9942 27.4371 16.6939C27.4571 16.5338 27.4172 16.3937 27.3572 16.2535C27.3172 16.1735 27.2973 16.0734 27.2773 15.9933C27.2973 15.7731 27.4571 15.6731 27.637 15.593Z\" fill=\"#201B17\"></path> <path d=\"M28.0766 15.593C27.9767 15.593 27.8768 15.593 27.7968 15.593C27.8768 15.0926 27.637 14.7923 27.1774 14.6322C27.1574 14.6322 27.1973 14.452 27.1973 14.372C27.4571 14.2118 27.617 14.372 27.7968 14.5321C28.1965 14.7923 27.9967 15.2327 28.0766 15.593Z\" fill=\"#241F1C\"></path> <path d=\"M27.7968 14.5321C27.597 14.4721 27.3972 14.432 27.1973 14.372C27.2972 13.6113 27.6969 13.9316 28.0766 14.1318C28.1565 14.412 27.7968 14.2319 27.7968 14.432C27.7968 14.452 27.7968 14.4921 27.7968 14.5321Z\" fill=\"#E4E3E2\"></path> <path d=\"M29.4155 14.5121C29.2956 14.352 29.1757 14.1918 29.0358 14.0317C29.0958 13.9516 29.1757 13.8716 29.2756 13.8515C29.4754 13.8115 29.6153 13.8916 29.6953 14.0717C29.7152 14.1718 29.7552 14.2319 29.8551 14.2319C29.8351 14.5121 29.6553 14.5521 29.4155 14.5121Z\" fill=\"#979594\"></path> <path d=\"M27.7968 14.4115C27.6769 14.1117 28.0566 14.2916 28.0766 14.1117C28.3564 13.9718 28.3764 14.3115 28.5362 14.3515C28.2764 14.3715 28.0366 14.3915 27.7968 14.4115Z\" fill=\"#363432\"></path> <path d=\"M31.254 13.9316C31.3139 13.8716 31.3539 13.8315 31.4138 13.7715C31.5937 13.9116 31.5737 14.1118 31.6336 14.352C31.3139 14.3319 31.214 14.1918 31.254 13.9316Z\" fill=\"#5E5D5C\"></path> <path d=\"M30.4546 14.2118C30.5146 14.2719 30.5745 14.3319 30.6145 14.392C30.5745 14.5721 30.4746 14.6922 30.2548 14.7723C30.2148 14.5321 30.3347 14.372 30.4546 14.2118Z\" fill=\"#5F5E5D\"></path> <path d=\"M13.1091 39.553C13.4688 40.4537 13.7685 41.1743 14.0683 41.8749C14.0883 41.9349 14.1082 42.015 14.1282 42.1151C13.4488 42.1151 12.7893 42.1151 12.05 42.1151C12.3897 41.3144 12.7094 40.5138 13.1091 39.553Z\" fill=\"#776763\"></path> <path d=\"M31.6536 19.6364C31.5737 19.6764 31.4738 19.7364 31.3938 19.7765C31.4338 19.256 31.2739 18.6355 32.0733 18.5555C32.2132 18.5354 32.393 18.5354 32.413 18.7356C32.433 18.8957 32.2931 18.9558 32.1732 18.9558C31.7336 18.9958 31.6736 19.2961 31.6536 19.6364Z\" fill=\"#EBEAE8\"></path> <path d=\"M31.5537 16.0334C31.7935 16.0334 32.0333 16.1134 31.9933 16.2736C31.8934 16.6339 31.4338 16.5738 31.194 16.814C31.1141 16.8941 30.9542 16.754 30.9542 16.6138C30.9942 16.2535 31.254 16.0934 31.5537 16.0334Z\" fill=\"#EEEEEC\"></path> <path d=\"M31.9534 19.4762C31.9334 19.6564 31.9134 19.8365 31.9134 20.0167C31.7735 19.9967 31.7535 19.8766 31.7136 19.7565C31.8135 19.6764 31.7935 19.4962 31.9534 19.4762Z\" fill=\"#605F5D\"></path> <path d=\"M29.7152 14.0717C29.5554 14.0317 29.4155 13.8916 29.2356 13.9716C28.8959 13.7114 29.1157 13.5513 29.3156 13.3711C29.3555 13.3711 29.3955 13.3511 29.4155 13.3511C29.9151 13.4312 29.6953 13.7915 29.7152 14.0717Z\" fill=\"#D1CFCE\"></path> <path d=\"M28.9759 13.6113C28.3364 13.4712 29.0958 13.3111 28.9759 13.151C29.0758 13.1109 29.1757 13.0509 29.2756 13.0108C29.4355 12.9508 29.5754 12.8707 29.5754 13.151C29.4954 13.191 29.4155 13.211 29.4355 13.3311V13.3111C29.2756 13.4312 29.1557 13.5513 28.9759 13.6113Z\" fill=\"#E9E7E5\"></path> <path d=\"M29.5754 13.1705C29.5154 13.0306 29.3755 13.0506 29.2756 13.0306C29.4954 12.8308 29.7352 12.8308 30.015 12.9507C29.9151 13.1505 29.7352 13.1505 29.5754 13.1705Z\" fill=\"#C3BFBC\"></path> <path d=\"M33.1324 25.181C32.9925 25.3411 32.8526 25.4812 32.7127 25.6414C32.6728 25.6013 32.6328 25.5413 32.5729 25.5012C32.5129 25.4212 32.8526 25.221 32.5129 25.221C32.3131 25.221 32.1332 25.3211 31.9334 25.3411C31.134 25.3811 30.9142 25.0409 31.154 24.2402C31.3539 24.9208 31.7136 25.181 32.1932 24.9808C32.4929 24.8407 32.6528 24.6005 32.6927 24.2802C32.7527 23.9199 32.5129 23.7598 32.2331 23.5997C31.6736 23.2794 31.6736 23.2794 31.5737 22.759C32.373 23.3795 33.7719 23.6397 33.1324 25.181Z\" fill=\"#282421\"></path> <path d=\"M29.4555 19.7765C29.5354 19.7765 29.6153 19.7765 29.6953 19.7765C29.7752 20.8374 30.7744 20.7773 31.5137 21.1176C31.214 21.3378 31.0341 21.1176 30.8343 21.1176C29.5154 21.0776 29.5154 21.0575 29.4555 19.7765Z\" fill=\"#332F2C\"></path> <path d=\"M31.0541 22.5188C30.7544 22.5388 30.5945 21.8582 30.3147 22.4787C30.2948 22.5388 29.955 22.3987 29.8351 22.2185C29.6953 21.9983 29.8551 21.8382 30.015 21.7181C30.2548 21.5179 30.5346 21.5379 30.7943 21.658C31.1141 21.8382 31.1141 22.1585 31.0541 22.5188Z\" fill=\"#2D2926\"></path> <path d=\"M29.1757 23.9199C29.5754 23.7798 29.995 23.7598 30.2548 23.3394C30.3947 23.1193 30.6744 23.2394 30.7943 23.4796C30.9342 23.6997 30.7544 23.7598 30.5945 23.9199C30.1149 24.4203 29.6553 23.8399 29.1757 23.9199Z\" fill=\"#312D2B\"></path> <path d=\"M33.0125 21.4379C33.1324 21.578 33.2323 21.7181 33.3522 21.8582C33.4321 22.0584 33.4521 22.1985 33.1724 22.1985C32.7327 21.8182 32.2531 21.8582 31.7735 22.1785C31.9734 21.7581 32.3331 21.5379 32.7327 21.4178C32.8127 21.3978 32.9126 21.3778 33.0125 21.4379Z\" fill=\"#292726\"></path> <path d=\"M29.1357 21.4379C28.836 21.3778 28.5762 21.3378 28.2165 21.2777C28.6162 20.9575 29.0158 20.6972 28.776 19.9766C29.1157 20.4771 29.1157 20.4771 29.1357 21.4379Z\" fill=\"#363330\"></path> <path d=\"M29.7552 19.6364C29.5754 19.3361 29.5554 19.0559 29.8551 18.7356C29.9151 19.0158 29.975 19.236 30.015 19.4762C29.9351 19.5363 29.8551 19.5963 29.7552 19.6364Z\" fill=\"#D0CDCB\"></path> <path d=\"M25.1391 20.8171C25.1391 20.7572 25.1191 20.7172 25.0791 20.6972C25.4188 20.6772 25.7386 20.7172 26.0783 20.6772C25.7985 20.937 25.4588 20.8371 25.1391 20.8171Z\" fill=\"#373635\"></path> <path d=\"M33.1524 22.1985C33.3122 22.1384 33.3122 21.9983 33.3322 21.8582C33.572 22.1585 33.4921 22.4387 33.2323 22.7389C33.2123 22.5388 33.1724 22.3786 33.1524 22.1985Z\" fill=\"#454342\"></path> <path d=\"M33.0125 21.4379C32.9126 21.4579 32.8127 21.598 32.7327 21.4178C32.7527 21.2777 32.6928 21.0575 32.8127 21.0575C32.9725 21.0575 33.0125 21.2777 33.0125 21.4379Z\" fill=\"#34302D\"></path> <path d=\"M23.6003 12.1301C23.9001 11.5496 24.3397 11.0492 24.7594 10.5688C25.0991 10.2686 25.3189 10.3486 25.4388 10.769C25.5587 11.2294 25.5187 11.7498 25.8185 12.1701C25.8984 12.2902 25.8584 12.5104 25.6386 12.4704C24.9792 12.3303 25.3788 12.7907 25.3189 12.9908C25.3389 13.171 25.2989 13.3111 25.179 13.4312C25.159 13.4512 25.1191 13.4712 25.0991 13.4912C24.6994 13.2911 24.2198 13.3511 23.8801 13.0509C23.7202 12.9708 23.6203 12.8107 23.5604 12.6305C23.5004 12.4704 23.4604 12.2902 23.6003 12.1301Z\" fill=\"#F9F9F9\"></path> <path d=\"M23.6003 12.1301C23.6403 12.2902 23.7002 12.4504 23.7402 12.6105C23.6203 12.8107 23.7002 12.9908 23.7602 13.191C23.9201 13.5113 24.2997 13.4912 24.5395 13.6714C24.7194 13.8115 24.7594 14.0317 24.5995 14.1718C24.3197 14.392 24.3397 14.0117 24.1998 13.9316C24.1199 13.9116 24.04 13.8115 23.96 13.8916C23.94 13.9116 24.02 14.0117 24.04 14.0717C24.1998 14.3319 24.3197 14.6522 23.9001 14.6722C23.6003 14.6922 23.1007 14.7123 23.0208 14.2519C22.9209 13.6714 22.9209 13.0909 23.2806 12.5705C23.3006 12.3503 23.4005 12.2102 23.6003 12.1301Z\" fill=\"#EFEEED\"></path> <path d=\"M25.7985 13.5313C25.9184 13.8515 26.0583 14.1918 25.8385 14.5321C25.9584 14.7323 25.9184 14.9324 25.8385 15.1526C25.4388 15.593 25.9584 15.9333 25.9784 16.3336C25.8984 16.4737 25.9784 16.7339 25.6786 16.6939C25.159 15.8132 24.9792 14.8724 25.219 13.8515C25.239 13.7515 25.1391 13.6314 25.0991 13.5113H25.0791C25.3389 13.251 25.5787 13.3912 25.7985 13.5313Z\" fill=\"#F3F2F2\"></path> <path d=\"M25.6786 16.6739C25.8784 16.6539 25.8585 16.4137 25.9784 16.3136C26.0183 16.3736 26.0783 16.4337 26.1182 16.4937C26.2581 16.9942 26.8177 17.1343 27.0375 17.5546V17.5346C26.4979 17.6547 26.0383 17.4345 25.5587 17.2544C25.4188 17.2744 25.4988 17.4946 25.3589 17.5146C25.179 17.2944 25.3389 17.0142 25.259 16.774C25.3988 16.7339 25.5387 16.6939 25.6786 16.6739Z\" fill=\"#322D2A\"></path> <path d=\"M22.6811 15.5129C22.6012 14.9525 22.4813 14.5121 21.9017 14.3119C22.3813 14.0317 22.6012 14.2719 22.781 14.5321C22.9609 14.7923 23.1807 15.1126 22.6811 15.5129Z\" fill=\"#E9E7E5\"></path> <path d=\"M23.2806 16.3736C23.2207 16.1935 23.1207 15.9933 23.4605 15.9933C23.7003 15.9933 23.9201 16.1935 23.8401 16.3536C23.7002 16.5938 23.8601 17.0542 23.5204 17.0542C23.1807 17.0542 23.2806 16.6539 23.2806 16.3736Z\" fill=\"#F0F0EE\"></path> <path d=\"M24.04 14.071C23.8601 13.9911 23.6203 14.0111 23.4804 13.7313C23.8002 13.5914 24.02 13.6314 24.1798 13.9311C24.1399 13.9911 24.0999 14.0311 24.04 14.071Z\" fill=\"#5C5B59\"></path> <path d=\"M20.6028 14.2314C20.5229 14.1514 20.463 14.0715 20.383 13.9916C20.5429 13.8517 20.7427 14.0315 20.9026 13.9516C20.8027 14.0515 20.7027 14.1314 20.6028 14.2314Z\" fill=\"#63615E\"></path> <path d=\"M23.7402 13.191C23.5404 13.0108 23.4205 12.8107 23.7202 12.6105C23.7602 12.7506 23.8201 12.8907 23.8601 13.0509C23.8201 13.0909 23.7802 13.1309 23.7402 13.191Z\" fill=\"#3D3836\"></path> <path d=\"M25.9983 18.1351C26.2381 18.1351 26.4779 18.1351 26.6978 18.1351C26.6978 18.1751 26.7177 18.235 26.7177 18.275C26.4779 18.315 26.2381 18.3549 25.9983 18.4149C25.9983 18.3349 25.9983 18.235 25.9983 18.1351Z\" fill=\"#2F2C2A\"></path> <path d=\"M20.9226 15.7331C21.0025 15.7331 21.0824 15.7331 21.1624 15.7331C21.1624 15.9733 21.1624 16.1935 21.1624 16.4337C21.0624 16.2135 20.8626 16.0133 20.9226 15.7331Z\" fill=\"#52504E\"></path> <path d=\"M25.3389 17.5141C25.4788 17.4941 25.239 17.1544 25.5387 17.2543C25.5387 17.3942 25.5187 17.5341 25.5187 17.674C25.3988 17.694 25.3589 17.634 25.3389 17.5141Z\" fill=\"#201B17\"></path> <path d=\"M27.9567 18.3351C27.7169 18.435 27.4971 18.5349 27.2573 18.6548C27.3572 18.2351 27.577 18.0753 27.9567 18.3351Z\" fill=\"#373432\"></path> <path d=\"M27.0375 17.5546C27.0375 17.4345 26.9575 17.3745 26.8576 17.3745C26.1782 17.4345 26.0183 17.0742 26.1182 16.4937C26.2581 16.3937 26.1782 16.1134 26.438 16.0934C26.5978 16.1935 26.7977 16.2135 26.9775 16.2135C27.2773 16.2335 27.4571 16.4337 27.637 16.6539C27.577 17.0542 27.6769 17.5546 27.0375 17.5546Z\" fill=\"#EDEDEC\"></path> <path d=\"M25.8385 15.1326C25.6586 14.9324 25.6986 14.7123 25.8385 14.5121C26.1982 14.352 26.1982 14.352 26.4779 13.8115C26.7777 14.5521 26.3181 14.8524 25.8385 15.1326Z\" fill=\"#D4D2D0\"></path> <path d=\"M27.637 15.593C27.5371 15.7331 27.4371 15.8532 27.3372 15.9933C27.1374 16.1735 27.0175 16.0334 26.8776 15.8932C26.9775 15.573 26.8976 15.2127 27.1574 14.8724C27.2373 15.1927 27.4172 15.4128 27.637 15.593Z\" fill=\"#241F1C\"></path> <path d=\"M26.8776 15.8732C27.0375 15.9133 27.1774 15.9533 27.3372 15.9733C27.3772 16.0334 27.4371 16.0934 27.4771 16.1735C27.3372 16.4137 27.0575 16.1535 26.8776 16.3336C26.5978 16.4737 26.438 16.4137 26.418 16.0734C26.5779 16.0133 26.7377 15.9533 26.8776 15.8732Z\" fill=\"#CAC8C6\"></path> <path d=\"M25.7985 13.5313C25.5587 13.5113 25.3189 13.5113 25.0791 13.4912C25.0591 13.2711 25.199 13.1309 25.3189 12.9908C25.4188 13.231 25.7585 13.251 25.7985 13.5313Z\" fill=\"#6A6969\"></path> <path d=\"M28.9759 13.6113C29.0958 13.4512 29.2157 13.3111 29.4355 13.3111C29.4355 13.5513 28.796 13.5913 29.2356 13.9716C29.1757 13.9917 29.1157 14.0117 29.0358 14.0317C29.0158 13.8916 28.9958 13.7515 28.9759 13.6113Z\" fill=\"#2A2827\"></path> <path d=\"M26.8776 16.3336C27.0175 16.0734 27.2973 16.3136 27.4771 16.1735C27.5371 16.3336 27.6969 16.4537 27.617 16.6539C27.3772 16.5538 27.1374 16.4537 26.8776 16.3336Z\" fill=\"#696867\"></path>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=d956a770&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Logo.vue

var script = {}


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "2b94f692"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map