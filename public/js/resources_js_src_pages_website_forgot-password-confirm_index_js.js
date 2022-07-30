"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_pages_website_forgot-password-confirm_index_js"],{

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

/***/ "./resources/js/src/pages/website/forgot-password-confirm/index.js":
/*!*************************************************************************!*\
  !*** ./resources/js/src/pages/website/forgot-password-confirm/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../api/client */ "./resources/js/src/api/client.js");
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/request */ "./resources/js/src/api/request.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/logo/LogoForPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/notification */ "./resources/js/src/components/notification/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var ForgotPasswordConfirmPage = function ForgotPasswordConfirmPage(props) {
  var params = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var navigate = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    token: '',
    password: '',
    cpassword: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      formPass = _useState2[0],
      setFormPass = _useState2[1];

  var _useState3 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    token: '',
    password: '',
    cpassword: ''
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      errorFormPass = _useState4[0],
      setErrorFormPass = _useState4[1];

  var _useState5 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(''),
      _useState6 = _slicedToArray(_useState5, 2),
      message = _useState6[0],
      setMessage = _useState6[1];

  var _useState7 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isLoading = _useState8[0],
      setIsLoading = _useState8[1];

  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    if (params !== null && params !== void 0 && params.token) {
      setFormPass(_objectSpread(_objectSpread({}, formPass), {}, {
        token: params.token
      }));
    } else {
      navigate('/');
    }
  }, []);

  var handlerInput = function handlerInput(e) {
    e.preventDefault();
    var target = e.target;
    var value = target === null || target === void 0 ? void 0 : target.value;
    var name = target === null || target === void 0 ? void 0 : target.name;
    setFormPass(_objectSpread(_objectSpread({}, formPass), {}, _defineProperty({}, name, value)));
  };

  var updatedPass = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var _message, _message2, _errorForm;

      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!(formPass !== null && formPass !== void 0 && formPass.password) || !formPass.cpassword)) {
                _context.next = 4;
                break;
              }

              _message = 'Ce champ est requis';
              setErrorFormPass({
                password: !formPass.password ? _message : '',
                cpassword: !formPass.cpassword ? _message : ''
              });
              return _context.abrupt("return");

            case 4:
              _context.prev = 4;
              setIsLoading(true);
              _context.next = 8;
              return (0,_api_request__WEBPACK_IMPORTED_MODULE_2__.updatedPasswordForgetted)(formPass);

            case 8:
              (0,_components_notification__WEBPACK_IMPORTED_MODULE_3__.successNotif)('Notification', 'Mot de passe modifié avec succès.');
              navigate('/login');
              _context.next = 20;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              setIsLoading(false);
              _message2 = '';
              _errorForm = {
                token: '',
                password: '',
                cpassword: ''
              };

              if (_typeof(_context.t0) === 'object') {
                _errorForm = (0,_api_client__WEBPACK_IMPORTED_MODULE_1__.formatPropValueToString)(_context.t0, _errorForm);
              } else {
                _message2 = _context.t0;
              }

              setMessage(_message2);
              setErrorFormPass(_errorForm);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 12]]);
    }));

    return function updatedPass() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "cols col-login mx-auto",
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "text-center",
        children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../components/logo/LogoForPage'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {})
      })
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
      className: "container-login100",
      children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
        className: "wrap-login100 p-6",
        children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("form", {
          className: "login100-form validate-form",
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
            className: "login100-form-title",
            children: "Mot de passe oubli\xE9"
          }), message ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
              className: "text-danger",
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("small", {
                children: message
              })
            })
          }) : null, /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            className: "mb-2",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "wrap-input100 validate-input mb-0",
              "data-validate": "Password is required",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("input", {
                className: "input100",
                type: "password",
                name: "password",
                value: formPass === null || formPass === void 0 ? void 0 : formPass.password,
                onChange: handlerInput,
                placeholder: "Nouveau mot de passe"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                className: "focus-input100"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                className: "symbol-input100",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
                    fill: "none",
                    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
                      d: "M0 0h24v24H0V0z"
                    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
                      d: "M0 0h24v24H0V0z",
                      opacity: ".87"
                    })]
                  }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
                    d: "M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z",
                    opacity: ".3"
                  }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
                    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  })]
                })
              })]
            }), errorFormPass !== null && errorFormPass !== void 0 && errorFormPass.password ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
              className: "text-danger",
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("small", {
                children: errorFormPass.password
              })
            }) : null]
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            className: "mb-2",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "wrap-input100 validate-input mb-0",
              "data-validate": "Password is required",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("input", {
                className: "input100",
                type: "password",
                name: "cpassword",
                value: formPass === null || formPass === void 0 ? void 0 : formPass.cpassword,
                onChange: handlerInput,
                placeholder: "Confirmer le nouveau mot de passe"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                className: "focus-input100"
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                className: "symbol-input100",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  height: "24",
                  viewBox: "0 0 24 24",
                  width: "24",
                  children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("g", {
                    fill: "none",
                    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
                      d: "M0 0h24v24H0V0z"
                    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
                      d: "M0 0h24v24H0V0z",
                      opacity: ".87"
                    })]
                  }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
                    d: "M6 20h12V10H6v10zm6-7c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z",
                    opacity: ".3"
                  }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("path", {
                    d: "M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
                  })]
                })
              })]
            }), errorFormPass !== null && errorFormPass !== void 0 && errorFormPass.cpassword ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
              className: "text-danger",
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("small", {
                children: errorFormPass.cpassword
              })
            }) : null]
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            className: "container-login100-form-btn",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("button", {
              type: "button",
              disabled: isLoading,
              onClick: updatedPass,
              className: "login100-form-btn btn-primary",
              children: "Envoyer"
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPasswordConfirmPage);

/***/ })

}]);