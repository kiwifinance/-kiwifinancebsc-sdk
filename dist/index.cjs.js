'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');
var styledSystem = require('styled-system');
var get = require('lodash/get');
var noop = require('lodash/noop');
var debounce = require('lodash/debounce');
var throttle = require('lodash/throttle');
var reactRouterDom = require('react-router-dom');
var reactTransitionGroup = require('react-transition-group');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var get__default = /*#__PURE__*/_interopDefaultLegacy(get);
var noop__default = /*#__PURE__*/_interopDefaultLegacy(noop);
var debounce__default = /*#__PURE__*/_interopDefaultLegacy(debounce);
var throttle__default = /*#__PURE__*/_interopDefaultLegacy(throttle);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) { return function (theme) { return get__default['default'](theme, path, fallback); }; };

var rotate = styled.keyframes(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate);
var Svg = styled__default['default'].svg(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"], ["\n  fill: ", ";\n  flex-shrink: 0;\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, styledSystem.space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1, templateObject_2, templateObject_3;

var Icon = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$2 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$3 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled__default['default'].div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, styledSystem.space);
Text.defaultProps = {
    color: "text",
    small: false,
};
var templateObject_1$1;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var sizes = {
    SM: "sm",
    MD: "md",
};
var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var getDisabledStyles = function (_a) {
    var isLoading = _a.isLoading, theme = _a.theme;
    if (isLoading === true) {
        return "\n      &:disabled,\n      &.button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
var removePointerEvents = function (_a) {
    var disabled = _a.disabled, as = _a.as;
    if (disabled && as && as !== "button") {
        return "\n      pointer-events: none;\n    ";
    }
    return "";
};
var getButtonVariantProp = function (prop) { return function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants.PRIMARY : _b;
    return theme.button[variant][prop];
}; };
var StyledButton = styled__default['default'].button(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border: ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  /* max-content instead of auto for Safari fix */\n  width: ", ";\n  height: ", ";\n  line-height: 1;\n  letter-spacing: 0.03em;\n  justify-content: center;\n  outline: 0;\n  padding: ", ";\n  transition: background-color 0.2s;\n  opacity: ", ";\n\n  &:hover:not(:disabled):not(.button--disabled):not(:active) {\n    background-color: ", ";\n    border-color: ", ";\n  }\n\n  &:focus:not(:active) {\n    box-shadow: 0 0 0 2px ", ";\n  }\n\n  &:active {\n    background-color: ", ";\n    box-shadow: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"])), getButtonVariantProp("background"), getButtonVariantProp("border"), getButtonVariantProp("boxShadow"), getButtonVariantProp("color"), function (_a) {
    var fullWidth = _a.fullWidth;
    return (fullWidth ? "100%" : "max-content");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
}, function (_a) {
    var size = _a.size;
    return (size === "sm" ? "0 16px" : "0 24px");
}, function (_a) {
    var isLoading = _a.isLoading;
    return (isLoading ? 0.5 : 1);
}, getButtonVariantProp("backgroundHover"), getButtonVariantProp("borderColorHover"), function (_a) {
    var theme = _a.theme;
    return theme.colors.secondary;
}, getButtonVariantProp("backgroundActive"), getButtonVariantProp("boxShadowActive"), getDisabledStyles, removePointerEvents, styledSystem.space);
StyledButton.defaultProps = {
    fullWidth: false,
    type: "button",
};
var templateObject_1$2;

var Button = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, external = _a.external, isLoading = _a.isLoading, disabled = _a.disabled, props = __rest(_a, ["startIcon", "endIcon", "children", "external", "isLoading", "disabled"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    return (React__default['default'].createElement(StyledButton, __assign({}, internalProps, props, { isLoading: isLoading, disabled: isDisabled }),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Button.defaultProps = {
    variant: variants.PRIMARY,
    size: sizes.MD,
    external: false,
    isLoading: false,
    disabled: false,
};

var IconButton = styled__default['default'](Button)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var size = _a.size;
    return (size === "sm" ? "32px" : "48px");
});
var templateObject_1$3;

var Icon$4 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$5 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$6 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$7 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$8 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$9 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M5 13.0022H16.17L11.29 17.8822C10.9 18.2722 10.9 18.9122 11.29 19.3022C11.68 19.6922 12.31 19.6922 12.7 19.3022L19.29 12.7122C19.68 12.3222 19.68 11.6922 19.29 11.3022L12.71 4.70217C12.32 4.31217 11.69 4.31217 11.3 4.70217C10.91 5.09217 10.91 5.72217 11.3 6.11217L16.17 11.0022H5C4.45 11.0022 4 11.4522 4 12.0022C4 12.5522 4.45 13.0022 5 13.0022Z" })));
};

var Icon$a = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$b = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React__default['default'].createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$c = function (props) {
    var theme = styled.useTheme();
    theme.isDark ? "#3C3742" : "#e9eaeb";
    theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("mask", { id: "mask", x: "3.75", y: "3.75", width: "64.5", height: "74.24", maskUnits: "userSpaceOnUse" },
                React__default['default'].createElement("path", { d: "M68.25,36A32.25,32.25,0,1,1,36,3.75,32.25,32.25,0,0,1,68.25,36Z", fill: "#c4c4c4" }))),
        React__default['default'].createElement("path", { d: "M72,36A36,36,0,1,1,36,0,36,36,0,0,1,72,36Z", fill: "#e9eaeb" }),
        React__default['default'].createElement("path", { d: "M35,19.73v-.52a3.58,3.58,0,0,1,.44-1.84,7.14,7.14,0,0,1,1.24-1.46A13.12,13.12,0,0,1,38,14.72a6,6,0,0,0,1.12-1,2,2,0,0,0,.44-1.3,1.58,1.58,0,0,0-.77-1.51,4.94,4.94,0,0,0-2.5-.47,8.94,8.94,0,0,0-2.29.3,8.2,8.2,0,0,0-1.92.72V7.7a10.63,10.63,0,0,1,2.39-.79,14,14,0,0,1,3.06-.31A7.39,7.39,0,0,1,42.44,8a4.63,4.63,0,0,1,1.68,3.8,4.42,4.42,0,0,1-.64,2.5,9.29,9.29,0,0,1-1.84,1.93l-1.71,1.48a2.09,2.09,0,0,0-.68,1.65v.36Zm-.19,4.88v-3.2h4.65v3.2Z", fill: "#bdc2c4" }),
        React__default['default'].createElement("path", { d: "M57.52,33.42h-41a27.59,27.59,0,0,0-1.91,3.66A31.33,31.33,0,0,0,12,49.62C12,65.29,23.19,78,37,78s25-12.7,25-28.37a31.33,31.33,0,0,0-2.57-12.54A27.59,27.59,0,0,0,57.52,33.42Z", fill: "#875930" }),
        React__default['default'].createElement("path", { d: "M58.06,34.77a2.3,2.3,0,0,1-.3,1.13C56.08,39.1,47.43,41.53,37,41.53S17.92,39.1,16.24,35.9a2.3,2.3,0,0,1-.3-1.13c0-1.22,1-2.37,2.78-3.36C22.35,29.38,29.18,28,37,28s14.65,1.37,18.28,3.4C57.05,32.4,58.06,33.55,58.06,34.77Z", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M48.52,34.17c0,1.55-5,2.81-11.24,2.81S26,35.72,26,34.17s5-2.81,11.24-2.81S48.52,32.62,48.52,34.17Z", fill: "#dbe6b7" }),
        React__default['default'].createElement("path", { d: "M25.51,34.57c0,.36-.64.66-1.42.66s-1.42-.3-1.42-.66.64-.67,1.42-.67S25.51,34.2,25.51,34.57Z", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "49.6", cy: "34.73", rx: "1.48", ry: "0.7", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M28.58,36.4c0,.38-.66.7-1.48.7s-1.48-.32-1.48-.7.66-.7,1.48-.7S28.58,36,28.58,36.4Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M35.88,37.68c0,.59-1,1.06-2.24,1.06s-2.25-.47-2.25-1.06,1-1,2.25-1S35.88,37.1,35.88,37.68Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M46.69,37.56c0,.42-.71.76-1.6.76s-1.6-.34-1.6-.76.71-.75,1.6-.75S46.69,37.15,46.69,37.56Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M27.49,32.21c0-.48-.83-.87-1.86-.87s-1.86.39-1.86.87.84.88,1.86.88S27.49,32.7,27.49,32.21Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M35.11,30.83c0-.48-.84-.87-1.86-.87s-1.86.39-1.86.87.83.88,1.86.88S35.11,31.32,35.11,30.83Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M48,31.75c0-.51-.87-.92-1.94-.92s-1.95.41-1.95.92.87.91,1.95.91S48,32.25,48,31.75Z", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "30.4", cy: "55.69", rx: "5.91", ry: "7.88", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "43.98", cy: "55.69", rx: "5.91", ry: "7.88", fill: "#fff" }),
        React__default['default'].createElement("path", { d: "M38.6,62.88a.3.3,0,0,0-.54.07,2.82,2.82,0,0,0-.07.82,2.67,2.67,0,0,1-.16.69,1.06,1.06,0,0,1-.68.69c-.95.23-1-1.63-1-2.12,0-.24-.39-.32-.44-.06-.17,1,0,2.82,1.44,2.83a1.53,1.53,0,0,0,1.2-.76A2.52,2.52,0,0,0,38.6,62.88Z", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M30.17,45c-1.17-1-2.87.22-3.53,1.24-.11.17.15.37.28.22a4.54,4.54,0,0,1,1.27-1,3.6,3.6,0,0,1,1.87-.21A.15.15,0,0,0,30.17,45Z", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M44.86,46.11c-.81-1.91-3.33-1.28-4.58-.29-.12.1,0,.28.17.21a5,5,0,0,1,2.09-.63,3.23,3.23,0,0,1,2.11.92C44.79,46.42,44.91,46.23,44.86,46.11Z", fill: "#592d0f" }),
        React__default['default'].createElement("ellipse", { cx: "30.8", cy: "55.9", rx: "3.74", ry: "5.23", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "43.3", cy: "55.9", rx: "3.74", ry: "5.23", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "29.65", cy: "51.01", rx: "1.09", ry: "1.56", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "42.15", cy: "51.01", rx: "1.09", ry: "1.56", fill: "#fff" }),
        React__default['default'].createElement("path", { d: "M72,37.09,69.74,37V35L72,34.91,72,36Zm-.12-4.35-2.25.2-.24-2,2.23-.34.26,2.16Zm-.65-4.3-2.2.47-.49-2,2.17-.6.52,2.11ZM70,24.25,67.91,25l-.72-1.91,2.08-.86.77,2Zm-1.66-4-2,1-.95-1.8,2-1.11Zm-2.14-3.79-1.89,1.23L63.19,16,65,14.66ZM63.66,13l-1.73,1.44-1.35-1.52,1.63-1.55L63.66,13Zm-3-3.16-1.55,1.64-1.52-1.36,1.44-1.73,1.63,1.45ZM57.34,7,56,8.81,54.33,7.65l1.22-1.88ZM53.69,4.64l-1.11,2-1.8-.95,1-2,1.93,1ZM49.78,2.73l-.86,2.08L47,4.09,47.75,2l2,.77ZM45.67,1.31l-.6,2.17-2-.48L43.56.8l2.11.52ZM41.42.41l-.34,2.22-2-.24.2-2.24ZM37.09,0,36,0,34.91,0,35,2.27l1,0,1,0ZM32.74.14l.2,2.25-2,.24L30.58.4,32.74.15Zm-4.3.65L28.91,3l-2,.49-.6-2.17L28.44.79ZM24.25,2,25,4.09l-1.91.72-.86-2.08,2-.77Zm-4,1.66,1,2-1.8.95-1.11-2ZM16.45,5.76l1.22,1.89L16,8.81,14.66,7ZM13,8.34l1.44,1.73-1.52,1.35L11.32,9.79,13,8.34Zm-3.16,3,1.63,1.55-1.35,1.52L8.34,13l1.45-1.62ZM7,14.66,8.81,16,7.65,17.67,5.76,16.45ZM4.64,18.31l2,1.11-.95,1.8-2-1,1-1.93ZM2.73,22.22l2.08.86L4.09,25,2,24.25l.77-2ZM1.31,26.33l2.17.6-.48,2L.8,28.44l.52-2.11Zm-.9,4.25,2.22.34-.24,2-2.24-.2ZM0,34.91,0,36l0,1.09L2.27,37l0-1,0-1Zm.12,4.35,2.25-.2.24,2L.4,41.42Zm.65,4.3L3,43.09l.49,2-2.17.6L.79,43.56ZM2,47.75,4.09,47l.72,1.91-2.08.86-.77-2Zm1.66,4,2-1,.94,1.8L4.64,53.69l-1-1.93Zm2.14,3.79,1.89-1.23L8.81,56,7,57.34Zm2.58,3.5,1.73-1.44,1.35,1.52L9.78,60.67,8.34,59.05Zm3,3.16,1.55-1.64,1.52,1.36L13,63.65l-1.63-1.44ZM14.66,65,16,63.19l1.67,1.16-1.22,1.88Zm3.65,2.36,1.11-2,1.8.95-1,2-1.93-1Zm3.91,1.91.86-2.08,1.91.72L24.25,70l-2-.77Zm4.11,1.41.6-2.16,2,.48-.47,2.2-2.11-.52Zm4.25.91.34-2.22,2,.24-.2,2.24Zm4.33.39L35,69.73l1,0h1L37.09,72,36,72c-.37,0-.73,0-1.09,0Zm4.35-.13-.2-2.24,2-.24.34,2.23-2.16.26Zm4.3-.65L43.09,69l2-.48.6,2.17-2.11.52ZM47.75,70,47,67.91l1.91-.72.86,2.08-2,.77Zm4-1.67-1-2,1.81-.95,1.11,2-1.93,1Zm3.79-2.14-1.23-1.88L56,63.19,57.33,65Zm3.5-2.57L57.6,61.93l1.53-1.36,1.54,1.64-1.62,1.45Zm3.16-3-1.64-1.54,1.36-1.52,1.72,1.44-1.44,1.62ZM65,57.34,63.19,56l1.16-1.68,1.88,1.23Zm2.36-3.65-2-1.11.95-1.81,2,1-1,1.93Zm1.91-3.91-2.08-.86L67.91,47l2.13.74-.77,2Zm1.41-4.11-2.16-.6.48-2,2.2.47-.52,2.11Zm.91-4.25-2.22-.34.24-2,2.24.2Z", fill: "#bdc2c4", "fill-rule": "evenodd" })));
};

var Icon$d = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$e = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 25 24" }, props),
        React__default['default'].createElement("path", { d: "M19.2 3H5.19995C4.09995 3 3.19995 3.9 3.19995 5V19C3.19995 20.1 4.09995 21 5.19995 21H19.2C20.3 21 21.2 20.1 21.2 19V5C21.2 3.9 20.3 3 19.2 3ZM19.2 19H5.19995V5H19.2V19Z" }),
        React__default['default'].createElement("path", { d: "M11.45 7.72021H6.44995V9.22022H11.45V7.72021Z" }),
        React__default['default'].createElement("path", { d: "M18.2 15.75H13.2V17.25H18.2V15.75Z" }),
        React__default['default'].createElement("path", { d: "M18.2 13.25H13.2V14.75H18.2V13.25Z" }),
        React__default['default'].createElement("path", { d: "M8.19995 18H9.69995V16H11.7V14.5H9.69995V12.5H8.19995V14.5H6.19995V16H8.19995V18Z" }),
        React__default['default'].createElement("path", { d: "M14.29 10.95L15.7 9.54L17.11 10.95L18.17 9.89L16.76 8.47L18.17 7.06L17.11 6L15.7 7.41L14.29 6L13.23 7.06L14.64 8.47L13.23 9.89L14.29 10.95Z" })));
};

var Icon$f = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 18 13" }, props),
        React__default['default'].createElement("path", { d: "M6 10.2001L2.5 6.70007C2.11 6.31007 1.49 6.31007 1.1 6.70007C0.709995 7.09007 0.709995 7.71007 1.1 8.10007L5.29 12.2901C5.68 12.6801 6.31 12.6801 6.7 12.2901L17.3 1.70007C17.69 1.31007 17.69 0.690068 17.3 0.300068C16.91 -0.0899316 16.29 -0.0899316 15.9 0.300068L6 10.2001Z" })));
};

var Icon$g = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$h = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$i = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$j = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$k = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$l = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$m = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$n = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$o = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18ZM9 14H11V16H9V14ZM10.61 4.04C8.55 3.74 6.73 5.01 6.18 6.83C6 7.41 6.44 8 7.05 8H7.25C7.66 8 7.99 7.71 8.13 7.33C8.45 6.44 9.4 5.83 10.43 6.05C11.38 6.25 12.08 7.18 12 8.15C11.9 9.49 10.38 9.78 9.55 11.03C9.55 11.04 9.54 11.04 9.54 11.05C9.53 11.07 9.52 11.08 9.51 11.1C9.42 11.25 9.33 11.42 9.26 11.6C9.25 11.63 9.23 11.65 9.22 11.68C9.21 11.7 9.21 11.72 9.2 11.75C9.08 12.09 9 12.5 9 13H11C11 12.58 11.11 12.23 11.28 11.93C11.3 11.9 11.31 11.87 11.33 11.84C11.41 11.7 11.51 11.57 11.61 11.45C11.62 11.44 11.63 11.42 11.64 11.41C11.74 11.29 11.85 11.18 11.97 11.07C12.93 10.16 14.23 9.42 13.96 7.51C13.72 5.77 12.35 4.3 10.61 4.04Z" })));
};

var Icon$p = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("path", { d: "M71.78,115.22l-1.46-.15-2.85-.29-3.32-.35c-.93-.1-2.34-.31-3.14-.47-2.22-.44-3.76-.78-3.83-.83s-.83-.15-1.76-.27-2.29-.41-3-.6c-1.27-.32-5.54-1.74-7.12-2.37L43,109a78.66,78.66,0,0,1-12.47-6.79,61.16,61.16,0,0,1-9.72-7.81L17,90.9c-.28-.26-1.3-1.35-2.28-2.45a26.43,26.43,0,0,1-3.29-4.37c-.84-1.33-2.14-3.32-2.91-4.43A41.3,41.3,0,0,1,4,70.8c-1.9-5.41-2.42-7.18-2.84-9.59s-.74-4.57-1-7.1a21.51,21.51,0,0,1,.51-6.23,62.68,62.68,0,0,1,1.64-7c.24-.93.61-2.34.81-3.13a14.78,14.78,0,0,1,1.69-3.9c.72-1.35,1.72-3.16,2.22-4A8.46,8.46,0,0,1,9.26,27a8.22,8.22,0,0,1,1.86-1.42c.86-.26,2.55-.72,2.66-.72s0,.08,0,.17-.09.18,0,.18A.54.54,0,0,0,14,25a4.27,4.27,0,0,1,.72-.54c.52-.34.57-.41.51-.71-.13-.63.38-1.15,3-3.11a18.23,18.23,0,0,1,3.92-2.49,49.49,49.49,0,0,1,8-2.82c.73-.16,1.94-.44,2.7-.64a32.47,32.47,0,0,1,5-.8c1.12-.13,2.77-.35,3.67-.48s2.57-.29,3.73-.35,2.32-.16,2.61-.22,3-.12,6.5-.13c5.92,0,6,0,7.57.3.87.17,3.4.6,5.61,1,2.72.46,4.91.91,6.81,1.4l4,1a101.08,101.08,0,0,1,12.63,4.31c4.18,1.7,5.24,2.14,6,2.55.45.24,1.63.81,2.63,1.27A24.37,24.37,0,0,1,102.24,26c.47.32,1.38.86,2,1.2a77,77,0,0,1,6.64,4.3,49.62,49.62,0,0,1,11.57,10.7,23.37,23.37,0,0,1,3,4.72,20.23,20.23,0,0,1,1.28,2.67,10.53,10.53,0,0,1,.38,1.42c.62,3.05.48,6,.79,9.45a18.88,18.88,0,0,1,0,3.2c-.15,1.72-.46,1.92-1.07,4.75-.47,2.19-.32,2.16-.78,4.08-.21.9-.46,1.76-1,3.44A38.07,38.07,0,0,1,123,81.48c-.81,1.85-1.51,3.39-1.54,3.42a3.29,3.29,0,0,0-.3.47c-.38.72-1.65,3-2.37,4.36a76.56,76.56,0,0,1-4.27,7c-.06.08-.46.6-.88,1.17a44.52,44.52,0,0,1-5.76,5.87l-1.59,1.3a3.93,3.93,0,0,1-.65.41c-.24.13-.94.51-1.54.86l-.3.17-.37.2c-.39.22-3.73,2.54-4.4,3a41.47,41.47,0,0,1-6.75,3.07c-.47.19-.76.28-1,.41a20.06,20.06,0,0,1-4.61,1.27c-.79.09-1.86.24-2.37.34l-1.75.37a41.45,41.45,0,0,1-5.65.15c-2.65,0-4.93,0-5.06-.06", transform: "translate(0 -12.72)", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M108,97.26A66.56,66.56,0,0,0,114.5,89L119,81.4a65.61,65.61,0,0,0,3.2-8.83c2-6.93,1.77-10.48,1.7-11.42a24.94,24.94,0,0,0-.57-3.75V54.83L122.78,53c-.28-1-.57-2-.64-2.28A43.6,43.6,0,0,0,118,44.12a33.21,33.21,0,0,0-6.1-6.65c-.82-.63-2.49-1.94-3.71-2.92a46.83,46.83,0,0,0-5.65-4.08,8.69,8.69,0,0,1-1.38-.94,4.92,4.92,0,0,0-2.33-1.09,37,37,0,0,1-4.73-2.33,12.88,12.88,0,0,0-3-1.28c-.86-.26-3.22-1.08-5.24-1.83s-4-1.44-4.36-1.56l-2-.62c-.73-.23-2.22-.62-3.31-.88s-3-.78-4.22-1.15A53.66,53.66,0,0,0,64.39,17c-.74-.1-2.75-.38-4.49-.64a59.1,59.1,0,0,0-11.64-.67,53.71,53.71,0,0,0-7.1.35,49.17,49.17,0,0,0-7.39,1.37,40.65,40.65,0,0,0-6.64,1.92,19.6,19.6,0,0,1-2.21.8,21.13,21.13,0,0,0-2.74,1.14c-.89.45-2,1-2.51,1.19a7,7,0,0,0-1.29.69,2.35,2.35,0,0,1-.49.3c-.05,0-.41.13-.81.27-1.33.51-1.64.59-1.68.45s-1.18.59-2,1.37a41.8,41.8,0,0,0-4.55,6.93,75.14,75.14,0,0,0-3.39,9.26c-.12.48-.34,1.41-.49,2.06s-.36,1.76-.45,2.45S4.23,48,4.13,48.6a32.33,32.33,0,0,0,.23,7.84c.84,6.94,3.36,13.78,9.17,24.92,1.42,2.72,7.65,9.7,11.62,13,2.25,1.89,5.21,4.12,7.51,5.71,1.93,1.31,3.59,2.15,8.4,4.26,1.79.78,5.41,2.17,7.09,2.72.25.08,1.28.45,2.27.82a25.38,25.38,0,0,0,5.19,1.38c.63.11,1.78.34,2.55.53,1.48.36,2.21.46,8.09,1.11,2,.24,3.73.44,3.78.47a36.64,36.64,0,0,0,5.65-.28c1-.13,3.25-.4,5-.59,2.06-.24,2.08-.42,6-1.18a37.58,37.58,0,0,0,5.12-1.08,26.4,26.4,0,0,0,4.61-2.3,52.46,52.46,0,0,0,7.29-4.6,37.25,37.25,0,0,0,4.22-4.1m-68.73-53a1.6,1.6,0,0,0-.58-.17,2.6,2.6,0,0,1-1.28-1.11,2.2,2.2,0,0,1,.49-.6c.58-.6.66-.61,2.36-.19a4.47,4.47,0,0,1,1.92.79c.35.27.86.63,1.14.82.54.36.52.5-.1.82a4.07,4.07,0,0,1-2.32,0,2,2,0,0,0-.82-.17,1.83,1.83,0,0,1-.81-.18m1.5,3.59a.91.91,0,0,1,.35-1.17c.35-.23.54-.26,1.55-.26,1.26,0,1.56.09,2.11.67.38.4.39.39-.92,1.06a3,3,0,0,1-1.95.48h-1v-.33a.78.78,0,0,0-.13-.45m4.06-7.21a7.36,7.36,0,0,0-1-.8,1.34,1.34,0,0,1-.51-.55c-.07-.19-.22-.32-.33-.32-.37,0-.82-.67-.82-1.17s.05-.48.51-.74a2.14,2.14,0,0,1,1-.31c.44,0,.5,0,1,.68.27.36.75,1,1.09,1.42a10.3,10.3,0,0,1,.92,1.38c.27.55.29.67.18,1s-.19.37-.9.19a3.48,3.48,0,0,1-1.11-.74M43.55,51.78c-.35.18-.86.48-1.13.65a1.29,1.29,0,0,1-1.4.19c-.38-.13-.38-.13-.38-.92,0-.49,0-.79.12-.79a2.19,2.19,0,0,0,.63-.35,1.66,1.66,0,0,1,1.18-.35,4.48,4.48,0,0,0,1.11-.14c.67-.2,1.38.06,1.38.49s-.36.64-1.51,1.22m2,2.83a2,2,0,0,1-.14-.92v-.78l.55-.19a6.52,6.52,0,0,1,2.81,0c.42.15.41.11.24.5-.11.23-.35.36-1.06.6a4.5,4.5,0,0,0-1.32.64c-.39.35-.85.43-1.08.2m2.07-17.49A1.09,1.09,0,0,1,48.56,36c.39,0,1,.61,1.31,1.38a7.88,7.88,0,0,0,.56,1,1.59,1.59,0,0,1,.34,1.16c0,.57,0,.72.3,1s.27.34.24.41-.24.14-.5.16c-.41,0-.51,0-.87-.4s-.84-1.05-1.36-1.78c-.82-1.13-1-1.4-1-1.8m.92,21.47a6.39,6.39,0,0,1-.66-.42c-.58-.38-.62-.43-.44-.62a.73.73,0,0,0,.18-.38.45.45,0,0,1,.16-.31,18.15,18.15,0,0,1,3-1.06,1.36,1.36,0,0,1,.54.3c.32.27.34.29.13.42a8.57,8.57,0,0,0-.88.72,9,9,0,0,1-1.3,1,6.7,6.7,0,0,1-.7.37m2.87,3.46c-.84.6-1.25.65-1.46.15a1.47,1.47,0,0,0-.3-.48.45.45,0,0,1-.17-.32,6.52,6.52,0,0,1,2.09-2c.87-.56,1.57-.64,1.93-.24.22.23.22.25,0,.66a8.71,8.71,0,0,1-2.09,2.21m.43-25.56a1.64,1.64,0,0,1,1.37,0,.49.49,0,0,0,.29.17c.09,0,.27.5.47,1.32s.39,1.5.47,1.75l.16.43h-.38c-.72,0-1.49-.7-2.16-2-.39-.7-.48-1.46-.22-1.72m3.71,30.36-.3.76-.53,0c-.72,0-1.39-.43-1.39-1A6.65,6.65,0,0,1,55.12,63a.86.86,0,0,1,.86-.44c.37,0,.49.05.49.2a25.77,25.77,0,0,1-.92,4.1m2.26-27.14a2.49,2.49,0,0,1-.33.14A16.38,16.38,0,0,1,55.81,38a3.12,3.12,0,0,1-.39-.82,2.6,2.6,0,0,0-.49-.87,1,1,0,0,1-.3-.74c0-.33.1-.39.68-.58,1.26-.42,1.91-.24,2,.61,0,.24.22,1,.42,1.66a9.47,9.47,0,0,1,.34,1.75c0,.45-.05.54-.29.66M58.45,33c0-.78,0-.91.22-1a1.18,1.18,0,0,0,.42-.29.71.71,0,0,1,.42-.24,1.47,1.47,0,0,1,1.1.81c0,.16.11.52.18.79a27.83,27.83,0,0,1,0,5.37c-.18.18-.44.17-.44,0a1.86,1.86,0,0,0-.46-.61,3,3,0,0,1-.81-1.5A9.86,9.86,0,0,1,58.45,33m3.14,33.14-.48.32a1.61,1.61,0,0,1-.92.31c-.4,0-.47,0-.65-.41a1.31,1.31,0,0,1-.11-.79c0-.2.13-.79.17-1.3a4.36,4.36,0,0,1,.61-2c.08-.13.17-.32.22-.41a.49.49,0,0,1,.24-.21c.12,0,.23.26.39.92s.29,1.15.37,1.37a5.73,5.73,0,0,1,.16,1.31Zm5.22,0c-.13,0-.2.11-.15.18s-.11.13-.43.13c-.5,0-.52,0-.83-.64s-.31-.74-.31-2.25,0-1.88.48-1.88a1.44,1.44,0,0,1,.48.13A3.38,3.38,0,0,1,67,64.1a2.93,2.93,0,0,0,.17,1,.65.65,0,0,1-.31,1m.62-30.28a10.86,10.86,0,0,0-.78,2A4.34,4.34,0,0,1,66,39.24a1.65,1.65,0,0,0-.33.49c0,.07-.12.12-.27.12s-.28-.11-.48-1a4.83,4.83,0,0,1,.22-3,5.83,5.83,0,0,0,.29-1.36c0-.36.06-.47.35-.62.47-.24.67-.22,1.42.14s.85.62.23,1.81m5.09,30.58c-.11.33-.17.36-.6.36-.86,0-1.07-.22-1.47-1.42a12,12,0,0,1-.8-3.55,1.15,1.15,0,0,1,.66-.15h.54l.45,1a19.64,19.64,0,0,1,1.35,3.22,2.49,2.49,0,0,1-.13.58m-.15-27.13c-.21.24-.5.61-.65.83A9.61,9.61,0,0,1,71,41c-.48.5-.77.61-.77.31a.18.18,0,0,0-.18-.17c-.23,0-.23,0,.24-1.69.53-1.89.58-2,1-2.59s.47-.5.92-.5.56.06.75.32c.35.43.42.81.21,1.06a2.19,2.19,0,0,0-.31.65,3.29,3.29,0,0,1-.52.87M73,42.5a8,8,0,0,1,2-4.12c.58-.71.64-.75,1.1-.75a1,1,0,0,1,.83.34c.29.31.31.4.28,1.12l0,.79-.65.34a10.57,10.57,0,0,0-1.63,1.3,6.16,6.16,0,0,1-1.38,1.11c-.5.16-.48.17-.48-.13M80,42a11.67,11.67,0,0,0-1.1.74,9.43,9.43,0,0,1-1.46.88c-1.15.5-1.21.51-1.21.11s.5-1.1,1.4-2.06c.3-.31.79-.91,1.09-1.3a2.7,2.7,0,0,1,.7-.74,3.73,3.73,0,0,1,.77.39c.56.32.64.42.68.79A1.32,1.32,0,0,1,80,42m1.73,1a6.18,6.18,0,0,0,1-.72c.13-.22,1-.13,1.35.15s.39.33.37.61c-.11,1-.73,1.45-2.66,2a8.23,8.23,0,0,0-1.63.65,1.7,1.7,0,0,1-.77.31c-.28,0-.32-.05-.32-.33s.19-.52.9-1.21A15.5,15.5,0,0,1,81.76,43M77.85,64.1c-.3.33-.47.36-1.38.17C76,64.17,75.8,64,75,63.13a17.47,17.47,0,0,1-1.46-1.74A2,2,0,0,1,73,60v-.69h.51c.46,0,.53,0,.64.34s.33.4.95.65a3.9,3.9,0,0,1,1.42.95,8.31,8.31,0,0,0,1.12,1c.46.34.48.37.48,1a1.21,1.21,0,0,1-.27.93m1.65-5.59c-.15.43-.15.43-.79.42s-.95-.12-1.69-.8a9.36,9.36,0,0,0-1-.8,4.84,4.84,0,0,1-.8-.65,1,1,0,0,0-.45-.3c-.1,0-.15-.15-.15-.47v-.46h1a2.06,2.06,0,0,1,1.48.34,7.58,7.58,0,0,0,1.38.6c.71.22.87.33,1,.63a1.83,1.83,0,0,1,0,1.49m2.9-3.41a.51.51,0,0,0-.32.17.48.48,0,0,1-.28.18,24.22,24.22,0,0,1-3.35-1.8,4.42,4.42,0,0,1-1-1l-.32-.51.34-.35c.37-.39.58-.43.65-.13s.36.3,1.2.53A8.18,8.18,0,0,1,81,52.9c.3.18.68.39.84.46a5.21,5.21,0,0,1,.47.23c.24.11.31,1.51.08,1.51m4-6.17h-.34a.77.77,0,0,0-.48.17c-.2.26-3.84.22-4.83,0-1.2-.33-1.23-.42-.37-1a11.27,11.27,0,0,1,4.07-1.31c.82-.05.93,0,1.42.28l.52.34v1.57Zm3.45-20.54a30.74,30.74,0,0,0-3-1.13c-.66-.18-1.73-.55-2.39-.8a23.62,23.62,0,0,0-4.75-1.33,21.38,21.38,0,0,1-2.14-.46,62.71,62.71,0,0,0-6.76-1.12,17.53,17.53,0,0,1-2.33-.48,18.14,18.14,0,0,0-4.84-.69,25.38,25.38,0,0,1-2.94-.23,41.25,41.25,0,0,0-8.65-.7c-2.27,0-4.15.07-5.11.17l-4.42.47a19.17,19.17,0,0,0-4.6.83,28.4,28.4,0,0,1-3.09.74,12.42,12.42,0,0,0-3.61,1.05,68.27,68.27,0,0,0-7.62,3.89,13.12,13.12,0,0,0-3.71,2.55,23.59,23.59,0,0,0-5.31,8.29c-.29.84-.59,1.63-.64,1.78a1.63,1.63,0,0,0-.12.59c0,.25-.1.4-.48.63a1.6,1.6,0,0,1-1,.32c-.53,0-.81-.25-1.44-1.25-.27-.43-.27-.45-.13-1.72a21.25,21.25,0,0,1,1.59-5.52c1.29-3,4-5.88,8.62-8.93a25.83,25.83,0,0,1,4.52-2.49,48.47,48.47,0,0,1,7.14-2.61c.49-.09,2.58-.51,4.63-.94l3.74-.76H57l3.7.48,4.75.59a31.35,31.35,0,0,1,3.09.65c3.21.83,4.49,1.13,6.11,1.48a46.77,46.77,0,0,1,7.51,2.43c1.06.44,2.74,1.11,3.72,1.47a13.6,13.6,0,0,1,3,1.46,34.71,34.71,0,0,1,3.15,2.22,10.11,10.11,0,0,1-2.26-.93", transform: "translate(0 -12.72)", fill: "#9e6f41" }),
        React__default['default'].createElement("path", { d: "M81.33,84c-1-.08-2.65-.16-3.75-.16a23.05,23.05,0,0,1-3.81-.31c-1-.16-2.79-.37-4-.46a30.48,30.48,0,0,1-4.58-.69c-1.31-.29-3.25-.65-4.31-.81a27.26,27.26,0,0,1-3.61-.84c-.93-.29-2.78-.88-4.13-1.29-2.26-.7-5.6-2-8.94-3.39a37.7,37.7,0,0,1-3.43-1.81c-1.13-.67-2.8-1.63-3.69-2.12A129.05,129.05,0,0,1,21.9,61.68c-1.17-1-2.81-2.38-3.64-3a11.32,11.32,0,0,1-2.78-3.05A9.92,9.92,0,0,1,13.56,52a13.58,13.58,0,0,1-.63-2.08,4.46,4.46,0,0,0-.47-1.25L12,47.75V45.58c0-2.48,0-2.82.57-2.82a1.79,1.79,0,0,0,.81-.32c.37-.23.48-.38.48-.63a1.63,1.63,0,0,1,.12-.59c0-.15.34-.94.64-1.78a23.7,23.7,0,0,1,5.3-8.29,13.38,13.38,0,0,1,3.72-2.55,68.27,68.27,0,0,1,7.62-3.89,12.42,12.42,0,0,1,3.61-1.05A28.4,28.4,0,0,0,38,22.92a19.69,19.69,0,0,1,4.6-.83L47,21.62c1-.1,2.84-.17,5.11-.17a41.25,41.25,0,0,1,8.65.7,25.38,25.38,0,0,0,2.94.23,18.14,18.14,0,0,1,4.84.69,17.53,17.53,0,0,0,2.33.48,62.71,62.71,0,0,1,6.76,1.12,21.38,21.38,0,0,0,2.14.46,16.35,16.35,0,0,1,5.65,1.92c1.28.63,3,1.5,3.74,1.95s2,1,2.62,1.34a30,30,0,0,1,4.53,2.41,19.12,19.12,0,0,0,1.86,1.1c.48.23,1.17.62,1.54.84a1.92,1.92,0,0,0,1.22.38,8.84,8.84,0,0,1,2.71.77,13.4,13.4,0,0,1,4,2,34.21,34.21,0,0,1,6.94,6.29,41.49,41.49,0,0,1,5.29,8.69,4.17,4.17,0,0,1,.52,2.25,11.75,11.75,0,0,1-.76,3.68,48.32,48.32,0,0,1-4.24,10.07,22.62,22.62,0,0,1-3,4.43,35.12,35.12,0,0,1-6.5,6.1,13,13,0,0,1-3.62,2.07,32.79,32.79,0,0,1-5.76,1.81c-.35,0-2.55.28-4.87.52A51.19,51.19,0,0,1,81.33,84M55.52,67a29.45,29.45,0,0,0,.95-4.21c0-.24-.06-.27-.5-.27-.61,0-.82.2-1.7,1.57a4.81,4.81,0,0,0-.94,2.53c0,.36.05.46.32.6a2.07,2.07,0,0,1,.49.36c.11.13.3.18.63.16s.48-.06.75-.74m5.6-.6.47-.32V65.3a7.12,7.12,0,0,0-.35-2c-.18-.68-.35-1.32-.35-1.43s-.33-.24-.46,0c0,.09-.14.28-.22.41a4.36,4.36,0,0,0-.61,2c0,.51-.13,1.1-.17,1.3a1.31,1.31,0,0,0,.11.79c.18.36.25.41.66.41a1.66,1.66,0,0,0,.92-.31m11.45-.18c.15-.48.14-.53-.17-1.31-.19-.45-.61-1.38-1-2.06l-.6-1.26h-.54a1.15,1.15,0,0,0-.66.15,13.23,13.23,0,0,0,.85,3.76c.35,1.07.49,1.19,1.36,1.2.54,0,.54,0,.71-.48M66.9,66.1c.37-.41.44-.72.23-1a2,2,0,0,1-.18-1c0-1.3-.64-2.45-1.38-2.45-.43,0-.48.23-.48,1.92,0,1.48,0,1.69.29,2.25s.29.6.76.6a.87.87,0,0,0,.76-.29m11-2a1.55,1.55,0,0,0,.24-1c0-.58,0-.64-.37-.85a9.74,9.74,0,0,1-1.2-1A4.46,4.46,0,0,0,75,60.22c-.55-.22-.76-.36-.87-.6s-.19-.33-.64-.33H73v.64c0,.77.16,1.13,1,2.15,1.32,1.62,1.82,2.08,2.38,2.19,1,.21,1.24.18,1.5-.2M51.45,62a8.87,8.87,0,0,0,2-2.2c.22-.41.22-.43,0-.66-.36-.4-1.06-.32-1.93.24a6.52,6.52,0,0,0-2.09,2,.45.45,0,0,0,.17.32,1.47,1.47,0,0,1,.3.48c.22.52.68.48,1.5-.16M79.5,58.51c.27-.76.29-1.08.11-1.29a1.75,1.75,0,0,1-.23-.38,2.41,2.41,0,0,0-.92-.46,6.86,6.86,0,0,1-1.37-.61,2.14,2.14,0,0,0-1.49-.32h-1v.46c0,.27.06.47.13.47a2.07,2.07,0,0,1,.63.44c.62.54,1.3,1.12,2,1.68a1.51,1.51,0,0,0,1.25.43h.7Zm-30.2-.29a9.79,9.79,0,0,0,1.23-1,8,8,0,0,1,.88-.73c.22-.13.22-.14-.12-.42a1.46,1.46,0,0,0-.52-.3,16,16,0,0,0-2.94,1,.59.59,0,0,0-.21.4.34.34,0,0,1-.17.28c-.1,0-.18.11-.18.17a3.72,3.72,0,0,0,1.27.92,2.65,2.65,0,0,0,.76-.37m32.78-2.95a.51.51,0,0,1,.31-.17c.11,0,.16-.18.16-.68,0-.68-.13-1-.47-1a2.48,2.48,0,0,1-.73-.4,5.06,5.06,0,0,0-2.17-.89c-.71-.19-1-.33-1-.48-.07-.3-.28-.26-.65.13l-.34.35.32.5a7.55,7.55,0,0,0,2.83,2.09c1.34.71,1.55.77,1.77.5M46.7,54.41a1.9,1.9,0,0,1,.82-.48c.92-.24,1.35-.47,1.49-.76s.18-.35-.24-.5a7,7,0,0,0-2.73,0l-.61.14,0,.74c0,.91.1,1.19.64,1.19a.81.81,0,0,0,.67-.34m-4.4-1.86a11.66,11.66,0,0,1,1.13-.65c1.14-.6,1.63-1,1.63-1.35s-.07-.34-.49-.49a1.11,1.11,0,0,0-.91,0,4.05,4.05,0,0,1-1.1.15,1.82,1.82,0,0,0-1.21.36,2.34,2.34,0,0,1-.62.35,1.92,1.92,0,0,0-.09.81c0,.7,0,.82.21.82a1.55,1.55,0,0,1,.48.17c.4.22.41.22,1-.16M85.58,49.1a.72.72,0,0,1,.47-.17h.34V47.34L85.9,47c-.48-.32-.56-.33-1.49-.27a9.37,9.37,0,0,0-4,1.26c-1,.62-.93.72.29,1.06,1,.27,4.63.29,4.84,0m-42.06-.84a10.39,10.39,0,0,0,1.12-.59l.44-.28L44.76,47c-.56-.58-.86-.67-2.17-.67-1,0-1.27,0-1.57.23s-.38.29-.38.69,0,.5.11.53.12.22.12.42v.34h1a3,3,0,0,0,1.65-.32m36.73-2.57a4.83,4.83,0,0,1,1.31-.53A6.71,6.71,0,0,0,84.18,44a1.1,1.1,0,0,1,.18-.45A.85.85,0,0,0,84.5,43c0-.35-.72-.79-1.21-.79s-2,1-3.27,2.25c-.77.74-1,1-1,1.26s0,.33.36.33a1.77,1.77,0,0,0,.83-.33M43.19,44.57c.57-.3.64-.47.28-.71-.19-.11-.69-.47-1.15-.81a4.25,4.25,0,0,0-2-.92c-1.68-.42-1.83-.41-2.42.2a2.2,2.2,0,0,0-.49.6,2.35,2.35,0,0,0,.52.65c.55.57.54.56,2.1.78a3.27,3.27,0,0,1,.93.24,4.56,4.56,0,0,0,2.26,0m34.28-1a14.47,14.47,0,0,0,1.75-1.05,5.09,5.09,0,0,1,.9-.61,2.58,2.58,0,0,0,.5-.4c.53-.52.54-.89,0-1.26s-1.14-.69-1.31-.62a3.16,3.16,0,0,0-.66.73,15,15,0,0,1-1.09,1.32,5.35,5.35,0,0,0-1.45,2c0,.38.2.36,1.32-.16m-3.85-1a6,6,0,0,0,1.3-1.09,7.43,7.43,0,0,1,1.55-1.26l.66-.35,0-.79c0-.72,0-.81-.28-1.12a.94.94,0,0,0-.87-.33c-.55,0-.56,0-1.13.79a8.07,8.07,0,0,0-1.89,4c0,.36.06.38.62.14M46.81,41.14c.11-.29.09-.41-.22-1a18.46,18.46,0,0,0-1.38-2c-1-1.34-1-1.34-1.56-1.37a1.36,1.36,0,0,0-1,.28c-.44.29-.49.36-.49.8a.9.9,0,0,0,.33.79,1,1,0,0,0,.51.32c.09,0,.24.15.32.35a1.79,1.79,0,0,0,.57.6,7.22,7.22,0,0,1,1,.79,3,3,0,0,0,1.66.81c.07,0,.2-.14.28-.33M71,40.93a8.17,8.17,0,0,0,.89-1.08,5.1,5.1,0,0,1,.6-.75c.13-.13.25-.28.25-.36a3.63,3.63,0,0,1,.3-.73c.27-.55.29-.65.16-1-.23-.56-.43-.69-1-.69s-.58,0-1,.62a10.24,10.24,0,0,0-1.14,3.1c-.2.74-.23,1-.12,1a.25.25,0,0,1,.14.21c0,.33.43.16.94-.38m-19.72,0c0-.07-.09-.25-.24-.41s-.3-.38-.3-1a1.64,1.64,0,0,0-.25-1.05c-.13-.19-.38-.65-.57-1-.73-1.41-1.43-1.83-2.06-1.24a1.52,1.52,0,0,0,0,1.7c.14.18.58.76,1,1.31s.9,1.18,1.12,1.43.46.44.87.4c.26,0,.48-.09.5-.16m3.13-1.17c-.08-.25-.29-1-.47-1.75s-.38-1.32-.47-1.32a.49.49,0,0,1-.29-.17,1.64,1.64,0,0,0-1.37,0,1.85,1.85,0,0,0,.1,1.59c.69,1.28,1.58,2.12,2.27,2.12h.39Zm3.37-.06c.25-.12.29-.2.29-.67a8.2,8.2,0,0,0-.3-1.58c-.17-.57-.34-1.28-.39-1.57-.13-.75-.22-.9-.59-1a2.88,2.88,0,0,0-1.89.32c-.43.2-.45.8,0,1.19a3.21,3.21,0,0,1,.49.81,4.25,4.25,0,0,0,.42.88,15.52,15.52,0,0,0,1.67,1.81,2.49,2.49,0,0,0,.33-.14m8.07-.22a2.78,2.78,0,0,0,.72-1.59,12.66,12.66,0,0,1,1.22-2.83c.3-.51.22-.67-.52-1s-1-.42-1.55-.17c-.33.15-.39.24-.34.52A7.82,7.82,0,0,1,65.1,36a4.6,4.6,0,0,0-.17,3c.25,1,.43,1.08.95.49m-5.13-1.06a26.58,26.58,0,0,0,0-5.61c-.14-.7-.21-.84-.57-1.08-.52-.35-.76-.35-1.18,0a1.69,1.69,0,0,1-.47.33,6.26,6.26,0,0,0,0,2.51c.07.34.27,1.08.45,1.63a3.27,3.27,0,0,0,.81,1.55,2.16,2.16,0,0,1,.5.68c0,.17.29.16.44,0", transform: "translate(0 -12.72)", fill: "#b98e5e" }),
        React__default['default'].createElement("path", { d: "M6.66,66.15A51.33,51.33,0,0,1,4.6,58.28c0-.38-.09-.86-.11-1.09s-.12-.85-.19-1.39a47.8,47.8,0,0,1-.06-7.91c.1-.55.21-1.31.25-1.69s.21-1.24.36-1.92.36-1.62.46-2.09.42-1.55.7-2.39.58-1.71.64-1.93.17-.51.22-.64.48-1.18.94-2.33c1.22-3.1,4-7.81,5.48-9.27.83-.82,2.08-1.7,2.08-1.45s.07.15.56,0l1-.41a2.12,2.12,0,0,1,.65-.21,2.77,2.77,0,0,0,.78-.41,8.28,8.28,0,0,1,1.2-.65c.33-.13,1.45-.65,2.48-1.17a22,22,0,0,1,2.86-1.19c.55-.17,1.47-.51,2.06-.75a19.8,19.8,0,0,1,1.91-.72l1.2-.36c.2-.07.85-.22,1.46-.35l1.28-.28a10.69,10.69,0,0,1,1.34-.28,21.73,21.73,0,0,1-3.32,1.09,21.57,21.57,0,0,0-2.8,1c-.73.33-1.93.83-2.66,1.12a21.67,21.67,0,0,0-2.62,1.26c-.71.41-1.78,1-2.39,1.29a26.94,26.94,0,0,0-5.18,3.75C13,28.78,12.73,29.08,11,32.23A37,37,0,0,0,7.26,43.34a24.7,24.7,0,0,0-.77,6c-.07,1.6-.13,5-.13,7.5a58.47,58.47,0,0,0,.25,7c.12,1.35.22,2.47.19,2.49s-.09-.08-.14-.23", transform: "translate(0 -12.72)", fill: "#b98e5e" }),
        React__default['default'].createElement("path", { d: "M81.33,84c-1-.08-2.65-.16-3.75-.16a23.05,23.05,0,0,1-3.81-.31c-1-.16-2.79-.37-4-.46a30.48,30.48,0,0,1-4.58-.69c-1.31-.29-3.25-.65-4.31-.81a27.26,27.26,0,0,1-3.61-.84c-.93-.29-2.78-.88-4.13-1.29-2.26-.7-5.6-2-8.94-3.39a37.7,37.7,0,0,1-3.43-1.81c-1.13-.67-2.8-1.63-3.69-2.12A129.05,129.05,0,0,1,21.9,61.68c-1.17-1-2.81-2.38-3.64-3a11.32,11.32,0,0,1-2.78-3.05A9.92,9.92,0,0,1,13.56,52a13.58,13.58,0,0,1-.63-2.08,4.46,4.46,0,0,0-.47-1.25L12,47.74v-2c0-2.41.1-2.94.59-2.94a1.77,1.77,0,0,0,.79-.32c.37-.23.48-.38.48-.63a1.63,1.63,0,0,1,.12-.59c0-.15.34-.94.64-1.78a23.7,23.7,0,0,1,5.3-8.29,13.38,13.38,0,0,1,3.72-2.55c5.24-3,8.51-4.47,10.19-4.75a25.6,25.6,0,0,0,4.77-1.12,20.54,20.54,0,0,1,4-.64L47,21.62c1-.1,2.84-.17,5.11-.17a41.25,41.25,0,0,1,8.65.7,25.38,25.38,0,0,0,2.94.23,18.14,18.14,0,0,1,4.84.69,19.93,19.93,0,0,0,2.68.52l1.86.25,1.92.29a24.72,24.72,0,0,1,2.62.52,17,17,0,0,0,2.19.48,17.34,17.34,0,0,1,5.89,2.09c1.32.66,3,1.53,3.68,1.94s1.76.94,2.33,1.19a29.58,29.58,0,0,1,4.54,2.4c.64.41,1.6,1,2.15,1.28s1.19.62,1.42.78a2,2,0,0,0,1,.26,9.83,9.83,0,0,1,2.77.78,13.15,13.15,0,0,1,4,2,33.54,33.54,0,0,1,9.21,9.43,39.45,39.45,0,0,1,3,5.55,4.17,4.17,0,0,1,.52,2.25,11.75,11.75,0,0,1-.76,3.68,48.32,48.32,0,0,1-4.24,10.07,22.62,22.62,0,0,1-3,4.43,35.12,35.12,0,0,1-6.5,6.1,13,13,0,0,1-3.62,2.07,32.79,32.79,0,0,1-5.76,1.81c-.35,0-2.55.28-4.87.52A51.19,51.19,0,0,1,81.33,84M55.52,67a29.45,29.45,0,0,0,.95-4.21c0-.24-.06-.27-.5-.27-.61,0-.82.2-1.7,1.57a4.81,4.81,0,0,0-.94,2.53c0,.36.05.46.32.6a2.07,2.07,0,0,1,.49.36c.11.13.3.18.63.16s.48-.06.75-.74m5.6-.6.47-.32V65.3a7.12,7.12,0,0,0-.35-2c-.18-.68-.35-1.32-.35-1.43s-.33-.24-.46,0c0,.09-.14.28-.22.41a4.36,4.36,0,0,0-.61,2c0,.51-.13,1.1-.17,1.3a1.31,1.31,0,0,0,.11.79c.18.36.25.41.66.41a1.66,1.66,0,0,0,.92-.31m11.45-.18c.15-.48.14-.53-.17-1.31-.19-.45-.61-1.38-1-2.06l-.6-1.26h-.54a1.15,1.15,0,0,0-.66.15,13.23,13.23,0,0,0,.85,3.76c.35,1.07.49,1.19,1.36,1.2.54,0,.54,0,.71-.48M66.9,66.1c.37-.41.44-.72.23-1a2,2,0,0,1-.18-1c0-1.3-.64-2.45-1.38-2.45-.43,0-.48.23-.48,1.92,0,1.48,0,1.69.29,2.25s.29.6.76.6a.87.87,0,0,0,.76-.29m11-2a1.55,1.55,0,0,0,.24-1c0-.58,0-.64-.37-.85a9.74,9.74,0,0,1-1.2-1A4.46,4.46,0,0,0,75,60.22c-.55-.22-.76-.36-.87-.6s-.19-.33-.64-.33H73v.64c0,.77.16,1.13,1,2.15,1.32,1.62,1.82,2.08,2.38,2.19,1,.21,1.24.18,1.5-.2M51.45,62a8.87,8.87,0,0,0,2-2.2c.22-.41.22-.43,0-.66-.36-.4-1.06-.32-1.93.24a6.52,6.52,0,0,0-2.09,2,.45.45,0,0,0,.17.32,1.47,1.47,0,0,1,.3.48c.22.52.68.48,1.5-.16M79.5,58.51c.27-.76.29-1.08.11-1.29a1.75,1.75,0,0,1-.23-.38,2.41,2.41,0,0,0-.92-.46A7.35,7.35,0,0,1,77,55.72a2,2,0,0,0-1.5-.39h-.87v.53c0,.31.06.52.13.52a2.07,2.07,0,0,1,.63.44c.62.54,1.3,1.12,2,1.68a1.51,1.51,0,0,0,1.25.43h.7Zm-30.2-.29a9.79,9.79,0,0,0,1.23-1,8,8,0,0,1,.88-.73c.22-.13.22-.14-.12-.42a1.46,1.46,0,0,0-.52-.3,16,16,0,0,0-2.94,1,.59.59,0,0,0-.21.4.34.34,0,0,1-.17.28c-.1,0-.18.11-.18.17a3.72,3.72,0,0,0,1.27.92,2.65,2.65,0,0,0,.76-.37m32.78-2.95a.51.51,0,0,1,.31-.17c.11,0,.16-.18.16-.68,0-.68-.13-1-.47-1a2.48,2.48,0,0,1-.73-.4,5.06,5.06,0,0,0-2.17-.89c-.71-.19-1-.33-1-.48-.07-.3-.28-.26-.65.13l-.34.35.32.5a7.55,7.55,0,0,0,2.83,2.09c1.34.71,1.55.77,1.77.5M46.7,54.41a1.9,1.9,0,0,1,.82-.48c.92-.24,1.35-.47,1.49-.76s.18-.35-.24-.5a7,7,0,0,0-2.73,0l-.61.14,0,.74c0,.91.1,1.19.64,1.19a.81.81,0,0,0,.67-.34m-4.4-1.86a11.66,11.66,0,0,1,1.13-.65c1.14-.6,1.63-1,1.63-1.35s-.07-.34-.49-.49a1.11,1.11,0,0,0-.91,0,4.05,4.05,0,0,1-1.1.15,1.82,1.82,0,0,0-1.21.36,2.34,2.34,0,0,1-.62.35,1.92,1.92,0,0,0-.09.81c0,.7,0,.82.21.82a1.55,1.55,0,0,1,.48.17c.4.22.41.22,1-.16M85.58,49.1a.72.72,0,0,1,.47-.17h.34V47.34L85.9,47c-.48-.32-.56-.33-1.49-.27a9.37,9.37,0,0,0-4,1.26c-1,.62-.93.72.29,1.06,1,.27,4.63.29,4.84,0m-42-.82c.36-.18.85-.45,1.1-.6l.44-.29L44.76,47c-.56-.58-.86-.67-2.17-.67-1,0-1.27,0-1.57.23s-.38.29-.38.69,0,.5.11.53.12.22.12.42v.34h1a3.21,3.21,0,0,0,1.66-.3m36.71-2.59a4.83,4.83,0,0,1,1.31-.53A6.71,6.71,0,0,0,84.18,44a1.1,1.1,0,0,1,.18-.45A.85.85,0,0,0,84.5,43c0-.35-.73-.79-1.21-.79-.85,0-4.23,2.81-4.23,3.51,0,.29,0,.33.36.33a1.77,1.77,0,0,0,.83-.33M43.19,44.57c.57-.3.64-.47.28-.71-.19-.11-.69-.47-1.15-.81a4.25,4.25,0,0,0-2-.92c-1.68-.42-1.83-.41-2.42.2a2.2,2.2,0,0,0-.49.6,2.35,2.35,0,0,0,.52.65c.55.57.54.56,2.1.78a3.27,3.27,0,0,1,.93.24,4.56,4.56,0,0,0,2.26,0m34.28-1a14.47,14.47,0,0,0,1.75-1.05,5.09,5.09,0,0,1,.9-.61,2.58,2.58,0,0,0,.5-.4c.53-.52.54-.89,0-1.26s-1.14-.69-1.31-.62a3.16,3.16,0,0,0-.66.73,15,15,0,0,1-1.09,1.32,5.35,5.35,0,0,0-1.45,2c0,.38.2.36,1.32-.16m-3.85-1a6,6,0,0,0,1.3-1.09,7.43,7.43,0,0,1,1.55-1.26l.66-.35,0-.79c0-.72,0-.81-.28-1.12a.94.94,0,0,0-.87-.33c-.55,0-.56,0-1.13.79a8.07,8.07,0,0,0-1.89,4c0,.36.06.38.62.14M46.81,41.14c.11-.29.09-.41-.22-1a18.46,18.46,0,0,0-1.38-2c-1-1.34-1-1.34-1.56-1.37a1.36,1.36,0,0,0-1,.28c-.44.29-.49.36-.49.8a.9.9,0,0,0,.33.79,1,1,0,0,0,.51.32c.09,0,.24.15.32.35a1.79,1.79,0,0,0,.57.6,7.44,7.44,0,0,1,1,.82,2.65,2.65,0,0,0,1.63.78c.07,0,.2-.14.28-.33M71,40.93a8.17,8.17,0,0,0,.89-1.08,5.1,5.1,0,0,1,.6-.75c.13-.13.25-.28.25-.36a3.63,3.63,0,0,1,.3-.73c.27-.55.29-.65.16-1-.23-.56-.43-.69-1-.69s-.58,0-1,.62a10.24,10.24,0,0,0-1.14,3.1c-.2.74-.23,1-.12,1a.25.25,0,0,1,.14.21c0,.33.43.16.94-.38m-19.72,0c0-.07-.09-.25-.24-.41s-.3-.38-.3-1a1.64,1.64,0,0,0-.25-1.05c-.13-.19-.38-.65-.57-1-.73-1.41-1.43-1.83-2.06-1.24a1.52,1.52,0,0,0,0,1.7c.14.18.58.76,1,1.31s.9,1.18,1.12,1.43.46.44.87.4c.26,0,.48-.09.5-.16m3.18-1c-.1-.25-.51-1.85-.74-2.86,0-.19-.14-.33-.24-.33a.52.52,0,0,1-.3-.17,1.64,1.64,0,0,0-1.37,0,1.85,1.85,0,0,0,.1,1.59c.69,1.28,1.58,2.12,2.27,2.12.37,0,.39,0,.28-.31m3.32-.18c.25-.12.29-.2.29-.67a8.2,8.2,0,0,0-.3-1.58c-.17-.57-.34-1.28-.39-1.57-.13-.75-.22-.9-.59-1a2.88,2.88,0,0,0-1.89.32c-.43.2-.45.8,0,1.19a3.21,3.21,0,0,1,.49.81,4.25,4.25,0,0,0,.42.88,15.52,15.52,0,0,0,1.67,1.81,2.49,2.49,0,0,0,.33-.14m8.07-.22a2.78,2.78,0,0,0,.72-1.59,12.66,12.66,0,0,1,1.22-2.83c.3-.51.22-.67-.52-1s-1-.42-1.55-.17c-.33.15-.39.24-.34.52A7.82,7.82,0,0,1,65.1,36a4.84,4.84,0,0,0-.24,2.77c.07.26.16.61.19.79.08.43.43.41.83,0m-5.13-1.06a26.58,26.58,0,0,0,0-5.61c-.14-.7-.21-.84-.57-1.08-.52-.35-.76-.35-1.18,0a1.69,1.69,0,0,1-.47.33,6.26,6.26,0,0,0,0,2.51c.07.34.27,1.08.45,1.63a3.27,3.27,0,0,0,.81,1.55,2.16,2.16,0,0,1,.5.68c0,.17.29.16.44,0", transform: "translate(0 -12.72)", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M73.7,77.51l-6.52-.64a48.72,48.72,0,0,1-5.27-.71c-.83-.19-2.19-.42-3-.51A45.35,45.35,0,0,1,51.3,73.8a23.85,23.85,0,0,1-5.59-2.18l-4-2.06c-1.94-1-9.24-5.14-10.42-5.88-2.07-1.32-7.28-4.77-8.32-5.53-.61-.43-1.63-1.11-2.27-1.48A26.87,26.87,0,0,1,18,54.74a10.4,10.4,0,0,1-2.62-2.81,11.07,11.07,0,0,1-1.76-3.35l-.66-1.81v2.8l-.47-.92L12,47.74v-2c0-2.41.1-2.94.59-2.94a1.77,1.77,0,0,0,.79-.32c.37-.23.48-.38.48-.63a1.63,1.63,0,0,1,.12-.59c0-.15.35-.94.64-1.78a23.7,23.7,0,0,1,5.3-8.29,13.38,13.38,0,0,1,3.72-2.55c5.24-3,8.51-4.47,10.19-4.75a25.6,25.6,0,0,0,4.77-1.12,20.54,20.54,0,0,1,4-.64L47,21.62c1-.1,2.84-.17,5.11-.17a41.25,41.25,0,0,1,8.65.7,25.38,25.38,0,0,0,2.94.23,18.14,18.14,0,0,1,4.84.69,19.93,19.93,0,0,0,2.68.52l1.86.25,1.92.29a24.72,24.72,0,0,1,2.62.52,17,17,0,0,0,2.19.48,17.34,17.34,0,0,1,5.89,2.09c1.32.66,3,1.53,3.68,1.94s1.76.94,2.33,1.19a29.58,29.58,0,0,1,4.54,2.4c.64.41,1.6,1,2.15,1.28,1.5.75,1.91,1,1.76,1.2a.76.76,0,0,0,.08.93c.12.1.83.58,1.57,1.07s2.38,1.62,3.61,2.54a29.84,29.84,0,0,1,4.4,3.87,16.72,16.72,0,0,1,3.13,3.77c1.47,2.36,2.1,4,2.1,5.56a20,20,0,0,1-.19,2.13c-.17,1.4-.58,2.75-2,6.56a31.42,31.42,0,0,1-3.66,6.59,15.79,15.79,0,0,1-2.84,3.22A18.17,18.17,0,0,1,103,74c-2.74,1.62-3.82,2.07-5.5,2.26-.73.08-1.94.3-2.68.47a36.56,36.56,0,0,1-4.25.67,62.58,62.58,0,0,1-8.5.33,63.47,63.47,0,0,1-8.32-.24m8.09-1.32a4.08,4.08,0,0,0,2-.53l.91-.48a15.49,15.49,0,0,0-.88-1.48c-.51-.79-1.16-1.83-1.46-2.3S81,69.53,80,68.31s-2.13-2.59-2.46-3L77,64.41h.35a1,1,0,0,0,.82-.94c0-.22.13-.14.85.55.46.44,1.26,1.17,1.76,1.61a59.09,59.09,0,0,1,5.71,6.7c.39.6,1,1.43,1.32,1.82l.6.72,1.66.07c.92,0,2.3.1,3.06.14a7.86,7.86,0,0,0,2.74-.24,4.74,4.74,0,0,0,2.28-.94,11.8,11.8,0,0,0,1.43-1.15l.49-.5-2.3-1.38c-3-1.78-5.37-3.31-10.22-6.61-3.32-2.25-4.68-3.2-7.91-5.47-.21-.14-.21-.18,0-.52l.18-.37,1.55.53a23.34,23.34,0,0,1,3.75,1.72c1.22.66,3.21,1.71,4.43,2.34s3,1.64,4,2.24,2.64,1.49,3.61,2a34.42,34.42,0,0,1,3,1.7,17.07,17.07,0,0,0,2.15,1.19l.86.39,1.5-.77a6.66,6.66,0,0,0,2.94-2.35,3.68,3.68,0,0,0,1-2.09c.33-1.17.39-1.87.17-1.93-.43-.11-2-.67-3.19-1.09-.71-.26-2.32-.77-3.55-1.13s-3.42-1.1-4.82-1.63-3.11-1.11-3.79-1.28-2.45-.78-4-1.35-3.17-1.13-3.72-1.27c-1.82-.46-3.26-1-3.26-1.17a.49.49,0,0,0-.46-.46,2.18,2.18,0,0,1-.94-.6,15,15,0,0,1,3.44.59,19.52,19.52,0,0,0,2.27.47c.6.07,2,.34,3.08.6,4.46,1.06,11.35,2.82,12.28,3.13a29.78,29.78,0,0,0,7.18,1.63h.83l.66-1.15a10.22,10.22,0,0,0,.94-2.24,4,4,0,0,0,.16-2.2,10.86,10.86,0,0,0-.63-2.44l-.5-1.34-5.1-.07a55.89,55.89,0,0,1-7-.32,31.24,31.24,0,0,0-3.32-.25,26.13,26.13,0,0,1-2.79-.18c-.79-.09-2.45-.17-3.81-.17h-2.4l0-.88,0-.86.58-.07L91,46.83c6.3-.42,8.71-.58,10.07-.7.73-.05,2-.11,2.88-.11,1.44,0,1.58,0,2.17-.32s.7-.32.36-1.32a21.1,21.1,0,0,0-2.53-3.79,4.86,4.86,0,0,0-1.18-.94,17,17,0,0,1-1.63-1l-1-.7-.53.14c-.29.07-2.24.65-4.32,1.29S90.67,40.76,89.71,41s-2.52.77-3.46,1.11l-1.71.63-.43-.29a1.51,1.51,0,0,0-.67-.29c-.36,0-.23-.1,2.43-1.59,1.34-.74,3-1.71,3.61-2.13a22,22,0,0,1,2.44-1.31,23.72,23.72,0,0,0,2.48-1.34L95.6,35l-.44-.46a15.51,15.51,0,0,0-3.53-2.39,7.75,7.75,0,0,0-2.82-1l-2.26-.49-.78-.2-.39.45c-.21.25-.82,1.09-1.34,1.85S82.4,35,81.56,36s-2,2.43-2.68,3.2S77,41.35,76.1,42.27,74.45,44,74.42,44a13,13,0,0,0,1.66,1c.92.53,2.22,1.35,2.89,1.83,1.1.79,1.27.87,1.62.81s.36,0-.22.35a2.34,2.34,0,0,0-.62.53c0,.16.27.32.67.4l.36.09-.56.95a12,12,0,0,0-.76,1.57c-.17.56-.23.62-.47.56-.59-.15-.87-.3-.87-.48s-.28-.21-.62.17l-.34.35.32.51a2.84,2.84,0,0,0,.67.73,1.22,1.22,0,0,1,.32.28,12.11,12.11,0,0,1-.67,1.07l-.68,1-.37-.23a2.26,2.26,0,0,0-1.25-.23h-.87v.53c0,.33.05.52.15.52a3.14,3.14,0,0,1,.72.53l.58.54-.27.48c-.15.25-.5.78-.78,1.16a4.25,4.25,0,0,0-.51.79c0,.24-.21.08-.35-.24s-.2-.35-.67-.35H73L73,60a6.24,6.24,0,0,0,.09.89c.08.25-1.62.72-2.59.71-.64,0-.8,0-.93.22a1.61,1.61,0,0,1-.82.36,1.81,1.81,0,0,0-.67.2,3.92,3.92,0,0,0,.46.6,27.52,27.52,0,0,1,4,8.29c.31.92.74,2.17,1,2.77l.42,1.1.81.38a11.78,11.78,0,0,0,1.82.62,18.18,18.18,0,0,0,5.18,0m-11.7-1.63a8,8,0,0,0-.12-1c-.06-.35-.34-2.1-.64-3.89-.79-5-1.52-7.16-2.39-7.16a.4.4,0,0,1-.47-.34c-.17-.5-.93-.77-1.25-.45a1,1,0,0,0-.13.58c0,.24,0,.44-.09.44s-.86.08-1.81.19a14,14,0,0,1-1.89.12,1.53,1.53,0,0,1-.31-.77c-.14-.73-.36-.89-.57-.43-.06.1-.17.29-.22.4a4,4,0,0,0-.6,1.95c0,.51-.13,1.1-.17,1.3a1.31,1.31,0,0,0,.11.79c.18.38.25.41.68.41a1.12,1.12,0,0,0,.7-.2c.11-.1.23-.16.25-.14s-.07,1.41-.22,3.08-.29,3.12-.29,3.22c0,.34,1,.89,2.22,1.25.67.2,1.53.49,1.91.64.67.28.82.29,3,.3h2.29ZM56.35,71.49c.28-.79.93-2.51,1.47-3.83s1.06-2.79,1.19-3.28l.23-.9H56.38l0-.46.07-.47H56a1.22,1.22,0,0,0-.66.15c-.12.12-.27,0-.75-.5s-.8-.9-1-1.19l-.44-.54.29-.45c.36-.51.36-.59.11-.87a.89.89,0,0,0-.68-.21,5,5,0,0,0-2.64,1.61c-.69.66-.8.93-.51,1.17a1.47,1.47,0,0,1,.3.48c.08.2.23.35.34.35a12.64,12.64,0,0,1-2.58,2.61A10.31,10.31,0,0,0,45.35,68l-.31.61.33.35c.84.89,1.62,1.35,3.94,2.29A25.62,25.62,0,0,0,53,72.52c.73.15,1.36.31,1.39.33a2.6,2.6,0,0,0,.77.06h.73ZM40.72,65.55c.59-.46,1.84-1.34,2.79-1.94s2.33-1.53,3.06-2a30.16,30.16,0,0,1,2.86-1.73c.83-.45,1.67-.91,1.86-1a4.4,4.4,0,0,0,.38-.27,3.35,3.35,0,0,0-.38-.7,4.09,4.09,0,0,1-.41-.82c0-.07.16-.24.35-.35a1,1,0,0,0,.35-.27c0-.22-.73-.59-1.09-.56s-.44,0-1.17-1.07c-.59-.86-.72-1.13-.6-1.22a1.73,1.73,0,0,0,.42-.68,2.2,2.2,0,0,0-1-.31c-.26,0-.45-.21-1.23-1.35-.52-.76-1-1.48-1.09-1.63l-.15-.28H41.75c-2.62,0-5.07-.08-7.54-.24-5.65-.37-6.45-.44-8.59-.75a23.87,23.87,0,0,0-3.7-.29c-1.68,0-3.52.18-3.52.36s.27.78.61,1.64a13.35,13.35,0,0,0,2.7,4.63c.45.48,1,1.16,1.28,1.49s.5.6.64.56c1.14-.34,3.84-.84,9.21-1.7.86-.14,2.42-.45,3.45-.7a26,26,0,0,1,4-.64c1.14-.1,2.75-.31,3.58-.47l1.53-.28a2,2,0,0,1,0,.64c0,.59,0,.65-.31.77s-4.32,1.37-5.69,1.75c-.44.13-1.56.54-2.45.91s-2.27.86-3,1.11-2.1.65-3,.93-1.66.52-1.78.55a.35.35,0,0,0-.23.1,31.86,31.86,0,0,0,3.22,2.77,15.51,15.51,0,0,0,5.22,3.19,3.75,3.75,0,0,1,1.09.48c.73.49,1,.42,2.23-.54m2.54-17.13a1.11,1.11,0,0,1,.78-.07l.76.16.4.07L45,48.16c-.24-.4-.24-.44-.07-.63s.14-.24-.45-.77a5.86,5.86,0,0,1-1.06-1.35c-.39-.72-.42-.78-.21-.84a1.06,1.06,0,0,0,.42-.29c.19-.21.17-.23-.39-.59s-.67-.45-.46-.66-.28-.26-1.42-.62l-1.85-.58c-.16-.06-2.62-.75-5.47-1.52s-6.67-1.87-8.5-2.44a41.38,41.38,0,0,0-5.09-1.45l-.47-.08-.48.81c-.64,1.1-2.14,4.13-2.63,5.32a4,4,0,0,0-.41,1.61c0,.65,0,.65.44.78a22.19,22.19,0,0,0,2.76.23c1.28,0,2.41.11,2.51.15s1,.18,1.92.3,2.92.4,4.36.58,4.11.54,5.94.77c3.59.44,6.25.84,6.41.94a.59.59,0,0,1,.11.41v.34h1a5,5,0,0,0,1.4-.16M74.41,43.3A16.37,16.37,0,0,1,76,40.53a5.33,5.33,0,0,1,.68-.4l.47-.25,0-.84,0-.85,1.49-2.11c3-4.23,3.51-5.17,3.51-6.33v-.6l-.72-.34a8.73,8.73,0,0,0-1-.43,5.55,5.55,0,0,1-.93-.48,7.27,7.27,0,0,0-1.8-.67c-.64-.17-1.4-.38-1.68-.48a5.57,5.57,0,0,0-1.58-.17c-.92,0-1.1,0-1.17.2A38.78,38.78,0,0,0,71.6,32.4a44.17,44.17,0,0,1-2,7.54l-.52,1.19.66.38C72.42,43,74,43.9,74.1,43.88a1.73,1.73,0,0,0,.31-.58m-30-1.21a6.45,6.45,0,0,0,1-.47,1.06,1.06,0,0,1,.88-.21c.4.06.45,0,.62-.34s.27-.41.35-.41a1,1,0,0,0,.44-.22,1.85,1.85,0,0,1,.55-.27c.21,0-.1-.3-1.52-1.29a17.44,17.44,0,0,1-2.17-1.72c-.27-.32-.47-.46-.68-.46a22.22,22.22,0,0,1-4.45-2.78c-.87-.63-2.3-1.57-3.18-2.11a21.15,21.15,0,0,1-2.76-2,7.53,7.53,0,0,0-1.9-1.3l-.77-.3-1.26.31a12,12,0,0,0-1.95.68,9,9,0,0,1-1.17.5,8.32,8.32,0,0,0-2.87,1.73c-.8.75-1.35,1.48-1.21,1.61a7.52,7.52,0,0,0,1.15.4,87.42,87.42,0,0,1,10.5,4.23c.9.43,2.61,1.17,3.82,1.64a36.59,36.59,0,0,1,4.08,1.91c1,.57,1.92,1,2,1a3.53,3.53,0,0,0,.59-.2m6.92-1.15c0-.07-.09-.25-.24-.41a.83.83,0,0,1-.3-.64c0-.33,0-.36.86-.62l.86-.27.38.43a1.86,1.86,0,0,0,1.38.77c.33,0,.35,0,.24-.31a26.91,26.91,0,0,1-.7-2.73c0-.08.17.09.36.37l.45.61a1.11,1.11,0,0,0,.59-.1c.48-.16.52-.16.63,0a8.83,8.83,0,0,0,.87,1c.75.77.79.79,1.1.65s.31-.21.31-.64A4.72,4.72,0,0,0,58,38a1.29,1.29,0,0,1-.07-.58,2.53,2.53,0,0,1,.7-.22l.62-.14.55.61a2.76,2.76,0,0,1,.55.73.14.14,0,0,0,.15.13c.38,0,.43-.28.43-2.12A7.81,7.81,0,0,1,61,34.61a7.56,7.56,0,0,1,.64,1.49l.55,1.48,1.24.64c1.4.72,1.66.92,1.66,1.34,0,.22,0,.29.24.29a.54.54,0,0,0,.4-.2c.12-.18.29-.12,1.61.58l1.47.77v-.34c0-.17-.06-.85-.12-1.5-.12-1.16-.08-2,.35-8.16.06-.86.12-2.36.12-3.32V25.92l-1-.31a30.52,30.52,0,0,0-7-1.25,15.6,15.6,0,0,1-2.42-.23,1.94,1.94,0,0,0-.71-.09l-.26,0,.72,2.56c.39,1.41.89,3.07,1.09,3.68s.36,1.14.36,1.18-.13,0-.29,0a.76.76,0,0,0-.64.25,1.64,1.64,0,0,1-.48.31s-.1.09-.1.19c0,.55-.3-.26-.94-2.51-.74-2.62-1.42-4.23-2-4.8a1.55,1.55,0,0,0-.91-.38c-.32-.05-1.1-.19-1.74-.32A14,14,0,0,0,51.06,24,4.23,4.23,0,0,1,50,23.84a3,3,0,0,0-2,0,2.17,2.17,0,0,1-.81.17,1.71,1.71,0,0,0-1,.29,1.78,1.78,0,0,0-.43.38,19.79,19.79,0,0,0,1.56,2.65c.46.71,1.12,1.75,1.45,2.32s1.06,1.57,1.59,2.23,1.3,1.69,1.71,2.29c1.24,1.8,1.82,3,1.16,2.38a1.21,1.21,0,0,0-.79-.2h-.57l-1.52-1.83c-.85-1-1.92-2.36-2.39-3a15.78,15.78,0,0,0-3.61-4c-.54-.36-1.23-.86-1.56-1.11-.58-.44-.58-.44-1.46-.38l-2.5.16a8.72,8.72,0,0,0-3.26.69c-.89.33-1.71.6-1.8.64s.17.29.75.67c1.77,1.2,5.95,4.46,7.58,5.93.9.8,2.76,2.33,4.14,3.39a40.88,40.88,0,0,1,3.3,2.77c.77.8.84.85,1.27.81.26,0,.48-.09.5-.16", transform: "translate(0 -12.72)", fill: "#dbe6b7" }),
        React__default['default'].createElement("path", { d: "M78,45.28a22.33,22.33,0,0,1,2.73-1.75c.46-.24.69-.34.53-.23s-.64.54-1.06.94a3.45,3.45,0,0,1-1.28.85l-.71.18c-.12,0-.21,0-.21,0", transform: "translate(0 -12.72)", fill: "#dbe6b7" })));
};

var Icon$r = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("path", { d: "M128,64A64,64,0,1,1,64,0a64,64,0,0,1,64,64", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M69.83,102.41c-.09,0-.58-.07-1.09-.11l-2.14-.22-2.48-.26c-.7-.07-1.76-.23-2.36-.35-1.67-.33-2.82-.58-2.88-.62s-.61-.11-1.31-.21-1.72-.3-2.27-.44c-1-.25-4.15-1.31-5.34-1.78l-1.73-.67a59.16,59.16,0,0,1-9.35-5.09,46.18,46.18,0,0,1-7.29-5.86l-2.83-2.63c-.21-.19-1-1-1.71-1.83a19.82,19.82,0,0,1-2.47-3.28c-.63-1-1.61-2.49-2.18-3.32A31.19,31.19,0,0,1,19,69.1a42.44,42.44,0,0,1-2.13-7.19c-.3-1.72-.56-3.43-.77-5.33a15.9,15.9,0,0,1,.37-4.67,51.75,51.75,0,0,1,1.23-5.24c.19-.7.47-1.75.61-2.35a11.22,11.22,0,0,1,1.27-2.92c.54-1,1.29-2.38,1.67-3A6.16,6.16,0,0,1,23,36.23a5.87,5.87,0,0,1,1.39-1.07c.65-.19,1.91-.54,2-.54s0,.06,0,.13-.07.13,0,.13a.42.42,0,0,0,.19-.12,3.37,3.37,0,0,1,.54-.41c.4-.25.43-.3.39-.53-.1-.47.29-.87,2.25-2.33a13.88,13.88,0,0,1,2.93-1.87,36.84,36.84,0,0,1,6-2.11c.55-.13,1.45-.34,2-.49a26.67,26.67,0,0,1,3.78-.6c.84-.09,2.08-.26,2.75-.36s1.93-.21,2.8-.26,1.74-.12,2-.16,2.28-.09,4.87-.1c4.44,0,4.49,0,5.68.23l4.21.73c2,.34,3.68.68,5.11,1.05l3,.76a74.73,74.73,0,0,1,9.48,3.23c3.13,1.27,3.93,1.61,4.49,1.91.35.18,1.23.61,2,.95a18.86,18.86,0,0,1,2,1.07c.35.24,1,.64,1.52.9a55.31,55.31,0,0,1,5,3.23,36.81,36.81,0,0,1,8.68,8,17.22,17.22,0,0,1,2.26,3.54,14.72,14.72,0,0,1,1,2,7.34,7.34,0,0,1,.28,1.06,63.81,63.81,0,0,1,.6,7.09,13.92,13.92,0,0,1,0,2.4,27.8,27.8,0,0,1-.81,3.57c-.35,1.64-.24,1.62-.58,3.06-.16.67-.35,1.32-.72,2.58a28.35,28.35,0,0,1-1.59,4.19c-.62,1.39-1.14,2.54-1.17,2.57a2,2,0,0,0-.21.35c-.29.54-1.24,2.28-1.79,3.27a53.76,53.76,0,0,1-3.2,5.22l-.66.88a31.77,31.77,0,0,1-4.32,4.4l-1.19,1a3.69,3.69,0,0,1-.48.31c-.19.09-.71.38-1.17.64a1.38,1.38,0,0,1-.22.13l-.27.15c-.3.16-2.8,1.9-3.31,2.24a29.73,29.73,0,0,1-5.06,2.3c-.35.15-.56.22-.78.31a14.36,14.36,0,0,1-3.46,1c-.6.07-1.4.19-1.78.26l-1.31.27a28.19,28.19,0,0,1-4.24.12c-2,0-3.7,0-3.8,0", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M97,89a49.63,49.63,0,0,0,4.89-6.24l3.36-5.66a49.19,49.19,0,0,0,2.4-6.62c1.48-5.2,1.32-7.86,1.27-8.56a18.51,18.51,0,0,0-.43-2.82V57.12l-.38-1.36c-.21-.75-.43-1.52-.48-1.71a33.63,33.63,0,0,0-3.09-5,25,25,0,0,0-4.57-5c-.62-.47-1.87-1.45-2.79-2.19a34.38,34.38,0,0,0-4.23-3,7.44,7.44,0,0,1-1-.71,3.62,3.62,0,0,0-1.75-.82,26.08,26.08,0,0,1-3.54-1.75,10.28,10.28,0,0,0-2.23-1c-.64-.19-2.42-.81-3.93-1.37s-3-1.08-3.27-1.17l-1.51-.46c-.55-.18-1.67-.47-2.49-.67s-2.24-.58-3.16-.86a39.81,39.81,0,0,0-5.72-1.35l-3.36-.48a44.49,44.49,0,0,0-8.73-.51,41.29,41.29,0,0,0-5.33.26,39.06,39.06,0,0,0-5.54,1,30.57,30.57,0,0,0-5,1.44c-.46.2-1.21.47-1.66.61a14.85,14.85,0,0,0-2,.85c-.67.33-1.52.73-1.89.89a5.85,5.85,0,0,0-1,.52,1.56,1.56,0,0,1-.36.22s-.31.1-.61.2c-1,.39-1.23.45-1.26.35s-.88.43-1.52,1a31.42,31.42,0,0,0-3.42,5.2,56.79,56.79,0,0,0-2.54,6.94c-.08.36-.25,1.06-.36,1.55a18.45,18.45,0,0,0-.34,1.83c-.07.52-.2,1.33-.27,1.79a23.83,23.83,0,0,0,.17,5.88c.63,5.2,2.52,10.34,6.88,18.69,1.07,2,5.74,7.28,8.71,9.77,1.69,1.42,3.91,3.09,5.64,4.28a35.07,35.07,0,0,0,6.29,3.2c1.35.58,4.06,1.63,5.32,2l1.7.61a18.85,18.85,0,0,0,3.9,1c.47.08,1.33.25,1.91.39a44.75,44.75,0,0,0,6.07.84c1.51.18,2.79.33,2.83.35a26.58,26.58,0,0,0,4.24-.21l3.75-.44c1.55-.18,1.57-.32,4.54-.89a29.74,29.74,0,0,0,3.84-.8,19.61,19.61,0,0,0,3.45-1.73A38,38,0,0,0,93.81,92,27.12,27.12,0,0,0,97,89M45.43,49.16A1.17,1.17,0,0,0,45,49a2,2,0,0,1-1-.83,1.93,1.93,0,0,1,.37-.45c.44-.45.5-.46,1.77-.14a3.16,3.16,0,0,1,1.44.59c.26.2.65.47.86.61.4.27.39.38-.08.62a3,3,0,0,1-1.74,0,1.45,1.45,0,0,0-.61-.13,1.45,1.45,0,0,1-.61-.13m1.13,2.69a.65.65,0,0,1,.26-.87c.26-.18.4-.2,1.16-.2.94,0,1.17.06,1.58.5s.3.29-.69.8a2.24,2.24,0,0,1-1.46.35h-.76v-.24a.6.6,0,0,0-.09-.34m3-5.41a5.73,5.73,0,0,0-.74-.6,1,1,0,0,1-.38-.41c-.06-.14-.17-.24-.26-.24-.27,0-.61-.5-.61-.88s0-.35.39-.55a1.59,1.59,0,0,1,.74-.23c.33,0,.37,0,.72.5.2.27.57.76.82,1.07a7.16,7.16,0,0,1,.69,1c.21.41.22.5.14.71s-.14.28-.68.14a2.5,2.5,0,0,1-.83-.55m-.94,8.4c-.26.13-.65.35-.85.48a.94.94,0,0,1-1,.14c-.29-.09-.29-.09-.29-.69,0-.36,0-.59.09-.59a1.42,1.42,0,0,0,.47-.26,1.26,1.26,0,0,1,.89-.26,3.34,3.34,0,0,0,.83-.11c.5-.15,1,.05,1,.37s-.27.48-1.14.92M50.16,57a1.51,1.51,0,0,1-.1-.69v-.59l.41-.14a5,5,0,0,1,2.11,0c.31.11.31.09.18.37s-.27.27-.8.46a3.5,3.5,0,0,0-1,.48c-.29.26-.63.32-.81.15m1.56-13.12a.82.82,0,0,1,.7-.84c.29,0,.73.47,1,1a6.31,6.31,0,0,0,.42.77,1.22,1.22,0,0,1,.25.87c0,.43,0,.55.23.72s.2.25.18.31-.18.1-.37.12-.39,0-.66-.31-.62-.78-1-1.33c-.61-.85-.71-1-.71-1.35m.69,16.1a3.54,3.54,0,0,1-.5-.31c-.44-.29-.46-.32-.33-.46a.55.55,0,0,0,.14-.29.35.35,0,0,1,.12-.24,13.75,13.75,0,0,1,2.23-.79,1,1,0,0,1,.4.23c.24.2.25.21.09.31a7.25,7.25,0,0,0-.65.54,6.71,6.71,0,0,1-1,.73,5.62,5.62,0,0,1-.52.28m2.14,2.6c-.62.45-.93.49-1.09.11a1.06,1.06,0,0,0-.22-.36.34.34,0,0,1-.13-.24,4.88,4.88,0,0,1,1.57-1.49c.65-.42,1.17-.48,1.45-.17.16.16.16.18,0,.49a6.56,6.56,0,0,1-1.58,1.66m.33-19.17a1.2,1.2,0,0,1,1,0,.34.34,0,0,0,.22.13c.07,0,.2.37.35,1s.29,1.13.35,1.31l.12.33h-.28c-.54,0-1.12-.53-1.63-1.5-.28-.52-.35-1.09-.16-1.28m2.78,22.76-.22.58-.4,0c-.54,0-1-.33-1-.71a5,5,0,0,1,1.35-2.78c.24-.28.32-.33.65-.33s.36,0,.36.15a19.31,19.31,0,0,1-.69,3.07m1.7-20.35-.25.11a12.6,12.6,0,0,1-1.26-1.36,2.53,2.53,0,0,1-.28-.62,2.06,2.06,0,0,0-.37-.64.76.76,0,0,1-.23-.56c0-.25.08-.29.51-.44,1-.31,1.43-.17,1.53.46,0,.18.16.74.31,1.24a7.29,7.29,0,0,1,.25,1.32c0,.33,0,.4-.21.49m.48-5.05c0-.59,0-.69.16-.74a.77.77,0,0,0,.32-.22.51.51,0,0,1,.31-.17,1.1,1.1,0,0,1,.83.6c0,.12.08.39.13.6a21.29,21.29,0,0,1,0,4c-.14.14-.34.13-.34,0a1.28,1.28,0,0,0-.35-.45,2.35,2.35,0,0,1-.6-1.13,7.37,7.37,0,0,1-.44-2.5m2.35,24.85-.35.24a1.25,1.25,0,0,1-.69.24c-.31,0-.36,0-.49-.31a.9.9,0,0,1-.09-.59,7.88,7.88,0,0,0,.13-1,3.31,3.31,0,0,1,.45-1.49,1.58,1.58,0,0,0,.17-.3.35.35,0,0,1,.18-.16c.09,0,.18.19.29.69s.22.87.28,1a3.87,3.87,0,0,1,.12,1Zm3.92,0c-.1,0-.15.09-.12.14s-.08.09-.32.09-.38,0-.62-.48-.24-.56-.24-1.68,0-1.42.37-1.42a1.16,1.16,0,0,1,.36.1,2.59,2.59,0,0,1,.67,1.76,2.13,2.13,0,0,0,.13.76.49.49,0,0,1-.23.73m.46-22.71A9.86,9.86,0,0,0,66,44.31a3.18,3.18,0,0,1-.48,1.12,1.13,1.13,0,0,0-.25.37c0,.05-.09.09-.2.09s-.21-.08-.36-.75a3.57,3.57,0,0,1,.17-2.27,4.72,4.72,0,0,0,.22-1c0-.27,0-.35.26-.46s.5-.17,1.06.1.64.47.17,1.36m3.82,22.93c-.08.25-.13.28-.45.28-.65,0-.8-.17-1.1-1.07a9,9,0,0,1-.6-2.66.84.84,0,0,1,.49-.12h.41l.34.73a15,15,0,0,1,1,2.41,1.44,1.44,0,0,1-.1.43m-.11-20.34a5.31,5.31,0,0,0-.49.62,5.85,5.85,0,0,1-.56.68c-.36.38-.57.46-.57.24a.14.14,0,0,0-.14-.13c-.17,0-.17,0,.18-1.27.4-1.42.44-1.5.79-1.94s.35-.37.69-.37.42,0,.56.23.32.61.16.8a1.7,1.7,0,0,0-.24.49,2.3,2.3,0,0,1-.38.65m.47,2.44a6,6,0,0,1,1.47-3.09c.44-.54.48-.56.83-.56a.71.71,0,0,1,.62.25c.22.23.23.3.21.84l0,.59-.48.25a7.39,7.39,0,0,0-1.22,1,4.69,4.69,0,0,1-1,.83c-.38.12-.36.13-.36-.09m5.28-.4a8.64,8.64,0,0,0-.83.56,8,8,0,0,1-1.1.66c-.86.37-.9.38-.9.08s.37-.83,1-1.54c.23-.24.6-.68.83-1a1.92,1.92,0,0,1,.52-.55,2.62,2.62,0,0,1,.57.29c.42.24.49.31.51.59a1,1,0,0,1-.64.89m1.29.78a5.3,5.3,0,0,0,.72-.54c.1-.17.71-.1,1,.11s.29.25.28.46c-.08.74-.55,1.09-2,1.51a5.15,5.15,0,0,0-1.23.49,1.33,1.33,0,0,1-.57.22c-.21,0-.25,0-.25-.24s.15-.39.68-.91a10.87,10.87,0,0,1,1.35-1.1M74.38,64.07c-.21.26-.35.27-1,.13-.36-.07-.5-.18-1.14-.85A12.47,12.47,0,0,1,71.12,62,1.43,1.43,0,0,1,70.75,61v-.51h.39c.34,0,.39,0,.48.25s.24.31.7.49a2.81,2.81,0,0,1,1.07.72,6.39,6.39,0,0,0,.84.73c.35.25.36.28.36.71a.88.88,0,0,1-.21.7m1.24-4.19c-.11.33-.11.33-.59.32s-.71-.09-1.27-.61A7.09,7.09,0,0,0,73,59a3.68,3.68,0,0,1-.6-.49.75.75,0,0,0-.33-.23c-.08,0-.12-.11-.12-.34v-.35h.72a1.55,1.55,0,0,1,1.11.25,5.4,5.4,0,0,0,1,.45c.53.17.65.25.76.47a1.4,1.4,0,0,1,0,1.12m2.18-2.56a.44.44,0,0,0-.24.13.41.41,0,0,1-.21.14,18.15,18.15,0,0,1-2.51-1.35,3.33,3.33,0,0,1-.73-.72l-.24-.39.25-.26c.28-.29.44-.32.49-.1s.27.23.9.41a6.13,6.13,0,0,1,1.25.49,6.72,6.72,0,0,0,.63.35c.12.06.28.12.35.17s.23,1.13.06,1.13m3-4.62h-.25a.54.54,0,0,0-.36.13,11.3,11.3,0,0,1-3.62,0c-.9-.24-.93-.31-.28-.75a8.49,8.49,0,0,1,3-1c.62,0,.69,0,1.06.21l.39.26V52.7Zm2.59-15.41a20.55,20.55,0,0,0-2.21-.84c-.5-.14-1.3-.41-1.79-.61a18.3,18.3,0,0,0-3.56-1,16.39,16.39,0,0,1-1.61-.35,46.32,46.32,0,0,0-5.07-.84,13.59,13.59,0,0,1-1.75-.36,13.6,13.6,0,0,0-3.63-.51,18.37,18.37,0,0,1-2.2-.18,30.92,30.92,0,0,0-6.49-.52c-1.7,0-3.12,0-3.83.12l-3.32.36a14.63,14.63,0,0,0-3.45.62c-.7.21-1.74.46-2.31.56a9.07,9.07,0,0,0-2.71.78,52,52,0,0,0-5.72,2.92,10,10,0,0,0-2.79,1.91,17.89,17.89,0,0,0-4,6.22c-.22.63-.43,1.22-.48,1.34a1.23,1.23,0,0,0-.09.44c0,.18-.07.3-.35.47a1.23,1.23,0,0,1-.74.24c-.4,0-.61-.19-1.08-.94-.2-.32-.2-.34-.1-1.29a16.49,16.49,0,0,1,1.19-4.14c1-2.28,3-4.41,6.47-6.69a19,19,0,0,1,3.39-1.87,36.26,36.26,0,0,1,5.35-2c.37-.07,1.94-.38,3.48-.71l2.8-.56h12l2.78.35,3.56.45a21.92,21.92,0,0,1,2.31.49c2.41.62,3.37.85,4.59,1.11a36,36,0,0,1,5.63,1.81c.79.34,2,.84,2.79,1.11a10.47,10.47,0,0,1,2.27,1.09A27.31,27.31,0,0,1,85.07,38s-.26-.06-1.69-.7", fill: "#9e6f41" }),
        React__default['default'].createElement("path", { d: "M77,79c-.71-.06-2-.12-2.81-.12a16.21,16.21,0,0,1-2.85-.23c-.75-.12-2.1-.28-3-.35a22.08,22.08,0,0,1-3.43-.51c-1-.22-2.43-.49-3.23-.61A21.11,21.11,0,0,1,59,76.57l-3.1-1c-1.69-.52-4.2-1.48-6.7-2.54a28.38,28.38,0,0,1-2.58-1.36c-.84-.5-2.09-1.22-2.77-1.58a97,97,0,0,1-11.38-7.86c-.88-.75-2.11-1.78-2.73-2.29a8.48,8.48,0,0,1-2.09-2.29A7.36,7.36,0,0,1,26.17,55a10.28,10.28,0,0,1-.47-1.56,3.65,3.65,0,0,0-.35-.94L25,51.81V50.18c0-1.86,0-2.11.43-2.11a1.5,1.5,0,0,0,.61-.24c.28-.17.35-.29.35-.47a1.23,1.23,0,0,1,.09-.44c.05-.12.26-.71.48-1.34a17.89,17.89,0,0,1,4-6.22,10,10,0,0,1,2.79-1.91,52,52,0,0,1,5.72-2.92,9.07,9.07,0,0,1,2.71-.78c.57-.1,1.61-.35,2.31-.56a14.63,14.63,0,0,1,3.45-.62l3.32-.36c.71-.07,2.13-.12,3.83-.12a30.92,30.92,0,0,1,6.49.52,18.37,18.37,0,0,0,2.2.18,13.6,13.6,0,0,1,3.63.51,13.59,13.59,0,0,0,1.75.36,46.32,46.32,0,0,1,5.07.84,16.39,16.39,0,0,0,1.61.35,12.24,12.24,0,0,1,4.23,1.44c1,.47,2.22,1.13,2.8,1.46s1.47.77,2,1a22.64,22.64,0,0,1,3.39,1.81,15.91,15.91,0,0,0,1.4.83c.36.17.88.46,1.15.63a1.61,1.61,0,0,0,.92.29,6.4,6.4,0,0,1,2,.57,10.21,10.21,0,0,1,3,1.54,25.6,25.6,0,0,1,5.2,4.71,31.05,31.05,0,0,1,4,6.53,3.16,3.16,0,0,1,.38,1.68,8.59,8.59,0,0,1-.57,2.76,35.92,35.92,0,0,1-3.18,7.55A16.5,16.5,0,0,1,100.3,71a26,26,0,0,1-4.87,4.58,9.7,9.7,0,0,1-2.72,1.55,24,24,0,0,1-4.32,1.36c-.26,0-1.91.21-3.65.39A38.45,38.45,0,0,1,77,79M57.64,66.27a21.4,21.4,0,0,0,.71-3.16c0-.17,0-.2-.37-.2s-.61.15-1.28,1.18A3.6,3.6,0,0,0,56,66c0,.27,0,.34.25.45a1.42,1.42,0,0,1,.37.27c.07.1.22.13.47.11s.36,0,.56-.55m4.2-.45.35-.24V65a5.14,5.14,0,0,0-.26-1.53,9.92,9.92,0,0,1-.26-1.08c0-.19-.25-.17-.35,0a2.25,2.25,0,0,1-.16.3,3.19,3.19,0,0,0-.46,1.49,7.88,7.88,0,0,1-.13,1,1,1,0,0,0,.09.59c.13.27.18.31.49.31a1.25,1.25,0,0,0,.69-.24m8.59-.13c.11-.36.1-.4-.13-1-.14-.33-.46-1-.71-1.54l-.45-.95h-.41a.84.84,0,0,0-.49.12,9.83,9.83,0,0,0,.63,2.82c.27.8.37.89,1,.9.4,0,.4,0,.53-.36m-4.25-.11c.28-.31.33-.55.17-.79a1.44,1.44,0,0,1-.14-.73c0-1-.48-1.85-1-1.85-.32,0-.37.18-.37,1.44s0,1.27.22,1.69.22.45.58.45a.67.67,0,0,0,.57-.21m8.23-1.52a1.2,1.2,0,0,0,.18-.73c0-.44,0-.48-.28-.64a7.46,7.46,0,0,1-.9-.74,3.16,3.16,0,0,0-1.15-.78c-.41-.17-.57-.27-.64-.46s-.15-.24-.48-.24h-.39V61c0,.57.12.84.75,1.61,1,1.22,1.36,1.56,1.78,1.64.73.16.94.14,1.13-.14M54.59,62.53a7,7,0,0,0,1.54-1.65c.16-.31.16-.33,0-.49-.27-.31-.8-.25-1.45.17a4.88,4.88,0,0,0-1.57,1.49.34.34,0,0,0,.13.24,1.06,1.06,0,0,1,.22.36c.17.39.51.36,1.13-.12m21-2.65c.2-.57.22-.81.09-1a1,1,0,0,1-.17-.28,2,2,0,0,0-.69-.35,5.35,5.35,0,0,1-1-.45,1.6,1.6,0,0,0-1.12-.24H72v.35c0,.2,0,.34.1.34a1.44,1.44,0,0,1,.47.34c.46.4,1,.83,1.51,1.25a1.13,1.13,0,0,0,.94.33h.52ZM53,59.66a6.32,6.32,0,0,0,.93-.72,5.35,5.35,0,0,1,.65-.55c.17-.1.17-.11-.08-.32a1.08,1.08,0,0,0-.4-.22,12,12,0,0,0-2.2.77.48.48,0,0,0-.15.29.23.23,0,0,1-.13.21c-.07,0-.14.09-.14.13a2.79,2.79,0,0,0,1,.69,1.82,1.82,0,0,0,.56-.28m24.59-2.21a.39.39,0,0,1,.23-.13c.09,0,.12-.13.12-.5,0-.52-.09-.72-.35-.72a1.8,1.8,0,0,1-.55-.3,3.74,3.74,0,0,0-1.62-.67c-.53-.14-.74-.24-.78-.36s-.21-.19-.49.1l-.25.26.24.38a5.72,5.72,0,0,0,2.12,1.57c1,.53,1.17.58,1.33.37M51,56.81a1.32,1.32,0,0,1,.61-.36c.69-.18,1-.36,1.12-.58s.14-.26-.18-.37a5.43,5.43,0,0,0-2,0l-.46.1,0,.56c0,.68.08.89.48.89a.63.63,0,0,0,.51-.25m-3.3-1.4c.2-.13.58-.36.84-.49.86-.44,1.23-.74,1.23-1s-.06-.25-.37-.37a.89.89,0,0,0-.68,0,2.7,2.7,0,0,1-.83.12,1.37,1.37,0,0,0-.91.27,1.8,1.8,0,0,1-.46.26,1.39,1.39,0,0,0-.07.61c0,.53,0,.61.15.61a1.18,1.18,0,0,1,.37.13c.3.17.31.17.73-.12m32.45-2.58a.54.54,0,0,1,.36-.13h.25V51.51l-.36-.25c-.36-.23-.42-.24-1.12-.2a7.07,7.07,0,0,0-3,.95c-.73.46-.7.54.22.79a11.25,11.25,0,0,0,3.62,0M48.64,52.2a6.49,6.49,0,0,0,.84-.45l.33-.21-.24-.26c-.42-.44-.65-.5-1.63-.5-.74,0-.95,0-1.17.17a.45.45,0,0,0-.29.51.76.76,0,0,0,.08.41c.06,0,.09.16.09.31v.25h.75a2.28,2.28,0,0,0,1.24-.23m27.55-1.93a3.57,3.57,0,0,1,1-.4,5.09,5.09,0,0,0,2-.9.73.73,0,0,1,.14-.33.73.73,0,0,0,.11-.41c0-.27-.54-.6-.91-.6A6.49,6.49,0,0,0,76,49.33c-.58.55-.73.74-.73.94s0,.24.27.24a1.35,1.35,0,0,0,.63-.24m-27.8-.84c.43-.23.48-.36.21-.53l-.86-.61a3.11,3.11,0,0,0-1.52-.69c-1.26-.32-1.38-.31-1.82.15a1.93,1.93,0,0,0-.37.45,1.92,1.92,0,0,0,.4.49c.41.43.4.42,1.57.58a2.53,2.53,0,0,1,.7.18,3.34,3.34,0,0,0,1.69,0M74.1,48.7a9.49,9.49,0,0,0,1.31-.79,4,4,0,0,1,.68-.45,1.71,1.71,0,0,0,.37-.31c.4-.38.41-.66,0-.94s-.86-.52-1-.46a2.21,2.21,0,0,0-.49.55c-.21.28-.58.72-.82,1a4.12,4.12,0,0,0-1.09,1.54c0,.29.16.27,1-.12m-2.89-.76a4.3,4.3,0,0,0,1-.82,5.64,5.64,0,0,1,1.16-.95l.5-.26,0-.59c0-.54,0-.61-.21-.84a.72.72,0,0,0-.66-.25c-.41,0-.42,0-.84.59a6.14,6.14,0,0,0-1.42,3c0,.27,0,.28.46.11m-20.1-1.09c.08-.21.06-.3-.17-.76a15.35,15.35,0,0,0-1-1.51c-.77-1-.77-1-1.17-1a1.06,1.06,0,0,0-.76.2c-.33.22-.37.28-.37.61a.65.65,0,0,0,.25.59.8.8,0,0,0,.38.24c.07,0,.18.11.25.26a1.19,1.19,0,0,0,.42.45,6.31,6.31,0,0,1,.75.6,2.22,2.22,0,0,0,1.24.6c.05,0,.14-.11.21-.25m18.17-.15a8.43,8.43,0,0,0,.66-.81,3.46,3.46,0,0,1,.45-.56c.1-.1.19-.21.19-.27a2.45,2.45,0,0,1,.22-.55c.2-.41.22-.49.13-.73-.18-.42-.33-.51-.8-.51s-.43,0-.72.46a7.59,7.59,0,0,0-.86,2.32c-.15.56-.17.74-.09.78a.18.18,0,0,1,.11.16c0,.24.32.11.71-.29m-14.8,0c0-.06-.07-.2-.18-.31s-.23-.29-.23-.73a1.28,1.28,0,0,0-.18-.79,8.6,8.6,0,0,1-.43-.76c-.55-1-1.07-1.37-1.54-.92a1.13,1.13,0,0,0,0,1.27c.11.13.43.57.73,1a13,13,0,0,0,.83,1.07c.27.29.35.33.66.31s.36-.07.37-.12m2.35-.89c-.06-.18-.22-.77-.35-1.31s-.28-1-.35-1a.34.34,0,0,1-.22-.13,1.2,1.2,0,0,0-1,0A1.34,1.34,0,0,0,55,44.56c.51,1,1.18,1.59,1.7,1.59H57Zm2.53,0c.19-.09.21-.15.21-.5a5.94,5.94,0,0,0-.22-1.18c-.12-.43-.26-1-.29-1.18-.1-.56-.17-.68-.45-.79a2.13,2.13,0,0,0-1.41.24.54.54,0,0,0,0,.9,2,2,0,0,1,.37.6,4.1,4.1,0,0,0,.31.66,12.6,12.6,0,0,0,1.26,1.36l.25-.11m6-.17A2,2,0,0,0,66,44.43a8.85,8.85,0,0,1,.92-2.12c.22-.39.16-.51-.4-.79s-.75-.31-1.16-.12c-.24.11-.29.17-.25.38a5.29,5.29,0,0,1-.24,1.2,3.47,3.47,0,0,0-.12,2.27c.18.73.32.81.71.36m-3.84-.79a20.25,20.25,0,0,0,0-4.21c-.1-.52-.15-.63-.42-.8s-.57-.26-.89,0a1.35,1.35,0,0,1-.34.24,4.38,4.38,0,0,0,0,1.89c0,.25.2.8.33,1.22a2.39,2.39,0,0,0,.61,1.16,1.6,1.6,0,0,1,.37.51c0,.13.22.12.34,0", fill: "#b98e5e" }),
        React__default['default'].createElement("path", { d: "M21,65.61a38.24,38.24,0,0,1-1.55-5.9c0-.28-.07-.65-.08-.81s-.09-.64-.14-1a34.8,34.8,0,0,1-.05-5.93c.07-.41.16-1,.19-1.27s.15-.93.27-1.44L20,47.64c.07-.36.31-1.16.52-1.79S21,44.57,21,44.4a2.92,2.92,0,0,1,.17-.48l.69-1.75a27.63,27.63,0,0,1,4.12-7c.62-.62,1.56-1.27,1.56-1.09s0,.12.42,0a7.71,7.71,0,0,0,.77-.3,1.67,1.67,0,0,1,.49-.16,2.09,2.09,0,0,0,.58-.3,6.18,6.18,0,0,1,.9-.49c.25-.1,1.09-.49,1.86-.88a19.41,19.41,0,0,1,2.15-.9c.41-.12,1.1-.37,1.54-.55A15.2,15.2,0,0,1,37.68,30l.9-.27c.14,0,.63-.16,1.09-.26l1-.21a9.35,9.35,0,0,1,1-.21,15.91,15.91,0,0,1-2.49.82,16.16,16.16,0,0,0-2.09.74c-.55.25-1.45.62-2,.84a16.9,16.9,0,0,0-2,.95c-.53.3-1.33.74-1.79,1a19.44,19.44,0,0,0-3.88,2.81,9.59,9.59,0,0,0-3.13,4,28.1,28.1,0,0,0-2.84,8.33,18,18,0,0,0-.57,4.5c-.06,1.21-.1,3.74-.1,5.63A46,46,0,0,0,21,63.92c.1,1,.17,1.85.15,1.86s-.07-.06-.1-.17", fill: "#b98e5e" }),
        React__default['default'].createElement("path", { d: "M77,79c-.71-.06-2-.12-2.81-.12a16.21,16.21,0,0,1-2.85-.23c-.75-.12-2.1-.28-3-.35a22.08,22.08,0,0,1-3.43-.51c-1-.22-2.43-.49-3.23-.61A21.11,21.11,0,0,1,59,76.57l-3.1-1c-1.69-.52-4.2-1.48-6.7-2.54a28.38,28.38,0,0,1-2.58-1.36c-.84-.5-2.09-1.22-2.77-1.58a97,97,0,0,1-11.38-7.86c-.88-.75-2.11-1.78-2.73-2.29a8.48,8.48,0,0,1-2.09-2.29A7.36,7.36,0,0,1,26.17,55a10.28,10.28,0,0,1-.47-1.56,3.65,3.65,0,0,0-.35-.94L25,51.81V50.28c0-1.81.08-2.21.44-2.21a1.46,1.46,0,0,0,.6-.24c.28-.17.35-.29.35-.47a1.23,1.23,0,0,1,.09-.44c.05-.12.26-.71.48-1.34a17.89,17.89,0,0,1,4-6.22,10,10,0,0,1,2.79-1.91c3.93-2.22,6.38-3.35,7.64-3.56A19.33,19.33,0,0,0,45,33.05a14.51,14.51,0,0,1,3-.48l3.32-.36c.71-.07,2.13-.12,3.83-.12a30.92,30.92,0,0,1,6.49.52,18.37,18.37,0,0,0,2.2.18,13.6,13.6,0,0,1,3.63.51,16.23,16.23,0,0,0,2,.4c.63.07,1.26.16,1.4.18l1.44.22a16.52,16.52,0,0,1,2,.39,14.46,14.46,0,0,0,1.64.36,13,13,0,0,1,4.42,1.56c1,.5,2.24,1.15,2.76,1.46a18.17,18.17,0,0,0,1.75.89,21.57,21.57,0,0,1,3.4,1.8c.48.31,1.21.75,1.62,1s.89.47,1.06.58a1.43,1.43,0,0,0,.79.21,7.49,7.49,0,0,1,2.08.58,10,10,0,0,1,3,1.53,24.79,24.79,0,0,1,6.9,7.07,29.46,29.46,0,0,1,2.28,4.17,3.16,3.16,0,0,1,.38,1.68,8.59,8.59,0,0,1-.57,2.76,35.92,35.92,0,0,1-3.18,7.55A16.5,16.5,0,0,1,100.3,71a26,26,0,0,1-4.87,4.58,9.7,9.7,0,0,1-2.72,1.55,24,24,0,0,1-4.32,1.36c-.26,0-1.91.21-3.65.39A38.45,38.45,0,0,1,77,79M57.64,66.27a21.4,21.4,0,0,0,.71-3.16c0-.17,0-.2-.37-.2s-.61.15-1.28,1.18A3.6,3.6,0,0,0,56,66c0,.27,0,.34.25.45a1.42,1.42,0,0,1,.37.27c.07.1.22.13.47.11s.36,0,.56-.55m4.2-.45.35-.24V65a5.14,5.14,0,0,0-.26-1.53,9.92,9.92,0,0,1-.26-1.08c0-.19-.25-.17-.35,0a2.25,2.25,0,0,1-.16.3,3.19,3.19,0,0,0-.46,1.49,7.88,7.88,0,0,1-.13,1,1,1,0,0,0,.09.59c.13.27.18.31.49.31a1.25,1.25,0,0,0,.69-.24m8.59-.13c.11-.36.1-.4-.13-1-.14-.33-.46-1-.71-1.54l-.45-.95h-.41a.84.84,0,0,0-.49.12,9.83,9.83,0,0,0,.63,2.82c.27.8.37.89,1,.9.4,0,.4,0,.53-.36m-4.25-.11c.28-.31.33-.55.17-.79a1.44,1.44,0,0,1-.14-.73c0-1-.48-1.85-1-1.85-.32,0-.37.18-.37,1.44s0,1.27.22,1.69.22.45.58.45a.67.67,0,0,0,.57-.21m8.23-1.52a1.2,1.2,0,0,0,.18-.73c0-.44,0-.48-.28-.64a7.46,7.46,0,0,1-.9-.74,3.16,3.16,0,0,0-1.15-.78c-.41-.17-.57-.27-.64-.46s-.15-.24-.48-.24h-.39V61c0,.57.12.84.75,1.61,1,1.22,1.36,1.56,1.78,1.64.73.16.94.14,1.13-.14M54.59,62.53a7,7,0,0,0,1.54-1.65c.16-.31.16-.33,0-.49-.27-.31-.8-.25-1.45.17a4.88,4.88,0,0,0-1.57,1.49.34.34,0,0,0,.13.24,1.06,1.06,0,0,1,.22.36c.17.39.51.36,1.13-.12m21-2.65c.2-.57.22-.81.09-1a1,1,0,0,1-.17-.28,2,2,0,0,0-.69-.35,5.94,5.94,0,0,1-1.1-.49,1.49,1.49,0,0,0-1.12-.29H72v.39c0,.24,0,.39.1.39a1.44,1.44,0,0,1,.47.34c.46.4,1,.83,1.51,1.25a1.13,1.13,0,0,0,.94.33h.52ZM53,59.66a6.32,6.32,0,0,0,.93-.72,5.35,5.35,0,0,1,.65-.55c.17-.1.17-.11-.08-.32a1.08,1.08,0,0,0-.4-.22,12,12,0,0,0-2.2.77.48.48,0,0,0-.15.29.23.23,0,0,1-.13.21c-.07,0-.14.09-.14.13a2.79,2.79,0,0,0,1,.69,1.82,1.82,0,0,0,.56-.28m24.59-2.21a.39.39,0,0,1,.23-.13c.09,0,.12-.13.12-.5,0-.52-.09-.72-.35-.72a1.8,1.8,0,0,1-.55-.3,3.74,3.74,0,0,0-1.62-.67c-.53-.14-.74-.24-.78-.36s-.21-.19-.49.1l-.25.26.24.38a5.72,5.72,0,0,0,2.12,1.57c1,.53,1.17.58,1.33.37M51,56.81a1.32,1.32,0,0,1,.61-.36c.69-.18,1-.36,1.12-.58s.14-.26-.18-.37a5.43,5.43,0,0,0-2,0l-.46.1,0,.56c0,.68.08.89.48.89a.63.63,0,0,0,.51-.25m-3.3-1.4c.2-.13.58-.36.84-.49.86-.44,1.23-.74,1.23-1s-.06-.25-.37-.37a.89.89,0,0,0-.68,0,2.7,2.7,0,0,1-.83.12,1.37,1.37,0,0,0-.91.27,1.8,1.8,0,0,1-.46.26,1.39,1.39,0,0,0-.07.61c0,.53,0,.61.15.61a1.18,1.18,0,0,1,.37.13c.3.17.31.17.73-.12m32.45-2.58a.54.54,0,0,1,.36-.13h.25V51.51l-.36-.25c-.36-.23-.42-.24-1.12-.2a7.07,7.07,0,0,0-3,.95c-.73.46-.7.54.22.79a11.25,11.25,0,0,0,3.62,0m-31.53-.62c.27-.13.64-.33.83-.45l.33-.22-.24-.26c-.42-.44-.65-.5-1.63-.5-.74,0-.95,0-1.17.17a.45.45,0,0,0-.29.51.76.76,0,0,0,.08.41c.06,0,.09.16.09.31v.25h.76a2.36,2.36,0,0,0,1.24-.22m27.54-1.94a3.57,3.57,0,0,1,1-.4,5.09,5.09,0,0,0,2-.9.73.73,0,0,1,.14-.33.73.73,0,0,0,.11-.41c0-.27-.55-.6-.91-.6-.64,0-3.18,2.11-3.18,2.64,0,.22,0,.24.27.24a1.35,1.35,0,0,0,.63-.24m-27.8-.84c.43-.23.48-.36.21-.53l-.86-.61a3.11,3.11,0,0,0-1.52-.69c-1.26-.32-1.38-.31-1.82.15a1.93,1.93,0,0,0-.37.45,1.92,1.92,0,0,0,.4.49c.41.43.4.42,1.57.58a2.53,2.53,0,0,1,.7.18,3.34,3.34,0,0,0,1.69,0M74.1,48.7a9.49,9.49,0,0,0,1.31-.79,4,4,0,0,1,.68-.45,1.71,1.71,0,0,0,.37-.31c.4-.38.41-.66,0-.94s-.86-.52-1-.46a2.21,2.21,0,0,0-.49.55c-.21.28-.58.72-.82,1a4.12,4.12,0,0,0-1.09,1.54c0,.29.16.27,1-.12m-2.89-.76a4.3,4.3,0,0,0,1-.82,5.64,5.64,0,0,1,1.16-.95l.5-.26,0-.59c0-.54,0-.61-.21-.84a.72.72,0,0,0-.66-.25c-.41,0-.42,0-.84.59a6.14,6.14,0,0,0-1.42,3c0,.27,0,.28.46.11m-20.1-1.09c.08-.21.06-.3-.17-.76a15.35,15.35,0,0,0-1-1.51c-.77-1-.77-1-1.17-1a1.06,1.06,0,0,0-.76.2c-.33.22-.37.28-.37.61a.65.65,0,0,0,.25.59.8.8,0,0,0,.38.24c.07,0,.18.11.25.26a1.19,1.19,0,0,0,.42.45,6.52,6.52,0,0,1,.76.61,2,2,0,0,0,1.23.59c.05,0,.14-.11.21-.25m18.17-.15a8.43,8.43,0,0,0,.66-.81,3.46,3.46,0,0,1,.45-.56c.1-.1.19-.21.19-.27a2.45,2.45,0,0,1,.22-.55c.2-.41.22-.49.13-.73-.18-.42-.33-.51-.8-.51s-.43,0-.72.46a7.59,7.59,0,0,0-.86,2.32c-.15.56-.17.74-.09.78a.18.18,0,0,1,.11.16c0,.24.32.11.71-.29m-14.8,0c0-.06-.07-.2-.18-.31s-.23-.29-.23-.73a1.28,1.28,0,0,0-.18-.79,8.6,8.6,0,0,1-.43-.76c-.55-1-1.07-1.37-1.54-.92a1.13,1.13,0,0,0,0,1.27c.11.13.43.57.73,1a13,13,0,0,0,.83,1.07c.27.29.35.33.66.31s.36-.07.37-.12m2.39-.79c-.08-.19-.39-1.39-.56-2.15,0-.14-.11-.24-.18-.24a.37.37,0,0,1-.22-.13,1.2,1.2,0,0,0-1,0A1.34,1.34,0,0,0,55,44.56c.51,1,1.18,1.59,1.7,1.59.28,0,.29,0,.21-.23m2.49-.14c.19-.09.21-.15.21-.5a5.94,5.94,0,0,0-.22-1.18c-.12-.43-.26-1-.29-1.18-.1-.56-.17-.68-.45-.79a2.13,2.13,0,0,0-1.41.24.54.54,0,0,0,0,.9,2,2,0,0,1,.37.6,4.1,4.1,0,0,0,.31.66,12.6,12.6,0,0,0,1.26,1.36l.25-.11m6-.17A2,2,0,0,0,66,44.43a8.85,8.85,0,0,1,.92-2.12c.22-.39.16-.51-.4-.79s-.75-.31-1.16-.12c-.24.11-.29.17-.25.38a5.29,5.29,0,0,1-.24,1.2,3.57,3.57,0,0,0-.17,2.08c0,.19.11.45.14.59.06.32.32.31.62,0m-3.84-.79a20.25,20.25,0,0,0,0-4.21c-.1-.52-.15-.63-.42-.8s-.57-.26-.89,0a1.35,1.35,0,0,1-.34.24,4.38,4.38,0,0,0,0,1.89c0,.25.2.8.33,1.22a2.39,2.39,0,0,0,.61,1.16,1.6,1.6,0,0,1,.37.51c0,.13.22.12.34,0", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M71.28,74.13l-4.89-.48a36.3,36.3,0,0,1-4-.53c-.62-.14-1.64-.31-2.27-.38a34,34,0,0,1-5.68-1.39,17.26,17.26,0,0,1-4.2-1.64l-3-1.54c-1.46-.76-6.93-3.85-7.81-4.41-1.56-1-5.47-3.58-6.24-4.15-.46-.32-1.23-.83-1.71-1.11a18.08,18.08,0,0,1-2-1.45,7.68,7.68,0,0,1-2-2.1,8.42,8.42,0,0,1-1.32-2.52l-.5-1.35v2.1l-.35-.69L25,51.81V50.28c0-1.81.08-2.21.44-2.21a1.46,1.46,0,0,0,.6-.24c.28-.17.35-.29.35-.47a1.23,1.23,0,0,1,.09-.44c.05-.12.26-.71.48-1.34a17.89,17.89,0,0,1,4-6.22,10,10,0,0,1,2.79-1.91c3.93-2.22,6.38-3.35,7.64-3.56A19.33,19.33,0,0,0,45,33.05a14.51,14.51,0,0,1,3-.48l3.32-.36c.71-.07,2.13-.12,3.83-.12a30.92,30.92,0,0,1,6.49.52,18.37,18.37,0,0,0,2.2.18,13.6,13.6,0,0,1,3.63.51,16.23,16.23,0,0,0,2,.4c.63.07,1.26.16,1.39.18l1.45.22a16.52,16.52,0,0,1,2,.39,14.46,14.46,0,0,0,1.64.36,13,13,0,0,1,4.42,1.56c1,.5,2.24,1.15,2.76,1.46a18.17,18.17,0,0,0,1.75.89,21.57,21.57,0,0,1,3.4,1.8c.48.31,1.21.75,1.62,1,1.12.57,1.43.79,1.31.9a.58.58,0,0,0,.07.7c.08.08.62.43,1.17.8s1.79,1.21,2.71,1.9a23,23,0,0,1,3.3,2.91,12.85,12.85,0,0,1,2.35,2.83,8.1,8.1,0,0,1,1.57,4.17,15.36,15.36,0,0,1-.14,1.59,23.37,23.37,0,0,1-1.46,4.93,24.27,24.27,0,0,1-2.75,4.94,12.09,12.09,0,0,1-2.13,2.41,13.07,13.07,0,0,1-2.58,1.91c-2,1.22-2.86,1.56-4.12,1.7a20.13,20.13,0,0,0-2,.35,25.16,25.16,0,0,1-3.19.5,46.68,46.68,0,0,1-6.37.26,47.35,47.35,0,0,1-6.24-.19m6.06-1a3.06,3.06,0,0,0,1.53-.41l.68-.35a9.55,9.55,0,0,0-.65-1.11c-.39-.6-.88-1.37-1.1-1.73s-1-1.4-1.81-2.32-1.6-1.94-1.84-2.28l-.44-.64H74a.74.74,0,0,0,.62-.71c0-.16.1-.1.64.41.34.33.94.88,1.32,1.22a44.39,44.39,0,0,1,4.28,5c.29.45.75,1.07,1,1.36l.45.54,1.25,0,2.29.11a5.94,5.94,0,0,0,2.06-.18,3.7,3.7,0,0,0,1.71-.7,10.6,10.6,0,0,0,1.07-.87l.37-.37-1.73-1c-2.25-1.34-4-2.49-7.67-5-2.49-1.69-3.51-2.41-5.93-4.11-.15-.1-.15-.13,0-.39l.14-.27,1.16.39a18.76,18.76,0,0,1,2.81,1.29c.92.5,2.41,1.29,3.32,1.76s2.28,1.23,3,1.67,2,1.12,2.7,1.49,1.76.93,2.29,1.27a12.85,12.85,0,0,0,1.62.9l.64.29,1.13-.57a5,5,0,0,0,2.2-1.77,2.9,2.9,0,0,0,.78-1.56c.24-.88.28-1.41.12-1.45-.33-.09-1.54-.51-2.4-.82-.53-.19-1.73-.58-2.66-.85S90,60.65,89,60.25s-2.33-.83-2.84-1-1.84-.59-3-1-2.38-.85-2.79-1a6.9,6.9,0,0,1-2.45-.87.37.37,0,0,0-.34-.35,1.72,1.72,0,0,1-.71-.44,10.86,10.86,0,0,1,2.58.43,14,14,0,0,0,1.7.36,23.32,23.32,0,0,1,2.32.45c3.34.79,8.51,2.11,9.21,2.34a21.93,21.93,0,0,0,5.38,1.23h.63l.48-.87a7.15,7.15,0,0,0,.71-1.67,3,3,0,0,0,.12-1.65,8.17,8.17,0,0,0-.47-1.84l-.37-1-3.83,0a42.25,42.25,0,0,1-5.27-.24A25,25,0,0,0,87.56,53c-.58,0-1.52-.06-2.1-.13s-1.83-.13-2.85-.13h-1.8l0-.66,0-.64.44-.06,3-.22c4.73-.31,6.53-.43,7.55-.52.55,0,1.53-.09,2.16-.09,1.08,0,1.19,0,1.63-.23s.53-.25.27-1A15.75,15.75,0,0,0,94,46.44a3.6,3.6,0,0,0-.88-.7A14.26,14.26,0,0,1,91.85,45l-.78-.53-.4.11c-.22,0-1.68.49-3.24,1s-3.42,1-4.15,1.23-1.88.57-2.59.83l-1.29.47-.32-.22a1.21,1.21,0,0,0-.5-.22c-.27,0-.17-.07,1.82-1.19,1-.55,2.23-1.28,2.71-1.59a17.92,17.92,0,0,1,1.83-1,19.61,19.61,0,0,0,1.86-1l.9-.58-.33-.34a11,11,0,0,0-2.65-1.8,5.93,5.93,0,0,0-2.11-.75c-.61-.12-1.37-.29-1.7-.37l-.58-.15-.3.34c-.15.19-.61.82-1,1.39S77.8,42.26,77.17,43s-1.54,1.83-2,2.41S73.75,47,73.07,47.7,71.83,49,71.82,49a7.89,7.89,0,0,0,1.24.78c.69.39,1.66,1,2.17,1.37.82.59,1,.65,1.21.61s.28,0-.16.26a1.68,1.68,0,0,0-.46.4c0,.12.2.24.49.3l.27.06-.41.72a7.23,7.23,0,0,0-.57,1.18c-.13.42-.18.46-.36.42-.44-.12-.65-.23-.65-.36s-.21-.16-.47.12l-.25.26.24.39a2.28,2.28,0,0,0,.5.55c.13.08.25.18.25.21s-.23.38-.51.8l-.51.76-.28-.17a1.66,1.66,0,0,0-.93-.17H72v.39c0,.25,0,.39.12.39a3,3,0,0,1,.54.41l.43.4-.2.36c-.12.19-.38.58-.59.87a3.13,3.13,0,0,0-.38.59c0,.18-.16.06-.27-.18s-.14-.26-.49-.26h-.4l0,.55a6,6,0,0,0,.07.66c.06.19-1.22.54-1.94.53-.48,0-.6,0-.7.17a1.2,1.2,0,0,1-.62.27,1.34,1.34,0,0,0-.5.15,3,3,0,0,0,.34.45,20.76,20.76,0,0,1,3,6.22c.22.69.55,1.62.72,2.08l.31.82.62.29a9.85,9.85,0,0,0,1.36.46,13.8,13.8,0,0,0,3.88,0m-8.77-1.23a7,7,0,0,0-.09-.72c0-.26-.26-1.57-.48-2.92-.59-3.72-1.14-5.37-1.8-5.37-.21,0-.28,0-.35-.25-.13-.38-.7-.58-.93-.34a.74.74,0,0,0-.11.43c0,.19,0,.34-.06.34l-1.36.14a8,8,0,0,1-1.41.08c-.07,0-.18-.28-.24-.57-.1-.54-.27-.67-.43-.33,0,.08-.12.22-.16.31a3.11,3.11,0,0,0-.45,1.46,7.88,7.88,0,0,1-.13,1,1,1,0,0,0,.09.59c.13.28.18.31.5.31a.93.93,0,0,0,.53-.15c.09-.08.17-.13.19-.11s-.05,1.06-.17,2.31-.21,2.34-.21,2.42c0,.25.72.66,1.66.93.5.15,1.15.37,1.44.48.49.21.61.22,2.25.23h1.72Zm-10.3-2.3c.2-.6.69-1.89,1.1-2.87s.79-2.1.89-2.47l.17-.67H58.28l0-.35.05-.35H58a.85.85,0,0,0-.5.12c-.09.08-.2,0-.56-.38s-.6-.67-.79-.89l-.33-.41L56,61c.27-.39.27-.45.08-.66a.69.69,0,0,0-.51-.15,3.74,3.74,0,0,0-2,1.2c-.52.5-.6.7-.38.88a1.06,1.06,0,0,1,.22.36c.06.15.18.26.26.26a9.88,9.88,0,0,1-1.93,2A7.66,7.66,0,0,0,50,67l-.23.45.25.26A7.18,7.18,0,0,0,53,69.45a19.49,19.49,0,0,0,2.74.94,9.51,9.51,0,0,1,1.05.25,2,2,0,0,0,.58,0h.55ZM46.54,65.16c.44-.34,1.38-1,2.09-1.45s1.75-1.15,2.3-1.54a21.75,21.75,0,0,1,2.14-1.3c.63-.33,1.26-.68,1.4-.78a1.44,1.44,0,0,0,.28-.2,2.46,2.46,0,0,0-.28-.52,3,3,0,0,1-.31-.62c0-.06.12-.18.26-.26a.67.67,0,0,0,.27-.21c0-.16-.56-.44-.83-.41s-.32,0-.87-.81c-.44-.64-.54-.85-.45-.91a1.32,1.32,0,0,0,.31-.51,1.58,1.58,0,0,0-.78-.24c-.19,0-.34-.15-.92-1-.39-.57-.75-1.11-.81-1.22L50.22,53h-2.9c-2,0-3.81-.06-5.66-.18-4.24-.28-4.84-.33-6.45-.56A17.61,17.61,0,0,0,32.44,52a8.06,8.06,0,0,0-2.64.27s.2.58.45,1.23a10.07,10.07,0,0,0,2,3.47,14.41,14.41,0,0,1,1,1.12c.23.32.38.45.48.42.86-.25,2.88-.63,6.91-1.27.64-.11,1.81-.34,2.59-.53a19.59,19.59,0,0,1,3-.48c.85-.08,2.06-.23,2.68-.36L50,55.66a1.61,1.61,0,0,1,0,.49c0,.44,0,.48-.24.57s-3.24,1-4.26,1.32c-.33.1-1.17.4-1.84.68s-1.7.65-2.27.83l-2.22.7c-.65.21-1.25.39-1.34.41s-.16.05-.17.08a25.24,25.24,0,0,0,2.42,2.08,11.51,11.51,0,0,0,3.91,2.39,3.08,3.08,0,0,1,.82.36c.54.36.76.31,1.67-.41m1.9-12.85a.86.86,0,0,1,.59-.05c.15,0,.42.1.57.12l.3,0-.18-.31c-.18-.3-.18-.33-.06-.47s.11-.19-.33-.58a4.11,4.11,0,0,1-.79-1c-.3-.54-.32-.59-.16-.63a.84.84,0,0,0,.32-.22c.13-.16.12-.17-.3-.44s-.5-.34-.34-.5-.21-.19-1.07-.46l-1.39-.44c-.12,0-2-.56-4.1-1.14s-5-1.4-6.37-1.83a29.21,29.21,0,0,0-3.82-1.08L31,43.26l-.36.6c-.48.83-1.6,3.1-2,4a2.86,2.86,0,0,0-.3,1.21c0,.48,0,.48.33.59a16.36,16.36,0,0,0,2.07.16c1,0,1.8.09,1.87.12s.73.14,1.44.23l3.28.43,4.45.58c2.69.33,4.69.63,4.81.71s.08.15.08.3v.25h.74a3.56,3.56,0,0,0,1-.12m23.37-3.83A12,12,0,0,1,73,46.4a3.85,3.85,0,0,1,.5-.31l.36-.18,0-.63,0-.63L75,43.06c2.24-3.17,2.63-3.88,2.63-4.75v-.45l-.54-.25c-.31-.15-.65-.29-.77-.33a3.7,3.7,0,0,1-.7-.35,5.39,5.39,0,0,0-1.35-.51c-.48-.12-1.05-.28-1.26-.36a4.29,4.29,0,0,0-1.19-.13c-.69,0-.82,0-.87.16A28.25,28.25,0,0,0,69.7,40.3,33.3,33.3,0,0,1,68.18,46l-.39.89.5.28c2,1.15,3.21,1.79,3.28,1.78s.15-.2.24-.43m-22.52-.91a4.3,4.3,0,0,0,.71-.36.82.82,0,0,1,.67-.15c.3,0,.33,0,.46-.26s.2-.3.26-.3a.82.82,0,0,0,.34-.17,1.19,1.19,0,0,1,.41-.2c.15,0-.08-.23-1.15-1a12.33,12.33,0,0,1-1.62-1.29c-.2-.24-.35-.34-.51-.34a16.61,16.61,0,0,1-3.34-2.09c-.65-.47-1.72-1.18-2.39-1.58a18.53,18.53,0,0,1-2.07-1.48,5.24,5.24,0,0,0-1.42-1l-.58-.23-.94.24a8.88,8.88,0,0,0-1.47.5,6.42,6.42,0,0,1-.87.38,6.3,6.3,0,0,0-2.16,1.3c-.6.56-1,1.11-.9,1.2a4.88,4.88,0,0,0,.86.3,67.6,67.6,0,0,1,7.88,3.18c.67.32,1.95.87,2.86,1.23a27,27,0,0,1,3.06,1.43c.77.43,1.44.79,1.47.79a2.75,2.75,0,0,0,.44-.15m5.19-.86c0-.06-.07-.2-.18-.31a.65.65,0,0,1-.23-.48c0-.25,0-.27.65-.47l.65-.2.28.32a1.4,1.4,0,0,0,1,.58c.26,0,.27,0,.19-.23a18.37,18.37,0,0,1-.53-2.05c0-.06.13.07.27.28s.31.41.34.45.23,0,.44-.07.39-.12.47,0a6.11,6.11,0,0,0,.66.75c.56.58.59.59.82.49s.23-.16.23-.48a3.55,3.55,0,0,0-.1-.78.83.83,0,0,1,0-.43,1.62,1.62,0,0,1,.52-.17l.46-.11.42.46a2.18,2.18,0,0,1,.41.55c0,.05.06.09.12.09.28,0,.32-.2.32-1.58A6.33,6.33,0,0,1,61.75,42a6.55,6.55,0,0,1,.48,1.11l.41,1.11.93.48c1.05.54,1.24.69,1.24,1,0,.16,0,.22.19.22a.41.41,0,0,0,.29-.15c.1-.13.22-.09,1.22.43l1.1.58V46.5c0-.13,0-.64-.09-1.13-.1-.87-.06-1.53.26-6.12,0-.65.09-1.77.09-2.49V35.44l-.72-.23a22.63,22.63,0,0,0-5.26-.94,11.93,11.93,0,0,1-1.82-.17,1.57,1.57,0,0,0-.53-.07l-.2,0L59.88,36c.3,1.06.67,2.3.82,2.76s.27.86.27.89-.09,0-.22,0a.58.58,0,0,0-.48.19,1.36,1.36,0,0,1-.35.23c-.05,0-.08.07-.08.14,0,.41-.23-.2-.71-1.88a9,9,0,0,0-1.54-3.6,1.13,1.13,0,0,0-.68-.29c-.23,0-.82-.14-1.3-.23A9.32,9.32,0,0,0,54.29,34a3.07,3.07,0,0,1-.83-.13,2.2,2.2,0,0,0-1.48,0,1.63,1.63,0,0,1-.61.13,1.26,1.26,0,0,0-.73.22,1.22,1.22,0,0,0-.32.28,15.32,15.32,0,0,0,1.17,2c.35.53.84,1.31,1.09,1.74s.8,1.18,1.19,1.67,1,1.27,1.28,1.71c.94,1.36,1.36,2.24.87,1.79a.94.94,0,0,0-.59-.14H54.9l-1.14-1.38c-.64-.75-1.44-1.77-1.79-2.25a11.72,11.72,0,0,0-2.71-3c-.4-.27-.92-.65-1.17-.83-.43-.33-.43-.33-1.09-.29l-1.88.12a6.49,6.49,0,0,0-2.44.52l-1.35.48c-.08,0,.13.22.56.5,1.33.9,4.47,3.35,5.69,4.45.67.6,2.07,1.74,3.1,2.54a29.89,29.89,0,0,1,2.48,2.08c.57.6.63.63,1,.61s.36-.07.37-.12", fill: "#dbe6b7" }),
        React__default['default'].createElement("path", { d: "M74.51,50a17.06,17.06,0,0,1,2-1.32c.34-.17.51-.25.39-.16s-.48.4-.79.7a2.55,2.55,0,0,1-1,.63l-.54.14c-.08,0-.15,0-.15,0", fill: "#dbe6b7" })));
};

var Icon$s = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 15 2" }, props),
        React__default['default'].createElement("path", { d: "M13.2 2L1.20004 2C0.650043 2 0.200043 1.55 0.200043 1C0.200043 0.45 0.650043 0 1.20004 0L13.2 0C13.75 0 14.2 0.45 14.2 1C14.2 1.55 13.75 2 13.2 2Z" })));
};

var Icon$t = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$u = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("path", { d: "M71.78,115.22l-1.46-.15-2.85-.29-3.32-.35c-.93-.1-2.34-.31-3.14-.47-2.22-.44-3.76-.78-3.83-.83s-.83-.15-1.76-.27-2.29-.41-3-.6c-1.27-.32-5.54-1.74-7.12-2.37L43,109a78.66,78.66,0,0,1-12.47-6.79,61.16,61.16,0,0,1-9.72-7.81L17,90.9c-.28-.26-1.3-1.35-2.28-2.45a26.43,26.43,0,0,1-3.29-4.37c-.84-1.33-2.14-3.32-2.91-4.43A41.3,41.3,0,0,1,4,70.8c-1.9-5.41-2.42-7.18-2.84-9.59s-.74-4.57-1-7.1a21.51,21.51,0,0,1,.51-6.23,62.68,62.68,0,0,1,1.64-7c.24-.93.61-2.34.81-3.13a14.78,14.78,0,0,1,1.69-3.9c.72-1.35,1.72-3.16,2.22-4A8.46,8.46,0,0,1,9.26,27a8.22,8.22,0,0,1,1.86-1.42c.86-.26,2.55-.72,2.66-.72s0,.08,0,.17-.09.18,0,.18A.54.54,0,0,0,14,25a4.27,4.27,0,0,1,.72-.54c.52-.34.57-.41.51-.71-.13-.63.38-1.15,3-3.11a18.23,18.23,0,0,1,3.92-2.49,49.49,49.49,0,0,1,8-2.82c.73-.16,1.94-.44,2.7-.64a32.47,32.47,0,0,1,5-.8c1.12-.13,2.77-.35,3.67-.48s2.57-.29,3.73-.35,2.32-.16,2.61-.22,3-.12,6.5-.13c5.92,0,6,0,7.57.3.87.17,3.4.6,5.61,1,2.72.46,4.91.91,6.81,1.4l4,1a101.08,101.08,0,0,1,12.63,4.31c4.18,1.7,5.24,2.14,6,2.55.45.24,1.63.81,2.63,1.27A24.37,24.37,0,0,1,102.24,26c.47.32,1.38.86,2,1.2a77,77,0,0,1,6.64,4.3,49.62,49.62,0,0,1,11.57,10.7,23.37,23.37,0,0,1,3,4.72,20.23,20.23,0,0,1,1.28,2.67,10.53,10.53,0,0,1,.38,1.42c.62,3.05.48,6,.79,9.45a18.88,18.88,0,0,1,0,3.2c-.15,1.72-.46,1.92-1.07,4.75-.47,2.19-.32,2.16-.78,4.08-.21.9-.46,1.76-1,3.44A38.07,38.07,0,0,1,123,81.48c-.81,1.85-1.51,3.39-1.54,3.42a3.29,3.29,0,0,0-.3.47c-.38.72-1.65,3-2.37,4.36a76.56,76.56,0,0,1-4.27,7c-.06.08-.46.6-.88,1.17a44.52,44.52,0,0,1-5.76,5.87l-1.59,1.3a3.93,3.93,0,0,1-.65.41c-.24.13-.94.51-1.54.86l-.3.17-.37.2c-.39.22-3.73,2.54-4.4,3a41.47,41.47,0,0,1-6.75,3.07c-.47.19-.76.28-1,.41a20.06,20.06,0,0,1-4.61,1.27c-.79.09-1.86.24-2.37.34l-1.75.37a41.45,41.45,0,0,1-5.65.15c-2.65,0-4.93,0-5.06-.06", transform: "translate(0 -12.72)", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M108,97.26A66.56,66.56,0,0,0,114.5,89L119,81.4a65.61,65.61,0,0,0,3.2-8.83c2-6.93,1.77-10.48,1.7-11.42a24.94,24.94,0,0,0-.57-3.75V54.83L122.78,53c-.28-1-.57-2-.64-2.28A43.6,43.6,0,0,0,118,44.12a33.21,33.21,0,0,0-6.1-6.65c-.82-.63-2.49-1.94-3.71-2.92a46.83,46.83,0,0,0-5.65-4.08,8.69,8.69,0,0,1-1.38-.94,4.92,4.92,0,0,0-2.33-1.09,37,37,0,0,1-4.73-2.33,12.88,12.88,0,0,0-3-1.28c-.86-.26-3.22-1.08-5.24-1.83s-4-1.44-4.36-1.56l-2-.62c-.73-.23-2.22-.62-3.31-.88s-3-.78-4.22-1.15A53.66,53.66,0,0,0,64.39,17c-.74-.1-2.75-.38-4.49-.64a59.1,59.1,0,0,0-11.64-.67,53.71,53.71,0,0,0-7.1.35,49.17,49.17,0,0,0-7.39,1.37,40.65,40.65,0,0,0-6.64,1.92,19.6,19.6,0,0,1-2.21.8,21.13,21.13,0,0,0-2.74,1.14c-.89.45-2,1-2.51,1.19a7,7,0,0,0-1.29.69,2.35,2.35,0,0,1-.49.3c-.05,0-.41.13-.81.27-1.33.51-1.64.59-1.68.45s-1.18.59-2,1.37a41.8,41.8,0,0,0-4.55,6.93,75.14,75.14,0,0,0-3.39,9.26c-.12.48-.34,1.41-.49,2.06s-.36,1.76-.45,2.45S4.23,48,4.13,48.6a32.33,32.33,0,0,0,.23,7.84c.84,6.94,3.36,13.78,9.17,24.92,1.42,2.72,7.65,9.7,11.62,13,2.25,1.89,5.21,4.12,7.51,5.71,1.93,1.31,3.59,2.15,8.4,4.26,1.79.78,5.41,2.17,7.09,2.72.25.08,1.28.45,2.27.82a25.38,25.38,0,0,0,5.19,1.38c.63.11,1.78.34,2.55.53,1.48.36,2.21.46,8.09,1.11,2,.24,3.73.44,3.78.47a36.64,36.64,0,0,0,5.65-.28c1-.13,3.25-.4,5-.59,2.06-.24,2.08-.42,6-1.18a37.58,37.58,0,0,0,5.12-1.08,26.4,26.4,0,0,0,4.61-2.3,52.46,52.46,0,0,0,7.29-4.6,37.25,37.25,0,0,0,4.22-4.1m-68.73-53a1.6,1.6,0,0,0-.58-.17,2.6,2.6,0,0,1-1.28-1.11,2.2,2.2,0,0,1,.49-.6c.58-.6.66-.61,2.36-.19a4.47,4.47,0,0,1,1.92.79c.35.27.86.63,1.14.82.54.36.52.5-.1.82a4.07,4.07,0,0,1-2.32,0,2,2,0,0,0-.82-.17,1.83,1.83,0,0,1-.81-.18m1.5,3.59a.91.91,0,0,1,.35-1.17c.35-.23.54-.26,1.55-.26,1.26,0,1.56.09,2.11.67.38.4.39.39-.92,1.06a3,3,0,0,1-1.95.48h-1v-.33a.78.78,0,0,0-.13-.45m4.06-7.21a7.36,7.36,0,0,0-1-.8,1.34,1.34,0,0,1-.51-.55c-.07-.19-.22-.32-.33-.32-.37,0-.82-.67-.82-1.17s.05-.48.51-.74a2.14,2.14,0,0,1,1-.31c.44,0,.5,0,1,.68.27.36.75,1,1.09,1.42a10.3,10.3,0,0,1,.92,1.38c.27.55.29.67.18,1s-.19.37-.9.19a3.48,3.48,0,0,1-1.11-.74M43.55,51.78c-.35.18-.86.48-1.13.65a1.29,1.29,0,0,1-1.4.19c-.38-.13-.38-.13-.38-.92,0-.49,0-.79.12-.79a2.19,2.19,0,0,0,.63-.35,1.66,1.66,0,0,1,1.18-.35,4.48,4.48,0,0,0,1.11-.14c.67-.2,1.38.06,1.38.49s-.36.64-1.51,1.22m2,2.83a2,2,0,0,1-.14-.92v-.78l.55-.19a6.52,6.52,0,0,1,2.81,0c.42.15.41.11.24.5-.11.23-.35.36-1.06.6a4.5,4.5,0,0,0-1.32.64c-.39.35-.85.43-1.08.2m2.07-17.49A1.09,1.09,0,0,1,48.56,36c.39,0,1,.61,1.31,1.38a7.88,7.88,0,0,0,.56,1,1.59,1.59,0,0,1,.34,1.16c0,.57,0,.72.3,1s.27.34.24.41-.24.14-.5.16c-.41,0-.51,0-.87-.4s-.84-1.05-1.36-1.78c-.82-1.13-1-1.4-1-1.8m.92,21.47a6.39,6.39,0,0,1-.66-.42c-.58-.38-.62-.43-.44-.62a.73.73,0,0,0,.18-.38.45.45,0,0,1,.16-.31,18.15,18.15,0,0,1,3-1.06,1.36,1.36,0,0,1,.54.3c.32.27.34.29.13.42a8.57,8.57,0,0,0-.88.72,9,9,0,0,1-1.3,1,6.7,6.7,0,0,1-.7.37m2.87,3.46c-.84.6-1.25.65-1.46.15a1.47,1.47,0,0,0-.3-.48.45.45,0,0,1-.17-.32,6.52,6.52,0,0,1,2.09-2c.87-.56,1.57-.64,1.93-.24.22.23.22.25,0,.66a8.71,8.71,0,0,1-2.09,2.21m.43-25.56a1.64,1.64,0,0,1,1.37,0,.49.49,0,0,0,.29.17c.09,0,.27.5.47,1.32s.39,1.5.47,1.75l.16.43h-.38c-.72,0-1.49-.7-2.16-2-.39-.7-.48-1.46-.22-1.72m3.71,30.36-.3.76-.53,0c-.72,0-1.39-.43-1.39-1A6.65,6.65,0,0,1,55.12,63a.86.86,0,0,1,.86-.44c.37,0,.49.05.49.2a25.77,25.77,0,0,1-.92,4.1m2.26-27.14a2.49,2.49,0,0,1-.33.14A16.38,16.38,0,0,1,55.81,38a3.12,3.12,0,0,1-.39-.82,2.6,2.6,0,0,0-.49-.87,1,1,0,0,1-.3-.74c0-.33.1-.39.68-.58,1.26-.42,1.91-.24,2,.61,0,.24.22,1,.42,1.66a9.47,9.47,0,0,1,.34,1.75c0,.45-.05.54-.29.66M58.45,33c0-.78,0-.91.22-1a1.18,1.18,0,0,0,.42-.29.71.71,0,0,1,.42-.24,1.47,1.47,0,0,1,1.1.81c0,.16.11.52.18.79a27.83,27.83,0,0,1,0,5.37c-.18.18-.44.17-.44,0a1.86,1.86,0,0,0-.46-.61,3,3,0,0,1-.81-1.5A9.86,9.86,0,0,1,58.45,33m3.14,33.14-.48.32a1.61,1.61,0,0,1-.92.31c-.4,0-.47,0-.65-.41a1.31,1.31,0,0,1-.11-.79c0-.2.13-.79.17-1.3a4.36,4.36,0,0,1,.61-2c.08-.13.17-.32.22-.41a.49.49,0,0,1,.24-.21c.12,0,.23.26.39.92s.29,1.15.37,1.37a5.73,5.73,0,0,1,.16,1.31Zm5.22,0c-.13,0-.2.11-.15.18s-.11.13-.43.13c-.5,0-.52,0-.83-.64s-.31-.74-.31-2.25,0-1.88.48-1.88a1.44,1.44,0,0,1,.48.13A3.38,3.38,0,0,1,67,64.1a2.93,2.93,0,0,0,.17,1,.65.65,0,0,1-.31,1m.62-30.28a10.86,10.86,0,0,0-.78,2A4.34,4.34,0,0,1,66,39.24a1.65,1.65,0,0,0-.33.49c0,.07-.12.12-.27.12s-.28-.11-.48-1a4.83,4.83,0,0,1,.22-3,5.83,5.83,0,0,0,.29-1.36c0-.36.06-.47.35-.62.47-.24.67-.22,1.42.14s.85.62.23,1.81m5.09,30.58c-.11.33-.17.36-.6.36-.86,0-1.07-.22-1.47-1.42a12,12,0,0,1-.8-3.55,1.15,1.15,0,0,1,.66-.15h.54l.45,1a19.64,19.64,0,0,1,1.35,3.22,2.49,2.49,0,0,1-.13.58m-.15-27.13c-.21.24-.5.61-.65.83A9.61,9.61,0,0,1,71,41c-.48.5-.77.61-.77.31a.18.18,0,0,0-.18-.17c-.23,0-.23,0,.24-1.69.53-1.89.58-2,1-2.59s.47-.5.92-.5.56.06.75.32c.35.43.42.81.21,1.06a2.19,2.19,0,0,0-.31.65,3.29,3.29,0,0,1-.52.87M73,42.5a8,8,0,0,1,2-4.12c.58-.71.64-.75,1.1-.75a1,1,0,0,1,.83.34c.29.31.31.4.28,1.12l0,.79-.65.34a10.57,10.57,0,0,0-1.63,1.3,6.16,6.16,0,0,1-1.38,1.11c-.5.16-.48.17-.48-.13M80,42a11.67,11.67,0,0,0-1.1.74,9.43,9.43,0,0,1-1.46.88c-1.15.5-1.21.51-1.21.11s.5-1.1,1.4-2.06c.3-.31.79-.91,1.09-1.3a2.7,2.7,0,0,1,.7-.74,3.73,3.73,0,0,1,.77.39c.56.32.64.42.68.79A1.32,1.32,0,0,1,80,42m1.73,1a6.18,6.18,0,0,0,1-.72c.13-.22,1-.13,1.35.15s.39.33.37.61c-.11,1-.73,1.45-2.66,2a8.23,8.23,0,0,0-1.63.65,1.7,1.7,0,0,1-.77.31c-.28,0-.32-.05-.32-.33s.19-.52.9-1.21A15.5,15.5,0,0,1,81.76,43M77.85,64.1c-.3.33-.47.36-1.38.17C76,64.17,75.8,64,75,63.13a17.47,17.47,0,0,1-1.46-1.74A2,2,0,0,1,73,60v-.69h.51c.46,0,.53,0,.64.34s.33.4.95.65a3.9,3.9,0,0,1,1.42.95,8.31,8.31,0,0,0,1.12,1c.46.34.48.37.48,1a1.21,1.21,0,0,1-.27.93m1.65-5.59c-.15.43-.15.43-.79.42s-.95-.12-1.69-.8a9.36,9.36,0,0,0-1-.8,4.84,4.84,0,0,1-.8-.65,1,1,0,0,0-.45-.3c-.1,0-.15-.15-.15-.47v-.46h1a2.06,2.06,0,0,1,1.48.34,7.58,7.58,0,0,0,1.38.6c.71.22.87.33,1,.63a1.83,1.83,0,0,1,0,1.49m2.9-3.41a.51.51,0,0,0-.32.17.48.48,0,0,1-.28.18,24.22,24.22,0,0,1-3.35-1.8,4.42,4.42,0,0,1-1-1l-.32-.51.34-.35c.37-.39.58-.43.65-.13s.36.3,1.2.53A8.18,8.18,0,0,1,81,52.9c.3.18.68.39.84.46a5.21,5.21,0,0,1,.47.23c.24.11.31,1.51.08,1.51m4-6.17h-.34a.77.77,0,0,0-.48.17c-.2.26-3.84.22-4.83,0-1.2-.33-1.23-.42-.37-1a11.27,11.27,0,0,1,4.07-1.31c.82-.05.93,0,1.42.28l.52.34v1.57Zm3.45-20.54a30.74,30.74,0,0,0-3-1.13c-.66-.18-1.73-.55-2.39-.8a23.62,23.62,0,0,0-4.75-1.33,21.38,21.38,0,0,1-2.14-.46,62.71,62.71,0,0,0-6.76-1.12,17.53,17.53,0,0,1-2.33-.48,18.14,18.14,0,0,0-4.84-.69,25.38,25.38,0,0,1-2.94-.23,41.25,41.25,0,0,0-8.65-.7c-2.27,0-4.15.07-5.11.17l-4.42.47a19.17,19.17,0,0,0-4.6.83,28.4,28.4,0,0,1-3.09.74,12.42,12.42,0,0,0-3.61,1.05,68.27,68.27,0,0,0-7.62,3.89,13.12,13.12,0,0,0-3.71,2.55,23.59,23.59,0,0,0-5.31,8.29c-.29.84-.59,1.63-.64,1.78a1.63,1.63,0,0,0-.12.59c0,.25-.1.4-.48.63a1.6,1.6,0,0,1-1,.32c-.53,0-.81-.25-1.44-1.25-.27-.43-.27-.45-.13-1.72a21.25,21.25,0,0,1,1.59-5.52c1.29-3,4-5.88,8.62-8.93a25.83,25.83,0,0,1,4.52-2.49,48.47,48.47,0,0,1,7.14-2.61c.49-.09,2.58-.51,4.63-.94l3.74-.76H57l3.7.48,4.75.59a31.35,31.35,0,0,1,3.09.65c3.21.83,4.49,1.13,6.11,1.48a46.77,46.77,0,0,1,7.51,2.43c1.06.44,2.74,1.11,3.72,1.47a13.6,13.6,0,0,1,3,1.46,34.71,34.71,0,0,1,3.15,2.22,10.11,10.11,0,0,1-2.26-.93", transform: "translate(0 -12.72)", fill: "#9e6f41" }),
        React__default['default'].createElement("path", { d: "M81.33,84c-1-.08-2.65-.16-3.75-.16a23.05,23.05,0,0,1-3.81-.31c-1-.16-2.79-.37-4-.46a30.48,30.48,0,0,1-4.58-.69c-1.31-.29-3.25-.65-4.31-.81a27.26,27.26,0,0,1-3.61-.84c-.93-.29-2.78-.88-4.13-1.29-2.26-.7-5.6-2-8.94-3.39a37.7,37.7,0,0,1-3.43-1.81c-1.13-.67-2.8-1.63-3.69-2.12A129.05,129.05,0,0,1,21.9,61.68c-1.17-1-2.81-2.38-3.64-3a11.32,11.32,0,0,1-2.78-3.05A9.92,9.92,0,0,1,13.56,52a13.58,13.58,0,0,1-.63-2.08,4.46,4.46,0,0,0-.47-1.25L12,47.75V45.58c0-2.48,0-2.82.57-2.82a1.79,1.79,0,0,0,.81-.32c.37-.23.48-.38.48-.63a1.63,1.63,0,0,1,.12-.59c0-.15.34-.94.64-1.78a23.7,23.7,0,0,1,5.3-8.29,13.38,13.38,0,0,1,3.72-2.55,68.27,68.27,0,0,1,7.62-3.89,12.42,12.42,0,0,1,3.61-1.05A28.4,28.4,0,0,0,38,22.92a19.69,19.69,0,0,1,4.6-.83L47,21.62c1-.1,2.84-.17,5.11-.17a41.25,41.25,0,0,1,8.65.7,25.38,25.38,0,0,0,2.94.23,18.14,18.14,0,0,1,4.84.69,17.53,17.53,0,0,0,2.33.48,62.71,62.71,0,0,1,6.76,1.12,21.38,21.38,0,0,0,2.14.46,16.35,16.35,0,0,1,5.65,1.92c1.28.63,3,1.5,3.74,1.95s2,1,2.62,1.34a30,30,0,0,1,4.53,2.41,19.12,19.12,0,0,0,1.86,1.1c.48.23,1.17.62,1.54.84a1.92,1.92,0,0,0,1.22.38,8.84,8.84,0,0,1,2.71.77,13.4,13.4,0,0,1,4,2,34.21,34.21,0,0,1,6.94,6.29,41.49,41.49,0,0,1,5.29,8.69,4.17,4.17,0,0,1,.52,2.25,11.75,11.75,0,0,1-.76,3.68,48.32,48.32,0,0,1-4.24,10.07,22.62,22.62,0,0,1-3,4.43,35.12,35.12,0,0,1-6.5,6.1,13,13,0,0,1-3.62,2.07,32.79,32.79,0,0,1-5.76,1.81c-.35,0-2.55.28-4.87.52A51.19,51.19,0,0,1,81.33,84M55.52,67a29.45,29.45,0,0,0,.95-4.21c0-.24-.06-.27-.5-.27-.61,0-.82.2-1.7,1.57a4.81,4.81,0,0,0-.94,2.53c0,.36.05.46.32.6a2.07,2.07,0,0,1,.49.36c.11.13.3.18.63.16s.48-.06.75-.74m5.6-.6.47-.32V65.3a7.12,7.12,0,0,0-.35-2c-.18-.68-.35-1.32-.35-1.43s-.33-.24-.46,0c0,.09-.14.28-.22.41a4.36,4.36,0,0,0-.61,2c0,.51-.13,1.1-.17,1.3a1.31,1.31,0,0,0,.11.79c.18.36.25.41.66.41a1.66,1.66,0,0,0,.92-.31m11.45-.18c.15-.48.14-.53-.17-1.31-.19-.45-.61-1.38-1-2.06l-.6-1.26h-.54a1.15,1.15,0,0,0-.66.15,13.23,13.23,0,0,0,.85,3.76c.35,1.07.49,1.19,1.36,1.2.54,0,.54,0,.71-.48M66.9,66.1c.37-.41.44-.72.23-1a2,2,0,0,1-.18-1c0-1.3-.64-2.45-1.38-2.45-.43,0-.48.23-.48,1.92,0,1.48,0,1.69.29,2.25s.29.6.76.6a.87.87,0,0,0,.76-.29m11-2a1.55,1.55,0,0,0,.24-1c0-.58,0-.64-.37-.85a9.74,9.74,0,0,1-1.2-1A4.46,4.46,0,0,0,75,60.22c-.55-.22-.76-.36-.87-.6s-.19-.33-.64-.33H73v.64c0,.77.16,1.13,1,2.15,1.32,1.62,1.82,2.08,2.38,2.19,1,.21,1.24.18,1.5-.2M51.45,62a8.87,8.87,0,0,0,2-2.2c.22-.41.22-.43,0-.66-.36-.4-1.06-.32-1.93.24a6.52,6.52,0,0,0-2.09,2,.45.45,0,0,0,.17.32,1.47,1.47,0,0,1,.3.48c.22.52.68.48,1.5-.16M79.5,58.51c.27-.76.29-1.08.11-1.29a1.75,1.75,0,0,1-.23-.38,2.41,2.41,0,0,0-.92-.46,6.86,6.86,0,0,1-1.37-.61,2.14,2.14,0,0,0-1.49-.32h-1v.46c0,.27.06.47.13.47a2.07,2.07,0,0,1,.63.44c.62.54,1.3,1.12,2,1.68a1.51,1.51,0,0,0,1.25.43h.7Zm-30.2-.29a9.79,9.79,0,0,0,1.23-1,8,8,0,0,1,.88-.73c.22-.13.22-.14-.12-.42a1.46,1.46,0,0,0-.52-.3,16,16,0,0,0-2.94,1,.59.59,0,0,0-.21.4.34.34,0,0,1-.17.28c-.1,0-.18.11-.18.17a3.72,3.72,0,0,0,1.27.92,2.65,2.65,0,0,0,.76-.37m32.78-2.95a.51.51,0,0,1,.31-.17c.11,0,.16-.18.16-.68,0-.68-.13-1-.47-1a2.48,2.48,0,0,1-.73-.4,5.06,5.06,0,0,0-2.17-.89c-.71-.19-1-.33-1-.48-.07-.3-.28-.26-.65.13l-.34.35.32.5a7.55,7.55,0,0,0,2.83,2.09c1.34.71,1.55.77,1.77.5M46.7,54.41a1.9,1.9,0,0,1,.82-.48c.92-.24,1.35-.47,1.49-.76s.18-.35-.24-.5a7,7,0,0,0-2.73,0l-.61.14,0,.74c0,.91.1,1.19.64,1.19a.81.81,0,0,0,.67-.34m-4.4-1.86a11.66,11.66,0,0,1,1.13-.65c1.14-.6,1.63-1,1.63-1.35s-.07-.34-.49-.49a1.11,1.11,0,0,0-.91,0,4.05,4.05,0,0,1-1.1.15,1.82,1.82,0,0,0-1.21.36,2.34,2.34,0,0,1-.62.35,1.92,1.92,0,0,0-.09.81c0,.7,0,.82.21.82a1.55,1.55,0,0,1,.48.17c.4.22.41.22,1-.16M85.58,49.1a.72.72,0,0,1,.47-.17h.34V47.34L85.9,47c-.48-.32-.56-.33-1.49-.27a9.37,9.37,0,0,0-4,1.26c-1,.62-.93.72.29,1.06,1,.27,4.63.29,4.84,0m-42.06-.84a10.39,10.39,0,0,0,1.12-.59l.44-.28L44.76,47c-.56-.58-.86-.67-2.17-.67-1,0-1.27,0-1.57.23s-.38.29-.38.69,0,.5.11.53.12.22.12.42v.34h1a3,3,0,0,0,1.65-.32m36.73-2.57a4.83,4.83,0,0,1,1.31-.53A6.71,6.71,0,0,0,84.18,44a1.1,1.1,0,0,1,.18-.45A.85.85,0,0,0,84.5,43c0-.35-.72-.79-1.21-.79s-2,1-3.27,2.25c-.77.74-1,1-1,1.26s0,.33.36.33a1.77,1.77,0,0,0,.83-.33M43.19,44.57c.57-.3.64-.47.28-.71-.19-.11-.69-.47-1.15-.81a4.25,4.25,0,0,0-2-.92c-1.68-.42-1.83-.41-2.42.2a2.2,2.2,0,0,0-.49.6,2.35,2.35,0,0,0,.52.65c.55.57.54.56,2.1.78a3.27,3.27,0,0,1,.93.24,4.56,4.56,0,0,0,2.26,0m34.28-1a14.47,14.47,0,0,0,1.75-1.05,5.09,5.09,0,0,1,.9-.61,2.58,2.58,0,0,0,.5-.4c.53-.52.54-.89,0-1.26s-1.14-.69-1.31-.62a3.16,3.16,0,0,0-.66.73,15,15,0,0,1-1.09,1.32,5.35,5.35,0,0,0-1.45,2c0,.38.2.36,1.32-.16m-3.85-1a6,6,0,0,0,1.3-1.09,7.43,7.43,0,0,1,1.55-1.26l.66-.35,0-.79c0-.72,0-.81-.28-1.12a.94.94,0,0,0-.87-.33c-.55,0-.56,0-1.13.79a8.07,8.07,0,0,0-1.89,4c0,.36.06.38.62.14M46.81,41.14c.11-.29.09-.41-.22-1a18.46,18.46,0,0,0-1.38-2c-1-1.34-1-1.34-1.56-1.37a1.36,1.36,0,0,0-1,.28c-.44.29-.49.36-.49.8a.9.9,0,0,0,.33.79,1,1,0,0,0,.51.32c.09,0,.24.15.32.35a1.79,1.79,0,0,0,.57.6,7.22,7.22,0,0,1,1,.79,3,3,0,0,0,1.66.81c.07,0,.2-.14.28-.33M71,40.93a8.17,8.17,0,0,0,.89-1.08,5.1,5.1,0,0,1,.6-.75c.13-.13.25-.28.25-.36a3.63,3.63,0,0,1,.3-.73c.27-.55.29-.65.16-1-.23-.56-.43-.69-1-.69s-.58,0-1,.62a10.24,10.24,0,0,0-1.14,3.1c-.2.74-.23,1-.12,1a.25.25,0,0,1,.14.21c0,.33.43.16.94-.38m-19.72,0c0-.07-.09-.25-.24-.41s-.3-.38-.3-1a1.64,1.64,0,0,0-.25-1.05c-.13-.19-.38-.65-.57-1-.73-1.41-1.43-1.83-2.06-1.24a1.52,1.52,0,0,0,0,1.7c.14.18.58.76,1,1.31s.9,1.18,1.12,1.43.46.44.87.4c.26,0,.48-.09.5-.16m3.13-1.17c-.08-.25-.29-1-.47-1.75s-.38-1.32-.47-1.32a.49.49,0,0,1-.29-.17,1.64,1.64,0,0,0-1.37,0,1.85,1.85,0,0,0,.1,1.59c.69,1.28,1.58,2.12,2.27,2.12h.39Zm3.37-.06c.25-.12.29-.2.29-.67a8.2,8.2,0,0,0-.3-1.58c-.17-.57-.34-1.28-.39-1.57-.13-.75-.22-.9-.59-1a2.88,2.88,0,0,0-1.89.32c-.43.2-.45.8,0,1.19a3.21,3.21,0,0,1,.49.81,4.25,4.25,0,0,0,.42.88,15.52,15.52,0,0,0,1.67,1.81,2.49,2.49,0,0,0,.33-.14m8.07-.22a2.78,2.78,0,0,0,.72-1.59,12.66,12.66,0,0,1,1.22-2.83c.3-.51.22-.67-.52-1s-1-.42-1.55-.17c-.33.15-.39.24-.34.52A7.82,7.82,0,0,1,65.1,36a4.6,4.6,0,0,0-.17,3c.25,1,.43,1.08.95.49m-5.13-1.06a26.58,26.58,0,0,0,0-5.61c-.14-.7-.21-.84-.57-1.08-.52-.35-.76-.35-1.18,0a1.69,1.69,0,0,1-.47.33,6.26,6.26,0,0,0,0,2.51c.07.34.27,1.08.45,1.63a3.27,3.27,0,0,0,.81,1.55,2.16,2.16,0,0,1,.5.68c0,.17.29.16.44,0", transform: "translate(0 -12.72)", fill: "#b98e5e" }),
        React__default['default'].createElement("path", { d: "M6.66,66.15A51.33,51.33,0,0,1,4.6,58.28c0-.38-.09-.86-.11-1.09s-.12-.85-.19-1.39a47.8,47.8,0,0,1-.06-7.91c.1-.55.21-1.31.25-1.69s.21-1.24.36-1.92.36-1.62.46-2.09.42-1.55.7-2.39.58-1.71.64-1.93.17-.51.22-.64.48-1.18.94-2.33c1.22-3.1,4-7.81,5.48-9.27.83-.82,2.08-1.7,2.08-1.45s.07.15.56,0l1-.41a2.12,2.12,0,0,1,.65-.21,2.77,2.77,0,0,0,.78-.41,8.28,8.28,0,0,1,1.2-.65c.33-.13,1.45-.65,2.48-1.17a22,22,0,0,1,2.86-1.19c.55-.17,1.47-.51,2.06-.75a19.8,19.8,0,0,1,1.91-.72l1.2-.36c.2-.07.85-.22,1.46-.35l1.28-.28a10.69,10.69,0,0,1,1.34-.28,21.73,21.73,0,0,1-3.32,1.09,21.57,21.57,0,0,0-2.8,1c-.73.33-1.93.83-2.66,1.12a21.67,21.67,0,0,0-2.62,1.26c-.71.41-1.78,1-2.39,1.29a26.94,26.94,0,0,0-5.18,3.75C13,28.78,12.73,29.08,11,32.23A37,37,0,0,0,7.26,43.34a24.7,24.7,0,0,0-.77,6c-.07,1.6-.13,5-.13,7.5a58.47,58.47,0,0,0,.25,7c.12,1.35.22,2.47.19,2.49s-.09-.08-.14-.23", transform: "translate(0 -12.72)", fill: "#b98e5e" }),
        React__default['default'].createElement("path", { d: "M81.33,84c-1-.08-2.65-.16-3.75-.16a23.05,23.05,0,0,1-3.81-.31c-1-.16-2.79-.37-4-.46a30.48,30.48,0,0,1-4.58-.69c-1.31-.29-3.25-.65-4.31-.81a27.26,27.26,0,0,1-3.61-.84c-.93-.29-2.78-.88-4.13-1.29-2.26-.7-5.6-2-8.94-3.39a37.7,37.7,0,0,1-3.43-1.81c-1.13-.67-2.8-1.63-3.69-2.12A129.05,129.05,0,0,1,21.9,61.68c-1.17-1-2.81-2.38-3.64-3a11.32,11.32,0,0,1-2.78-3.05A9.92,9.92,0,0,1,13.56,52a13.58,13.58,0,0,1-.63-2.08,4.46,4.46,0,0,0-.47-1.25L12,47.74v-2c0-2.41.1-2.94.59-2.94a1.77,1.77,0,0,0,.79-.32c.37-.23.48-.38.48-.63a1.63,1.63,0,0,1,.12-.59c0-.15.34-.94.64-1.78a23.7,23.7,0,0,1,5.3-8.29,13.38,13.38,0,0,1,3.72-2.55c5.24-3,8.51-4.47,10.19-4.75a25.6,25.6,0,0,0,4.77-1.12,20.54,20.54,0,0,1,4-.64L47,21.62c1-.1,2.84-.17,5.11-.17a41.25,41.25,0,0,1,8.65.7,25.38,25.38,0,0,0,2.94.23,18.14,18.14,0,0,1,4.84.69,19.93,19.93,0,0,0,2.68.52l1.86.25,1.92.29a24.72,24.72,0,0,1,2.62.52,17,17,0,0,0,2.19.48,17.34,17.34,0,0,1,5.89,2.09c1.32.66,3,1.53,3.68,1.94s1.76.94,2.33,1.19a29.58,29.58,0,0,1,4.54,2.4c.64.41,1.6,1,2.15,1.28s1.19.62,1.42.78a2,2,0,0,0,1,.26,9.83,9.83,0,0,1,2.77.78,13.15,13.15,0,0,1,4,2,33.54,33.54,0,0,1,9.21,9.43,39.45,39.45,0,0,1,3,5.55,4.17,4.17,0,0,1,.52,2.25,11.75,11.75,0,0,1-.76,3.68,48.32,48.32,0,0,1-4.24,10.07,22.62,22.62,0,0,1-3,4.43,35.12,35.12,0,0,1-6.5,6.1,13,13,0,0,1-3.62,2.07,32.79,32.79,0,0,1-5.76,1.81c-.35,0-2.55.28-4.87.52A51.19,51.19,0,0,1,81.33,84M55.52,67a29.45,29.45,0,0,0,.95-4.21c0-.24-.06-.27-.5-.27-.61,0-.82.2-1.7,1.57a4.81,4.81,0,0,0-.94,2.53c0,.36.05.46.32.6a2.07,2.07,0,0,1,.49.36c.11.13.3.18.63.16s.48-.06.75-.74m5.6-.6.47-.32V65.3a7.12,7.12,0,0,0-.35-2c-.18-.68-.35-1.32-.35-1.43s-.33-.24-.46,0c0,.09-.14.28-.22.41a4.36,4.36,0,0,0-.61,2c0,.51-.13,1.1-.17,1.3a1.31,1.31,0,0,0,.11.79c.18.36.25.41.66.41a1.66,1.66,0,0,0,.92-.31m11.45-.18c.15-.48.14-.53-.17-1.31-.19-.45-.61-1.38-1-2.06l-.6-1.26h-.54a1.15,1.15,0,0,0-.66.15,13.23,13.23,0,0,0,.85,3.76c.35,1.07.49,1.19,1.36,1.2.54,0,.54,0,.71-.48M66.9,66.1c.37-.41.44-.72.23-1a2,2,0,0,1-.18-1c0-1.3-.64-2.45-1.38-2.45-.43,0-.48.23-.48,1.92,0,1.48,0,1.69.29,2.25s.29.6.76.6a.87.87,0,0,0,.76-.29m11-2a1.55,1.55,0,0,0,.24-1c0-.58,0-.64-.37-.85a9.74,9.74,0,0,1-1.2-1A4.46,4.46,0,0,0,75,60.22c-.55-.22-.76-.36-.87-.6s-.19-.33-.64-.33H73v.64c0,.77.16,1.13,1,2.15,1.32,1.62,1.82,2.08,2.38,2.19,1,.21,1.24.18,1.5-.2M51.45,62a8.87,8.87,0,0,0,2-2.2c.22-.41.22-.43,0-.66-.36-.4-1.06-.32-1.93.24a6.52,6.52,0,0,0-2.09,2,.45.45,0,0,0,.17.32,1.47,1.47,0,0,1,.3.48c.22.52.68.48,1.5-.16M79.5,58.51c.27-.76.29-1.08.11-1.29a1.75,1.75,0,0,1-.23-.38,2.41,2.41,0,0,0-.92-.46A7.35,7.35,0,0,1,77,55.72a2,2,0,0,0-1.5-.39h-.87v.53c0,.31.06.52.13.52a2.07,2.07,0,0,1,.63.44c.62.54,1.3,1.12,2,1.68a1.51,1.51,0,0,0,1.25.43h.7Zm-30.2-.29a9.79,9.79,0,0,0,1.23-1,8,8,0,0,1,.88-.73c.22-.13.22-.14-.12-.42a1.46,1.46,0,0,0-.52-.3,16,16,0,0,0-2.94,1,.59.59,0,0,0-.21.4.34.34,0,0,1-.17.28c-.1,0-.18.11-.18.17a3.72,3.72,0,0,0,1.27.92,2.65,2.65,0,0,0,.76-.37m32.78-2.95a.51.51,0,0,1,.31-.17c.11,0,.16-.18.16-.68,0-.68-.13-1-.47-1a2.48,2.48,0,0,1-.73-.4,5.06,5.06,0,0,0-2.17-.89c-.71-.19-1-.33-1-.48-.07-.3-.28-.26-.65.13l-.34.35.32.5a7.55,7.55,0,0,0,2.83,2.09c1.34.71,1.55.77,1.77.5M46.7,54.41a1.9,1.9,0,0,1,.82-.48c.92-.24,1.35-.47,1.49-.76s.18-.35-.24-.5a7,7,0,0,0-2.73,0l-.61.14,0,.74c0,.91.1,1.19.64,1.19a.81.81,0,0,0,.67-.34m-4.4-1.86a11.66,11.66,0,0,1,1.13-.65c1.14-.6,1.63-1,1.63-1.35s-.07-.34-.49-.49a1.11,1.11,0,0,0-.91,0,4.05,4.05,0,0,1-1.1.15,1.82,1.82,0,0,0-1.21.36,2.34,2.34,0,0,1-.62.35,1.92,1.92,0,0,0-.09.81c0,.7,0,.82.21.82a1.55,1.55,0,0,1,.48.17c.4.22.41.22,1-.16M85.58,49.1a.72.72,0,0,1,.47-.17h.34V47.34L85.9,47c-.48-.32-.56-.33-1.49-.27a9.37,9.37,0,0,0-4,1.26c-1,.62-.93.72.29,1.06,1,.27,4.63.29,4.84,0m-42-.82c.36-.18.85-.45,1.1-.6l.44-.29L44.76,47c-.56-.58-.86-.67-2.17-.67-1,0-1.27,0-1.57.23s-.38.29-.38.69,0,.5.11.53.12.22.12.42v.34h1a3.21,3.21,0,0,0,1.66-.3m36.71-2.59a4.83,4.83,0,0,1,1.31-.53A6.71,6.71,0,0,0,84.18,44a1.1,1.1,0,0,1,.18-.45A.85.85,0,0,0,84.5,43c0-.35-.73-.79-1.21-.79-.85,0-4.23,2.81-4.23,3.51,0,.29,0,.33.36.33a1.77,1.77,0,0,0,.83-.33M43.19,44.57c.57-.3.64-.47.28-.71-.19-.11-.69-.47-1.15-.81a4.25,4.25,0,0,0-2-.92c-1.68-.42-1.83-.41-2.42.2a2.2,2.2,0,0,0-.49.6,2.35,2.35,0,0,0,.52.65c.55.57.54.56,2.1.78a3.27,3.27,0,0,1,.93.24,4.56,4.56,0,0,0,2.26,0m34.28-1a14.47,14.47,0,0,0,1.75-1.05,5.09,5.09,0,0,1,.9-.61,2.58,2.58,0,0,0,.5-.4c.53-.52.54-.89,0-1.26s-1.14-.69-1.31-.62a3.16,3.16,0,0,0-.66.73,15,15,0,0,1-1.09,1.32,5.35,5.35,0,0,0-1.45,2c0,.38.2.36,1.32-.16m-3.85-1a6,6,0,0,0,1.3-1.09,7.43,7.43,0,0,1,1.55-1.26l.66-.35,0-.79c0-.72,0-.81-.28-1.12a.94.94,0,0,0-.87-.33c-.55,0-.56,0-1.13.79a8.07,8.07,0,0,0-1.89,4c0,.36.06.38.62.14M46.81,41.14c.11-.29.09-.41-.22-1a18.46,18.46,0,0,0-1.38-2c-1-1.34-1-1.34-1.56-1.37a1.36,1.36,0,0,0-1,.28c-.44.29-.49.36-.49.8a.9.9,0,0,0,.33.79,1,1,0,0,0,.51.32c.09,0,.24.15.32.35a1.79,1.79,0,0,0,.57.6,7.44,7.44,0,0,1,1,.82,2.65,2.65,0,0,0,1.63.78c.07,0,.2-.14.28-.33M71,40.93a8.17,8.17,0,0,0,.89-1.08,5.1,5.1,0,0,1,.6-.75c.13-.13.25-.28.25-.36a3.63,3.63,0,0,1,.3-.73c.27-.55.29-.65.16-1-.23-.56-.43-.69-1-.69s-.58,0-1,.62a10.24,10.24,0,0,0-1.14,3.1c-.2.74-.23,1-.12,1a.25.25,0,0,1,.14.21c0,.33.43.16.94-.38m-19.72,0c0-.07-.09-.25-.24-.41s-.3-.38-.3-1a1.64,1.64,0,0,0-.25-1.05c-.13-.19-.38-.65-.57-1-.73-1.41-1.43-1.83-2.06-1.24a1.52,1.52,0,0,0,0,1.7c.14.18.58.76,1,1.31s.9,1.18,1.12,1.43.46.44.87.4c.26,0,.48-.09.5-.16m3.18-1c-.1-.25-.51-1.85-.74-2.86,0-.19-.14-.33-.24-.33a.52.52,0,0,1-.3-.17,1.64,1.64,0,0,0-1.37,0,1.85,1.85,0,0,0,.1,1.59c.69,1.28,1.58,2.12,2.27,2.12.37,0,.39,0,.28-.31m3.32-.18c.25-.12.29-.2.29-.67a8.2,8.2,0,0,0-.3-1.58c-.17-.57-.34-1.28-.39-1.57-.13-.75-.22-.9-.59-1a2.88,2.88,0,0,0-1.89.32c-.43.2-.45.8,0,1.19a3.21,3.21,0,0,1,.49.81,4.25,4.25,0,0,0,.42.88,15.52,15.52,0,0,0,1.67,1.81,2.49,2.49,0,0,0,.33-.14m8.07-.22a2.78,2.78,0,0,0,.72-1.59,12.66,12.66,0,0,1,1.22-2.83c.3-.51.22-.67-.52-1s-1-.42-1.55-.17c-.33.15-.39.24-.34.52A7.82,7.82,0,0,1,65.1,36a4.84,4.84,0,0,0-.24,2.77c.07.26.16.61.19.79.08.43.43.41.83,0m-5.13-1.06a26.58,26.58,0,0,0,0-5.61c-.14-.7-.21-.84-.57-1.08-.52-.35-.76-.35-1.18,0a1.69,1.69,0,0,1-.47.33,6.26,6.26,0,0,0,0,2.51c.07.34.27,1.08.45,1.63a3.27,3.27,0,0,0,.81,1.55,2.16,2.16,0,0,1,.5.68c0,.17.29.16.44,0", transform: "translate(0 -12.72)", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M73.7,77.51l-6.52-.64a48.72,48.72,0,0,1-5.27-.71c-.83-.19-2.19-.42-3-.51A45.35,45.35,0,0,1,51.3,73.8a23.85,23.85,0,0,1-5.59-2.18l-4-2.06c-1.94-1-9.24-5.14-10.42-5.88-2.07-1.32-7.28-4.77-8.32-5.53-.61-.43-1.63-1.11-2.27-1.48A26.87,26.87,0,0,1,18,54.74a10.4,10.4,0,0,1-2.62-2.81,11.07,11.07,0,0,1-1.76-3.35l-.66-1.81v2.8l-.47-.92L12,47.74v-2c0-2.41.1-2.94.59-2.94a1.77,1.77,0,0,0,.79-.32c.37-.23.48-.38.48-.63a1.63,1.63,0,0,1,.12-.59c0-.15.35-.94.64-1.78a23.7,23.7,0,0,1,5.3-8.29,13.38,13.38,0,0,1,3.72-2.55c5.24-3,8.51-4.47,10.19-4.75a25.6,25.6,0,0,0,4.77-1.12,20.54,20.54,0,0,1,4-.64L47,21.62c1-.1,2.84-.17,5.11-.17a41.25,41.25,0,0,1,8.65.7,25.38,25.38,0,0,0,2.94.23,18.14,18.14,0,0,1,4.84.69,19.93,19.93,0,0,0,2.68.52l1.86.25,1.92.29a24.72,24.72,0,0,1,2.62.52,17,17,0,0,0,2.19.48,17.34,17.34,0,0,1,5.89,2.09c1.32.66,3,1.53,3.68,1.94s1.76.94,2.33,1.19a29.58,29.58,0,0,1,4.54,2.4c.64.41,1.6,1,2.15,1.28,1.5.75,1.91,1,1.76,1.2a.76.76,0,0,0,.08.93c.12.1.83.58,1.57,1.07s2.38,1.62,3.61,2.54a29.84,29.84,0,0,1,4.4,3.87,16.72,16.72,0,0,1,3.13,3.77c1.47,2.36,2.1,4,2.1,5.56a20,20,0,0,1-.19,2.13c-.17,1.4-.58,2.75-2,6.56a31.42,31.42,0,0,1-3.66,6.59,15.79,15.79,0,0,1-2.84,3.22A18.17,18.17,0,0,1,103,74c-2.74,1.62-3.82,2.07-5.5,2.26-.73.08-1.94.3-2.68.47a36.56,36.56,0,0,1-4.25.67,62.58,62.58,0,0,1-8.5.33,63.47,63.47,0,0,1-8.32-.24m8.09-1.32a4.08,4.08,0,0,0,2-.53l.91-.48a15.49,15.49,0,0,0-.88-1.48c-.51-.79-1.16-1.83-1.46-2.3S81,69.53,80,68.31s-2.13-2.59-2.46-3L77,64.41h.35a1,1,0,0,0,.82-.94c0-.22.13-.14.85.55.46.44,1.26,1.17,1.76,1.61a59.09,59.09,0,0,1,5.71,6.7c.39.6,1,1.43,1.32,1.82l.6.72,1.66.07c.92,0,2.3.1,3.06.14a7.86,7.86,0,0,0,2.74-.24,4.74,4.74,0,0,0,2.28-.94,11.8,11.8,0,0,0,1.43-1.15l.49-.5-2.3-1.38c-3-1.78-5.37-3.31-10.22-6.61-3.32-2.25-4.68-3.2-7.91-5.47-.21-.14-.21-.18,0-.52l.18-.37,1.55.53a23.34,23.34,0,0,1,3.75,1.72c1.22.66,3.21,1.71,4.43,2.34s3,1.64,4,2.24,2.64,1.49,3.61,2a34.42,34.42,0,0,1,3,1.7,17.07,17.07,0,0,0,2.15,1.19l.86.39,1.5-.77a6.66,6.66,0,0,0,2.94-2.35,3.68,3.68,0,0,0,1-2.09c.33-1.17.39-1.87.17-1.93-.43-.11-2-.67-3.19-1.09-.71-.26-2.32-.77-3.55-1.13s-3.42-1.1-4.82-1.63-3.11-1.11-3.79-1.28-2.45-.78-4-1.35-3.17-1.13-3.72-1.27c-1.82-.46-3.26-1-3.26-1.17a.49.49,0,0,0-.46-.46,2.18,2.18,0,0,1-.94-.6,15,15,0,0,1,3.44.59,19.52,19.52,0,0,0,2.27.47c.6.07,2,.34,3.08.6,4.46,1.06,11.35,2.82,12.28,3.13a29.78,29.78,0,0,0,7.18,1.63h.83l.66-1.15a10.22,10.22,0,0,0,.94-2.24,4,4,0,0,0,.16-2.2,10.86,10.86,0,0,0-.63-2.44l-.5-1.34-5.1-.07a55.89,55.89,0,0,1-7-.32,31.24,31.24,0,0,0-3.32-.25,26.13,26.13,0,0,1-2.79-.18c-.79-.09-2.45-.17-3.81-.17h-2.4l0-.88,0-.86.58-.07L91,46.83c6.3-.42,8.71-.58,10.07-.7.73-.05,2-.11,2.88-.11,1.44,0,1.58,0,2.17-.32s.7-.32.36-1.32a21.1,21.1,0,0,0-2.53-3.79,4.86,4.86,0,0,0-1.18-.94,17,17,0,0,1-1.63-1l-1-.7-.53.14c-.29.07-2.24.65-4.32,1.29S90.67,40.76,89.71,41s-2.52.77-3.46,1.11l-1.71.63-.43-.29a1.51,1.51,0,0,0-.67-.29c-.36,0-.23-.1,2.43-1.59,1.34-.74,3-1.71,3.61-2.13a22,22,0,0,1,2.44-1.31,23.72,23.72,0,0,0,2.48-1.34L95.6,35l-.44-.46a15.51,15.51,0,0,0-3.53-2.39,7.75,7.75,0,0,0-2.82-1l-2.26-.49-.78-.2-.39.45c-.21.25-.82,1.09-1.34,1.85S82.4,35,81.56,36s-2,2.43-2.68,3.2S77,41.35,76.1,42.27,74.45,44,74.42,44a13,13,0,0,0,1.66,1c.92.53,2.22,1.35,2.89,1.83,1.1.79,1.27.87,1.62.81s.36,0-.22.35a2.34,2.34,0,0,0-.62.53c0,.16.27.32.67.4l.36.09-.56.95a12,12,0,0,0-.76,1.57c-.17.56-.23.62-.47.56-.59-.15-.87-.3-.87-.48s-.28-.21-.62.17l-.34.35.32.51a2.84,2.84,0,0,0,.67.73,1.22,1.22,0,0,1,.32.28,12.11,12.11,0,0,1-.67,1.07l-.68,1-.37-.23a2.26,2.26,0,0,0-1.25-.23h-.87v.53c0,.33.05.52.15.52a3.14,3.14,0,0,1,.72.53l.58.54-.27.48c-.15.25-.5.78-.78,1.16a4.25,4.25,0,0,0-.51.79c0,.24-.21.08-.35-.24s-.2-.35-.67-.35H73L73,60a6.24,6.24,0,0,0,.09.89c.08.25-1.62.72-2.59.71-.64,0-.8,0-.93.22a1.61,1.61,0,0,1-.82.36,1.81,1.81,0,0,0-.67.2,3.92,3.92,0,0,0,.46.6,27.52,27.52,0,0,1,4,8.29c.31.92.74,2.17,1,2.77l.42,1.1.81.38a11.78,11.78,0,0,0,1.82.62,18.18,18.18,0,0,0,5.18,0m-11.7-1.63a8,8,0,0,0-.12-1c-.06-.35-.34-2.1-.64-3.89-.79-5-1.52-7.16-2.39-7.16a.4.4,0,0,1-.47-.34c-.17-.5-.93-.77-1.25-.45a1,1,0,0,0-.13.58c0,.24,0,.44-.09.44s-.86.08-1.81.19a14,14,0,0,1-1.89.12,1.53,1.53,0,0,1-.31-.77c-.14-.73-.36-.89-.57-.43-.06.1-.17.29-.22.4a4,4,0,0,0-.6,1.95c0,.51-.13,1.1-.17,1.3a1.31,1.31,0,0,0,.11.79c.18.38.25.41.68.41a1.12,1.12,0,0,0,.7-.2c.11-.1.23-.16.25-.14s-.07,1.41-.22,3.08-.29,3.12-.29,3.22c0,.34,1,.89,2.22,1.25.67.2,1.53.49,1.91.64.67.28.82.29,3,.3h2.29ZM56.35,71.49c.28-.79.93-2.51,1.47-3.83s1.06-2.79,1.19-3.28l.23-.9H56.38l0-.46.07-.47H56a1.22,1.22,0,0,0-.66.15c-.12.12-.27,0-.75-.5s-.8-.9-1-1.19l-.44-.54.29-.45c.36-.51.36-.59.11-.87a.89.89,0,0,0-.68-.21,5,5,0,0,0-2.64,1.61c-.69.66-.8.93-.51,1.17a1.47,1.47,0,0,1,.3.48c.08.2.23.35.34.35a12.64,12.64,0,0,1-2.58,2.61A10.31,10.31,0,0,0,45.35,68l-.31.61.33.35c.84.89,1.62,1.35,3.94,2.29A25.62,25.62,0,0,0,53,72.52c.73.15,1.36.31,1.39.33a2.6,2.6,0,0,0,.77.06h.73ZM40.72,65.55c.59-.46,1.84-1.34,2.79-1.94s2.33-1.53,3.06-2a30.16,30.16,0,0,1,2.86-1.73c.83-.45,1.67-.91,1.86-1a4.4,4.4,0,0,0,.38-.27,3.35,3.35,0,0,0-.38-.7,4.09,4.09,0,0,1-.41-.82c0-.07.16-.24.35-.35a1,1,0,0,0,.35-.27c0-.22-.73-.59-1.09-.56s-.44,0-1.17-1.07c-.59-.86-.72-1.13-.6-1.22a1.73,1.73,0,0,0,.42-.68,2.2,2.2,0,0,0-1-.31c-.26,0-.45-.21-1.23-1.35-.52-.76-1-1.48-1.09-1.63l-.15-.28H41.75c-2.62,0-5.07-.08-7.54-.24-5.65-.37-6.45-.44-8.59-.75a23.87,23.87,0,0,0-3.7-.29c-1.68,0-3.52.18-3.52.36s.27.78.61,1.64a13.35,13.35,0,0,0,2.7,4.63c.45.48,1,1.16,1.28,1.49s.5.6.64.56c1.14-.34,3.84-.84,9.21-1.7.86-.14,2.42-.45,3.45-.7a26,26,0,0,1,4-.64c1.14-.1,2.75-.31,3.58-.47l1.53-.28a2,2,0,0,1,0,.64c0,.59,0,.65-.31.77s-4.32,1.37-5.69,1.75c-.44.13-1.56.54-2.45.91s-2.27.86-3,1.11-2.1.65-3,.93-1.66.52-1.78.55a.35.35,0,0,0-.23.1,31.86,31.86,0,0,0,3.22,2.77,15.51,15.51,0,0,0,5.22,3.19,3.75,3.75,0,0,1,1.09.48c.73.49,1,.42,2.23-.54m2.54-17.13a1.11,1.11,0,0,1,.78-.07l.76.16.4.07L45,48.16c-.24-.4-.24-.44-.07-.63s.14-.24-.45-.77a5.86,5.86,0,0,1-1.06-1.35c-.39-.72-.42-.78-.21-.84a1.06,1.06,0,0,0,.42-.29c.19-.21.17-.23-.39-.59s-.67-.45-.46-.66-.28-.26-1.42-.62l-1.85-.58c-.16-.06-2.62-.75-5.47-1.52s-6.67-1.87-8.5-2.44a41.38,41.38,0,0,0-5.09-1.45l-.47-.08-.48.81c-.64,1.1-2.14,4.13-2.63,5.32a4,4,0,0,0-.41,1.61c0,.65,0,.65.44.78a22.19,22.19,0,0,0,2.76.23c1.28,0,2.41.11,2.51.15s1,.18,1.92.3,2.92.4,4.36.58,4.11.54,5.94.77c3.59.44,6.25.84,6.41.94a.59.59,0,0,1,.11.41v.34h1a5,5,0,0,0,1.4-.16M74.41,43.3A16.37,16.37,0,0,1,76,40.53a5.33,5.33,0,0,1,.68-.4l.47-.25,0-.84,0-.85,1.49-2.11c3-4.23,3.51-5.17,3.51-6.33v-.6l-.72-.34a8.73,8.73,0,0,0-1-.43,5.55,5.55,0,0,1-.93-.48,7.27,7.27,0,0,0-1.8-.67c-.64-.17-1.4-.38-1.68-.48a5.57,5.57,0,0,0-1.58-.17c-.92,0-1.1,0-1.17.2A38.78,38.78,0,0,0,71.6,32.4a44.17,44.17,0,0,1-2,7.54l-.52,1.19.66.38C72.42,43,74,43.9,74.1,43.88a1.73,1.73,0,0,0,.31-.58m-30-1.21a6.45,6.45,0,0,0,1-.47,1.06,1.06,0,0,1,.88-.21c.4.06.45,0,.62-.34s.27-.41.35-.41a1,1,0,0,0,.44-.22,1.85,1.85,0,0,1,.55-.27c.21,0-.1-.3-1.52-1.29a17.44,17.44,0,0,1-2.17-1.72c-.27-.32-.47-.46-.68-.46a22.22,22.22,0,0,1-4.45-2.78c-.87-.63-2.3-1.57-3.18-2.11a21.15,21.15,0,0,1-2.76-2,7.53,7.53,0,0,0-1.9-1.3l-.77-.3-1.26.31a12,12,0,0,0-1.95.68,9,9,0,0,1-1.17.5,8.32,8.32,0,0,0-2.87,1.73c-.8.75-1.35,1.48-1.21,1.61a7.52,7.52,0,0,0,1.15.4,87.42,87.42,0,0,1,10.5,4.23c.9.43,2.61,1.17,3.82,1.64a36.59,36.59,0,0,1,4.08,1.91c1,.57,1.92,1,2,1a3.53,3.53,0,0,0,.59-.2m6.92-1.15c0-.07-.09-.25-.24-.41a.83.83,0,0,1-.3-.64c0-.33,0-.36.86-.62l.86-.27.38.43a1.86,1.86,0,0,0,1.38.77c.33,0,.35,0,.24-.31a26.91,26.91,0,0,1-.7-2.73c0-.08.17.09.36.37l.45.61a1.11,1.11,0,0,0,.59-.1c.48-.16.52-.16.63,0a8.83,8.83,0,0,0,.87,1c.75.77.79.79,1.1.65s.31-.21.31-.64A4.72,4.72,0,0,0,58,38a1.29,1.29,0,0,1-.07-.58,2.53,2.53,0,0,1,.7-.22l.62-.14.55.61a2.76,2.76,0,0,1,.55.73.14.14,0,0,0,.15.13c.38,0,.43-.28.43-2.12A7.81,7.81,0,0,1,61,34.61a7.56,7.56,0,0,1,.64,1.49l.55,1.48,1.24.64c1.4.72,1.66.92,1.66,1.34,0,.22,0,.29.24.29a.54.54,0,0,0,.4-.2c.12-.18.29-.12,1.61.58l1.47.77v-.34c0-.17-.06-.85-.12-1.5-.12-1.16-.08-2,.35-8.16.06-.86.12-2.36.12-3.32V25.92l-1-.31a30.52,30.52,0,0,0-7-1.25,15.6,15.6,0,0,1-2.42-.23,1.94,1.94,0,0,0-.71-.09l-.26,0,.72,2.56c.39,1.41.89,3.07,1.09,3.68s.36,1.14.36,1.18-.13,0-.29,0a.76.76,0,0,0-.64.25,1.64,1.64,0,0,1-.48.31s-.1.09-.1.19c0,.55-.3-.26-.94-2.51-.74-2.62-1.42-4.23-2-4.8a1.55,1.55,0,0,0-.91-.38c-.32-.05-1.1-.19-1.74-.32A14,14,0,0,0,51.06,24,4.23,4.23,0,0,1,50,23.84a3,3,0,0,0-2,0,2.17,2.17,0,0,1-.81.17,1.71,1.71,0,0,0-1,.29,1.78,1.78,0,0,0-.43.38,19.79,19.79,0,0,0,1.56,2.65c.46.71,1.12,1.75,1.45,2.32s1.06,1.57,1.59,2.23,1.3,1.69,1.71,2.29c1.24,1.8,1.82,3,1.16,2.38a1.21,1.21,0,0,0-.79-.2h-.57l-1.52-1.83c-.85-1-1.92-2.36-2.39-3a15.78,15.78,0,0,0-3.61-4c-.54-.36-1.23-.86-1.56-1.11-.58-.44-.58-.44-1.46-.38l-2.5.16a8.72,8.72,0,0,0-3.26.69c-.89.33-1.71.6-1.8.64s.17.29.75.67c1.77,1.2,5.95,4.46,7.58,5.93.9.8,2.76,2.33,4.14,3.39a40.88,40.88,0,0,1,3.3,2.77c.77.8.84.85,1.27.81.26,0,.48-.09.5-.16", transform: "translate(0 -12.72)", fill: "#dbe6b7" }),
        React__default['default'].createElement("path", { d: "M78,45.28a22.33,22.33,0,0,1,2.73-1.75c.46-.24.69-.34.53-.23s-.64.54-1.06.94a3.45,3.45,0,0,1-1.28.85l-.71.18c-.12,0-.21,0-.21,0", transform: "translate(0 -12.72)", fill: "#dbe6b7" })));
};

var Icon$v = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("path", { d: "M128,64A64,64,0,1,1,64,0a64,64,0,0,1,64,64", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M69.83,102.41c-.09,0-.58-.07-1.09-.11l-2.14-.22-2.48-.26c-.7-.07-1.76-.23-2.36-.35-1.67-.33-2.82-.58-2.88-.62s-.61-.11-1.31-.21-1.72-.3-2.27-.44c-1-.25-4.15-1.31-5.34-1.78l-1.73-.67a59.16,59.16,0,0,1-9.35-5.09,46.18,46.18,0,0,1-7.29-5.86l-2.83-2.63c-.21-.19-1-1-1.71-1.83a19.82,19.82,0,0,1-2.47-3.28c-.63-1-1.61-2.49-2.18-3.32A31.19,31.19,0,0,1,19,69.1a42.44,42.44,0,0,1-2.13-7.19c-.3-1.72-.56-3.43-.77-5.33a15.9,15.9,0,0,1,.37-4.67,51.75,51.75,0,0,1,1.23-5.24c.19-.7.47-1.75.61-2.35a11.22,11.22,0,0,1,1.27-2.92c.54-1,1.29-2.38,1.67-3A6.16,6.16,0,0,1,23,36.23a5.87,5.87,0,0,1,1.39-1.07c.65-.19,1.91-.54,2-.54s0,.06,0,.13-.07.13,0,.13a.42.42,0,0,0,.19-.12,3.37,3.37,0,0,1,.54-.41c.4-.25.43-.3.39-.53-.1-.47.29-.87,2.25-2.33a13.88,13.88,0,0,1,2.93-1.87,36.84,36.84,0,0,1,6-2.11c.55-.13,1.45-.34,2-.49a26.67,26.67,0,0,1,3.78-.6c.84-.09,2.08-.26,2.75-.36s1.93-.21,2.8-.26,1.74-.12,2-.16,2.28-.09,4.87-.1c4.44,0,4.49,0,5.68.23l4.21.73c2,.34,3.68.68,5.11,1.05l3,.76a74.73,74.73,0,0,1,9.48,3.23c3.13,1.27,3.93,1.61,4.49,1.91.35.18,1.23.61,2,.95a18.86,18.86,0,0,1,2,1.07c.35.24,1,.64,1.52.9a55.31,55.31,0,0,1,5,3.23,36.81,36.81,0,0,1,8.68,8,17.22,17.22,0,0,1,2.26,3.54,14.72,14.72,0,0,1,1,2,7.34,7.34,0,0,1,.28,1.06,63.81,63.81,0,0,1,.6,7.09,13.92,13.92,0,0,1,0,2.4,27.8,27.8,0,0,1-.81,3.57c-.35,1.64-.24,1.62-.58,3.06-.16.67-.35,1.32-.72,2.58a28.35,28.35,0,0,1-1.59,4.19c-.62,1.39-1.14,2.54-1.17,2.57a2,2,0,0,0-.21.35c-.29.54-1.24,2.28-1.79,3.27a53.76,53.76,0,0,1-3.2,5.22l-.66.88a31.77,31.77,0,0,1-4.32,4.4l-1.19,1a3.69,3.69,0,0,1-.48.31c-.19.09-.71.38-1.17.64a1.38,1.38,0,0,1-.22.13l-.27.15c-.3.16-2.8,1.9-3.31,2.24a29.73,29.73,0,0,1-5.06,2.3c-.35.15-.56.22-.78.31a14.36,14.36,0,0,1-3.46,1c-.6.07-1.4.19-1.78.26l-1.31.27a28.19,28.19,0,0,1-4.24.12c-2,0-3.7,0-3.8,0", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M97,89a49.63,49.63,0,0,0,4.89-6.24l3.36-5.66a49.19,49.19,0,0,0,2.4-6.62c1.48-5.2,1.32-7.86,1.27-8.56a18.51,18.51,0,0,0-.43-2.82V57.12l-.38-1.36c-.21-.75-.43-1.52-.48-1.71a33.63,33.63,0,0,0-3.09-5,25,25,0,0,0-4.57-5c-.62-.47-1.87-1.45-2.79-2.19a34.38,34.38,0,0,0-4.23-3,7.44,7.44,0,0,1-1-.71,3.62,3.62,0,0,0-1.75-.82,26.08,26.08,0,0,1-3.54-1.75,10.28,10.28,0,0,0-2.23-1c-.64-.19-2.42-.81-3.93-1.37s-3-1.08-3.27-1.17l-1.51-.46c-.55-.18-1.67-.47-2.49-.67s-2.24-.58-3.16-.86a39.81,39.81,0,0,0-5.72-1.35l-3.36-.48a44.49,44.49,0,0,0-8.73-.51,41.29,41.29,0,0,0-5.33.26,39.06,39.06,0,0,0-5.54,1,30.57,30.57,0,0,0-5,1.44c-.46.2-1.21.47-1.66.61a14.85,14.85,0,0,0-2,.85c-.67.33-1.52.73-1.89.89a5.85,5.85,0,0,0-1,.52,1.56,1.56,0,0,1-.36.22s-.31.1-.61.2c-1,.39-1.23.45-1.26.35s-.88.43-1.52,1a31.42,31.42,0,0,0-3.42,5.2,56.79,56.79,0,0,0-2.54,6.94c-.08.36-.25,1.06-.36,1.55a18.45,18.45,0,0,0-.34,1.83c-.07.52-.2,1.33-.27,1.79a23.83,23.83,0,0,0,.17,5.88c.63,5.2,2.52,10.34,6.88,18.69,1.07,2,5.74,7.28,8.71,9.77,1.69,1.42,3.91,3.09,5.64,4.28a35.07,35.07,0,0,0,6.29,3.2c1.35.58,4.06,1.63,5.32,2l1.7.61a18.85,18.85,0,0,0,3.9,1c.47.08,1.33.25,1.91.39a44.75,44.75,0,0,0,6.07.84c1.51.18,2.79.33,2.83.35a26.58,26.58,0,0,0,4.24-.21l3.75-.44c1.55-.18,1.57-.32,4.54-.89a29.74,29.74,0,0,0,3.84-.8,19.61,19.61,0,0,0,3.45-1.73A38,38,0,0,0,93.81,92,27.12,27.12,0,0,0,97,89M45.43,49.16A1.17,1.17,0,0,0,45,49a2,2,0,0,1-1-.83,1.93,1.93,0,0,1,.37-.45c.44-.45.5-.46,1.77-.14a3.16,3.16,0,0,1,1.44.59c.26.2.65.47.86.61.4.27.39.38-.08.62a3,3,0,0,1-1.74,0,1.45,1.45,0,0,0-.61-.13,1.45,1.45,0,0,1-.61-.13m1.13,2.69a.65.65,0,0,1,.26-.87c.26-.18.4-.2,1.16-.2.94,0,1.17.06,1.58.5s.3.29-.69.8a2.24,2.24,0,0,1-1.46.35h-.76v-.24a.6.6,0,0,0-.09-.34m3-5.41a5.73,5.73,0,0,0-.74-.6,1,1,0,0,1-.38-.41c-.06-.14-.17-.24-.26-.24-.27,0-.61-.5-.61-.88s0-.35.39-.55a1.59,1.59,0,0,1,.74-.23c.33,0,.37,0,.72.5.2.27.57.76.82,1.07a7.16,7.16,0,0,1,.69,1c.21.41.22.5.14.71s-.14.28-.68.14a2.5,2.5,0,0,1-.83-.55m-.94,8.4c-.26.13-.65.35-.85.48a.94.94,0,0,1-1,.14c-.29-.09-.29-.09-.29-.69,0-.36,0-.59.09-.59a1.42,1.42,0,0,0,.47-.26,1.26,1.26,0,0,1,.89-.26,3.34,3.34,0,0,0,.83-.11c.5-.15,1,.05,1,.37s-.27.48-1.14.92M50.16,57a1.51,1.51,0,0,1-.1-.69v-.59l.41-.14a5,5,0,0,1,2.11,0c.31.11.31.09.18.37s-.27.27-.8.46a3.5,3.5,0,0,0-1,.48c-.29.26-.63.32-.81.15m1.56-13.12a.82.82,0,0,1,.7-.84c.29,0,.73.47,1,1a6.31,6.31,0,0,0,.42.77,1.22,1.22,0,0,1,.25.87c0,.43,0,.55.23.72s.2.25.18.31-.18.1-.37.12-.39,0-.66-.31-.62-.78-1-1.33c-.61-.85-.71-1-.71-1.35m.69,16.1a3.54,3.54,0,0,1-.5-.31c-.44-.29-.46-.32-.33-.46a.55.55,0,0,0,.14-.29.35.35,0,0,1,.12-.24,13.75,13.75,0,0,1,2.23-.79,1,1,0,0,1,.4.23c.24.2.25.21.09.31a7.25,7.25,0,0,0-.65.54,6.71,6.71,0,0,1-1,.73,5.62,5.62,0,0,1-.52.28m2.14,2.6c-.62.45-.93.49-1.09.11a1.06,1.06,0,0,0-.22-.36.34.34,0,0,1-.13-.24,4.88,4.88,0,0,1,1.57-1.49c.65-.42,1.17-.48,1.45-.17.16.16.16.18,0,.49a6.56,6.56,0,0,1-1.58,1.66m.33-19.17a1.2,1.2,0,0,1,1,0,.34.34,0,0,0,.22.13c.07,0,.2.37.35,1s.29,1.13.35,1.31l.12.33h-.28c-.54,0-1.12-.53-1.63-1.5-.28-.52-.35-1.09-.16-1.28m2.78,22.76-.22.58-.4,0c-.54,0-1-.33-1-.71a5,5,0,0,1,1.35-2.78c.24-.28.32-.33.65-.33s.36,0,.36.15a19.31,19.31,0,0,1-.69,3.07m1.7-20.35-.25.11a12.6,12.6,0,0,1-1.26-1.36,2.53,2.53,0,0,1-.28-.62,2.06,2.06,0,0,0-.37-.64.76.76,0,0,1-.23-.56c0-.25.08-.29.51-.44,1-.31,1.43-.17,1.53.46,0,.18.16.74.31,1.24a7.29,7.29,0,0,1,.25,1.32c0,.33,0,.4-.21.49m.48-5.05c0-.59,0-.69.16-.74a.77.77,0,0,0,.32-.22.51.51,0,0,1,.31-.17,1.1,1.1,0,0,1,.83.6c0,.12.08.39.13.6a21.29,21.29,0,0,1,0,4c-.14.14-.34.13-.34,0a1.28,1.28,0,0,0-.35-.45,2.35,2.35,0,0,1-.6-1.13,7.37,7.37,0,0,1-.44-2.5m2.35,24.85-.35.24a1.25,1.25,0,0,1-.69.24c-.31,0-.36,0-.49-.31a.9.9,0,0,1-.09-.59,7.88,7.88,0,0,0,.13-1,3.31,3.31,0,0,1,.45-1.49,1.58,1.58,0,0,0,.17-.3.35.35,0,0,1,.18-.16c.09,0,.18.19.29.69s.22.87.28,1a3.87,3.87,0,0,1,.12,1Zm3.92,0c-.1,0-.15.09-.12.14s-.08.09-.32.09-.38,0-.62-.48-.24-.56-.24-1.68,0-1.42.37-1.42a1.16,1.16,0,0,1,.36.1,2.59,2.59,0,0,1,.67,1.76,2.13,2.13,0,0,0,.13.76.49.49,0,0,1-.23.73m.46-22.71A9.86,9.86,0,0,0,66,44.31a3.18,3.18,0,0,1-.48,1.12,1.13,1.13,0,0,0-.25.37c0,.05-.09.09-.2.09s-.21-.08-.36-.75a3.57,3.57,0,0,1,.17-2.27,4.72,4.72,0,0,0,.22-1c0-.27,0-.35.26-.46s.5-.17,1.06.1.64.47.17,1.36m3.82,22.93c-.08.25-.13.28-.45.28-.65,0-.8-.17-1.1-1.07a9,9,0,0,1-.6-2.66.84.84,0,0,1,.49-.12h.41l.34.73a15,15,0,0,1,1,2.41,1.44,1.44,0,0,1-.1.43m-.11-20.34a5.31,5.31,0,0,0-.49.62,5.85,5.85,0,0,1-.56.68c-.36.38-.57.46-.57.24a.14.14,0,0,0-.14-.13c-.17,0-.17,0,.18-1.27.4-1.42.44-1.5.79-1.94s.35-.37.69-.37.42,0,.56.23.32.61.16.8a1.7,1.7,0,0,0-.24.49,2.3,2.3,0,0,1-.38.65m.47,2.44a6,6,0,0,1,1.47-3.09c.44-.54.48-.56.83-.56a.71.71,0,0,1,.62.25c.22.23.23.3.21.84l0,.59-.48.25a7.39,7.39,0,0,0-1.22,1,4.69,4.69,0,0,1-1,.83c-.38.12-.36.13-.36-.09m5.28-.4a8.64,8.64,0,0,0-.83.56,8,8,0,0,1-1.1.66c-.86.37-.9.38-.9.08s.37-.83,1-1.54c.23-.24.6-.68.83-1a1.92,1.92,0,0,1,.52-.55,2.62,2.62,0,0,1,.57.29c.42.24.49.31.51.59a1,1,0,0,1-.64.89m1.29.78a5.3,5.3,0,0,0,.72-.54c.1-.17.71-.1,1,.11s.29.25.28.46c-.08.74-.55,1.09-2,1.51a5.15,5.15,0,0,0-1.23.49,1.33,1.33,0,0,1-.57.22c-.21,0-.25,0-.25-.24s.15-.39.68-.91a10.87,10.87,0,0,1,1.35-1.1M74.38,64.07c-.21.26-.35.27-1,.13-.36-.07-.5-.18-1.14-.85A12.47,12.47,0,0,1,71.12,62,1.43,1.43,0,0,1,70.75,61v-.51h.39c.34,0,.39,0,.48.25s.24.31.7.49a2.81,2.81,0,0,1,1.07.72,6.39,6.39,0,0,0,.84.73c.35.25.36.28.36.71a.88.88,0,0,1-.21.7m1.24-4.19c-.11.33-.11.33-.59.32s-.71-.09-1.27-.61A7.09,7.09,0,0,0,73,59a3.68,3.68,0,0,1-.6-.49.75.75,0,0,0-.33-.23c-.08,0-.12-.11-.12-.34v-.35h.72a1.55,1.55,0,0,1,1.11.25,5.4,5.4,0,0,0,1,.45c.53.17.65.25.76.47a1.4,1.4,0,0,1,0,1.12m2.18-2.56a.44.44,0,0,0-.24.13.41.41,0,0,1-.21.14,18.15,18.15,0,0,1-2.51-1.35,3.33,3.33,0,0,1-.73-.72l-.24-.39.25-.26c.28-.29.44-.32.49-.1s.27.23.9.41a6.13,6.13,0,0,1,1.25.49,6.72,6.72,0,0,0,.63.35c.12.06.28.12.35.17s.23,1.13.06,1.13m3-4.62h-.25a.54.54,0,0,0-.36.13,11.3,11.3,0,0,1-3.62,0c-.9-.24-.93-.31-.28-.75a8.49,8.49,0,0,1,3-1c.62,0,.69,0,1.06.21l.39.26V52.7Zm2.59-15.41a20.55,20.55,0,0,0-2.21-.84c-.5-.14-1.3-.41-1.79-.61a18.3,18.3,0,0,0-3.56-1,16.39,16.39,0,0,1-1.61-.35,46.32,46.32,0,0,0-5.07-.84,13.59,13.59,0,0,1-1.75-.36,13.6,13.6,0,0,0-3.63-.51,18.37,18.37,0,0,1-2.2-.18,30.92,30.92,0,0,0-6.49-.52c-1.7,0-3.12,0-3.83.12l-3.32.36a14.63,14.63,0,0,0-3.45.62c-.7.21-1.74.46-2.31.56a9.07,9.07,0,0,0-2.71.78,52,52,0,0,0-5.72,2.92,10,10,0,0,0-2.79,1.91,17.89,17.89,0,0,0-4,6.22c-.22.63-.43,1.22-.48,1.34a1.23,1.23,0,0,0-.09.44c0,.18-.07.3-.35.47a1.23,1.23,0,0,1-.74.24c-.4,0-.61-.19-1.08-.94-.2-.32-.2-.34-.1-1.29a16.49,16.49,0,0,1,1.19-4.14c1-2.28,3-4.41,6.47-6.69a19,19,0,0,1,3.39-1.87,36.26,36.26,0,0,1,5.35-2c.37-.07,1.94-.38,3.48-.71l2.8-.56h12l2.78.35,3.56.45a21.92,21.92,0,0,1,2.31.49c2.41.62,3.37.85,4.59,1.11a36,36,0,0,1,5.63,1.81c.79.34,2,.84,2.79,1.11a10.47,10.47,0,0,1,2.27,1.09A27.31,27.31,0,0,1,85.07,38s-.26-.06-1.69-.7", fill: "#9e6f41" }),
        React__default['default'].createElement("path", { d: "M77,79c-.71-.06-2-.12-2.81-.12a16.21,16.21,0,0,1-2.85-.23c-.75-.12-2.1-.28-3-.35a22.08,22.08,0,0,1-3.43-.51c-1-.22-2.43-.49-3.23-.61A21.11,21.11,0,0,1,59,76.57l-3.1-1c-1.69-.52-4.2-1.48-6.7-2.54a28.38,28.38,0,0,1-2.58-1.36c-.84-.5-2.09-1.22-2.77-1.58a97,97,0,0,1-11.38-7.86c-.88-.75-2.11-1.78-2.73-2.29a8.48,8.48,0,0,1-2.09-2.29A7.36,7.36,0,0,1,26.17,55a10.28,10.28,0,0,1-.47-1.56,3.65,3.65,0,0,0-.35-.94L25,51.81V50.18c0-1.86,0-2.11.43-2.11a1.5,1.5,0,0,0,.61-.24c.28-.17.35-.29.35-.47a1.23,1.23,0,0,1,.09-.44c.05-.12.26-.71.48-1.34a17.89,17.89,0,0,1,4-6.22,10,10,0,0,1,2.79-1.91,52,52,0,0,1,5.72-2.92,9.07,9.07,0,0,1,2.71-.78c.57-.1,1.61-.35,2.31-.56a14.63,14.63,0,0,1,3.45-.62l3.32-.36c.71-.07,2.13-.12,3.83-.12a30.92,30.92,0,0,1,6.49.52,18.37,18.37,0,0,0,2.2.18,13.6,13.6,0,0,1,3.63.51,13.59,13.59,0,0,0,1.75.36,46.32,46.32,0,0,1,5.07.84,16.39,16.39,0,0,0,1.61.35,12.24,12.24,0,0,1,4.23,1.44c1,.47,2.22,1.13,2.8,1.46s1.47.77,2,1a22.64,22.64,0,0,1,3.39,1.81,15.91,15.91,0,0,0,1.4.83c.36.17.88.46,1.15.63a1.61,1.61,0,0,0,.92.29,6.4,6.4,0,0,1,2,.57,10.21,10.21,0,0,1,3,1.54,25.6,25.6,0,0,1,5.2,4.71,31.05,31.05,0,0,1,4,6.53,3.16,3.16,0,0,1,.38,1.68,8.59,8.59,0,0,1-.57,2.76,35.92,35.92,0,0,1-3.18,7.55A16.5,16.5,0,0,1,100.3,71a26,26,0,0,1-4.87,4.58,9.7,9.7,0,0,1-2.72,1.55,24,24,0,0,1-4.32,1.36c-.26,0-1.91.21-3.65.39A38.45,38.45,0,0,1,77,79M57.64,66.27a21.4,21.4,0,0,0,.71-3.16c0-.17,0-.2-.37-.2s-.61.15-1.28,1.18A3.6,3.6,0,0,0,56,66c0,.27,0,.34.25.45a1.42,1.42,0,0,1,.37.27c.07.1.22.13.47.11s.36,0,.56-.55m4.2-.45.35-.24V65a5.14,5.14,0,0,0-.26-1.53,9.92,9.92,0,0,1-.26-1.08c0-.19-.25-.17-.35,0a2.25,2.25,0,0,1-.16.3,3.19,3.19,0,0,0-.46,1.49,7.88,7.88,0,0,1-.13,1,1,1,0,0,0,.09.59c.13.27.18.31.49.31a1.25,1.25,0,0,0,.69-.24m8.59-.13c.11-.36.1-.4-.13-1-.14-.33-.46-1-.71-1.54l-.45-.95h-.41a.84.84,0,0,0-.49.12,9.83,9.83,0,0,0,.63,2.82c.27.8.37.89,1,.9.4,0,.4,0,.53-.36m-4.25-.11c.28-.31.33-.55.17-.79a1.44,1.44,0,0,1-.14-.73c0-1-.48-1.85-1-1.85-.32,0-.37.18-.37,1.44s0,1.27.22,1.69.22.45.58.45a.67.67,0,0,0,.57-.21m8.23-1.52a1.2,1.2,0,0,0,.18-.73c0-.44,0-.48-.28-.64a7.46,7.46,0,0,1-.9-.74,3.16,3.16,0,0,0-1.15-.78c-.41-.17-.57-.27-.64-.46s-.15-.24-.48-.24h-.39V61c0,.57.12.84.75,1.61,1,1.22,1.36,1.56,1.78,1.64.73.16.94.14,1.13-.14M54.59,62.53a7,7,0,0,0,1.54-1.65c.16-.31.16-.33,0-.49-.27-.31-.8-.25-1.45.17a4.88,4.88,0,0,0-1.57,1.49.34.34,0,0,0,.13.24,1.06,1.06,0,0,1,.22.36c.17.39.51.36,1.13-.12m21-2.65c.2-.57.22-.81.09-1a1,1,0,0,1-.17-.28,2,2,0,0,0-.69-.35,5.35,5.35,0,0,1-1-.45,1.6,1.6,0,0,0-1.12-.24H72v.35c0,.2,0,.34.1.34a1.44,1.44,0,0,1,.47.34c.46.4,1,.83,1.51,1.25a1.13,1.13,0,0,0,.94.33h.52ZM53,59.66a6.32,6.32,0,0,0,.93-.72,5.35,5.35,0,0,1,.65-.55c.17-.1.17-.11-.08-.32a1.08,1.08,0,0,0-.4-.22,12,12,0,0,0-2.2.77.48.48,0,0,0-.15.29.23.23,0,0,1-.13.21c-.07,0-.14.09-.14.13a2.79,2.79,0,0,0,1,.69,1.82,1.82,0,0,0,.56-.28m24.59-2.21a.39.39,0,0,1,.23-.13c.09,0,.12-.13.12-.5,0-.52-.09-.72-.35-.72a1.8,1.8,0,0,1-.55-.3,3.74,3.74,0,0,0-1.62-.67c-.53-.14-.74-.24-.78-.36s-.21-.19-.49.1l-.25.26.24.38a5.72,5.72,0,0,0,2.12,1.57c1,.53,1.17.58,1.33.37M51,56.81a1.32,1.32,0,0,1,.61-.36c.69-.18,1-.36,1.12-.58s.14-.26-.18-.37a5.43,5.43,0,0,0-2,0l-.46.1,0,.56c0,.68.08.89.48.89a.63.63,0,0,0,.51-.25m-3.3-1.4c.2-.13.58-.36.84-.49.86-.44,1.23-.74,1.23-1s-.06-.25-.37-.37a.89.89,0,0,0-.68,0,2.7,2.7,0,0,1-.83.12,1.37,1.37,0,0,0-.91.27,1.8,1.8,0,0,1-.46.26,1.39,1.39,0,0,0-.07.61c0,.53,0,.61.15.61a1.18,1.18,0,0,1,.37.13c.3.17.31.17.73-.12m32.45-2.58a.54.54,0,0,1,.36-.13h.25V51.51l-.36-.25c-.36-.23-.42-.24-1.12-.2a7.07,7.07,0,0,0-3,.95c-.73.46-.7.54.22.79a11.25,11.25,0,0,0,3.62,0M48.64,52.2a6.49,6.49,0,0,0,.84-.45l.33-.21-.24-.26c-.42-.44-.65-.5-1.63-.5-.74,0-.95,0-1.17.17a.45.45,0,0,0-.29.51.76.76,0,0,0,.08.41c.06,0,.09.16.09.31v.25h.75a2.28,2.28,0,0,0,1.24-.23m27.55-1.93a3.57,3.57,0,0,1,1-.4,5.09,5.09,0,0,0,2-.9.73.73,0,0,1,.14-.33.73.73,0,0,0,.11-.41c0-.27-.54-.6-.91-.6A6.49,6.49,0,0,0,76,49.33c-.58.55-.73.74-.73.94s0,.24.27.24a1.35,1.35,0,0,0,.63-.24m-27.8-.84c.43-.23.48-.36.21-.53l-.86-.61a3.11,3.11,0,0,0-1.52-.69c-1.26-.32-1.38-.31-1.82.15a1.93,1.93,0,0,0-.37.45,1.92,1.92,0,0,0,.4.49c.41.43.4.42,1.57.58a2.53,2.53,0,0,1,.7.18,3.34,3.34,0,0,0,1.69,0M74.1,48.7a9.49,9.49,0,0,0,1.31-.79,4,4,0,0,1,.68-.45,1.71,1.71,0,0,0,.37-.31c.4-.38.41-.66,0-.94s-.86-.52-1-.46a2.21,2.21,0,0,0-.49.55c-.21.28-.58.72-.82,1a4.12,4.12,0,0,0-1.09,1.54c0,.29.16.27,1-.12m-2.89-.76a4.3,4.3,0,0,0,1-.82,5.64,5.64,0,0,1,1.16-.95l.5-.26,0-.59c0-.54,0-.61-.21-.84a.72.72,0,0,0-.66-.25c-.41,0-.42,0-.84.59a6.14,6.14,0,0,0-1.42,3c0,.27,0,.28.46.11m-20.1-1.09c.08-.21.06-.3-.17-.76a15.35,15.35,0,0,0-1-1.51c-.77-1-.77-1-1.17-1a1.06,1.06,0,0,0-.76.2c-.33.22-.37.28-.37.61a.65.65,0,0,0,.25.59.8.8,0,0,0,.38.24c.07,0,.18.11.25.26a1.19,1.19,0,0,0,.42.45,6.31,6.31,0,0,1,.75.6,2.22,2.22,0,0,0,1.24.6c.05,0,.14-.11.21-.25m18.17-.15a8.43,8.43,0,0,0,.66-.81,3.46,3.46,0,0,1,.45-.56c.1-.1.19-.21.19-.27a2.45,2.45,0,0,1,.22-.55c.2-.41.22-.49.13-.73-.18-.42-.33-.51-.8-.51s-.43,0-.72.46a7.59,7.59,0,0,0-.86,2.32c-.15.56-.17.74-.09.78a.18.18,0,0,1,.11.16c0,.24.32.11.71-.29m-14.8,0c0-.06-.07-.2-.18-.31s-.23-.29-.23-.73a1.28,1.28,0,0,0-.18-.79,8.6,8.6,0,0,1-.43-.76c-.55-1-1.07-1.37-1.54-.92a1.13,1.13,0,0,0,0,1.27c.11.13.43.57.73,1a13,13,0,0,0,.83,1.07c.27.29.35.33.66.31s.36-.07.37-.12m2.35-.89c-.06-.18-.22-.77-.35-1.31s-.28-1-.35-1a.34.34,0,0,1-.22-.13,1.2,1.2,0,0,0-1,0A1.34,1.34,0,0,0,55,44.56c.51,1,1.18,1.59,1.7,1.59H57Zm2.53,0c.19-.09.21-.15.21-.5a5.94,5.94,0,0,0-.22-1.18c-.12-.43-.26-1-.29-1.18-.1-.56-.17-.68-.45-.79a2.13,2.13,0,0,0-1.41.24.54.54,0,0,0,0,.9,2,2,0,0,1,.37.6,4.1,4.1,0,0,0,.31.66,12.6,12.6,0,0,0,1.26,1.36l.25-.11m6-.17A2,2,0,0,0,66,44.43a8.85,8.85,0,0,1,.92-2.12c.22-.39.16-.51-.4-.79s-.75-.31-1.16-.12c-.24.11-.29.17-.25.38a5.29,5.29,0,0,1-.24,1.2,3.47,3.47,0,0,0-.12,2.27c.18.73.32.81.71.36m-3.84-.79a20.25,20.25,0,0,0,0-4.21c-.1-.52-.15-.63-.42-.8s-.57-.26-.89,0a1.35,1.35,0,0,1-.34.24,4.38,4.38,0,0,0,0,1.89c0,.25.2.8.33,1.22a2.39,2.39,0,0,0,.61,1.16,1.6,1.6,0,0,1,.37.51c0,.13.22.12.34,0", fill: "#b98e5e" }),
        React__default['default'].createElement("path", { d: "M21,65.61a38.24,38.24,0,0,1-1.55-5.9c0-.28-.07-.65-.08-.81s-.09-.64-.14-1a34.8,34.8,0,0,1-.05-5.93c.07-.41.16-1,.19-1.27s.15-.93.27-1.44L20,47.64c.07-.36.31-1.16.52-1.79S21,44.57,21,44.4a2.92,2.92,0,0,1,.17-.48l.69-1.75a27.63,27.63,0,0,1,4.12-7c.62-.62,1.56-1.27,1.56-1.09s0,.12.42,0a7.71,7.71,0,0,0,.77-.3,1.67,1.67,0,0,1,.49-.16,2.09,2.09,0,0,0,.58-.3,6.18,6.18,0,0,1,.9-.49c.25-.1,1.09-.49,1.86-.88a19.41,19.41,0,0,1,2.15-.9c.41-.12,1.1-.37,1.54-.55A15.2,15.2,0,0,1,37.68,30l.9-.27c.14,0,.63-.16,1.09-.26l1-.21a9.35,9.35,0,0,1,1-.21,15.91,15.91,0,0,1-2.49.82,16.16,16.16,0,0,0-2.09.74c-.55.25-1.45.62-2,.84a16.9,16.9,0,0,0-2,.95c-.53.3-1.33.74-1.79,1a19.44,19.44,0,0,0-3.88,2.81,9.59,9.59,0,0,0-3.13,4,28.1,28.1,0,0,0-2.84,8.33,18,18,0,0,0-.57,4.5c-.06,1.21-.1,3.74-.1,5.63A46,46,0,0,0,21,63.92c.1,1,.17,1.85.15,1.86s-.07-.06-.1-.17", fill: "#b98e5e" }),
        React__default['default'].createElement("path", { d: "M77,79c-.71-.06-2-.12-2.81-.12a16.21,16.21,0,0,1-2.85-.23c-.75-.12-2.1-.28-3-.35a22.08,22.08,0,0,1-3.43-.51c-1-.22-2.43-.49-3.23-.61A21.11,21.11,0,0,1,59,76.57l-3.1-1c-1.69-.52-4.2-1.48-6.7-2.54a28.38,28.38,0,0,1-2.58-1.36c-.84-.5-2.09-1.22-2.77-1.58a97,97,0,0,1-11.38-7.86c-.88-.75-2.11-1.78-2.73-2.29a8.48,8.48,0,0,1-2.09-2.29A7.36,7.36,0,0,1,26.17,55a10.28,10.28,0,0,1-.47-1.56,3.65,3.65,0,0,0-.35-.94L25,51.81V50.28c0-1.81.08-2.21.44-2.21a1.46,1.46,0,0,0,.6-.24c.28-.17.35-.29.35-.47a1.23,1.23,0,0,1,.09-.44c.05-.12.26-.71.48-1.34a17.89,17.89,0,0,1,4-6.22,10,10,0,0,1,2.79-1.91c3.93-2.22,6.38-3.35,7.64-3.56A19.33,19.33,0,0,0,45,33.05a14.51,14.51,0,0,1,3-.48l3.32-.36c.71-.07,2.13-.12,3.83-.12a30.92,30.92,0,0,1,6.49.52,18.37,18.37,0,0,0,2.2.18,13.6,13.6,0,0,1,3.63.51,16.23,16.23,0,0,0,2,.4c.63.07,1.26.16,1.4.18l1.44.22a16.52,16.52,0,0,1,2,.39,14.46,14.46,0,0,0,1.64.36,13,13,0,0,1,4.42,1.56c1,.5,2.24,1.15,2.76,1.46a18.17,18.17,0,0,0,1.75.89,21.57,21.57,0,0,1,3.4,1.8c.48.31,1.21.75,1.62,1s.89.47,1.06.58a1.43,1.43,0,0,0,.79.21,7.49,7.49,0,0,1,2.08.58,10,10,0,0,1,3,1.53,24.79,24.79,0,0,1,6.9,7.07,29.46,29.46,0,0,1,2.28,4.17,3.16,3.16,0,0,1,.38,1.68,8.59,8.59,0,0,1-.57,2.76,35.92,35.92,0,0,1-3.18,7.55A16.5,16.5,0,0,1,100.3,71a26,26,0,0,1-4.87,4.58,9.7,9.7,0,0,1-2.72,1.55,24,24,0,0,1-4.32,1.36c-.26,0-1.91.21-3.65.39A38.45,38.45,0,0,1,77,79M57.64,66.27a21.4,21.4,0,0,0,.71-3.16c0-.17,0-.2-.37-.2s-.61.15-1.28,1.18A3.6,3.6,0,0,0,56,66c0,.27,0,.34.25.45a1.42,1.42,0,0,1,.37.27c.07.1.22.13.47.11s.36,0,.56-.55m4.2-.45.35-.24V65a5.14,5.14,0,0,0-.26-1.53,9.92,9.92,0,0,1-.26-1.08c0-.19-.25-.17-.35,0a2.25,2.25,0,0,1-.16.3,3.19,3.19,0,0,0-.46,1.49,7.88,7.88,0,0,1-.13,1,1,1,0,0,0,.09.59c.13.27.18.31.49.31a1.25,1.25,0,0,0,.69-.24m8.59-.13c.11-.36.1-.4-.13-1-.14-.33-.46-1-.71-1.54l-.45-.95h-.41a.84.84,0,0,0-.49.12,9.83,9.83,0,0,0,.63,2.82c.27.8.37.89,1,.9.4,0,.4,0,.53-.36m-4.25-.11c.28-.31.33-.55.17-.79a1.44,1.44,0,0,1-.14-.73c0-1-.48-1.85-1-1.85-.32,0-.37.18-.37,1.44s0,1.27.22,1.69.22.45.58.45a.67.67,0,0,0,.57-.21m8.23-1.52a1.2,1.2,0,0,0,.18-.73c0-.44,0-.48-.28-.64a7.46,7.46,0,0,1-.9-.74,3.16,3.16,0,0,0-1.15-.78c-.41-.17-.57-.27-.64-.46s-.15-.24-.48-.24h-.39V61c0,.57.12.84.75,1.61,1,1.22,1.36,1.56,1.78,1.64.73.16.94.14,1.13-.14M54.59,62.53a7,7,0,0,0,1.54-1.65c.16-.31.16-.33,0-.49-.27-.31-.8-.25-1.45.17a4.88,4.88,0,0,0-1.57,1.49.34.34,0,0,0,.13.24,1.06,1.06,0,0,1,.22.36c.17.39.51.36,1.13-.12m21-2.65c.2-.57.22-.81.09-1a1,1,0,0,1-.17-.28,2,2,0,0,0-.69-.35,5.94,5.94,0,0,1-1.1-.49,1.49,1.49,0,0,0-1.12-.29H72v.39c0,.24,0,.39.1.39a1.44,1.44,0,0,1,.47.34c.46.4,1,.83,1.51,1.25a1.13,1.13,0,0,0,.94.33h.52ZM53,59.66a6.32,6.32,0,0,0,.93-.72,5.35,5.35,0,0,1,.65-.55c.17-.1.17-.11-.08-.32a1.08,1.08,0,0,0-.4-.22,12,12,0,0,0-2.2.77.48.48,0,0,0-.15.29.23.23,0,0,1-.13.21c-.07,0-.14.09-.14.13a2.79,2.79,0,0,0,1,.69,1.82,1.82,0,0,0,.56-.28m24.59-2.21a.39.39,0,0,1,.23-.13c.09,0,.12-.13.12-.5,0-.52-.09-.72-.35-.72a1.8,1.8,0,0,1-.55-.3,3.74,3.74,0,0,0-1.62-.67c-.53-.14-.74-.24-.78-.36s-.21-.19-.49.1l-.25.26.24.38a5.72,5.72,0,0,0,2.12,1.57c1,.53,1.17.58,1.33.37M51,56.81a1.32,1.32,0,0,1,.61-.36c.69-.18,1-.36,1.12-.58s.14-.26-.18-.37a5.43,5.43,0,0,0-2,0l-.46.1,0,.56c0,.68.08.89.48.89a.63.63,0,0,0,.51-.25m-3.3-1.4c.2-.13.58-.36.84-.49.86-.44,1.23-.74,1.23-1s-.06-.25-.37-.37a.89.89,0,0,0-.68,0,2.7,2.7,0,0,1-.83.12,1.37,1.37,0,0,0-.91.27,1.8,1.8,0,0,1-.46.26,1.39,1.39,0,0,0-.07.61c0,.53,0,.61.15.61a1.18,1.18,0,0,1,.37.13c.3.17.31.17.73-.12m32.45-2.58a.54.54,0,0,1,.36-.13h.25V51.51l-.36-.25c-.36-.23-.42-.24-1.12-.2a7.07,7.07,0,0,0-3,.95c-.73.46-.7.54.22.79a11.25,11.25,0,0,0,3.62,0m-31.53-.62c.27-.13.64-.33.83-.45l.33-.22-.24-.26c-.42-.44-.65-.5-1.63-.5-.74,0-.95,0-1.17.17a.45.45,0,0,0-.29.51.76.76,0,0,0,.08.41c.06,0,.09.16.09.31v.25h.76a2.36,2.36,0,0,0,1.24-.22m27.54-1.94a3.57,3.57,0,0,1,1-.4,5.09,5.09,0,0,0,2-.9.73.73,0,0,1,.14-.33.73.73,0,0,0,.11-.41c0-.27-.55-.6-.91-.6-.64,0-3.18,2.11-3.18,2.64,0,.22,0,.24.27.24a1.35,1.35,0,0,0,.63-.24m-27.8-.84c.43-.23.48-.36.21-.53l-.86-.61a3.11,3.11,0,0,0-1.52-.69c-1.26-.32-1.38-.31-1.82.15a1.93,1.93,0,0,0-.37.45,1.92,1.92,0,0,0,.4.49c.41.43.4.42,1.57.58a2.53,2.53,0,0,1,.7.18,3.34,3.34,0,0,0,1.69,0M74.1,48.7a9.49,9.49,0,0,0,1.31-.79,4,4,0,0,1,.68-.45,1.71,1.71,0,0,0,.37-.31c.4-.38.41-.66,0-.94s-.86-.52-1-.46a2.21,2.21,0,0,0-.49.55c-.21.28-.58.72-.82,1a4.12,4.12,0,0,0-1.09,1.54c0,.29.16.27,1-.12m-2.89-.76a4.3,4.3,0,0,0,1-.82,5.64,5.64,0,0,1,1.16-.95l.5-.26,0-.59c0-.54,0-.61-.21-.84a.72.72,0,0,0-.66-.25c-.41,0-.42,0-.84.59a6.14,6.14,0,0,0-1.42,3c0,.27,0,.28.46.11m-20.1-1.09c.08-.21.06-.3-.17-.76a15.35,15.35,0,0,0-1-1.51c-.77-1-.77-1-1.17-1a1.06,1.06,0,0,0-.76.2c-.33.22-.37.28-.37.61a.65.65,0,0,0,.25.59.8.8,0,0,0,.38.24c.07,0,.18.11.25.26a1.19,1.19,0,0,0,.42.45,6.52,6.52,0,0,1,.76.61,2,2,0,0,0,1.23.59c.05,0,.14-.11.21-.25m18.17-.15a8.43,8.43,0,0,0,.66-.81,3.46,3.46,0,0,1,.45-.56c.1-.1.19-.21.19-.27a2.45,2.45,0,0,1,.22-.55c.2-.41.22-.49.13-.73-.18-.42-.33-.51-.8-.51s-.43,0-.72.46a7.59,7.59,0,0,0-.86,2.32c-.15.56-.17.74-.09.78a.18.18,0,0,1,.11.16c0,.24.32.11.71-.29m-14.8,0c0-.06-.07-.2-.18-.31s-.23-.29-.23-.73a1.28,1.28,0,0,0-.18-.79,8.6,8.6,0,0,1-.43-.76c-.55-1-1.07-1.37-1.54-.92a1.13,1.13,0,0,0,0,1.27c.11.13.43.57.73,1a13,13,0,0,0,.83,1.07c.27.29.35.33.66.31s.36-.07.37-.12m2.39-.79c-.08-.19-.39-1.39-.56-2.15,0-.14-.11-.24-.18-.24a.37.37,0,0,1-.22-.13,1.2,1.2,0,0,0-1,0A1.34,1.34,0,0,0,55,44.56c.51,1,1.18,1.59,1.7,1.59.28,0,.29,0,.21-.23m2.49-.14c.19-.09.21-.15.21-.5a5.94,5.94,0,0,0-.22-1.18c-.12-.43-.26-1-.29-1.18-.1-.56-.17-.68-.45-.79a2.13,2.13,0,0,0-1.41.24.54.54,0,0,0,0,.9,2,2,0,0,1,.37.6,4.1,4.1,0,0,0,.31.66,12.6,12.6,0,0,0,1.26,1.36l.25-.11m6-.17A2,2,0,0,0,66,44.43a8.85,8.85,0,0,1,.92-2.12c.22-.39.16-.51-.4-.79s-.75-.31-1.16-.12c-.24.11-.29.17-.25.38a5.29,5.29,0,0,1-.24,1.2,3.57,3.57,0,0,0-.17,2.08c0,.19.11.45.14.59.06.32.32.31.62,0m-3.84-.79a20.25,20.25,0,0,0,0-4.21c-.1-.52-.15-.63-.42-.8s-.57-.26-.89,0a1.35,1.35,0,0,1-.34.24,4.38,4.38,0,0,0,0,1.89c0,.25.2.8.33,1.22a2.39,2.39,0,0,0,.61,1.16,1.6,1.6,0,0,1,.37.51c0,.13.22.12.34,0", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M71.28,74.13l-4.89-.48a36.3,36.3,0,0,1-4-.53c-.62-.14-1.64-.31-2.27-.38a34,34,0,0,1-5.68-1.39,17.26,17.26,0,0,1-4.2-1.64l-3-1.54c-1.46-.76-6.93-3.85-7.81-4.41-1.56-1-5.47-3.58-6.24-4.15-.46-.32-1.23-.83-1.71-1.11a18.08,18.08,0,0,1-2-1.45,7.68,7.68,0,0,1-2-2.1,8.42,8.42,0,0,1-1.32-2.52l-.5-1.35v2.1l-.35-.69L25,51.81V50.28c0-1.81.08-2.21.44-2.21a1.46,1.46,0,0,0,.6-.24c.28-.17.35-.29.35-.47a1.23,1.23,0,0,1,.09-.44c.05-.12.26-.71.48-1.34a17.89,17.89,0,0,1,4-6.22,10,10,0,0,1,2.79-1.91c3.93-2.22,6.38-3.35,7.64-3.56A19.33,19.33,0,0,0,45,33.05a14.51,14.51,0,0,1,3-.48l3.32-.36c.71-.07,2.13-.12,3.83-.12a30.92,30.92,0,0,1,6.49.52,18.37,18.37,0,0,0,2.2.18,13.6,13.6,0,0,1,3.63.51,16.23,16.23,0,0,0,2,.4c.63.07,1.26.16,1.39.18l1.45.22a16.52,16.52,0,0,1,2,.39,14.46,14.46,0,0,0,1.64.36,13,13,0,0,1,4.42,1.56c1,.5,2.24,1.15,2.76,1.46a18.17,18.17,0,0,0,1.75.89,21.57,21.57,0,0,1,3.4,1.8c.48.31,1.21.75,1.62,1,1.12.57,1.43.79,1.31.9a.58.58,0,0,0,.07.7c.08.08.62.43,1.17.8s1.79,1.21,2.71,1.9a23,23,0,0,1,3.3,2.91,12.85,12.85,0,0,1,2.35,2.83,8.1,8.1,0,0,1,1.57,4.17,15.36,15.36,0,0,1-.14,1.59,23.37,23.37,0,0,1-1.46,4.93,24.27,24.27,0,0,1-2.75,4.94,12.09,12.09,0,0,1-2.13,2.41,13.07,13.07,0,0,1-2.58,1.91c-2,1.22-2.86,1.56-4.12,1.7a20.13,20.13,0,0,0-2,.35,25.16,25.16,0,0,1-3.19.5,46.68,46.68,0,0,1-6.37.26,47.35,47.35,0,0,1-6.24-.19m6.06-1a3.06,3.06,0,0,0,1.53-.41l.68-.35a9.55,9.55,0,0,0-.65-1.11c-.39-.6-.88-1.37-1.1-1.73s-1-1.4-1.81-2.32-1.6-1.94-1.84-2.28l-.44-.64H74a.74.74,0,0,0,.62-.71c0-.16.1-.1.64.41.34.33.94.88,1.32,1.22a44.39,44.39,0,0,1,4.28,5c.29.45.75,1.07,1,1.36l.45.54,1.25,0,2.29.11a5.94,5.94,0,0,0,2.06-.18,3.7,3.7,0,0,0,1.71-.7,10.6,10.6,0,0,0,1.07-.87l.37-.37-1.73-1c-2.25-1.34-4-2.49-7.67-5-2.49-1.69-3.51-2.41-5.93-4.11-.15-.1-.15-.13,0-.39l.14-.27,1.16.39a18.76,18.76,0,0,1,2.81,1.29c.92.5,2.41,1.29,3.32,1.76s2.28,1.23,3,1.67,2,1.12,2.7,1.49,1.76.93,2.29,1.27a12.85,12.85,0,0,0,1.62.9l.64.29,1.13-.57a5,5,0,0,0,2.2-1.77,2.9,2.9,0,0,0,.78-1.56c.24-.88.28-1.41.12-1.45-.33-.09-1.54-.51-2.4-.82-.53-.19-1.73-.58-2.66-.85S90,60.65,89,60.25s-2.33-.83-2.84-1-1.84-.59-3-1-2.38-.85-2.79-1a6.9,6.9,0,0,1-2.45-.87.37.37,0,0,0-.34-.35,1.72,1.72,0,0,1-.71-.44,10.86,10.86,0,0,1,2.58.43,14,14,0,0,0,1.7.36,23.32,23.32,0,0,1,2.32.45c3.34.79,8.51,2.11,9.21,2.34a21.93,21.93,0,0,0,5.38,1.23h.63l.48-.87a7.15,7.15,0,0,0,.71-1.67,3,3,0,0,0,.12-1.65,8.17,8.17,0,0,0-.47-1.84l-.37-1-3.83,0a42.25,42.25,0,0,1-5.27-.24A25,25,0,0,0,87.56,53c-.58,0-1.52-.06-2.1-.13s-1.83-.13-2.85-.13h-1.8l0-.66,0-.64.44-.06,3-.22c4.73-.31,6.53-.43,7.55-.52.55,0,1.53-.09,2.16-.09,1.08,0,1.19,0,1.63-.23s.53-.25.27-1A15.75,15.75,0,0,0,94,46.44a3.6,3.6,0,0,0-.88-.7A14.26,14.26,0,0,1,91.85,45l-.78-.53-.4.11c-.22,0-1.68.49-3.24,1s-3.42,1-4.15,1.23-1.88.57-2.59.83l-1.29.47-.32-.22a1.21,1.21,0,0,0-.5-.22c-.27,0-.17-.07,1.82-1.19,1-.55,2.23-1.28,2.71-1.59a17.92,17.92,0,0,1,1.83-1,19.61,19.61,0,0,0,1.86-1l.9-.58-.33-.34a11,11,0,0,0-2.65-1.8,5.93,5.93,0,0,0-2.11-.75c-.61-.12-1.37-.29-1.7-.37l-.58-.15-.3.34c-.15.19-.61.82-1,1.39S77.8,42.26,77.17,43s-1.54,1.83-2,2.41S73.75,47,73.07,47.7,71.83,49,71.82,49a7.89,7.89,0,0,0,1.24.78c.69.39,1.66,1,2.17,1.37.82.59,1,.65,1.21.61s.28,0-.16.26a1.68,1.68,0,0,0-.46.4c0,.12.2.24.49.3l.27.06-.41.72a7.23,7.23,0,0,0-.57,1.18c-.13.42-.18.46-.36.42-.44-.12-.65-.23-.65-.36s-.21-.16-.47.12l-.25.26.24.39a2.28,2.28,0,0,0,.5.55c.13.08.25.18.25.21s-.23.38-.51.8l-.51.76-.28-.17a1.66,1.66,0,0,0-.93-.17H72v.39c0,.25,0,.39.12.39a3,3,0,0,1,.54.41l.43.4-.2.36c-.12.19-.38.58-.59.87a3.13,3.13,0,0,0-.38.59c0,.18-.16.06-.27-.18s-.14-.26-.49-.26h-.4l0,.55a6,6,0,0,0,.07.66c.06.19-1.22.54-1.94.53-.48,0-.6,0-.7.17a1.2,1.2,0,0,1-.62.27,1.34,1.34,0,0,0-.5.15,3,3,0,0,0,.34.45,20.76,20.76,0,0,1,3,6.22c.22.69.55,1.62.72,2.08l.31.82.62.29a9.85,9.85,0,0,0,1.36.46,13.8,13.8,0,0,0,3.88,0m-8.77-1.23a7,7,0,0,0-.09-.72c0-.26-.26-1.57-.48-2.92-.59-3.72-1.14-5.37-1.8-5.37-.21,0-.28,0-.35-.25-.13-.38-.7-.58-.93-.34a.74.74,0,0,0-.11.43c0,.19,0,.34-.06.34l-1.36.14a8,8,0,0,1-1.41.08c-.07,0-.18-.28-.24-.57-.1-.54-.27-.67-.43-.33,0,.08-.12.22-.16.31a3.11,3.11,0,0,0-.45,1.46,7.88,7.88,0,0,1-.13,1,1,1,0,0,0,.09.59c.13.28.18.31.5.31a.93.93,0,0,0,.53-.15c.09-.08.17-.13.19-.11s-.05,1.06-.17,2.31-.21,2.34-.21,2.42c0,.25.72.66,1.66.93.5.15,1.15.37,1.44.48.49.21.61.22,2.25.23h1.72Zm-10.3-2.3c.2-.6.69-1.89,1.1-2.87s.79-2.1.89-2.47l.17-.67H58.28l0-.35.05-.35H58a.85.85,0,0,0-.5.12c-.09.08-.2,0-.56-.38s-.6-.67-.79-.89l-.33-.41L56,61c.27-.39.27-.45.08-.66a.69.69,0,0,0-.51-.15,3.74,3.74,0,0,0-2,1.2c-.52.5-.6.7-.38.88a1.06,1.06,0,0,1,.22.36c.06.15.18.26.26.26a9.88,9.88,0,0,1-1.93,2A7.66,7.66,0,0,0,50,67l-.23.45.25.26A7.18,7.18,0,0,0,53,69.45a19.49,19.49,0,0,0,2.74.94,9.51,9.51,0,0,1,1.05.25,2,2,0,0,0,.58,0h.55ZM46.54,65.16c.44-.34,1.38-1,2.09-1.45s1.75-1.15,2.3-1.54a21.75,21.75,0,0,1,2.14-1.3c.63-.33,1.26-.68,1.4-.78a1.44,1.44,0,0,0,.28-.2,2.46,2.46,0,0,0-.28-.52,3,3,0,0,1-.31-.62c0-.06.12-.18.26-.26a.67.67,0,0,0,.27-.21c0-.16-.56-.44-.83-.41s-.32,0-.87-.81c-.44-.64-.54-.85-.45-.91a1.32,1.32,0,0,0,.31-.51,1.58,1.58,0,0,0-.78-.24c-.19,0-.34-.15-.92-1-.39-.57-.75-1.11-.81-1.22L50.22,53h-2.9c-2,0-3.81-.06-5.66-.18-4.24-.28-4.84-.33-6.45-.56A17.61,17.61,0,0,0,32.44,52a8.06,8.06,0,0,0-2.64.27s.2.58.45,1.23a10.07,10.07,0,0,0,2,3.47,14.41,14.41,0,0,1,1,1.12c.23.32.38.45.48.42.86-.25,2.88-.63,6.91-1.27.64-.11,1.81-.34,2.59-.53a19.59,19.59,0,0,1,3-.48c.85-.08,2.06-.23,2.68-.36L50,55.66a1.61,1.61,0,0,1,0,.49c0,.44,0,.48-.24.57s-3.24,1-4.26,1.32c-.33.1-1.17.4-1.84.68s-1.7.65-2.27.83l-2.22.7c-.65.21-1.25.39-1.34.41s-.16.05-.17.08a25.24,25.24,0,0,0,2.42,2.08,11.51,11.51,0,0,0,3.91,2.39,3.08,3.08,0,0,1,.82.36c.54.36.76.31,1.67-.41m1.9-12.85a.86.86,0,0,1,.59-.05c.15,0,.42.1.57.12l.3,0-.18-.31c-.18-.3-.18-.33-.06-.47s.11-.19-.33-.58a4.11,4.11,0,0,1-.79-1c-.3-.54-.32-.59-.16-.63a.84.84,0,0,0,.32-.22c.13-.16.12-.17-.3-.44s-.5-.34-.34-.5-.21-.19-1.07-.46l-1.39-.44c-.12,0-2-.56-4.1-1.14s-5-1.4-6.37-1.83a29.21,29.21,0,0,0-3.82-1.08L31,43.26l-.36.6c-.48.83-1.6,3.1-2,4a2.86,2.86,0,0,0-.3,1.21c0,.48,0,.48.33.59a16.36,16.36,0,0,0,2.07.16c1,0,1.8.09,1.87.12s.73.14,1.44.23l3.28.43,4.45.58c2.69.33,4.69.63,4.81.71s.08.15.08.3v.25h.74a3.56,3.56,0,0,0,1-.12m23.37-3.83A12,12,0,0,1,73,46.4a3.85,3.85,0,0,1,.5-.31l.36-.18,0-.63,0-.63L75,43.06c2.24-3.17,2.63-3.88,2.63-4.75v-.45l-.54-.25c-.31-.15-.65-.29-.77-.33a3.7,3.7,0,0,1-.7-.35,5.39,5.39,0,0,0-1.35-.51c-.48-.12-1.05-.28-1.26-.36a4.29,4.29,0,0,0-1.19-.13c-.69,0-.82,0-.87.16A28.25,28.25,0,0,0,69.7,40.3,33.3,33.3,0,0,1,68.18,46l-.39.89.5.28c2,1.15,3.21,1.79,3.28,1.78s.15-.2.24-.43m-22.52-.91a4.3,4.3,0,0,0,.71-.36.82.82,0,0,1,.67-.15c.3,0,.33,0,.46-.26s.2-.3.26-.3a.82.82,0,0,0,.34-.17,1.19,1.19,0,0,1,.41-.2c.15,0-.08-.23-1.15-1a12.33,12.33,0,0,1-1.62-1.29c-.2-.24-.35-.34-.51-.34a16.61,16.61,0,0,1-3.34-2.09c-.65-.47-1.72-1.18-2.39-1.58a18.53,18.53,0,0,1-2.07-1.48,5.24,5.24,0,0,0-1.42-1l-.58-.23-.94.24a8.88,8.88,0,0,0-1.47.5,6.42,6.42,0,0,1-.87.38,6.3,6.3,0,0,0-2.16,1.3c-.6.56-1,1.11-.9,1.2a4.88,4.88,0,0,0,.86.3,67.6,67.6,0,0,1,7.88,3.18c.67.32,1.95.87,2.86,1.23a27,27,0,0,1,3.06,1.43c.77.43,1.44.79,1.47.79a2.75,2.75,0,0,0,.44-.15m5.19-.86c0-.06-.07-.2-.18-.31a.65.65,0,0,1-.23-.48c0-.25,0-.27.65-.47l.65-.2.28.32a1.4,1.4,0,0,0,1,.58c.26,0,.27,0,.19-.23a18.37,18.37,0,0,1-.53-2.05c0-.06.13.07.27.28s.31.41.34.45.23,0,.44-.07.39-.12.47,0a6.11,6.11,0,0,0,.66.75c.56.58.59.59.82.49s.23-.16.23-.48a3.55,3.55,0,0,0-.1-.78.83.83,0,0,1,0-.43,1.62,1.62,0,0,1,.52-.17l.46-.11.42.46a2.18,2.18,0,0,1,.41.55c0,.05.06.09.12.09.28,0,.32-.2.32-1.58A6.33,6.33,0,0,1,61.75,42a6.55,6.55,0,0,1,.48,1.11l.41,1.11.93.48c1.05.54,1.24.69,1.24,1,0,.16,0,.22.19.22a.41.41,0,0,0,.29-.15c.1-.13.22-.09,1.22.43l1.1.58V46.5c0-.13,0-.64-.09-1.13-.1-.87-.06-1.53.26-6.12,0-.65.09-1.77.09-2.49V35.44l-.72-.23a22.63,22.63,0,0,0-5.26-.94,11.93,11.93,0,0,1-1.82-.17,1.57,1.57,0,0,0-.53-.07l-.2,0L59.88,36c.3,1.06.67,2.3.82,2.76s.27.86.27.89-.09,0-.22,0a.58.58,0,0,0-.48.19,1.36,1.36,0,0,1-.35.23c-.05,0-.08.07-.08.14,0,.41-.23-.2-.71-1.88a9,9,0,0,0-1.54-3.6,1.13,1.13,0,0,0-.68-.29c-.23,0-.82-.14-1.3-.23A9.32,9.32,0,0,0,54.29,34a3.07,3.07,0,0,1-.83-.13,2.2,2.2,0,0,0-1.48,0,1.63,1.63,0,0,1-.61.13,1.26,1.26,0,0,0-.73.22,1.22,1.22,0,0,0-.32.28,15.32,15.32,0,0,0,1.17,2c.35.53.84,1.31,1.09,1.74s.8,1.18,1.19,1.67,1,1.27,1.28,1.71c.94,1.36,1.36,2.24.87,1.79a.94.94,0,0,0-.59-.14H54.9l-1.14-1.38c-.64-.75-1.44-1.77-1.79-2.25a11.72,11.72,0,0,0-2.71-3c-.4-.27-.92-.65-1.17-.83-.43-.33-.43-.33-1.09-.29l-1.88.12a6.49,6.49,0,0,0-2.44.52l-1.35.48c-.08,0,.13.22.56.5,1.33.9,4.47,3.35,5.69,4.45.67.6,2.07,1.74,3.1,2.54a29.89,29.89,0,0,1,2.48,2.08c.57.6.63.63,1,.61s.36-.07.37-.12", fill: "#dbe6b7" }),
        React__default['default'].createElement("path", { d: "M74.51,50a17.06,17.06,0,0,1,2-1.32c.34-.17.51-.25.39-.16s-.48.4-.79.7a2.55,2.55,0,0,1-1,.63l-.54.14c-.08,0-.15,0-.15,0", fill: "#dbe6b7" })));
};

var Icon$w = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React__default['default'].createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$x = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React__default['default'].createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("path", { d: "M116.54,13.86H11.46a74.49,74.49,0,0,0-4.89,9.39A80.41,80.41,0,0,0,0,55.35C0,95.46,28.65,128,64,128s64-32.52,64-72.63a80.41,80.41,0,0,0-6.57-32.1A77.21,77.21,0,0,0,116.54,13.86Z", transform: "translate(0 -0.02)", fill: "#9e6f41" }),
        React__default['default'].createElement("path", { d: "M117.91,17.33a6.19,6.19,0,0,1-.76,2.91C112.85,28.41,90.69,34.63,64,34.63S15.15,28.41,10.84,20.24a6.32,6.32,0,0,1-.76-2.91c0-3.13,2.59-6.06,7.11-8.59C26.49,3.53,44,0,64,0s37.51,3.51,46.81,8.72C115.33,11.27,117.91,14.2,117.91,17.33Z", transform: "translate(0 -0.02)", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M93.48,15.8c0,4-12.88,7.19-28.76,7.19S36,19.77,36,15.8,48.83,8.61,64.72,8.61,93.48,11.83,93.48,15.8Z", transform: "translate(0 -0.02)", fill: "#dbe6b7" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M34.57,16.81c0,.94-1.62,1.7-3.62,1.7s-3.62-.76-3.62-1.7S29,15.11,31,15.11,34.57,15.87,34.57,16.81Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("ellipse", { cx: "96.25", cy: "17.2", rx: "3.79", ry: "1.78", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M42.45,21.5c0,1-1.7,1.78-3.79,1.78s-3.79-.8-3.79-1.78,1.7-1.78,3.79-1.78S42.45,20.52,42.45,21.5Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M61.14,24.79c0,1.49-2.57,2.7-5.74,2.7s-5.75-1.21-5.75-2.7,2.57-2.7,5.75-2.7S61.14,23.3,61.14,24.79Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M88.82,24.48c0,1.07-1.84,1.93-4.11,1.93s-4.11-.86-4.11-1.93,1.84-1.93,4.11-1.93S88.82,23.42,88.82,24.48Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M39.67,10.79c0-1.24-2.14-2.24-4.77-2.24s-4.76,1-4.76,2.24S32.27,13,34.9,13,39.67,12,39.67,10.79Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M59.16,7.25C59.16,6,57,5,54.39,5s-4.76,1-4.76,2.23,2.13,2.24,4.76,2.24S59.16,8.49,59.16,7.25Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M92.12,9.6c0-1.3-2.23-2.34-5-2.34s-5,1-5,2.34,2.23,2.34,5,2.34S92.12,10.89,92.12,9.6Z", transform: "translate(0 -0.02)", fill: "#010100" })),
        React__default['default'].createElement("ellipse", { cx: "47.09", cy: "70.87", rx: "15.13", ry: "20.17", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "81.87", cy: "70.87", rx: "15.13", ry: "20.17", fill: "#fff" }),
        React__default['default'].createElement("path", { d: "M68.09,89.3a.76.76,0,0,0-1.38.18,6.91,6.91,0,0,0-.18,2.09,6.33,6.33,0,0,1-.41,1.77,2.63,2.63,0,0,1-1.74,1.75c-2.42.6-2.59-4.16-2.63-5.41,0-.62-1-.81-1.12-.16-.44,2.64.13,7.23,3.68,7.25a3.89,3.89,0,0,0,3.06-2C68.26,93.48,68.92,90.73,68.09,89.3Z", transform: "translate(0 -0.02)", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M46.5,43.49c-3-2.57-7.34.57-9,3.18-.29.44.38,1,.73.56a11.05,11.05,0,0,1,3.23-2.53c1.56-.82,3.11-.58,4.78-.53A.4.4,0,0,0,46.5,43.49Z", transform: "translate(0 -0.02)", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M84.12,46.35c-2.07-4.87-8.52-3.25-11.71-.74-.33.25.08.74.42.55a12.38,12.38,0,0,1,5.36-1.61c2.25-.11,3.7,1.12,5.39,2.34C83.94,47.16,84.26,46.67,84.12,46.35Z", transform: "translate(0 -0.02)", fill: "#592d0f" }),
        React__default['default'].createElement("ellipse", { cx: "48.14", cy: "71.39", rx: "9.56", ry: "13.39", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "80.13", cy: "71.39", rx: "9.56", ry: "13.39", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "45.18", cy: "58.87", rx: "2.78", ry: "4", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "77.17", cy: "58.87", rx: "2.78", ry: "4", fill: "#fff" })));
};

var Icon$A = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 80 80" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.0073 13.3635C24.9476 12.4048 23.2491 12.9058 22.8792 14.286C22.6061 15.3055 23.2111 16.3534 24.2305 16.6266L31.8797 18.6762L26.0073 13.3635ZM18.609 13.1418C19.8344 8.56857 25.4621 6.90878 28.9731 10.0851L41.2257 21.1698C43.051 22.8212 41.4235 25.8102 39.0459 25.1732L23.0863 20.8968C19.7085 19.9917 17.7039 16.5197 18.609 13.1418Z", fill: "#80CC34" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M42.264 10.1052C42.7399 8.62854 44.609 8.17749 45.7061 9.27458C46.5164 10.0849 46.5164 11.3987 45.7061 12.209L39.6263 18.2888L42.264 10.1052ZM49.1002 5.88046C45.4652 2.24548 39.2724 3.73996 37.6954 8.63274L32.192 25.7073C31.3722 28.251 34.5252 30.1781 36.415 28.2883L49.1002 15.6031C51.785 12.9183 51.785 8.5653 49.1002 5.88046Z", fill: "#80CC34" }),
            React__default['default'].createElement("path", { opacity: "0.6", d: "M70.9047 42.5535C71.2363 43.8171 73.0301 43.8171 73.3617 42.5535L74.3564 38.7636C74.4727 38.3202 74.819 37.9739 75.2624 37.8575L79.0523 36.8629C80.3159 36.5313 80.3159 34.7375 79.0523 34.4059L75.2624 33.4112C74.819 33.2949 74.4727 32.9486 74.3564 32.5051L73.3617 28.7153C73.0301 27.4517 71.2363 27.4517 70.9047 28.7153L69.91 32.5051C69.7937 32.9486 69.4474 33.2949 69.004 33.4112L65.2141 34.4059C63.9505 34.7375 63.9505 36.5313 65.2141 36.8629L69.004 37.8575C69.4474 37.9739 69.7937 38.3202 69.91 38.7636L70.9047 42.5535Z", fill: "#634A31" }),
            React__default['default'].createElement("path", { d: "M67.9738 14.5792C67.9699 15.345 68.9855 15.6172 69.365 14.952L70.5032 12.957C70.6364 12.7235 70.885 12.58 71.1538 12.5814L73.4506 12.5932C74.2164 12.5971 74.4886 11.5814 73.8234 11.202L71.8284 10.0637C71.5949 9.93057 71.4514 9.68195 71.4528 9.41322L71.4646 7.11635C71.4685 6.35056 70.4528 6.07841 70.0734 6.74357L68.9351 8.73862C68.802 8.97203 68.5533 9.11558 68.2846 9.1142L65.9877 9.10239C65.222 9.09846 64.9498 10.1141 65.615 10.4936L67.61 11.6318C67.8434 11.765 67.987 12.0136 67.9856 12.2824L67.9738 14.5792Z", fill: "#634A31" }),
            React__default['default'].createElement("path", { opacity: "0.8", d: "M12.6621 19.7326C13.3806 19.544 13.3806 18.5241 12.6621 18.3356L8.79571 17.3208C8.54359 17.2547 8.34669 17.0578 8.28052 16.8056L7.26579 12.9392C7.07722 12.2208 6.05731 12.2208 5.86875 12.9392L4.85402 16.8056C4.78785 17.0578 4.59095 17.2547 4.33883 17.3208L0.472442 18.3356C-0.246022 18.5241 -0.246022 19.544 0.472441 19.7326L4.33883 20.7473C4.59095 20.8135 4.78785 21.0104 4.85402 21.2625L5.86875 25.1289C6.05731 25.8474 7.07722 25.8474 7.26578 25.1289L8.28052 21.2625C8.34669 21.0104 8.54359 20.8135 8.79571 20.7473L12.6621 19.7326Z", fill: "#634A31" }),
            React__default['default'].createElement("path", { d: "M16.1463 37.3821C17.0611 33.9679 20.5705 31.9418 23.9847 32.8566L57.9852 41.9671C61.3994 42.8819 63.4256 46.3912 62.5107 49.8054L56.8167 71.0558C55.9019 74.47 52.3925 76.4961 48.9783 75.5813L14.9778 66.4709C11.5636 65.556 9.53745 62.0467 10.4523 58.6325L16.1463 37.3821Z", fill: "url(#paint0_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M57.157 45.058L23.1564 35.9476C21.4493 35.4902 19.6947 36.5032 19.2373 38.2103L13.5432 59.4607C13.0858 61.1678 14.0989 62.9225 15.806 63.3799L49.8066 72.4903C51.5137 72.9477 53.2683 71.9347 53.7257 70.2276L59.4198 48.9772C59.8772 47.2701 58.8641 45.5154 57.157 45.058ZM23.9847 32.8566C20.5705 31.9418 17.0611 33.9679 16.1463 37.3821L10.4523 58.6325C9.53745 62.0467 11.5636 65.556 14.9778 66.4709L48.9783 75.5813C52.3925 76.4961 55.9019 74.47 56.8167 71.0558L62.5107 49.8054C63.4256 46.3912 61.3994 42.8819 57.9852 41.9671L23.9847 32.8566Z", fill: "#73583C" }),
            React__default['default'].createElement("path", { d: "M35.9629 36.0654L46.0085 38.7571L37.0016 72.3714L26.956 69.6797L35.9629 36.0654Z", fill: "#80CC34" }),
            React__default['default'].createElement("path", { d: "M11.8535 53.0029L14.5452 42.9573L61.111 55.4346L58.4193 65.4802L11.8535 53.0029Z", fill: "#80CC34" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.0918 57.9047L40.1732 60.606L39.7591 62.1515L29.6777 59.4502L30.0918 57.9047ZM42.8724 50.5325L32.791 47.8312L33.2051 46.2857L43.2865 48.987L42.8724 50.5325Z", fill: "#80CC34" })),
            React__default['default'].createElement("path", { d: "M11.4611 31.1814C10.775 28.6207 12.2946 25.9887 14.8552 25.3026L58.1287 13.7075C60.6893 13.0214 63.3213 14.541 64.0074 17.1016L65.1462 21.3517C65.8324 23.9123 64.3128 26.5443 61.7521 27.2305L18.4787 38.8256C15.918 39.5117 13.286 37.9921 12.5999 35.4314L11.4611 31.1814Z", fill: "url(#paint1_linear)" }),
            React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M58.9569 16.7985L15.6834 28.3936C14.8299 28.6223 14.3233 29.4996 14.552 30.3531L15.6908 34.6032C15.9196 35.4568 16.7969 35.9633 17.6504 35.7346L60.9239 24.1395C61.7775 23.9108 62.284 23.0335 62.0553 22.1799L60.9165 17.9298C60.6878 17.0763 59.8104 16.5698 58.9569 16.7985ZM14.8552 25.3026C12.2946 25.9887 10.775 28.6207 11.4611 31.1814L12.5999 35.4314C13.286 37.9921 15.918 39.5117 18.4787 38.8256L61.7521 27.2305C64.3128 26.5443 65.8324 23.9123 65.1462 21.3517L64.0074 17.1016C63.3213 14.541 60.6893 13.0214 58.1287 13.7075L14.8552 25.3026Z", fill: "#73583C" }),
            React__default['default'].createElement("path", { d: "M31.4707 20.8506L41.5163 18.1589L45.1398 31.6818L35.0942 34.3735L31.4707 20.8506Z", fill: "#80CC34" }),
            React__default['default'].createElement("g", { style: { mixBlendMode: "multiply" } },
                React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M31.9671 22.5998L41.9672 19.7998L41.5673 17.9998L31.3975 20.8215L31.9671 22.5998Z", fill: "#80CC34" }))),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("linearGradient", { id: "paint0_linear", x1: "40.9849", y1: "37.4118", x2: "31.978", y2: "71.0261", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#634A31" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#73583C" })),
            React__default['default'].createElement("linearGradient", { id: "paint1_linear", x1: "36.4919", y1: "19.505", x2: "40.1154", y2: "33.028", gradientUnits: "userSpaceOnUse" },
                React__default['default'].createElement("stop", { stopColor: "#634A31" }),
                React__default['default'].createElement("stop", { offset: "1", stopColor: "#73583C" })),
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "80", height: "80", fill: "white", transform: "matrix(-1 0 0 1 80 0)" })))));
};

var Icon$B = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("path", { d: "M122.14,45.84a3.76,3.76,0,0,1,.42,4.8A292.37,292.37,0,0,1,52.84,121L50.7,122.5a4,4,0,0,1-5.08-.42L36,112.45A15,15,0,0,0,14.74,91.2L5.89,82.35a3.85,3.85,0,0,1,.49-5.86L8.52,75a285,285,0,0,0,68-68.64,3.67,3.67,0,0,1,5.1-.89,4.63,4.63,0,0,1,.48.4l9,9A15,15,0,0,0,112.39,36.1l9.74,9.74Z", transform: "translate(0 0)", fill: "#b7e57c" }),
        React__default['default'].createElement("path", { d: "M126.4,48.5,92,92.07l-44.5,33.69-8.56-8.62-3.09-3.75,3.09-4.46L40,104.46l-.6-4.77-1.78-4.46-3-3.58-3.58-2.38L27.2,88.08H22.44l-5.07,1.79-3,2.68L7.25,83.91l11.63-1.74a212.66,212.66,0,0,0,99-42.29l8.56,8.62Z", transform: "translate(0 0)", fill: "#99d850" }),
        React__default['default'].createElement("path", { d: "M31.65,112.87a4.74,4.74,0,0,1,1.41-3.37v0A10.26,10.26,0,0,0,18.56,95h0a4.75,4.75,0,0,1-6.73,0h0L2.52,85.72a8.62,8.62,0,0,1,0-12.2,9.29,9.29,0,0,1,1.08-.91l2.14-1.53L8.52,75,6.38,76.49a3.85,3.85,0,0,0-.49,5.86l9.27,9.27,0,0a15,15,0,0,1,21.28,21.23l-.05,0,9.21,9.2a3.93,3.93,0,0,0,5.07.42L52.83,121a292.37,292.37,0,0,0,69.72-70.34,3.75,3.75,0,0,0-.42-4.8l-9.67-9.67-.21.22A15,15,0,0,1,91,15.13l.21-.21L82.13,5.83a3.65,3.65,0,0,0-5.58.49A285.19,285.19,0,0,1,8.52,75L5.75,71.08A280.44,280.44,0,0,0,72.65,3.59,8.46,8.46,0,0,1,85.5,2.46l9.09,9.09a4.77,4.77,0,0,1,0,6.74l0,0-.07.08A10.26,10.26,0,0,0,109,32.91l.08-.07a4.76,4.76,0,0,1,6.73-.07l0,0,9.67,9.67a8.51,8.51,0,0,1,.95,10.9,297.11,297.11,0,0,1-70.85,71.49l-2.14,1.52a8.71,8.71,0,0,1-11.22-.93l-9.2-9.2a4.8,4.8,0,0,1-1.39-3.38Z", transform: "translate(0 0)", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { id: "A", d: "M64,22.49l2.1,2.1A2.38,2.38,0,0,1,62.75,28l-2.1-2.1A2.38,2.38,0,1,1,64,22.49Z", transform: "translate(0 0)", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M72.86,31.33,75,33.44a2.38,2.38,0,0,1-3.37,3.37L69.49,34.7a2.38,2.38,0,0,1,3.37-3.37Z", transform: "translate(0 0)", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { id: "B", d: "M83.82,45.65a2.38,2.38,0,0,1-3.37,0h0l-2.53-2.52a2.38,2.38,0,0,1,3.37-3.37l2.53,2.52a2.38,2.38,0,0,1,0,3.37Z", transform: "translate(0 0)", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M92.67,54.5a2.38,2.38,0,0,1-3.37,0h0L86.77,52a2.38,2.38,0,1,1,3.37-3.37l2.53,2.53a2.38,2.38,0,0,1,0,3.37Z", transform: "translate(0 0)", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M99,57.45l2.11,2.11a2.38,2.38,0,1,1-3.37,3.37l-2.11-2.11A2.38,2.38,0,0,1,99,57.45Z", transform: "translate(0 0)", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M107.83,66.3l2.1,2.1a2.38,2.38,0,1,1-3.37,3.37l-2.1-2.1a2.38,2.38,0,0,1,3.37-3.37Z", transform: "translate(0 0)", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M61.65,46,33.78,73.89A27.73,27.73,0,0,0,35,77.68a30.05,30.05,0,0,0,6.77,10.25C52.38,98.57,68.6,99.59,78,90.22S86.32,64.63,75.69,54a30.09,30.09,0,0,0-10.26-6.77A27.55,27.55,0,0,0,61.65,46Z", transform: "translate(0 0)", fill: "#875930" }),
        React__default['default'].createElement("path", { d: "M62.93,46.58a2.4,2.4,0,0,1,.57,1c1,3.3-3.2,10.83-10.28,17.91s-14.6,11.3-17.91,10.28a2.36,2.36,0,0,1-1-.57c-.83-.83-.92-2.3-.4-4.17C35,67.17,38.73,61.6,44.05,56.29s10.87-9,14.72-10.1C60.64,45.66,62.1,45.75,62.93,46.58Z", transform: "translate(0 0)", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M56.05,52.66c1.05,1.05-1.51,5.32-5.73,9.53S41.84,69,40.79,67.91s1.51-5.32,5.72-9.53S55,51.6,56.05,52.66Z", transform: "translate(0 0)", fill: "#dbe6b7" }),
        React__default['default'].createElement("path", { d: "M40.69,68.54c.25.25,0,.89-.51,1.42s-1.16.76-1.41.51,0-.88.51-1.42S40.44,68.3,40.69,68.54Z", transform: "translate(0 0)", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "57.16", cy: "52.3", rx: "1.42", ry: "0.67", transform: "translate(-20.24 55.74) rotate(-45)", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M44,67.7c.26.26,0,.92-.54,1.48s-1.21.79-1.47.53,0-.92.53-1.48S43.76,67.44,44,67.7Z", transform: "translate(0 0)", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M49.86,63.61c.39.4,0,1.4-.81,2.25s-1.85,1.2-2.24.8,0-1.4.8-2.24S49.46,63.22,49.86,63.61Z", transform: "translate(0 0)", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M57.11,56.2c.28.28,0,1-.58,1.6s-1.31.86-1.6.57,0-1,.58-1.6S56.83,55.91,57.11,56.2Z", transform: "translate(0 0)", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M40.45,65.6c-.33-.33-1.16,0-1.86.67s-1,1.53-.67,1.85,1.16,0,1.86-.67S40.78,65.93,40.45,65.6Z", transform: "translate(0 0)", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M44.68,59.49c-.33-.33-1.16,0-1.86.67s-1,1.53-.67,1.86,1.16,0,1.86-.67S45,59.82,44.68,59.49Z", transform: "translate(0 0)", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M54,51.37c-.34-.34-1.21,0-1.94.7s-1,1.6-.7,2,1.21,0,1.94-.7S54.38,51.72,54,51.37Z", transform: "translate(0 0)", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "58.36", cy: "79.57", rx: "5.67", ry: "7.56", transform: "translate(-39.17 64.57) rotate(-45)", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "67.58", cy: "70.35", rx: "5.67", ry: "7.56", transform: "translate(-29.95 68.39) rotate(-45)", fill: "#fff" }),
        React__default['default'].createElement("path", { d: "M68.8,78.88a.29.29,0,0,0-.32.41,3,3,0,0,0,.51.61,2.28,2.28,0,0,1,.36.57,1,1,0,0,1,0,.93c-.49.8-1.8-.42-2.14-.74-.17-.16-.48,0-.34.26.59.81,2,1.88,2.9.94a1.44,1.44,0,0,0,.29-1.33A2.34,2.34,0,0,0,68.8,78.88Z", transform: "translate(0 0)", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M50.93,72.46c-1.47.1-1.79,2.09-1.55,3.23,0,.19.36.16.34,0a4.41,4.41,0,0,1,.19-1.53A3.38,3.38,0,0,1,51,72.71.15.15,0,0,0,50.93,72.46Z", transform: "translate(0 0)", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M61.67,63.24c-1.85-.74-3.13,1.4-3.31,2.91,0,.15.22.17.26,0a4.7,4.7,0,0,1,1-1.85,3.06,3.06,0,0,1,2.05-.8C61.83,63.5,61.79,63.29,61.67,63.24Z", transform: "translate(0 0)", fill: "#592d0f" }),
        React__default['default'].createElement("ellipse", { cx: "58.77", cy: "79.43", rx: "3.59", ry: "5.02", transform: "translate(-38.95 64.82) rotate(-45)", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "67.25", cy: "70.95", rx: "3.59", ry: "5.02", transform: "translate(-30.47 68.34) rotate(-45)", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "54.67", cy: "76.89", rx: "1.04", ry: "1.5", transform: "translate(-38.36 61.18) rotate(-45)", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "63.15", cy: "68.41", rx: "1.04", ry: "1.5", transform: "translate(-29.88 64.69) rotate(-45)", fill: "#fff" })));
};

var Icon$C = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("path", { d: "M128,64A64,64,0,1,1,64,0a64,64,0,0,1,64,64", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M107.6,50.38a2.81,2.81,0,0,1,.32,3.6,219.21,219.21,0,0,1-52.29,52.75L54,107.88a3,3,0,0,1-3.81-.32L43,100.34A11.27,11.27,0,0,0,27.06,84.4l-6.64-6.64a2.89,2.89,0,0,1,.36-4.39l1.61-1.15a213.75,213.75,0,0,0,51-51.48,2.74,2.74,0,0,1,3.83-.66,2.6,2.6,0,0,1,.36.3l6.76,6.75a11.27,11.27,0,0,0,15.93,15.94l7.31,7.31Z", fill: "#b7e57c" }),
        React__default['default'].createElement("path", { d: "M110.8,52.38,85,85.05,51.62,110.32l-6.42-6.47-2.32-2.8,2.32-3.36L46,94.34l-.45-3.57-1.34-3.35L42,84.74,39.3,83l-2.9-.89H32.83L29,83.4l-2.23,2-5.36-6.48,8.72-1.3a159.46,159.46,0,0,0,74.22-31.72l6.42,6.47Z", fill: "#99d850" }),
        React__default['default'].createElement("path", { d: "M39.74,100.65a3.58,3.58,0,0,1,1-2.53h0A7.7,7.7,0,0,0,29.92,87.23h0a3.58,3.58,0,0,1-5.06,0h0l-7-6.95a6.47,6.47,0,0,1,0-9.15,5.84,5.84,0,0,1,.81-.68l1.6-1.15,2.08,2.91-1.61,1.15a2.88,2.88,0,0,0-.36,4.39l7,7,0,0a11.27,11.27,0,0,1,16,15.92l0,0,6.9,6.9a3,3,0,0,0,3.81.32l1.6-1.15A219,219,0,0,0,107.91,54a2.82,2.82,0,0,0-.31-3.6l-7.25-7.25-.16.16A11.27,11.27,0,0,1,84.25,27.35l.16-.16-6.82-6.82a2.75,2.75,0,0,0-3.88,0,2.6,2.6,0,0,0-.3.36,213.75,213.75,0,0,1-51,51.48l-2.08-2.91A210.1,210.1,0,0,0,70.48,18.69a6.31,6.31,0,0,1,9.65-.84l6.81,6.81a3.56,3.56,0,0,1,0,5.05l0,0,0,.06A7.7,7.7,0,0,0,97.75,40.68l0,0a3.57,3.57,0,0,1,5-.05l0,0,7.25,7.25a6.4,6.4,0,0,1,.72,8.18A222.9,222.9,0,0,1,57.7,109.64l-1.6,1.15a6.54,6.54,0,0,1-8.41-.7l-6.9-6.9a3.62,3.62,0,0,1-1-2.54Z", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { id: "A", d: "M64,32.86l1.58,1.58A1.79,1.79,0,0,1,63.07,37l-1.58-1.58A1.79,1.79,0,1,1,64,32.86Z", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M70.65,39.5l1.58,1.58a1.79,1.79,0,0,1,0,2.53,1.8,1.8,0,0,1-2.53,0L68.12,42a1.79,1.79,0,0,1,2.53-2.53Z", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { id: "B", d: "M78.86,50.24a1.77,1.77,0,0,1-2.52,0h0l-1.9-1.89A1.79,1.79,0,0,1,77,45.82l1.89,1.89a1.8,1.8,0,0,1,0,2.53Z", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M85.5,56.88a1.8,1.8,0,0,1-2.53,0h0L81.08,55a1.79,1.79,0,0,1,2.52-2.53l1.9,1.9a1.77,1.77,0,0,1,0,2.52Z", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M90.24,59.09l1.58,1.58a1.79,1.79,0,1,1-2.53,2.52l-1.58-1.58a1.79,1.79,0,0,1,2.53-2.52Z", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M96.87,65.72l1.58,1.58a1.79,1.79,0,0,1-2.53,2.53l-1.58-1.58a1.79,1.79,0,0,1,2.53-2.53Z", fill: "#875930", "fill-rule": "evenodd" }),
        React__default['default'].createElement("path", { d: "M62.23,50.52,41.34,71.42a21.64,21.64,0,0,0,.89,2.84A22.69,22.69,0,0,0,47.31,82c8,8,20.14,8.74,27.17,1.71s6.26-19.19-1.72-27.17a22.42,22.42,0,0,0-7.69-5.07A20.78,20.78,0,0,0,62.23,50.52Z", fill: "#875930" }),
        React__default['default'].createElement("path", { d: "M63.2,50.94a1.71,1.71,0,0,1,.42.73c.77,2.48-2.39,8.12-7.7,13.43s-11,8.48-13.44,7.71a1.79,1.79,0,0,1-.73-.43c-.62-.62-.69-1.72-.29-3.12.81-2.88,3.59-7.06,7.57-11s8.16-6.76,11-7.58C61.48,50.25,62.58,50.32,63.2,50.94Z", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M58,55.49c.79.79-1.13,4-4.29,7.15s-6.36,5.08-7.15,4.29,1.13-4,4.29-7.15S57.24,54.7,58,55.49Z", fill: "#dbe6b7" }),
        React__default['default'].createElement("path", { d: "M46.52,67.41c.19.19,0,.66-.38,1.06s-.87.57-1.06.38,0-.66.38-1.06S46.33,67.22,46.52,67.41Z", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "58.87", cy: "55.23", rx: "1.07", ry: "0.5", transform: "translate(-21.81 57.8) rotate(-45)", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M49,66.78c.2.19,0,.69-.4,1.1s-.91.6-1.11.4,0-.69.4-1.11S48.82,66.58,49,66.78Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M53.39,63.71c.3.3,0,1.05-.6,1.68s-1.39.9-1.69.61,0-1,.61-1.68S53.09,63.41,53.39,63.71Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M58.83,58.15c.22.21,0,.75-.43,1.2s-1,.64-1.2.43,0-.75.43-1.2S58.62,57.94,58.83,58.15Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M46.34,65.2c-.25-.25-.87,0-1.4.5s-.75,1.15-.5,1.39.87,0,1.39-.5S46.58,65.44,46.34,65.2Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M49.51,60.62c-.25-.25-.87,0-1.39.5s-.75,1.15-.51,1.39.87,0,1.4-.5S49.75,60.87,49.51,60.62Z", fill: "#010100" }),
        React__default['default'].createElement("path", { d: "M56.53,54.53c-.26-.26-.91,0-1.46.53s-.78,1.19-.52,1.45.91,0,1.46-.52S56.79,54.79,56.53,54.53Z", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "59.77", cy: "75.68", rx: "4.25", ry: "5.67", transform: "translate(-36.01 64.43) rotate(-45)", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "66.68", cy: "68.76", rx: "4.25", ry: "5.67", transform: "translate(-29.09 67.29) rotate(-45)", fill: "#fff" }),
        React__default['default'].createElement("path", { d: "M67.6,75.16a.22.22,0,0,0-.24.31,2,2,0,0,0,.38.45,1.53,1.53,0,0,1,.27.44.76.76,0,0,1,0,.69c-.37.6-1.35-.31-1.6-.55s-.37,0-.26.19c.44.61,1.46,1.41,2.17.71a1.1,1.1,0,0,0,.23-1A1.8,1.8,0,0,0,67.6,75.16Z", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M54.2,70.34c-1.1.08-1.35,1.58-1.16,2.43,0,.14.26.11.25,0a3.43,3.43,0,0,1,.14-1.15,2.65,2.65,0,0,1,.85-1.06A.11.11,0,0,0,54.2,70.34Z", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M62.25,63.43c-1.38-.56-2.34,1.05-2.48,2.18,0,.12.17.13.2,0a3.41,3.41,0,0,1,.74-1.39,2.31,2.31,0,0,1,1.54-.6C62.37,63.63,62.34,63.47,62.25,63.43Z", fill: "#592d0f" }),
        React__default['default'].createElement("ellipse", { cx: "60.08", cy: "75.57", rx: "2.69", ry: "3.77", transform: "translate(-35.84 64.62) rotate(-45)", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "66.44", cy: "69.21", rx: "2.69", ry: "3.77", transform: "translate(-29.48 67.25) rotate(-45)", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "57", cy: "73.67", rx: "0.78", ry: "1.12", transform: "translate(-35.4 61.88) rotate(-45)", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "63.36", cy: "67.31", rx: "0.78", ry: "1.12", transform: "translate(-29.03 64.52) rotate(-45)", fill: "#fff" })));
};

var Icon$D = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$E = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$F = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$G = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Flex = styled__default['default'].div(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  display: flex;\n  ", "\n  ", "\n"], ["\n  display: flex;\n  ", "\n  ", "\n"])), styledSystem.flexbox, styledSystem.space);
var templateObject_1$4;

var variants$1 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$1.INFO : _b;
    switch (variant) {
        case variants$1.DANGER:
            return theme.colors.failure;
        case variants$1.WARNING:
            return theme.colors.warning;
        case variants$1.SUCCESS:
            return theme.colors.success;
        case variants$1.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$1.INFO; }
    switch (variant) {
        case variants$1.DANGER:
            return Icon$2;
        case variants$1.WARNING:
            return Icon$1;
        case variants$1.SUCCESS:
            return Icon;
        case variants$1.INFO:
        default:
            return Icon$3;
    }
};
var IconLabel = styled__default['default'].div(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled__default['default'].div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ",
    ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return hasHandler ? withHandlerSpacing + "px" : "12px";
});
var CloseHandler = styled__default['default'].div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled__default['default'](Flex)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React__default['default'].createElement(StyledAlert, null,
        React__default['default'].createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React__default['default'].createElement(Icon, { color: "currentColor", width: "24px" })),
        React__default['default'].createElement(Details, { hasHandler: !!onClick },
            React__default['default'].createElement(Text, { bold: true }, title),
            typeof children === "string" ? (React__default['default'].createElement(Text, { as: "p" }, children)) : (children)),
        onClick && (React__default['default'].createElement(CloseHandler, null,
            React__default['default'].createElement(IconButton, { size: "sm", variant: "text", onClick: onClick },
                React__default['default'].createElement(Icon$k, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$5, templateObject_2$1, templateObject_3$1, templateObject_4;

var Separator = styled__default['default'].div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: currentColor;\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled__default['default'].ul(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, styledSystem.space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArrays(accum, [item]);
        }
        return __spreadArrays(accum, [
            React__default['default'].createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React__default['default'].createElement(Icon$i, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = React.Children.toArray(children).filter(function (child) {
        return React.isValidElement(child);
    });
    var items = insertSeparators(validItems, separator);
    return (React__default['default'].createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React__default['default'].createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$6, templateObject_2$2;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants.SUBTLE ? "input" : "tertiary"];
};
var StyledButtonMenu = styled__default['default'].div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n"])), getBackgroundColor);
var templateObject_1$7;

var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, onClick = _a.onClick, children = _a.children;
    return (React__default['default'].createElement(StyledButtonMenu, { variant: variant }, React.Children.map(children, function (child, index) {
        return React.cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onClick ? function () { return onClick(index); } : undefined,
            size: size,
            variant: variant,
        });
    })));
};

var InactiveButton = styled__default['default'](Button)(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, colorKey = _a.colorKey;
    return theme.colors[colorKey];
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.size, size = _c === void 0 ? sizes.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants.PRIMARY : _d, as = _a.as, props = __rest(_a, ["isActive", "size", "variant", "as"]);
    if (!isActive) {
        return (React__default['default'].createElement(InactiveButton, __assign({ forwardedAs: as, size: size, variant: "tertiary", colorKey: variant === variants.PRIMARY ? "primary" : "textSubtle" }, props)));
    }
    return React__default['default'].createElement(Button, __assign({ as: as, size: size, variant: variant }, props));
};
var templateObject_1$8;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled__default['default'].div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  color: ",
    ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, styledSystem.space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$9;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React__default['default'].createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled__default['default'].div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), styledSystem.space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$a;

var CardHeader = styled__default['default'].div(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  background: ", ";\n\n  ", "\n"], ["\n  background: ", ";\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.cardHeaderBackground;
}, styledSystem.space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$b;

var CardFooter = styled__default['default'].div(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, styledSystem.space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$c;

var StyledCardRibbon = styled__default['default'].div(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  background-color: ",
    ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ",
    ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text;
    return (React__default['default'].createElement(StyledCardRibbon, { variantColor: variantColor },
        React__default['default'].createElement("div", { title: text }, text)));
};
var templateObject_1$d;

var scales = {
    SM: "sm",
    MD: "md",
};

var getScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales.SM:
            return "24px";
        case scales.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled__default['default'].input.attrs({ type: "checkbox" })(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale, getScale, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales.MD,
};
var templateObject_1$e;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled__default['default'].div(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container = styled__default['default'].div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React__default['default'].createElement(Container, null,
        target,
        React__default['default'].createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$f, templateObject_2$3;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var sizes$1 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a;
var style = (_a = {},
    _a[sizes$1.MD] = {
        fontSize: "20px",
    },
    _a[sizes$1.LG] = {
        fontSize: "24px",
    },
    _a[sizes$1.XL] = {
        fontSize: "40px",
    },
    _a[sizes$1.XXL] = {
        fontSize: "64px",
    },
    _a);
var Heading = styled__default['default'](Text).attrs({ bold: true })(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"], ["\n  ", "\n  font-weight:600;\n  line-height: 1.1;\n"])), function (_a) {
    var size = _a.size;
    return style[size || sizes$1.MD];
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$g;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper = styled__default['default'].div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ",
    "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return responsive ? (height / width) * 100 : 0;
}, styledSystem.space);
var templateObject_1$h;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = React.useRef(null);
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled__default['default'].img(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled__default['default'].div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = React.useRef(null);
    var _b = React.useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    React.useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React__default['default'].createElement(Wrapper, __assign({ ref: imgRef }, otherProps), isLoaded ? React__default['default'].createElement(StyledImage, { src: src, alt: alt }) : React__default['default'].createElement(Placeholder, null)));
};
var templateObject_1$i, templateObject_2$4;

var scales$1 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$1.MD : _b;
    switch (scale) {
        case scales$1.SM:
            return "32px";
        case scales$1.LG:
            return "48px";
        case scales$1.MD:
        default:
            return "40px";
    }
};
var Input = styled__default['default'].input(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input.defaultProps = {
    scale: scales$1.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$j;

var GridLayout = styled__default['default'].div(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$k;

var GridLayout$1 = styled__default['default'](GridLayout)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$l;

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled__default['default'].input.attrs({ type: "radio" })(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, styledSystem.space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$m;

var getColor$1 = function (color, theme) {
    return getThemeValue("colors." + color, color)(theme);
};

var getThemeTextColor = function (_a) {
    var outline = _a.outline, _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return (outline ? getColor$1(variant, theme) : "#ffffff");
};
var StyledTag = styled__default['default'].div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border: 2px solid\n    ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border: 2px solid\n    ", ";\n  border-radius: 16px;\n  color: ", ";\n  display: inline-flex;\n  font-size: 14px;\n  font-weight: 400;\n  height: 28px;\n  line-height: 1.5;\n  padding: 0 8px;\n  white-space: nowrap;\n\n  svg {\n    fill: ", ";\n  }\n"])), function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "primary" : _b;
    return outline ? "transparent" : getColor$1(variant, theme);
}, function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? "primary" : _b, theme = _a.theme;
    return getColor$1(variant, theme);
}, getThemeTextColor, getThemeTextColor);
var templateObject_1$n;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React__default['default'].createElement(StyledTag, __assign({}, props),
        React__default['default'].isValidElement(startIcon) &&
            React__default['default'].cloneElement(startIcon, {
                mr: "0.5rem",
            }),
        children,
        React__default['default'].isValidElement(endIcon) &&
            React__default['default'].cloneElement(endIcon, {
                ml: "0.5rem",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    outline: false,
};

var StyledLink = styled__default['default'](Text)(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React__default['default'].createElement(StyledLink, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$o;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React__default['default'].createElement(Link, __assign({ external: true }, props),
        children,
        React__default['default'].createElement(Icon$t, { color: "primary", ml: "4px" })));
};

var Bar = styled__default['default'].div(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ",
    ";\n  border-top-left-radius: 32px;\n  border-bottom-left-radius: 32px;\n  height: 16px;\n  transition: width 200ms ease;\n"])), function (props) {
    return props.primary
        ? props.theme.colors.secondary
        : props.theme.colors.secondary + "80";
});
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled__default['default'].div(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 32px;\n  box-shadow: ", ";\n  height: 16px;\n  overflow: hidden;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$p, templateObject_2$5;

var ProgressBunnyWrapper = styled__default['default'].div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$q;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.primaryStep, primaryStep = _b === void 0 ? 0 : _b, _c = _a.secondaryStep, secondaryStep = _c === void 0 ? null : _c, _d = _a.showProgressBunny, showProgressBunny = _d === void 0 ? false : _d;
    return (React__default['default'].createElement(StyledProgress, null,
        showProgressBunny && (React__default['default'].createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React__default['default'].createElement(Icon$z, null))),
        React__default['default'].createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? (React__default['default'].createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } })) : null));
};

var Icon$H = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React__default['default'].createElement("path", { d: "M116.54,13.86H11.46a74.49,74.49,0,0,0-4.89,9.39A80.41,80.41,0,0,0,0,55.35C0,95.46,28.65,128,64,128s64-32.52,64-72.63a80.41,80.41,0,0,0-6.57-32.1A77.21,77.21,0,0,0,116.54,13.86Z", transform: "translate(0 -0.02)", fill: "#9e6f41" }),
        React__default['default'].createElement("path", { d: "M117.91,17.33a6.19,6.19,0,0,1-.76,2.91C112.85,28.41,90.69,34.63,64,34.63S15.15,28.41,10.84,20.24a6.32,6.32,0,0,1-.76-2.91c0-3.13,2.59-6.06,7.11-8.59C26.49,3.53,44,0,64,0s37.51,3.51,46.81,8.72C115.33,11.27,117.91,14.2,117.91,17.33Z", transform: "translate(0 -0.02)", fill: "#80cc33" }),
        React__default['default'].createElement("path", { d: "M93.48,15.8c0,4-12.88,7.19-28.76,7.19S36,19.77,36,15.8,48.83,8.61,64.72,8.61,93.48,11.83,93.48,15.8Z", transform: "translate(0 -0.02)", fill: "#dbe6b7" }),
        React__default['default'].createElement("g", null,
            React__default['default'].createElement("path", { d: "M34.57,16.81c0,.94-1.62,1.7-3.62,1.7s-3.62-.76-3.62-1.7S29,15.11,31,15.11,34.57,15.87,34.57,16.81Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("ellipse", { cx: "96.25", cy: "17.2", rx: "3.79", ry: "1.78", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M42.45,21.5c0,1-1.7,1.78-3.79,1.78s-3.79-.8-3.79-1.78,1.7-1.78,3.79-1.78S42.45,20.52,42.45,21.5Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M61.14,24.79c0,1.49-2.57,2.7-5.74,2.7s-5.75-1.21-5.75-2.7,2.57-2.7,5.75-2.7S61.14,23.3,61.14,24.79Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M88.82,24.48c0,1.07-1.84,1.93-4.11,1.93s-4.11-.86-4.11-1.93,1.84-1.93,4.11-1.93S88.82,23.42,88.82,24.48Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M39.67,10.79c0-1.24-2.14-2.24-4.77-2.24s-4.76,1-4.76,2.24S32.27,13,34.9,13,39.67,12,39.67,10.79Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M59.16,7.25C59.16,6,57,5,54.39,5s-4.76,1-4.76,2.23,2.13,2.24,4.76,2.24S59.16,8.49,59.16,7.25Z", transform: "translate(0 -0.02)", fill: "#010100" }),
            React__default['default'].createElement("path", { d: "M92.12,9.6c0-1.3-2.23-2.34-5-2.34s-5,1-5,2.34,2.23,2.34,5,2.34S92.12,10.89,92.12,9.6Z", transform: "translate(0 -0.02)", fill: "#010100" })),
        React__default['default'].createElement("ellipse", { cx: "47.09", cy: "70.87", rx: "15.13", ry: "20.17", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "81.87", cy: "70.87", rx: "15.13", ry: "20.17", fill: "#fff" }),
        React__default['default'].createElement("path", { d: "M68.09,89.3a.76.76,0,0,0-1.38.18,6.91,6.91,0,0,0-.18,2.09,6.33,6.33,0,0,1-.41,1.77,2.63,2.63,0,0,1-1.74,1.75c-2.42.6-2.59-4.16-2.63-5.41,0-.62-1-.81-1.12-.16-.44,2.64.13,7.23,3.68,7.25a3.89,3.89,0,0,0,3.06-2C68.26,93.48,68.92,90.73,68.09,89.3Z", transform: "translate(0 -0.02)", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M46.5,43.49c-3-2.57-7.34.57-9,3.18-.29.44.38,1,.73.56a11.05,11.05,0,0,1,3.23-2.53c1.56-.82,3.11-.58,4.78-.53A.4.4,0,0,0,46.5,43.49Z", transform: "translate(0 -0.02)", fill: "#592d0f" }),
        React__default['default'].createElement("path", { d: "M84.12,46.35c-2.07-4.87-8.52-3.25-11.71-.74-.33.25.08.74.42.55a12.38,12.38,0,0,1,5.36-1.61c2.25-.11,3.7,1.12,5.39,2.34C83.94,47.16,84.26,46.67,84.12,46.35Z", transform: "translate(0 -0.02)", fill: "#592d0f" }),
        React__default['default'].createElement("ellipse", { cx: "48.14", cy: "71.39", rx: "9.56", ry: "13.39", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "80.13", cy: "71.39", rx: "9.56", ry: "13.39", fill: "#010100" }),
        React__default['default'].createElement("ellipse", { cx: "45.18", cy: "58.87", rx: "2.78", ry: "4", fill: "#fff" }),
        React__default['default'].createElement("ellipse", { cx: "77.17", cy: "58.87", rx: "2.78", ry: "4", fill: "#fff" })));
};

styled.keyframes(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = styled.keyframes(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$1 = styled__default['default'].div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
var FloatingKiwiIcon = styled__default['default'](Icon$H)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  animation: ", " 2s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 72 : _b;
    return (React__default['default'].createElement(Container$1, null,
        React__default['default'].createElement(FloatingKiwiIcon, { width: size + "px" })));
};
var templateObject_1$r, templateObject_2$6, templateObject_3$2, templateObject_4$1;

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = styled.keyframes(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = styled.keyframes(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled__default['default'].div(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ",
    ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small;
}, styledSystem.layout, styledSystem.space);
var Pulse = styled__default['default'](Root)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled__default['default'](Root)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(\n      90deg,\n      transparent,\n      rgba(243, 243, 243, 0.5),\n      transparent\n    );\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React__default['default'].createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React__default['default'].createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$s, templateObject_2$7, templateObject_3$3, templateObject_4$2, templateObject_5;

var Handle = styled__default['default'].div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: 32px;\n  left: 4px;\n  position: absolute;\n  top: 4px;\n  transition: left 200ms ease-in;\n  width: 32px;\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
});
var Input$1 = styled__default['default'].input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: calc(100% - 36px);\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled__default['default'].div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"], ["\n  align-items: center;\n  background-color: ",
    ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: 40px;\n  position: relative;\n  transition: background-color 200ms;\n  width: 72px;\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$t, templateObject_2$8, templateObject_3$4;

var Toggle = function (_a) {
    var checked = _a.checked, props = __rest(_a, ["checked"]);
    var isChecked = !!checked;
    return (React__default['default'].createElement(StyledToggle, { checked: isChecked },
        React__default['default'].createElement(Input$1, __assign({ checked: checked }, props, { type: "checkbox" })),
        React__default['default'].createElement(Handle, null)));
};

var byTextAscending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA < upperB) {
        return -1;
    }
    if (upperA > upperB) {
        return 1;
    }
    return 0;
}; };
var byTextDescending = function (getTextProperty) { return function (objectA, objectB) {
    var upperA = getTextProperty(objectA).toUpperCase();
    var upperB = getTextProperty(objectB).toUpperCase();
    if (upperA > upperB) {
        return -1;
    }
    if (upperA < upperB) {
        return 1;
    }
    return 0;
}; };

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArrays(data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending
                    ? data.sort(column.sort)
                    : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () { return function (state, action) {
    var rows = [];
    var nextPage = 0;
    var prevPage = 0;
    var isAscending = null;
    var sortedRows = [];
    var columnCopy = [];
    var filteredRows = [];
    var selectedRowsById = {};
    var stateCopy = __assign({}, state);
    var rowIds = {};
    switch (action.type) {
        case "SET_ROWS":
            rows = __spreadArrays(action.data);
            // preserve sorting if a sort is already enabled when data changes
            if (state.sortColumn) {
                rows = sortByColumn(action.data, state.sortColumn, state.columns);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            if (state.paginationEnabled === true) {
                rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
            }
            return __assign(__assign({}, state), { rows: rows, originalRows: action.data });
        case "NEXT_PAGE":
            nextPage = state.pagination.page + 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
        case "PREV_PAGE":
            prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
            return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
        case "TOGGLE_SORT":
            if (!(action.columnName in state.columnsByName)) {
                throw new Error("Invalid column, " + action.columnName + " not found");
            }
            // loop through all columns and set the sort parameter to off unless
            // it's the specified column (only one column at a time for )
            columnCopy = state.columns.map(function (column) {
                // if the row was found
                if (action.columnName === column.name) {
                    if (action.isAscOverride !== undefined) {
                        // force the sort order
                        isAscending = action.isAscOverride;
                    }
                    else {
                        // if it's undefined, start by setting to ascending, otherwise toggle
                        isAscending =
                            column.sorted.asc === undefined ? true : !column.sorted.asc;
                    }
                    if (column.sort) {
                        sortedRows = isAscending
                            ? state.rows.sort(column.sort)
                            : state.rows.sort(column.sort).reverse();
                        // default to sort by string
                    }
                    else {
                        sortedRows = isAscending
                            ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                            : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                    }
                    return __assign(__assign({}, column), { sorted: {
                            on: true,
                            asc: isAscending,
                        } });
                }
                // set sorting to false for all other columns
                return __assign(__assign({}, column), { sorted: {
                        on: false,
                        asc: false,
                    } });
            });
            return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
        case "GLOBAL_FILTER":
            filteredRows = action.filter(state.originalRows);
            selectedRowsById = {};
            state.selectedRows.forEach(function (row) {
                var _a;
                selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
            });
            return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                    return selectedRowsById[row.id]
                        ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                }), filterOn: true });
        case "SELECT_ROW":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.rows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                var newRow = __assign({}, row);
                if (newRow.id === action.rowId) {
                    newRow.selected = !newRow.selected;
                }
                return newRow;
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
            stateCopy.toggleAllState =
                stateCopy.selectedRows.length === stateCopy.rows.length
                    ? (stateCopy.toggleAllState = true)
                    : (stateCopy.toggleAllState = false);
            return stateCopy;
        case "SEARCH_STRING":
            stateCopy = __assign({}, state);
            stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                return (row.cells.filter(function (cell) {
                    if (cell.value.includes(action.searchString)) {
                        return true;
                    }
                    return false;
                }).length > 0);
            });
            return stateCopy;
        case "TOGGLE_ALL":
            if (state.selectedRows.length < state.rows.length) {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = true;
                    return __assign(__assign({}, row), { selected: true });
                });
                stateCopy.toggleAllState = true;
            }
            else {
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    rowIds[row.id] = false;
                    return __assign(__assign({}, row), { selected: false });
                });
                stateCopy.toggleAllState = false;
            }
            stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                return row.id in rowIds
                    ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
            });
            stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
            return stateCopy;
        default:
            throw new Error("Invalid reducer action");
    }
}; };
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = React.useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                } });
        });
    }, [columns]);
    var columnsByName = React.useMemo(function () { return getColumnsByName(columnsWithSorting); }, [
        columnsWithSorting,
    ]);
    var tableData = React.useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = React.useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: null,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop__default['default'],
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop__default['default'],
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = React.useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = React.useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    React.useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = React.useMemo(function () {
        return __spreadArrays(state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    React.useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) {
            return dispatch({ type: "SEARCH_STRING", searchString: searchString });
        },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #31D0AA, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #ba8e5e, 0px 0px 0px 4px rgba(186, 142, 94, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "32px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries$1 = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) {
    return "is" + size.charAt(0).toUpperCase() + size.slice(1);
};
var useMatchBreakpoints = function () {
    var _a = React.useState(function () {
        return Object.keys(mediaQueries$1).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries$1[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    React.useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries$1).map(function (size) {
            var mql = window.matchMedia(mediaQueries$1[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = React.useCallback(function () {
        return debounce__default['default'](function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = React.useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    React.useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var StyledModal = styled__default['default'].div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"], ["\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1),\n    0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n  overflow-y: auto;\n  ", " {\n    width: auto;\n    min-width: 360px;\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.borderColor;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
});
var ModalHeader = styled__default['default'].div(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"], ["\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #e9eaeb;\n  align-items: center;\n  padding: 12px 24px;\n"])));
var ModalTitle = styled__default['default'](Flex)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c;
    return (React__default['default'].createElement(StyledModal, null,
        React__default['default'].createElement(ModalHeader, null,
            React__default['default'].createElement(ModalTitle, null,
                onBack && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
                    React__default['default'].createElement(Icon$5, { color: "primary" }))),
                React__default['default'].createElement(Heading, null, title)),
            !hideCloseButton && (React__default['default'].createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
                React__default['default'].createElement(Icon$k, { color: "primary" })))),
        React__default['default'].createElement(Flex, { flexDirection: "column", p: bodyPadding }, children)));
};
var templateObject_1$u, templateObject_2$9, templateObject_3$5;

var Overlay = styled__default['default'].div.attrs({ role: "presentation" })(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #383533;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: #383533;\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$v;

var ModalWrapper = styled__default['default'].div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = React.createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = React.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = React.useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = React.useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React__default['default'].createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React__default['default'].createElement(ModalWrapper, null,
            React__default['default'].createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React__default['default'].isValidElement(modalNode) &&
                React__default['default'].cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$w;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = React.useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = React.useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    React.useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$I = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M13.7803 2.71967C14.0732 3.01256 14.0732 3.48744 13.7803 3.78033L12.8107 4.75L14.0307 5.96999H20C21.1 5.96999 22 6.86999 22 7.96999V12.73C21.28 12.25 20.43 11.97 19.5 11.97C17.19 11.97 15.3 13.73 15.05 15.97H11.91C11.96 15.64 12 15.31 12 14.97C12 13.43 11.41 12.03 10.46 10.97H11C12.1 10.97 13 10.07 13 8.96999V7.06068L11.75 5.81066L10.7803 6.78033C10.4874 7.07322 10.0126 7.07322 9.71967 6.78033C9.42678 6.48744 9.42678 6.01256 9.71967 5.71967L12.7197 2.71967C13.0126 2.42678 13.4874 2.42678 13.7803 2.71967Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 15C11 17.7614 8.76142 20 6 20C3.23858 20 1 17.7614 1 15C1 12.2386 3.23858 10 6 10C8.76142 10 11 12.2386 11 15ZM9 15C9 16.6569 7.65685 18 6 18C4.34315 18 3 16.6569 3 15C3 13.3431 4.34315 12 6 12C7.65685 12 9 13.3431 9 15Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19.5 12.97C17.57 12.97 16 14.54 16 16.47C16 18.4 17.57 19.97 19.5 19.97C21.43 19.97 23 18.4 23 16.47C23 14.54 21.43 12.97 19.5 12.97ZM19.5 17.97C18.67 17.97 18 17.3 18 16.47C18 15.64 18.67 14.97 19.5 14.97C20.33 14.97 21 15.64 21 16.47C21 17.3 20.33 17.97 19.5 17.97Z" }),
        React__default['default'].createElement("path", { d: "M9 8.96997H4C3.45 8.96997 3 8.52997 3 7.96997C3 7.41997 3.45 6.96997 4 6.96997H7C8.1 6.96997 9 7.86997 9 8.96997Z" })));
};

var Icon$J = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z", fill: "#191326" })));
};

var Icon$K = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$L = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$M = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$N = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$O = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$P = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 660 128" }, props),
        React__default['default'].createElement("path", { fill: "#80CC33", d: "M127.6,64c0,35.3-28.7,64-64,64s-64-28.7-64-64s28.7-64,64-64\n  S127.6,28.7,127.6,64" }),
        React__default['default'].createElement("path", { fill: "#010100", d: "M69.5,102.4c-0.1,0-0.6-0.1-1.1-0.1c-0.5-0.1-1.5-0.1-2.1-0.2\n  c-0.7-0.1-1.8-0.2-2.5-0.3c-0.7-0.1-1.8-0.2-2.4-0.3c-1.7-0.3-2.8-0.6-2.9-0.6c0,0-0.6-0.1-1.3-0.2c-0.7-0.1-1.7-0.3-2.3-0.4\n  c-1-0.2-4.1-1.3-5.3-1.8c-0.3-0.1-1.1-0.4-1.7-0.7c-2.1-0.8-6-2.9-9.4-5.1c-2.7-1.8-4.2-3-7.3-5.9c-1.3-1.2-2.6-2.4-2.8-2.6\n  c-0.2-0.2-1-1-1.7-1.8c-1.1-1.3-1.5-1.7-2.5-3.3c-0.6-1-1.6-2.5-2.2-3.3c-1.4-2.1-2.7-4.6-3.4-6.6c-1.4-4.1-1.8-5.4-2.1-7.2\n  c-0.3-1.7-0.6-3.4-0.8-5.3c-0.1-1.1,0-2.2,0.4-4.7c0.2-1.4,0.4-2.1,1.2-5.2c0.2-0.7,0.5-1.8,0.6-2.3c0.3-1,0.4-1.3,1.3-2.9\n  c0.5-1,1.3-2.4,1.7-3c0.7-1.1,0.7-1.2,1.7-2.1c0.7-0.6,1.2-1,1.4-1.1c0.6-0.2,1.9-0.5,2-0.5c0,0,0,0.1,0,0.1\n  c-0.1,0.1-0.1,0.1,0,0.1c0,0,0.1-0.1,0.2-0.1c0.1-0.1,0.3-0.3,0.5-0.4c0.4-0.3,0.4-0.3,0.4-0.5c-0.1-0.5,0.3-0.9,2.3-2.3\n  c1.6-1.2,2-1.4,2.9-1.9c1.9-0.9,4.5-1.8,6-2.1c0.6-0.1,1.5-0.3,2-0.5c1.2-0.3,1.6-0.4,3.8-0.6c0.8-0.1,2.1-0.3,2.8-0.4\n  c0.7-0.1,1.9-0.2,2.8-0.3c0.9,0,1.7-0.1,2-0.2c0.2-0.1,2.3-0.1,4.9-0.1c4.4,0,4.5,0,5.7,0.2c0.7,0.1,2.5,0.4,4.2,0.7\n  c2,0.3,3.7,0.7,5.1,1c1.2,0.3,2.5,0.6,3,0.8c2.6,0.7,5.9,1.8,9.5,3.2c3.1,1.3,3.9,1.6,4.5,1.9c0.3,0.2,1.2,0.6,2,1\n  c0.7,0.3,1.7,0.8,2,1.1c0.4,0.2,1,0.6,1.5,0.9c1,0.5,3,1.8,5,3.2c3.9,2.8,6.4,5,8.7,8c1.2,1.5,1.4,1.9,2.3,3.5c0.6,1.1,0.8,1.5,1,2\n  c0.1,0.4,0.2,0.7,0.3,1.1c0.5,2.3,0.4,4.5,0.6,7.1c0,0.4,0.1,1.2,0,2.4c-0.1,1.3-0.3,1.4-0.8,3.6c-0.4,1.6-0.2,1.6-0.6,3.1\n  c-0.2,0.7-0.4,1.3-0.7,2.6c-0.4,1.3-0.7,2.2-1.6,4.2c-0.6,1.4-1.1,2.5-1.2,2.6c0,0-0.1,0.2-0.2,0.3c-0.3,0.5-1.2,2.3-1.8,3.3\n  c-1.1,2-2.8,4.7-3.2,5.2c0,0.1-0.3,0.5-0.7,0.9c-0.8,1.1-3,3.4-4.3,4.4c-0.6,0.5-1.1,0.9-1.2,1c-0.1,0.1-0.3,0.2-0.5,0.3\n  c-0.2,0.1-0.7,0.4-1.2,0.6c-0.1,0.1-0.2,0.1-0.2,0.1c-0.2,0.1-0.3,0.1-0.3,0.2c-0.3,0.2-2.8,1.9-3.3,2.2c-0.9,0.6-2.3,1.2-5.1,2.3\n  c-0.4,0.1-0.6,0.2-0.8,0.3c-1.1,0.4-2.5,0.8-3.5,1c-0.6,0.1-1.4,0.2-1.8,0.3c-0.4,0.1-1,0.2-1.3,0.3c-0.5,0.1-1.4,0.1-4.2,0.1\n  C71.3,102.4,69.6,102.4,69.5,102.4" }),
        React__default['default'].createElement("path", { "clip-path": "url(#SVGID_2_)", fill: "#9E6F41", d: "M96.6,88.9c1.3-1.5,3.1-3.5,4.9-6.2c1.1-1.9,2.2-3.8,3.4-5.7\n  c1.2-2.6,1.9-4.9,2.4-6.6c1.5-5.2,1.3-7.9,1.3-8.6c-0.1-1.2-0.3-2.2-0.4-2.8v-1.9l-0.4-1.4c-0.2-0.8-0.4-1.5-0.5-1.7\n  c-0.1-0.5-1.9-3.3-3.1-5c-1.7-2.2-3.2-3.9-4.6-5c-0.6-0.5-1.9-1.5-2.8-2.2c-1.9-1.5-3.6-2.7-4.2-3.1c-0.3-0.1-0.7-0.5-1-0.7\n  c-0.5-0.4-0.8-0.6-1.7-0.8c-0.5-0.1-2.1-0.9-3.5-1.7c-0.8-0.5-1.3-0.7-2.2-1c-0.6-0.2-2.4-0.8-3.9-1.4c-1.5-0.6-3-1.1-3.3-1.2\n  c-0.3-0.1-1-0.3-1.5-0.5c-0.5-0.2-1.7-0.5-2.5-0.7c-0.8-0.2-2.2-0.6-3.2-0.9c-2-0.6-4.3-1.2-5.7-1.4c-0.6-0.1-2.1-0.3-3.4-0.5\n  c-3.3-0.5-4.7-0.6-8.7-0.5c-2.9,0-3.7,0.1-5.3,0.3c-2.1,0.3-2.8,0.4-5.5,1c-2.8,0.7-4.1,1-5,1.4c-0.5,0.2-1.2,0.5-1.7,0.6\n  c-0.5,0.1-1.4,0.5-2.1,0.9c-0.7,0.3-1.5,0.7-1.9,0.9c-0.4,0.2-0.8,0.4-1,0.5c-0.2,0.1-0.3,0.2-0.4,0.2c0,0-0.3,0.1-0.6,0.2\n  c-1,0.4-1.2,0.4-1.3,0.3c0-0.1-0.9,0.4-1.5,1c-0.6,0.5-2.7,3.8-3.4,5.2c-0.7,1.4-2.3,5.7-2.5,6.9c-0.1,0.4-0.3,1.1-0.4,1.5\n  c-0.1,0.5-0.3,1.3-0.3,1.8c-0.1,0.5-0.2,1.3-0.3,1.8c-0.2,1.2-0.1,3.4,0.2,5.9c0.6,5.2,2.5,10.3,6.9,18.7c1.1,2,5.7,7.3,8.7,9.8\n  c1.7,1.4,3.9,3.1,5.6,4.3c1.4,1,2.7,1.6,6.3,3.2c1.3,0.6,4.1,1.6,5.3,2c0.2,0.1,1,0.3,1.7,0.6c1.5,0.6,2.7,0.9,3.9,1\n  c0.5,0.1,1.3,0.3,1.9,0.4c1.1,0.3,1.7,0.3,6.1,0.8c1.5,0.2,2.8,0.3,2.8,0.3c0.2,0.1,3,0,4.2-0.2c0.7-0.1,2.4-0.3,3.8-0.4\n  c1.5-0.2,1.6-0.3,4.5-0.9c2.8-0.5,3-0.5,3.8-0.8c0.4-0.1,1.1-0.4,3.5-1.7c2.7-1.5,4-2.3,5.5-3.5C94.7,91,95.5,90.1,96.6,88.9\n   M45.1,49.2c-0.1-0.1-0.3-0.1-0.4-0.1c-0.2,0-1-0.6-1-0.8c0,0,0.2-0.3,0.4-0.5c0.4-0.4,0.5-0.5,1.8-0.1c0.8,0.2,1,0.3,1.4,0.6\n  c0.3,0.2,0.6,0.5,0.9,0.6c0.4,0.3,0.4,0.4-0.1,0.6c-0.3,0.2-1.4,0.2-1.7,0c-0.1-0.1-0.4-0.1-0.6-0.1C45.4,49.3,45.2,49.2,45.1,49.2\n   M46.2,51.8c-0.1-0.1-0.1-0.2-0.1-0.4c0-0.2,0.1-0.3,0.3-0.5c0.3-0.2,0.4-0.2,1.2-0.2c0.9,0,1.2,0.1,1.6,0.5\n  c0.3,0.3,0.3,0.3-0.7,0.8c-0.7,0.3-0.7,0.4-1.5,0.4h-0.8v-0.2C46.3,52.1,46.2,51.9,46.2,51.8 M49.2,46.4c-0.3-0.2-0.6-0.5-0.7-0.6\n  c-0.2-0.1-0.3-0.3-0.4-0.4c-0.1-0.1-0.2-0.2-0.3-0.2c-0.3,0-0.6-0.5-0.6-0.9c0-0.3,0-0.4,0.4-0.6c0.2-0.1,0.5-0.2,0.7-0.2\n  c0.3,0,0.4,0,0.7,0.5c0.2,0.3,0.6,0.8,0.8,1.1c0.2,0.3,0.6,0.8,0.7,1c0.2,0.4,0.2,0.5,0.1,0.7c-0.1,0.3-0.1,0.3-0.7,0.1\n  C49.8,46.9,49.5,46.7,49.2,46.4 M48.3,54.8c-0.3,0.1-0.6,0.4-0.8,0.5c-0.4,0.3-0.6,0.3-1,0.1c-0.3-0.1-0.3-0.1-0.3-0.7\n  c0-0.4,0-0.6,0.1-0.6c0.1,0,0.3-0.1,0.5-0.3c0.3-0.2,0.5-0.3,0.9-0.3c0.3,0,0.6,0,0.8-0.1c0.5-0.1,1,0,1,0.4\n  C49.4,54.2,49.2,54.4,48.3,54.8 M49.8,57c-0.1-0.1-0.1-0.3-0.1-0.7v-0.6l0.4-0.1c0.5-0.2,1.7-0.2,2.1,0c0.3,0.1,0.3,0.1,0.2,0.4\n  c-0.1,0.2-0.3,0.3-0.8,0.5c-0.4,0.1-0.8,0.3-1,0.5C50.3,57.1,50,57.1,49.8,57 M51.3,43.8c0-0.4,0.3-0.8,0.7-0.8c0.3,0,0.7,0.5,1,1\n  c0.1,0.2,0.3,0.6,0.4,0.8c0.2,0.3,0.3,0.5,0.3,0.9c0,0.4,0,0.5,0.2,0.7c0.1,0.1,0.2,0.3,0.2,0.3c0,0.1-0.2,0.1-0.4,0.1\n  c-0.3,0-0.4,0-0.7-0.3c-0.2-0.2-0.6-0.8-1-1.3C51.4,44.3,51.3,44.1,51.3,43.8 M52,59.9c0,0-0.2-0.1-0.5-0.3\n  c-0.4-0.3-0.5-0.3-0.3-0.5c0.1-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.1-0.2c0.2-0.1,2-0.8,2.2-0.8c0.1,0,0.3,0.1,0.4,0.2\n  c0.2,0.2,0.3,0.2,0.1,0.3c-0.1,0.1-0.4,0.3-0.7,0.5c-0.3,0.3-0.7,0.6-1,0.7C52.3,59.8,52.1,59.9,52,59.9 M54.2,62.5\n  c-0.6,0.5-0.9,0.5-1.1,0.1c-0.1-0.1-0.2-0.3-0.2-0.4c-0.1-0.1-0.1-0.2-0.1-0.2c0-0.2,0.9-1.1,1.6-1.5c0.7-0.4,1.2-0.5,1.4-0.2\n  c0.2,0.2,0.2,0.2,0,0.5C55.5,61.3,54.8,62.1,54.2,62.5 M54.5,43.4c0.1-0.1,0.9-0.1,1,0c0.1,0.1,0.2,0.1,0.2,0.1\n  c0.1,0,0.2,0.4,0.3,1c0.1,0.5,0.3,1.1,0.4,1.3l0.1,0.3h-0.3c-0.5,0-1.1-0.5-1.6-1.5C54.4,44.1,54.3,43.6,54.5,43.4 M57.3,66.1\n  l-0.2,0.6l-0.4,0c-0.5,0-1-0.3-1-0.7c0-0.7,0.5-1.8,1.3-2.8c0.2-0.3,0.3-0.3,0.6-0.3c0.3,0,0.4,0,0.4,0.1\n  C58,63.5,57.5,65.6,57.3,66.1 M59,45.8c-0.1,0.1-0.2,0.1-0.2,0.1c-0.1,0-1.1-1.1-1.3-1.4c-0.1-0.1-0.2-0.4-0.3-0.6\n  c-0.1-0.2-0.2-0.5-0.4-0.6c-0.2-0.2-0.2-0.4-0.2-0.6c0-0.2,0.1-0.3,0.5-0.4c1-0.3,1.4-0.2,1.5,0.5c0,0.2,0.2,0.7,0.3,1.2\n  c0.1,0.5,0.3,1.1,0.3,1.3C59.2,45.6,59.2,45.7,59,45.8 M59.5,40.7c0-0.6,0-0.7,0.2-0.7c0.1,0,0.2-0.1,0.3-0.2\n  c0.1-0.1,0.2-0.2,0.3-0.2c0.3,0,0.8,0.4,0.8,0.6c0,0.1,0.1,0.4,0.1,0.6c0.1,0.6,0.1,3.9,0,4c-0.1,0.1-0.3,0.1-0.3,0\n  c0-0.1-0.2-0.3-0.3-0.5c-0.3-0.3-0.4-0.5-0.6-1.1C59.6,42.2,59.5,41.6,59.5,40.7 M61.8,65.6l-0.4,0.2c-0.2,0.2-0.5,0.2-0.7,0.2\n  c-0.3,0-0.4,0-0.5-0.3c-0.1-0.2-0.1-0.4-0.1-0.6c0-0.1,0.1-0.6,0.1-1c0.1-0.6,0.2-1,0.5-1.5c0.1-0.1,0.1-0.2,0.2-0.3\n  c0-0.1,0.1-0.1,0.2-0.2c0.1,0,0.2,0.2,0.3,0.7c0.1,0.4,0.2,0.9,0.3,1c0.1,0.2,0.1,0.6,0.1,1V65.6z M65.7,65.6\n  c-0.1,0-0.1,0.1-0.1,0.1c0,0.1-0.1,0.1-0.3,0.1c-0.4,0-0.4,0-0.6-0.5c-0.2-0.5-0.2-0.6-0.2-1.7c0-1.2,0-1.4,0.4-1.4\n  c0.1,0,0.2,0,0.4,0.1c0.3,0.1,0.7,1.1,0.7,1.8c0,0.3,0.1,0.6,0.1,0.8C66.1,65.1,66,65.5,65.7,65.6 M66.2,42.8\n  c-0.2,0.3-0.5,1-0.6,1.5c-0.2,0.6-0.3,0.9-0.5,1.1c-0.1,0.2-0.3,0.3-0.3,0.4c0,0.1-0.1,0.1-0.2,0.1c-0.2,0-0.2-0.1-0.4-0.7\n  c-0.2-0.8-0.2-1.2,0.2-2.3c0.1-0.4,0.2-0.8,0.2-1c0-0.3,0-0.3,0.3-0.5c0.3-0.2,0.5-0.2,1.1,0.1C66.6,41.8,66.7,42,66.2,42.8\n   M70,65.8c-0.1,0.2-0.1,0.3-0.5,0.3c-0.6,0-0.8-0.2-1.1-1.1c-0.4-1.3-0.7-2.5-0.6-2.7c0.1-0.1,0.3-0.1,0.5-0.1h0.4l0.3,0.7\n  c0.6,1.2,1,2.2,1,2.4C70.1,65.4,70.1,65.6,70,65.8 M69.9,45.4c-0.2,0.2-0.4,0.5-0.5,0.6c-0.1,0.2-0.4,0.5-0.6,0.7\n  c-0.4,0.4-0.6,0.5-0.6,0.2c0-0.1-0.1-0.1-0.1-0.1c-0.2,0-0.2,0,0.2-1.3c0.4-1.4,0.4-1.5,0.8-1.9c0.3-0.3,0.3-0.4,0.7-0.4\n  c0.3,0,0.4,0,0.6,0.2c0.3,0.3,0.3,0.6,0.2,0.8c-0.1,0.1-0.2,0.3-0.2,0.5C70.2,45,70.1,45.3,69.9,45.4 M70.4,47.9\n  c0-0.8,0.6-2.1,1.5-3.1c0.4-0.5,0.5-0.6,0.8-0.6c0.3,0,0.4,0.1,0.6,0.3c0.2,0.2,0.2,0.3,0.2,0.8l0,0.6L73,46.2\n  c-0.3,0.1-0.8,0.6-1.2,1c-0.4,0.4-0.9,0.8-1,0.8C70.4,48.1,70.4,48.1,70.4,47.9 M75.7,47.5c-0.1,0.1-0.5,0.3-0.8,0.6\n  c-0.3,0.2-0.8,0.5-1.1,0.7c-0.9,0.4-0.9,0.4-0.9,0.1c0-0.3,0.4-0.8,1-1.5c0.2-0.2,0.6-0.7,0.8-1c0.2-0.3,0.5-0.6,0.5-0.6\n  c0.1,0,0.3,0.1,0.6,0.3c0.4,0.2,0.5,0.3,0.5,0.6C76.3,46.9,76.1,47.3,75.7,47.5 M76.9,48.3c0.4-0.2,0.7-0.5,0.7-0.5\n  c0.1-0.2,0.7-0.1,1,0.1c0.2,0.2,0.3,0.2,0.3,0.5c-0.1,0.7-0.5,1.1-2,1.5c-0.5,0.1-1,0.4-1.2,0.5c-0.2,0.1-0.4,0.2-0.6,0.2\n  c-0.2,0-0.2,0-0.2-0.2c0-0.2,0.1-0.4,0.7-0.9C76,49,76.6,48.5,76.9,48.3 M74,64.1c-0.2,0.3-0.3,0.3-1,0.1c-0.4-0.1-0.5-0.2-1.1-0.9\n  c-0.4-0.4-0.9-1-1.1-1.3c-0.3-0.5-0.4-0.6-0.4-1.1v-0.5h0.4c0.3,0,0.4,0,0.5,0.3c0.1,0.2,0.2,0.3,0.7,0.5c0.4,0.2,0.7,0.4,1.1,0.7\n  c0.3,0.3,0.6,0.6,0.8,0.7c0.3,0.3,0.4,0.3,0.4,0.7C74.2,63.7,74.2,63.9,74,64.1 M75.3,59.9c-0.1,0.3-0.1,0.3-0.6,0.3\n  c-0.5,0-0.7-0.1-1.3-0.6c-0.2-0.2-0.5-0.4-0.7-0.6c-0.2-0.1-0.5-0.4-0.6-0.5c-0.1-0.1-0.3-0.2-0.3-0.2c-0.1,0-0.1-0.1-0.1-0.3v-0.3\n  h0.7c0.6,0,0.8,0,1.1,0.3c0.2,0.1,0.7,0.3,1,0.5c0.5,0.2,0.7,0.2,0.8,0.5C75.4,59.1,75.4,59.5,75.3,59.9 M77.4,57.3\n  c-0.1,0-0.2,0.1-0.2,0.1c-0.1,0.1-0.2,0.1-0.2,0.1c-0.2,0-2-1-2.5-1.3c-0.3-0.2-0.6-0.5-0.7-0.7l-0.2-0.4l0.3-0.3\n  c0.3-0.3,0.4-0.3,0.5-0.1c0,0.1,0.3,0.2,0.9,0.4c0.5,0.1,1,0.4,1.2,0.5c0.2,0.1,0.5,0.3,0.6,0.3c0.1,0.1,0.3,0.1,0.3,0.2\n  C77.5,56.3,77.6,57.3,77.4,57.3 M80.4,52.7h-0.3c-0.1,0-0.3,0.1-0.4,0.1c-0.2,0.2-2.9,0.2-3.6,0c-0.9-0.2-0.9-0.3-0.3-0.8\n  c0.6-0.4,2.2-0.9,3-1c0.6,0,0.7,0,1.1,0.2l0.4,0.3l0,0.6V52.7z M83,37.3c-0.7-0.3-1.7-0.7-2.2-0.8c-0.5-0.1-1.3-0.4-1.8-0.6\n  c-1.2-0.5-2.5-0.8-3.6-1c-0.5-0.1-1.2-0.2-1.6-0.3c-0.7-0.2-3-0.6-5.1-0.8c-0.5-0.1-1.3-0.2-1.7-0.4c-1.2-0.3-2.4-0.5-3.6-0.5\n  c-0.5,0-1.5-0.1-2.2-0.2c-3.9-0.5-3.7-0.5-6.5-0.5c-1.7,0-3.1,0.1-3.8,0.1c-0.6,0.1-2.1,0.2-3.3,0.4c-1.9,0.2-2.3,0.3-3.4,0.6\n  c-0.7,0.2-1.7,0.5-2.3,0.6c-1.3,0.2-1.3,0.2-2.7,0.8c-1.3,0.5-3,1.4-5.7,2.9c-1.8,1-2,1.2-2.8,1.9c-1.7,1.6-3.2,4.1-4,6.2\n  c-0.2,0.6-0.4,1.2-0.5,1.3C26.1,47,26,47.2,26,47.4c0,0.2-0.1,0.3-0.4,0.5c-0.2,0.2-0.5,0.2-0.7,0.2c-0.4,0-0.6-0.2-1.1-0.9\n  c-0.2-0.3-0.2-0.3-0.1-1.3c0.1-1.1,0.6-2.7,1.2-4.1c1-2.3,3-4.4,6.5-6.7c1.3-0.9,1.5-1,3.4-1.9c1.4-0.7,4.5-1.8,5.4-2\n  c0.4-0.1,1.9-0.4,3.5-0.7l2.8-0.6h12l2.8,0.4c1.5,0.2,3.1,0.4,3.6,0.4c0.4,0.1,1.5,0.3,2.3,0.5c2.4,0.6,3.4,0.8,4.6,1.1\n  c1.6,0.3,4,1.1,5.6,1.8c0.8,0.3,2.1,0.8,2.8,1.1c1,0.4,1.6,0.6,2.3,1.1c0.9,0.6,2.4,1.6,2.4,1.7C84.7,38,84.4,37.9,83,37.3" }),
        React__default['default'].createElement("path", { "clip-path": "url(#SVGID_2_)", fill: "#B98E5E", d: "M76.6,79c-0.7-0.1-2-0.1-2.8-0.1c-1.2,0-1.8-0.1-2.9-0.2\n  c-0.8-0.1-2.1-0.3-3-0.3c-1.2-0.1-2.1-0.2-3.4-0.5c-1-0.2-2.4-0.5-3.2-0.6c-0.9-0.2-1.9-0.4-2.7-0.6c-0.7-0.2-2.1-0.7-3.1-1\n  c-1.7-0.5-4.2-1.5-6.7-2.5c-0.6-0.2-1.7-0.8-2.6-1.4c-0.8-0.5-2.1-1.2-2.8-1.6c-2.9-1.6-8.9-5.7-11.4-7.9c-0.9-0.8-2.1-1.8-2.7-2.3\n  c-1-0.9-1.2-1-2.1-2.3c-0.9-1.3-1-1.4-1.4-2.7c-0.3-0.7-0.5-1.4-0.5-1.6s-0.2-0.6-0.3-0.9l-0.3-0.7l0-1.6c0-1.9,0-2.1,0.4-2.1\n  c0.1,0,0.4-0.1,0.6-0.2c0.3-0.2,0.4-0.3,0.4-0.5c0-0.1,0-0.3,0.1-0.4c0-0.1,0.3-0.7,0.5-1.3c0.8-2.2,2.3-4.6,4-6.2\n  c0.8-0.7,1-0.9,2.8-1.9c2.8-1.6,4.4-2.4,5.7-2.9c1.4-0.6,1.4-0.6,2.7-0.8c0.6-0.1,1.6-0.3,2.3-0.6c1.1-0.3,1.5-0.4,3.4-0.6\n  c1.2-0.1,2.7-0.3,3.3-0.4c0.7-0.1,2.1-0.1,3.8-0.1c2.8,0,2.6,0,6.5,0.5c0.7,0.1,1.7,0.2,2.2,0.2c1.2,0,2.5,0.2,3.6,0.5\n  c0.5,0.1,1.3,0.3,1.7,0.4c2.1,0.3,4.3,0.6,5.1,0.8c0.4,0.1,1.2,0.3,1.6,0.3c1.5,0.2,2.4,0.5,4.2,1.4c1,0.5,2.2,1.1,2.8,1.5\n  c0.6,0.3,1.5,0.8,2,1c1.4,0.6,2.6,1.2,3.4,1.8c0.4,0.3,1,0.6,1.4,0.8c0.4,0.2,0.9,0.5,1.2,0.6c0.4,0.2,0.6,0.3,0.9,0.3\n  c0.3,0,0.8,0.1,2,0.6c1.5,0.6,1.7,0.6,3,1.5c1.9,1.3,3.4,2.6,5.2,4.7c1.2,1.4,3.2,4.6,4,6.5c0.4,0.8,0.4,1,0.4,1.7\n  c0,0.7-0.1,1-0.6,2.8c-0.8,2.6-1.8,5.1-3.2,7.6c-0.9,1.6-1.1,2-2.2,3.3c-1.5,1.8-2.9,3.1-4.9,4.6c-1.2,0.9-1.4,1-2.7,1.6\n  C91,77.7,89,78.3,88,78.5c-0.3,0-1.9,0.2-3.6,0.4C80.9,79.2,79.1,79.2,76.6,79 M57.3,66.3c0.2-0.5,0.7-2.8,0.7-3.2\n  c0-0.2,0-0.2-0.4-0.2c-0.5,0-0.6,0.1-1.3,1.2c-0.5,0.7-0.7,1.4-0.7,1.9c0,0.3,0,0.3,0.2,0.5c0.1,0.1,0.3,0.2,0.4,0.3\n  c0.1,0.1,0.2,0.1,0.5,0.1C57,66.8,57.1,66.8,57.3,66.3 M61.5,65.8l0.4-0.2V65c0-0.4-0.1-0.9-0.3-1.5c-0.1-0.5-0.3-1-0.3-1.1\n  c0-0.2-0.3-0.2-0.3,0c0,0.1-0.1,0.2-0.2,0.3c-0.3,0.5-0.4,0.8-0.5,1.5c0,0.4-0.1,0.8-0.1,1c0,0.2,0,0.4,0.1,0.6\n  c0.1,0.3,0.2,0.3,0.5,0.3C61,66.1,61.2,66,61.5,65.8 M70.1,65.7c0.1-0.4,0.1-0.4-0.1-1c-0.1-0.3-0.5-1-0.7-1.5l-0.5-0.9h-0.4\n  c-0.2,0-0.4,0.1-0.5,0.1c-0.1,0.1,0.2,1.6,0.6,2.8c0.3,0.8,0.4,0.9,1,0.9C69.9,66.1,69.9,66.1,70.1,65.7 M65.8,65.6\n  c0.3-0.3,0.3-0.5,0.2-0.8c-0.1-0.1-0.1-0.4-0.1-0.7c0-1-0.5-1.8-1-1.8c-0.3,0-0.4,0.2-0.4,1.4c0,1.1,0,1.3,0.2,1.7\n  c0.2,0.4,0.2,0.5,0.6,0.5C65.5,65.8,65.6,65.7,65.8,65.6 M74,64.1c0.1-0.2,0.2-0.4,0.2-0.7c0-0.4,0-0.5-0.3-0.6\n  c-0.2-0.1-0.6-0.4-0.9-0.7c-0.4-0.4-0.8-0.6-1.2-0.8c-0.4-0.2-0.6-0.3-0.6-0.5c-0.1-0.2-0.1-0.2-0.5-0.2h-0.4v0.5\n  c0,0.6,0.1,0.8,0.8,1.6c1,1.2,1.4,1.6,1.8,1.6C73.6,64.4,73.8,64.3,74,64.1 M54.2,62.5c0.6-0.5,1.3-1.2,1.5-1.7\n  c0.2-0.3,0.2-0.3,0-0.5c-0.3-0.3-0.8-0.2-1.4,0.2c-0.7,0.4-1.6,1.3-1.6,1.5c0,0.1,0.1,0.2,0.1,0.2c0.1,0.1,0.2,0.2,0.2,0.4\n  C53.3,63,53.6,63,54.2,62.5 M75.3,59.9c0.2-0.6,0.2-0.8,0.1-1c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1-0.3-0.2-0.7-0.3\n  c-0.4-0.1-0.8-0.3-1-0.5c-0.3-0.2-0.5-0.2-1.1-0.2h-0.7v0.3c0,0.2,0,0.3,0.1,0.3c0.1,0,0.3,0.1,0.5,0.3c0.5,0.4,1,0.8,1.5,1.3\n  c0.4,0.3,0.5,0.3,0.9,0.3l0.5,0L75.3,59.9z M52.6,59.7c0.2-0.1,0.7-0.5,0.9-0.7c0.3-0.2,0.6-0.5,0.7-0.6c0.2-0.1,0.2-0.1-0.1-0.3\n  c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2,0-2,0.6-2.2,0.8c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1-0.1,0.2-0.1,0.2c-0.1,0-0.1,0.1-0.1,0.1\n  c0,0.1,0.8,0.7,1,0.7C52.1,59.9,52.4,59.8,52.6,59.7 M77.2,57.5c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.1-0.1,0.1-0.5\n  c0-0.5-0.1-0.7-0.3-0.7c-0.1,0-0.3-0.1-0.6-0.3c-0.5-0.3-0.6-0.4-1.6-0.7c-0.5-0.1-0.7-0.2-0.8-0.4c-0.1-0.2-0.2-0.2-0.5,0.1\n  l-0.3,0.3l0.2,0.4c0.3,0.5,0.9,0.9,2.1,1.6C76.9,57.6,77,57.7,77.2,57.5 M50.7,56.8c0.1-0.1,0.4-0.3,0.6-0.4c0.7-0.2,1-0.4,1.1-0.6\n  c0.1-0.3,0.1-0.3-0.2-0.4c-0.4-0.1-1.5-0.1-2.1,0l-0.5,0.1l0,0.6c0,0.7,0.1,0.9,0.5,0.9C50.3,57.1,50.5,57,50.7,56.8 M47.4,55.4\n  c0.2-0.1,0.6-0.4,0.8-0.5c0.9-0.4,1.2-0.7,1.2-1c0-0.2-0.1-0.3-0.4-0.4c-0.3-0.1-0.4-0.1-0.7,0c-0.2,0.1-0.5,0.1-0.8,0.1\n  c-0.4,0-0.6,0.1-0.9,0.3c-0.2,0.1-0.4,0.3-0.5,0.3c0,0-0.1,0.3-0.1,0.6c0,0.5,0,0.6,0.2,0.6c0.1,0,0.2,0.1,0.4,0.1\n  C46.9,55.7,46.9,55.7,47.4,55.4 M79.8,52.8c0.1-0.1,0.2-0.1,0.4-0.1h0.3v-0.6v-0.6l-0.4-0.2c-0.4-0.2-0.4-0.2-1.1-0.2\n  c-0.9,0.1-2.2,0.5-3,0.9c-0.7,0.5-0.7,0.5,0.2,0.8C76.9,53,79.7,53,79.8,52.8 M48.3,52.2c0.3-0.1,0.6-0.3,0.8-0.4l0.3-0.2l-0.2-0.3\n  c-0.4-0.4-0.6-0.5-1.6-0.5c-0.7,0-1,0-1.2,0.2c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0,0.4,0.1,0.4c0.1,0,0.1,0.2,0.1,0.3v0.3H47\n  C47.7,52.4,47.9,52.4,48.3,52.2 M75.8,50.3c0.2-0.1,0.6-0.3,1-0.4c0.8-0.2,2-0.7,2-0.9c0-0.1,0.1-0.2,0.1-0.3\n  c0.1-0.1,0.1-0.3,0.1-0.4c0-0.3-0.5-0.6-0.9-0.6c-0.4,0-1.5,0.8-2.5,1.7c-0.6,0.6-0.7,0.7-0.7,0.9c0,0.2,0,0.2,0.3,0.2\n  C75.3,50.5,75.6,50.4,75.8,50.3 M48,49.4c0.4-0.2,0.5-0.4,0.2-0.5c-0.1-0.1-0.5-0.4-0.9-0.6c-0.5-0.4-0.7-0.5-1.5-0.7\n  c-1.3-0.3-1.4-0.3-1.8,0.1c-0.2,0.2-0.4,0.4-0.4,0.5c0,0.1,0.2,0.3,0.4,0.5c0.4,0.4,0.4,0.4,1.6,0.6c0.3,0,0.6,0.1,0.7,0.2\n  C46.6,49.6,47.7,49.6,48,49.4 M73.7,48.7c0.4-0.2,1-0.5,1.3-0.8c0.3-0.3,0.6-0.5,0.7-0.5c0,0,0.2-0.1,0.4-0.3\n  c0.4-0.4,0.4-0.7,0-0.9c-0.4-0.3-0.9-0.5-1-0.5c-0.1,0-0.3,0.3-0.5,0.6c-0.2,0.3-0.6,0.7-0.8,1c-0.7,0.7-1.1,1.3-1.1,1.5\n  C72.7,49.1,72.9,49.1,73.7,48.7 M70.8,47.9c0.2-0.1,0.6-0.4,1-0.8c0.4-0.4,0.9-0.8,1.2-0.9l0.5-0.3l0-0.6c0-0.5,0-0.6-0.2-0.8\n  c-0.2-0.2-0.3-0.3-0.7-0.3c-0.4,0-0.4,0-0.8,0.6c-0.9,1.2-1.4,2.3-1.4,3C70.4,48.1,70.4,48.1,70.8,47.9 M50.7,46.9\n  c0.1-0.2,0.1-0.3-0.2-0.8c-0.1-0.3-0.6-1-1-1.5c-0.8-1-0.8-1-1.2-1c-0.3,0-0.5,0-0.8,0.2c-0.3,0.2-0.4,0.3-0.4,0.6\n  c0,0.3,0.1,0.4,0.2,0.6c0.1,0.1,0.3,0.2,0.4,0.2c0.1,0,0.2,0.1,0.2,0.3c0.1,0.1,0.3,0.3,0.4,0.5c0.2,0.1,0.5,0.4,0.7,0.6\n  c0.4,0.3,0.8,0.6,1.2,0.6C50.6,47.1,50.7,47,50.7,46.9 M68.9,46.7c0.2-0.2,0.5-0.6,0.7-0.8c0.1-0.2,0.3-0.5,0.5-0.6\n  c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1,0.1-0.3,0.2-0.6c0.2-0.4,0.2-0.5,0.1-0.7c-0.2-0.4-0.3-0.5-0.8-0.5c-0.4,0-0.4,0-0.7,0.5\n  c-0.3,0.5-0.5,0.9-0.9,2.3c-0.1,0.6-0.2,0.7-0.1,0.8c0.1,0,0.1,0.1,0.1,0.2C68.2,47.2,68.5,47.1,68.9,46.7 M54.1,46.7\n  c0-0.1-0.1-0.2-0.2-0.3c-0.2-0.2-0.2-0.3-0.2-0.7c0-0.4-0.1-0.6-0.2-0.8c-0.1-0.1-0.3-0.5-0.4-0.8c-0.6-1.1-1.1-1.4-1.5-0.9\n  c-0.3,0.3-0.3,0.9,0,1.3c0.1,0.1,0.4,0.6,0.7,1c0.3,0.4,0.7,0.9,0.8,1.1c0.3,0.3,0.3,0.3,0.7,0.3C53.9,46.8,54.1,46.8,54.1,46.7\n   M56.5,45.8c-0.1-0.2-0.2-0.8-0.4-1.3c-0.1-0.6-0.3-1-0.3-1c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.2-0.9-0.2-1,0c-0.2,0.2-0.1,0.8,0.1,1.2\n  c0.5,1,1.2,1.6,1.7,1.6h0.3L56.5,45.8z M59,45.8c0.2-0.1,0.2-0.1,0.2-0.5c0-0.2-0.1-0.8-0.2-1.2c-0.1-0.4-0.3-1-0.3-1.2\n  c-0.1-0.6-0.2-0.7-0.4-0.8c-0.3-0.1-1,0-1.4,0.2c-0.3,0.2-0.3,0.6,0,0.9c0.1,0.1,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.5,0.3,0.7\n  c0.1,0.2,1.2,1.4,1.3,1.4C58.7,45.9,58.9,45.8,59,45.8 M65,45.6c0.3-0.4,0.4-0.4,0.5-1.2c0.2-0.6,0.5-1.4,0.9-2.1\n  c0.2-0.4,0.2-0.5-0.4-0.8c-0.6-0.3-0.8-0.3-1.2-0.1c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.1-0.1,0.7-0.2,1.2c-0.3,1.1-0.3,1.4-0.1,2.3\n  C64.5,46,64.6,46.1,65,45.6 M61.2,44.8c0.1-0.2,0.2-3.5,0-4.2c-0.1-0.5-0.2-0.6-0.4-0.8c-0.4-0.3-0.6-0.3-0.9,0\n  c-0.1,0.1-0.3,0.2-0.3,0.2c-0.1,0-0.1,1.2,0,1.9c0.1,0.3,0.2,0.8,0.3,1.2c0.2,0.6,0.3,0.8,0.6,1.2c0.2,0.2,0.4,0.4,0.4,0.5\n  C60.9,45,61.1,45,61.2,44.8" }),
        React__default['default'].createElement("path", { "clip-path": "url(#SVGID_2_)", fill: "#B98E5E", d: "M20.6,65.6c-0.5-1.4-1.5-4.9-1.5-5.9c0-0.3-0.1-0.6-0.1-0.8\n  c0-0.2-0.1-0.6-0.1-1c-0.2-1.3-0.2-5.1,0-5.9c0.1-0.4,0.2-1,0.2-1.3c0-0.3,0.2-0.9,0.3-1.4c0.1-0.5,0.3-1.2,0.3-1.6\n  c0.1-0.4,0.3-1.2,0.5-1.8c0.2-0.6,0.4-1.3,0.5-1.4c0-0.2,0.1-0.4,0.2-0.5c0-0.1,0.4-0.9,0.7-1.7c0.9-2.3,3-5.9,4.1-7\n  c0.6-0.6,1.6-1.3,1.6-1.1c0,0.1,0.1,0.1,0.4,0c0.2-0.1,0.6-0.2,0.8-0.3c0.2-0.1,0.4-0.2,0.5-0.2c0.1,0,0.3-0.1,0.6-0.3\n  c0.2-0.2,0.7-0.4,0.9-0.5c0.3-0.1,1.1-0.5,1.9-0.9c0.8-0.4,1.7-0.8,2.1-0.9c0.4-0.1,1.1-0.4,1.5-0.6c0.4-0.2,1.1-0.4,1.4-0.5\n  c0.3-0.1,0.8-0.2,0.9-0.3c0.1-0.1,0.6-0.2,1.1-0.3c0.5-0.1,0.9-0.2,1-0.2c0.5-0.1,0.9-0.2,1-0.2c0.2,0-1.4,0.5-2.5,0.8\n  c-0.6,0.2-1.5,0.5-2.1,0.7c-0.6,0.2-1.4,0.6-2,0.8c-0.6,0.2-1.4,0.6-2,0.9c-0.5,0.3-1.3,0.7-1.8,1c-1,0.5-2,1.2-3.9,2.8\n  c-1.7,1.4-1.9,1.6-3.1,4c-1.4,2.5-2,4.5-2.8,8.3c-0.5,2.3-0.5,2.3-0.6,4.5c-0.1,1.2-0.1,3.7-0.1,5.6c0,2.9,0,3.7,0.2,5.3\n  c0.1,1,0.2,1.9,0.1,1.9S20.7,65.7,20.6,65.6" }),
        React__default['default'].createElement("path", { "clip-path": "url(#SVGID_2_)", fill: "#80CC33", d: "M76.6,79c-0.7-0.1-2-0.1-2.8-0.1c-1.2,0-1.8-0.1-2.9-0.2\n  c-0.8-0.1-2.1-0.3-3-0.3c-1.2-0.1-2.1-0.2-3.4-0.5c-1-0.2-2.4-0.5-3.2-0.6c-0.9-0.2-1.9-0.4-2.7-0.6c-0.7-0.2-2.1-0.7-3.1-1\n  c-1.7-0.5-4.2-1.5-6.7-2.5c-0.6-0.2-1.7-0.8-2.6-1.4c-0.8-0.5-2.1-1.2-2.8-1.6c-2.9-1.6-8.9-5.7-11.4-7.9c-0.9-0.8-2.1-1.8-2.7-2.3\n  c-1-0.9-1.2-1-2.1-2.3c-0.9-1.3-1-1.4-1.4-2.7c-0.3-0.7-0.5-1.4-0.5-1.6s-0.2-0.6-0.3-0.9l-0.3-0.7v-1.5c0-1.8,0.1-2.2,0.4-2.2\n  c0.1,0,0.4-0.1,0.6-0.2c0.3-0.2,0.4-0.3,0.4-0.5c0-0.1,0-0.3,0.1-0.4c0-0.1,0.3-0.7,0.5-1.3c0.8-2.2,2.3-4.6,4-6.2\n  c0.8-0.7,1-0.9,2.8-1.9c3.9-2.2,6.4-3.4,7.6-3.6c1.6-0.3,2.1-0.4,3.6-0.8c0.6-0.2,1.3-0.3,3-0.5c1.2-0.1,2.7-0.3,3.3-0.4\n  c0.7-0.1,2.1-0.1,3.8-0.1c2.8,0,2.6,0,6.5,0.5c0.7,0.1,1.7,0.2,2.2,0.2c1.2,0,2.5,0.2,3.6,0.5c0.5,0.1,1.4,0.3,2,0.4\n  c0.6,0.1,1.3,0.2,1.4,0.2c0.1,0,0.8,0.1,1.4,0.2c0.6,0.1,1.5,0.3,2,0.4c0.4,0.1,1.2,0.3,1.6,0.4c1.4,0.2,2.5,0.6,4.4,1.6\n  c1,0.5,2.2,1.2,2.8,1.5c0.5,0.3,1.3,0.7,1.7,0.9c1.2,0.5,2.5,1.2,3.4,1.8c0.5,0.3,1.2,0.8,1.6,1c0.4,0.2,0.9,0.5,1.1,0.6\n  c0.2,0.1,0.5,0.2,0.8,0.2c0.3,0,0.8,0.1,2.1,0.6c1.5,0.6,1.7,0.6,3,1.5c2.7,1.8,5.3,4.5,6.9,7.1c1.2,1.9,1.8,3.1,2.3,4.2\n  c0.4,0.8,0.4,1,0.4,1.7c0,0.7-0.1,1-0.6,2.8c-0.8,2.6-1.8,5.1-3.2,7.6c-0.9,1.6-1.1,2-2.2,3.3c-1.5,1.8-2.9,3.1-4.9,4.6\n  c-1.2,0.9-1.4,1-2.7,1.6C91,77.7,89,78.3,88,78.5c-0.3,0-1.9,0.2-3.6,0.4C80.9,79.2,79.1,79.2,76.6,79 M57.3,66.3\n  c0.2-0.5,0.7-2.8,0.7-3.2c0-0.2,0-0.2-0.4-0.2c-0.5,0-0.6,0.1-1.3,1.2c-0.5,0.7-0.7,1.4-0.7,1.9c0,0.3,0,0.3,0.2,0.5\n  c0.1,0.1,0.3,0.2,0.4,0.3c0.1,0.1,0.2,0.1,0.5,0.1C57,66.8,57.1,66.8,57.3,66.3 M61.5,65.8l0.4-0.2V65c0-0.4-0.1-0.9-0.3-1.5\n  c-0.1-0.5-0.3-1-0.3-1.1c0-0.2-0.3-0.2-0.3,0c0,0.1-0.1,0.2-0.2,0.3c-0.3,0.5-0.4,0.8-0.5,1.5c0,0.4-0.1,0.8-0.1,1\n  c0,0.2,0,0.4,0.1,0.6c0.1,0.3,0.2,0.3,0.5,0.3C61,66.1,61.2,66,61.5,65.8 M70.1,65.7c0.1-0.4,0.1-0.4-0.1-1c-0.1-0.3-0.5-1-0.7-1.5\n  l-0.5-0.9h-0.4c-0.2,0-0.4,0.1-0.5,0.1c-0.1,0.1,0.2,1.6,0.6,2.8c0.3,0.8,0.4,0.9,1,0.9C69.9,66.1,69.9,66.1,70.1,65.7 M65.8,65.6\n  c0.3-0.3,0.3-0.5,0.2-0.8c-0.1-0.1-0.1-0.4-0.1-0.7c0-1-0.5-1.8-1-1.8c-0.3,0-0.4,0.2-0.4,1.4c0,1.1,0,1.3,0.2,1.7\n  c0.2,0.4,0.2,0.5,0.6,0.5C65.5,65.8,65.6,65.7,65.8,65.6 M74,64.1c0.1-0.2,0.2-0.4,0.2-0.7c0-0.4,0-0.5-0.3-0.6\n  c-0.2-0.1-0.6-0.4-0.9-0.7c-0.4-0.4-0.8-0.6-1.2-0.8c-0.4-0.2-0.6-0.3-0.6-0.5c-0.1-0.2-0.1-0.2-0.5-0.2h-0.4v0.5\n  c0,0.6,0.1,0.8,0.8,1.6c1,1.2,1.4,1.6,1.8,1.6C73.6,64.4,73.8,64.3,74,64.1 M54.2,62.5c0.6-0.5,1.3-1.2,1.5-1.7\n  c0.2-0.3,0.2-0.3,0-0.5c-0.3-0.3-0.8-0.2-1.4,0.2c-0.7,0.4-1.6,1.3-1.6,1.5c0,0.1,0.1,0.2,0.1,0.2c0.1,0.1,0.2,0.2,0.2,0.4\n  C53.3,63,53.6,63,54.2,62.5 M75.3,59.9c0.2-0.6,0.2-0.8,0.1-1c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1-0.3-0.2-0.7-0.3\n  c-0.4-0.1-0.8-0.3-1.1-0.5c-0.4-0.3-0.5-0.3-1.1-0.3h-0.7v0.4c0,0.2,0,0.4,0.1,0.4c0.1,0,0.3,0.1,0.5,0.3c0.5,0.4,1,0.8,1.5,1.3\n  c0.4,0.3,0.5,0.3,0.9,0.3l0.5,0L75.3,59.9z M52.6,59.7c0.2-0.1,0.7-0.5,0.9-0.7c0.3-0.2,0.6-0.5,0.7-0.6c0.2-0.1,0.2-0.1-0.1-0.3\n  c-0.1-0.1-0.3-0.2-0.4-0.2c-0.2,0-2,0.6-2.2,0.8c-0.1,0.1-0.2,0.2-0.2,0.3c0,0.1-0.1,0.2-0.1,0.2c-0.1,0-0.1,0.1-0.1,0.1\n  c0,0.1,0.8,0.7,1,0.7C52.1,59.9,52.4,59.8,52.6,59.7 M77.2,57.5c0.1-0.1,0.2-0.1,0.2-0.1c0.1,0,0.1-0.1,0.1-0.5\n  c0-0.5-0.1-0.7-0.3-0.7c-0.1,0-0.3-0.1-0.6-0.3c-0.5-0.3-0.6-0.4-1.6-0.7c-0.5-0.1-0.7-0.2-0.8-0.4c-0.1-0.2-0.2-0.2-0.5,0.1\n  l-0.3,0.3l0.2,0.4c0.3,0.5,0.9,0.9,2.1,1.6C76.9,57.6,77,57.7,77.2,57.5 M50.7,56.8c0.1-0.1,0.4-0.3,0.6-0.4c0.7-0.2,1-0.4,1.1-0.6\n  c0.1-0.3,0.1-0.3-0.2-0.4c-0.4-0.1-1.5-0.1-2.1,0l-0.5,0.1l0,0.6c0,0.7,0.1,0.9,0.5,0.9C50.3,57.1,50.5,57,50.7,56.8 M47.4,55.4\n  c0.2-0.1,0.6-0.4,0.8-0.5c0.9-0.4,1.2-0.7,1.2-1c0-0.2-0.1-0.3-0.4-0.4c-0.3-0.1-0.4-0.1-0.7,0c-0.2,0.1-0.5,0.1-0.8,0.1\n  c-0.4,0-0.6,0.1-0.9,0.3c-0.2,0.1-0.4,0.3-0.5,0.3c0,0-0.1,0.3-0.1,0.6c0,0.5,0,0.6,0.2,0.6c0.1,0,0.2,0.1,0.4,0.1\n  C46.9,55.7,46.9,55.7,47.4,55.4 M79.8,52.8c0.1-0.1,0.2-0.1,0.4-0.1h0.3v-0.6v-0.6l-0.4-0.2c-0.4-0.2-0.4-0.2-1.1-0.2\n  c-0.9,0.1-2.2,0.5-3,0.9c-0.7,0.5-0.7,0.5,0.2,0.8C76.9,53,79.7,53,79.8,52.8 M48.3,52.2c0.3-0.1,0.6-0.3,0.8-0.4l0.3-0.2l-0.2-0.3\n  c-0.4-0.4-0.6-0.5-1.6-0.5c-0.7,0-1,0-1.2,0.2c-0.2,0.1-0.3,0.2-0.3,0.5c0,0.2,0,0.4,0.1,0.4c0.1,0,0.1,0.2,0.1,0.3v0.3H47\n  C47.7,52.4,47.9,52.4,48.3,52.2 M75.8,50.3c0.2-0.1,0.6-0.3,1-0.4c0.8-0.2,2-0.7,2-0.9c0-0.1,0.1-0.2,0.1-0.3\n  c0.1-0.1,0.1-0.3,0.1-0.4c0-0.3-0.6-0.6-0.9-0.6c-0.6,0-3.2,2.1-3.2,2.6c0,0.2,0,0.2,0.3,0.2C75.3,50.5,75.6,50.4,75.8,50.3\n   M48,49.4c0.4-0.2,0.5-0.4,0.2-0.5c-0.1-0.1-0.5-0.4-0.9-0.6c-0.5-0.4-0.7-0.5-1.5-0.7c-1.3-0.3-1.4-0.3-1.8,0.1\n  c-0.2,0.2-0.4,0.4-0.4,0.5c0,0.1,0.2,0.3,0.4,0.5c0.4,0.4,0.4,0.4,1.6,0.6c0.3,0,0.6,0.1,0.7,0.2C46.6,49.6,47.7,49.6,48,49.4\n   M73.7,48.7c0.4-0.2,1-0.5,1.3-0.8c0.3-0.3,0.6-0.5,0.7-0.5c0,0,0.2-0.1,0.4-0.3c0.4-0.4,0.4-0.7,0-0.9c-0.4-0.3-0.9-0.5-1-0.5\n  c-0.1,0-0.3,0.3-0.5,0.6c-0.2,0.3-0.6,0.7-0.8,1c-0.7,0.7-1.1,1.3-1.1,1.5C72.7,49.1,72.9,49.1,73.7,48.7 M70.8,47.9\n  c0.2-0.1,0.6-0.4,1-0.8c0.4-0.4,0.9-0.8,1.2-0.9l0.5-0.3l0-0.6c0-0.5,0-0.6-0.2-0.8c-0.2-0.2-0.3-0.3-0.7-0.3c-0.4,0-0.4,0-0.8,0.6\n  c-0.9,1.2-1.4,2.3-1.4,3C70.4,48.1,70.4,48.1,70.8,47.9 M50.7,46.9c0.1-0.2,0.1-0.3-0.2-0.8c-0.1-0.3-0.6-1-1-1.5\n  c-0.8-1-0.8-1-1.2-1c-0.3,0-0.5,0-0.8,0.2c-0.3,0.2-0.4,0.3-0.4,0.6c0,0.3,0.1,0.4,0.2,0.6c0.1,0.1,0.3,0.2,0.4,0.2\n  c0.1,0,0.2,0.1,0.2,0.3c0.1,0.1,0.3,0.3,0.4,0.5c0.2,0.1,0.5,0.4,0.8,0.6c0.4,0.4,0.8,0.5,1.2,0.6C50.6,47.1,50.7,47,50.7,46.9\n   M68.9,46.7c0.2-0.2,0.5-0.6,0.7-0.8c0.1-0.2,0.3-0.5,0.5-0.6c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1,0.1-0.3,0.2-0.6\n  c0.2-0.4,0.2-0.5,0.1-0.7c-0.2-0.4-0.3-0.5-0.8-0.5c-0.4,0-0.4,0-0.7,0.5c-0.3,0.5-0.5,0.9-0.9,2.3c-0.1,0.6-0.2,0.7-0.1,0.8\n  c0.1,0,0.1,0.1,0.1,0.2C68.2,47.2,68.5,47.1,68.9,46.7 M54.1,46.7c0-0.1-0.1-0.2-0.2-0.3c-0.2-0.2-0.2-0.3-0.2-0.7\n  c0-0.4-0.1-0.6-0.2-0.8c-0.1-0.1-0.3-0.5-0.4-0.8c-0.6-1.1-1.1-1.4-1.5-0.9c-0.3,0.3-0.3,0.9,0,1.3c0.1,0.1,0.4,0.6,0.7,1\n  c0.3,0.4,0.7,0.9,0.8,1.1c0.3,0.3,0.3,0.3,0.7,0.3C53.9,46.8,54.1,46.8,54.1,46.7 M56.5,45.9c-0.1-0.2-0.4-1.4-0.6-2.1\n  c0-0.1-0.1-0.2-0.2-0.2c-0.1,0-0.2-0.1-0.2-0.1c-0.1-0.2-0.9-0.2-1,0c-0.2,0.2-0.1,0.8,0.1,1.2c0.5,1,1.2,1.6,1.7,1.6\n  C56.6,46.1,56.6,46.1,56.5,45.9 M59,45.8c0.2-0.1,0.2-0.1,0.2-0.5c0-0.2-0.1-0.8-0.2-1.2c-0.1-0.4-0.3-1-0.3-1.2\n  c-0.1-0.6-0.2-0.7-0.4-0.8c-0.3-0.1-1,0-1.4,0.2c-0.3,0.2-0.3,0.6,0,0.9c0.1,0.1,0.3,0.4,0.4,0.6c0.1,0.2,0.2,0.5,0.3,0.7\n  c0.1,0.2,1.2,1.4,1.3,1.4C58.7,45.9,58.9,45.8,59,45.8 M65,45.6c0.3-0.4,0.4-0.4,0.5-1.2c0.2-0.6,0.5-1.4,0.9-2.1\n  c0.2-0.4,0.2-0.5-0.4-0.8c-0.6-0.3-0.8-0.3-1.2-0.1c-0.2,0.1-0.3,0.2-0.3,0.4c0,0.1-0.1,0.7-0.2,1.2c-0.3,1-0.3,1.5-0.2,2.1\n  c0.1,0.2,0.1,0.5,0.1,0.6C64.5,46,64.7,46,65,45.6 M61.2,44.8c0.1-0.2,0.2-3.5,0-4.2c-0.1-0.5-0.2-0.6-0.4-0.8\n  c-0.4-0.3-0.6-0.3-0.9,0c-0.1,0.1-0.3,0.2-0.3,0.2c-0.1,0-0.1,1.2,0,1.9c0.1,0.3,0.2,0.8,0.3,1.2c0.2,0.6,0.3,0.8,0.6,1.2\n  c0.2,0.2,0.4,0.4,0.4,0.5C60.9,45,61.1,45,61.2,44.8" }),
        React__default['default'].createElement("path", { "clip-path": "url(#SVGID_2_)", fill: "#DBE6B7", d: "M70.9,74.1c-1.1-0.1-3.3-0.3-4.9-0.5c-2-0.2-3.2-0.4-4-0.5\n  c-0.6-0.1-1.6-0.3-2.3-0.4c-1.3-0.1-2.3-0.4-5.7-1.4c-2.2-0.6-2.3-0.7-4.2-1.6c-1.1-0.5-2.4-1.2-3-1.5c-1.5-0.8-6.9-3.9-7.8-4.4\n  c-1.6-1-5.5-3.6-6.2-4.1c-0.5-0.3-1.2-0.8-1.7-1.1c-0.5-0.3-1.4-0.9-2-1.4c-1-0.9-1.2-1-2-2.1c-0.7-1-0.9-1.3-1.3-2.5l-0.5-1.4l0,1\n  v1L25,52.5l-0.3-0.7v-1.5c0-1.8,0.1-2.2,0.4-2.2c0.1,0,0.4-0.1,0.6-0.2c0.3-0.2,0.4-0.3,0.4-0.5c0-0.1,0-0.3,0.1-0.4\n  c0-0.1,0.3-0.7,0.5-1.3c0.8-2.2,2.3-4.6,4-6.2c0.8-0.7,1-0.9,2.8-1.9c3.9-2.2,6.4-3.4,7.6-3.6c1.6-0.3,2.1-0.4,3.6-0.8\n  c0.6-0.2,1.3-0.3,3-0.5c1.2-0.1,2.7-0.3,3.3-0.4c0.7-0.1,2.1-0.1,3.8-0.1c2.8,0,2.6,0,6.5,0.5c0.7,0.1,1.7,0.2,2.2,0.2\n  c1.2,0,2.5,0.2,3.6,0.5c0.5,0.1,1.4,0.3,2,0.4c0.6,0.1,1.3,0.2,1.4,0.2c0.1,0,0.8,0.1,1.4,0.2c0.6,0.1,1.5,0.3,2,0.4\n  c0.4,0.1,1.2,0.3,1.6,0.4c1.4,0.2,2.5,0.6,4.4,1.6c1,0.5,2.2,1.2,2.8,1.5c0.5,0.3,1.3,0.7,1.7,0.9c1.2,0.5,2.5,1.2,3.4,1.8\n  c0.5,0.3,1.2,0.8,1.6,1c1.1,0.6,1.4,0.8,1.3,0.9c-0.1,0.1-0.1,0.5,0.1,0.7c0.1,0.1,0.6,0.4,1.2,0.8c0.6,0.4,1.8,1.2,2.7,1.9\n  c1.4,1.1,1.9,1.5,3.3,2.9c1.5,1.5,1.7,1.8,2.3,2.8c1.1,1.8,1.6,3,1.6,4.2c0,0.3-0.1,1-0.1,1.6c-0.1,1-0.4,2.1-1.5,4.9\n  c-0.5,1.3-1.6,3.4-2.7,4.9c-0.8,1.1-1.1,1.5-2.1,2.4c-1,0.9-1.4,1.2-2.6,1.9c-2.1,1.2-2.9,1.6-4.1,1.7c-0.6,0.1-1.5,0.2-2,0.4\n  c-0.6,0.2-1.8,0.3-3.2,0.5c-2,0.2-2.5,0.2-6.4,0.3C73.3,74.3,72.8,74.3,70.9,74.1 M77,73.1c0.8-0.1,1-0.1,1.5-0.4\n  c0.4-0.2,0.7-0.3,0.7-0.4c0,0-0.3-0.5-0.7-1.1c-0.4-0.6-0.9-1.4-1.1-1.7c-0.2-0.4-1-1.4-1.8-2.3c-0.8-0.9-1.6-1.9-1.8-2.3l-0.4-0.6\n  h0.3c0.3,0,0.6-0.4,0.6-0.7c0-0.2,0.1-0.1,0.6,0.4c0.3,0.3,0.9,0.9,1.3,1.2c0.9,0.8,3.6,3.9,4.3,5c0.3,0.5,0.8,1.1,1,1.4l0.4,0.5\n  l1.2,0.1c0.7,0,1.7,0.1,2.3,0.1c0.9,0,1.2,0,2.1-0.2c0.9-0.2,1.1-0.3,1.7-0.7c0.4-0.3,0.9-0.7,1.1-0.9l0.4-0.4l-1.7-1\n  c-2.2-1.3-4-2.5-7.7-5c-2.5-1.7-3.5-2.4-5.9-4.1c-0.2-0.1-0.2-0.1,0-0.4l0.1-0.3l1.2,0.4c0.8,0.3,1.6,0.7,2.8,1.3\n  c0.9,0.5,2.4,1.3,3.3,1.8c0.9,0.5,2.3,1.2,3,1.7c0.8,0.5,2,1.1,2.7,1.5c0.7,0.4,1.8,0.9,2.3,1.3c0.5,0.3,1.3,0.7,1.6,0.9l0.6,0.3\n  l1.1-0.6c1.2-0.6,1.5-0.8,2.2-1.8c0.6-0.7,0.5-0.6,0.8-1.6c0.2-0.9,0.3-1.4,0.1-1.4c-0.3-0.1-1.5-0.5-2.4-0.8\n  c-0.5-0.2-1.7-0.6-2.7-0.8c-0.9-0.3-2.6-0.8-3.6-1.2c-1.1-0.4-2.3-0.8-2.8-1c-0.5-0.1-1.8-0.6-3-1c-1.1-0.4-2.4-0.8-2.8-1\n  c-1.4-0.3-2.4-0.7-2.4-0.9c0-0.2-0.2-0.3-0.3-0.3c-0.1,0-0.7-0.4-0.7-0.4c0-0.1,1.7,0.2,2.6,0.4c0.5,0.1,1.2,0.3,1.7,0.4\n  c0.5,0.1,1.5,0.3,2.3,0.4c3.3,0.8,8.5,2.1,9.2,2.3c2,0.7,4.4,1.2,5.4,1.2h0.6l0.5-0.9c0.3-0.6,0.6-1.1,0.7-1.7\n  c0.2-0.8,0.2-0.9,0.1-1.7c-0.1-0.6-0.2-1.2-0.5-1.8l-0.4-1l-3.8-0.1c-3.2,0-4.1-0.1-5.3-0.2C88.9,53,87.8,53,87.2,53\n  c-0.6,0-1.5-0.1-2.1-0.1c-0.6-0.1-1.8-0.1-2.9-0.1h-1.8l0-0.7l0-0.6l0.4-0.1c0.2,0,1.6-0.1,3.1-0.2c4.7-0.3,6.5-0.4,7.6-0.5\n  c0.6,0,1.5-0.1,2.2-0.1c1.1,0,1.2,0,1.6-0.2c0.5-0.3,0.5-0.2,0.3-1c-0.1-0.4-1.4-2.2-1.9-2.8c-0.2-0.3-0.6-0.6-0.9-0.7\n  c-0.2-0.1-0.8-0.5-1.2-0.8l-0.8-0.5l-0.4,0.1c-0.2,0.1-1.7,0.5-3.2,1c-1.6,0.5-3.4,1-4.1,1.2c-0.7,0.2-1.9,0.6-2.6,0.8L79,48.1\n  l-0.3-0.2c-0.2-0.1-0.4-0.2-0.5-0.2c-0.3,0-0.2-0.1,1.8-1.2c1-0.6,2.2-1.3,2.7-1.6c0.5-0.3,1.3-0.8,1.8-1c0.5-0.2,1.4-0.7,1.9-1\n  l0.9-0.6L87,41.9c-0.5-0.5-1.5-1.2-2.6-1.8c-0.9-0.5-1.2-0.6-2.1-0.8c-0.6-0.1-1.4-0.3-1.7-0.4L80,38.9l-0.3,0.3\n  c-0.2,0.2-0.6,0.8-1,1.4c-0.4,0.6-1.2,1.7-1.9,2.4c-0.6,0.7-1.5,1.8-2,2.4c-0.5,0.6-1.4,1.6-2.1,2.3C72,48.4,71.5,49,71.4,49\n  c0,0,0.6,0.4,1.2,0.8c0.7,0.4,1.7,1,2.2,1.4c0.8,0.6,1,0.7,1.2,0.6c0.3-0.1,0.3,0-0.2,0.3c-0.3,0.2-0.5,0.3-0.5,0.4\n  c0,0.1,0.2,0.2,0.5,0.3l0.3,0.1l-0.4,0.7c-0.2,0.4-0.5,0.9-0.6,1.2c-0.1,0.4-0.2,0.5-0.4,0.4c-0.4-0.1-0.6-0.2-0.6-0.4\n  c0-0.2-0.2-0.2-0.5,0.1l-0.3,0.3l0.2,0.4c0.1,0.2,0.4,0.5,0.5,0.6c0.1,0.1,0.2,0.2,0.2,0.2c0,0-0.2,0.4-0.5,0.8l-0.5,0.8l-0.3-0.2\n  c-0.2-0.1-0.4-0.2-0.9-0.2h-0.7v0.4c0,0.3,0,0.4,0.1,0.4c0.1,0,0.3,0.2,0.5,0.4l0.4,0.4l-0.2,0.4c-0.1,0.2-0.4,0.6-0.6,0.9\n  c-0.2,0.3-0.4,0.6-0.4,0.6c0,0.2-0.2,0.1-0.3-0.2c-0.1-0.2-0.1-0.3-0.5-0.3h-0.4l0,0.6c0,0.3,0.1,0.6,0.1,0.7\n  c0.1,0.2-1.2,0.5-1.9,0.5c-0.5,0-0.6,0-0.7,0.2c-0.1,0.1-0.3,0.2-0.6,0.3c-0.3,0.1-0.5,0.1-0.5,0.1c0,0,0.1,0.2,0.3,0.5\n  c1,1.2,2.2,3.6,3,6.2c0.2,0.7,0.6,1.6,0.7,2.1l0.3,0.8l0.6,0.3c0.3,0.2,1,0.4,1.4,0.5C73.9,73.3,74.8,73.3,77,73.1 M68.2,71.9\n  c0-0.1,0-0.5-0.1-0.7c-0.1-0.3-0.3-1.6-0.5-2.9c-0.6-3.7-1.1-5.4-1.8-5.4c-0.2,0-0.3-0.1-0.3-0.3c-0.1-0.4-0.7-0.6-0.9-0.3\n  c-0.1,0.1-0.1,0.3-0.1,0.4c0,0.2,0,0.3-0.1,0.3c0,0-0.6,0.1-1.4,0.1c-0.7,0.1-1.3,0.1-1.4,0.1c-0.1,0-0.2-0.3-0.2-0.6\n  c-0.1-0.5-0.3-0.7-0.4-0.3c0,0.1-0.1,0.2-0.2,0.3c-0.3,0.4-0.4,0.8-0.4,1.5c0,0.4-0.1,0.8-0.1,1c0,0.2,0,0.4,0.1,0.6\n  c0.1,0.3,0.2,0.3,0.5,0.3c0.2,0,0.4-0.1,0.5-0.1c0.1-0.1,0.2-0.1,0.2-0.1c0,0-0.1,1.1-0.2,2.3c-0.1,1.2-0.2,2.3-0.2,2.4\n  c0,0.3,0.7,0.7,1.7,0.9c0.5,0.1,1.1,0.4,1.4,0.5c0.5,0.2,0.6,0.2,2.3,0.2h1.7V71.9z M57.9,69.6c0.2-0.6,0.7-1.9,1.1-2.9\n  c0.4-1,0.8-2.1,0.9-2.5l0.2-0.7H59h-1.1l0-0.3l0.1-0.3h-0.4c-0.2,0-0.4,0.1-0.5,0.1c-0.1,0.1-0.2,0-0.6-0.4\n  c-0.3-0.3-0.6-0.7-0.8-0.9l-0.3-0.4l0.2-0.3c0.3-0.4,0.3-0.4,0.1-0.7c-0.1-0.1-0.3-0.2-0.5-0.2c-0.5,0-1.2,0.5-2,1.2\n  c-0.5,0.5-0.6,0.7-0.4,0.9c0.1,0.1,0.2,0.2,0.2,0.4c0.1,0.1,0.2,0.3,0.3,0.3c0.2,0-1.2,1.4-1.9,2c-0.6,0.5-1.4,1.5-1.8,2.1\n  l-0.2,0.5l0.3,0.3c0.6,0.7,1.2,1,3,1.7c1.2,0.5,2.1,0.8,2.7,0.9c0.6,0.1,1,0.2,1,0.3c0,0,0.3,0,0.6,0h0.6L57.9,69.6z M46.2,65.2\n  c0.4-0.3,1.4-1,2.1-1.5c0.7-0.5,1.7-1.1,2.3-1.5c0.6-0.4,1.5-1,2.1-1.3c0.6-0.3,1.3-0.7,1.4-0.8c0.1-0.1,0.3-0.2,0.3-0.2\n  c0,0-0.1-0.2-0.3-0.5c-0.2-0.3-0.3-0.6-0.3-0.6c0-0.1,0.1-0.2,0.3-0.3c0.1-0.1,0.3-0.2,0.3-0.2c0-0.2-0.6-0.4-0.8-0.4\n  c-0.3,0-0.3,0-0.9-0.8c-0.4-0.6-0.5-0.8-0.5-0.9c0.1-0.1,0.3-0.4,0.3-0.5c0-0.1-0.5-0.2-0.8-0.2c-0.2,0-0.3-0.2-0.9-1\n  c-0.4-0.6-0.8-1.1-0.8-1.2L49.8,53h-2.9c-2,0-3.8-0.1-5.7-0.2c-4.2-0.3-4.8-0.3-6.4-0.6C33.8,52.1,33,52,32.1,52\n  c-1.3,0-2.6,0.1-2.6,0.3c0,0,0.2,0.6,0.5,1.2c0.6,1.6,1.2,2.7,2,3.5c0.3,0.4,0.8,0.9,1,1.1c0.2,0.3,0.4,0.4,0.5,0.4\n  c0.9-0.3,2.9-0.6,6.9-1.3c0.6-0.1,1.8-0.3,2.6-0.5c1-0.2,1.9-0.4,3-0.5c0.9-0.1,2.1-0.2,2.7-0.4c0.6-0.1,1.1-0.2,1.2-0.2\n  c0,0,0,0.2,0,0.5c0,0.4,0,0.5-0.2,0.6c-0.3,0.1-3.2,1-4.3,1.3c-0.3,0.1-1.2,0.4-1.8,0.7c-0.7,0.3-1.7,0.6-2.3,0.8\n  c-0.6,0.2-1.6,0.5-2.2,0.7c-0.6,0.2-1.2,0.4-1.3,0.4c-0.1,0-0.2,0.1-0.2,0.1c0,0.1,0.8,0.7,2.4,2.1c1.7,1.4,2.9,2.1,3.9,2.4\n  c0.3,0.1,0.6,0.2,0.8,0.4C45,65.9,45.3,65.9,46.2,65.2 M48.1,52.3c0.2-0.1,0.4-0.1,0.6-0.1c0.2,0,0.4,0.1,0.6,0.1l0.3,0.1l-0.2-0.3\n  c-0.2-0.3-0.2-0.3-0.1-0.5c0.1-0.1,0.1-0.2-0.3-0.6c-0.3-0.3-0.6-0.7-0.8-1c-0.3-0.5-0.3-0.6-0.2-0.6c0.1,0,0.2-0.1,0.3-0.2\n  c0.1-0.2,0.1-0.2-0.3-0.4c-0.5-0.3-0.5-0.3-0.3-0.5c0.1-0.1-0.2-0.2-1.1-0.5c-0.6-0.2-1.3-0.4-1.4-0.4c-0.1,0-2-0.6-4.1-1.1\n  c-2.1-0.6-5-1.4-6.4-1.8c-2.6-0.8-3.2-1-3.8-1.1l-0.4-0.1l-0.4,0.6c-0.5,0.8-1.6,3.1-2,4c-0.2,0.5-0.3,0.9-0.3,1.2\n  c0,0.5,0,0.5,0.3,0.6c0.2,0.1,1.1,0.1,2.1,0.2c1,0,1.8,0.1,1.9,0.1c0.1,0,0.7,0.1,1.4,0.2c0.7,0.1,2.2,0.3,3.3,0.4\n  c1.1,0.1,3.1,0.4,4.5,0.6c2.7,0.3,4.7,0.6,4.8,0.7c0,0,0.1,0.2,0.1,0.3v0.3H47C47.5,52.4,47.9,52.4,48.1,52.3 M71.4,48.5\n  c0.2-0.5,1-1.9,1.2-2.1c0.1-0.1,0.3-0.2,0.5-0.3l0.4-0.2l0-0.6l0-0.6l1.1-1.6c2.2-3.2,2.6-3.9,2.6-4.7v-0.5l-0.5-0.3\n  c-0.3-0.1-0.6-0.3-0.8-0.3c-0.1,0-0.4-0.2-0.7-0.4c-0.3-0.2-0.8-0.4-1.4-0.5c-0.5-0.1-1-0.3-1.3-0.4c-0.2-0.1-0.7-0.1-1.2-0.1\n  c-0.7,0-0.8,0-0.9,0.2c-0.5,1.1-1,2.8-1.3,4.2c-0.6,2.9-1.1,4.7-1.5,5.7l-0.4,0.9l0.5,0.3c2,1.1,3.2,1.8,3.3,1.8\n  C71.2,48.9,71.3,48.7,71.4,48.5 M48.9,47.6c0.2-0.1,0.5-0.2,0.7-0.4c0.3-0.2,0.4-0.2,0.7-0.2c0.3,0,0.3,0,0.5-0.3\n  c0.1-0.2,0.2-0.3,0.3-0.3c0.1,0,0.2-0.1,0.3-0.2c0.1-0.1,0.3-0.2,0.4-0.2c0.2,0-0.1-0.2-1.1-1c-0.7-0.5-1.5-1.1-1.6-1.3\n  c-0.2-0.2-0.3-0.3-0.5-0.3c-0.3,0-1.6-0.8-3.3-2.1c-0.6-0.5-1.7-1.2-2.4-1.6c-0.7-0.4-1.6-1.1-2.1-1.5c-0.6-0.5-1-0.8-1.4-1\n  l-0.6-0.2l-0.9,0.2c-0.5,0.1-1.2,0.4-1.5,0.5c-0.3,0.1-0.7,0.3-0.9,0.4c-0.7,0.2-1.6,0.8-2.2,1.3c-0.6,0.6-1,1.1-0.9,1.2\n  c0,0,0.4,0.2,0.9,0.3c1.7,0.5,5.3,1.9,7.9,3.2c0.7,0.3,2,0.9,2.9,1.2c1,0.4,2.1,0.9,3.1,1.4c0.8,0.4,1.4,0.8,1.5,0.8\n  C48.5,47.7,48.7,47.6,48.9,47.6 M54.1,46.7c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.3-0.2-0.5c0-0.3,0-0.3,0.6-0.5l0.6-0.2l0.3,0.3\n  c0.3,0.4,0.7,0.6,1,0.6c0.3,0,0.3,0,0.2-0.2C56.4,45.6,56,44,56,43.9c0-0.1,0.1,0.1,0.3,0.3c0.1,0.2,0.3,0.4,0.3,0.5\n  c0,0,0.2,0,0.4-0.1c0.4-0.1,0.4-0.1,0.5,0c0,0.1,0.3,0.4,0.7,0.8c0.6,0.6,0.6,0.6,0.8,0.5c0.2-0.1,0.2-0.2,0.2-0.5\n  c0-0.2,0-0.6-0.1-0.8C59,44.3,59,44.1,59,44.1c0,0,0.3-0.1,0.5-0.2l0.5-0.1l0.4,0.5c0.2,0.3,0.4,0.5,0.4,0.6c0,0.1,0.1,0.1,0.1,0.1\n  c0.3,0,0.3-0.2,0.3-1.6c0-0.8,0-1.4,0.1-1.4c0,0,0.3,0.5,0.5,1.1l0.4,1.1l0.9,0.5c1,0.5,1.2,0.7,1.2,1c0,0.2,0,0.2,0.2,0.2\n  c0.1,0,0.2-0.1,0.3-0.1c0.1-0.1,0.2-0.1,1.2,0.4l1.1,0.6v-0.3c0-0.1,0-0.6-0.1-1.1c-0.1-0.9-0.1-1.5,0.3-6.1c0-0.6,0.1-1.8,0.1-2.5\n  v-1.3l-0.7-0.2c-1.4-0.5-3.7-0.9-5.3-0.9c-0.8,0-1.6-0.1-1.8-0.2C59.5,34,59.3,34,59.2,34l-0.2,0l0.5,1.9c0.3,1.1,0.7,2.3,0.8,2.8\n  c0.1,0.5,0.3,0.9,0.3,0.9c0,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.5,0.2c-0.2,0.1-0.3,0.2-0.4,0.2c0,0-0.1,0.1-0.1,0.1\n  c0,0.4-0.2-0.2-0.7-1.9c-0.6-2-1.1-3.2-1.5-3.6c-0.2-0.2-0.4-0.3-0.7-0.3c-0.2,0-0.8-0.1-1.3-0.2c-0.5-0.1-1.1-0.2-1.3-0.2\n  c-0.3,0-0.6-0.1-0.8-0.1c-0.5-0.2-1.2-0.2-1.5,0C51.5,33.9,51.2,34,51,34c-0.3,0-0.5,0.1-0.7,0.2c-0.2,0.1-0.3,0.3-0.3,0.3\n  c0,0.1,0.5,1,1.2,2c0.3,0.5,0.8,1.3,1.1,1.7c0.3,0.4,0.8,1.2,1.2,1.7c0.4,0.5,1,1.3,1.3,1.7c0.9,1.4,1.4,2.2,0.9,1.8\n  c-0.1-0.1-0.3-0.1-0.6-0.1h-0.4l-1.1-1.4c-0.6-0.8-1.4-1.8-1.8-2.2c-1.3-1.7-1.9-2.5-2.7-3c-0.4-0.3-0.9-0.6-1.2-0.8\n  c-0.4-0.3-0.4-0.3-1.1-0.3c-0.4,0-1.2,0.1-1.9,0.1c-1.1,0.1-1.3,0.1-2.4,0.5c-0.7,0.2-1.3,0.5-1.4,0.5c-0.1,0,0.1,0.2,0.6,0.5\n  c1.3,0.9,4.5,3.3,5.7,4.4c0.7,0.6,2.1,1.7,3.1,2.5c1,0.8,2.1,1.7,2.5,2.1c0.6,0.6,0.6,0.6,1,0.6C53.9,46.8,54.1,46.8,54.1,46.7" }),
        React__default['default'].createElement("path", { "clip-path": "url(#SVGID_2_)", fill: "#DBE6B7", d: "M74.1,50c0-0.1,1.4-1,2.1-1.3c0.3-0.2,0.5-0.3,0.4-0.2\n  c-0.1,0.1-0.5,0.4-0.8,0.7c-0.4,0.4-0.7,0.6-1,0.6c-0.2,0.1-0.5,0.1-0.5,0.1C74.2,50,74.1,50,74.1,50" }),
        React__default['default'].createElement("path", { fill: "{textColor}", d: "M164,65V96c-0.7,0.2-1.7,0.5-3.1,0.7c-1.3,0.2-2.7,0.3-4.3,0.3c-3,0-5.2-0.5-6.4-1.6\n  c-1.2-1.1-1.9-3-1.9-5.7V23.3c0.6-0.2,1.7-0.4,3.1-0.6c1.4-0.2,2.8-0.4,4.1-0.4c2.9,0,5,0.5,6.4,1.6c1.4,1,2,3,2,5.8v24.7\n  l28.8-31.7c3.8,0,6.6,0.8,8.3,2.3c1.7,1.5,2.6,3.3,2.6,5.4c0,1.7-0.4,3.2-1.3,4.5c-0.8,1.3-2.1,2.8-3.8,4.5l-20.3,20.2\n  c6.2,6.4,11.7,12.1,16.4,17.2c4.7,5,8.7,9.1,12,12.1c-0.1,2.6-0.9,4.7-2.6,6.2c-1.6,1.5-3.6,2.2-5.9,2.2c-2.3,0-4.3-0.6-5.9-1.9\n  c-1.6-1.2-3.2-2.7-4.7-4.3L164,65z" }),
        React__default['default'].createElement("path", { fill: "{textColor}", d: "M227.8,97c-3,0-5.2-0.6-6.5-1.7c-1.3-1.1-1.9-3-1.9-5.6V23.3c0.7-0.2,1.8-0.4,3.1-0.6\n  c1.4-0.2,2.7-0.4,4.1-0.4c2.9,0,5,0.5,6.4,1.6c1.4,1,2,3,2,5.8V96c-0.7,0.2-1.7,0.4-3.1,0.6C230.6,96.9,229.2,97,227.8,97z" }),
        React__default['default'].createElement("path", { fill: "{textColor}", d: "M286.4,41.2c0.8-0.4,1.9-0.8,3.3-1.1c1.4-0.4,2.9-0.5,4.4-0.5c2.6,0,4.7,0.4,6.3,1.1\n  c1.6,0.8,2.7,1.9,3.1,3.4c1.2,3.8,2.3,7.4,3.3,10.7c1,3.3,2,6.5,2.9,9.5c1,3.1,1.9,6.1,2.8,9.1c0.9,3,1.8,6.1,2.6,9.3h0.5\n  c1-5.1,1.8-10.1,2.6-14.9c0.8-4.8,1.6-9.6,2.4-14.3c0.8-4.7,1.5-9.5,2.2-14.3c0.7-4.8,1.4-9.8,2.1-14.9c2.1-1.1,4.4-1.7,6.8-1.7\n  c2.2,0,4.1,0.5,5.7,1.5c1.6,1,2.3,2.6,2.3,4.9c0,1.6-0.2,4-0.6,7.2c-0.4,3.2-0.9,6.8-1.6,10.8c-0.7,4-1.5,8.3-2.4,12.8\n  c-0.9,4.5-1.9,8.9-2.9,13.2c-1,4.3-2,8.3-3,11.9c-1,3.7-2,6.7-2.9,9c-1,0.8-2.4,1.5-4.3,2s-4,0.8-6.1,0.8c-2.8,0-5.2-0.4-7.1-1.3\n  c-2-0.8-3.1-1.9-3.5-3.3c-0.7-1.8-1.5-4-2.3-6.5c-0.8-2.5-1.7-5.3-2.6-8.2c-0.9-3-1.9-6.1-2.8-9.3s-1.9-6.5-2.8-9.9\n  c-0.9,3.3-1.8,6.6-2.7,10c-0.9,3.4-1.8,6.7-2.7,9.8c-0.9,3.2-1.8,6.1-2.6,8.9c-0.9,2.8-1.7,5.1-2.4,7c-0.9,0.7-2.2,1.4-4,1.9\n  c-1.8,0.6-3.8,0.8-5.9,0.8c-2.7,0-5.1-0.4-7.2-1.3c-2.1-0.8-3.4-1.9-4.1-3.3c-0.7-1.6-1.5-3.9-2.4-6.8c-0.9-3-1.8-6.3-2.8-10.1\n  c-1-3.8-1.9-7.9-2.9-12.3c-1-4.4-1.9-8.8-2.8-13.1c-0.9-4.4-1.7-8.6-2.5-12.7c-0.8-4.1-1.3-7.9-1.7-11.2c0.9-0.8,2-1.5,3.5-2.2\n  c1.4-0.7,3.1-1,4.9-1c2.2,0,4.1,0.5,5.5,1.6c1.4,1,2.3,2.7,2.7,5c1.2,6.6,2.2,12.5,3.1,17.6c0.9,5.1,1.7,9.7,2.5,13.9\n  c0.8,4.2,1.5,8,2.2,11.5c0.7,3.5,1.4,7,2.1,10.4h0.6c0.9-3.4,1.7-6.6,2.6-9.6c0.8-3,1.7-6,2.6-9.1c0.9-3.1,1.8-6.5,2.8-10.1\n  C284,50.2,285.2,46,286.4,41.2z" }),
        React__default['default'].createElement("path", { fill: "{textColor}", d: "M361.9,97c-3,0-5.2-0.6-6.5-1.7c-1.3-1.1-1.9-3-1.9-5.6V23.3c0.7-0.2,1.8-0.4,3.1-0.6\n  c1.4-0.2,2.7-0.4,4.1-0.4c2.9,0,5,0.5,6.4,1.6c1.4,1,2,3,2,5.8V96c-0.7,0.2-1.7,0.4-3.1,0.6C364.7,96.9,363.4,97,361.9,97z" }),
        React__default['default'].createElement("path", { fill: "{textColor}", d: "M408.8,85.2c4.6,0,8-0.9,10.2-2.7s3.2-4.1,3.2-6.8c0-2.5-0.8-4.5-2.5-5.9c-1.7-1.5-4.2-2.7-7.7-3.8\n  l-7.7-2.4c-3-1-5.8-2-8.3-3.2c-2.5-1.2-4.6-2.6-6.4-4.3c-1.8-1.6-3.1-3.6-4.1-5.8c-1-2.2-1.4-4.8-1.4-7.9c0-6.5,2.4-11.6,7.3-15.4\n  c4.9-3.8,11.6-5.7,20-5.7c3.4,0,6.5,0.3,9.3,0.8c2.8,0.5,5.3,1.2,7.4,2.2c2.1,0.9,3.7,2.1,4.9,3.4c1.2,1.4,1.7,2.9,1.7,4.6\n  c0,1.6-0.4,3-1.1,4.1c-0.8,1.2-1.7,2.1-2.8,2.8c-1.9-1.4-4.5-2.5-7.6-3.5c-3.2-1-6.6-1.5-10.4-1.5c-4.2,0-7.3,0.7-9.5,2.2\n  c-2.2,1.5-3.2,3.5-3.2,6.1c0,2.1,0.7,3.7,2.2,4.8c1.5,1.1,3.8,2.2,7,3.2l6.8,2.2c7,2.1,12.4,4.9,16.2,8.5c3.8,3.6,5.8,8.5,5.8,14.6\n  c0,3.3-0.6,6.3-1.9,9c-1.3,2.7-3.1,5.1-5.6,7c-2.4,2-5.5,3.5-9.1,4.6c-3.6,1.1-7.8,1.6-12.4,1.6c-3.7,0-7.1-0.3-10.1-1\n  c-3.1-0.6-5.7-1.5-8-2.6c-2.2-1.1-4-2.4-5.2-3.8c-1.2-1.5-1.9-3.1-1.9-4.9c0-1.8,0.5-3.4,1.6-4.7c1.1-1.3,2.3-2.3,3.8-2.9\n  c2,1.8,4.6,3.4,7.9,4.9C400.6,84.5,404.4,85.2,408.8,85.2z" }),
        React__default['default'].createElement("path", { fill: "{textColor}", d: "M487.7,59.3c-0.9,3.3-1.8,6.6-2.8,10c-1,3.4-2,6.6-3,9.8c-1,3.2-2,6.1-2.9,8.8c-0.9,2.7-1.7,5-2.3,7\n  c-0.9,0.6-2,1.2-3.4,1.6c-1.4,0.4-3.1,0.7-5.2,0.7c-2.3,0-4.3-0.3-6.1-1c-1.7-0.7-2.9-1.7-3.5-3.1c-1-1.9-2-5-3.2-9.2\n  c-1.2-4.2-2.4-8.8-3.7-13.8c-1.3-5-2.5-10.1-3.5-15.2c-1.1-5.2-2-9.7-2.7-13.5c0.8-0.8,1.9-1.5,3.3-2.2c1.4-0.7,2.9-1,4.6-1\n  c2.2,0,4,0.5,5.3,1.6c1.3,1.1,2.1,2.8,2.5,5.2c1.5,9.6,3,17.7,4.3,24.4c1.4,6.7,2.3,11.2,2.9,13.6h0.5c0.3-1.4,0.9-3.4,1.6-6\n  c0.8-2.6,1.6-5.7,2.6-9.1c1-3.4,2.1-7.1,3.2-11c1.2-3.9,2.3-7.9,3.5-11.9c1.1-0.6,2.3-1.1,3.5-1.5c1.2-0.4,2.7-0.5,4.4-0.5\n  c2.2,0,4,0.4,5.5,1.1c1.5,0.7,2.5,1.8,2.9,3.2c1.2,3.8,2.3,7.6,3.4,11.3c1.1,3.7,2.1,7.1,2.9,10.3c0.9,3.2,1.7,6,2.3,8.5\n  c0.7,2.5,1.2,4.4,1.6,5.8h0.6c1.4-6.6,2.8-13.6,4.3-20.8c1.5-7.2,2.7-14.6,3.8-22.3c1-0.6,2-1,3.2-1.3c1.2-0.3,2.4-0.5,3.6-0.5\n  c2.1,0,3.8,0.5,5.1,1.4s2,2.5,2,4.7c0,1.1-0.2,2.9-0.7,5.5c-0.5,2.5-1.1,5.4-1.9,8.6c-0.8,3.2-1.6,6.7-2.5,10.3\n  c-0.9,3.6-1.9,7.2-2.8,10.6c-1,3.4-1.9,6.5-2.8,9.2c-0.9,2.8-1.6,4.9-2.3,6.4c-0.8,0.6-2,1.2-3.7,1.6c-1.6,0.4-3.4,0.7-5.3,0.7\n  c-5,0-8-1.2-9-3.7c-0.6-1.8-1.4-3.9-2.3-6.5c-0.9-2.6-1.8-5.4-2.7-8.4c-0.9-3-1.8-6.2-2.8-9.5C489.3,65.8,488.5,62.5,487.7,59.3z" }),
        React__default['default'].createElement("path", { fill: "{textColor}", d: "M561.8,37.6c7.8,0,14.1,1.7,18.8,5c4.7,3.4,7,8.6,7,15.6V86c0,1.9-0.5,3.4-1.4,4.6c-1,1.1-2.2,2.1-3.6,3\n  c-2.2,1.4-5.1,2.4-8.5,3.2c-3.4,0.8-7.4,1.2-11.8,1.2c-8,0-14.3-1.5-18.9-4.6c-4.6-3.1-6.9-7.7-6.9-13.9c0-5.4,1.7-9.5,5.1-12.3\n  c3.4-2.8,8.3-4.6,14.8-5.2l16.4-1.7v-2.2c0-3-1.1-5.3-3.3-6.7c-2.2-1.4-5.3-2.2-9.3-2.2c-3.1,0-6.2,0.4-9.1,1.1\n  c-3,0.8-5.6,1.7-7.9,2.8c-0.9-0.6-1.6-1.5-2.2-2.6c-0.6-1.1-0.9-2.3-0.9-3.5c0-1.6,0.4-2.9,1.1-3.9c0.8-1,2-1.9,3.7-2.7\n  c2.3-1,5-1.7,7.9-2.2C555.8,37.8,558.8,37.6,561.8,37.6z M562.3,86.4c2.3,0,4.4-0.2,6.4-0.7c1.9-0.4,3.3-1,4.2-1.6V70.8l-11.6,1.1\n  c-3.2,0.3-5.6,1-7.3,2.1c-1.7,1.1-2.5,2.8-2.5,5.1c0,2.3,0.9,4.1,2.6,5.4C555.7,85.8,558.5,86.4,562.3,86.4z" }),
        React__default['default'].createElement("path", { fill: "{textColor}", d: "M629.5,97.8c-2.3,0-4.5-0.2-6.4-0.7c-2-0.4-3.7-1-5.3-1.6v22.1c-0.7,0.2-1.7,0.4-2.9,0.6s-2.6,0.4-4.1,0.4\n  c-2.8,0-4.9-0.5-6.2-1.6c-1.4-1-2-2.9-2-5.5V50.7c0-1.9,0.4-3.5,1.1-4.7c0.8-1.2,2-2.3,3.7-3.4c2.3-1.4,5.2-2.5,8.6-3.5\n  c3.4-1,7.3-1.5,11.6-1.5c4.4,0,8.5,0.6,12.2,1.7c3.7,1.2,6.9,3,9.7,5.4c2.7,2.4,4.8,5.5,6.4,9.3c1.5,3.8,2.3,8.2,2.3,13.4\n  c0,5-0.7,9.4-2.2,13.2c-1.4,3.8-3.4,6.9-5.9,9.5c-2.5,2.6-5.5,4.5-9,5.8C637.5,97.2,633.7,97.8,629.5,97.8z M627.2,85.7\n  c4.8,0,8.6-1.5,11.3-4.4c2.7-3,4.1-7.6,4.1-13.8c0-6.5-1.4-11.1-4.2-13.8c-2.8-2.7-6.4-4.1-10.8-4.1c-2.2,0-4.1,0.3-5.7,0.8\n  c-1.6,0.6-3.1,1.2-4.3,1.8v30.8c1.3,0.8,2.7,1.4,4.3,1.9C623.5,85.5,625.2,85.7,627.2,85.7z" })));
};

var Icon$Q = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$R = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$S = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$T = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M7.5 13C7.5 11.8954 8.39543 11 9.5 11H12.5C13.6046 11 14.5 11.8954 14.5 13V15C14.5 16.1046 13.6046 17 12.5 17H9.5C8.39543 17 7.5 16.1046 7.5 15V13Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.5 2C8.39543 2 7.5 2.89543 7.5 4V6.49482C7.5 6.93167 7.2113 7.30895 6.81834 7.49981C5.15004 8.31009 4 10.0207 4 12V17C4 19.2091 5.79086 21 8 21H14C16.2091 21 18 19.2091 18 17V12C18 11.4175 17.9004 10.8583 17.7173 10.3385L17.7892 10.297C19.4786 9.32167 20.0574 7.16153 19.082 5.47221C18.1552 3.86682 16.1534 3.25957 14.5 4.05146V4C14.5 2.89543 13.6046 2 12.5 2H9.5ZM9.5 6.25V4H12.5V6.25H9.5ZM9.22663 7.75C8.89473 8.46917 8.30318 9.00205 7.69211 9.29884C6.68638 9.78731 6 10.8154 6 12V17C6 18.1046 6.89543 19 8 19H14C15.1046 19 16 18.1046 16 17V12C16 10.8154 15.3136 9.78731 14.3079 9.29884C13.6968 9.00205 13.1053 8.46917 12.7734 7.75H9.22663ZM14.5 6.3226V6.49482C14.5 6.93167 14.7887 7.30895 15.1817 7.49981C15.7529 7.77726 16.2634 8.16029 16.6878 8.62352L16.7892 8.56495C17.522 8.1419 17.773 7.20495 17.35 6.47221C16.9346 5.75269 16.0213 5.49542 15.2914 5.89229L14.5 6.3226Z" })));
};

var Icon$U = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React__default['default'].createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React__default['default'].createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React__default['default'].createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React__default['default'].createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React__default['default'].createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React__default['default'].createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React__default['default'].createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$V = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z" })));
};

var Icon$W = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.3137 3L15.2631 3.94934C14.5597 5.19866 14.7398 6.81097 15.8032 7.87441C16.8667 8.93786 18.479 9.11792 19.7283 8.4146L20.6777 9.36396L17.6569 12.3848L17.1287 11.8566C16.7382 11.4661 16.105 11.4661 15.7145 11.8566C15.3239 12.2471 15.3239 12.8803 15.7145 13.2708L16.2426 13.799L9.36396 20.6777L8.49923 19.8129C9.71921 18.5286 9.69924 16.4983 8.43932 15.2384C7.1794 13.9784 5.14908 13.9585 3.86473 15.1784L3 14.3137L9.87868 7.43503L10.2145 7.77081C10.605 8.16134 11.2382 8.16134 11.6287 7.77081C12.0192 7.38029 12.0192 6.74713 11.6287 6.3566L11.2929 6.02081L14.3137 3ZM12.8995 1.58579C13.6805 0.804738 14.9469 0.804738 15.7279 1.58579L17.299 3.15684C17.6895 3.54736 17.6895 4.18053 17.299 4.57105L17.2175 4.65257C16.7183 5.15173 16.7183 5.96103 17.2175 6.4602C17.7166 6.95936 18.5259 6.95936 19.0251 6.4602L19.1066 6.37868C19.4971 5.98816 20.1303 5.98816 20.5208 6.37868L22.0919 7.94975C22.8729 8.7308 22.8729 9.99713 22.0919 10.7782L10.7782 22.0919C9.99713 22.8729 8.7308 22.8729 7.94975 22.0919L6.37869 20.5208C5.98817 20.1303 5.98817 19.4971 6.37869 19.1066L7.02511 18.4602C7.52427 17.961 7.52427 17.1517 7.02511 16.6526C6.52594 16.1534 5.71664 16.1534 5.21748 16.6526L4.57106 17.299C4.18054 17.6895 3.54737 17.6895 3.15685 17.299L1.58579 15.7279C0.804738 14.9469 0.804738 13.6805 1.58579 12.8995L12.8995 1.58579ZM13.8787 8.6066C13.4882 8.21608 12.855 8.21608 12.4645 8.6066C12.0739 8.99712 12.0739 9.63029 12.4645 10.0208L13.4645 11.0208C13.855 11.4113 14.4882 11.4113 14.8787 11.0208C15.2692 10.6303 15.2692 9.99713 14.8787 9.6066L13.8787 8.6066Z" })));
};

var Icon$X = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$Y = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React__default['default'].createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$I,
    GroupsIcon: Icon$J,
    HamburgerIcon: Icon$K,
    HamburgerCloseIcon: Icon$L,
    HomeIcon: Icon$M,
    IfoIcon: Icon$N,
    InfoIcon: Icon$O,
    LanguageIcon: Icon$P,
    LogoIcon: Logo,
    MoonIcon: Icon$Q,
    MoreIcon: Icon$R,
    NftIcon: Icon$S,
    PoolIcon: Icon$T,
    SunIcon: Icon$U,
    TelegramIcon: Icon$V,
    TicketIcon: Icon$W,
    TradeIcon: Icon$X,
    TwitterIcon: Icon$Y
});

var MenuButton = styled__default['default'](Button)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$x;

var StyledLink$1 = styled__default['default'](reactRouterDom.Link)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 156px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Logo$1 = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React__default['default'].createElement(React__default['default'].Fragment, null,
        React__default['default'].createElement(Icon$q, { className: "mobile-icon" }),
        React__default['default'].createElement(Logo, { className: "desktop-icon", isDark: isDark })));
    return (React__default['default'].createElement(Flex, null,
        React__default['default'].createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React__default['default'].createElement(Icon$L, { width: "24px", color: "textSubtle" })) : (React__default['default'].createElement(Icon$K, { width: "24px", color: "textSubtle" }))),
        isAbsoluteUrl ? (React__default['default'].createElement(StyledLink$1, { as: "a", href: href, "aria-label": "Kiwi home page" }, innerLogo)) : (React__default['default'].createElement(StyledLink$1, { to: href, "aria-label": "Kiwi home page" }, innerLogo))));
};
var templateObject_1$y;

var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://ex.kiwiswap.finance",
            },
            {
                label: "Liquidity",
                href: "https://ex.kiwiswap.finance/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        items: [
            {
                label: "Leaderboard",
                href: "/",
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://info.kiwiswap.finance",
            },
            {
                label: "Tokens",
                href: "https://info.kiwiswap.finance/tokens",
            },
            {
                label: "Pairs",
                href: "https://info.kiwiswap.finance/pairs",
            },
            {
                label: "Accounts",
                href: "https://info.kiwiswap.finance/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.kiwiswap.finance",
            },
            {
                label: "Github",
                href: "https://github.com/kiwifinance",
            },
            {
                label: "Docs",
                href: "https://docs.kiwiswap.finance",
            },
            {
                label: "Blog",
                href: "https://kiwiswap.medium.com",
            },
        ],
    },
];
var socials = [
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "Kiwi Group",
                href: "https://t.me/kiwifinance",
            },
            {
                label: "Kiwi News",
                href: "https://t.me/kiwifinancenews",
            },
        ],
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/kiwifinance_bsc",
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = styled.keyframes(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled__default['default'].div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ",
    ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return isPushed ? theme.colors.textSubtle : "transparent";
});
var MenuEntry = styled__default['default'].div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ",
    ";\n  color: ", ";\n  box-shadow: ",
    ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    -webkit-background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 200% 100%;\n    font-weight: bold;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return secondary ? theme.colors.background : "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.tertiary;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
    role: "button",
};
var templateObject_1$z, templateObject_2$a, templateObject_3$6;

var Container$2 = styled__default['default'].div(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled__default['default'].div(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ",
    ";\n  border-style: solid;\n  border-width: 1px;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent";
});
var Accordion = function (_a) {
    var label = _a.label, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className;
    var _c = React.useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React__default['default'].createElement(Container$2, null,
        React__default['default'].createElement(MenuEntry, { onClick: handleClick, className: className },
            icon,
            React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, label),
            isOpen ? React__default['default'].createElement(Icon$8, null) : React__default['default'].createElement(Icon$7, null)),
        React__default['default'].createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React__default['default'].Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$A, templateObject_2$b;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : reactRouterDom.NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React__default['default'].createElement(Tag, __assign({}, props, otherProps));
};

var Icons = IconModule;
var Container$3 = styled__default['default'].div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = reactRouterDom.useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React__default['default'].createElement(Container$3, null, links.map(function (entry) {
        var Icon = Icons[entry.icon];
        var iconElement = React__default['default'].createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass
            ? entry.calloutClass
            : undefined;
        if (entry.items) {
            return (React__default['default'].createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, initialOpenState: entry.initialOpenState, className: calloutClass }, isPushed &&
                entry.items.map(function (item) { return (React__default['default'].createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React__default['default'].createElement(MenuLink, { href: item.href }, item.label))); })));
        }
        return (React__default['default'].createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React__default['default'].createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React__default['default'].createElement(LinkLabel, { isPushed: isPushed }, entry.label))));
    })));
};
var templateObject_1$B;

var Icons$1 = IconModule;
var MoonIcon = Icons$1.MoonIcon, SunIcon = Icons$1.SunIcon, LanguageIcon = Icons$1.LanguageIcon;
var Container$4 = styled__default['default'].div(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var PriceLink = styled__default['default'].a(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var SettingsEntry = styled__default['default'].div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled__default['default'].div(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, toggleTheme = _a.toggleTheme, isDark = _a.isDark, kiwiPriceUsd = _a.kiwiPriceUsd, currentLang = _a.currentLang, langs = _a.langs, setLang = _a.setLang;
    if (!isPushed) {
        return (React__default['default'].createElement(Container$4, null,
            React__default['default'].createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React__default['default'].createElement(Icon$l, null))));
    }
    return (React__default['default'].createElement(Container$4, null,
        React__default['default'].createElement(SocialEntry, null,
            kiwiPriceUsd ? (React__default['default'].createElement(PriceLink, { href: "https://info.cheeseswap.app/token/0xCfDf8A80fECAeeCC144fa74c0Df8691BFd0e26e3", target: "_blank" },
                React__default['default'].createElement(Icon$v, { width: "24px", mr: "8px" }),
                React__default['default'].createElement(Text, { color: "textSubtle", bold: true }, "$" + kiwiPriceUsd.toFixed(3)))) : (React__default['default'].createElement(Skeleton, { width: 80, height: 24 })),
            React__default['default'].createElement(Flex, null, socials.map(function (social, index) {
                var Icon = Icons$1[social.icon];
                var iconProps = {
                    width: "24px",
                    color: "textSubtle",
                    style: { cursor: "pointer" },
                };
                var mr = index < socials.length - 1 ? "24px" : 0;
                if (social.items) {
                    return (React__default['default'].createElement(Dropdown, { key: social.label, position: "top", target: React__default['default'].createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React__default['default'].createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
                }
                return (React__default['default'].createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
                    React__default['default'].createElement(Icon, __assign({}, iconProps))));
            }))),
        React__default['default'].createElement(SettingsEntry, null,
            React__default['default'].createElement(Button, { variant: "text", onClick: function () { return toggleTheme(!isDark); } },
                React__default['default'].createElement(Flex, { alignItems: "center" },
                    React__default['default'].createElement(SunIcon, { color: isDark ? "textDisabled" : "text", width: "24px" }),
                    React__default['default'].createElement(Text, { color: "textDisabled", mx: "4px" }, "/"),
                    React__default['default'].createElement(MoonIcon, { color: isDark ? "text" : "textDisabled", width: "24px" }))),
            React__default['default'].createElement(Dropdown, { position: "top-right", target: React__default['default'].createElement(Button, { variant: "text", startIcon: React__default['default'].createElement(LanguageIcon, { color: "textSubtle", width: "24px" }) },
                    React__default['default'].createElement(Text, { color: "textSubtle" }, currentLang === null || currentLang === void 0 ? void 0 : currentLang.toUpperCase())) }, langs.map(function (lang) { return (React__default['default'].createElement(MenuButton, { key: lang.code, fullWidth: true, onClick: function () { return setLang(lang); }, 
                // Safari fix
                style: { minHeight: "32px", height: "auto" } }, lang.language)); })))));
};
var templateObject_1$C, templateObject_2$c, templateObject_3$7, templateObject_4$3;

var StyledPanel = styled__default['default'].div(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  font-weight: 700;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s;\n  border-right: ",
    ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ",
    ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React__default['default'].createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React__default['default'].createElement(PanelBody, __assign({}, props)),
        React__default['default'].createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$D;

var Icon$Z = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React__default['default'].createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React__default['default'].createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React__default['default'].createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React__default['default'].createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React__default['default'].createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React__default['default'].createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React__default['default'].createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React__default['default'].createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React__default['default'].createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React__default['default'].createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$_ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$$ = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React__default['default'].createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React__default['default'].createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$10 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("g", { clipPath: "url(#clip0)" },
            React__default['default'].createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React__default['default'].createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("clipPath", { id: "clip0" },
                React__default['default'].createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$11 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React__default['default'].createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React__default['default'].createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$12 = function (props) {
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React__default['default'].createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React__default['default'].createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React__default['default'].createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var connectors = [
    {
        title: "Metamask",
        icon: Icon$Z,
        connectorId: "injected",
    },
    {
        title: "TrustWallet",
        icon: Icon$10,
        connectorId: "injected",
    },
    {
        title: "MathWallet",
        icon: Icon$_,
        connectorId: "injected",
    },
    {
        title: "TokenPocket",
        icon: Icon$$,
        connectorId: "injected",
    },
    {
        title: "WalletConnect",
        icon: Icon$11,
        connectorId: "walletconnect",
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$12,
        connectorId: "bsc",
    },
];
var localStorageKey = "accountStatus";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React__default['default'].createElement(Button, { fullWidth: true, variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(localStorageKey, "1");
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React__default['default'].createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React__default['default'].createElement(Icon, { width: "32px" })));
};

var HelpLink = styled__default['default'](Link)(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React__default['default'].createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React__default['default'].createElement(HelpLink, { href: "https://docs.kiwiswap.finance/guides/faq#how-do-i-set-up-my-wallet-on-binance-smart-chain", external: true },
            React__default['default'].createElement(Icon$o, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$E;

var StyleButton = styled__default['default'](Text).attrs({ role: "button" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled__default['default'].div(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ",
    ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return isTooltipDisplayed ? "block" : "none";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = React.useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    return (React__default['default'].createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            navigator.clipboard.writeText(JSON.stringify(toCopy));
            setIsTooltipDisplayed(true);
            setTimeout(function () {
                setIsTooltipDisplayed(false);
            }, 1000);
        } }, props),
        children,
        React__default['default'].createElement(Icon$n, { width: "20px", color: "primary", ml: "4px" }),
        React__default['default'].createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$F, templateObject_2$d;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React__default['default'].createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React__default['default'].createElement(Text, { fontSize: "20px", bold: true, style: {
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: "8px",
            } }, account),
        React__default['default'].createElement(Flex, { mb: "32px" },
            React__default['default'].createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React__default['default'].createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React__default['default'].createElement(Flex, { justifyContent: "center" },
            React__default['default'].createElement(Button, { size: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(localStorageKey);
                    onDismiss();
                    window.location.reload();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React__default['default'].createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React__default['default'].createElement(AccountModal, { account: account, logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account
        ? account.substring(0, 4) + "..." + account.substring(account.length - 4)
        : null;
    return (React__default['default'].createElement("div", null, account ? (React__default['default'].createElement(Button, { size: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React__default['default'].createElement(Button, { size: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};

var Icon$13 = function (props) {
    var theme = styled.useTheme();
    theme.isDark ? "#3C3742" : "#e9eaeb";
    theme.isDark ? "#666171" : "#bdc2c4";
    return (React__default['default'].createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React__default['default'].createElement("defs", null,
            React__default['default'].createElement("mask", { id: "mask", x: "2.75", y: "-3.2", width: "64.5", height: "64.5", maskUnits: "userSpaceOnUse" },
                React__default['default'].createElement("g", { id: "A" },
                    React__default['default'].createElement("path", { d: "M67.25,29.05A32.25,32.25,0,1,1,35-3.2,32.25,32.25,0,0,1,67.25,29.05Z", fill: "#c4c4c4" })))),
        React__default['default'].createElement("path", { d: "M72,36A36,36,0,1,1,36,0,36,36,0,0,1,72,36Z", fill: "#fcf8f5" }),
        React__default['default'].createElement("g", { mask: "url(#mask)" },
            React__default['default'].createElement("g", null,
                React__default['default'].createElement("path", { d: "M56.52,16.42h-41a27.59,27.59,0,0,0-1.91,3.66A31.33,31.33,0,0,0,11,32.62C11,48.29,22.19,61,36,61s25-12.7,25-28.37a31.33,31.33,0,0,0-2.57-12.54A27.59,27.59,0,0,0,56.52,16.42Z", fill: "#875930" }),
                React__default['default'].createElement("path", { d: "M57.06,17.77a2.3,2.3,0,0,1-.3,1.13C55.08,22.1,46.43,24.53,36,24.53S16.92,22.1,15.24,18.9a2.3,2.3,0,0,1-.3-1.13c0-1.22,1-2.37,2.78-3.36C21.35,12.38,28.18,11,36,11s14.65,1.37,18.28,3.4C56.05,15.4,57.06,16.55,57.06,17.77Z", fill: "#80cc33" }),
                React__default['default'].createElement("path", { d: "M47.52,17.17c0,1.55-5,2.81-11.24,2.81S25,18.72,25,17.17s5-2.81,11.24-2.81S47.52,15.62,47.52,17.17Z", fill: "#dbe6b7" }),
                React__default['default'].createElement("g", null,
                    React__default['default'].createElement("path", { d: "M24.51,17.57c0,.36-.64.66-1.42.66s-1.42-.3-1.42-.66.64-.67,1.42-.67S24.51,17.2,24.51,17.57Z", fill: "#010100" }),
                    React__default['default'].createElement("ellipse", { cx: "48.6", cy: "17.73", rx: "1.48", ry: "0.7", fill: "#010100" }),
                    React__default['default'].createElement("path", { d: "M27.58,19.4c0,.38-.66.7-1.48.7s-1.48-.32-1.48-.7.66-.7,1.48-.7S27.58,19,27.58,19.4Z", fill: "#010100" }),
                    React__default['default'].createElement("path", { d: "M34.88,20.68c0,.59-1,1.06-2.24,1.06s-2.25-.47-2.25-1.06,1-1.05,2.25-1.05S34.88,20.1,34.88,20.68Z", fill: "#010100" }),
                    React__default['default'].createElement("path", { d: "M45.69,20.56c0,.42-.71.76-1.6.76s-1.6-.34-1.6-.76.71-.75,1.6-.75S45.69,20.15,45.69,20.56Z", fill: "#010100" }),
                    React__default['default'].createElement("path", { d: "M26.49,15.21c0-.48-.83-.87-1.86-.87s-1.86.39-1.86.87.84.88,1.86.88S26.49,15.7,26.49,15.21Z", fill: "#010100" }),
                    React__default['default'].createElement("path", { d: "M34.11,13.83c0-.48-.84-.87-1.86-.87s-1.86.39-1.86.87.83.88,1.86.88S34.11,14.32,34.11,13.83Z", fill: "#010100" }),
                    React__default['default'].createElement("path", { d: "M47,14.75c0-.51-.87-.92-1.94-.92s-1.95.41-1.95.92.87.91,1.95.91S47,15.25,47,14.75Z", fill: "#010100" })),
                React__default['default'].createElement("ellipse", { cx: "29.4", cy: "38.69", rx: "5.91", ry: "7.88", fill: "#fff" }),
                React__default['default'].createElement("ellipse", { cx: "42.98", cy: "38.69", rx: "5.91", ry: "7.88", fill: "#fff" }),
                React__default['default'].createElement("path", { d: "M37.6,45.88a.3.3,0,0,0-.54.07,2.82,2.82,0,0,0-.07.82,2.67,2.67,0,0,1-.16.69,1.06,1.06,0,0,1-.68.69c-.95.23-1-1.63-1-2.12,0-.24-.39-.32-.44-.06-.17,1,0,2.82,1.44,2.83a1.53,1.53,0,0,0,1.2-.76A2.52,2.52,0,0,0,37.6,45.88Z", fill: "#592d0f" }),
                React__default['default'].createElement("path", { d: "M29.17,28c-1.17-1-2.87.22-3.53,1.24-.11.17.15.37.28.22a4.54,4.54,0,0,1,1.27-1,3.6,3.6,0,0,1,1.87-.21A.15.15,0,0,0,29.17,28Z", fill: "#592d0f" }),
                React__default['default'].createElement("path", { d: "M43.86,29.11c-.81-1.91-3.33-1.28-4.58-.29-.12.1,0,.28.17.21a5,5,0,0,1,2.09-.63,3.23,3.23,0,0,1,2.11.92C43.79,29.42,43.91,29.23,43.86,29.11Z", fill: "#592d0f" }),
                React__default['default'].createElement("ellipse", { cx: "29.8", cy: "38.9", rx: "3.74", ry: "5.23", fill: "#010100" }),
                React__default['default'].createElement("ellipse", { cx: "42.3", cy: "38.9", rx: "3.74", ry: "5.23", fill: "#010100" }),
                React__default['default'].createElement("ellipse", { cx: "28.65", cy: "34.01", rx: "1.09", ry: "1.56", fill: "#fff" }),
                React__default['default'].createElement("ellipse", { cx: "41.15", cy: "34.01", rx: "1.09", ry: "1.56", fill: "#fff" }))),
        React__default['default'].createElement("path", { d: "M72,37.09,69.74,37V35L72,34.91,72,36Zm-.12-4.35-2.25.2-.24-2,2.23-.34.26,2.16Zm-.65-4.3-2.2.47-.49-2,2.17-.6.52,2.11ZM70,24.25,67.91,25l-.72-1.91,2.08-.86.77,2Zm-1.66-4-2,1-.95-1.8,2-1.11Zm-2.14-3.79-1.89,1.23L63.19,16,65,14.66ZM63.66,13l-1.73,1.44-1.35-1.52,1.63-1.55L63.66,13Zm-3-3.16-1.55,1.64-1.52-1.36,1.44-1.73,1.63,1.45ZM57.34,7,56,8.81,54.33,7.65l1.22-1.88ZM53.69,4.64l-1.11,2-1.8-.95,1-2,1.93,1ZM49.78,2.73l-.86,2.08L47,4.09,47.75,2l2,.77ZM45.67,1.31l-.6,2.17-2-.48L43.56.8l2.11.52ZM41.42.41l-.34,2.22-2-.24.2-2.24ZM37.09,0,36,0,34.91,0,35,2.27l1,0,1,0ZM32.74.14l.2,2.25-2,.24L30.58.4,32.74.15Zm-4.3.65L28.91,3l-2,.49-.6-2.17L28.44.79ZM24.25,2,25,4.09l-1.91.72-.86-2.08,2-.77Zm-4,1.66,1,2-1.8.95-1.11-2ZM16.45,5.76l1.22,1.89L16,8.81,14.66,7ZM13,8.34l1.44,1.73-1.52,1.35L11.32,9.79,13,8.34Zm-3.16,3,1.63,1.55-1.35,1.52L8.34,13l1.45-1.62ZM7,14.66,8.81,16,7.65,17.67,5.76,16.45ZM4.64,18.31l2,1.11-.95,1.8-2-1,1-1.93ZM2.73,22.22l2.08.86L4.09,25,2,24.25l.77-2ZM1.31,26.33l2.17.6-.48,2L.8,28.44l.52-2.11Zm-.9,4.25,2.22.34-.24,2-2.24-.2ZM0,34.91,0,36l0,1.09L2.27,37l0-1,0-1Zm.12,4.35,2.25-.2.24,2L.4,41.42Zm.65,4.3L3,43.09l.49,2-2.17.6L.79,43.56ZM2,47.75,4.09,47l.72,1.91-2.08.86-.77-2Zm1.66,4,2-1,.94,1.8L4.64,53.69l-1-1.93Zm2.14,3.79,1.89-1.23L8.81,56,7,57.34Zm2.58,3.5,1.73-1.44,1.35,1.52L9.78,60.67,8.34,59.05Zm3,3.16,1.55-1.64,1.52,1.36L13,63.65l-1.63-1.44ZM14.66,65,16,63.19l1.67,1.16-1.22,1.88Zm3.65,2.36,1.11-2,1.8.95-1,2-1.93-1Zm3.91,1.91.86-2.08,1.91.72L24.25,70l-2-.77Zm4.11,1.41.6-2.16,2,.48-.47,2.2-2.11-.52Zm4.25.91.34-2.22,2,.24-.2,2.24Zm4.33.39L35,69.73l1,0h1L37.09,72,36,72c-.37,0-.73,0-1.09,0Zm4.35-.13-.2-2.24,2-.24.34,2.23-2.16.26Zm4.3-.65L43.09,69l2-.48.6,2.17-2.11.52ZM47.75,70,47,67.91l1.91-.72.86,2.08-2,.77Zm4-1.67-1-2,1.81-.95,1.11,2-1.93,1Zm3.79-2.14-1.23-1.88L56,63.19,57.33,65Zm3.5-2.57L57.6,61.93l1.53-1.36,1.54,1.64-1.62,1.45Zm3.16-3-1.64-1.54,1.36-1.52,1.72,1.44-1.44,1.62ZM65,57.34,63.19,56l1.16-1.68,1.88,1.23Zm2.36-3.65-2-1.11.95-1.81,2,1-1,1.93Zm1.91-3.91-2.08-.86L67.91,47l2.13.74-.77,2Zm1.41-4.11-2.16-.6.48-2,2.2.47-.52,2.11Zm.91-4.25-2.22-.34.24-2,2.24.2Z", fill: "#9b8372", "fill-rule": "evenodd" })));
};

var StyledAvatar = styled__default['default'].div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"], ["\n  margin-left: 8px;\n  position: relative;\n\n  img {\n    border-radius: 50%;\n  }\n"])));
var Pip = styled__default['default'].div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  pointer-events: none;\n  height: 8px;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var Avatar = function (_a) {
    var profile = _a.profile;
    var _b = profile.username, username = _b === void 0 ? "Bunny" : _b, image = profile.image, profileLink = profile.profileLink, noProfileLink = profile.noProfileLink, _c = profile.showPip, showPip = _c === void 0 ? false : _c;
    var link = profile.username ? profileLink : noProfileLink;
    var isExternal = link.startsWith("http");
    var ariaLabel = "Link to profile";
    var icon = image ? (React__default['default'].createElement("img", { src: image, alt: "profile avatar", height: "32px", width: "32px" })) : (React__default['default'].createElement(Icon$13, { width: "32px", height: "32px" }));
    if (isExternal) {
        return (React__default['default'].createElement(StyledAvatar, { title: username },
            React__default['default'].createElement("a", { href: link, "aria-label": ariaLabel }, icon),
            showPip && React__default['default'].createElement(Pip, null)));
    }
    return (React__default['default'].createElement(StyledAvatar, { title: username },
        React__default['default'].createElement(reactRouterDom.Link, { to: link, "aria-label": ariaLabel }, icon),
        showPip && React__default['default'].createElement(Pip, null)));
};
var templateObject_1$G, templateObject_2$e;

var Wrapper$1 = styled__default['default'].div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled__default['default'].nav(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled__default['default'].div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled__default['default'].div(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s;\n  transform: translate3d(0, 0, 0);\n  ", " {\n    margin-left: ",
    ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var MobileOnlyOverlay = styled__default['default'](Overlay)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, kiwiPriceUsd = _a.kiwiPriceUsd, links = _a.links, profile = _a.profile, children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = React.useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = React.useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = React.useRef(window.pageYOffset);
    React.useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight ===
                currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle__default['default'](handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React__default['default'].createElement(Wrapper$1, null,
        React__default['default'].createElement(StyledNav, { showMenu: showMenu },
            React__default['default'].createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React__default['default'].createElement(Flex, null,
                React__default['default'].createElement(UserBlock, { account: account, login: login, logout: logout }),
                profile && React__default['default'].createElement(Avatar, { profile: profile }))),
        React__default['default'].createElement(BodyWrapper, null,
            React__default['default'].createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, kiwiPriceUsd: kiwiPriceUsd, pushNav: setIsPushed, links: links }),
            React__default['default'].createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React__default['default'].createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$H, templateObject_2$f, templateObject_3$8, templateObject_4$4, templateObject_5$1;

var ToastAction = function (_a) {
    var action = _a.action;
    if (action.url.startsWith("http")) {
        return (React__default['default'].createElement(Button, __assign({ as: "a", size: "sm", href: action.url }, getExternalLinkProps()), action.text));
    }
    return (React__default['default'].createElement(Button, { as: reactRouterDom.Link, size: "sm", to: action.url }, action.text));
};

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a$1;
var alertTypeMap = (_a$1 = {},
    _a$1[types.INFO] = variants$1.INFO,
    _a$1[types.SUCCESS] = variants$1.SUCCESS,
    _a$1[types.DANGER] = variants$1.DANGER,
    _a$1[types.WARNING] = variants$1.WARNING,
    _a$1);
var StyledToast = styled__default['default'].div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = React.useRef();
    var ref = React.useRef(null);
    var removeHandler = React.useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type, action = toast.action;
    var handleRemove = React.useCallback(function () { return removeHandler.current(id); }, [
        id,
        removeHandler,
    ]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    React.useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React__default['default'].createElement(reactTransitionGroup.CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React__default['default'].createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React__default['default'].createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, action ? (React__default['default'].createElement(React__default['default'].Fragment, null,
                React__default['default'].createElement(Text, { as: "p", mb: "8px" }, description),
                React__default['default'].createElement(ToastAction, { action: action }))) : (description)))));
};
var templateObject_1$I;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled__default['default'].div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React__default['default'].createElement(StyledToastContainer, null,
        React__default['default'].createElement(reactTransitionGroup.TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React__default['default'].createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$J;

var ResetCSS = styled.createGlobalStyle(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Nunito Sans', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", ";\n    border-radius: 10px;\n  }\n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed,\n  figure, figcaption, footer, header, hgroup,\n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure,\n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Nunito Sans', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", ";\n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", ";\n    border-radius: 10px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1$K;

var baseColors = {
    failure: "#ED4B9E",
    primary: "#80CC33",
    primaryBright: "#4BCC33",
    primaryDark: "#57a50a",
    secondary: "#9E6F41",
    success: "#31D087",
    warning: "#FFB237",
};
var brandColors = {
    binance: "#F0B90B",
};
var lightColors = __assign(__assign(__assign({}, baseColors), brandColors), { background: "#FAF9FA", backgroundDisabled: "#ECEBEA", contrast: "#191326", invertedContrast: "#FFFFFF", input: "#ECDFD6", tertiary: "#EFF4F5", text: "#634A31", textDisabled: "#CCC4BE", textSubtle: "#A67341", borderColor: "#E9EAEB", card: "#FFFFFF", gradients: {
        bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), brandColors), { secondary: "#9e6f41", background: "#222120", backgroundDisabled: "#38322D", contrast: "#FFFFFF", invertedContrast: "#191326", input: "#585149", primaryDark: "#0098A1", tertiary: "#383532", text: "#F1D2B0", textDisabled: "#6F655A", textSubtle: "#D4A777", borderColor: "#383532", card: "#2c2a28", gradients: {
        bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    } });

var light = {
    background: lightColors.card,
};
var dark = {
    background: darkColors.card,
};

var _a$2, _b;
var PRIMARY = variants.PRIMARY, SECONDARY = variants.SECONDARY, TERTIARY = variants.TERTIARY, TEXT = variants.TEXT, DANGER = variants.DANGER, SUBTLE = variants.SUBTLE, SUCCESS = variants.SUCCESS;
var light$1 = (_a$2 = {},
    _a$2[PRIMARY] = {
        background: lightColors.primary,
        backgroundActive: lightColors.primaryDark,
        backgroundHover: lightColors.primaryBright,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        boxShadowActive: "inset 0px -1px 0px rgba(14, 14, 44, 0.4)",
        color: "#FFFFFF",
    },
    _a$2[SECONDARY] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: "transparent",
        border: "2px solid " + lightColors.primary,
        borderColorHover: lightColors.primaryBright,
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TERTIARY] = {
        background: lightColors.tertiary,
        backgroundActive: lightColors.tertiary,
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[TEXT] = {
        background: "transparent",
        backgroundActive: "transparent",
        backgroundHover: lightColors.tertiary,
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: lightColors.primary,
    },
    _a$2[DANGER] = {
        background: lightColors.failure,
        backgroundActive: "#D43285",
        backgroundHover: "#FF65B8",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUBTLE] = {
        background: lightColors.textSubtle,
        backgroundActive: lightColors.textSubtle + "D9",
        backgroundHover: lightColors.textSubtle + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2[SUCCESS] = {
        background: lightColors.success,
        backgroundActive: lightColors.success + "D9",
        backgroundHover: lightColors.success + "B3",
        border: 0,
        borderColorHover: "currentColor",
        boxShadow: "none",
        boxShadowActive: "none",
        color: "#FFFFFF",
    },
    _a$2);
var dark$1 = (_b = {},
    _b[PRIMARY] = __assign({}, light$1.primary),
    _b[SECONDARY] = __assign({}, light$1.secondary),
    _b[TERTIARY] = __assign(__assign({}, light$1.tertiary), { background: darkColors.tertiary, backgroundActive: darkColors.tertiary, backgroundHover: darkColors.tertiary, color: darkColors.primary }),
    _b[TEXT] = __assign(__assign({}, light$1.text), { backgroundHover: darkColors.tertiary }),
    _b[DANGER] = __assign({}, light$1.danger),
    _b[SUBTLE] = __assign({}, light$1.subtle),
    _b[SUCCESS] = __assign({}, light$1.success),
    _b);

var light$2 = {
    background: lightColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
};
var dark$2 = {
    background: darkColors.card,
    boxShadow: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
};

var light$3 = {
    handleBackground: lightColors.card,
};
var dark$3 = {
    handleBackground: darkColors.card,
};

var light$4 = {
    handleBackground: lightColors.card,
};
var dark$4 = {
    handleBackground: darkColors.card,
};

var light$5 = {
    background: lightColors.card,
    hover: "#EEEAF4",
};
var dark$5 = {
    background: darkColors.card,
    hover: "#473d5d",
};

var light$6 = {
    background: lightColors.card,
};
var dark$6 = {
    background: darkColors.card,
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark, button: dark$1, colors: darkColors, card: dark$2, toggle: dark$4, nav: dark$5, modal: dark$6, radio: dark$3 });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light, button: light$1, colors: lightColors, card: light$2, toggle: light$4, nav: light$5, modal: light$6, radio: light$3 });

exports.AddIcon = Icon$4;
exports.Alert = Alert;
exports.ArrowBackIcon = Icon$5;
exports.ArrowDownIcon = Icon$6;
exports.ArrowDropDownIcon = Icon$7;
exports.ArrowDropUpIcon = Icon$8;
exports.ArrowForwardIcon = Icon$9;
exports.AutoRenewIcon = Icon$a;
exports.BackgroundImage = BackgroundImage;
exports.BaseLayout = GridLayout;
exports.BinanceIcon = Icon$b;
exports.BlockIcon = Icon$2;
exports.Breadcrumbs = Breadcrumbs;
exports.BunnyPlaceholderIcon = Icon$c;
exports.Button = Button;
exports.ButtonMenu = ButtonMenu;
exports.ButtonMenuItem = ButtonMenuItem;
exports.CalculateIcon = Icon$e;
exports.Card = Card;
exports.CardBody = CardBody;
exports.CardFooter = CardFooter;
exports.CardHeader = CardHeader;
exports.CardRibbon = CardRibbon;
exports.CardViewIcon = Icon$d;
exports.CardsLayout = GridLayout$1;
exports.Checkbox = Checkbox;
exports.CheckmarkCircleIcon = Icon;
exports.CheckmarkIcon = Icon$f;
exports.ChevronDownIcon = Icon$g;
exports.ChevronLeftIcon = Icon$h;
exports.ChevronRightIcon = Icon$i;
exports.ChevronUpIcon = Icon$j;
exports.CloseIcon = Icon$k;
exports.CogIcon = Icon$l;
exports.CommunityIcon = Icon$m;
exports.CopyIcon = Icon$n;
exports.Dropdown = Dropdown;
exports.ErrorIcon = Icon$1;
exports.Flex = Flex;
exports.Heading = Heading;
exports.HelpIcon = Icon$o;
exports.IconButton = IconButton;
exports.Image = Image;
exports.InfoIcon = Icon$3;
exports.Input = Input;
exports.KiwiRoundIcon = Icon$v;
exports.KiwisIcon = Icon$u;
exports.Link = Link;
exports.LinkExternal = LinkExternal;
exports.ListViewIcon = Icon$p;
exports.LogoIcon = Icon$q;
exports.LogoRoundIcon = Icon$r;
exports.Menu = Menu;
exports.MinusIcon = Icon$s;
exports.Modal = Modal;
exports.ModalProvider = ModalProvider;
exports.OpenNewIcon = Icon$t;
exports.PrizeIcon = Icon$w;
exports.Progress = Progress;
exports.ProgressBunny = Icon$z;
exports.Radio = Radio;
exports.RemoveIcon = Icon$x;
exports.ResetCSS = ResetCSS;
exports.SearchIcon = Icon$D;
exports.Skeleton = Skeleton;
exports.Spinner = Spinner;
exports.Svg = Svg;
exports.SwapVertIcon = Icon$E;
exports.SyncAltIcon = Icon$F;
exports.Tag = Tag;
exports.Text = Text;
exports.Ticket = Icon$B;
exports.TicketRound = Icon$C;
exports.ToastContainer = ToastContainer;
exports.Toggle = Toggle;
exports.VerifiedIcon = Icon$y;
exports.WarningIcon = Icon$G;
exports.Won = Icon$A;
exports.alertVariants = variants$1;
exports.byTextAscending = byTextAscending;
exports.byTextDescending = byTextDescending;
exports.dark = darkTheme;
exports.darkColors = darkColors;
exports.light = lightTheme;
exports.lightColors = lightColors;
exports.makeRender = makeRender;
exports.menuConfig = links;
exports.toastTypes = types;
exports.useMatchBreakpoints = useMatchBreakpoints;
exports.useModal = useModal;
exports.useParticleBurst = useParticleBurst;
exports.useTable = useTable;
exports.useWalletModal = useWalletModal;
