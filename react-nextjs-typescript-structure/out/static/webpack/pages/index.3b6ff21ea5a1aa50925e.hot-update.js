webpackHotUpdate_N_E("pages/index",{

/***/ "./src/styles/pages/Home.ts":
/*!**********************************!*\
  !*** ./src/styles/pages/Home.ts ***!
  \**********************************/
/*! exports provided: Container, CardContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Container\", function() { return Container; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CardContent\", function() { return CardContent; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__Container\",\n  componentId: \"sc-heizgz-0\"\n})([\"\"]);\nvar CardContent = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"Home__CardContent\",\n  componentId: \"sc-heizgz-1\"\n})([\".principalContent{display:flex;flex-direction:r justify-content:center;background-image:url(\\\"https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F3b75bfde-2615-40fd-ab9e-588c4475e4b3%2Ffb8dc694-f346-4101-871b-e405ff408adc%2Fbackground.jpeg?table=block&id=2e80160a-f115-4654-a54c-14745cba6d90&spaceId=3b75bfde-2615-40fd-ab9e-588c4475e4b3&width=2000&userId=5b6a38de-4fa1-4691-9a1d-7f2e76e06e3e&cache=v2\\\");background-repeat:no-repeat,repeat-x;}.Cardsalign{display:flex;flex-wrap:wrap;justify-content:center;}.campaign-card{background:#fff;border:1px solid #ccc;margin:10px;padding:20px;width:40%;margin-bottom:20px;gap:20px;border-radius:5px;box-shadow:0px 2px 4px rgba(0,0,0,0.1);transition:transform 0.2s ease-in-out;justify-content:center;}.campaign-card:hover{transform:scale(1.05);cursor:pointer;}.campaign-card.clicked{background-color:white;}.base{font-size:20px;margin-bottom:10px;}.campaign-percentages{display:none;}.campaign-card.clicked .campaign-percentages{display:block;margin-top:10px;}.percentage-item{display:flex;flex-direction:column;border:1px solid #ddd;border-radius:5px;padding:10px;margin-top:10px;justify-content:center;align-items:center;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.title{display:flex;flex-direction:column;align-items:center;justify-content:center;}h1{margin-bottom:3%;}.percentage-item h3{font-size:16px;margin:5px 0;}.com-aviso{border:2px solid red;}.porcentagem-vermelha{color:red;font-weight:bold;}.porcentagem-verde{color:green;font-weight:bold;}.nav-links{display:flex;justify-content:center;width:50%;align-items:center;background:#fff;padding:20px 15px;border-radius:12px;box-shadow:0 5px 10px rgba(0,0,0,0.2);margin-top:3%;margin-bottom:3%;}.nav-links li{list-style:none;margin:0 12px;}.nav-links li a{position:relative;color:#333;font-size:25px;font-family:'open_sansregular';font-weight:500;padding:6px 0;text-decoration:none;}.nav-links li a:before{content:'';position:absolute;bottom:0;left:0;height:3px;width:0%;background:red;border-radius:12px;transition:all 0.4s ease;}.nav-links li a:hover:before{width:100%;}.nav-links li.center a:before{left:50%;transform:translateX(-50%);}.nav-links li.upward a:before{width:100%;bottom:-5px;opacity:0;}.nav-links li.upward a:hover:before{bottom:0px;opacity:1;}.nav-links li.forward a:before{width:100%;transform:scaleX(0);transform-origin:right;transition:transform 0.4s ease;}.nav-links li.forward a:hover:before{transform:scaleX(1);transform-origin:left;}\"]);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9wYWdlcy9Ib21lLnRzP2JmNzciXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiZGl2Iiwid2l0aENvbmZpZyIsImRpc3BsYXlOYW1lIiwiY29tcG9uZW50SWQiLCJDYXJkQ29udGVudCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdUM7QUFJaEMsSUFBTUEsU0FBUyxHQUFHQyx5REFBTSxDQUFDQyxHQUFHLENBQUFDLFVBQUE7RUFBQUMsV0FBQTtFQUFBQyxXQUFBO0FBQUEsUUFFbEM7QUFFTSxJQUFNQyxXQUFXLEdBQUdMLHlEQUFNLENBQUNDLEdBQUcsQ0FBQUMsVUFBQTtFQUFBQyxXQUFBO0VBQUFDLFdBQUE7QUFBQSxvOUVBcUtwQyIsImZpbGUiOiIuL3NyYy9zdHlsZXMvcGFnZXMvSG9tZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3RoZW1lJztcblxuXG5leHBvcnQgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcblxuYDtcblxuZXhwb3J0IGNvbnN0IENhcmRDb250ZW50ID0gc3R5bGVkLmRpdmBcbi5wcmluY2lwYWxDb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vd3d3Lm5vdGlvbi5zby9pbWFnZS9odHRwcyUzQSUyRiUyRnByb2QtZmlsZXMtc2VjdXJlLnMzLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tJTJGM2I3NWJmZGUtMjYxNS00MGZkLWFiOWUtNTg4YzQ0NzVlNGIzJTJGZmI4ZGM2OTQtZjM0Ni00MTAxLTg3MWItZTQwNWZmNDA4YWRjJTJGYmFja2dyb3VuZC5qcGVnP3RhYmxlPWJsb2NrJmlkPTJlODAxNjBhLWYxMTUtNDY1NC1hNTRjLTE0NzQ1Y2JhNmQ5MCZzcGFjZUlkPTNiNzViZmRlLTI2MTUtNDBmZC1hYjllLTU4OGM0NDc1ZTRiMyZ3aWR0aD0yMDAwJnVzZXJJZD01YjZhMzhkZS00ZmExLTQ2OTEtOWExZC03ZjJlNzZlMDZlM2UmY2FjaGU9djJcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdC14O1xuICBcbn1cblxuLkNhcmRzYWxpZ24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FtcGFpZ24tY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgd2lkdGg6IDQwJTsgLyogNDglIHBhcmEgZGVpeGFyIHVtIGVzcGHDp28gbcOtbmltbyBlbnRyZSBhcyBkdWFzIGRpdnMgKi9cbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgZ2FwOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FtcGFpZ24tY2FyZDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhbXBhaWduLWNhcmQuY2xpY2tlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYmFzZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLyogRXN0aWxvIGRvcyBkZXRhbGhlcyBkZSBjYW1wYW5oYSBleHBhbmRpZG9zICovXG4uY2FtcGFpZ24tcGVyY2VudGFnZXMge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2FtcGFpZ24tY2FyZC5jbGlja2VkIC5jYW1wYWlnbi1wZXJjZW50YWdlcyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ucGVyY2VudGFnZS1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogRXNjb25kZSBvIGNvbnRlw7pkbyBxdWUgdHJhbnNib3JkYSAqL1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgLyogTW9zdHJhIFwiLi4uXCIgcGFyYSBpbmRpY2FyIHF1ZSBvIHRleHRvIGZvaSBjb3J0YWRvICovXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7IFxufVxuXG4udGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgXG59XG5cbmgxIHtcbiAgbWFyZ2luLWJvdHRvbTogMyU7XG59XG5cbi5wZXJjZW50YWdlLWl0ZW0gaDMge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbjogNXB4IDA7XG59XG5cbi5jb20tYXZpc28ge1xuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7IC8qIG91IHF1YWxxdWVyIGVzdGlsbyBxdWUgdm9jw6ogZGVzZWphIHBhcmEgbyBhdmlzbyAqL1xufVxuXG4vKiBFc3RpbG9zIHBhcmEgcG9yY2VudGFnZW5zICovXG4ucG9yY2VudGFnZW0tdmVybWVsaGEge1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnBvcmNlbnRhZ2VtLXZlcmRlIHtcbiAgY29sb3I6IGdyZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm5hdi1saW5rc3tcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiA1MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCA1cHggMTBweCByZ2JhKDAsMCwwLDAuMik7XG4gIG1hcmdpbi10b3A6IDMlO1xuICBtYXJnaW4tYm90dG9tOiAzJTtcbn1cbi5uYXYtbGlua3MgbGl7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMCAxMnB4O1xufVxuLm5hdi1saW5rcyBsaSBhe1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OidvcGVuX3NhbnNyZWd1bGFyJzsgIFxuICBmb250LXdlaWdodDogNTAwO1xuICBwYWRkaW5nOiA2cHggMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLm5hdi1saW5rcyBsaSBhOmJlZm9yZXtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBoZWlnaHQ6IDNweDtcbiAgd2lkdGg6IDAlO1xuICBiYWNrZ3JvdW5kOiByZWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2U7XG59XG4ubmF2LWxpbmtzIGxpIGE6aG92ZXI6YmVmb3Jle1xuICB3aWR0aDogMTAwJTtcbn1cbi5uYXYtbGlua3MgbGkuY2VudGVyIGE6YmVmb3Jle1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbn1cbi5uYXYtbGlua3MgbGkudXB3YXJkIGE6YmVmb3Jle1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAtNXB4O1xuICBvcGFjaXR5OiAwO1xufVxuLm5hdi1saW5rcyBsaS51cHdhcmQgYTpob3ZlcjpiZWZvcmV7XG4gIGJvdHRvbTogMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuLm5hdi1saW5rcyBsaS5mb3J3YXJkIGE6YmVmb3Jle1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC40cyBlYXNlO1xufVxuLm5hdi1saW5rcyBsaS5mb3J3YXJkIGE6aG92ZXI6YmVmb3Jle1xuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbn1cblxuXG5cblxuYFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/pages/Home.ts\n");

/***/ })

})