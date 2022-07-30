"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_pages_admin_user_add_index_js"],{

/***/ "./resources/js/src/api/client.js":
/*!****************************************!*\
  !*** ./resources/js/src/api/client.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "formatPropValueToString": () => (/* binding */ formatPropValueToString),
/* harmony export */   "handlingErrors": () => (/* binding */ handlingErrors)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/notification */ "./resources/js/src/components/notification/index.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data */ "./resources/js/src/data/index.js");
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/constant */ "./resources/js/src/utilities/constant.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// axios instance and handler error




var HTTP_CLIENT = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: _utilities_constant__WEBPACK_IMPORTED_MODULE_3__.API_URL,
  timeout: 10000
});
HTTP_CLIENT.interceptors.request.use(function (config) {
  var _handlerData$data;

  var handlerData = _data__WEBPACK_IMPORTED_MODULE_2__["default"].GET(_utilities_constant__WEBPACK_IMPORTED_MODULE_3__.USER_SESSION, 'object');
  var user = (_handlerData$data = handlerData === null || handlerData === void 0 ? void 0 : handlerData.data) !== null && _handlerData$data !== void 0 ? _handlerData$data : null;

  if (user !== null && user !== void 0 && user.token) {
    config.headers.authorization = "".concat(_utilities_constant__WEBPACK_IMPORTED_MODULE_3__.TOKEN_TYPE, " ").concat(user === null || user === void 0 ? void 0 : user.token);
  }

  return config;
}, function (error) {
  return Promise.reject(error);
});
HTTP_CLIENT.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  var response = error.response;

  if (response && response.status === 401) {
    _data__WEBPACK_IMPORTED_MODULE_2__["default"].REMOVE(_utilities_constant__WEBPACK_IMPORTED_MODULE_3__.USER_SESSION);
    (0,_components_notification__WEBPACK_IMPORTED_MODULE_1__.basicNotif)("Session expirée, Veuillez vous reconnecter.");
    location.replace('/login');
  }

  return Promise.reject(error);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HTTP_CLIENT);
var handlingErrors = function handlingErrors(error) {
  var _error$message;

  if (error.response) {
    var dataResponse = error.response.data;
    var message = dataResponse === null || dataResponse === void 0 ? void 0 : dataResponse.errors;

    if (dataResponse) {
      var errors = dataResponse === null || dataResponse === void 0 ? void 0 : dataResponse.errors;
      return errors;
    }

    return message;
  } else if (error.request) {// The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    // console.log(error.request);
  }

  return (_error$message = error === null || error === void 0 ? void 0 : error.message) !== null && _error$message !== void 0 ? _error$message : 'Oops !! Léger souci.';
};
var formatPropValueToString = function formatPropValueToString(error) {
  var objectMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  try {
    var _message = _objectSpread({}, objectMessage);

    for (var key in error) {
      if (error.hasOwnProperty(key)) {
        var _error$key;

        _message[key] = (_error$key = error[key]) === null || _error$key === void 0 ? void 0 : _error$key.toString();
      }
    }

    return _message;
  } catch (error) {
    return objectMessage;
  }
};

/***/ }),

/***/ "./resources/js/src/api/request.js":
/*!*****************************************!*\
  !*** ./resources/js/src/api/request.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "signinUsers": () => (/* binding */ signinUsers)
/* harmony export */ });
/* harmony import */ var _client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client */ "./resources/js/src/api/client.js");
// requeste and dispatch to redux

var FILE_HEADERS = {
  headers: {
    "Content-Type": "multipart/form-data"
  }
};
var signinUsers = function signinUsers(params) {
  return new Promise(function (resolve, reject) {
    _client__WEBPACK_IMPORTED_MODULE_0__["default"].post("signin", params).then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      var message = (0,_client__WEBPACK_IMPORTED_MODULE_0__.handlingErrors)(error);
      reject(message);
    });
  });
};

/***/ }),

/***/ "./resources/js/src/components/notification/ToastContent.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/components/notification/ToastContent.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





