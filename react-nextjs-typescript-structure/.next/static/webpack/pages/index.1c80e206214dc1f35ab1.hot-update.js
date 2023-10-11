webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n\n\nvar _this = undefined,\n  _jsxFileName = \"/workspace/3CDisc-API/react-nextjs-typescript-structure/src/pages/index.tsx\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar Home = function Home() {\n  _s();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n      'G - FGTS': '29870',\n      'C e M - INSS PORTABILIDADE ATUALIZADA FILE': '78025',\n      'M - UNIFICADA GRUPO SP - GOV/PME/SPPREV': '80797',\n      'G - INSS PORTABILIDADE': '69098',\n      'C - BASE FILE PORT INBURSA/CREFISA': '83106',\n      'I - TJSP': '62048',\n      'C e M - INBURSA PORTANDO D+ BANCOS PARA: ACIMA DE 500': '83752',\n      'G - PMESP AUMENTO 20%': '70014',\n      'M - GOV MT GERAL': '70967',\n      'C - INSS PORTABILIDADE INBURSA': '80802',\n      'G - PMSP - PREMIUM': '80801',\n      'M - SANTOS': '82286',\n      'I - BANCO MASTER SAQUE COMPL SEFAZ': '54283',\n      'G - PMSP AUMENTO 5%': '70015',\n      'G - OPORTUNIDADE INSS BANCO MASTER': '30730',\n      'C - INSS PORTABILIDADE CREFISA': '80803',\n      'S - UNIFICADA GRUPO SP - GOV/PME/SPPREV': '80798',\n      'I - PREF CURITIBA': '80595',\n      'M - GOV PARANA SAQUE COMPLEMENTAR MASTER': '79162',\n      'G - MARGEM REAL CARTÃO BENEFÍCIO MCC GOVSP': '70034',\n      'I - PM BETIM': '60139',\n      'G - GOV MARANHAO CARTAO BENEFICIO': '59136',\n      'G - GOV MG - GERAL': '55691',\n      'G - GOV PE': '51370',\n      'G - MT GROSSO DO SUL GERAL': '50943',\n      'G - SAQUE COMPLEMENTAR DAYCOVAL ACIMA 1000': '50008',\n      'G - REFIN SANTANDER | REDUÇÃO TAXA | PUBLICOS': '45169',\n      'G - SAQUE COMPLEMENTAR BANCO MASTER ATUALIZADO': '41975',\n      'G - COMLURB SANT': '41000',\n      'G - REFIN SANTANDER UNIFICADA': '38247',\n      'G - GOV SANTA CATARINA': '37114',\n      'G - GOV RJ CORRENTISTAS': '35994',\n      'G - OSASCO': '33270',\n      'G - 50 + VENDIDOS MARGEM ONLINE': '33263'\n    }),\n    bases = _useState[0];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n    loading = _useState2[0],\n    setLoading = _useState2[1];\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n    baseData = _useState3[0],\n    setBaseData = _useState3[1];\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n    expandedBase = _useState4[0],\n    setExpandedBase = _useState4[1]; // Estado para controlar a div expandida\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n    campanhasComAviso = _useState5[0],\n    setCampanhasComAviso = _useState5[1];\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function fetchData() {\n      return _fetchData.apply(this, arguments);\n    }\n    function _fetchData() {\n      _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var newData, baseName, id, response, filteredData, temPorcentagemMaiorQue90;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                newData = {};\n                _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(bases);\n              case 3:\n                if ((_context.t1 = _context.t0()).done) {\n                  _context.next = 15;\n                  break;\n                }\n                baseName = _context.t1.value;\n                id = bases[baseName];\n                _context.next = 8;\n                return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://3c.fluxoti.com/api/v1/campaigns/\".concat(id, \"/lists?api_token=d0NLCpTnvtsY1gQu7S38RyF47fOjnHknynBjGzWxCwpXOJqXaNwWDrGqFomq\"));\n              case 8:\n                response = _context.sent;\n                filteredData = response.data.data.filter(function (post) {\n                  return post.weight === 1;\n                });\n                newData[id] = filteredData;\n                temPorcentagemMaiorQue90 = filteredData.some(function (post) {\n                  return parseFloat(post.completed_percentage) > 90;\n                });\n                if (temPorcentagemMaiorQue90) {\n                  campanhasComAviso.push(id);\n                }\n                _context.next = 3;\n                break;\n              case 15:\n                setCampanhasComAviso(campanhasComAviso);\n                setBaseData(newData);\n                setLoading(false);\n                _context.next = 24;\n                break;\n              case 20:\n                _context.prev = 20;\n                _context.t2 = _context[\"catch\"](0);\n                console.error('Erro ao buscar os dados:', _context.t2);\n                setLoading(false);\n              case 24:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 20]]);\n      }));\n      return _fetchData.apply(this, arguments);\n    }\n    fetchData();\n    var interval = setInterval(fetchData, 5 * 1 * 1000); // Recarrega a cada 60 minutos\n\n    return function () {\n      return clearInterval(interval);\n    }; // Limpa o temporizador quando o componente é desmontado   \n  }, [bases]);\n  function renderPorcentagem(porcentagem) {\n    var porcentagemNum = parseFloat(porcentagem);\n    if (porcentagemNum === 100) {\n      var porcentagemFormatada = porcentagemNum.toFixed(0);\n      return __jsx(\"span\", {\n        className: \"porcentagem-azul\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 14\n        }\n      }, porcentagemFormatada, \"%\");\n    } else if (porcentagemNum >= 90 && porcentagemNum <= 99.99) {\n      var _porcentagemFormatada = porcentagemNum.toFixed(0);\n      return __jsx(\"span\", {\n        className: \"porcentagem-vermelha\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 91,\n          columnNumber: 14\n        }\n      }, _porcentagemFormatada, \"%\");\n    } else {\n      var _porcentagemFormatada2 = porcentagemNum.toFixed(0);\n      return __jsx(\"span\", {\n        className: \"porcentagem-verde\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 95,\n          columnNumber: 14\n        }\n      }, _porcentagemFormatada2, \"%\");\n    }\n  }\n  function toggleDetails(id) {\n    if (expandedBase === id) {\n      setExpandedBase(null);\n    } else {\n      setExpandedBase(id);\n    }\n  }\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }\n  }, \"CAMPANHAS\"), loading ? __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 113,\n      columnNumber: 9\n    }\n  }, \"Carregando...\") : __jsx(\"div\", {\n    className: \"principalContent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 115,\n      columnNumber: 9\n    }\n  }, Object.keys(bases).map(function (baseName) {\n    var _baseData$bases$baseN;\n    return __jsx(\"div\", {\n      key: baseName,\n      className: \"campaign-card\".concat(expandedBase === bases[baseName] ? ' clicked' : ''),\n      onClick: function onClick() {\n        return toggleDetails(bases[baseName]);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"base \".concat(campanhasComAviso.includes(bases[baseName]) ? 'com-aviso' : ''),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 122,\n        columnNumber: 5\n      }\n    }, baseName), expandedBase === bases[baseName] && __jsx(\"div\", {\n      className: \"campaign-percentages\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 17\n      }\n    }, (_baseData$bases$baseN = baseData[bases[baseName]]) === null || _baseData$bases$baseN === void 0 ? void 0 : _baseData$bases$baseN.map(function (post) {\n      return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n        key: post.id,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 126,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        className: \"percentage-item \".concat(parseFloat(post.completed_percentage) > 90 ? 'com-aviso' // Adiciona uma classe \"com-aviso\" se a porcentagem for maior que 90\n        : ''),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 22\n        }\n      }, __jsx(\"h3\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 25\n        }\n      }, post.name), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 135,\n          columnNumber: 25\n        }\n      }, post.created_at), __jsx(\"h3\", {\n        className: \"porcentagem-\".concat(post.completed_percentage === '100.00' ? 'verde' : 'vermelha'),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 136,\n          columnNumber: 25\n        }\n      }, renderPorcentagem(post.completed_percentage))));\n    })));\n  }))));\n};\n_s(Home, \"ShZK+FWGcGuerxE6uNcDN7gB1iA=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJfcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiYmFzZXMiLCJfdXNlU3RhdGUyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUzIiwiYmFzZURhdGEiLCJzZXRCYXNlRGF0YSIsIl91c2VTdGF0ZTQiLCJleHBhbmRlZEJhc2UiLCJzZXRFeHBhbmRlZEJhc2UiLCJfdXNlU3RhdGU1IiwiY2FtcGFuaGFzQ29tQXZpc28iLCJzZXRDYW1wYW5oYXNDb21BdmlzbyIsInVzZUVmZmVjdCIsImZldGNoRGF0YSIsIl9mZXRjaERhdGEiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwibmV3RGF0YSIsImJhc2VOYW1lIiwiaWQiLCJyZXNwb25zZSIsImZpbHRlcmVkRGF0YSIsInRlbVBvcmNlbnRhZ2VtTWFpb3JRdWU5MCIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJ0MCIsImtleXMiLCJ0MSIsImRvbmUiLCJ2YWx1ZSIsImF4aW9zIiwiZ2V0IiwiY29uY2F0Iiwic2VudCIsImRhdGEiLCJmaWx0ZXIiLCJwb3N0Iiwid2VpZ2h0Iiwic29tZSIsInBhcnNlRmxvYXQiLCJjb21wbGV0ZWRfcGVyY2VudGFnZSIsInB1c2giLCJ0MiIsImNvbnNvbGUiLCJlcnJvciIsInN0b3AiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsInJlbmRlclBvcmNlbnRhZ2VtIiwicG9yY2VudGFnZW0iLCJwb3JjZW50YWdlbU51bSIsInBvcmNlbnRhZ2VtRm9ybWF0YWRhIiwidG9GaXhlZCIsIl9fanN4IiwiY2xhc3NOYW1lIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJ0b2dnbGVEZXRhaWxzIiwiQ2FyZENvbnRlbnQiLCJfdGhpcyIsIk9iamVjdCIsIm1hcCIsIl9iYXNlRGF0YSRiYXNlcyRiYXNlTiIsImtleSIsIm9uQ2xpY2siLCJpbmNsdWRlcyIsIkNvbnRhaW5lciIsIm5hbWUiLCJjcmVhdGVkX2F0IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ3pCO0FBQ29DO0FBRTlELElBQU1BLElBQWMsR0FBRyxTQUFqQkEsSUFBY0EsQ0FBQSxFQUFTO0VBQUFDLEVBQUE7RUFBQSxJQUFBQyxTQUFBLEdBQ1hDLHNEQUFRLENBQUM7TUFDdkIsVUFBVSxFQUFFLE9BQU87TUFDbkIsNENBQTRDLEVBQUUsT0FBTztNQUNyRCx5Q0FBeUMsRUFBRSxPQUFPO01BQ2xELHdCQUF3QixFQUFFLE9BQU87TUFDakMsb0NBQW9DLEVBQUUsT0FBTztNQUM3QyxVQUFVLEVBQUUsT0FBTztNQUNuQix1REFBdUQsRUFBRSxPQUFPO01BQ2hFLHVCQUF1QixFQUFFLE9BQU87TUFDaEMsa0JBQWtCLEVBQUUsT0FBTztNQUMzQixnQ0FBZ0MsRUFBRSxPQUFPO01BQ3pDLG9CQUFvQixFQUFFLE9BQU87TUFDN0IsWUFBWSxFQUFFLE9BQU87TUFDckIsb0NBQW9DLEVBQUUsT0FBTztNQUM3QyxxQkFBcUIsRUFBRSxPQUFPO01BQzlCLG9DQUFvQyxFQUFFLE9BQU87TUFDN0MsZ0NBQWdDLEVBQUUsT0FBTztNQUN6Qyx5Q0FBeUMsRUFBRSxPQUFPO01BQ2xELG1CQUFtQixFQUFFLE9BQU87TUFDNUIsMENBQTBDLEVBQUUsT0FBTztNQUNuRCw0Q0FBNEMsRUFBRSxPQUFPO01BQ3JELGNBQWMsRUFBRSxPQUFPO01BQ3ZCLG1DQUFtQyxFQUFFLE9BQU87TUFDNUMsb0JBQW9CLEVBQUUsT0FBTztNQUM3QixZQUFZLEVBQUUsT0FBTztNQUNyQiw0QkFBNEIsRUFBRSxPQUFPO01BQ3JDLDRDQUE0QyxFQUFF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LEdBQUl6QixJQUFJLENBQUNxQyxVQUFjLENBQUMsRUFDeEJuQixLQUFBO1FBQUlDLFNBQVMsaUJBQUF2QixNQUFBLENBQWlCSSxJQUFJLENBQUNJLG9CQUFvQixLQUFLLFFBQVEsR0FBRyxPQUFPLEdBQUcsVUFBVSxDQUFHO1FBQUFnQixNQUFBLEVBQUFRLEtBQUE7UUFBQVAsUUFBQTtVQUFBQyxRQUFBLEVBQUFDLFlBQUE7VUFBQUMsVUFBQTtVQUFBQyxZQUFBO1FBQUE7TUFBQSxHQUM5RlosaUJBQWlCLENBQUViLElBQUksQ0FBQ0ksb0JBQXFCLENBQ3pDLENBQ0QsQ0FDSSxDQUFDO0lBQUEsQ0FDYixDQUNFLENBRUosQ0FBQztFQUFBLENBQ1AsQ0FDRSxDQUVGLENBQ0ksQ0FBQztBQUVoQixDQUFDO0FBQUNuRCxFQUFBLENBbEpJRCxJQUFjO0FBQUFzRixFQUFBLEdBQWR0RixJQUFjO0FBb0pMQSxtRUFBSSxFQUFDO0FBQUEsSUFBQXNGLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IENvbnRhaW5lciwgQ2FyZENvbnRlbnQgfSBmcm9tICcuLi9zdHlsZXMvcGFnZXMvSG9tZSc7XG5cbmNvbnN0IEhvbWU6IFJlYWN0LkZDID0gKCkgPT4ge1xuICBjb25zdCBbYmFzZXNdID0gdXNlU3RhdGUoe1xuICAgICdHIC0gRkdUUyc6ICcyOTg3MCcsXG4gICAgJ0MgZSBNIC0gSU5TUyBQT1JUQUJJTElEQURFIEFUVUFMSVpBREEgRklMRSc6ICc3ODAyNScsXG4gICAgJ00gLSBVTklGSUNBREEgR1JVUE8gU1AgLSBHT1YvUE1FL1NQUFJFVic6ICc4MDc5NycsXG4gICAgJ0cgLSBJTlNTIFBPUlRBQklMSURBREUnOiAnNjkwOTgnLFxuICAgICdDIC0gQkFTRSBGSUxFIFBPUlQgSU5CVVJTQS9DUkVGSVNBJzogJzgzMTA2JyxcbiAgICAnSSAtIFRKU1AnOiAnNjIwNDgnLFxuICAgICdDIGUgTSAtIElOQlVSU0EgUE9SVEFORE8gRCsgQkFOQ09TIFBBUkE6IEFDSU1BIERFIDUwMCc6ICc4Mzc1MicsXG4gICAgJ0cgLSBQTUVTUCBBVU1FTlRPIDIwJSc6ICc3MDAxNCcsXG4gICAgJ00gLSBHT1YgTVQgR0VSQUwnOiAnNzA5NjcnLFxuICAgICdDIC0gSU5TUyBQT1JUQUJJTElEQURFIElOQlVSU0EnOiAnODA4MDInLFxuICAgICdHIC0gUE1TUCAtIFBSRU1JVU0nOiAnODA4MDEnLFxuICAgICdNIC0gU0FOVE9TJzogJzgyMjg2JyxcbiAgICAnSSAtIEJBTkNPIE1BU1RFUiBTQVFVRSBDT01QTCBTRUZBWic6ICc1NDI4MycsXG4gICAgJ0cgLSBQTVNQIEFVTUVOVE8gNSUnOiAnNzAwMTUnLFxuICAgICdHIC0gT1BPUlRVTklEQURFIElOU1MgQkFOQ08gTUFTVEVSJzogJzMwNzMwJyxcbiAgICAnQyAtIElOU1MgUE9SVEFCSUxJREFERSBDUkVGSVNBJzogJzgwODAzJyxcbiAgICAnUyAtIFVOSUZJQ0FEQSBHUlVQTyBTUCAtIEdPVi9QTUUvU1BQUkVWJzogJzgwNzk4JyxcbiAgICAnSSAtIFBSRUYgQ1VSSVRJQkEnOiAnODA1OTUnLFxuICAgICdNIC0gR09WIFBBUkFOQSBTQVFVRSBDT01QTEVNRU5UQVIgTUFTVEVSJzogJzc5MTYyJyxcbiAgICAnRyAtIE1BUkdFTSBSRUFMIENBUlTDg08gQkVORUbDjUNJTyBNQ0MgR09WU1AnOiAnNzAwMzQnLFxuICAgICdJIC0gUE0gQkVUSU0nOiAnNjAxMzknLFxuICAgICdHIC0gR09WIE1BUkFOSEFPIENBUlRBTyBCRU5FRklDSU8nOiAnNTkxMzYnLFxuICAgICdHIC0gR09WIE1HIC0gR0VSQUwnOiAnNTU2OTEnLFxuICAgICdHIC0gR09WIFBFJzogJzUxMzcwJyxcbiAgICAnRyAtIE1UIEdST1NTTyBETyBTVUwgR0VSQUwnOiAnNTA5NDMnLFxuICAgICdHIC0gU0FRVUUgQ09NUExFTUVOVEFSIERBWUNPVkFMIEFDSU1BIDEwMDAnOiAnNTAwMDgnLFxuICAgICdHIC0gUkVGSU4gU0FOVEFOREVSIHwgUkVEVcOHw4NPIFRBWEEgfCBQVUJMSUNPUyc6ICc0NTE2OScsXG4gICAgJ0cgLSBTQVFVRSBDT01QTEVNRU5UQVIgQkFOQ08gTUFTVEVSIEFUVUFMSVpBRE8nOiAnNDE5NzUnLFxuICAgICdHIC0gQ09NTFVSQiBTQU5UJzogJzQxMDAwJyxcbiAgICAnRyAtIFJFRklOIFNBTlRBTkRFUiBVTklGSUNBREEnOiAnMzgyNDcnLFxuICAgICdHIC0gR09WIFNBTlRBIENBVEFSSU5BJzogJzM3MTE0JyxcbiAgICAnRyAtIEdPViBSSiBDT1JSRU5USVNUQVMnOiAnMzU5OTQnLFxuICAgICdHIC0gT1NBU0NPJzogJzMzMjcwJyxcbiAgICAnRyAtIDUwICsgVkVORElET1MgTUFSR0VNIE9OTElORSc6ICczMzI2MycsXG4gIH0pO1xuXG4gY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtiYXNlRGF0YSwgc2V0QmFzZURhdGFdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtleHBhbmRlZEJhc2UsIHNldEV4cGFuZGVkQmFzZV0gPSB1c2VTdGF0ZShudWxsKTsgLy8gRXN0YWRvIHBhcmEgY29udHJvbGFyIGEgZGl2IGV4cGFuZGlkYVxuICAgIGNvbnN0IFtjYW1wYW5oYXNDb21Bdmlzbywgc2V0Q2FtcGFuaGFzQ29tQXZpc29dID0gdXNlU3RhdGUoW10pO1xuXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGJhc2VOYW1lIGluIGJhc2VzKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBiYXNlc1tiYXNlTmFtZV07XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vM2MuZmx1eG90aS5jb20vYXBpL3YxL2NhbXBhaWducy8ke2lkfS9saXN0cz9hcGlfdG9rZW49ZDBOTENwVG52dHNZMWdRdTdTMzhSeUY0N2ZPam5Ia255bkJqR3pXeEN3cFhPSnFYYU53V0RyR3FGb21xYCk7XG4gICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhLmZpbHRlcigocG9zdCkgPT4gcG9zdC53ZWlnaHQgPT09IDEpO1xuICAgICAgICAgIG5ld0RhdGFbaWRdID0gZmlsdGVyZWREYXRhO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdGVtUG9yY2VudGFnZW1NYWlvclF1ZTkwID0gZmlsdGVyZWREYXRhLnNvbWUoKHBvc3QpID0+IHBhcnNlRmxvYXQocG9zdC5jb21wbGV0ZWRfcGVyY2VudGFnZSkgPiA5MCk7XG4gICAgICAgIGlmICh0ZW1Qb3JjZW50YWdlbU1haW9yUXVlOTApIHtcbiAgICAgICAgICBjYW1wYW5oYXNDb21Bdmlzby5wdXNoKGlkKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZXRDYW1wYW5oYXNDb21BdmlzbyhjYW1wYW5oYXNDb21Bdmlzbyk7XG4gICAgICAgIHNldEJhc2VEYXRhKG5ld0RhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm8gYW8gYnVzY2FyIG9zIGRhZG9zOicsIGVycm9yKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZmV0Y2hEYXRhKCk7XG4gICAgY29uc3QgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmZXRjaERhdGEsIDUgKiAxICogMTAwMCk7IC8vIFJlY2FycmVnYSBhIGNhZGEgNjAgbWludXRvc1xuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpOyAvLyBMaW1wYSBvIHRlbXBvcml6YWRvciBxdWFuZG8gbyBjb21wb25lbnRlIMOpIGRlc21vbnRhZG8gICBcblxuICB9LCBbYmFzZXNdKTtcblxuICBmdW5jdGlvbiByZW5kZXJQb3JjZW50YWdlbShwb3JjZW50YWdlbSkge1xuICAgIGNvbnN0IHBvcmNlbnRhZ2VtTnVtID0gcGFyc2VGbG9hdChwb3JjZW50YWdlbSk7XG5cbiAgICBpZiAocG9yY2VudGFnZW1OdW0gPT09IDEwMCkge1xuICAgICAgY29uc3QgcG9yY2VudGFnZW1Gb3JtYXRhZGEgPSBwb3JjZW50YWdlbU51bS50b0ZpeGVkKDApO1xuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInBvcmNlbnRhZ2VtLWF6dWxcIj57cG9yY2VudGFnZW1Gb3JtYXRhZGF9JTwvc3Bhbj47XG4gICAgfSBlbHNlIGlmIChwb3JjZW50YWdlbU51bSA+PSA5MCAmJiBwb3JjZW50YWdlbU51bSA8PSA5OS45OSkge1xuICAgICAgY29uc3QgcG9yY2VudGFnZW1Gb3JtYXRhZGEgPSBwb3JjZW50YWdlbU51bS50b0ZpeGVkKDApO1xuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInBvcmNlbnRhZ2VtLXZlcm1lbGhhXCI+e3BvcmNlbnRhZ2VtRm9ybWF0YWRhfSU8L3NwYW4+O1xuICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBwb3JjZW50YWdlbUZvcm1hdGFkYSA9IHBvcmNlbnRhZ2VtTnVtLnRvRml4ZWQoMCk7XG5cbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJwb3JjZW50YWdlbS12ZXJkZVwiPntwb3JjZW50YWdlbUZvcm1hdGFkYX0lPC9zcGFuPjtcbiAgICB9XG4gIH1cblxuXG4gIGZ1bmN0aW9uIHRvZ2dsZURldGFpbHMoaWQ6IHN0cmluZykge1xuICAgIGlmIChleHBhbmRlZEJhc2UgPT09IGlkKSB7XG4gICAgICBzZXRFeHBhbmRlZEJhc2UobnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldEV4cGFuZGVkQmFzZShpZCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZENvbnRlbnQ+XG4gICAgPGRpdiBjbGFzc05hbWU9J3RpdGxlJz5cbiAgICAgIDxoMT5DQU1QQU5IQVM8L2gxPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxwPkNhcnJlZ2FuZG8uLi48L3A+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncHJpbmNpcGFsQ29udGVudCc+XG4gICAgICAgICAge09iamVjdC5rZXlzKGJhc2VzKS5tYXAoKGJhc2VOYW1lKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17YmFzZU5hbWV9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNhbXBhaWduLWNhcmQke2V4cGFuZGVkQmFzZSA9PT0gYmFzZXNbYmFzZU5hbWVdID8gJyBjbGlja2VkJyA6ICcnfWB9XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZURldGFpbHMoYmFzZXNbYmFzZU5hbWVdKX1cbiAgICAgICAgICAgICAgPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYmFzZSAke2NhbXBhbmhhc0NvbUF2aXNvLmluY2x1ZGVzKGJhc2VzW2Jhc2VOYW1lXSkgPyAnY29tLWF2aXNvJyA6ICcnfWB9PntiYXNlTmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAge2V4cGFuZGVkQmFzZSA9PT0gYmFzZXNbYmFzZU5hbWVdICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhbXBhaWduLXBlcmNlbnRhZ2VzXCI+XG4gICAgICAgICAgICAgICAgICB7YmFzZURhdGFbYmFzZXNbYmFzZU5hbWVdXT8ubWFwKChwb3N0OiBhbnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPENvbnRhaW5lciBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BwZXJjZW50YWdlLWl0ZW0gJHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJzZUZsb2F0KHBvc3QuY29tcGxldGVkX3BlcmNlbnRhZ2UpID4gOTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdjb20tYXZpc28nIC8vIEFkaWNpb25hIHVtYSBjbGFzc2UgXCJjb20tYXZpc29cIiBzZSBhIHBvcmNlbnRhZ2VtIGZvciBtYWlvciBxdWUgOTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Bvc3QubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuY3JlYXRlZF9hdH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgcG9yY2VudGFnZW0tJHtwb3N0LmNvbXBsZXRlZF9wZXJjZW50YWdlID09PSAnMTAwLjAwJyA/ICd2ZXJkZScgOiAndmVybWVsaGEnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUG9yY2VudGFnZW0oKHBvc3QuY29tcGxldGVkX3BlcmNlbnRhZ2UpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPC9kaXY+XG4gIDwvQ2FyZENvbnRlbnQ+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuXG5cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})