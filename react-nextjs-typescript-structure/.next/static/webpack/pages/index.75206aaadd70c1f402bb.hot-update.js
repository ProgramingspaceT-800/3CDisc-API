webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n\n\nvar _this = undefined,\n  _jsxFileName = \"/workspace/3CDisc-API/react-nextjs-typescript-structure/src/pages/index.tsx\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar Home = function Home() {\n  _s();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n      'G - FGTS': '29870',\n      'C e M - INSS PORTABILIDADE ATUALIZADA FILE': '78025',\n      'M - UNIFICADA GRUPO SP - GOV/PME/SPPREV': '80797',\n      'G - INSS PORTABILIDADE': '69098',\n      'C - BASE FILE PORT INBURSA/CREFISA': '83106',\n      'I - TJSP': '62048',\n      'C e M - INBURSA PORTANDO D+ BANCOS PARA: ACIMA DE 500': '83752',\n      'G - PMESP AUMENTO 20%': '70014',\n      'M - GOV MT GERAL': '70967',\n      'C - INSS PORTABILIDADE INBURSA': '80802',\n      'G - PMSP - PREMIUM': '80801',\n      'M - SANTOS': '82286',\n      'I - BANCO MASTER SAQUE COMPL SEFAZ': '54283',\n      'G - PMSP AUMENTO 5%': '70015',\n      'G - OPORTUNIDADE INSS BANCO MASTER': '30730',\n      'C - INSS PORTABILIDADE CREFISA': '80803',\n      'S - UNIFICADA GRUPO SP - GOV/PME/SPPREV': '80798',\n      'I - PREF CURITIBA': '80595',\n      'M - GOV PARANA SAQUE COMPLEMENTAR MASTER': '79162',\n      'G - MARGEM REAL CARTÃO BENEFÍCIO MCC GOVSP': '70034',\n      'I - PM BETIM': '60139',\n      'G - GOV MARANHAO CARTAO BENEFICIO': '59136',\n      'G - GOV MG - GERAL': '55691',\n      'G - GOV PE': '51370',\n      'G - MT GROSSO DO SUL GERAL': '50943',\n      'G - SAQUE COMPLEMENTAR DAYCOVAL ACIMA 1000': '50008',\n      'G - REFIN SANTANDER | REDUÇÃO TAXA | PUBLICOS': '45169',\n      'G - SAQUE COMPLEMENTAR BANCO MASTER ATUALIZADO': '41975',\n      'G - COMLURB SANT': '41000',\n      'G - REFIN SANTANDER UNIFICADA': '38247',\n      'G - GOV SANTA CATARINA': '37114',\n      'G - GOV RJ CORRENTISTAS': '35994',\n      'G - OSASCO': '33270',\n      'G - 50 + VENDIDOS MARGEM ONLINE': '33263'\n    }),\n    bases = _useState[0];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n    loading = _useState2[0],\n    setLoading = _useState2[1];\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n    baseData = _useState3[0],\n    setBaseData = _useState3[1];\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n    expandedBase = _useState4[0],\n    setExpandedBase = _useState4[1]; // Estado para controlar a div expandida\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n    campanhasComAviso = _useState5[0],\n    setCampanhasComAviso = _useState5[1];\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function fetchData() {\n      return _fetchData.apply(this, arguments);\n    }\n    function _fetchData() {\n      _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var newData, baseName, id, response, filteredData;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                newData = {};\n                _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(bases);\n              case 3:\n                if ((_context.t1 = _context.t0()).done) {\n                  _context.next = 13;\n                  break;\n                }\n                baseName = _context.t1.value;\n                id = bases[baseName];\n                _context.next = 8;\n                return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://3c.fluxoti.com/api/v1/campaigns/\".concat(id, \"/lists?api_token=d0NLCpTnvtsY1gQu7S38RyF47fOjnHknynBjGzWxCwpXOJqXaNwWDrGqFomq\"));\n              case 8:\n                response = _context.sent;\n                filteredData = response.data.data.filter(function (post) {\n                  return post.weight === 1;\n                });\n                newData[id] = filteredData;\n                _context.next = 3;\n                break;\n              case 13:\n                setBaseData(newData);\n                setLoading(false);\n                _context.next = 21;\n                break;\n              case 17:\n                _context.prev = 17;\n                _context.t2 = _context[\"catch\"](0);\n                console.error('Erro ao buscar os dados:', _context.t2);\n                setLoading(false);\n              case 21:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 17]]);\n      }));\n      return _fetchData.apply(this, arguments);\n    }\n    fetchData();\n  }, [bases]);\n  function renderPorcentagem(porcentagem) {\n    var porcentagemNum = parseFloat(porcentagem);\n    if (porcentagemNum === 100) {\n      return __jsx(\"span\", {\n        className: \"porcentagem-azul\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 14\n        }\n      }, porcentagem);\n    } else if (porcentagemNum >= 90 && porcentagemNum <= 99.99) {\n      return __jsx(\"span\", {\n        className: \"porcentagem-vermelha\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 14\n        }\n      }, porcentagem);\n    } else {\n      return __jsx(\"span\", {\n        className: \"porcentagem-verde\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 14\n        }\n      }, porcentagem);\n    }\n  }\n  function toggleDetails(id) {\n    if (expandedBase === id) {\n      setExpandedBase(null);\n    } else {\n      setExpandedBase(id);\n    }\n  }\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }\n  }, \"CAMPANHAS\"), loading ? __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, \"Carregando...\") : __jsx(\"div\", {\n    className: \"principalContent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 101,\n      columnNumber: 9\n    }\n  }, Object.keys(bases).map(function (baseName) {\n    var _baseData$bases$baseN;\n    return __jsx(\"div\", {\n      key: baseName,\n      className: \"campaign-card\".concat(expandedBase === bases[baseName] ? ' clicked' : ''),\n      onClick: function onClick() {\n        return toggleDetails(bases[baseName]);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"base \".concat(campanhasComAviso.includes(bases[baseName]) ? 'com-aviso' : ''),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 5\n      }\n    }, baseName), expandedBase === bases[baseName] && __jsx(\"div\", {\n      className: \"campaign-percentages\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 110,\n        columnNumber: 17\n      }\n    }, (_baseData$bases$baseN = baseData[bases[baseName]]) === null || _baseData$bases$baseN === void 0 ? void 0 : _baseData$bases$baseN.map(function (post) {\n      return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n        key: post.id,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        className: \"percentage-item \".concat(parseFloat(post.completed_percentage) > 90 ? 'com-aviso' // Adiciona uma classe \"com-aviso\" se a porcentagem for maior que 90\n        : ''),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 22\n        }\n      }, __jsx(\"h3\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 25\n        }\n      }, post.name), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 121,\n          columnNumber: 25\n        }\n      }, post.created_at), __jsx(\"h3\", {\n        className: \"porcentagem-\".concat(post.completed_percentage === '100.00' ? 'verde' : 'vermelha'),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 25\n        }\n      }, renderPorcentagem(post.completed_percentage))));\n    })));\n  }))));\n};\n_s(Home, \"ShZK+FWGcGuerxE6uNcDN7gB1iA=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJfcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiYmFzZXMiLCJfdXNlU3RhdGUyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUzIiwiYmFzZURhdGEiLCJzZXRCYXNlRGF0YSIsIl91c2VTdGF0ZTQiLCJleHBhbmRlZEJhc2UiLCJzZXRFeHBhbmRlZEJhc2UiLCJfdXNlU3RhdGU1IiwiY2FtcGFuaGFzQ29tQXZpc28iLCJzZXRDYW1wYW5oYXNDb21BdmlzbyIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsIl9mZXRjaERhdGEiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwibmV3RGF0YSIsImJhc2VOYW1lIiwiaWQiLCJyZXNwb25zZSIsImZpbHRlcmVkRGF0YSIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJ0MCIsImtleXMiLCJ0MSIsImRvbmUiLCJ2YWx1ZSIsImF4aW9zIiwiZ2V0IiwiY29uY2F0Iiwic2VudCIsImRhdGEiLCJmaWx0ZXIiLCJwb3N0Iiwid2VpZ2h0IiwidDIiLCJjb25zb2xlIiwiZXJyb3IiLCJzdG9wIiwicmVuZGVyUG9yY2VudGFnZW0iLCJwb3JjZW50YWdlbSIsInBvcmNlbnRhZ2VtTnVtIiwicGFyc2VGbG9hdCIsIl9fanN4IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0b2dnbGVEZXRhaWxzIiwiQ2FyZENvbnRlbnQiLCJfdGhpcyIsIk9iamVjdCIsIm1hcCIsIl9iYXNlRGF0YSRiYXNlcyRiYXNlTiIsImtleSIsIm9uQ2xpY2siLCJpbmNsdWRlcyIsIkNvbnRhaW5lciIsImNvbXBsZXRlZF9wZXJjZW50YWdlIiwibmFtZSIsImNyZWF0ZWRfYXQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDekI7QUFDb0M7QUFFOUQsSUFBTUEsSUFBYyxHQUFHLFNBQWpCQSxJQUFjQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUFBLElBQUFDLFNBQUEsR0FDWEMsc0RBQVEsQ0FBQztNQUN2QixVQUFVLEVBQUUsT0FBTztNQUNuQiw0Q0FBNEMsRUFBRSxPQUFPO01BQ3JELHlDQUF5QyxFQUFFLE9BQU87TUFDbEQsd0JBQXdCLEVBQUUsT0FBTztNQUNqQyxvQ0FBb0MsRUFBRSxPQUFPO01BQzdDLFVBQVUsRUFBRSxPQUFPO01BQ25CLHVEQUF1RCxFQUFFLE9BQU87TUFDaEUsdUJBQXVCLEVBQUUsT0FBTztNQUNoQyxrQkFBa0IsRUFBRSxPQUFPO01BQzNCLGdDQUFnQyxFQUFFLE9BQU87TUFDekMsb0JBQW9CLEVBQUUsT0FBTztNQUM3QixZQUFZLEVBQUUsT0FBTztNQUNyQixvQ0FBb0MsRUFBRSxPQUFPO01BQzdDLHFCQUFxQixFQUFFLE9BQU87TUFDOUIsb0NBQW9DLEVBQUUsT0FBTztNQUM3QyxnQ0FBZ0MsRUFBRSxPQUFPO01BQ3pDLHlDQUF5QyxFQUFFLE9BQU87TUFDbEQsbUJBQW1CLEVBQUUsT0FBTztNQUM1QiwwQ0FBMEMsRUFBRSxPQUFPO01BQ25ELDRDQUE0QyxFQUFFLE9BQU87TUFDckQsY0FBYyxFQUFFLE9BQU87TUFDdkIsbUNBQW1DLEVBQUUsT0FBTztNQUM1QyxvQkFBb0IsRUFBRSxPQUFPO01BQzdCLFlBQVksRUFBRSxPQUFPO01BQ3JCLDRCQUE0QixFQUFFLE9BQU87TUFDckMsNENBQTRDLEVBQUUsT0FBTztNQUNyRCwrQ0FBK0MsRUFBRSxPQUFPO01BQ3hELGdEQUFnRCxFQUFFLE9BQU87TUFDekQsa0JBQWtCLEVBQUUsT0FBTztNQUMzQiwrQkFBK0IsRUFBRSxPQUFPO01BQ3hDLHdCQUF3QixFQUFFLE9BQU87TUFDakMseUJBQXlCLEVBQUUsT0FBTztNQUNsQyxZQUFZLEVBQUUsT0FBTztNQUNyQixpQ0FBaUMsRUFBRTtJQUNyQyxDQUFDLENBQUM7SUFuQ0tDLEtBQUssR0FBQUYsU0FBQTtFQUFBLElBQUFHLFVBQUEsR0FxQ2lCRixzREFBUSxDQUFDLElBQUksQ0FBQztJQUFyQ0csT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUFBLElBQUFHLFVBQUEsR0FDT0wsc0RBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUFyQ00sUUFBUSxHQUFBRCxVQUFBO0lBQUVFLFdBQVcsR0FBQUYsVUFBQTtFQUFBLElBQUFHLFVBQUEsR0FDY1Isc0RBQVEsQ0FBQyxJQUFJLENBQUM7SUFBL0NTLFlBQVksR0FBQUQsVUFBQTtJQUFFRSxlQUFlLEdBQUFGLFVBQUEsS0FBb0I7RUFBQSxJQUFBRyxVQUFBLEdBQ05YLHNEQUFRLENBQUMsRUFBRSxDQUFDO0lBQXZEWSxpQkFBaUIsR0FBQUQsVUFBQTtJQUFFRSxvQkFBb0IsR0FBQUYsVUFBQTtFQUloREcsdURBQVMsQ0FBQyxZQUFNO0lBQUEsU0FDQ0MsU0FBU0EsQ0FBQTtNQUFBLE9BQUFDLFVBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0lBQUE7SUFBQSxTQUFBRixXQUFBO01BQUFBLFVBQUEsR0FBQUcsMkZBQUEsZUFBQUMsaUVBQUEsQ0FBQUMsSUFBQSxDQUF4QixTQUFBQyxRQUFBO1FBQUEsSUFBQUMsT0FBQSxFQUFBQyxRQUFBLEVBQUFDLEVBQUEsRUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUEsT0FBQVAsaUVBQUEsQ0FBQVEsSUFBQSxVQUFBQyxTQUFBQyxRQUFBO1VBQUE7WUFBQSxRQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO2NBQUE7Z0JBQUFGLFFBQUEsQ0FBQUMsSUFBQTtnQkFFVVIsT0FBTyxHQUFHLENBQUMsQ0FBQztnQkFBQU8sUUFBQSxDQUFBRyxFQUFBLEdBQUFiLGlFQUFBLENBQUFjLElBQUEsQ0FFS2pDLEtBQUs7Y0FBQTtnQkFBQSxLQUFBNkIsUUFBQSxDQUFBSyxFQUFBLEdBQUFMLFFBQUEsQ0FBQUcsRUFBQSxJQUFBRyxJQUFBO2tCQUFBTixRQUFBLENBQUFFLElBQUE7a0JBQUE7Z0JBQUE7Z0JBQWpCUixRQUFRLEdBQUFNLFFBQUEsQ0FBQUssRUFBQSxDQUFBRSxLQUFBO2dCQUNYWixFQUFFLEdBQUd4QixLQUFLLENBQUN1QixRQUFRLENBQUM7Z0JBQUFNLFFBQUEsQ0FBQUUsSUFBQTtnQkFBQSxPQUNITSw2Q0FBSyxDQUFDQyxHQUFHLDRDQUFBQyxNQUFBLENBQTRDZixFQUFFLGtGQUErRSxDQUFDO2NBQUE7Z0JBQXhKQyxRQUFRLEdBQUFJLFFBQUEsQ0FBQVcsSUFBQTtnQkFDUmQsWUFBWSxHQUFHRCxRQUFRLENBQUNnQixJQUFJLENBQUNBLElBQUksQ0FBQ0MsTUFBTSxDQUFDLFVBQUNDLElBQUk7a0JBQUEsT0FBS0EsSUFBSSxDQUFDQyxNQUFNLEtBQUssQ0FBQztnQkFBQSxFQUFDO2dCQUMzRXRCLE9BQU8sQ0FBQ0UsRUFBRSxDQUFDLEdBQUdFLFlBQVk7Z0JBQUNHLFFBQUEsQ0FBQUUsSUFBQTtnQkFBQTtjQUFBO2dCQUc3QnpCLFdBQVcsQ0FBQ2dCLE9BQU8sQ0FBQztnQkFDcEJuQixVQUFVLENBQUMsS0FBSyxDQUFDO2dCQUFDMEIsUUFBQSxDQUFBRSxJQUFBO2dCQUFBO2NBQUE7Z0JBQUFGLFFBQUEsQ0FBQUMsSUFBQTtnQkFBQUQsUUFBQSxDQUFBZ0IsRUFBQSxHQUFBaEIsUUFBQTtnQkFFbEJpQixPQUFPLENBQUNDLEtBQUssQ0FBQywwQkFBMEIsRUFBQWxCLFFBQUEsQ0FBQWdCLEVBQU8sQ0FBQztnQkFDaEQxQyxVQUFVLENBQUMsS0FBSyxDQUFDO2NBQUM7Y0FBQTtnQkFBQSxPQUFBMEIsUUFBQSxDQUFBbUIsSUFBQTtZQUFBO1VBQUE7UUFBQSxHQUFBM0IsT0FBQTtNQUFBLENBRXJCO01BQUEsT0FBQU4sVUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7SUFBQTtJQUVESCxTQUFTLENBQUMsQ0FBQztFQUNiLENBQUMsRUFBRSxDQUFDZCxLQUFLLENBQUMsQ0FBQztFQUVYLFNBQVNpRCxpQkFBaUJBLENBQUNDLFdBQVcsRUFBRTtJQUN0QyxJQUFNQyxjQUFjLEdBQUdDLFVBQVUsQ0FBQ0YsV0FBVyxDQUFDO0lBRTlDLElBQUlDLGNBQWMsS0FBSyxHQUFHLEVBQUU7TUFDMUIsT0FBT0UsS0FBQTtRQUFNQyxTQUFTLEVBQUMsa0JBQWtCO1FBQUFDLE1BQUE7UUFBQUMsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUFFVixXQUFrQixDQUFDO0lBQ2hFLENBQUMsTUFBTSxJQUFJQyxjQUFjLElBQUksRUFBRSxJQUFJQSxjQUFjLElBQUksS0FBSyxFQUFFO01BQzFELE9BQU9FLEtBQUE7UUFBTUMsU0FBUyxFQUFDLHNCQUFzQjtRQUFBQyxNQUFBO1FBQUFDLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FBRVYsV0FBa0IsQ0FBQztJQUNwRSxDQUFDLE1BQU07TUFDTCxPQUFPRyxLQUFBO1FBQU1DLFNBQVMsRUFBQyxtQkFBbUI7UUFBQUMsTUFBQTtRQUFBQyxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQUVWLFdBQWtCLENBQUM7SUFDakU7RUFDRjtFQUdBLFNBQVNXLGFBQWFBLENBQUNyQyxFQUFVLEVBQUU7SUFDakMsSUFBSWhCLFlBQVksS0FBS2dCLEVBQUUsRUFBRTtNQUN2QmYsZUFBZSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDLE1BQU07TUFDTEEsZUFBZSxDQUFDZSxFQUFFLENBQUM7SUFDckI7RUFDRjtFQUVBLE9BQ0U2QixLQUFBLENBQUNTLDhEQUFXO0lBQUFQLE1BQUEsRUFBQVEsS0FBQTtJQUFBUCxRQUFBO01BQUFDLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQTtFQUFBLEdBQ1pQLEtBQUE7SUFBQUUsTUFBQSxFQUFBUSxLQUFBO0lBQUFQLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDRVAsS0FBQTtJQUFBRSxNQUFBLEVBQUFRLEtBQUE7SUFBQVAsUUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUE7RUFBQSxHQUFJLFdBQWEsQ0FBQyxFQUNqQjFELE9BQU8sR0FDTm1ELEtBQUE7SUFBQUUsTUFBQSxFQUFBUSxLQUFBO0lBQUFQLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FBRyxlQUFnQixDQUFDLEdBRXBCUCxLQUFBO0lBQUtDLFNBQVMsRUFBQyxrQkFBa0I7SUFBQUMsTUFBQSxFQUFBUSxLQUFBO0lBQUFQLFFBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBO0VBQUEsR0FDOUJJLE1BQU0sQ0FBQy9CLElBQUksQ0FBQ2pDLEtBQUssQ0FBQyxDQUFDaUUsR0FBRyxDQUFDLFVBQUMxQyxRQUFRO0lBQUEsSUFBQTJDLHFCQUFBO0lBQUEsT0FDL0JiLEtBQUE7TUFDRWMsR0FBRyxFQUFFNUMsUUFBUztNQUNkK0IsU0FBUyxrQkFBQWYsTUFBQSxDQUFrQi9CLFlBQVksS0FBS1IsS0FBSyxDQUFDdUIsUUFBUSxDQUFDLEdBQUcsVUFBVSxHQUFHLEVBQUUsQ0FBRztNQUNoRjZDLE9BQU8sRUFBRSxTQUFBQSxRQUFBO1FBQUEsT0FBTVAsYUFBYSxDQUFDN0QsS0FBSyxDQUFDdUIsUUFBUSxDQUFDLENBQUM7TUFBQSxDQUFDO01BQUFnQyxNQUFBLEVBQUFRLEtBQUE7TUFBQVAsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUV4RFAsS0FBQTtNQUFLQyxTQUFTLFVBQUFmLE1BQUEsQ0FBVTVCLGlCQUFpQixDQUFDMEQsUUFBUSxDQUFDckUsS0FBSyxDQUFDdUIsUUFBUSxDQUFDLENBQUMsR0FBRyxXQUFXLEdBQUcsRUFBRSxDQUFHO01BQUFnQyxNQUFBLEVBQUFRLEtBQUE7TUFBQVAsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxHQUFFckMsUUFBYyxDQUFDLEVBQy9GZixZQUFZLEtBQUtSLEtBQUssQ0FBQ3VCLFFBQVEsQ0FBQyxJQUMvQjhCLEtBQUE7TUFBS0MsU0FBUyxFQUFDLHNCQUFzQjtNQUFBQyxNQUFBLEVBQUFRLEtBQUE7TUFBQVAsUUFBQTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUE7SUFBQSxJQUFBTSxxQkFBQSxHQUNsQzdELFFBQVEsQ0FBQ0wsS0FBSyxDQUFDdUIsUUFBUSxDQUFDLENBQUMsY0FBQTJDLHFCQUFBLHVCQUF6QkEscUJBQUEsQ0FBMkJELEdBQUcsQ0FBQyxVQUFDdEIsSUFBUztNQUFBLE9BQ3hDVSxLQUFBLENBQUNpQiw0REFBUztRQUFDSCxHQUFHLEVBQUV4QixJQUFJLENBQUNuQixFQUFHO1FBQUErQixNQUFBLEVBQUFRLEtBQUE7UUFBQVAsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUN2QlAsS0FBQTtRQUNLQyxTQUFTLHFCQUFBZixNQUFBLENBQ1BhLFVBQVUsQ0FBQ1QsSUFBSSxDQUFDNEIsb0JBQW9CLENBQUMsR0FBRyxFQUFFLEdBQ3RDLFdBQVcsQ0FBQztRQUFBLEVBQ1osRUFBRSxDQUNMO1FBQUFoQixNQUFBLEVBQUFRLEtBQUE7UUFBQVAsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUVMUCxLQUFBO1FBQUFFLE1BQUEsRUFBQVEsS0FBQTtRQUFBUCxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQUtqQixJQUFJLENBQUM2QixJQUFTLENBQUMsRUFDcEJuQixLQUFBO1FBQUFFLE1BQUEsRUFBQVEsS0FBQTtRQUFBUCxRQUFBO1VBQUFDLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQTtNQUFBLEdBQUlqQixJQUFJLENBQUM4QixVQUFjLENBQUMsRUFDeEJwQixLQUFBO1FBQUlDLFNBQVMsaUJBQUFmLE1BQUEsQ0FBaUJJLElBQUksQ0FBQzRCLG9CQUFvQixLQUFLLFFBQVEsR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFHO1FBQUFoQixNQUFBLEVBQUFRLEtBQUE7UUFBQVAsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUM5RlgsaUJBQWlCLENBQUVOLElBQUksQ0FBQzRCLG9CQUFxQixDQUN6QyxDQUNELENBQ0ksQ0FBQztJQUFBLENBQ2IsQ0FDRSxDQUVKLENBQUM7RUFBQSxDQUNQLENBQ0UsQ0FFSixDQUNNLENBQUM7QUFFaEIsQ0FBQztBQUFDMUUsRUFBQSxDQXBJSUQsSUFBYztBQUFBOEUsRUFBQSxHQUFkOUUsSUFBYztBQXNJTEEsbUVBQUksRUFBQztBQUFBLElBQUE4RSxFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDb250YWluZXIsIENhcmRDb250ZW50IH0gZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUnO1xuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2Jhc2VzXSA9IHVzZVN0YXRlKHtcbiAgICAnRyAtIEZHVFMnOiAnMjk4NzAnLFxuICAgICdDIGUgTSAtIElOU1MgUE9SVEFCSUxJREFERSBBVFVBTElaQURBIEZJTEUnOiAnNzgwMjUnLFxuICAgICdNIC0gVU5JRklDQURBIEdSVVBPIFNQIC0gR09WL1BNRS9TUFBSRVYnOiAnODA3OTcnLFxuICAgICdHIC0gSU5TUyBQT1JUQUJJTElEQURFJzogJzY5MDk4JyxcbiAgICAnQyAtIEJBU0UgRklMRSBQT1JUIElOQlVSU0EvQ1JFRklTQSc6ICc4MzEwNicsXG4gICAgJ0kgLSBUSlNQJzogJzYyMDQ4JyxcbiAgICAnQyBlIE0gLSBJTkJVUlNBIFBPUlRBTkRPIEQrIEJBTkNPUyBQQVJBOiBBQ0lNQSBERSA1MDAnOiAnODM3NTInLFxuICAgICdHIC0gUE1FU1AgQVVNRU5UTyAyMCUnOiAnNzAwMTQnLFxuICAgICdNIC0gR09WIE1UIEdFUkFMJzogJzcwOTY3JyxcbiAgICAnQyAtIElOU1MgUE9SVEFCSUxJREFERSBJTkJVUlNBJzogJzgwODAyJyxcbiAgICAnRyAtIFBNU1AgLSBQUkVNSVVNJzogJzgwODAxJyxcbiAgICAnTSAtIFNBTlRPUyc6ICc4MjI4NicsXG4gICAgJ0kgLSBCQU5DTyBNQVNURVIgU0FRVUUgQ09NUEwgU0VGQVonOiAnNTQyODMnLFxuICAgICdHIC0gUE1TUCBBVU1FTlRPIDUlJzogJzcwMDE1JyxcbiAgICAnRyAtIE9QT1JUVU5JREFERSBJTlNTIEJBTkNPIE1BU1RFUic6ICczMDczMCcsXG4gICAgJ0MgLSBJTlNTIFBPUlRBQklMSURBREUgQ1JFRklTQSc6ICc4MDgwMycsXG4gICAgJ1MgLSBVTklGSUNBREEgR1JVUE8gU1AgLSBHT1YvUE1FL1NQUFJFVic6ICc4MDc5OCcsXG4gICAgJ0kgLSBQUkVGIENVUklUSUJBJzogJzgwNTk1JyxcbiAgICAnTSAtIEdPViBQQVJBTkEgU0FRVUUgQ09NUExFTUVOVEFSIE1BU1RFUic6ICc3OTE2MicsXG4gICAgJ0cgLSBNQVJHRU0gUkVBTCBDQVJUw4NPIEJFTkVGw41DSU8gTUNDIEdPVlNQJzogJzcwMDM0JyxcbiAgICAnSSAtIFBNIEJFVElNJzogJzYwMTM5JyxcbiAgICAnRyAtIEdPViBNQVJBTkhBTyBDQVJUQU8gQkVORUZJQ0lPJzogJzU5MTM2JyxcbiAgICAnRyAtIEdPViBNRyAtIEdFUkFMJzogJzU1NjkxJyxcbiAgICAnRyAtIEdPViBQRSc6ICc1MTM3MCcsXG4gICAgJ0cgLSBNVCBHUk9TU08gRE8gU1VMIEdFUkFMJzogJzUwOTQzJyxcbiAgICAnRyAtIFNBUVVFIENPTVBMRU1FTlRBUiBEQVlDT1ZBTCBBQ0lNQSAxMDAwJzogJzUwMDA4JyxcbiAgICAnRyAtIFJFRklOIFNBTlRBTkRFUiB8IFJFRFXDh8ODTyBUQVhBIHwgUFVCTElDT1MnOiAnNDUxNjknLFxuICAgICdHIC0gU0FRVUUgQ09NUExFTUVOVEFSIEJBTkNPIE1BU1RFUiBBVFVBTElaQURPJzogJzQxOTc1JyxcbiAgICAnRyAtIENPTUxVUkIgU0FOVCc6ICc0MTAwMCcsXG4gICAgJ0cgLSBSRUZJTiBTQU5UQU5ERVIgVU5JRklDQURBJzogJzM4MjQ3JyxcbiAgICAnRyAtIEdPViBTQU5UQSBDQVRBUklOQSc6ICczNzExNCcsXG4gICAgJ0cgLSBHT1YgUkogQ09SUkVOVElTVEFTJzogJzM1OTk0JyxcbiAgICAnRyAtIE9TQVNDTyc6ICczMzI3MCcsXG4gICAgJ0cgLSA1MCArIFZFTkRJRE9TIE1BUkdFTSBPTkxJTkUnOiAnMzMyNjMnLFxuICB9KTtcblxuIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYmFzZURhdGEsIHNldEJhc2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbZXhwYW5kZWRCYXNlLCBzZXRFeHBhbmRlZEJhc2VdID0gdXNlU3RhdGUobnVsbCk7IC8vIEVzdGFkbyBwYXJhIGNvbnRyb2xhciBhIGRpdiBleHBhbmRpZGFcbiAgICBjb25zdCBbY2FtcGFuaGFzQ29tQXZpc28sIHNldENhbXBhbmhhc0NvbUF2aXNvXSA9IHVzZVN0YXRlKFtdKTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBiYXNlTmFtZSBpbiBiYXNlcykge1xuICAgICAgICAgIGNvbnN0IGlkID0gYmFzZXNbYmFzZU5hbWVdO1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovLzNjLmZsdXhvdGkuY29tL2FwaS92MS9jYW1wYWlnbnMvJHtpZH0vbGlzdHM/YXBpX3Rva2VuPWQwTkxDcFRudnRzWTFnUXU3UzM4UnlGNDdmT2puSGtueW5Cakd6V3hDd3BYT0pxWGFOd1dEckdxRm9tcWApO1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5maWx0ZXIoKHBvc3QpID0+IHBvc3Qud2VpZ2h0ID09PSAxKTtcbiAgICAgICAgICBuZXdEYXRhW2lkXSA9IGZpbHRlcmVkRGF0YTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEJhc2VEYXRhKG5ld0RhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIG9zIGRhZG9zOicsIGVycm9yKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhKCk7XG4gIH0sIFtiYXNlc10pO1xuXG4gIGZ1bmN0aW9uIHJlbmRlclBvcmNlbnRhZ2VtKHBvcmNlbnRhZ2VtKSB7XG4gICAgY29uc3QgcG9yY2VudGFnZW1OdW0gPSBwYXJzZUZsb2F0KHBvcmNlbnRhZ2VtKTtcblxuICAgIGlmIChwb3JjZW50YWdlbU51bSA9PT0gMTAwKSB7XG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwicG9yY2VudGFnZW0tYXp1bFwiPntwb3JjZW50YWdlbX08L3NwYW4+O1xuICAgIH0gZWxzZSBpZiAocG9yY2VudGFnZW1OdW0gPj0gOTAgJiYgcG9yY2VudGFnZW1OdW0gPD0gOTkuOTkpIHtcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJwb3JjZW50YWdlbS12ZXJtZWxoYVwiPntwb3JjZW50YWdlbX08L3NwYW4+O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPHNwYW4gY2xhc3NOYW1lPVwicG9yY2VudGFnZW0tdmVyZGVcIj57cG9yY2VudGFnZW19PC9zcGFuPjtcbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZURldGFpbHMoaWQ6IHN0cmluZykge1xuICAgIGlmIChleHBhbmRlZEJhc2UgPT09IGlkKSB7XG4gICAgICBzZXRFeHBhbmRlZEJhc2UobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4cGFuZGVkQmFzZShpZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZENvbnRlbnQ+XG4gICAgPGRpdj5cbiAgICAgIDxoMT5DQU1QQU5IQVM8L2gxPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxwPkNhcnJlZ2FuZG8uLi48L3A+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpbmNpcGFsQ29udGVudCc+XG4gICAgICAgICAge09iamVjdC5rZXlzKGJhc2VzKS5tYXAoKGJhc2VOYW1lKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17YmFzZU5hbWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhbXBhaWduLWNhcmQke2V4cGFuZGVkQmFzZSA9PT0gYmFzZXNbYmFzZU5hbWVdID8gJyBjbGlja2VkJyA6ICcnfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURldGFpbHMoYmFzZXNbYmFzZU5hbWVdKX1cbiAgICAgICAgICAgID5cbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJhc2UgJHtjYW1wYW5oYXNDb21Bdmlzby5pbmNsdWRlcyhiYXNlc1tiYXNlTmFtZV0pID8gJ2NvbS1hdmlzbycgOiAnJ31gfT57YmFzZU5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIHtleHBhbmRlZEJhc2UgPT09IGJhc2VzW2Jhc2VOYW1lXSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW1wYWlnbi1wZXJjZW50YWdlc1wiPlxuICAgICAgICAgICAgICAgICAge2Jhc2VEYXRhW2Jhc2VzW2Jhc2VOYW1lXV0/Lm1hcCgocG9zdDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGVyY2VudGFnZS1pdGVtICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwb3N0LmNvbXBsZXRlZF9wZXJjZW50YWdlKSA+IDkwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdjb20tYXZpc28nIC8vIEFkaWNpb25hIHVtYSBjbGFzc2UgXCJjb20tYXZpc29cIiBzZSBhIHBvcmNlbnRhZ2VtIGZvciBtYWlvciBxdWUgOTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Bvc3QubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuY3JlYXRlZF9hdH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgcG9yY2VudGFnZW0tJHtwb3N0LmNvbXBsZXRlZF9wZXJjZW50YWdlID09PSAnMTAwLjAwJyA/ICd2ZXJkZScgOiAndmVybWVsaGEnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUG9yY2VudGFnZW0oKHBvc3QuY29tcGxldGVkX3BlcmNlbnRhZ2UpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICA8L0NhcmRDb250ZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})