var ToastContent = function ToastContent(props) {
  var message = props.message;
  var title = props.title;
  var Icon = props.icon;
  var status = props.status;
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "toastify-header",
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "title-wrapper d-flex align-items-center",
        children: [Icon ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          color: status,
          className: "rounded-circle d-flex justify-content-center align-items-center ",
          children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Icon, {})
        }) : null, /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h6", {
          className: "toast-title font-weight-bold",
          children: title
        })]
      })
    }), message ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "toastify-body",
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
        className: "font-weight-light",
        children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("small", {
          children: message
        })
      })
    }) : null]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastContent);

/***/ }),

/***/ "./resources/js/src/components/notification/index.js":
/*!***********************************************************!*\
  !*** ./resources/js/src/components/notification/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "basicNotif": () => (/* binding */ basicNotif),
/* harmony export */   "errorNotif": () => (/* binding */ errorNotif),
/* harmony export */   "infoNotif": () => (/* binding */ infoNotif),
/* harmony export */   "successNotif": () => (/* binding */ successNotif),
/* harmony export */   "warningNotif": () => (/* binding */ warningNotif)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify/dist/ReactToastify.css'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _ToastContent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToastContent */ "./resources/js/src/components/notification/ToastContent.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-feather'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());




 // toast.configure();


var basicNotif = function basicNotif(title, message) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "secondary";
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ToastContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    message: message // icon={() => <Bell size={20} />}
    ,
    status: status
  }), {
    transition: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    hideProgressBar: true,
    autoClose: 5000,
    closeButton: true
  });
};
var successNotif = function successNotif(title, message) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "success";
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ToastContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    message: message // icon={() => <Check size={20} />}
    ,
    status: status
  }), {
    transition: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    hideProgressBar: true,
    autoClose: 5000,
    closeButton: true
  });
};
var errorNotif = function errorNotif(title, message) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "danger";
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ToastContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    message: message // icon={() => <Minus size={20} />}
    ,
    status: status
  }), {
    transition: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    hideProgressBar: true,
    autoClose: 5000,
    closeButton: true
  });
};
var warningNotif = function warningNotif(title, message) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "warning";
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ToastContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    message: message // icon={() => <AlertCircle size={20} />}
    ,
    status: status
  }), {
    transition: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    hideProgressBar: true,
    autoClose: 5000,
    closeButton: true
  });
};
var infoNotif = function infoNotif(title, message) {
  var status = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "primary";
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_ToastContent__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    message: message // icon={() => <Info size={20} />}
    ,
    status: status
  }), {
    transition: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-toastify'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    hideProgressBar: true,
    autoClose: 5000,
    closeButton: true
  });
};

/***/ }),

/***/ "./resources/js/src/pages/admin/user/add/index.js":
/*!********************************************************!*\
  !*** ./resources/js/src/pages/admin/user/add/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-hook-form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../api/client */ "./resources/js/src/api/client.js");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../api/request */ "./resources/js/src/api/request.js");
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/notification */ "./resources/js/src/components/notification/index.js");
/* harmony import */ var _layouts_components_page_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../layouts/components/page-header */ "./resources/js/src/layouts/components/page-header/index.js");
/* harmony import */ var _components_FormUser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/FormUser */ "./resources/js/src/pages/admin/user/components/FormUser.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }














