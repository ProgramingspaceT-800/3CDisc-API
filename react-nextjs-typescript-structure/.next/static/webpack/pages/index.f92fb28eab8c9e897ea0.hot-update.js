webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n\n\nvar _this = undefined,\n  _jsxFileName = \"/workspace/3CDisc-API/react-nextjs-typescript-structure/src/pages/index.tsx\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar Home = function Home() {\n  _s();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n      'G - FGTS': '29870',\n      'C e M - INSS PORTABILIDADE ATUALIZADA FILE': '78025',\n      'M - UNIFICADA GRUPO SP - GOV/PME/SPPREV': '80797',\n      'G - INSS PORTABILIDADE': '69098',\n      'C - BASE FILE PORT INBURSA/CREFISA': '83106',\n      'I - TJSP': '62048',\n      'C e M - INBURSA PORTANDO D+ BANCOS PARA: ACIMA DE 500': '83752',\n      'G - PMESP AUMENTO 20%': '70014',\n      'M - GOV MT GERAL': '70967',\n      'C - INSS PORTABILIDADE INBURSA': '80802',\n      'G - PMSP - PREMIUM': '80801',\n      'M - SANTOS': '82286',\n      'I - BANCO MASTER SAQUE COMPL SEFAZ': '54283',\n      'G - PMSP AUMENTO 5%': '70015',\n      'G - OPORTUNIDADE INSS BANCO MASTER': '30730',\n      'C - INSS PORTABILIDADE CREFISA': '80803',\n      'S - UNIFICADA GRUPO SP - GOV/PME/SPPREV': '80798',\n      'I - PREF CURITIBA': '80595',\n      'M - GOV PARANA SAQUE COMPLEMENTAR MASTER': '79162',\n      'G - MARGEM REAL CARTÃO BENEFÍCIO MCC GOVSP': '70034',\n      'I - PM BETIM': '60139',\n      'G - GOV MARANHAO CARTAO BENEFICIO': '59136',\n      'G - GOV MG - GERAL': '55691',\n      'G - GOV PE': '51370',\n      'G - MT GROSSO DO SUL GERAL': '50943',\n      'G - SAQUE COMPLEMENTAR DAYCOVAL ACIMA 1000': '50008',\n      'G - REFIN SANTANDER | REDUÇÃO TAXA | PUBLICOS': '45169',\n      'G - SAQUE COMPLEMENTAR BANCO MASTER ATUALIZADO': '41975',\n      'G - COMLURB SANT': '41000',\n      'G - REFIN SANTANDER UNIFICADA': '38247',\n      'G - GOV SANTA CATARINA': '37114',\n      'G - GOV RJ CORRENTISTAS': '35994',\n      'G - OSASCO': '33270',\n      'G - 50 + VENDIDOS MARGEM ONLINE': '33263'\n    }),\n    bases = _useState[0];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n    loading = _useState2[0],\n    setLoading = _useState2[1];\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n    baseData = _useState3[0],\n    setBaseData = _useState3[1];\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n    expandedBase = _useState4[0],\n    setExpandedBase = _useState4[1]; // Estado para controlar a div expandida\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n    campanhasComAviso = _useState5[0],\n    setCampanhasComAviso = _useState5[1];\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function fetchData() {\n      return _fetchData.apply(this, arguments);\n    }\n    function _fetchData() {\n      _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var newData, baseName, id, response, filteredData, temPorcentagemMaiorQue90;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                newData = {};\n                _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(bases);\n              case 3:\n                if ((_context.t1 = _context.t0()).done) {\n                  _context.next = 15;\n                  break;\n                }\n                baseName = _context.t1.value;\n                id = bases[baseName];\n                _context.next = 8;\n                return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://3c.fluxoti.com/api/v1/campaigns/\".concat(id, \"/lists?api_token=d0NLCpTnvtsY1gQu7S38RyF47fOjnHknynBjGzWxCwpXOJqXaNwWDrGqFomq\"));\n              case 8:\n                response = _context.sent;\n                filteredData = response.data.data.filter(function (post) {\n                  return post.weight === 1;\n                });\n                newData[id] = filteredData;\n                temPorcentagemMaiorQue90 = filteredData.some(function (post) {\n                  return parseFloat(post.completed_percentage) > 90;\n                });\n                if (temPorcentagemMaiorQue90) {\n                  campanhasComAviso.push(id);\n                }\n                _context.next = 3;\n                break;\n              case 15:\n                setCampanhasComAviso(campanhasComAviso);\n                setBaseData(newData);\n                setLoading(false);\n                _context.next = 24;\n                break;\n              case 20:\n                _context.prev = 20;\n                _context.t2 = _context[\"catch\"](0);\n                console.error('Erro ao buscar os dados:', _context.t2);\n                setLoading(false);\n              case 24:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 20]]);\n      }));\n      return _fetchData.apply(this, arguments);\n    }\n    fetchData();\n    var interval = setInterval(fetchData, 5 * 1 * 1000); // Recarrega a cada 60 minutos\n\n    return function () {\n      return clearInterval(interval);\n    }; // Limpa o temporizador quando o componente é desmontado   \n  }, [bases]);\n  function renderPorcentagem(porcentagem) {\n    var porcentagemNum = parseFloat(porcentagem);\n    if (porcentagemNum === 100) {\n      return __jsx(\"span\", {\n        className: \"porcentagem-azul\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 87,\n          columnNumber: 14\n        }\n      }, porcentagem);\n    } else if (porcentagemNum >= 90 && porcentagemNum <= 99.99) {\n      return __jsx(\"span\", {\n        className: \"porcentagem-vermelha\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 14\n        }\n      }, porcentagem);\n    } else {\n      return __jsx(\"span\", {\n        className: \"porcentagem-verde\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 14\n        }\n      }, porcentagem);\n    }\n  }\n  function toggleDetails(id) {\n    if (expandedBase === id) {\n      setExpandedBase(null);\n    } else {\n      setExpandedBase(id);\n    }\n  }\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 105,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 106,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }\n  }, \"CAMPANHAS\"), loading ? __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }\n  }, \"Carregando...\") : __jsx(\"div\", {\n    className: \"principalContent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }\n  }, Object.keys(bases).map(function (baseName) {\n    var _baseData$bases$baseN;\n    return __jsx(\"div\", {\n      key: baseName,\n      className: \"campaign-card\".concat(expandedBase === bases[baseName] ? ' clicked' : ''),\n      onClick: function onClick() {\n        return toggleDetails(bases[baseName]);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"base \".concat(campanhasComAviso.includes(bases[baseName]) ? 'com-aviso' : ''),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 118,\n        columnNumber: 5\n      }\n    }, baseName), expandedBase === bases[baseName] && __jsx(\"div\", {\n      className: \"campaign-percentages\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 17\n      }\n    }, (_baseData$bases$baseN = baseData[bases[baseName]]) === null || _baseData$bases$baseN === void 0 ? void 0 : _baseData$bases$baseN.map(function (post) {\n      return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n        key: post.id,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 122,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        className: \"percentage-item \".concat(parseFloat(post.completed_percentage) > 90 ? 'com-aviso' // Adiciona uma classe \"com-aviso\" se a porcentagem for maior que 90\n        : ''),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 22\n        }\n      }, __jsx(\"h3\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 130,\n          columnNumber: 25\n        }\n      }, post.name), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 131,\n          columnNumber: 25\n        }\n      }, post.created_at), __jsx(\"h3\", {\n        className: \"porcentagem-\".concat(post.completed_percentage === '100.00' ? 'verde' : 'vermelha'),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 25\n        }\n      }, renderPorcentagem(post.completed_percentage))));\n    })));\n  }))));\n};\n_s(Home, \"ShZK+FWGcGuerxE6uNcDN7gB1iA=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJfcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiYmFzZXMiLCJfdXNlU3RhdGUyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUzIiwiYmFzZURhdGEiLCJzZXRCYXNlRGF0YSIsIl91c2VTdGF0ZTQiLCJleHBhbmRlZEJhc2UiLCJzZXRFeHBhbmRlZEJhc2UiLCJfdXNlU3RhdGU1IiwiY2FtcGFuaGFzQ29tQXZpc28iLCJzZXRDYW1wYW5oYXNDb21BdmlzbyIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsIl9mZXRjaERhdGEiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwibmV3RGF0YSIsImJhc2VOYW1lIiwiaWQiLCJyZXNwb25zZSIsImZpbHRlcmVkRGF0YSIsInRlbVBvcmNlbnRhZ2VtTWFpb3JRdWU5MCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJ0MCIsImtleXMiLCJ0MSIsImRvbmUiLCJ2YWx1ZSIsImF4aW9zIiwiZ2V0IiwiY29uY2F0Iiwic2VudCIsImRhdGEiLCJmaWx0ZXIiLCJwb3N0Iiwid2VpZ2h0Iiwic29tZSIsInBhcnNlRmxvYXQiLCJjb21wbGV0ZWRfcGVyY2VudGFnZSIsInB1c2giLCJ0MiIsImNvbnNvbGUiLCJlcnJvciIsInN0b3AiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlbmRlclBvcmNlbnRhZ2VtIiwicG9yY2VudGFnZW0iLCJwb3JjZW50YWdlbU51bSIsIl9fanN4IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0b2dnbGVEZXRhaWxzIiwiQ2FyZENvbnRlbnQiLCJfdGhpcyIsIk9iamVjdCIsIm1hcCIsIl9iYXNlRGF0YSRiYXNlcyRiYXNlTiIsImtleSIsIm9uQ2xpY2siLCJpbmNsdWRlcyIsIkNvbnRhaW5lciIsIm5hbWUiLCJjcmVhdGVkX2F0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ29DO0FBRTlELElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBY0EsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFBQSxJQUFBQyxTQUFBLEdBQ1hDLHNEQUFRLENBQUM7TUFDdkIsVUFBVSxFQUFFLE9BQU87TUFDbkIsNENBQTRDLEVBQUUsT0FBTztNQUNyRCx5Q0FBeUMsRUFBRSxPQUFPO01BQ2xELHdCQUF3QixFQUFFLE9BQU87TUFDakMsb0NBQW9DLEVBQUUsT0FBTztNQUM3QyxVQUFVLEVBQUUsT0FBTztNQUNuQix1REFBdUQsRUFBRSxPQUFPO01BQ2hFLHVCQUF1QixFQUFFLE9BQU87TUFDaEMsa0JBQWtCLEVBQUUsT0FBTztNQUMzQixnQ0FBZ0MsRUFBRSxPQUFPO01BQ3pDLG9CQUFvQixFQUFFLE9BQU87TUFDN0IsWUFBWSxFQUFFLE9BQU87TUFDckIsb0NBQW9DLEVBQUUsT0FBTztNQUM3QyxxQkFBcUIsRUFBRSxPQUFPO01BQzlCLG9DQUFvQyxFQUFFLE9BQU87TUFDN0MsZ0NBQWdDLEVBQUUsT0FBTztNQUN6Qyx5Q0FBeUMsRUFBRSxPQUFPO01BQ2xELG1CQUFtQixFQUFFLE9BQU87TUFDNUIsMENBQTBDLEVBQUUsT0FBTztNQUNuRCw0Q0FBNEMsRUFBRSxPQUFPO01BQ3JELGNBQWMsRUFBRSxPQUFPO01BQ3ZCLG1DQUFtQyxFQUFFLE9BQU87TUFDNUMsb0JBQW9CLEVBQUUsT0FBTztNQUM3QixZQUFZLEVBQUUsT0FBTztNQUNyQiw0QkFBNEIsRUFBRSxPQUFPO01BQ3JDLDRDQUE0QyxFQUFFLE9BQU87TUFDckQsK0NBQStDLEVBQUUsT0FBTztNQUN4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QUFJLENBQUNJLG9CQUFxQixDQUN6QyxDQUNELENBQ0ksQ0FBQztJQUFBLENBQ2IsQ0FDRSxDQUVKLENBQUM7RUFBQSxDQUNQLENBQ0UsQ0FFRixDQUNJLENBQUM7QUFFaEIsQ0FBQztBQUFDbkQsRUFBQSxDQTlJSUQsSUFBYztBQUFBb0YsRUFBQSxHQUFkcEYsSUFBYztBQWdKTEEsbUVBQUksRUFBQztBQUFBLElBQUFvRixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsImZpbGUiOiIuL3NyYy9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDb250YWluZXIsIENhcmRDb250ZW50IH0gZnJvbSAnLi4vc3R5bGVzL3BhZ2VzL0hvbWUnO1xuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2Jhc2VzXSA9IHVzZVN0YXRlKHtcbiAgICAnRyAtIEZHVFMnOiAnMjk4NzAnLFxuICAgICdDIGUgTSAtIElOU1MgUE9SVEFCSUxJREFERSBBVFVBTElaQURBIEZJTEUnOiAnNzgwMjUnLFxuICAgICdNIC0gVU5JRklDQURBIEdSVVBPIFNQIC0gR09WL1BNRS9TUFBSRVYnOiAnODA3OTcnLFxuICAgICdHIC0gSU5TUyBQT1JUQUJJTElEQURFJzogJzY5MDk4JyxcbiAgICAnQyAtIEJBU0UgRklMRSBQT1JUIElOQlVSU0EvQ1JFRklTQSc6ICc4MzEwNicsXG4gICAgJ0kgLSBUSlNQJzogJzYyMDQ4JyxcbiAgICAnQyBlIE0gLSBJTkJVUlNBIFBPUlRBTkRPIEQrIEJBTkNPUyBQQVJBOiBBQ0lNQSBERSA1MDAnOiAnODM3NTInLFxuICAgICdHIC0gUE1FU1AgQVVNRU5UTyAyMCUnOiAnNzAwMTQnLFxuICAgICdNIC0gR09WIE1UIEdFUkFMJzogJzcwOTY3JyxcbiAgICAnQyAtIElOU1MgUE9SVEFCSUxJREFERSBJTkJVUlNBJzogJzgwODAyJyxcbiAgICAnRyAtIFBNU1AgLSBQUkVNSVVNJzogJzgwODAxJyxcbiAgICAnTSAtIFNBTlRPUyc6ICc4MjI4NicsXG4gICAgJ0kgLSBCQU5DTyBNQVNURVIgU0FRVUUgQ09NUEwgU0VGQVonOiAnNTQyODMnLFxuICAgICdHIC0gUE1TUCBBVU1FTlRPIDUlJzogJzcwMDE1JyxcbiAgICAnRyAtIE9QT1JUVU5JREFERSBJTlNTIEJBTkNPIE1BU1RFUic6ICczMDczMCcsXG4gICAgJ0MgLSBJTlNTIFBPUlRBQklMSURBREUgQ1JFRklTQSc6ICc4MDgwMycsXG4gICAgJ1MgLSBVTklGSUNBREEgR1JVUE8gU1AgLSBHT1YvUE1FL1NQUFJFVic6ICc4MDc5OCcsXG4gICAgJ0kgLSBQUkVGIENVUklUSUJBJzogJzgwNTk1JyxcbiAgICAnTSAtIEdPViBQQVJBTkEgU0FRVUUgQ09NUExFTUVOVEFSIE1BU1RFUic6ICc3OTE2MicsXG4gICAgJ0cgLSBNQVJHRU0gUkVBTCBDQVJUw4NPIEJFTkVGw41DSU8gTUNDIEdPVlNQJzogJzcwMDM0JyxcbiAgICAnSSAtIFBNIEJFVElNJzogJzYwMTM5JyxcbiAgICAnRyAtIEdPViBNQVJBTkhBTyBDQVJUQU8gQkVORUZJQ0lPJzogJzU5MTM2JyxcbiAgICAnRyAtIEdPViBNRyAtIEdFUkFMJzogJzU1NjkxJyxcbiAgICAnRyAtIEdPViBQRSc6ICc1MTM3MCcsXG4gICAgJ0cgLSBNVCBHUk9TU08gRE8gU1VMIEdFUkFMJzogJzUwOTQzJyxcbiAgICAnRyAtIFNBUVVFIENPTVBMRU1FTlRBUiBEQVlDT1ZBTCBBQ0lNQSAxMDAwJzogJzUwMDA4JyxcbiAgICAnRyAtIFJFRklOIFNBTlRBTkRFUiB8IFJFRFXDh8ODTyBUQVhBIHwgUFVCTElDT1MnOiAnNDUxNjknLFxuICAgICdHIC0gU0FRVUUgQ09NUExFTUVOVEFSIEJBTkNPIE1BU1RFUiBBVFVBTElaQURPJzogJzQxOTc1JyxcbiAgICAnRyAtIENPTUxVUkIgU0FOVCc6ICc0MTAwMCcsXG4gICAgJ0cgLSBSRUZJTiBTQU5UQU5ERVIgVU5JRklDQURBJzogJzM4MjQ3JyxcbiAgICAnRyAtIEdPViBTQU5UQSBDQVRBUklOQSc6ICczNzExNCcsXG4gICAgJ0cgLSBHT1YgUkogQ09SUkVOVElTVEFTJzogJzM1OTk0JyxcbiAgICAnRyAtIE9TQVNDTyc6ICczMzI3MCcsXG4gICAgJ0cgLSA1MCArIFZFTkRJRE9TIE1BUkdFTSBPTkxJTkUnOiAnMzMyNjMnLFxuICB9KTtcblxuIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbYmFzZURhdGEsIHNldEJhc2VEYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgICBjb25zdCBbZXhwYW5kZWRCYXNlLCBzZXRFeHBhbmRlZEJhc2VdID0gdXNlU3RhdGUobnVsbCk7IC8vIEVzdGFkbyBwYXJhIGNvbnRyb2xhciBhIGRpdiBleHBhbmRpZGFcbiAgICBjb25zdCBbY2FtcGFuaGFzQ29tQXZpc28sIHNldENhbXBhbmhhc0NvbUF2aXNvXSA9IHVzZVN0YXRlKFtdKTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBuZXdEYXRhID0ge307XG5cbiAgICAgICAgZm9yIChjb25zdCBiYXNlTmFtZSBpbiBiYXNlcykge1xuICAgICAgICAgIGNvbnN0IGlkID0gYmFzZXNbYmFzZU5hbWVdO1xuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovLzNjLmZsdXhvdGkuY29tL2FwaS92MS9jYW1wYWlnbnMvJHtpZH0vbGlzdHM/YXBpX3Rva2VuPWQwTkxDcFRudnRzWTFnUXU3UzM4UnlGNDdmT2puSGtueW5Cakd6V3hDd3BYT0pxWGFOd1dEckdxRm9tcWApO1xuICAgICAgICAgIGNvbnN0IGZpbHRlcmVkRGF0YSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5maWx0ZXIoKHBvc3QpID0+IHBvc3Qud2VpZ2h0ID09PSAxKTtcbiAgICAgICAgICBuZXdEYXRhW2lkXSA9IGZpbHRlcmVkRGF0YTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRlbVBvcmNlbnRhZ2VtTWFpb3JRdWU5MCA9IGZpbHRlcmVkRGF0YS5zb21lKChwb3N0KSA9PiBwYXJzZUZsb2F0KHBvc3QuY29tcGxldGVkX3BlcmNlbnRhZ2UpID4gOTApO1xuICAgICAgICBpZiAodGVtUG9yY2VudGFnZW1NYWlvclF1ZTkwKSB7XG4gICAgICAgICAgY2FtcGFuaGFzQ29tQXZpc28ucHVzaChpZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgc2V0Q2FtcGFuaGFzQ29tQXZpc28oY2FtcGFuaGFzQ29tQXZpc28pO1xuICAgICAgICBzZXRCYXNlRGF0YShuZXdEYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvIGFvIGJ1c2NhciBvcyBkYWRvczonLCBlcnJvcik7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZldGNoRGF0YSgpO1xuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZmV0Y2hEYXRhLCA1ICogMSAqIDEwMDApOyAvLyBSZWNhcnJlZ2EgYSBjYWRhIDYwIG1pbnV0b3NcblxuICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGludGVydmFsKTsgLy8gTGltcGEgbyB0ZW1wb3JpemFkb3IgcXVhbmRvIG8gY29tcG9uZW50ZSDDqSBkZXNtb250YWRvICAgXG5cbiAgfSwgW2Jhc2VzXSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyUG9yY2VudGFnZW0ocG9yY2VudGFnZW0pIHtcbiAgICBjb25zdCBwb3JjZW50YWdlbU51bSA9IHBhcnNlRmxvYXQocG9yY2VudGFnZW0pO1xuXG4gICAgaWYgKHBvcmNlbnRhZ2VtTnVtID09PSAxMDApIHtcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJwb3JjZW50YWdlbS1henVsXCI+e3BvcmNlbnRhZ2VtfTwvc3Bhbj47XG4gICAgfSBlbHNlIGlmIChwb3JjZW50YWdlbU51bSA+PSA5MCAmJiBwb3JjZW50YWdlbU51bSA8PSA5OS45OSkge1xuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInBvcmNlbnRhZ2VtLXZlcm1lbGhhXCI+e3BvcmNlbnRhZ2VtfTwvc3Bhbj47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJwb3JjZW50YWdlbS12ZXJkZVwiPntwb3JjZW50YWdlbX08L3NwYW4+O1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRGV0YWlscyhpZDogc3RyaW5nKSB7XG4gICAgaWYgKGV4cGFuZGVkQmFzZSA9PT0gaWQpIHtcbiAgICAgIHNldEV4cGFuZGVkQmFzZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXhwYW5kZWRCYXNlKGlkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkQ29udGVudD5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUnPlxuICAgICAgPGgxPkNBTVBBTkhBUzwvaDE+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPHA+Q2FycmVnYW5kby4uLjwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmluY2lwYWxDb250ZW50Jz5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoYmFzZXMpLm1hcCgoYmFzZU5hbWUpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtiYXNlTmFtZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2FtcGFpZ24tY2FyZCR7ZXhwYW5kZWRCYXNlID09PSBiYXNlc1tiYXNlTmFtZV0gPyAnIGNsaWNrZWQnIDogJyd9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGV0YWlscyhiYXNlc1tiYXNlTmFtZV0pfVxuICAgICAgICAgICAgICA+XG4gICAgPGRpdiBjbGFzc05hbWU9e2BiYXNlICR7Y2FtcGFuaGFzQ29tQXZpc28uaW5jbHVkZXMoYmFzZXNbYmFzZU5hbWVdKSA/ICdjb20tYXZpc28nIDogJyd9YH0+e2Jhc2VOYW1lfTwvZGl2PlxuICAgICAgICAgICAgICB7ZXhwYW5kZWRCYXNlID09PSBiYXNlc1tiYXNlTmFtZV0gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FtcGFpZ24tcGVyY2VudGFnZXNcIj5cbiAgICAgICAgICAgICAgICAgIHtiYXNlRGF0YVtiYXNlc1tiYXNlTmFtZV1dPy5tYXAoKHBvc3Q6IGFueSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8Q29udGFpbmVyIGtleT17cG9zdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHBlcmNlbnRhZ2UtaXRlbSAke1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlRmxvYXQocG9zdC5jb21wbGV0ZWRfcGVyY2VudGFnZSkgPiA5MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2NvbS1hdmlzbycgLy8gQWRpY2lvbmEgdW1hIGNsYXNzZSBcImNvbS1hdmlzb1wiIHNlIGEgcG9yY2VudGFnZW0gZm9yIG1haW9yIHF1ZSA5MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57cG9zdC5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC5jcmVhdGVkX2F0fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e2Bwb3JjZW50YWdlbS0ke3Bvc3QuY29tcGxldGVkX3BlcmNlbnRhZ2UgPT09ICcxMDAuMDAnID8gJ3ZlcmRlJyA6ICd2ZXJtZWxoYSd9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJQb3JjZW50YWdlbSgocG9zdC5jb21wbGV0ZWRfcGVyY2VudGFnZSkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgPC9DYXJkQ29udGVudD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})