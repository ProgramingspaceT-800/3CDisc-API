webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container, CardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardContent\", function() { return CardContent; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"sc-heizgz-0\"\n})([\"\"]);\nvar CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__CardContent\",\n  componentId: \"sc-heizgz-1\"\n})([\".principalContent{align-items:center;background-image:url(\\\"https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3b75bfde-2615-40fd-ab9e-588c4475e4b3%2Ffb8dc694-f346-4101-871b-e405ff408adc%2Fbackground.jpeg?table=block&id=2e80160a-f115-4654-a54c-14745cba6d90&spaceId=3b75bfde-2615-40fd-ab9e-588c4475e4b3&width=2000&userId=5b6a38de-4fa1-4691-9a1d-7f2e76e06e3e&cache=v2\\\");background-repeat:no-repeat,repeat-x;}.Cardsalign{display:flex;flex-wrap:wrap;justify-content:center;}.campaign-card{background:#fff;border:1px solid #ccc;margin:10px;padding:20px;width:40%;margin-bottom:20px;gap:20px;border-radius:5px;transition:transform 0.2s ease-in-out;justify-content:center;box-shadow:20px 20px 50px rgba(0,0,0,0.5);background:rgba(255,255,255,0.1);overflow:hidden;justify-content:center;align-items:center;border-top:1px solid rgba(255,255,255,0.5);border-left:1px solid rgba(255,255,255,0.5);}.campaign-card:hover{transform:scale(1.05);cursor:pointer;}.campaign-card.clicked{background-color:white;}.base{font-size:20px;margin-bottom:10px;}.campaign-percentages{display:none;}.campaign-card.clicked .campaign-percentages{display:block;margin-top:10px;}.percentage-item{display:flex;flex-direction:column;border:1px solid #ddd;border-radius:5px;padding:10px;margin-top:10px;justify-content:center;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.title{display:flex;flex-direction:column;align-items:center;justify-content:center;}h1{margin-bottom:3%;}.percentage-item h3{font-size:16px;margin:5px 0;}.com-aviso{border:2px solid red;}.porcentagem-vermelha{color:red;font-weight:bold;}.porcentagem-verde{color:green;font-weight:bold;}nav{display:flex;justify-content:center;}.nav-links{display:flex;justify-content:center;width:50%;align-items:center;background:#fff;padding:20px 15px;border-radius:12px;box-shadow:0 5px 10px rgba(0,0,0,0.2);margin-top:3%;margin-bottom:3%;}.nav-links li{list-style:none;margin:0 12px;}.nav-links li a{position:relative;color:#333;font-size:25px;font-family:'open_sansregular';font-weight:500;padding:6px 0;text-decoration:none;}.nav-links li a:before{content:'';position:absolute;bottom:0;left:0;height:3px;width:0%;background:red;border-radius:12px;transition:all 0.4s ease;}.nav-links li a:hover:before{width:100%;}.nav-links li.center a:before{left:50%;transform:translateX(-50%);}.nav-links li.upward a:before{width:100%;bottom:-5px;opacity:0;}.nav-links li.upward a:hover:before{bottom:0px;opacity:1;}.nav-links li.forward a:before{width:100%;transform:scaleX(0);transform-origin:right;transition:transform 0.4s ease;}.nav-links li.forward a:hover:before{transform:scaleX(1);transform-origin:left;}.logo{align-items:center;}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzP2JmNzciXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2l0aENvbmZpZyIsImRpc3BsYXlOYW1lIiwiY29tcG9uZW50SWQiLCJDYXJkQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFJaEMsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFHLENBQUFDLFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEsUUFFbEM7QUFFTSxJQUFNQyxXQUFXLEdBQUdMLHlEQUFNLENBQUNDLEdBQUcsQ0FBQUMsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSwwcUZBZ0xwQyIsImZpbGUiOiIuL3NyYy9zdHlsZXMvcGFnZXMvSG9tZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJztcblxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblxuYDtcblxuZXhwb3J0IGNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcbi5wcmluY2lwYWxDb250ZW50IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cubm90aW9uLnNvL2ltYWdlL2h0dHBzJTNBJTJGJTJGcHJvZC1maWxlcy1zZWN1cmUuczMudXMtd2VzdC0yLmFtYXpvbmF3cy5jb20lMkYzYjc1YmZkZS0yNjE1LTQwZmQtYWI5ZS01ODhjNDQ3NWU0YjMlMkZmYjhkYzY5NC1mMzQ2LTQxMDEtODcxYi1lNDA1ZmY0MDhhZGMlMkZiYWNrZ3JvdW5kLmpwZWc/dGFibGU9YmxvY2smaWQ9MmU4MDE2MGEtZjExNS00NjU0LWE1NGMtMTQ3NDVjYmE2ZDkwJnNwYWNlSWQ9M2I3NWJmZGUtMjYxNS00MGZkLWFiOWUtNTg4YzQ0NzVlNGIzJndpZHRoPTIwMDAmdXNlcklkPTViNmEzOGRlLTRmYTEtNDY5MS05YTFkLTdmMmU3NmUwNmUzZSZjYWNoZT12MlwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdCwgcmVwZWF0LXg7XG4gIFxufVxuXG4uQ2FyZHNhbGlnbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jYW1wYWlnbi1jYXJkIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICB3aWR0aDogNDAlOyAvKiA0OCUgcGFyYSBkZWl4YXIgdW0gZXNwYcOnbyBtw61uaW1vIGVudHJlIGFzIGR1YXMgZGl2cyAqL1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBnYXA6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3gtc2hhZG93OiAyMHB4IDIwcHggNTBweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpOyBcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcbn1cblxuLmNhbXBhaWduLWNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jYW1wYWlnbi1jYXJkLmNsaWNrZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhc2Uge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi8qIEVzdGlsbyBkb3MgZGV0YWxoZXMgZGUgY2FtcGFuaGEgZXhwYW5kaWRvcyAqL1xuLmNhbXBhaWduLXBlcmNlbnRhZ2VzIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNhbXBhaWduLWNhcmQuY2xpY2tlZCAuY2FtcGFpZ24tcGVyY2VudGFnZXMge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnBlcmNlbnRhZ2UtaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47IC8qIEVzY29uZGUgbyBjb250ZcO6ZG8gcXVlIHRyYW5zYm9yZGEgKi9cbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IC8qIE1vc3RyYSBcIi4uLlwiIHBhcmEgaW5kaWNhciBxdWUgbyB0ZXh0byBmb2kgY29ydGFkbyAqL1xuICB3aGl0ZS1zcGFjZTogbm93cmFwOyBcbn1cblxuLnRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxufVxuXG5oMSB7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuXG4ucGVyY2VudGFnZS1pdGVtIGgzIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBtYXJnaW46IDVweCAwO1xufVxuXG4uY29tLWF2aXNvIHtcbiAgYm9yZGVyOiAycHggc29saWQgcmVkOyAvKiBvdSBxdWFscXVlciBlc3RpbG8gcXVlIHZvY8OqIGRlc2VqYSBwYXJhIG8gYXZpc28gKi9cbn1cblxuLyogRXN0aWxvcyBwYXJhIHBvcmNlbnRhZ2VucyAqL1xuLnBvcmNlbnRhZ2VtLXZlcm1lbGhhIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5wb3JjZW50YWdlbS12ZXJkZSB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubmF2LWxpbmtze1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDUwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMjBweCAxNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDVweCAxMHB4IHJnYmEoMCwwLDAsMC4yKTtcbiAgbWFyZ2luLXRvcDogMyU7XG4gIG1hcmdpbi1ib3R0b206IDMlO1xufVxuLm5hdi1saW5rcyBsaXtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luOiAwIDEycHg7XG59XG4ubmF2LWxpbmtzIGxpIGF7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6ICMzMzM7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC1mYW1pbHk6J29wZW5fc2Fuc3JlZ3VsYXInOyAgXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHBhZGRpbmc6IDZweCAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4ubmF2LWxpbmtzIGxpIGE6YmVmb3Jle1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogM3B4O1xuICB3aWR0aDogMCU7XG4gIGJhY2tncm91bmQ6IHJlZDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNHMgZWFzZTtcbn1cbi5uYXYtbGlua3MgbGkgYTpob3ZlcjpiZWZvcmV7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm5hdi1saW5rcyBsaS5jZW50ZXIgYTpiZWZvcmV7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xufVxuLm5hdi1saW5rcyBsaS51cHdhcmQgYTpiZWZvcmV7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IC01cHg7XG4gIG9wYWNpdHk6IDA7XG59XG4ubmF2LWxpbmtzIGxpLnVwd2FyZCBhOmhvdmVyOmJlZm9yZXtcbiAgYm90dG9tOiAwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG4ubmF2LWxpbmtzIGxpLmZvcndhcmQgYTpiZWZvcmV7XG4gIHdpZHRoOiAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjRzIGVhc2U7XG59XG4ubmF2LWxpbmtzIGxpLmZvcndhcmQgYTpob3ZlcjpiZWZvcmV7XG4gIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xufVxuXG4ubG9nbyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ })

})