var AddUser = function AddUser() {
  var navigate = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    uuid: "",
    lastname: "",
    firstname: "",
    genre: "",
    email: "",
    role: "",
    avatar: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formProfile = _useState2[0],
      setFormProfile = _useState2[1];

  var _useState3 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    lastname: "",
    firstname: "",
    genre: "",
    email: "",
    role: "",
    avatar: ""
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errorFormProfile = _useState4[0],
      setErrorFormProfile = _useState4[1];

  var _useState5 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(''),
      _useState8 = _slicedToArray(_useState7, 2),
      message = _useState8[0],
      setMessage = _useState8[1];

  var onSave = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(modelData) {
      var _modelData$uuid, _modelData$lastname, _modelData$firstname, _modelData$genre, _modelData$email, _modelData$role, _modelData$adresse, _modelData$direction, _modelData$service, _modelData$fonction, _modelData$telephone, _modelData$avatar;

      var params, _message, _errorForm;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = {
                uuid: (_modelData$uuid = modelData === null || modelData === void 0 ? void 0 : modelData.uuid) !== null && _modelData$uuid !== void 0 ? _modelData$uuid : "",
                lastname: (_modelData$lastname = modelData === null || modelData === void 0 ? void 0 : modelData.lastname) !== null && _modelData$lastname !== void 0 ? _modelData$lastname : "",
                firstname: (_modelData$firstname = modelData === null || modelData === void 0 ? void 0 : modelData.firstname) !== null && _modelData$firstname !== void 0 ? _modelData$firstname : "",
                genre: (_modelData$genre = modelData === null || modelData === void 0 ? void 0 : modelData.genre) !== null && _modelData$genre !== void 0 ? _modelData$genre : "None",
                email: (_modelData$email = modelData === null || modelData === void 0 ? void 0 : modelData.email) !== null && _modelData$email !== void 0 ? _modelData$email : "",
                role: (_modelData$role = modelData === null || modelData === void 0 ? void 0 : modelData.role) !== null && _modelData$role !== void 0 ? _modelData$role : "",
                adresse: (_modelData$adresse = modelData === null || modelData === void 0 ? void 0 : modelData.adresse) !== null && _modelData$adresse !== void 0 ? _modelData$adresse : '',
                direction: (_modelData$direction = modelData === null || modelData === void 0 ? void 0 : modelData.direction) !== null && _modelData$direction !== void 0 ? _modelData$direction : '',
                service: (_modelData$service = modelData === null || modelData === void 0 ? void 0 : modelData.service) !== null && _modelData$service !== void 0 ? _modelData$service : '',
                fonction: (_modelData$fonction = modelData === null || modelData === void 0 ? void 0 : modelData.fonction) !== null && _modelData$fonction !== void 0 ? _modelData$fonction : '',
                telephone: (_modelData$telephone = modelData === null || modelData === void 0 ? void 0 : modelData.telephone) !== null && _modelData$telephone !== void 0 ? _modelData$telephone : '',
                avatar: modelData !== null && modelData !== void 0 && (_modelData$avatar = modelData.avatar) !== null && _modelData$avatar !== void 0 && _modelData$avatar.preview ? modelData.avatar : null
              };
              setFormProfile(params);
              _context.prev = 2;
              setIsLoading(true);
              _context.next = 6;
              return (0,_api_request__WEBPACK_IMPORTED_MODULE_2__.addUsers)(params);

            case 6:
              (0,_components_notification__WEBPACK_IMPORTED_MODULE_3__.successNotif)('Notification', "L'utilisateur ".concat(modelData === null || modelData === void 0 ? void 0 : modelData.lastname, " ").concat(modelData === null || modelData === void 0 ? void 0 : modelData.firstname, " a \xE9t\xE9 enregistr\xE9 avec succ\xE8s.")); // navigate('/handlers/users/show', {state: {uuid: ''});

              navigate('/handlers/account-admins');
              _context.next = 18;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](2);
              setIsLoading(false);
              _message = '';
              _errorForm = {
                lastname: "",
                firstname: "",
                genre: "",
                email: "",
                role: "",
                avatar: ""
              };

              if (_typeof(_context.t0) === 'object') {
                _errorForm = (0,_api_client__WEBPACK_IMPORTED_MODULE_1__.formatPropValueToString)(_context.t0, _errorForm);
              } else {
                _message = _context.t0;
                (0,_components_notification__WEBPACK_IMPORTED_MODULE_3__.errorNotif)('Avertissement', _message);
              }

              setMessage(_message);
              setErrorFormProfile(_errorForm);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 10]]);
    }));

    return function onSave(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_layouts_components_page_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
      title: 'Nouveau utilisateur',
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        variant: "dark",
        size: "md",
        onClick: function onClick() {
          return navigate('/handlers/account-admins');
        },
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
          className: "zmdi zmdi-accounts-list-alt"
        }), ' ', "Liste des utilisateurs"]
      })
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_FormUser__WEBPACK_IMPORTED_MODULE_5__["default"], {
      userModel: formProfile,
      errorUserModel: errorFormProfile,
      isLoading: isLoading,
      onSubmitAction: onSave
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AddUser);

