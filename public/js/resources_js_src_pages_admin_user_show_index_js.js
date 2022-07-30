"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_src_pages_admin_user_show_index_js"],{

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

/***/ "./resources/js/src/components/sweet-alert/index.js":
/*!**********************************************************!*\
  !*** ./resources/js/src/components/sweet-alert/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alertClosed": () => (/* binding */ alertClosed),
/* harmony export */   "alertConfirm": () => (/* binding */ alertConfirm),
/* harmony export */   "alertNotification": () => (/* binding */ alertNotification),
/* harmony export */   "alertPending": () => (/* binding */ alertPending),
/* harmony export */   "testAlert": () => (/* binding */ testAlert)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());


var alertPending = function alertPending() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Veuillez patienter";
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    title: "",
    html: message,
    didOpen: function didOpen() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    },
    allowOutsideClick: false
  }).then(function () {});
};
var alertNotification = function alertNotification() {
  var icon = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "info";
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var title = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "Notification";
  var confirmBtn = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "Ok";
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    title: title,
    text: message,
    icon: icon,
    allowOutsideClick: false,
    confirmButtonText: confirmBtn
  }).then(function (result) {
    if (callback) {
      callback({
        isConfirmed: result === null || result === void 0 ? void 0 : result.isConfirmed,
        isDenied: result === null || result === void 0 ? void 0 : result.isDenied
      });
    }
  });
};
var alertConfirm = function alertConfirm() {};
var testAlert = function testAlert(isLoading) {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({
    title: "",
    didOpen: function didOpen() {
      Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
    },
    allowOutsideClick: false
  }).then(function () {
    return Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())( /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
      children: "Shorthand works too"
    }));
  });
};
var alertClosed = function alertClosed() {
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'sweetalert2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
};

/***/ }),

/***/ "./resources/js/src/pages/admin/user/components/UserConfirmModal.js":
/*!**************************************************************************!*\
  !*** ./resources/js/src/pages/admin/user/components/UserConfirmModal.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());






var UserConfirmModal = function UserConfirmModal(_ref) {
  var showModal = _ref.showModal,
      handleClose = _ref.handleClose,
      confirmAction = _ref.confirmAction,
      message = _ref.message,
      title = _ref.title,
      loading = _ref.loading;
  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      show: showModal,
      onHide: handleClose,
      backdrop: "static",
      keyboard: false,
      children: [title ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        closeButton: true,
        children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          children: title
        })
      }) : null, /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: message
      }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          disabled: loading,
          variant: "secondary",
          onClick: handleClose,
          children: "Annuler"
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          variant: "success",
          disabled: loading,
          onClick: confirmAction,
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            hidden: !loading,
            size: "sm"
          }), "Proc\xE9der"]
        })]
      })]
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserConfirmModal);

/***/ }),

/***/ "./resources/js/src/pages/admin/user/show/index.js":
/*!*********************************************************!*\
  !*** ./resources/js/src/pages/admin/user/show/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _api_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../api/request */ "./resources/js/src/api/request.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_notification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/notification */ "./resources/js/src/components/notification/index.js");
/* harmony import */ var _utilities_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utilities/constant */ "./resources/js/src/utilities/constant.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _utilities_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utilities/helper */ "./resources/js/src/utilities/helper.js");
/* harmony import */ var _layouts_components_page_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../layouts/components/page-header */ "./resources/js/src/layouts/components/page-header/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_sweet_alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/sweet-alert */ "./resources/js/src/components/sweet-alert/index.js");
/* harmony import */ var _components_UserConfirmModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/UserConfirmModal */ "./resources/js/src/pages/admin/user/components/UserConfirmModal.js");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../data */ "./resources/js/src/data/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

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

















Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())('fr');

