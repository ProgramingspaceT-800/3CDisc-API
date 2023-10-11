webpackHotUpdate_N_E("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/pages/Home */ \"./src/styles/pages/Home.ts\");\n\n\nvar _this = undefined,\n  _jsxFileName = \"/workspace/3CDisc-API/react-nextjs-typescript-structure/src/pages/index.tsx\",\n  _s = $RefreshSig$();\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar Home = function Home() {\n  _s();\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({\n      'G - FGTS': '29870',\n      'C e M - INSS PORTABILIDADE ATUALIZADA FILE': '78025',\n      'M - UNIFICADA GRUPO SP - GOV/PME/SPPREV': '80797',\n      'G - INSS PORTABILIDADE': '69098',\n      'C - BASE FILE PORT INBURSA/CREFISA': '83106',\n      'I - TJSP': '62048',\n      'C e M - INBURSA PORTANDO D+ BANCOS PARA: ACIMA DE 500': '83752',\n      'G - PMESP AUMENTO 20%': '70014',\n      'M - GOV MT GERAL': '70967',\n      'C - INSS PORTABILIDADE INBURSA': '80802',\n      'G - PMSP - PREMIUM': '80801',\n      'M - SANTOS': '82286',\n      'I - BANCO MASTER SAQUE COMPL SEFAZ': '54283',\n      'G - PMSP AUMENTO 5%': '70015',\n      'G - OPORTUNIDADE INSS BANCO MASTER': '30730',\n      'C - INSS PORTABILIDADE CREFISA': '80803',\n      'S - UNIFICADA GRUPO SP - GOV/PME/SPPREV': '80798',\n      'I - PREF CURITIBA': '80595',\n      'M - GOV PARANA SAQUE COMPLEMENTAR MASTER': '79162',\n      'G - MARGEM REAL CARTÃO BENEFÍCIO MCC GOVSP': '70034',\n      'I - PM BETIM': '60139',\n      'G - GOV MARANHAO CARTAO BENEFICIO': '59136',\n      'G - GOV MG - GERAL': '55691',\n      'G - GOV PE': '51370',\n      'G - MT GROSSO DO SUL GERAL': '50943',\n      'G - SAQUE COMPLEMENTAR DAYCOVAL ACIMA 1000': '50008',\n      'G - REFIN SANTANDER | REDUÇÃO TAXA | PUBLICOS': '45169',\n      'G - SAQUE COMPLEMENTAR BANCO MASTER ATUALIZADO': '41975',\n      'G - COMLURB SANT': '41000',\n      'G - REFIN SANTANDER UNIFICADA': '38247',\n      'G - GOV SANTA CATARINA': '37114',\n      'G - GOV RJ CORRENTISTAS': '35994',\n      'G - OSASCO': '33270',\n      'G - 50 + VENDIDOS MARGEM ONLINE': '33263'\n    }),\n    bases = _useState[0];\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n    loading = _useState2[0],\n    setLoading = _useState2[1];\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])({}),\n    baseData = _useState3[0],\n    setBaseData = _useState3[1];\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n    expandedBase = _useState4[0],\n    setExpandedBase = _useState4[1]; // Estado para controlar a div expandida\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    function fetchData() {\n      return _fetchData.apply(this, arguments);\n    }\n    function _fetchData() {\n      _fetchData = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var newData, baseName, id, response, filteredData;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.prev = 0;\n                newData = {};\n                _context.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.keys(bases);\n              case 3:\n                if ((_context.t1 = _context.t0()).done) {\n                  _context.next = 13;\n                  break;\n                }\n                baseName = _context.t1.value;\n                id = bases[baseName];\n                _context.next = 8;\n                return axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://3c.fluxoti.com/api/v1/campaigns/\".concat(id, \"/lists?api_token=d0NLCpTnvtsY1gQu7S38RyF47fOjnHknynBjGzWxCwpXOJqXaNwWDrGqFomq\"));\n              case 8:\n                response = _context.sent;\n                filteredData = response.data.data.filter(function (post) {\n                  return post.weight === 1;\n                });\n                newData[id] = filteredData;\n                _context.next = 3;\n                break;\n              case 13:\n                setBaseData(newData);\n                setLoading(false);\n                _context.next = 21;\n                break;\n              case 17:\n                _context.prev = 17;\n                _context.t2 = _context[\"catch\"](0);\n                console.error('Erro ao buscar os dados:', _context.t2);\n                setLoading(false);\n              case 21:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee, null, [[0, 17]]);\n      }));\n      return _fetchData.apply(this, arguments);\n    }\n    fetchData();\n  }, [bases]);\n  function renderPorcentagem(porcentagem) {\n    var porcentagemNum = parseFloat(porcentagem);\n    if (porcentagemNum === 100) {\n      return __jsx(\"span\", {\n        className: \"porcentagem-azul\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 75,\n          columnNumber: 14\n        }\n      }, porcentagem);\n    } else if (porcentagemNum >= 90 && porcentagemNum <= 99.99) {\n      return __jsx(\"span\", {\n        className: \"porcentagem-vermelha\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 14\n        }\n      }, porcentagem);\n    } else {\n      return __jsx(\"span\", {\n        className: \"porcentagem-verde\",\n        __self: this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 14\n        }\n      }, porcentagem);\n    }\n  }\n  function toggleDetails(id) {\n    if (expandedBase === id) {\n      setExpandedBase(null);\n    } else {\n      setExpandedBase(id);\n    }\n  }\n  return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"CardContent\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 5\n    }\n  }, __jsx(\"h1\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }\n  }, \"CAMPANHAS\"), loading ? __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 9\n    }\n  }, \"Carregando...\") : __jsx(\"div\", {\n    className: \"principalContent\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 99,\n      columnNumber: 9\n    }\n  }, Object.keys(bases).map(function (baseName) {\n    var _baseData$bases$baseN;\n    return __jsx(\"div\", {\n      key: baseName,\n      className: \"campaign-card\".concat(expandedBase === bases[baseName] ? ' clicked' : ''),\n      onClick: function onClick() {\n        return toggleDetails(bases[baseName]);\n      },\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"base\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 15\n      }\n    }, baseName), expandedBase === bases[baseName] && __jsx(\"div\", {\n      className: \"campaign-percentages\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 17\n      }\n    }, (_baseData$bases$baseN = baseData[bases[baseName]]) === null || _baseData$bases$baseN === void 0 ? void 0 : _baseData$bases$baseN.map(function (post) {\n      return __jsx(_styles_pages_Home__WEBPACK_IMPORTED_MODULE_4__[\"Container\"], {\n        key: post.id,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 110,\n          columnNumber: 21\n        }\n      }, __jsx(\"div\", {\n        className: \"percentage-item \".concat(parseFloat(post.completed_percentage) > 90 ? 'com-aviso' // Adiciona uma classe \"com-aviso\" se a porcentagem for maior que 90\n        : ''),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 111,\n          columnNumber: 22\n        }\n      }, __jsx(\"h3\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 25\n        }\n      }, post.name), __jsx(\"p\", {\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 25\n        }\n      }, post.created_at), __jsx(\"h3\", {\n        className: \"porcentagem-\".concat(post.completed_percentage === '100.00' ? 'verde' : 'vermelha'),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 120,\n          columnNumber: 25\n        }\n      }, renderPorcentagem(post.completed_percentage))));\n    })));\n  }))));\n};\n_s(Home, \"8IrU8cFG7LkcS/5MKKEJf6qw1iI=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD80MWUwIl0sIm5hbWVzIjpbIkhvbWUiLCJfcyIsIl91c2VTdGF0ZSIsInVzZVN0YXRlIiwiYmFzZXMiLCJfdXNlU3RhdGUyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJfdXNlU3RhdGUzIiwiYmFzZURhdGEiLCJzZXRCYXNlRGF0YSIsIl91c2VTdGF0ZTQiLCJleHBhbmRlZEJhc2UiLCJzZXRFeHBhbmRlZEJhc2UiLCJ1c2VFZmZlY3QiLCJmZXRjaERhdGEiLCJfZmV0Y2hEYXRhIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfYXN5bmNUb0dlbmVyYXRvciIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJtYXJrIiwiX2NhbGxlZSIsIm5ld0RhdGEiLCJiYXNlTmFtZSIsImlkIiwicmVzcG9uc2UiLCJmaWx0ZXJlZERhdGEiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwidDAiLCJrZXlzIiwidDEiLCJkb25lIiwidmFsdWUiLCJheGlvcyIsImdldCIsImNvbmNhdCIsInNlbnQiLCJkYXRhIiwiZmlsdGVyIiwicG9zdCIsIndlaWdodCIsInQyIiwiY29uc29sZSIsImVycm9yIiwic3RvcCIsInJlbmRlclBvcmNlbnRhZ2VtIiwicG9yY2VudGFnZW0iLCJwb3JjZW50YWdlbU51bSIsInBhcnNlRmxvYXQiLCJfX2pzeCIsImNsYXNzTmFtZSIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwidG9nZ2xlRGV0YWlscyIsIkNhcmRDb250ZW50IiwiX3RoaXMiLCJPYmplY3QiLCJtYXAiLCJfYmFzZURhdGEkYmFzZXMkYmFzZU4iLCJrZXkiLCJvbkNsaWNrIiwiQ29udGFpbmVyIiwiY29tcGxldGVkX3BlcmNlbnRhZ2UiLCJuYW1lIiwiY3JlYXRlZF9hdCIsIl9jIiwiJFJlZnJlc2hSZWck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MkIsb0JBQW9CLEtBQUssUUFBUSxHQUFHLE9BQU8sR0FBRyxVQUFVLENBQUc7UUFBQWYsTUFBQSxFQUFBUSxLQUFBO1FBQUFQLFFBQUE7VUFBQUMsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBO01BQUEsR0FDOUZYLGlCQUFpQixDQUFFTixJQUFJLENBQUMyQixvQkFBcUIsQ0FDekMsQ0FDRCxDQUNJLENBQUM7SUFBQSxDQUNiLENBQ0UsQ0FFSixDQUFDO0VBQUEsQ0FDUCxDQUNFLENBRUosQ0FDTSxDQUFDO0FBRWhCLENBQUM7QUFBQ3RFLEVBQUEsQ0FsSUlELElBQWM7QUFBQTBFLEVBQUEsR0FBZDFFLElBQWM7QUFvSUxBLG1FQUFJLEVBQUM7QUFBQSxJQUFBMEUsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBDYXJkQ29udGVudCB9IGZyb20gJy4uL3N0eWxlcy9wYWdlcy9Ib21lJztcblxuY29uc3QgSG9tZTogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIGNvbnN0IFtiYXNlc10gPSB1c2VTdGF0ZSh7XG4gICAgJ0cgLSBGR1RTJzogJzI5ODcwJyxcbiAgICAnQyBlIE0gLSBJTlNTIFBPUlRBQklMSURBREUgQVRVQUxJWkFEQSBGSUxFJzogJzc4MDI1JyxcbiAgICAnTSAtIFVOSUZJQ0FEQSBHUlVQTyBTUCAtIEdPVi9QTUUvU1BQUkVWJzogJzgwNzk3JyxcbiAgICAnRyAtIElOU1MgUE9SVEFCSUxJREFERSc6ICc2OTA5OCcsXG4gICAgJ0MgLSBCQVNFIEZJTEUgUE9SVCBJTkJVUlNBL0NSRUZJU0EnOiAnODMxMDYnLFxuICAgICdJIC0gVEpTUCc6ICc2MjA0OCcsXG4gICAgJ0MgZSBNIC0gSU5CVVJTQSBQT1JUQU5ETyBEKyBCQU5DT1MgUEFSQTogQUNJTUEgREUgNTAwJzogJzgzNzUyJyxcbiAgICAnRyAtIFBNRVNQIEFVTUVOVE8gMjAlJzogJzcwMDE0JyxcbiAgICAnTSAtIEdPViBNVCBHRVJBTCc6ICc3MDk2NycsXG4gICAgJ0MgLSBJTlNTIFBPUlRBQklMSURBREUgSU5CVVJTQSc6ICc4MDgwMicsXG4gICAgJ0cgLSBQTVNQIC0gUFJFTUlVTSc6ICc4MDgwMScsXG4gICAgJ00gLSBTQU5UT1MnOiAnODIyODYnLFxuICAgICdJIC0gQkFOQ08gTUFTVEVSIFNBUVVFIENPTVBMIFNFRkFaJzogJzU0MjgzJyxcbiAgICAnRyAtIFBNU1AgQVVNRU5UTyA1JSc6ICc3MDAxNScsXG4gICAgJ0cgLSBPUE9SVFVOSURBREUgSU5TUyBCQU5DTyBNQVNURVInOiAnMzA3MzAnLFxuICAgICdDIC0gSU5TUyBQT1JUQUJJTElEQURFIENSRUZJU0EnOiAnODA4MDMnLFxuICAgICdTIC0gVU5JRklDQURBIEdSVVBPIFNQIC0gR09WL1BNRS9TUFBSRVYnOiAnODA3OTgnLFxuICAgICdJIC0gUFJFRiBDVVJJVElCQSc6ICc4MDU5NScsXG4gICAgJ00gLSBHT1YgUEFSQU5BIFNBUVVFIENPTVBMRU1FTlRBUiBNQVNURVInOiAnNzkxNjInLFxuICAgICdHIC0gTUFSR0VNIFJFQUwgQ0FSVMODTyBCRU5FRsONQ0lPIE1DQyBHT1ZTUCc6ICc3MDAzNCcsXG4gICAgJ0kgLSBQTSBCRVRJTSc6ICc2MDEzOScsXG4gICAgJ0cgLSBHT1YgTUFSQU5IQU8gQ0FSVEFPIEJFTkVGSUNJTyc6ICc1OTEzNicsXG4gICAgJ0cgLSBHT1YgTUcgLSBHRVJBTCc6ICc1NTY5MScsXG4gICAgJ0cgLSBHT1YgUEUnOiAnNTEzNzAnLFxuICAgICdHIC0gTVQgR1JPU1NPIERPIFNVTCBHRVJBTCc6ICc1MDk0MycsXG4gICAgJ0cgLSBTQVFVRSBDT01QTEVNRU5UQVIgREFZQ09WQUwgQUNJTUEgMTAwMCc6ICc1MDAwOCcsXG4gICAgJ0cgLSBSRUZJTiBTQU5UQU5ERVIgfCBSRURVw4fDg08gVEFYQSB8IFBVQkxJQ09TJzogJzQ1MTY5JyxcbiAgICAnRyAtIFNBUVVFIENPTVBMRU1FTlRBUiBCQU5DTyBNQVNURVIgQVRVQUxJWkFETyc6ICc0MTk3NScsXG4gICAgJ0cgLSBDT01MVVJCIFNBTlQnOiAnNDEwMDAnLFxuICAgICdHIC0gUkVGSU4gU0FOVEFOREVSIFVOSUZJQ0FEQSc6ICczODI0NycsXG4gICAgJ0cgLSBHT1YgU0FOVEEgQ0FUQVJJTkEnOiAnMzcxMTQnLFxuICAgICdHIC0gR09WIFJKIENPUlJFTlRJU1RBUyc6ICczNTk5NCcsXG4gICAgJ0cgLSBPU0FTQ08nOiAnMzMyNzAnLFxuICAgICdHIC0gNTAgKyBWRU5ESURPUyBNQVJHRU0gT05MSU5FJzogJzMzMjYzJyxcbiAgfSk7XG5cbiBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Jhc2VEYXRhLCBzZXRCYXNlRGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gICAgY29uc3QgW2V4cGFuZGVkQmFzZSwgc2V0RXhwYW5kZWRCYXNlXSA9IHVzZVN0YXRlKG51bGwpOyAvLyBFc3RhZG8gcGFyYSBjb250cm9sYXIgYSBkaXYgZXhwYW5kaWRhXG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGZldGNoRGF0YSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7fTtcblxuICAgICAgICBmb3IgKGNvbnN0IGJhc2VOYW1lIGluIGJhc2VzKSB7XG4gICAgICAgICAgY29uc3QgaWQgPSBiYXNlc1tiYXNlTmFtZV07XG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHBzOi8vM2MuZmx1eG90aS5jb20vYXBpL3YxL2NhbXBhaWducy8ke2lkfS9saXN0cz9hcGlfdG9rZW49ZDBOTENwVG52dHNZMWdRdTdTMzhSeUY0N2ZPam5Ia255bkJqR3pXeEN3cFhPSnFYYU53V0RyR3FGb21xYCk7XG4gICAgICAgICAgY29uc3QgZmlsdGVyZWREYXRhID0gcmVzcG9uc2UuZGF0YS5kYXRhLmZpbHRlcigocG9zdCkgPT4gcG9zdC53ZWlnaHQgPT09IDEpO1xuICAgICAgICAgIG5ld0RhdGFbaWRdID0gZmlsdGVyZWREYXRhO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0QmFzZURhdGEobmV3RGF0YSk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJybyBhbyBidXNjYXIgb3MgZGFkb3M6JywgZXJyb3IpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW2Jhc2VzXSk7XG5cbiAgZnVuY3Rpb24gcmVuZGVyUG9yY2VudGFnZW0ocG9yY2VudGFnZW0pIHtcbiAgICBjb25zdCBwb3JjZW50YWdlbU51bSA9IHBhcnNlRmxvYXQocG9yY2VudGFnZW0pO1xuXG4gICAgaWYgKHBvcmNlbnRhZ2VtTnVtID09PSAxMDApIHtcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJwb3JjZW50YWdlbS1henVsXCI+e3BvcmNlbnRhZ2VtfTwvc3Bhbj47XG4gICAgfSBlbHNlIGlmIChwb3JjZW50YWdlbU51bSA+PSA5MCAmJiBwb3JjZW50YWdlbU51bSA8PSA5OS45OSkge1xuICAgICAgcmV0dXJuIDxzcGFuIGNsYXNzTmFtZT1cInBvcmNlbnRhZ2VtLXZlcm1lbGhhXCI+e3BvcmNlbnRhZ2VtfTwvc3Bhbj47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8c3BhbiBjbGFzc05hbWU9XCJwb3JjZW50YWdlbS12ZXJkZVwiPntwb3JjZW50YWdlbX08L3NwYW4+O1xuICAgIH1cbiAgfVxuXG5cbiAgZnVuY3Rpb24gdG9nZ2xlRGV0YWlscyhpZDogc3RyaW5nKSB7XG4gICAgaWYgKGV4cGFuZGVkQmFzZSA9PT0gaWQpIHtcbiAgICAgIHNldEV4cGFuZGVkQmFzZShudWxsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXhwYW5kZWRCYXNlKGlkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDYXJkQ29udGVudD5cbiAgICA8ZGl2PlxuICAgICAgPGgxPkNBTVBBTkhBUzwvaDE+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPHA+Q2FycmVnYW5kby4uLjwvcD5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdwcmluY2lwYWxDb250ZW50Jz5cbiAgICAgICAgICB7T2JqZWN0LmtleXMoYmFzZXMpLm1hcCgoYmFzZU5hbWUpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXtiYXNlTmFtZX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY2FtcGFpZ24tY2FyZCR7ZXhwYW5kZWRCYXNlID09PSBiYXNlc1tiYXNlTmFtZV0gPyAnIGNsaWNrZWQnIDogJyd9YH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdG9nZ2xlRGV0YWlscyhiYXNlc1tiYXNlTmFtZV0pfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2VcIj57YmFzZU5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgIHtleHBhbmRlZEJhc2UgPT09IGJhc2VzW2Jhc2VOYW1lXSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYW1wYWlnbi1wZXJjZW50YWdlc1wiPlxuICAgICAgICAgICAgICAgICAge2Jhc2VEYXRhW2Jhc2VzW2Jhc2VOYW1lXV0/Lm1hcCgocG9zdDogYW55KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxDb250YWluZXIga2V5PXtwb3N0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcGVyY2VudGFnZS1pdGVtICR7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyc2VGbG9hdChwb3N0LmNvbXBsZXRlZF9wZXJjZW50YWdlKSA+IDkwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdjb20tYXZpc28nIC8vIEFkaWNpb25hIHVtYSBjbGFzc2UgXCJjb20tYXZpc29cIiBzZSBhIHBvcmNlbnRhZ2VtIGZvciBtYWlvciBxdWUgOTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3Bvc3QubmFtZX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3Bvc3QuY3JlYXRlZF9hdH08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXtgcG9yY2VudGFnZW0tJHtwb3N0LmNvbXBsZXRlZF9wZXJjZW50YWdlID09PSAnMTAwLjAwJyA/ICd2ZXJkZScgOiAndmVybWVsaGEnfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVyUG9yY2VudGFnZW0oKHBvc3QuY29tcGxldGVkX3BlcmNlbnRhZ2UpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICA8L0NhcmRDb250ZW50PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuXG5cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n");

/***/ })

})