/***/ }),

/***/ "./resources/js/src/pages/admin/user/components/FormUser.js":
/*!******************************************************************!*\
  !*** ./resources/js/src/pages/admin/user/components/FormUser.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-hook-form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cleave.js/dist/addons/cleave-phone.bf'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cleave.js/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/drop-file-image'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











var FormUser = function FormUser(_ref) {
  var _formProfile$lastname, _errors$lastname, _formProfile$firstnam, _errors$firstname, _formProfile$telephon, _errors$telephone, _formProfile$genre, _errors$genre, _formProfile$adresse, _errors$adresse, _formProfile$directio, _errors$direction, _formProfile$fonction, _errors$fonction, _formProfile$service, _errors$service, _formProfile$email, _errors$email, _formProfile$role, _errors$role;

  var userModel = _ref.userModel,
      errorUserModel = _ref.errorUserModel,
      isLoading = _ref.isLoading,
      onSubmitAction = _ref.onSubmitAction;

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    uuid: '',
    lastname: '',
    firstname: '',
    genre: '',
    email: '',
    role: '',
    adresse: '',
    direction: '',
    service: '',
    fonction: '',
    telephone: '',
    avatar: {}
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formProfile = _useState2[0],
      setFormProfile = _useState2[1];

  var _useState3 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    lastname: '',
    firstname: '',
    genre: '',
    email: '',
    role: '',
    adresse: '',
    direction: '',
    service: '',
    fonction: '',
    telephone: '',
    avatar: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errorFormProfile = _useState4[0],
      setErrorFormProfile = _useState4[1];

  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    if (userModel) {
      var _ref2, _userModel$uuid, _ref3, _userModel$lastname, _ref4, _userModel$firstname, _ref5, _userModel$genre, _ref6, _userModel$email, _ref7, _userModel$role, _ref8, _userModel$adresse, _ref9, _userModel$direction, _ref10, _userModel$service, _ref11, _userModel$fonction, _ref12, _userModel$telephone, _ref13, _userModel$avatar;

      setFormProfile({
        uuid: (_ref2 = (_userModel$uuid = userModel === null || userModel === void 0 ? void 0 : userModel.uuid) !== null && _userModel$uuid !== void 0 ? _userModel$uuid : formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid) !== null && _ref2 !== void 0 ? _ref2 : '',
        lastname: (_ref3 = (_userModel$lastname = userModel === null || userModel === void 0 ? void 0 : userModel.lastname) !== null && _userModel$lastname !== void 0 ? _userModel$lastname : formProfile === null || formProfile === void 0 ? void 0 : formProfile.lastname) !== null && _ref3 !== void 0 ? _ref3 : '',
        firstname: (_ref4 = (_userModel$firstname = userModel === null || userModel === void 0 ? void 0 : userModel.firstname) !== null && _userModel$firstname !== void 0 ? _userModel$firstname : formProfile === null || formProfile === void 0 ? void 0 : formProfile.firstname) !== null && _ref4 !== void 0 ? _ref4 : '',
        genre: (_ref5 = (_userModel$genre = userModel === null || userModel === void 0 ? void 0 : userModel.genre) !== null && _userModel$genre !== void 0 ? _userModel$genre : formProfile === null || formProfile === void 0 ? void 0 : formProfile.genre) !== null && _ref5 !== void 0 ? _ref5 : '',
        email: (_ref6 = (_userModel$email = userModel === null || userModel === void 0 ? void 0 : userModel.email) !== null && _userModel$email !== void 0 ? _userModel$email : formProfile === null || formProfile === void 0 ? void 0 : formProfile.email) !== null && _ref6 !== void 0 ? _ref6 : '',
        role: (_ref7 = (_userModel$role = userModel === null || userModel === void 0 ? void 0 : userModel.role) !== null && _userModel$role !== void 0 ? _userModel$role : formProfile === null || formProfile === void 0 ? void 0 : formProfile.role) !== null && _ref7 !== void 0 ? _ref7 : '',
        adresse: (_ref8 = (_userModel$adresse = userModel === null || userModel === void 0 ? void 0 : userModel.adresse) !== null && _userModel$adresse !== void 0 ? _userModel$adresse : formProfile === null || formProfile === void 0 ? void 0 : formProfile.adresse) !== null && _ref8 !== void 0 ? _ref8 : '',
        direction: (_ref9 = (_userModel$direction = userModel === null || userModel === void 0 ? void 0 : userModel.direction) !== null && _userModel$direction !== void 0 ? _userModel$direction : formProfile === null || formProfile === void 0 ? void 0 : formProfile.direction) !== null && _ref9 !== void 0 ? _ref9 : '',
        service: (_ref10 = (_userModel$service = userModel === null || userModel === void 0 ? void 0 : userModel.service) !== null && _userModel$service !== void 0 ? _userModel$service : formProfile === null || formProfile === void 0 ? void 0 : formProfile.service) !== null && _ref10 !== void 0 ? _ref10 : '',
        fonction: (_ref11 = (_userModel$fonction = userModel === null || userModel === void 0 ? void 0 : userModel.fonction) !== null && _userModel$fonction !== void 0 ? _userModel$fonction : formProfile === null || formProfile === void 0 ? void 0 : formProfile.fonction) !== null && _ref11 !== void 0 ? _ref11 : '',
        telephone: (_ref12 = (_userModel$telephone = userModel === null || userModel === void 0 ? void 0 : userModel.telephone) !== null && _userModel$telephone !== void 0 ? _userModel$telephone : formProfile === null || formProfile === void 0 ? void 0 : formProfile.telephone) !== null && _ref12 !== void 0 ? _ref12 : '',
        avatar: (_ref13 = (_userModel$avatar = userModel === null || userModel === void 0 ? void 0 : userModel.avatar) !== null && _userModel$avatar !== void 0 ? _userModel$avatar : formProfile === null || formProfile === void 0 ? void 0 : formProfile.avatar) !== null && _ref13 !== void 0 ? _ref13 : {}
      });
    }
  }, [userModel]);
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    if (errorUserModel) {
      var _ref14, _errorUserModel$lastn, _ref15, _errorUserModel$first, _ref16, _errorUserModel$genre, _ref17, _errorUserModel$email, _ref18, _errorUserModel$role, _ref19, _errorUserModel$adres, _ref20, _errorUserModel$direc, _ref21, _errorUserModel$servi, _ref22, _errorUserModel$fonct, _ref23, _errorUserModel$telep, _ref24, _errorUserModel$avata;

      setErrorFormProfile({
        lastname: (_ref14 = (_errorUserModel$lastn = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.lastname) !== null && _errorUserModel$lastn !== void 0 ? _errorUserModel$lastn : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.lastname) !== null && _ref14 !== void 0 ? _ref14 : '',
        firstname: (_ref15 = (_errorUserModel$first = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.firstname) !== null && _errorUserModel$first !== void 0 ? _errorUserModel$first : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.firstname) !== null && _ref15 !== void 0 ? _ref15 : '',
        genre: (_ref16 = (_errorUserModel$genre = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.genre) !== null && _errorUserModel$genre !== void 0 ? _errorUserModel$genre : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.genre) !== null && _ref16 !== void 0 ? _ref16 : '',
        email: (_ref17 = (_errorUserModel$email = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.email) !== null && _errorUserModel$email !== void 0 ? _errorUserModel$email : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.email) !== null && _ref17 !== void 0 ? _ref17 : '',
        role: (_ref18 = (_errorUserModel$role = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.role) !== null && _errorUserModel$role !== void 0 ? _errorUserModel$role : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.role) !== null && _ref18 !== void 0 ? _ref18 : '',
        adresse: (_ref19 = (_errorUserModel$adres = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.adresse) !== null && _errorUserModel$adres !== void 0 ? _errorUserModel$adres : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.adresse) !== null && _ref19 !== void 0 ? _ref19 : '',
        direction: (_ref20 = (_errorUserModel$direc = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.direction) !== null && _errorUserModel$direc !== void 0 ? _errorUserModel$direc : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.direction) !== null && _ref20 !== void 0 ? _ref20 : '',
        service: (_ref21 = (_errorUserModel$servi = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.service) !== null && _errorUserModel$servi !== void 0 ? _errorUserModel$servi : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.service) !== null && _ref21 !== void 0 ? _ref21 : '',
        fonction: (_ref22 = (_errorUserModel$fonct = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.fonction) !== null && _errorUserModel$fonct !== void 0 ? _errorUserModel$fonct : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.fonction) !== null && _ref22 !== void 0 ? _ref22 : '',
        telephone: (_ref23 = (_errorUserModel$telep = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.telephone) !== null && _errorUserModel$telep !== void 0 ? _errorUserModel$telep : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.telephone) !== null && _ref23 !== void 0 ? _ref23 : '',
        avatar: (_ref24 = (_errorUserModel$avata = errorUserModel === null || errorUserModel === void 0 ? void 0 : errorUserModel.avatar) !== null && _errorUserModel$avata !== void 0 ? _errorUserModel$avata : errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.avatar) !== null && _ref24 !== void 0 ? _ref24 : ''
      });
    }
  }, [errorUserModel]);

  var _useForm = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-hook-form'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;

  var handlerInput = function handlerInput(e) {
    e.preventDefault();
    var target = e.target;
    var value = target === null || target === void 0 ? void 0 : target.value;
    var name = target === null || target === void 0 ? void 0 : target.name;
    setFormProfile(_objectSpread(_objectSpread({}, formProfile), {}, _defineProperty({}, name, value)));
  };

  var onSubmit = function onSubmit() {
    if (!(formProfile !== null && formProfile !== void 0 && formProfile.role)) {
      setErrorFormProfile(_objectSpread(_objectSpread({}, errorFormProfile), {}, {
        role: 'le champ role est requis.'
      }));
      return;
    }

    onSubmitAction(formProfile);
  };

  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      body: true,
      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: "Information personnel"
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "mb-2 text-muted",
        children: "Veuillez renseigner les informations personnelles de l'utilisateur concern\xE9"
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserLastname",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Nom de famille"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
              type: "text",
              name: "lastname"
            }, register('lastname', {
              required: true
            })), {}, {
              value: (_formProfile$lastname = formProfile === null || formProfile === void 0 ? void 0 : formProfile.lastname) !== null && _formProfile$lastname !== void 0 ? _formProfile$lastname : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.lastname || errors !== null && errors !== void 0 && errors.lastname ? 'is-invalid' : ''),
              placeholder: "Renseigner le nom de famille"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.lastname || errors !== null && errors !== void 0 && errors.lastname ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$lastname = errors.lastname) === null || _errors$lastname === void 0 ? void 0 : _errors$lastname.type) === 'required' && "Ce champ nom de famille est requis" || (errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.lastname)
            }) : null]
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserFirstname",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Prenom(s)"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
              type: "text",
              name: "firstname"
            }, register('firstname', {
              required: true
            })), {}, {
              value: (_formProfile$firstnam = formProfile === null || formProfile === void 0 ? void 0 : formProfile.firstname) !== null && _formProfile$firstnam !== void 0 ? _formProfile$firstnam : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.firstname || errors !== null && errors !== void 0 && errors.firstname ? 'is-invalid' : ''),
              placeholder: "Renseigner le(s) prenom(s)"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.firstname || errors !== null && errors !== void 0 && errors.firstname ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$firstname = errors.firstname) === null || _errors$firstname === void 0 ? void 0 : _errors$firstname.type) === 'required' && "Ce champ prenom(s) est requis" || errorFormProfile.firstname
            }) : null]
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserFirstname",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Num\xE9ro de t\xE9l\xE9phone"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'cleave.js/react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: Object(function webpackMissingModule() { var e = new Error("Cannot find module 'classnames'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('form-control', {
                'is-invalid': (errorFormProfile === null || errorFormProfile === void 0 ? void 0 : errorFormProfile.telephone) || (errors === null || errors === void 0 ? void 0 : errors.telephone)
              }),
              name: "telephone",
              value: (_formProfile$telephon = formProfile === null || formProfile === void 0 ? void 0 : formProfile.telephone) !== null && _formProfile$telephon !== void 0 ? _formProfile$telephon : '',
              placeholder: "Renseigner le num\xE9ro de t\xE9l\xE9phone",
              options: {
                phone: true,
                phoneRegionCode: 'BF'
              },
              onChange: handlerInput
            }), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.telephone || errors !== null && errors !== void 0 && errors.telephone ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$telephone = errors.telephone) === null || _errors$telephone === void 0 ? void 0 : _errors$telephone.type) === 'required' && "Ce champ telephone est requis" || errorFormProfile.telephone
            }) : null]
          })]
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserGenre",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Genre"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
              name: "genre",
              value: (_formProfile$genre = formProfile === null || formProfile === void 0 ? void 0 : formProfile.genre) !== null && _formProfile$genre !== void 0 ? _formProfile$genre : ''
            }, register('genre', {
              required: true
            })), {}, {
              onChange: handlerInput,
              className: "form-control ".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.genre || errors !== null && errors !== void 0 && errors.genre ? 'is-invalid' : ''),
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
                value: '',
                children: "Choisir le genre"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
                value: 'Male',
                children: "Masculin"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
                value: 'Female',
                children: "Feminin"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
                value: 'None',
                children: "Non defini"
              })]
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.genre || errors !== null && errors !== void 0 && errors.genre ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$genre = errors.genre) === null || _errors$genre === void 0 ? void 0 : _errors$genre.type) === 'required' && "Ce champ genre est requis" || errorFormProfile.genre
            }) : null]
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserFirstname",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Adresse domicili\xE9"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
              type: "text",
              name: "adresse"
            }, register('adresse', {
              required: false
            })), {}, {
              value: (_formProfile$adresse = formProfile === null || formProfile === void 0 ? void 0 : formProfile.adresse) !== null && _formProfile$adresse !== void 0 ? _formProfile$adresse : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.adresse || errors !== null && errors !== void 0 && errors.adresse ? 'is-invalid' : ''),
              placeholder: "Renseigner l'adresse domicili\xE9e"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.adresse || errors !== null && errors !== void 0 && errors.adresse ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$adresse = errors.adresse) === null || _errors$adresse === void 0 ? void 0 : _errors$adresse.type) === 'required' && "Ce champ adresse est requis" || errorFormProfile.adresse
            }) : null]
          })]
        })]
      })]
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      body: true,
      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: "Information professionnelle"
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "mb-2 text-muted",
        children: "Veuillez renseigner les informations professionnelle de l'utilisateur"
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          sm: 12,
          md: 6,
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserDirection",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Direction"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
              type: "text",
              name: "direction"
            }, register('direction', {
              required: true
            })), {}, {
              value: (_formProfile$directio = formProfile === null || formProfile === void 0 ? void 0 : formProfile.direction) !== null && _formProfile$directio !== void 0 ? _formProfile$directio : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.direction || errors !== null && errors !== void 0 && errors.direction ? 'is-invalid' : ''),
              placeholder: "Renseigner la direction"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.direction || errors !== null && errors !== void 0 && errors.direction ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$direction = errors.direction) === null || _errors$direction === void 0 ? void 0 : _errors$direction.type) === 'required' && "Ce champ direction est requis" || errorFormProfile.direction
            }) : null]
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserFonction",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Fonction"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
              type: "text",
              name: "fonction"
            }, register('fonction', {
              required: true
            })), {}, {
              value: (_formProfile$fonction = formProfile === null || formProfile === void 0 ? void 0 : formProfile.fonction) !== null && _formProfile$fonction !== void 0 ? _formProfile$fonction : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.fonction || errors !== null && errors !== void 0 && errors.fonction ? 'is-invalid' : ''),
              placeholder: "Renseigner la fonction"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.fonction || errors !== null && errors !== void 0 && errors.fonction ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$fonction = errors.fonction) === null || _errors$fonction === void 0 ? void 0 : _errors$fonction.type) === 'required' && "Ce champ fonction est requis" || errorFormProfile.fonction
            }) : null]
          })]
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          sm: 12,
          md: 6,
          children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserService",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Service"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
              type: "text",
              name: "service"
            }, register('service', {
              required: true
            })), {}, {
              value: (_formProfile$service = formProfile === null || formProfile === void 0 ? void 0 : formProfile.service) !== null && _formProfile$service !== void 0 ? _formProfile$service : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.service || errors !== null && errors !== void 0 && errors.service ? 'is-invalid' : ''),
              placeholder: "Renseigner le service"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.service || errors !== null && errors !== void 0 && errors.service ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$service = errors.service) === null || _errors$service === void 0 ? void 0 : _errors$service.type) === 'required' && "Ce champ service est requis" || errorFormProfile.service
            }) : null]
          })
        })]
      })]
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      body: true,
      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: "Information d'acc\xE8s"
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "mb-2 text-muted",
        children: "Veuillez renseigner les informations permettant \xE0 l'utilisateur de se connecter"
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          sm: 12,
          md: 6,
          children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserEmail",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Adresse mail"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
              type: "email",
              name: "email"
            }, register('email', {
              required: true
            })), {}, {
              value: (_formProfile$email = formProfile === null || formProfile === void 0 ? void 0 : formProfile.email) !== null && _formProfile$email !== void 0 ? _formProfile$email : '',
              onChange: handlerInput,
              className: "".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.email || errors !== null && errors !== void 0 && errors.email ? 'is-invalid' : ''),
              placeholder: "Renseigner l'adresse mail"
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.email || errors !== null && errors !== void 0 && errors.email ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$email = errors.email) === null || _errors$email === void 0 ? void 0 : _errors$email.type) === 'required' && "Ce champ adresse mail est requis" || errorFormProfile.email
            }) : null]
          })
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          sm: 12,
          md: 6,
          children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            className: "mb-3",
            controlId: "formUserRole",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              children: "Role"
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), _objectSpread(_objectSpread({
              name: "role",
              value: (_formProfile$role = formProfile === null || formProfile === void 0 ? void 0 : formProfile.role) !== null && _formProfile$role !== void 0 ? _formProfile$role : ''
            }, register('role', {
              required: true
            })), {}, {
              onChange: handlerInput,
              className: "form-control ".concat(errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.role || errors !== null && errors !== void 0 && errors.role ? 'is-invalid' : ''),
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
                value: '',
                children: "Choisir le role"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
                value: 'journalist',
                children: "Gestionnaire"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
                value: 'accounting',
                children: "Comptable"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
                value: 'admin',
                children: "Administrateur"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("option", {
                value: 'observer',
                children: "Consultant"
              })]
            })), errorFormProfile !== null && errorFormProfile !== void 0 && errorFormProfile.role || errors !== null && errors !== void 0 && errors.role ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
              className: "text-danger",
              children: (errors === null || errors === void 0 ? void 0 : (_errors$role = errors.role) === null || _errors$role === void 0 ? void 0 : _errors$role.type) === 'required' && "Ce champ role est requis" || errorFormProfile.role
            }) : null]
          })
        })]
      })]
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      body: true,
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        disabled: isLoading,
        variant: userModel !== null && userModel !== void 0 && userModel.uuid ? 'secondary' : 'primary',
        type: "submit",
        children: [userModel !== null && userModel !== void 0 && userModel.uuid ? 'Modifier' : 'Enregistrer', " ", /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          animation: "border",
          hidden: !isLoading,
          size: "sm"
        })]
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormUser);

/***/ })

}]);