var ShowUser = function ShowUser() {
  var _HANDLER_STORAGE$GET$, _HANDLER_STORAGE$GET, _roleToShow, _formProfile$email, _formProfile$adresse, _formProfile$telephon, _formProfile$directio, _formProfile$service, _formProfile$fonction;

  var location = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
  var navigate = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-router-dom'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();

  var _useState = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())({}),
      _useState2 = _slicedToArray(_useState, 2),
      formProfile = _useState2[0],
      setFormProfile = _useState2[1];

  var _useState3 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState4 = _slicedToArray(_useState3, 2),
      showModal = _useState4[0],
      setShowModal = _useState4[1];

  var _useState5 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isLoading = _useState6[0],
      setIsLoading = _useState6[1];

  var _useState7 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState8 = _slicedToArray(_useState7, 2),
      hasGenerate = _useState8[0],
      setHasGenerate = _useState8[1];

  var _useState9 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState10 = _slicedToArray(_useState9, 2),
      hasDisabled = _useState10[0],
      setHasDisabled = _useState10[1];

  var _useState11 = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(false),
      _useState12 = _slicedToArray(_useState11, 2),
      showModalDisabled = _useState12[0],
      setShowModalDisabled = _useState12[1];

  var useConnect = (_HANDLER_STORAGE$GET$ = (_HANDLER_STORAGE$GET = _data__WEBPACK_IMPORTED_MODULE_8__["default"].GET(_utilities_constant__WEBPACK_IMPORTED_MODULE_3__.USER_SESSION, 'object')) === null || _HANDLER_STORAGE$GET === void 0 ? void 0 : _HANDLER_STORAGE$GET.data) !== null && _HANDLER_STORAGE$GET$ !== void 0 ? _HANDLER_STORAGE$GET$ : null;
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    var state = location.state;

    if (state !== null && state !== void 0 && state.uuid) {
      setFormProfile(_objectSpread(_objectSpread({}, formProfile), {}, {
        uuid: state.uuid
      }));
    } else {
      navigate(-1);
    }
  }, []);
  Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
    if (formProfile.uuid && !formProfile.lastname) {
      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetchAllUsers();

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }, [formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid, formProfile === null || formProfile === void 0 ? void 0 : formProfile.lastname]);

  var fetchAllUsers = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var _response$data$data, _response$data, response, data, _profile;

      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              (0,_components_sweet_alert__WEBPACK_IMPORTED_MODULE_6__.alertPending)();
              setIsLoading(true);
              _context2.prev = 2;
              _context2.next = 5;
              return (0,_api_request__WEBPACK_IMPORTED_MODULE_1__.fetchInfoUser)(formProfile.uuid);

            case 5:
              response = _context2.sent;
              data = (_response$data$data = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data) !== null && _response$data$data !== void 0 ? _response$data$data : null;

              if (data) {
                _profile = _objectSpread(_objectSpread({}, data), {}, {
                  avatar: !(data !== null && data !== void 0 && data.avatar) ? {} : {
                    preview: "".concat(_utilities_constant__WEBPACK_IMPORTED_MODULE_3__.API_STORAGE_URL, "/").concat(avatar)
                  }
                });
                console.log('_profile :>> ', _profile);
                setFormProfile(_profile);
              }

              (0,_components_sweet_alert__WEBPACK_IMPORTED_MODULE_6__.alertClosed)();
              setIsLoading(false);
              _context2.next = 17;
              break;

            case 12:
              _context2.prev = 12;
              _context2.t0 = _context2["catch"](2);
              (0,_components_sweet_alert__WEBPACK_IMPORTED_MODULE_6__.alertClosed)();
              setIsLoading(false);

              if (_typeof(_context2.t0) === 'object') {} else {
                (0,_components_notification__WEBPACK_IMPORTED_MODULE_2__.errorNotif)('Avertissement', _context2.t0);
              }

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[2, 12]]);
    }));

    return function fetchAllUsers() {
      return _ref2.apply(this, arguments);
    };
  }();

  var generatePass = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setHasGenerate(true);
              _context3.next = 4;
              return (0,_api_request__WEBPACK_IMPORTED_MODULE_1__.generateUserPassword)(formProfile.uuid);

            case 4:
              (0,_components_notification__WEBPACK_IMPORTED_MODULE_2__.successNotif)('Notification', 'Mot de passe généré avec succès.');
              setHasGenerate(false);
              setShowModal(false);
              _context3.next = 13;
              break;

            case 9:
              _context3.prev = 9;
              _context3.t0 = _context3["catch"](0);
              setHasGenerate(false);

              if (_typeof(_context3.t0) === 'object') {} else {
                (0,_components_notification__WEBPACK_IMPORTED_MODULE_2__.errorNotif)('Avertissement', _context3.t0);
              }

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 9]]);
    }));

    return function generatePass() {
      return _ref3.apply(this, arguments);
    };
  }();

  var handlerRestriction = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var _response$data$data2, _response$data2, response, data, _profile;

      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              setHasDisabled(true);
              _context4.next = 4;
              return (0,_api_request__WEBPACK_IMPORTED_MODULE_1__.restrictionUserAccess)(formProfile.uuid, {
                restriction: !(formProfile !== null && formProfile !== void 0 && formProfile.restriction)
              });

            case 4:
              response = _context4.sent;
              data = (_response$data$data2 = response === null || response === void 0 ? void 0 : (_response$data2 = response.data) === null || _response$data2 === void 0 ? void 0 : _response$data2.data) !== null && _response$data$data2 !== void 0 ? _response$data$data2 : null;

              if (data) {
                _profile = _objectSpread(_objectSpread({}, data), {}, {
                  avatar: !(data !== null && data !== void 0 && data.avatar) ? {} : {
                    preview: "".concat(_utilities_constant__WEBPACK_IMPORTED_MODULE_3__.API_STORAGE_URL, "/").concat(avatar)
                  }
                });
                console.log('_profile :>> ', _profile);
                setFormProfile(_profile);
              }

              (0,_components_notification__WEBPACK_IMPORTED_MODULE_2__.successNotif)('Notification', "Le compte a \xE9t\xE9 ".concat(formProfile !== null && formProfile !== void 0 && formProfile.restriction ? 'déactivé' : 'activé', " avec succ\xE8s."));
              setHasDisabled(false);
              setShowModalDisabled(false);
              _context4.next = 16;
              break;

            case 12:
              _context4.prev = 12;
              _context4.t0 = _context4["catch"](0);
              setHasDisabled(false);

              if (_typeof(_context4.t0) === 'object') {} else {
                (0,_components_notification__WEBPACK_IMPORTED_MODULE_2__.errorNotif)('Avertissement', _context4.t0);
              }

            case 16:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 12]]);
    }));

    return function handlerRestriction() {
      return _ref4.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
    children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_layouts_components_page_header__WEBPACK_IMPORTED_MODULE_5__["default"], {
      title: 'Détail sur le profil',
      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "mr-2",
        variant: "dark",
        size: "md",
        onClick: function onClick() {
          return navigate(-1);
        },
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
          className: "zmdi zmdi-accounts-list-alt"
        }), ' ', "Retour \xE0 la liste"]
      }), (useConnect === null || useConnect === void 0 ? void 0 : useConnect.uuid) !== (formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid) && !isLoading ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        className: "mr-2",
        variant: "".concat(formProfile !== null && formProfile !== void 0 && formProfile.restriction ? "success" : "danger"),
        onClick: function onClick() {
          return setShowModalDisabled(true);
        },
        children: [formProfile !== null && formProfile !== void 0 && formProfile.restriction ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
            "class": "zmdi zmdi-check"
          }), " D\xE9verrouiller"]
        }) : /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
            "class": "zmdi zmdi-block"
          }), " Verrouiller"]
        }), " le compte"]
      }) : null, (formProfile === null || formProfile === void 0 ? void 0 : formProfile.role) !== 'user' && (useConnect === null || useConnect === void 0 ? void 0 : useConnect.uuid) !== (formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid) ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        variant: "light",
        size: "md",
        onClick: function onClick() {
          return navigate('/handlers/account-admins/edit', {
            state: {
              uuid: formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid
            }
          });
        },
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
          className: "zmdi zmdi-edit"
        }), " Modifier"]
      }) : null]
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        sm: 12,
        md: 4,
        children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          body: true,
          children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            className: "wideget-user text-center",
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "wideget-user-desc",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "wideget-user-img",
                children: formProfile !== null && formProfile !== void 0 && formProfile.avatar ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module '../../../../components/icones'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  className: 'avatar-show'
                }) : /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("img", {
                  className: "",
                  src: "".concat(_utilities_constant__WEBPACK_IMPORTED_MODULE_3__.API_STORAGE_URL, "/").concat(formProfile === null || formProfile === void 0 ? void 0 : formProfile.avatar),
                  alt: "img"
                })
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "user-wrap",
                children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h4", {
                  className: "mb-1",
                  children: [formProfile === null || formProfile === void 0 ? void 0 : formProfile.firstname, " ", formProfile === null || formProfile === void 0 ? void 0 : formProfile.lastname]
                }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h6", {
                  className: "text-muted mb-4",
                  children: ["Compte cr\xE9\xE9 le ", ' ', formProfile !== null && formProfile !== void 0 && formProfile.created_at ? Object(function webpackMissingModule() { var e = new Error("Cannot find module 'moment'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(formProfile === null || formProfile === void 0 ? void 0 : formProfile.created_at).format('LL') : '', '  ']
                }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("p", {
                  className: "text-muter",
                  children: formProfile !== null && formProfile !== void 0 && formProfile.restriction ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    pill: true,
                    variant: "danger",
                    bg: "danger",
                    children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
                      className: "text-white",
                      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                        "class": "zmdi zmdi-lock-outline"
                      }), ' ', "Compte verrouill\xE9"]
                    })
                  }) : /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                    pill: true,
                    variant: "success",
                    bg: "success",
                    children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
                      className: "text-white",
                      children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                        "class": "zmdi zmdi-lock-open"
                      }), ' ', "Compte accessible"]
                    })
                  })
                }), (formProfile === null || formProfile === void 0 ? void 0 : formProfile.role) !== 'user' && (useConnect === null || useConnect === void 0 ? void 0 : useConnect.uuid) !== (formProfile === null || formProfile === void 0 ? void 0 : formProfile.uuid) ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
                  variant: "warning",
                  className: "mt-2",
                  onClick: function onClick() {
                    return setShowModal(true);
                  },
                  children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                    className: "zmdi zmdi-lock-outline"
                  }), ' ', "G\xE9n\xE9rer un nouveau mot de passe"]
                }) : null]
              })]
            })
          })
        }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          body: true,
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h5", {
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
                children: "Information sur l'utilisateur"
              })
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            className: "wideget-user-contact mt-4",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "media mb-5 mt-0",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "d-flex mr-3",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                  className: "user-contact-icon bg-dark",
                  children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                    "class": "zmdi zmdi-accounts text-white"
                  })
                })
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "media-body",
                children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
                  href: "#",
                  className: "text-dark",
                  children: "Groupe de compte"
                }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                  className: "text-muted fs-14",
                  children: ((_roleToShow = (0,_utilities_helper__WEBPACK_IMPORTED_MODULE_4__.roleToShow)(formProfile.role)) !== null && _roleToShow !== void 0 ? _roleToShow : '').toUpperCase()
                })]
              })]
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "media mb-5 mt-0",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "d-flex mr-3",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                  className: "user-contact-icon bg-dark",
                  children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                    className: "fa fa-envelope text-white"
                  })
                })
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "media-body",
                children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
                  href: "#",
                  className: "text-dark",
                  children: "Adresse mail"
                }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                  className: "text-muted fs-14",
                  children: (_formProfile$email = formProfile === null || formProfile === void 0 ? void 0 : formProfile.email) !== null && _formProfile$email !== void 0 ? _formProfile$email : '---'
                })]
              })]
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "media mb-5 mt-0",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "d-flex mr-3",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                  className: "user-contact-icon bg-dark",
                  children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                    className: "fa fa-globe text-white"
                  })
                })
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "media-body",
                children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
                  href: "#",
                  className: "text-dark",
                  children: "Adresse"
                }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                  className: "text-muted fs-14",
                  children: (_formProfile$adresse = formProfile === null || formProfile === void 0 ? void 0 : formProfile.adresse) !== null && _formProfile$adresse !== void 0 ? _formProfile$adresse : '---'
                })]
              })]
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "media mb-0 mt-0",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "d-flex mr-3",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                  className: "user-contact-icon bg-dark",
                  children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                    className: "fa fa-phone text-white"
                  })
                })
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "media-body",
                children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
                  href: "#",
                  className: "text-dark",
                  children: "Telephone"
                }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                  className: "text-muted fs-14",
                  children: (_formProfile$telephon = formProfile === null || formProfile === void 0 ? void 0 : formProfile.telephone) !== null && _formProfile$telephon !== void 0 ? _formProfile$telephon : '---'
                })]
              })]
            })]
          })]
        })]
      }), (formProfile === null || formProfile === void 0 ? void 0 : formProfile.role) !== 'user' ? /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
        sm: 12,
        md: 4,
        children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
          body: true,
          children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react-bootstrap'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {
            children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("h5", {
              children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("strong", {
                children: "Information professionnelle"
              })
            })
          }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
            className: "wideget-user-contact mt-4",
            children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "media mb-5 mt-0",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "d-flex mr-3",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                  className: "user-contact-icon bg-dark",
                  children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                    "class": "zmdi zmdi-accounts text-white"
                  })
                })
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "media-body",
                children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
                  href: "#",
                  className: "text-dark",
                  children: "Direction"
                }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                  className: "text-muted fs-14",
                  children: (_formProfile$directio = formProfile.direction) !== null && _formProfile$directio !== void 0 ? _formProfile$directio : '---'
                })]
              })]
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "media mb-5 mt-0",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "d-flex mr-3",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                  className: "user-contact-icon bg-dark",
                  children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                    className: "fa fa-envelope text-white"
                  })
                })
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "media-body",
                children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
                  href: "#",
                  className: "text-dark",
                  children: "Service"
                }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                  className: "text-muted fs-14",
                  children: (_formProfile$service = formProfile === null || formProfile === void 0 ? void 0 : formProfile.service) !== null && _formProfile$service !== void 0 ? _formProfile$service : '---'
                })]
              })]
            }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
              className: "media mb-5 mt-0",
              children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "d-flex mr-3",
                children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("span", {
                  className: "user-contact-icon bg-dark",
                  children: /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("i", {
                    className: "fa fa-globe text-white"
                  })
                })
              }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                className: "media-body",
                children: [/*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("a", {
                  href: "#",
                  className: "text-dark",
                  children: "Fonction"
                }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())("div", {
                  className: "text-muted fs-14",
                  children: (_formProfile$fonction = formProfile === null || formProfile === void 0 ? void 0 : formProfile.fonction) !== null && _formProfile$fonction !== void 0 ? _formProfile$fonction : '---'
                })]
              })]
            })]
          })]
        })
      }) : null]
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_UserConfirmModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      showModal: showModal,
      handleClose: function handleClose() {
        return setShowModal(false);
      },
      confirmAction: generatePass,
      loading: hasGenerate,
      message: "\n                    Etes-vous sur de bien vouloir generer le mot de passe de ce utilisateur ?\n                    NB: Un mail lui sera envoy\xE9 avec le nouveau mot de passe.\n                ",
      title: "Confirmation"
    }), /*#__PURE__*/Object(function webpackMissingModule() { var e = new Error("Cannot find module 'react/jsx-runtime'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(_components_UserConfirmModal__WEBPACK_IMPORTED_MODULE_7__["default"], {
      showModal: showModalDisabled,
      handleClose: function handleClose() {
        return setShowModalDisabled(false);
      },
      confirmAction: handlerRestriction,
      loading: hasDisabled,
      message: "\n                    Etes-vous sur de bien vouloir d\xE9sactiver ce compte ?\n                ",
      title: "Confirmation"
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowUser);

/***/ }),

/***/ "./resources/js/src/utilities/helper.js":
/*!**********************************************!*\
  !*** ./resources/js/src/utilities/helper.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNumberPage": () => (/* binding */ getNumberPage),
/* harmony export */   "roleToSave": () => (/* binding */ roleToSave),
/* harmony export */   "roleToShow": () => (/* binding */ roleToShow)
/* harmony export */ });
var roleToShow = function roleToShow(role) {
  switch (role) {
    case 'journalist':
      return 'gestionnaire';

    case 'accounting':
      return 'comptable';

    case 'observer':
      return 'consultant';

    case 'admin':
      return 'administrateur';

    default:
      return 'utilisateur';
  }
};
var roleToSave = function roleToSave(role) {
  switch (role) {
    case 'gestionnaire':
      return 'journalist';

    case 'comptable':
      return 'accounting';

    case 'consultant':
      return 'observer';

    case 'administrateur':
      return 'admin';

    default:
      return 'user';
  }
};
var getNumberPage = function getNumberPage() {
  var tables = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var perPage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
  var numberPage = tables.length / perPage;
  return Number(Math.ceil(numberPage).toFixed(0));
};

/***/ })

}]);