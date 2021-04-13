(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('lodash'), require('rxjs'), require('jquery'), require('rxjs/operators'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('date-fns/locale'), require('@angular/common'), require('@angular/common/locales/vi'), require('@ant-design/icons-angular/icons'), require('ng-zorro-antd'), require('date-fns/differenceInCalendarDays'), require('moment'), require('ng2-currency-mask'), require('angular2-text-mask')) :
    typeof define === 'function' && define.amd ? define('@orendaco/of', ['exports', '@angular/core', '@angular/forms', 'lodash', 'rxjs', 'jquery', 'rxjs/operators', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', 'date-fns/locale', '@angular/common', '@angular/common/locales/vi', '@ant-design/icons-angular/icons', 'ng-zorro-antd', 'date-fns/differenceInCalendarDays', 'moment', 'ng2-currency-mask', 'angular2-text-mask'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.orendaco = global.orendaco || {}, global.orendaco.of = {}), global.ng.core, global.ng.forms, global._, global.rxjs, global.$, global.rxjs.operators, global.i18n, global.icon, global.locale, global.ng.common, global.ng.common.locales.vi, global.AllIcons, global.ngZorroAntd, global.differenceInCalendarDays, global.moment, global.ng2CurrencyMask, global.angular2TextMask));
}(this, (function (exports, i0, i1, _, rxjs, $, operators, i18n, icon, locale, common, vi, AllIcons, ngZorroAntd, differenceInCalendarDays, moment, ng2CurrencyMask, angular2TextMask) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () {
                            return e[k];
                        }
                    });
                }
            });
        }
        n['default'] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);
    var ___namespace = /*#__PURE__*/_interopNamespace(_);
    var $__namespace = /*#__PURE__*/_interopNamespace($);
    var vi__default = /*#__PURE__*/_interopDefaultLegacy(vi);
    var AllIcons__namespace = /*#__PURE__*/_interopNamespace(AllIcons);
    var differenceInCalendarDays__default = /*#__PURE__*/_interopDefaultLegacy(differenceInCalendarDays);
    var moment__namespace = /*#__PURE__*/_interopNamespace(moment);

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
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var DestroyRxjsService = /** @class */ (function (_super) {
        __extends(DestroyRxjsService, _super);
        function DestroyRxjsService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DestroyRxjsService.prototype.ngOnDestroy = function () {
            this.next();
            this.complete();
        };
        return DestroyRxjsService;
    }(rxjs.Subject));
    DestroyRxjsService.decorators = [
        { type: i0.Injectable }
    ];

    var AppUtilityService = /** @class */ (function () {
        function AppUtilityService() {
        }
        AppUtilityService.isNullOrEmpty = function (input) {
            return typeof input === 'undefined' || input === null || input === '';
            // return !(typeof input !== 'undefined' && input && input !== '' && input !== null);
        };
        AppUtilityService.isNotNull = function (input) {
            return !AppUtilityService.isNullOrEmpty(input);
        };
        AppUtilityService.getFullTextSearch = function (str) {
            if (AppUtilityService.isNullOrEmpty(str)) {
                return str;
            }
            str += '';
            str = AppUtilityService.removeDau(str);
            str = str.replace(/\s\s+/g, ' ');
            return str;
        };
        AppUtilityService.removeDau = function (str) {
            if (AppUtilityService.isNullOrEmpty(str)) {
                return str;
            }
            str = str.toLowerCase();
            str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
            str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
            str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
            str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
            str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
            str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
            str = str.replace(/đ/g, 'd');
            str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, ' ');
            str = str.replace(/ + /g, ' ');
            str = str.trim();
            return str;
        };
        AppUtilityService.isNotAnyItem = function (input) {
            return AppUtilityService.isNullOrEmpty(input) || input.length === 0;
        };
        AppUtilityService.isWhitespace = function (value) {
            return (value || '').trim().length === 0;
        };
        AppUtilityService.searchVietTat = function (str) {
            if (AppUtilityService.isNullOrEmpty(str)) {
                return str;
            }
            var ret = '';
            var spl = str.split(' ');
            if (AppUtilityService.isNotAnyItem(spl) === false) {
                spl.forEach(function (s) {
                    if (s.length > 0) {
                        ret = ret + s[0];
                    }
                });
            }
            return AppUtilityService.getFullTextSearch(___namespace.cloneDeep(ret));
        };
        return AppUtilityService;
    }());
    AppUtilityService.decorators = [
        { type: i0.Injectable }
    ];
    AppUtilityService.ctorParameters = function () { return []; };

    var OfValidatorService = /** @class */ (function () {
        function OfValidatorService() {
        }
        OfValidatorService.prototype.noWhitespaceValidator = function (control) {
            if (AppUtilityService.isNullOrEmpty(control.value)) {
                return { whiteSpace: true };
            }
            var v = '' + control.value;
            var isWhitespace = v.trim().length === 0;
            var isValid = !isWhitespace;
            return isValid ? null : { whiteSpace: true };
        };
        OfValidatorService.prototype.emailValidator = function (control) {
            var value = (control === null || control === void 0 ? void 0 : control.value) || '';
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var isValid = re.test(value);
            return isValid ? null : { email: true };
        };
        OfValidatorService.prototype.passwordValidator = function (control) {
            var value = (control === null || control === void 0 ? void 0 : control.value) || '';
            var check = value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/);
            var isValid = !!check;
            return isValid ? null : { password: true };
        };
        OfValidatorService.prototype.phoneValidator = function (control) {
            var value = (control === null || control === void 0 ? void 0 : control.value) || '';
            var check = value.match(/(09|01[2|6|8|9])+([0-9]{8})\b/);
            var isValid = !!check;
            return isValid ? null : { phone: true };
        };
        OfValidatorService.prototype.focusControlItem = function (id) {
            var arr = $__namespace('#' + id).find('.ord-form-control');
            var flag = true;
            arr.each(function () {
                var txt = $__namespace(this).find('.form-control-err').text();
                if (txt) {
                    txt = txt.replace(/ /g, '');
                }
                if (flag && AppUtilityService.isNotNull(txt)) {
                    $__namespace(this).find('.ord-dynamic-input').focus();
                    $__namespace(this).find('.ant-input-number-input').focus();
                    $__namespace(this).find('.ant-input').focus();
                    $__namespace(this).find('.ant-select-selection-search-input').focus();
                    if ($__namespace(this).find('.ant-radio-input')[0]) {
                        $__namespace(this).find('.ant-radio-input')[0].focus();
                    }
                    flag = false;
                }
            });
        };
        OfValidatorService.prototype.focusFirst = function (id) {
            var arr = $__namespace('#' + id).find('.ord-form-control');
            var flag = true;
            arr.each(function () {
                if (flag) {
                    $__namespace(this).find('.ord-dynamic-input').focus();
                    $__namespace(this).find('.ant-input-number-input').focus();
                    $__namespace(this).find('.ant-input').focus();
                    $__namespace(this).find('.ant-select-selection-search-input').focus();
                    if ($__namespace(this).find('.ant-radio-input')[0]) {
                        $__namespace(this).find('.ant-radio-input')[0].focus();
                    }
                    flag = false;
                }
            });
        };
        return OfValidatorService;
    }());
    OfValidatorService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function OfValidatorService_Factory() { return new OfValidatorService(); }, token: OfValidatorService, providedIn: "root" });
    OfValidatorService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    OfValidatorService.ctorParameters = function () { return []; };

    var OfCreateControlFormService = /** @class */ (function () {
        function OfCreateControlFormService(fb, validatorService) {
            this.fb = fb;
            this.validatorService = validatorService;
        }
        OfCreateControlFormService.prototype.createControl = function (fields) {
            var _this = this;
            var group = this.fb.group({});
            ___namespace.forEach(fields, function (field) {
                _this.createField(field, group);
            });
            return group;
        };
        OfCreateControlFormService.prototype.createExtendControl = function (group, controls) {
            var _this = this;
            ___namespace.forEach(controls, function (field) {
                var f = group.get(field.dataField);
                if (f) {
                    return;
                }
                _this.createValidations(field);
                var control = _this.fb.control(field.value, _this.bindValidations(field));
                if (field.disabled) {
                    control.disable({ onlySelf: true });
                }
                group.addControl(field.dataField, control);
            });
        };
        OfCreateControlFormService.prototype.getDataFieldAndNameConstrols = function (fields) {
            var ret = [];
            ___namespace.forEach(fields, function (f) {
                ret.push(f.dataField);
                if (f === null || f === void 0 ? void 0 : f.controls) {
                    ___namespace.forEach(f.controls, function (ctrl) {
                        ret.push(ctrl.dataField);
                    });
                }
            });
            return ret;
        };
        OfCreateControlFormService.prototype.updateControl = function (fields, group) {
            var _this = this;
            var lstNameField = this.getDataFieldAndNameConstrols(fields);
            Object.keys(group.controls).forEach(function (key) {
                var fDataField = lstNameField.indexOf(key) > -1;
                if (!fDataField) {
                    group.removeControl(key);
                }
            });
            ___namespace.forEach(fields, function (field) {
                var f = group.get(field.dataField);
                if (f) {
                    return;
                }
                _this.createField(field, group);
            });
        };
        OfCreateControlFormService.prototype.createField = function (field, group) {
            var ignoreType = ['contentHtml', 'componentRef', 'templateRef'];
            if (ignoreType.indexOf(field.type) > 0) {
                return;
            }
            this.createValidations(field);
            var control = this.fb.control(field.value, this.bindValidations(field));
            if (field.disabled) {
                control.disable({ onlySelf: true });
            }
            group.addControl(field.dataField, control);
        };
        OfCreateControlFormService.prototype.createValidations = function (field) {
            var _this = this;
            field.validations = field.validations || [];
            field.validations.forEach(function (valid) {
                if (valid.name === 'email') {
                    valid.validator = _this.validatorService.emailValidator;
                    valid.message = valid.message || 'Email sai định dạng!';
                    return;
                }
                if (valid.name === 'phone') {
                    valid.validator = _this.validatorService.phoneValidator;
                    valid.message = valid.message || 'Số điện thoại không đúng định dạng!';
                    return;
                }
                if (valid.name === 'password') {
                    valid.validator = _this.validatorService.passwordValidator;
                    valid.message = valid.message || 'Mật khẩu tối thiểu 8 ký tự, bao gồm chữ in hoa/ thường , số và ký tự đặc biệt!';
                    return;
                }
            });
            if (field.required) {
                field.validations.push({
                    name: 'whiteSpace',
                    validator: this.validatorService.noWhitespaceValidator,
                    message: field.errorEmpty
                });
            }
        };
        OfCreateControlFormService.prototype.bindValidations = function (field) {
            var validations = field.validations || [];
            if (validations.length > 0) {
                var validList_1 = [];
                validations.forEach(function (valid) {
                    validList_1.push(valid.validator);
                });
                return i1.Validators.compose(validList_1);
            }
            return null;
        };
        return OfCreateControlFormService;
    }());
    OfCreateControlFormService.ɵprov = i0__namespace.ɵɵdefineInjectable({ factory: function OfCreateControlFormService_Factory() { return new OfCreateControlFormService(i0__namespace.ɵɵinject(i1__namespace.FormBuilder), i0__namespace.ɵɵinject(OfValidatorService)); }, token: OfCreateControlFormService, providedIn: "root" });
    OfCreateControlFormService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    OfCreateControlFormService.ctorParameters = function () { return [
        { type: i1.FormBuilder },
        { type: OfValidatorService }
    ]; };

    var OfDynamicComponent = /** @class */ (function () {
        function OfDynamicComponent(fb, createCtrlService, validatorService, destroy$) {
            this.fb = fb;
            this.createCtrlService = createCtrlService;
            this.validatorService = validatorService;
            this.destroy$ = destroy$;
            this.submitValueEvent = new i0.EventEmitter();
            this.searchEvent = new i0.EventEmitter();
            this.fields = [];
            this.ofFieldTempates = [];
        }
        Object.defineProperty(OfDynamicComponent.prototype, "value", {
            get: function () {
                var _a;
                return (_a = this.form) === null || _a === void 0 ? void 0 : _a.getRawValue();
            },
            enumerable: false,
            configurable: true
        });
        OfDynamicComponent.prototype.ngOnInit = function () {
            this.fields = this.schemaModel.fields || [];
            this.form = this.createCtrlService.createControl(this.fields);
            this.schemaModel.form = this.form;
            this.init$();
        };
        OfDynamicComponent.prototype.reBuilderForm = function () {
            this.fields = this.schemaModel.fields || [];
            this.createCtrlService.updateControl(this.fields, this.form);
            this.schemaModel.form = this.form;
        };
        OfDynamicComponent.prototype.init$ = function () {
            var _this = this;
            this.schemaModel.rebuilder$.pipe(operators.takeUntil(this.destroy$), operators.distinctUntilChanged(), operators.filter(function (x) { return x > 0; }))
                .subscribe(function () {
                _this.reBuilderForm();
            });
        };
        OfDynamicComponent.prototype.trackByField = function (index, field) {
            return field.dataField;
        };
        OfDynamicComponent.prototype.onSubmit = function (isCheckValid) {
            var _this = this;
            if (isCheckValid === void 0) { isCheckValid = true; }
            this.schemaModel.submitted = true;
            if (!isCheckValid) {
                this.submitValueEvent.emit(this.value);
                return this.value;
            }
            ___namespace.forEach(this.fields, function (field) {
                var f = _this.form.controls[field.dataField];
                if (f) {
                    if (field.hidden) {
                        f.setValidators(null);
                    }
                    else {
                        f.setValidators(_this.createCtrlService.bindValidations(field));
                    }
                }
            });
            if (this.form.valid) {
                this.submitValueEvent.emit(this.value);
                return this.value;
            }
            else {
                setTimeout(function () {
                    _this.validatorService.focusControlItem(_this.schemaModel.id);
                }, 500);
                return null;
            }
        };
        OfDynamicComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.validatorService.focusFirst(_this.schemaModel.id);
            }, 500);
        };
        OfDynamicComponent.prototype.onClickSearchBtn = function () {
            this.schemaModel.searchBtnBusy = true;
            this.searchEvent.emit(this.value);
            this.schemaModel.searchEvent$.next(this.value);
        };
        OfDynamicComponent.prototype.disableAll = function (f) {
            if (f === void 0) { f = true; }
            this.schemaModel.disableAll(f);
        };
        OfDynamicComponent.prototype.disableField = function (name, f) {
            if (f === void 0) { f = true; }
            this.schemaModel.disableField(name, f);
        };
        OfDynamicComponent.prototype.addOfFieldTempates = function (d) {
            this.ofFieldTempates.push(d);
        };
        return OfDynamicComponent;
    }());
    OfDynamicComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of',
                    template: "<form class=\"dynamic-form\" [formGroup]=\"form\">\r\n  <div nz-row [nzGutter]=\"[18, 6]\" [id]=\"schemaModel.id\">\r\n    <ng-content select=\"[topContent]\"></ng-content>\r\n    <ng-container *ngFor=\"let field of fields;trackBy:trackByField\">\r\n      <div nz-col *ngIf=\"!field.hidden\" [nzSpan]=\"field.width\" [ngClass]=\"field.css\">\r\n        <nz-form-label [nzRequired]=\"field.required\" [hidden]=\"field.hiddenLabel\">\r\n          <span [innerHTML]=\"field.label\"></span>\r\n        </nz-form-label>\r\n        <div ofDynamicField [schemaModel]=\"schemaModel\" [field]=\"field\" [group]=\"form\"\r\n             [ofFieldTempates]=\"ofFieldTempates\" (searchEvent)=\"searchEvent.emit($event)\">\r\n        </div>\r\n        <of-valid-error [controlName]=\"field.dataField\"\r\n                        [validations]=\"field?.validations\"\r\n                        [form]=\"form\"\r\n                        [submitted]=\"schemaModel.submitted\"\r\n        ></of-valid-error>\r\n        <!--        <span class=\"form-control-err text-danger\">-->\r\n        <!--              {{this.form.controls[field.dataField]?.errors | showValidationError : field?.validations : schemaModel.submitted}}-->\r\n        <!--        </span>-->\r\n        <div [innerHTML]=\"field.bottomHtml\"></div>\r\n      </div>\r\n    </ng-container>\r\n    <div *ngIf=\"schemaModel.isSearchBox\" nz-col class=\"gutter-row of-btn-search ord-form-control\" [nzSpan]=\"2\">\r\n      <button nz-button nzType=\"primary\"\r\n              [nzLoading]=\"schemaModel.searchBtnBusy\"\r\n              (click)=\"onClickSearchBtn()\">T\u00ECm ki\u1EBFm\r\n      </button>\r\n    </div>\r\n    <ng-content select=\"[bottomContent]\"></ng-content>\r\n  </div>\r\n</form>\r\n",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [DestroyRxjsService],
                    styles: [".of-btn-search{max-width:109px}.of-btn-search button{margin-top:25px!important}.ant-form-item-label{padding:0!important;height:25px!important}.ant-form-item-label>label:after{content:\"\"!important}"]
                },] }
    ];
    OfDynamicComponent.ctorParameters = function () { return [
        { type: i1.FormBuilder },
        { type: OfCreateControlFormService },
        { type: OfValidatorService },
        { type: DestroyRxjsService }
    ]; };
    OfDynamicComponent.propDecorators = {
        schemaModel: [{ type: i0.Input }],
        submitValueEvent: [{ type: i0.Output }],
        searchEvent: [{ type: i0.Output }]
    };

    var OfFieldComponent = /** @class */ (function () {
        function OfFieldComponent(ofDynamic) {
            this.ofDynamic = ofDynamic;
            // map với dataField
            this.id = '';
            this.ofDynamic.addOfFieldTempates(this);
        }
        return OfFieldComponent;
    }());
    OfFieldComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-field',
                    template: ""
                },] }
    ];
    OfFieldComponent.ctorParameters = function () { return [
        { type: OfDynamicComponent }
    ]; };
    OfFieldComponent.propDecorators = {
        id: [{ type: i0.Input }],
        controlTemplate: [{ type: i0.ContentChild, args: ['control',] }]
    };

    var AntIconService = /** @class */ (function () {
        function AntIconService() {
            this.antDesignIcons = AllIcons__namespace;
        }
        AntIconService.prototype.icons = function () {
            var e_1, _a;
            var ret = [];
            try {
                for (var _b = __values(Object.keys(this.antDesignIcons)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    ret.push(this.antDesignIcons[key]);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return ret;
        };
        return AntIconService;
    }());

    common.registerLocaleData(vi__default['default']);
    var ɵ0 = i18n.vi_VN, ɵ1 = new AntIconService().icons(), ɵ2 = locale.vi;
    var AntDesignModule = /** @class */ (function () {
        function AntDesignModule() {
        }
        return AntDesignModule;
    }());
    AntDesignModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [],
                    exports: [ngZorroAntd.NgZorroAntdModule],
                    providers: [
                        { provide: i18n.NZ_I18N, useValue: ɵ0 },
                        { provide: icon.NZ_ICONS, useValue: ɵ1 },
                        { provide: i18n.NZ_DATE_LOCALE, useValue: ɵ2 }
                    ]
                },] }
    ];

    var OfCheckBoxComponent = /** @class */ (function () {
        function OfCheckBoxComponent() {
        }
        OfCheckBoxComponent.prototype.ngOnInit = function () {
        };
        return OfCheckBoxComponent;
    }());
    OfCheckBoxComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-check-box',
                    template: "\n      <form [formGroup]=\"group\">\n          <label nz-checkbox [formControlName]=\"field.dataField\">{{ field.checkBoxLabel }}</label>\n      </form>\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfCheckBoxComponent.ctorParameters = function () { return []; };

    var ofCheckBox_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfCheckBoxComponent: OfCheckBoxComponent
    });

    var DynamicFieldDirective = /** @class */ (function () {
        function DynamicFieldDirective(resolver, container, destroy$) {
            this.resolver = resolver;
            this.container = container;
            this.destroy$ = destroy$;
            this.ofFieldTempates = [];
            this.searchEvent = new i0.EventEmitter();
        }
        DynamicFieldDirective.prototype.ngOnInit = function () {
            return __awaiter(this, void 0, void 0, function () {
                var factory;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.mapComponent()];
                        case 1:
                            _a.sent();
                            if (this.component) {
                                factory = this.resolver.resolveComponentFactory(this.component);
                                this.componentRef = this.container.createComponent(factory);
                                this.componentRef.instance.field = this.field;
                                this.componentRef.instance.group = this.group;
                                this.componentRef.instance.schemaModel = this.schemaModel;
                                if (this.field.type === 'templateRef') {
                                    this.componentRef.instance.ofFieldTempates = this.ofFieldTempates;
                                }
                                if (this.schemaModel.isSearchBox && this.field.type === 'text') {
                                    this.componentRef.instance.searchEvent.pipe(operators.takeUntil(this.destroy$)).subscribe(function (d) {
                                        _this.searchEvent.emit(d);
                                    });
                                }
                            }
                            this.init$();
                            return [2 /*return*/];
                    }
                });
            });
        };
        DynamicFieldDirective.prototype.mapComponent = function () {
            return __awaiter(this, void 0, void 0, function () {
                var type, _a, OfCheckBoxComponent, OfTextAreaComponent, OfTextComponent, OfSelectComponent, OfSelectAsyncComponent, OfSelectApiComponent, OfSelectCascadeComponent, OfSelectSearchServerComponent, OfSelectAdvancedSearchComponent, OfCurrencyComponent, OfDatePickerComponent, OfContentHtmlComponent, OfNumberInputComponent, OfPasswordComponent, OfRadioComponent, OfSwitchComponent, field, OfTemplateRefComponent;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            type = this.field.type;
                            _a = type;
                            switch (_a) {
                                case 'checkBox': return [3 /*break*/, 1];
                                case 'textArea': return [3 /*break*/, 3];
                                case 'text': return [3 /*break*/, 5];
                                case 'select': return [3 /*break*/, 7];
                                case 'selectAsync': return [3 /*break*/, 9];
                                case 'selectApi': return [3 /*break*/, 11];
                                case 'selectApiCascade': return [3 /*break*/, 13];
                                case 'selectSearchServer': return [3 /*break*/, 15];
                                case 'selectAdvancedSearch': return [3 /*break*/, 17];
                                case 'currencyInput': return [3 /*break*/, 19];
                                case 'datePicker': return [3 /*break*/, 21];
                                case 'contentHtml': return [3 /*break*/, 23];
                                case 'numberInput': return [3 /*break*/, 25];
                                case 'passWordInput': return [3 /*break*/, 27];
                                case 'radio': return [3 /*break*/, 29];
                                case 'switch': return [3 /*break*/, 31];
                                case 'componentRef': return [3 /*break*/, 33];
                                case 'templateRef': return [3 /*break*/, 34];
                            }
                            return [3 /*break*/, 36];
                        case 1: return [4 /*yield*/, Promise.resolve().then(function () { return ofCheckBox_component; })];
                        case 2:
                            OfCheckBoxComponent = (_b.sent()).OfCheckBoxComponent;
                            this.component = OfCheckBoxComponent;
                            return [3 /*break*/, 36];
                        case 3: return [4 /*yield*/, Promise.resolve().then(function () { return ofTextArea_component; })];
                        case 4:
                            OfTextAreaComponent = (_b.sent()).OfTextAreaComponent;
                            this.component = OfTextAreaComponent;
                            return [3 /*break*/, 36];
                        case 5: return [4 /*yield*/, Promise.resolve().then(function () { return ofText_component; })];
                        case 6:
                            OfTextComponent = (_b.sent()).OfTextComponent;
                            this.component = OfTextComponent;
                            return [3 /*break*/, 36];
                        case 7: return [4 /*yield*/, Promise.resolve().then(function () { return ofSelect_component; })];
                        case 8:
                            OfSelectComponent = (_b.sent()).OfSelectComponent;
                            this.component = OfSelectComponent;
                            return [3 /*break*/, 36];
                        case 9: return [4 /*yield*/, Promise.resolve().then(function () { return ofSelectAsync_component; })];
                        case 10:
                            OfSelectAsyncComponent = (_b.sent()).OfSelectAsyncComponent;
                            this.component = OfSelectAsyncComponent;
                            return [3 /*break*/, 36];
                        case 11: return [4 /*yield*/, Promise.resolve().then(function () { return ofSelectApi_component; })];
                        case 12:
                            OfSelectApiComponent = (_b.sent()).OfSelectApiComponent;
                            this.component = OfSelectApiComponent;
                            return [3 /*break*/, 36];
                        case 13: return [4 /*yield*/, Promise.resolve().then(function () { return ofSelectCascade_component; })];
                        case 14:
                            OfSelectCascadeComponent = (_b.sent()).OfSelectCascadeComponent;
                            this.component = OfSelectCascadeComponent;
                            return [3 /*break*/, 36];
                        case 15: return [4 /*yield*/, Promise.resolve().then(function () { return ofSelectSearchServer_component; })];
                        case 16:
                            OfSelectSearchServerComponent = (_b.sent()).OfSelectSearchServerComponent;
                            this.component = OfSelectSearchServerComponent;
                            return [3 /*break*/, 36];
                        case 17: return [4 /*yield*/, Promise.resolve().then(function () { return ofSelectAdvancedSearch_component; })];
                        case 18:
                            OfSelectAdvancedSearchComponent = (_b.sent()).OfSelectAdvancedSearchComponent;
                            this.component = OfSelectAdvancedSearchComponent;
                            return [3 /*break*/, 36];
                        case 19: return [4 /*yield*/, Promise.resolve().then(function () { return ofCurrency_component; })];
                        case 20:
                            OfCurrencyComponent = (_b.sent()).OfCurrencyComponent;
                            this.component = OfCurrencyComponent;
                            return [3 /*break*/, 36];
                        case 21: return [4 /*yield*/, Promise.resolve().then(function () { return ofDatePicker_component; })];
                        case 22:
                            OfDatePickerComponent = (_b.sent()).OfDatePickerComponent;
                            this.component = OfDatePickerComponent;
                            return [3 /*break*/, 36];
                        case 23: return [4 /*yield*/, Promise.resolve().then(function () { return ofContentHtml_component; })];
                        case 24:
                            OfContentHtmlComponent = (_b.sent()).OfContentHtmlComponent;
                            this.component = OfContentHtmlComponent;
                            return [3 /*break*/, 36];
                        case 25: return [4 /*yield*/, Promise.resolve().then(function () { return ofNumberInput_component; })];
                        case 26:
                            OfNumberInputComponent = (_b.sent()).OfNumberInputComponent;
                            this.component = OfNumberInputComponent;
                            return [3 /*break*/, 36];
                        case 27: return [4 /*yield*/, Promise.resolve().then(function () { return ofPassword_component; })];
                        case 28:
                            OfPasswordComponent = (_b.sent()).OfPasswordComponent;
                            this.component = OfPasswordComponent;
                            return [3 /*break*/, 36];
                        case 29: return [4 /*yield*/, Promise.resolve().then(function () { return ofRadio_component; })];
                        case 30:
                            OfRadioComponent = (_b.sent()).OfRadioComponent;
                            this.component = OfRadioComponent;
                            return [3 /*break*/, 36];
                        case 31: return [4 /*yield*/, Promise.resolve().then(function () { return ofSwitch_component; })];
                        case 32:
                            OfSwitchComponent = (_b.sent()).OfSwitchComponent;
                            this.component = OfSwitchComponent;
                            return [3 /*break*/, 36];
                        case 33:
                            field = this.field;
                            this.component = field.componentRef;
                            return [3 /*break*/, 36];
                        case 34: return [4 /*yield*/, Promise.resolve().then(function () { return ofTemplateRef_component; })];
                        case 35:
                            OfTemplateRefComponent = (_b.sent()).OfTemplateRefComponent;
                            this.component = OfTemplateRefComponent;
                            return [3 /*break*/, 36];
                        case 36: return [2 /*return*/];
                    }
                });
            });
        };
        Object.defineProperty(DynamicFieldDirective.prototype, "f", {
            get: function () {
                return this.group.get(this.field.dataField) || null;
            },
            enumerable: false,
            configurable: true
        });
        DynamicFieldDirective.prototype.init$ = function () {
            var _this = this;
            if (this.field.hiddenAsync) {
                this.field.hiddenAsync.pipe(operators.takeUntil(this.destroy$))
                    .pipe(operators.debounceTime(300))
                    .subscribe(function (d) {
                    _this.field.hidden = d;
                });
            }
            if (this.field.disabledAsync) {
                this.field.disabledAsync.pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (d) {
                    _this.field.disabled = d;
                    if (_this.f) {
                        if (d) {
                            _this.f.disable({ onlySelf: true });
                        }
                        else {
                            _this.f.enable({ onlySelf: true });
                        }
                    }
                    _this.disableExtendControl(d);
                });
            }
        };
        DynamicFieldDirective.prototype.disableExtendControl = function (d) {
            var _this = this;
            if (!AppUtilityService.isNotAnyItem(this.field.controls)) {
                this.field.controls.forEach(function (ctrl) {
                    ctrl.disabled = d;
                    var fControl = _this.group.get(ctrl.dataField);
                    if (fControl) {
                        if (d) {
                            fControl.disable({ onlySelf: true });
                        }
                        else {
                            fControl.enable({ onlySelf: true });
                        }
                    }
                });
            }
        };
        return DynamicFieldDirective;
    }());
    DynamicFieldDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[ofDynamicField]',
                    providers: [DestroyRxjsService]
                },] }
    ];
    DynamicFieldDirective.ctorParameters = function () { return [
        { type: i0.ComponentFactoryResolver },
        { type: i0.ViewContainerRef },
        { type: DestroyRxjsService }
    ]; };
    DynamicFieldDirective.propDecorators = {
        schemaModel: [{ type: i0.Input }],
        field: [{ type: i0.Input }],
        group: [{ type: i0.Input }],
        ofFieldTempates: [{ type: i0.Input }],
        searchEvent: [{ type: i0.Output }]
    };

    var OfTextComponent = /** @class */ (function () {
        function OfTextComponent(destroy$) {
            this.destroy$ = destroy$;
            this.searchEvent = new i0.EventEmitter();
            this.keyEnter$ = new rxjs.Subject();
            this.nzSpinning = false;
        }
        OfTextComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.keyEnter$.pipe(operators.takeUntil(this.destroy$), operators.debounceTime(500), operators.distinctUntilChanged())
                .subscribe(function (d) {
                if (_this.schemaModel.isSearchBox) {
                    _this.schemaModel.searchBtnBusy = true;
                    _this.schemaModel.searchEvent$.next(d);
                    _this.searchEvent.emit(d);
                    _this.nzSpinning = false;
                }
            });
        };
        OfTextComponent.prototype.onKeyEnterControl = function () {
            if (this.schemaModel.isSearchBox) {
                this.nzSpinning = true;
                this.keyEnter$.next(this.group.getRawValue());
            }
        };
        return OfTextComponent;
    }());
    OfTextComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-text',
                    template: "\n      <nz-spin [nzSpinning]=\"nzSpinning\">\n          <form [formGroup]=\"group\" (keyup.enter)=\"onKeyEnterControl()\">\n              <input [formControlName]=\"field.dataField\" nz-input [disabled]=\"true\" [placeholder]=\"field.placeholder\"\n                     maxlength=\"{{ field?.maxLength }}\"/>\n          </form>\n      </nz-spin>\n\n  ",
                    providers: [DestroyRxjsService]
                },] }
    ];
    OfTextComponent.ctorParameters = function () { return [
        { type: DestroyRxjsService }
    ]; };
    OfTextComponent.propDecorators = {
        searchEvent: [{ type: i0.Output }]
    };

    var ofText_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfTextComponent: OfTextComponent
    });

    var OfCurrencyComponent = /** @class */ (function () {
        function OfCurrencyComponent() {
            this.options = {};
        }
        OfCurrencyComponent.prototype.ngOnInit = function () {
            this.options = {
                prefix: this.field.prefix,
                suffix: this.field.suffix,
                thousands: '.',
                decimal: ',',
                precision: this.field.precision
            };
        };
        return OfCurrencyComponent;
    }());
    OfCurrencyComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-currency',
                    template: "\n      <form [formGroup]=\"group\">\n          <input\n                  currencyMask\n                  nz-input\n                  [formControlName]=\"field.dataField\"\n                  class=\"ord-dynamic-input\"\n                  [disabled]=\"field.disabled\"\n                  [placeholder]=\"field.placeholder\"\n                  [options]=\"field\"\n          />\n      </form>\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    styles: ["\n      input::placeholder {\n          text-align: left;\n      }\n  "]
                },] }
    ];
    OfCurrencyComponent.ctorParameters = function () { return []; };

    var ofCurrency_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfCurrencyComponent: OfCurrencyComponent
    });

    var OfDatePickerComponent = /** @class */ (function () {
        function OfDatePickerComponent(destroy$, cdr) {
            var _this = this;
            this.destroy$ = destroy$;
            this.cdr = cdr;
            this.disabledDate = function (current) {
                var _a;
                if (((_a = _this.field) === null || _a === void 0 ? void 0 : _a.dateNotGreaterThanCurrent) && !_this.maxDate) {
                    _this.maxDate = new Date();
                }
                var check = false;
                if (_this.minDate) {
                    check = check || differenceInCalendarDays__default['default'](current, _this.minDate) < 0;
                }
                if (_this.maxDate) {
                    check = check || differenceInCalendarDays__default['default'](current, _this.maxDate) > 0;
                }
                return check;
            };
        }
        OfDatePickerComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.minDate = this.field.minDate;
            this.maxDate = this.field.maxDate;
            if (this.field.minDateAsync) {
                this.field.minDateAsync.pipe(operators.takeUntil(this.destroy$))
                    .subscribe(function (min) {
                    _this.setMinDate(min);
                });
            }
            if (this.field.maxDateAsync) {
                this.field.maxDateAsync.pipe(operators.takeUntil(this.destroy$)).subscribe(function (max) {
                    _this.setMaxDate(max);
                });
            }
            this.schemaModel.subRender(this.cdr, this.destroy$);
        };
        OfDatePickerComponent.prototype.setMinDate = function (min) {
            var d = this.convertDate(min);
            if (AppUtilityService.isNullOrEmpty(this.field.minDate)) {
                this.minDate = d;
            }
            else if (AppUtilityService.isNotNull(d) && differenceInCalendarDays__default['default'](d, this.field.minDate) > 0) {
                this.minDate = d;
            }
            else {
                this.minDate = this.field.minDate;
            }
            this.cdr.detectChanges();
        };
        OfDatePickerComponent.prototype.setMaxDate = function (max) {
            var d = this.convertDate(max);
            if (AppUtilityService.isNullOrEmpty(this.field.maxDate)) {
                this.maxDate = d;
            }
            else if (AppUtilityService.isNotNull(d) && differenceInCalendarDays__default['default'](d, this.field.maxDate) < 0) {
                this.maxDate = d;
            }
            else {
                this.maxDate = this.field.maxDate;
            }
            this.cdr.detectChanges();
        };
        OfDatePickerComponent.prototype.convertDate = function (date) {
            if (moment__namespace.isMoment(date)) {
                return date.toDate();
            }
            else {
                return date;
            }
        };
        Object.defineProperty(OfDatePickerComponent.prototype, "f", {
            get: function () {
                return this.group.get(this.field.dataField);
            },
            enumerable: false,
            configurable: true
        });
        OfDatePickerComponent.prototype.handlerTuNgayChange = function () {
            var _this = this;
            if (AppUtilityService.isNotNull(this.field.tuNgayDataField) && this.group.get(this.field.tuNgayDataField)) {
                this.group.get(this.field.tuNgayDataField).valueChanges
                    .pipe(operators.takeUntil(this.destroy$)).subscribe(function (min) {
                    _this.setMinDate(min);
                });
            }
        };
        OfDatePickerComponent.prototype.handlerDenNgayChange = function () {
            var _this = this;
            if (AppUtilityService.isNotNull(this.field.denNgayDataField) && this.group.get(this.field.denNgayDataField)) {
                this.group.get(this.field.denNgayDataField).valueChanges
                    .pipe(operators.takeUntil(this.destroy$)).subscribe(function (max) {
                    _this.setMaxDate(max);
                });
            }
        };
        OfDatePickerComponent.prototype.ngAfterContentChecked = function () {
            this.handlerDenNgayChange();
            this.handlerTuNgayChange();
        };
        return OfDatePickerComponent;
    }());
    OfDatePickerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-date-picker',
                    template: "\n      <form [formGroup]=\"group\">\n          <of-date-picker-ctrl #vcDatePicker [formControlName]=\"field.dataField\"\n                               [disabled]=\"field.disabled\"\n                               [disabledDate]=\"disabledDate\"></of-date-picker-ctrl>\n      </form>\n  ",
                    providers: [DestroyRxjsService],
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfDatePickerComponent.ctorParameters = function () { return [
        { type: DestroyRxjsService },
        { type: i0.ChangeDetectorRef }
    ]; };
    OfDatePickerComponent.propDecorators = {
        vcDatePicker: [{ type: i0.ViewChild, args: ['vcDatePicker',] }]
    };

    var ofDatePicker_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfDatePickerComponent: OfDatePickerComponent
    });

    var OfNumberInputComponent = /** @class */ (function () {
        function OfNumberInputComponent() {
        }
        OfNumberInputComponent.prototype.ngOnInit = function () {
        };
        return OfNumberInputComponent;
    }());
    OfNumberInputComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-number-input',
                    template: "\n      <form [formGroup]=\"group\">\n          <input nz-input *ngIf=\"field.onlyKeyNumber;else tplNumberInput\"\n                 numbersOnlyInput [formControlName]=\"field.dataField\"\n                 [placeholder]=\"field.placeholder\"\n                 maxlength=\"{{ field.maxlength }}\"\n          />\n          <ng-template #tplNumberInput>\n              <nz-input-number [formControlName]=\"field.dataField\"\n                               [nzPlaceHolder]=\"field.placeholder\"\n                               style=\"width: 100%\"\n                               [nzMin]=\"field.min\"\n                               [nzMax]=\"field.max\"\n                               [nzStep]=\"field.step\">\n              </nz-input-number>\n          </ng-template>\n      </form>\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfNumberInputComponent.ctorParameters = function () { return []; };

    var ofNumberInput_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfNumberInputComponent: OfNumberInputComponent
    });

    var OfTextAreaComponent = /** @class */ (function () {
        function OfTextAreaComponent() {
        }
        return OfTextAreaComponent;
    }());
    OfTextAreaComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-text-area',
                    template: "\n      <form [formGroup]=\"group\">\n          <textarea nz-input\n                    [formControlName]=\"field.dataField\"\n                    [placeholder]=\"field.placeholder\"\n                    [rows]=\"field.rows\"\n                    maxlength=\"{{field.maxLength}}\"></textarea>\n      </form>\n  "
                },] }
    ];

    var ofTextArea_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfTextAreaComponent: OfTextAreaComponent
    });

    var VALUE_ACCESSOR = {
        provide: i1.NG_VALUE_ACCESSOR,
        useExisting: i0.forwardRef(function () { return OfDataPickerControlComponent; }),
        multi: true
    };
    var OfDataPickerControlComponent = /** @class */ (function () {
        function OfDataPickerControlComponent() {
            this.placeHolder = 'Ngày/Tháng/Năm';
            this.mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
            this.$destroy = new rxjs.Subject();
            this.isWriteValue = false;
            this.mouseEvent$ = new rxjs.Subject();
            this.nzIcon = 'calendar';
            this.nzIcon$ = new rxjs.BehaviorSubject('calendar');
            // tslint:disable-next-line:variable-name
            this.isShowIconCalendar = true;
            this.isDisabled = false;
            this.control = new i1.FormControl({ value: null, disabled: true });
            this.inputValue = new i1.FormControl({ value: '', disabled: false });
        }
        Object.defineProperty(OfDataPickerControlComponent.prototype, "value", {
            get: function () {
                return this.control.value;
            },
            set: function (v) {
                this.control.setValue(v);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OfDataPickerControlComponent.prototype, "disabled", {
            get: function () {
                return this.isDisabled;
            },
            set: function (v) {
                this.isDisabled = v;
                if (v === true) {
                    this.inputValue.disable();
                }
                else {
                    this.inputValue.enable();
                }
            },
            enumerable: false,
            configurable: true
        });
        OfDataPickerControlComponent.prototype.onChange = function (v) {
        };
        OfDataPickerControlComponent.prototype.onTouched = function () {
        };
        OfDataPickerControlComponent.prototype.onChangeValue = function (event) {
            this.onChange(event);
        };
        OfDataPickerControlComponent.prototype.onFocus = function (event) {
            this.onTouched();
        };
        OfDataPickerControlComponent.prototype.mouseLeaveMain = function () {
            this.mouseEvent$.next('mouseLeave');
        };
        OfDataPickerControlComponent.prototype.mouseEnterMain = function () {
            this.mouseEvent$.next('mouseEnter');
        };
        OfDataPickerControlComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            rxjs.fromEvent(this.refInput.nativeElement, 'click')
                .pipe(operators.debounceTime(222), operators.takeUntil(this.$destroy)).subscribe(function () {
                _this.refDate.picker.showOverlay();
                setTimeout(function () {
                    _this.refInput.nativeElement.focus();
                });
            });
            this.refDate.nzOnOpenChange
                .pipe(operators.takeUntil(this.$destroy))
                .subscribe(function (o) {
                if (!o) {
                    setTimeout(function () {
                        _this.refInput.nativeElement.focus();
                    });
                }
            });
            this.mouseEvent$.pipe(operators.takeUntil(this.$destroy))
                .pipe(operators.debounceTime(222))
                .pipe(operators.map(function (d) {
                if (d === 'mouseLeave') {
                    return 'calendar';
                }
                if (_this.disabled) {
                    return 'calendar';
                }
                if (AppUtilityService.isNullOrEmpty(_this.control.value)) {
                    return 'calendar';
                }
                return 'close-circle';
            })).pipe(operators.tap(function (icon) {
                _this.nzIcon$.next(icon);
                _this.nzIcon = icon;
            })).subscribe();
            this.nzIcon$.next('calendar');
        };
        OfDataPickerControlComponent.prototype.ngOnDestroy = function () {
            this.$destroy.next(true);
            this.$destroy.unsubscribe();
        };
        OfDataPickerControlComponent.prototype.ngOnInit = function () {
            var _this = this;
            this.control.valueChanges.pipe(operators.takeUntil(this.$destroy), operators.distinctUntilChanged()).subscribe(function (result) {
                if (_this.isWriteValue) {
                    if (result) {
                        var valueText = moment__namespace(result).format('DD/MM/YYYY');
                        _this.inputValue.setValue(valueText);
                    }
                    _this.onChangeValue(result);
                }
            });
            this.inputValue.valueChanges.pipe(operators.takeUntil(this.$destroy), operators.distinctUntilChanged(), operators.debounceTime(100)).subscribe(function (result) {
                try {
                    var arrStr = result.split('/');
                    if (!isNaN(arrStr[0]) && !isNaN(arrStr[1]) && !isNaN(arrStr[2])) {
                        var date = moment__namespace(result, 'DD/MM/YYYY');
                        if (date.isValid()) {
                            if (typeof _this.disabledDate === 'function') {
                                if (_this.disabledDate(date.toDate())) {
                                    _this.inputValue.setValue(null);
                                }
                                else {
                                    _this.control.setValue(date.toDate());
                                    _this.refDate.picker.hideOverlay();
                                }
                            }
                            else {
                                _this.control.setValue(date.toDate());
                                _this.refDate.picker.hideOverlay();
                            }
                        }
                        else {
                            _this.control.setValue(null);
                        }
                    }
                    else {
                        _this.control.setValue(null);
                    }
                }
                catch (e) {
                    _this.control.setValue(null);
                }
            });
        };
        //#region base ControlValueAccessor
        OfDataPickerControlComponent.prototype.writeValue = function (obj) {
            if (obj) {
                var valueText = moment__namespace(obj).format('DD/MM/YYYY');
                this.inputValue.setValue(valueText);
                this.value = moment__namespace(obj).toDate();
            }
            else {
                this.inputValue.setValue('');
                this.value = null;
            }
            this.isWriteValue = true;
        };
        OfDataPickerControlComponent.prototype.registerOnChange = function (fn) {
            this.onChange = fn;
        };
        OfDataPickerControlComponent.prototype.registerOnTouched = function (fn) {
            this.onTouched = fn;
        };
        OfDataPickerControlComponent.prototype.setDisabledState = function (isDisabled) {
            this.isDisabled = isDisabled;
        };
        //#endregion
        OfDataPickerControlComponent.prototype.onFocusOutInputMask = function () {
            if (AppUtilityService.isNullOrEmpty(this.control.value)) {
                this.inputValue.setValue(null);
            }
        };
        OfDataPickerControlComponent.prototype.onClickIcon = function () {
            if (this.disabled) {
                return;
            }
            if (this.nzIcon === 'calendar') {
                this.refDate.picker.showOverlay();
                return;
            }
            this.nzIcon$.next('calendar');
            this.inputValue.setValue(null);
            this.control.setValue(null);
        };
        return OfDataPickerControlComponent;
    }());
    OfDataPickerControlComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-date-picker-ctrl',
                    template: "\n      <div class=\"main-ora-date\" (mouseenter)=\"mouseEnterMain()\" (mouseleave)=\"mouseLeaveMain()\">\n          <nz-date-picker class=\"ora-date\" #refDate style=\"width:100%\" [nzPlaceHolder]=\"placeHolder\"\n                          [nzDisabled]=\"disabled\"\n                          [nzDisabledDate]=\"disabledDate\"\n                          tabindex=\"-1\"\n                          [formControl]=\"control\"\n                          nzFormat=\"dd/MM/yyyy\"></nz-date-picker>\n          <input #refInput class=\"ora-input-date\" nz-input (focusout)=\"onFocusOutInputMask()\"\n                 [placeholder]=\"placeHolder\"\n                 [formControl]=\"inputValue\"\n                 [textMask]=\"{mask: mask}\"/>\n          <i class=\"ora-calendar\" (click)=\"onClickIcon()\" nz-icon\n             [nzType]=\"nzIcon$ | async\"\n             nzTheme=\"outline\"></i>\n      </div>\n  ",
                    encapsulation: i0.ViewEncapsulation.None,
                    providers: [VALUE_ACCESSOR],
                    styles: [".main-ora-date {\n      position: relative;\n  }\n\n  .ora-date {\n      border: 0;\n  }\n\n  .ora-input-date {\n      position: absolute;\n      top: 0;\n      left: 0\n  }\n\n  .ora-close {\n      position: absolute;\n      top: 7px;\n      right: 5px;\n  }\n\n  .ora-calendar {\n      position: absolute;\n      top: 7px;\n      right: 5px;\n  }"]
                },] }
    ];
    OfDataPickerControlComponent.ctorParameters = function () { return []; };
    OfDataPickerControlComponent.propDecorators = {
        refDate: [{ type: i0.ViewChild, args: ['refDate',] }],
        refInput: [{ type: i0.ViewChild, args: ['refInput',] }],
        disabledDate: [{ type: i0.Input }],
        placeHolder: [{ type: i0.Input }],
        disabled: [{ type: i0.Input }],
        control: [{ type: i0.Input }]
    };

    var OfContentHtmlComponent = /** @class */ (function () {
        function OfContentHtmlComponent() {
        }
        OfContentHtmlComponent.prototype.ngOnInit = function () {
        };
        return OfContentHtmlComponent;
    }());
    OfContentHtmlComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-content-html',
                    template: "\n      <div [innerHTML]=\"field.content\"></div>",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfContentHtmlComponent.ctorParameters = function () { return []; };

    var ofContentHtml_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfContentHtmlComponent: OfContentHtmlComponent
    });

    var NumbersOnlyDirective = /** @class */ (function () {
        // tslint:disable-next-line:variable-name
        function NumbersOnlyDirective(_el) {
            this._el = _el;
        }
        NumbersOnlyDirective.prototype.onInputChange = function (event) {
            var initalValue = this._el.nativeElement.value;
            this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
            if (initalValue !== this._el.nativeElement.value) {
                event.stopPropagation();
            }
        };
        return NumbersOnlyDirective;
    }());
    NumbersOnlyDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: 'input[numbersOnlyInput]'
                },] }
    ];
    NumbersOnlyDirective.ctorParameters = function () { return [
        { type: i0.ElementRef }
    ]; };
    NumbersOnlyDirective.propDecorators = {
        onInputChange: [{ type: i0.HostListener, args: ['input', ['$event'],] }]
    };

    var OfPasswordComponent = /** @class */ (function () {
        function OfPasswordComponent() {
            this.passwordVisible = false;
        }
        OfPasswordComponent.prototype.ngOnInit = function () {
            this.field.placeholder = this.field.placeholder || 'Nhập mật khẩu';
        };
        return OfPasswordComponent;
    }());
    OfPasswordComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-password',
                    template: "\n      <form [formGroup]=\"group\">\n          <nz-input-group nzPrefixIcon=\"lock\" [nzSuffix]=\"suffixTemplate\">\n              <input [type]=\"passwordVisible ? 'text' : 'password'\" nz-input placeholder=\"{{field.placeholder}}\"\n                     [formControlName]=\"field.dataField\"/>\n          </nz-input-group>\n          <ng-template #suffixTemplate>\n              <i nz-icon [nzType]=\"passwordVisible ? 'eye-invisible' : 'eye'\"\n                 (click)=\"passwordVisible = !passwordVisible\"></i>\n          </ng-template>\n      </form>\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfPasswordComponent.ctorParameters = function () { return []; };

    var ofPassword_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfPasswordComponent: OfPasswordComponent
    });

    var OfRadioComponent = /** @class */ (function () {
        function OfRadioComponent() {
        }
        OfRadioComponent.prototype.ngOnInit = function () {
        };
        return OfRadioComponent;
    }());
    OfRadioComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-radio',
                    template: "\n      <form [formGroup]=\"group\">\n          <nz-radio-group [formControlName]=\"field.dataField\"\n                          [nzDisabled]=\"field.disabled\"\n                          style=\"width: 100%\">\n              <label *ngFor=\"let op of field.items\" nz-radio [nzValue]=\"op.value\">{{ op.label }}</label>\n          </nz-radio-group>\n      </form>\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfRadioComponent.ctorParameters = function () { return []; };

    var ofRadio_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfRadioComponent: OfRadioComponent
    });

    var OfSwitchComponent = /** @class */ (function () {
        function OfSwitchComponent() {
        }
        OfSwitchComponent.prototype.ngOnInit = function () {
        };
        return OfSwitchComponent;
    }());
    OfSwitchComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-switch',
                    template: "\n      <form [formGroup]=\"group\">\n          <nz-switch [formControlName]=\"field.dataField\"\n                     [nzCheckedChildren]=\"field.yesText ? field.yesText : checkedTemplate\"\n                     [nzUnCheckedChildren]=\"field.noText ? field.noText : unCheckedTemplate\"\n                     [nzDisabled]=\"field.disabled\"\n          >\n              <ng-template #checkedTemplate><i nz-icon nzType=\"check\"></i></ng-template>\n              <ng-template #unCheckedTemplate><i nz-icon nzType=\"close\"></i></ng-template>\n          </nz-switch>\n      </form>\n  ",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfSwitchComponent.ctorParameters = function () { return []; };

    var ofSwitch_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfSwitchComponent: OfSwitchComponent
    });

    var OfSelectSearchServerComponent = /** @class */ (function () {
        function OfSelectSearchServerComponent(destroy$, cdr) {
            var _this = this;
            this.destroy$ = destroy$;
            this.cdr = cdr;
            this.options = [];
            this.option$ = new rxjs.BehaviorSubject([]);
            this.backUpItems = [];
            this.optionDebound$ = this.option$.pipe(operators.debounceTime(222)).pipe(operators.tap(function () {
                _this.triggerDetectChanges();
            }));
            this.txtSearch = '';
            this.txtSearch$ = new rxjs.Subject();
            this.skipCount = 0;
            this.totalItems = 0;
            this.nzPageIndex = 1;
            this.firstOptions = [];
            this.firstTotal = 0;
            this.isLoading = false;
            this.maxResultCount = 12;
        }
        OfSelectSearchServerComponent.prototype.ngOnInit = function () {
            this.handlerSearch();
        };
        OfSelectSearchServerComponent.prototype.handlerSearch = function () {
            var _this = this;
            this.txtSearch$.pipe(operators.takeUntil(this.destroy$))
                .pipe(operators.debounceTime(1000))
                .subscribe(function (txt) {
                _this.txtSearch = txt;
                if (AppUtilityService.isNullOrEmpty(txt)) {
                    _this.loadFirstOption();
                }
                else {
                    _this.skipCount = 0;
                    _this.nzPageIndex = 1;
                    _this.getOptionsFromBE(txt);
                }
            });
        };
        OfSelectSearchServerComponent.prototype.search = function (txt) {
            this.txtSearch$.next(txt);
        };
        OfSelectSearchServerComponent.prototype.nzOpenChange = function (open) {
            if (open) {
                this.loadFirstOption();
            }
        };
        OfSelectSearchServerComponent.prototype.trackBySelect = function (index, item) {
            return item.value;
        };
        OfSelectSearchServerComponent.prototype.loadFirstOption = function () {
            var _this = this;
            var _a;
            if (this.firstTotal > 0) {
                this.totalItems = this.firstTotal;
                this.nzPageIndex = 1;
                var opt = this.firstOptions;
                if ((_a = this.field) === null || _a === void 0 ? void 0 : _a.itemSelected) {
                    // tslint:disable-next-line:triple-equals
                    var f = opt.find(function (s) { return s.value == _this.field.itemSelected.value; });
                    if (AppUtilityService.isNullOrEmpty(f)) {
                        opt = __spread([this.field.itemSelected], this.firstOptions);
                    }
                }
                this.setOptions(opt);
            }
            else {
                this.getOptionsFromBE('', null, true);
            }
        };
        // tslint:disable-next-line:no-shadowed-variable
        OfSelectSearchServerComponent.prototype.getOptionsFromBE = function (filter, value, isFirst) {
            var _this = this;
            if (isFirst === void 0) { isFirst = false; }
            var getOneId = AppUtilityService.isNotNull(value);
            if (getOneId) {
                filter = '';
                // tslint:disable-next-line:triple-equals
                var f = ___namespace.find(this.backUpItems, function (s) { return s.value == value; });
                if (f) {
                    this.setOptions([f]);
                    return;
                }
            }
            this.isLoading = true;
            var skipCount = this.skipCount;
            var maxResultCount = (!this.field.showPagination && isFirst) ? 50 : this.maxResultCount;
            if (this.field.showPagination) {
                skipCount = (this.nzPageIndex - 1) * this.maxResultCount;
            }
            var reqBody = {
                filter: filter,
                value: value,
                maxResultCount: maxResultCount,
                skipCount: skipCount
            };
            this.field.functionService(reqBody)
                .pipe(operators.finalize(function () {
                _this.isLoading = false;
            }))
                .subscribe(function (d) {
                var options = (d === null || d === void 0 ? void 0 : d.items) || [];
                _this.backUpItems = __spread(_this.backUpItems, options);
                if (isFirst) {
                    _this.firstOptions = options;
                    _this.firstTotal = d.totalCount;
                }
                if (getOneId) {
                    _this.field.itemSelected = (d === null || d === void 0 ? void 0 : d.items[0]) || null;
                }
                if (AppUtilityService.isNullOrEmpty(value)) {
                    _this.totalItems = (d === null || d === void 0 ? void 0 : d.totalCount) || 0;
                }
                if (skipCount > 0 && !_this.field.showPagination) {
                    options = __spread(_this.options, options);
                }
                _this.setOptions(options);
                _this.skipCount = reqBody.skipCount + reqBody.maxResultCount;
            });
        };
        OfSelectSearchServerComponent.prototype.setOptions = function (options) {
            this.options = options;
            this.option$.next(options);
            this.triggerDetectChanges();
        };
        OfSelectSearchServerComponent.prototype.getItemSelected = function () {
            var _this = this;
            var value$ = this.group.get(this.field.dataField).valueChanges.pipe(operators.takeUntil(this.destroy$))
                .pipe(operators.tap(function (v) {
                if (AppUtilityService.isNullOrEmpty(v)) {
                    _this.field.itemSelected = null;
                }
                _this.triggerDetectChanges();
            })).pipe(operators.filter(function (s) { return !AppUtilityService.isNullOrEmpty(s); }));
            value$.subscribe(function (value) {
                var _a;
                // tslint:disable-next-line:triple-equals
                var f = (_a = _this.backUpItems) === null || _a === void 0 ? void 0 : _a.find(function (s) { return s.value == value; });
                if (AppUtilityService.isNotNull(f)) {
                    _this.field.itemSelected = f;
                    _this.setOptions([f]);
                    return;
                }
                else {
                    _this.getOptionsFromBE(null, value);
                }
                _this.triggerDetectChanges();
            });
        };
        Object.defineProperty(OfSelectSearchServerComponent.prototype, "f", {
            get: function () {
                return this.group.get(this.field.dataField);
            },
            enumerable: false,
            configurable: true
        });
        OfSelectSearchServerComponent.prototype.ngAfterViewInit = function () {
            this.getItemSelected();
            this.triggerDetectChanges();
            this.schemaModel.subRender(this.cdr, this.destroy$);
        };
        OfSelectSearchServerComponent.prototype.triggerDetectChanges = function () {
            var _this = this;
            setTimeout(function () {
                _this.cdr.detectChanges();
            }, 200);
        };
        OfSelectSearchServerComponent.prototype.loadMore = function () {
            if (this.field.showPagination) {
                return;
            }
            this.isLoading = true;
            if (this.skipCount > this.totalItems) {
                this.isLoading = false;
                return;
            }
            this.getOptionsFromBE(this.txtSearch, null);
        };
        OfSelectSearchServerComponent.prototype.nzPageIndexChange = function () {
            this.getOptionsFromBE(this.txtSearch);
        };
        return OfSelectSearchServerComponent;
    }());
    OfSelectSearchServerComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-select-search-server',
                    template: "<form [formGroup]=\"group\">\r\n  <nz-select [formControlName]=\"field.dataField\" style=\" width: 100%;\"\r\n             (nzOpenChange)=\"nzOpenChange($event)\"\r\n             (nzScrollToBottom)=\"loadMore()\"\r\n             [nzCustomTemplate]=\"tplSelectedView\"\r\n             [nzOptionHeightPx]=\"26\"\r\n             [nzPlaceHolder]=\"field.placeholder\"\r\n             [nzMode]=\"field.nzMode\" [nzAllowClear]=\"field.nzAllowClear\"\r\n             nzShowSearch nzServerSearch (nzOnSearch)=\"search($event)\"\r\n             [nzMaxMultipleCount]=\"field?.nzMaxMultipleCount\" [nzMaxTagCount]=\"field?.nzMaxTagCount\"\r\n             [nzDropdownRender]=\"renderTemplate\">\r\n    <nz-option [nzCustomContent]=\"true\" *ngFor=\"let option of optionDebound$ | async;trackBy:trackBySelect\"\r\n               [nzLabel]=\"option.displayText\"\r\n               [nzValue]=\"option.value\"\r\n    >\r\n      <span [innerHTML]=\"option.displayText | ofSelectRenderOption: field: option\">\r\n      </span>\r\n    </nz-option>\r\n  </nz-select>\r\n</form>\r\n<ng-template #tplSelectedView let-selected>\r\n  <span [innerHTML]=\"selected.nzValue | ofOptionSelected:selected.nzLabel:field\"></span>\r\n</ng-template>\r\n<ng-template #renderTemplate>\r\n\r\n  <div class=\"select-pagination\" *ngIf=\"field.showPagination\">\r\n    <nz-pagination nzSize=\"small\" [nzPageSize]=\"maxResultCount\" [(nzPageIndex)]=\"nzPageIndex\"\r\n                   (nzPageIndexChange)=\"nzPageIndexChange()\"\r\n                   [nzTotal]=\"totalItems\"></nz-pagination>\r\n  </div>\r\n  <nz-spin *ngIf=\"isLoading\"></nz-spin>\r\n</ng-template>\r\n",
                    changeDetection: i0.ChangeDetectionStrategy.OnPush,
                    providers: [DestroyRxjsService],
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: [":host ::ng-deep .cdk-virtual-scroll-viewport{min-height:120px!important}.select-pagination{margin-top:8px;margin-bottom:3px}"]
                },] }
    ];
    OfSelectSearchServerComponent.ctorParameters = function () { return [
        { type: DestroyRxjsService },
        { type: i0.ChangeDetectorRef }
    ]; };
    OfSelectSearchServerComponent.propDecorators = {
        schemaModel: [{ type: i0.Input }],
        field: [{ type: i0.Input }],
        group: [{ type: i0.Input }]
    };

    var ofSelectSearchServer_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfSelectSearchServerComponent: OfSelectSearchServerComponent
    });

    var OfTemplateRefComponent = /** @class */ (function () {
        function OfTemplateRefComponent(formService) {
            this.formService = formService;
            this.ofFieldTempates = [];
            this.id = Number(new Date());
        }
        OfTemplateRefComponent.prototype.ngOnInit = function () {
            var _this = this;
            var _a;
            this.formService.createExtendControl(this.group, this.field.controls);
            this.templateRef = (_a = this.ofFieldTempates.find(function (x) { return x.id === _this.field.dataField; })) === null || _a === void 0 ? void 0 : _a.controlTemplate;
        };
        return OfTemplateRefComponent;
    }());
    OfTemplateRefComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-template-ref',
                    template: "\n      <ng-container [ngTemplateOutlet]=\"templateRef\"\n                    [ngTemplateOutletContext]=\"{ $implicit: { value: id }, group: group,field: field }\"></ng-container>\n      <span *ngIf=\"!templateRef\" class=\"text-danger\">Ch\u01B0a c\u00F3 template</span>\n  "
                },] }
    ];
    OfTemplateRefComponent.ctorParameters = function () { return [
        { type: OfCreateControlFormService }
    ]; };

    var ofTemplateRef_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfTemplateRefComponent: OfTemplateRefComponent
    });

    var ShowValidationErrorPipe = /** @class */ (function () {
        function ShowValidationErrorPipe() {
        }
        ShowValidationErrorPipe.prototype.transform = function (errors, validations, submitted) {
            if (!submitted) {
                return '';
            }
            var err = '';
            if (errors && (validations === null || validations === void 0 ? void 0 : validations.length) > 0) {
                ___namespace.forEach(validations, function (valid) {
                    if (errors[valid.name]) {
                        err = valid.message;
                        return false;
                    }
                });
            }
            return err;
        };
        return ShowValidationErrorPipe;
    }());
    ShowValidationErrorPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'showValidationError'
                },] }
    ];

    var OfOptionSelectedPipe = /** @class */ (function () {
        function OfOptionSelectedPipe() {
        }
        OfOptionSelectedPipe.prototype.transform = function (value, label, field) {
            if (AppUtilityService.isNotNull(value)) {
                if (typeof field.renderSelectedFunc === 'function') {
                    if (field === null || field === void 0 ? void 0 : field.itemSelected) {
                        return field.renderSelectedFunc(field === null || field === void 0 ? void 0 : field.itemSelected);
                    }
                    return '';
                }
                else {
                    return label;
                }
            }
            return null;
        };
        return OfOptionSelectedPipe;
    }());
    OfOptionSelectedPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'ofOptionSelected',
                    pure: false
                },] }
    ];

    var OfSelectRenderOptionPipe = /** @class */ (function () {
        function OfSelectRenderOptionPipe() {
        }
        OfSelectRenderOptionPipe.prototype.transform = function (displayText, field, option) {
            return typeof (field.renderOptionFunc) === 'function' ? field === null || field === void 0 ? void 0 : field.renderOptionFunc(option) : displayText;
        };
        return OfSelectRenderOptionPipe;
    }());
    OfSelectRenderOptionPipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'ofSelectRenderOption'
                },] }
    ];

    var OfSelectComponent = /** @class */ (function () {
        function OfSelectComponent(cdr, destroy$) {
            this.cdr = cdr;
            this.destroy$ = destroy$;
            this.options = [];
        }
        OfSelectComponent.prototype.ngOnInit = function () {
            this.setOptionsView(this.field.options);
        };
        OfSelectComponent.prototype.trackBySelect = function (index, item) {
            return item.value;
        };
        OfSelectComponent.prototype.search = function (value) {
            if (AppUtilityService.isWhitespace(value)) {
                this.setOptionsView(this.field.options);
                return;
            }
            var searchTxt = AppUtilityService.getFullTextSearch(value);
            var options = ___namespace.filter(this.field.options, function (s) {
                var ftsVietTat = AppUtilityService.searchVietTat(s.displayText);
                var checkVietTat = ftsVietTat.indexOf(searchTxt) > -1;
                if (AppUtilityService.isNullOrEmpty(s.fts)) {
                    s.fts = AppUtilityService.getFullTextSearch(s.displayText);
                }
                return s.fts.indexOf(searchTxt) > -1 || checkVietTat;
            });
            this.setOptionsView(options);
        };
        OfSelectComponent.prototype.setOptionsView = function (options) {
            ___namespace.forEach(options, function (opt) {
                opt.fts = AppUtilityService.getFullTextSearch(opt.displayText);
            });
            this.options = options;
            this.getItemSelected();
            this.cdr.detectChanges();
        };
        OfSelectComponent.prototype.selectAll = function () {
            var values = ___namespace.map(this.field.options, function (opt) {
                return opt.value;
            });
            this.group.get(this.field.dataField).patchValue(values);
            this.cdr.detectChanges();
        };
        OfSelectComponent.prototype.unSelectAll = function () {
            this.group.get(this.field.dataField).patchValue(null);
            this.cdr.detectChanges();
        };
        OfSelectComponent.prototype.handlerValueDataFieldChange = function () {
            var _this = this;
            var _a;
            var f = this.group.get(this.field.dataField);
            if (f) {
                (_a = this.group.get(this.field.dataField)) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(operators.debounceTime(111)).pipe(operators.takeUntil(this.destroy$)).subscribe(function (v) {
                    if (typeof v === 'number') {
                        f.patchValue('' + v);
                    }
                    _this.getItemSelected();
                });
            }
        };
        OfSelectComponent.prototype.getItemSelected = function () {
            var v = this.group.get(this.field.dataField).value;
            if (AppUtilityService.isNullOrEmpty(v)) {
                this.field.itemSelected = null;
                this.cdr.detectChanges();
                return;
            }
            // tslint:disable-next-line:triple-equals
            this.field.itemSelected = ___namespace.find(this.options, function (x) { return x.value == v; });
            this.cdr.detectChanges();
        };
        OfSelectComponent.prototype.ngAfterViewInit = function () {
            this.schemaModel.subRender(this.cdr, this.destroy$);
            this.handlerValueDataFieldChange();
        };
        return OfSelectComponent;
    }());
    OfSelectComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-select',
                    template: "<form [formGroup]=\"group\">\n  <nz-select [formControlName]=\"field.dataField\" style=\"width: 100%\"\n             [nzCustomTemplate]=\"tplSelectedView\"\n             [nzPlaceHolder]=\"field.placeholder\"\n             [nzMode]=\"field.nzMode\" [nzAllowClear]=\"field.nzAllowClear\"\n             nzShowSearch nzServerSearch (nzOnSearch)=\"search($event)\"\n             [nzMaxMultipleCount]=\"field?.nzMaxMultipleCount\" [nzMaxTagCount]=\"field?.nzMaxTagCount\"\n             [nzDropdownRender]=\"nzDropdownRenderTpl\">\n    <nz-option [nzCustomContent]=\"true\" *ngFor=\"let option of options;trackBy:trackBySelect\"\n               [nzLabel]=\"option.displayText\"\n               [nzValue]=\"option.value\"\n    >\n      <span [innerHTML]=\"option.displayText | ofSelectRenderOption: field: option\">\n      </span>\n    </nz-option>\n  </nz-select>\n</form>\n<ng-template #tplSelectedView let-selected>\n  <span [innerHTML]=\"selected.nzValue | ofOptionSelected:selected.nzLabel:field\"></span>\n</ng-template>\n\n<ng-template #nzDropdownRenderTpl>\n  <div *ngIf=\"field.nzMode === 'multiple' && field.options?.length > 3\">\n    <nz-divider></nz-divider>\n    <div class=\"margin-top-10 margin-left-10 margin-bottom-5\">\n      <button nz-button nzType=\"primary\" (click)=\"selectAll()\" nzSize=\"small\"><i nz-icon nzType=\"plus\"></i> Ch\u1ECDn t\u1EA5t c\u1EA3\n      </button>\n      <button nz-button nzType=\"default\" (click)=\"unSelectAll()\" nzSize=\"small\"><i nz-icon nzType=\"minus\"></i> B\u1ECF ch\u1ECDn\n      </button>\n    </div>\n  </div>\n</ng-template>\n",
                    providers: [DestroyRxjsService],
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfSelectComponent.ctorParameters = function () { return [
        { type: i0.ChangeDetectorRef },
        { type: DestroyRxjsService }
    ]; };
    OfSelectComponent.propDecorators = {
        schemaModel: [{ type: i0.Input }],
        field: [{ type: i0.Input }],
        group: [{ type: i0.Input }]
    };

    var ofSelect_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfSelectComponent: OfSelectComponent
    });

    var OfSelectAsyncComponent = /** @class */ (function () {
        function OfSelectAsyncComponent(destroy$) {
            this.destroy$ = destroy$;
        }
        OfSelectAsyncComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.field.optionsAsync.pipe(operators.takeUntil(_this.destroy$)).subscribe(function (opt) {
                    _this.field.options = opt;
                    if (_this.vcSelect) {
                        _this.vcSelect.setOptionsView(opt);
                    }
                });
            });
        };
        return OfSelectAsyncComponent;
    }());
    OfSelectAsyncComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'select-async',
                    template: "\n      <of-select #vcSelect [schemaModel]=\"schemaModel\" [group]=\"group\" [field]=\"field\"></of-select>",
                    providers: [DestroyRxjsService],
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfSelectAsyncComponent.ctorParameters = function () { return [
        { type: DestroyRxjsService }
    ]; };
    OfSelectAsyncComponent.propDecorators = {
        vcSelect: [{ type: i0.ViewChild, args: ['vcSelect',] }]
    };

    var ofSelectAsync_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfSelectAsyncComponent: OfSelectAsyncComponent
    });

    var OfSelectApiComponent = /** @class */ (function () {
        function OfSelectApiComponent(destroy$) {
            this.destroy$ = destroy$;
        }
        Object.defineProperty(OfSelectApiComponent.prototype, "hasCacheOption", {
            get: function () {
                return !AppUtilityService.isNullOrEmpty(this.field.keyCache);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OfSelectApiComponent.prototype, "key", {
            get: function () {
                return 'selectOpt_' + this.field.keyCache;
            },
            enumerable: false,
            configurable: true
        });
        OfSelectApiComponent.prototype.getOptionsFromApi = function () {
            if (this.hasCacheOption) {
                var cache = sessionStorage.getItem(this.key);
                if (cache) {
                    return rxjs.of(JSON.parse(cache));
                }
            }
            return this.field.functionService;
        };
        OfSelectApiComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.getOptionsFromApi().pipe(operators.takeUntil(_this.destroy$))
                    .subscribe(function (opt) {
                    if (_this.hasCacheOption && !AppUtilityService.isNotAnyItem(opt)) {
                        sessionStorage.setItem(_this.key, JSON.stringify(opt));
                    }
                    _this.field.options = opt;
                    if (_this.vcSelect) {
                        _this.vcSelect.setOptionsView(opt);
                    }
                });
            });
        };
        return OfSelectApiComponent;
    }());
    OfSelectApiComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-of-select-api',
                    template: "\n      <of-select #vcSelect [schemaModel]=\"schemaModel\" [group]=\"group\" [field]=\"field\"></of-select>",
                    providers: [DestroyRxjsService],
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfSelectApiComponent.ctorParameters = function () { return [
        { type: DestroyRxjsService }
    ]; };
    OfSelectApiComponent.propDecorators = {
        vcSelect: [{ type: i0.ViewChild, args: ['vcSelect',] }]
    };

    var ofSelectApi_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfSelectApiComponent: OfSelectApiComponent
    });

    var OfSelectCascadeComponent = /** @class */ (function () {
        function OfSelectCascadeComponent(destroy$) {
            this.destroy$ = destroy$;
        }
        OfSelectCascadeComponent.prototype.getOptionsFromApi = function (cascade) {
            if (this.hasCacheOption) {
                var cache = sessionStorage.getItem(this.key(cascade));
                if (cache) {
                    return rxjs.of(JSON.parse(cache));
                }
            }
            return this.field.functionService(cascade);
        };
        Object.defineProperty(OfSelectCascadeComponent.prototype, "ctrl", {
            get: function () {
                return this.group.get(this.field.dataField);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OfSelectCascadeComponent.prototype, "hasCacheOption", {
            get: function () {
                return !AppUtilityService.isNullOrEmpty(this.field.keyCache);
            },
            enumerable: false,
            configurable: true
        });
        OfSelectCascadeComponent.prototype.key = function (cascade) {
            return 'selectOpt_' + this.field.keyCache + cascade;
        };
        OfSelectCascadeComponent.prototype.disableIfCascadeEmpty = function (cascade) {
            var ctrl = this.group.get(this.field.dataField);
            if (AppUtilityService.isNullOrEmpty(cascade)) {
                ctrl.disable({ onlySelf: true });
            }
            else {
                if (!this.field.disabled) {
                    ctrl.enable({ onlySelf: true });
                }
            }
        };
        OfSelectCascadeComponent.prototype.setOptionsForView = function (options) {
            if (this.vcSelect) {
                this.vcSelect.setOptionsView(options);
            }
            this.field.options = options;
        };
        OfSelectCascadeComponent.prototype.checkCurrentValue = function (options) {
            var _this = this;
            if (AppUtilityService.isNotNull(this.ctrl.value)) {
                // tslint:disable-next-line:triple-equals
                var f = options.find(function (x) { return x.value == _this.ctrl.value; });
                if (AppUtilityService.isNullOrEmpty(f)) {
                    this.ctrl.patchValue(null);
                }
            }
        };
        OfSelectCascadeComponent.prototype.handlerCascadeChange = function () {
            var _this = this;
            var _a;
            var cascadeField = this.group.get((_a = this.field) === null || _a === void 0 ? void 0 : _a.cascadeField);
            if (cascadeField) {
                cascadeField.valueChanges
                    .pipe(operators.debounceTime(111), operators.takeUntil(this.destroy$), operators.distinctUntilChanged())
                    .subscribe(function (cascade) {
                    _this.disableIfCascadeEmpty(cascade);
                    var ctrl = _this.group.get(_this.field.dataField);
                    if (AppUtilityService.isNullOrEmpty(cascade)) {
                        ctrl.patchValue(null);
                        _this.setOptionsForView([]);
                    }
                    else {
                        _this.getOptionsFromApi(cascade).pipe(operators.takeUntil(_this.destroy$))
                            .subscribe(function (opt) {
                            if (AppUtilityService.isNotAnyItem(opt)) {
                                ctrl.patchValue(null);
                                _this.setOptionsForView([]);
                            }
                            else {
                                if (_this.hasCacheOption) {
                                    sessionStorage.setItem(_this.key(cascade), JSON.stringify(opt));
                                }
                                _this.setOptionsForView(opt);
                                _this.checkCurrentValue(opt);
                            }
                        });
                    }
                });
            }
        };
        OfSelectCascadeComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                _this.ctrl.disable({ onlySelf: true });
                _this.handlerCascadeChange();
            }, 300);
        };
        return OfSelectCascadeComponent;
    }());
    OfSelectCascadeComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-select-cascade',
                    template: "\n      <of-select #vcSelect [schemaModel]=\"schemaModel\" [group]=\"group\" [field]=\"field\"></of-select>",
                    providers: [DestroyRxjsService],
                    changeDetection: i0.ChangeDetectionStrategy.OnPush
                },] }
    ];
    OfSelectCascadeComponent.ctorParameters = function () { return [
        { type: DestroyRxjsService }
    ]; };
    OfSelectCascadeComponent.propDecorators = {
        vcSelect: [{ type: i0.ViewChild, args: ['vcSelect',] }]
    };

    var ofSelectCascade_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfSelectCascadeComponent: OfSelectCascadeComponent
    });

    var OfValidErrorComponent = /** @class */ (function () {
        function OfValidErrorComponent() {
            this.submitted = false;
            this.validations = [];
            this.controlName = '';
        }
        Object.defineProperty(OfValidErrorComponent.prototype, "f", {
            get: function () {
                return this.form.controls[this.controlName];
            },
            enumerable: false,
            configurable: true
        });
        return OfValidErrorComponent;
    }());
    OfValidErrorComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-valid-error',
                    template: "\n      <span class=\"form-control-err text-danger\" *ngIf=\"validations && submitted\">\n              {{f?.errors | showValidationError : validations : submitted}}\n        </span>\n  "
                },] }
    ];
    OfValidErrorComponent.propDecorators = {
        submitted: [{ type: i0.Input }],
        validations: [{ type: i0.Input }],
        form: [{ type: i0.Input }],
        controlName: [{ type: i0.Input }]
    };

    var OfSelectAdvancedSearchComponent = /** @class */ (function () {
        function OfSelectAdvancedSearchComponent(drawerService, modalService) {
            this.drawerService = drawerService;
            this.modalService = modalService;
        }
        OfSelectAdvancedSearchComponent.prototype.ngOnInit = function () {
        };
        OfSelectAdvancedSearchComponent.prototype.onClickAdvancedBtn = function () {
            if (this.field.showComponentType === 'drawer') {
                this.openDrawer();
                return;
            }
            if (this.field.showComponentType === 'modal') {
                this.openModal();
                return;
            }
        };
        OfSelectAdvancedSearchComponent.prototype.openDrawer = function () {
            var _this = this;
            var drawerRef = this.drawerService.create(Object.assign({ nzTitle: 'Tìm kiếm nâng cao', nzContent: this.field.componentAdvanced, nzPlacement: 'bottom', nzMaskClosable: false, nzHeight: '68vh' }, this.field.nzDrawerOptions));
            drawerRef.afterClose.subscribe(function (data) {
                _this.group.get(_this.field.dataField).patchValue(data);
            });
        };
        OfSelectAdvancedSearchComponent.prototype.openModal = function () {
            var _this = this;
            var modalRef = this.modalService.create(Object.assign({ nzTitle: 'Tìm kiếm nâng cao', nzContent: this.field.componentAdvanced, nzMaskClosable: false }, this.field.nzModalConfig));
            modalRef.afterClose.subscribe(function (data) {
                _this.group.get(_this.field.dataField).patchValue(data);
            });
        };
        return OfSelectAdvancedSearchComponent;
    }());
    OfSelectAdvancedSearchComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'of-select-advanced-search',
                    template: "<div nz-row>\n  <div nz-col nzFlex=\"1 1 100px\">\n    <of-select-search-server [schemaModel]=\"schemaModel\" [group]=\"group\" [field]=\"field\"></of-select-search-server>\n  </div>\n  <div nz-col nzFlex=\"0 1 32px\">\n    <button nz-button (click)=\"onClickAdvancedBtn()\"\n            style=\"margin-left: -2px;\"\n            [disabled]=\"field.disabled\"\n            nzType=\"primary\" nzSearch>\n      <i nz-icon nzType=\"search\"></i></button>\n  </div>\n</div>\n"
                },] }
    ];
    OfSelectAdvancedSearchComponent.ctorParameters = function () { return [
        { type: ngZorroAntd.NzDrawerService },
        { type: ngZorroAntd.NzModalService }
    ]; };

    var ofSelectAdvancedSearch_component = /*#__PURE__*/Object.freeze({
        __proto__: null,
        OfSelectAdvancedSearchComponent: OfSelectAdvancedSearchComponent
    });

    var Of = [
        OfDynamicComponent,
        DynamicFieldDirective,
        OfTextComponent,
        ShowValidationErrorPipe,
        OfCheckBoxComponent,
        OfCurrencyComponent,
        OfDatePickerComponent,
        OfDataPickerControlComponent,
        OfTextAreaComponent,
        OfContentHtmlComponent,
        OfNumberInputComponent,
        NumbersOnlyDirective,
        OfPasswordComponent,
        OfRadioComponent,
        OfSwitchComponent,
        OfOptionSelectedPipe,
        OfSelectRenderOptionPipe,
        OfSelectSearchServerComponent,
        OfTemplateRefComponent,
        OfFieldComponent,
        OfSelectComponent,
        OfSelectAsyncComponent,
        OfSelectApiComponent,
        OfSelectCascadeComponent
    ];
    var entryComponents = [
        OfCheckBoxComponent,
        OfTextAreaComponent,
        OfTextComponent,
        OfSelectComponent,
        OfSelectAsyncComponent,
        OfSelectApiComponent,
        OfSelectCascadeComponent,
        OfSelectSearchServerComponent,
        OfCurrencyComponent,
        OfDatePickerComponent,
        OfContentHtmlComponent,
        OfNumberInputComponent,
        OfPasswordComponent,
        OfRadioComponent,
        OfSwitchComponent,
        OfTemplateRefComponent
    ];
    var OfModule = /** @class */ (function () {
        function OfModule() {
        }
        return OfModule;
    }());
    OfModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [Of, OfValidErrorComponent, OfSelectAdvancedSearchComponent],
                    imports: [
                        common.CommonModule,
                        i1.ReactiveFormsModule,
                        i1.FormsModule,
                        AntDesignModule,
                        ng2CurrencyMask.CurrencyMaskModule,
                        angular2TextMask.TextMaskModule
                    ],
                    exports: [
                        OfDynamicComponent,
                        OfFieldComponent,
                        i1.ReactiveFormsModule,
                        i1.FormsModule,
                        common.CommonModule,
                        OfValidErrorComponent
                    ]
                },] }
    ];

    var OfControlModel = /** @class */ (function () {
        function OfControlModel(config) {
            this.type = 'text';
            this.dataField = '';
            this.label = '';
            this.hiddenLabel = false;
            this.width = 6;
            this.css = '';
            this.required = false;
            this.errorEmpty = 'Không để trống trường này!';
            this.placeholder = '';
            this.disabled = false;
            this.hidden = false;
            this.validations = [];
            this.controls = [];
            this.dataField = config.dataField;
            this.label = config.label || this.label;
            this.hiddenLabel = (config === null || config === void 0 ? void 0 : config.hiddenLabel) || false;
            this.width = config.width || this.width;
            this.css = "ord-dynamic-input gutter-row ord-form-control field-" + this.dataField + " " + (config.css || '') + " ";
            this.required = config.required || this.required;
            this.errorEmpty = config.errorEmpty || this.errorEmpty;
            this.placeholder = config.placeholder || this.placeholder;
            this.disabled = config.disabled || this.disabled;
            this.disabledAsync = config.disabledAsync || null;
            this.hidden = config.hidden || this.hidden;
            this.hiddenAsync = config.hiddenAsync || null;
            this.validations = config.validations || [];
            this.value = (config === null || config === void 0 ? void 0 : config.value) || null;
            this.bottomHtml = (config === null || config === void 0 ? void 0 : config.bottomHtml) || null;
        }
        return OfControlModel;
    }());

    // cấu hình control trong template
    var OfExtendControlModel = /** @class */ (function () {
        function OfExtendControlModel(config) {
            this.disabled = false;
            this.errorEmpty = '';
            this.label = config.label || '';
            this.dataField = config.dataField;
            this.validations = config.validations || [];
            this.value = config.value;
            this.required = config.required;
            this.errorEmpty = config.errorEmpty || 'Không để trống trường này';
            this.disabled = config === null || config === void 0 ? void 0 : config.disabled;
        }
        return OfExtendControlModel;
    }());

    var OfSchemaModel = /** @class */ (function () {
        function OfSchemaModel(config) {
            this.layout = 'vertical';
            this.focusFisrtInit = true;
            this.errorNotValid = 'Vui lòng điền đầy đủ thông tin!';
            this.backUpDisables = {};
            this.render$ = new rxjs.Subject();
            this.isSearchBox = false;
            this.searchBtnBusy = false;
            this.searchEvent$ = new rxjs.Subject();
            this.rebuilder$ = new rxjs.Subject();
            this.submitted = false;
            this.fields = config.fields;
            this.id = Number(new Date());
            this.focusFisrtInit = (config === null || config === void 0 ? void 0 : config.focusFisrtInit) || true;
            this.errorNotValid = (config === null || config === void 0 ? void 0 : config.errorNotValid) || 'Vui lòng điền đầy đủ thông tin!';
            this.isSearchBox = (config === null || config === void 0 ? void 0 : config.isSearchBox) || false;
        }
        Object.defineProperty(OfSchemaModel.prototype, "value", {
            get: function () {
                var _a;
                return ((_a = this.form) === null || _a === void 0 ? void 0 : _a.getRawValue()) || null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(OfSchemaModel.prototype, "valueValid", {
            get: function () {
                var _a;
                if ((_a = this.form) === null || _a === void 0 ? void 0 : _a.valid) {
                    return this.value;
                }
                return null;
            },
            enumerable: false,
            configurable: true
        });
        OfSchemaModel.prototype.getField = function (name) {
            var _a;
            return ((_a = this.fields) === null || _a === void 0 ? void 0 : _a.find(function (x) { return x.dataField === name; })) || null;
        };
        OfSchemaModel.prototype.getFormControl = function (name) {
            return this.form.get(name);
        };
        OfSchemaModel.prototype.disableField = function (name, f) {
            var _this = this;
            if (f === void 0) { f = true; }
            setTimeout(function () {
                var ctr = _this.getFormControl(name);
                if (ctr) {
                    if (f) {
                        ctr.disable({ onlySelf: true });
                    }
                    else {
                        ctr.enable({ onlySelf: true });
                    }
                }
                // tslint:disable-next-line:no-shadowed-variable
                var field = _this.fields.find(function (f) { return f.dataField === name; });
                if (field) {
                    field.disabled = f;
                }
            });
        };
        OfSchemaModel.prototype.disableAll = function (f) {
            var _this = this;
            if (f === void 0) { f = true; }
            if (f) {
                this.backUpDisables = {};
                ___namespace.forEach(this.fields, function (field) {
                    if (field.disabled) {
                        _this.backUpDisables[field.dataField] = true;
                    }
                    field.disabled = true;
                    var ctr = _this.getFormControl(field.dataField);
                    if (ctr) {
                        ctr.disable({ onlySelf: true });
                    }
                });
                this.triggerRender();
                return;
            }
            ___namespace.forEach(this.fields, function (field) {
                var ctr = _this.getFormControl(field.dataField);
                if (ctr) {
                    var backUp = _this.backUpDisables[field.dataField];
                    if (backUp) {
                        ctr.disable({ onlySelf: true });
                        field.disabled = true;
                    }
                    else {
                        ctr.enable({ onlySelf: true });
                        field.disabled = false;
                    }
                }
            });
            this.triggerRender();
        };
        OfSchemaModel.prototype.hiddenFields = function (fields) {
            var _this = this;
            ___namespace.forEach(fields, function (field) {
                _this.getField(field).hidden = true;
            });
        };
        OfSchemaModel.prototype.showFields = function (fields) {
            var _this = this;
            ___namespace.forEach(fields, function (field) {
                _this.getField(field).hidden = false;
            });
        };
        OfSchemaModel.prototype.setHidden = function (fields, hiddens) {
            var _this = this;
            ___namespace.forEach(fields, function (field, idx) {
                _this.getField(field).hidden = hiddens[idx];
            });
        };
        OfSchemaModel.prototype.setShow = function (fields, shows) {
            var _this = this;
            ___namespace.forEach(fields, function (field, idx) {
                _this.getField(field).hidden = !shows[idx];
            });
        };
        OfSchemaModel.prototype.fieldValueChanges = function (name, time) {
            if (time === void 0) { time = 100; }
            var _a;
            return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(name).valueChanges.pipe(operators.debounceTime(time));
        };
        OfSchemaModel.prototype.valueChanges = function (time) {
            if (time === void 0) { time = 100; }
            var _a;
            return (_a = this.form) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(operators.debounceTime(time));
        };
        OfSchemaModel.prototype.patchValue = function (value) {
            var _this = this;
            Object.keys(value).forEach(function (name) {
                var f = _this.form.get(name);
                if (f) {
                    f.patchValue(value[name]);
                }
            });
            this.triggerRender();
        };
        OfSchemaModel.prototype.triggerRender = function () {
            var _this = this;
            setTimeout(function () {
                _this.render$.next(Number(new Date()));
            }, 500);
        };
        OfSchemaModel.prototype.subRender = function (cdr, destroy$) {
            this.render$.pipe(operators.filter(function (s) { return s > 0; })).pipe(operators.debounceTime(111))
                .pipe(operators.takeUntil(destroy$))
                .subscribe(function (d) {
                cdr.detectChanges();
            });
        };
        OfSchemaModel.prototype.addControls = function (controls, indexBegin) {
            if (indexBegin === void 0) { indexBegin = null; }
            if (indexBegin === null) {
                this.fields = ___namespace.concat(this.fields, controls);
            }
            else {
                this.fields = ___namespace.flatMap(this.fields, function (value, index) {
                    if (index === indexBegin) {
                        return __spread(controls, [value]);
                    }
                    return value;
                });
            }
            this.rebuilder();
        };
        OfSchemaModel.prototype.rebuilder = function () {
            var _this = this;
            setTimeout(function () {
                _this.rebuilder$.next(Number(new Date()));
            });
        };
        OfSchemaModel.prototype.search = function () {
            if (this.searchEvent$) {
                this.searchEvent$.next(this.value);
            }
        };
        return OfSchemaModel;
    }());

    var OfCheckBoxModel = /** @class */ (function (_super) {
        __extends(OfCheckBoxModel, _super);
        function OfCheckBoxModel(config) {
            var _this = _super.call(this, config) || this;
            _this.checkBoxLabel = '';
            _this.type = 'checkBox';
            _this.checkBoxLabel = config.checkBoxLabel;
            _this.value = _this.value || false;
            return _this;
        }
        return OfCheckBoxModel;
    }(OfControlModel));

    var OfComponentRefModel = /** @class */ (function (_super) {
        __extends(OfComponentRefModel, _super);
        function OfComponentRefModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'componentRef';
            _this.componentRef = config.componentRef;
            return _this;
        }
        return OfComponentRefModel;
    }(OfControlModel));

    var OfContentHtmlModel = /** @class */ (function (_super) {
        __extends(OfContentHtmlModel, _super);
        function OfContentHtmlModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'contentHtml';
            _this.content = config.content || '';
            if (config.isBlank) {
                _this.content = '';
            }
            return _this;
        }
        return OfContentHtmlModel;
    }(OfControlModel));

    var OfCurrencyModel = /** @class */ (function (_super) {
        __extends(OfCurrencyModel, _super);
        function OfCurrencyModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'currencyInput';
            _this.prefix = config.prefix || ' ';
            _this.suffix = config.suffix || ' VNĐ';
            _this.precision = config.precision || 0;
            return _this;
        }
        return OfCurrencyModel;
    }(OfControlModel));

    var OfDateModel = /** @class */ (function (_super) {
        __extends(OfDateModel, _super);
        function OfDateModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'datePicker';
            _this.minDateAsync = config.minDateAsync || null;
            _this.maxDateAsync = config.maxDateAsync || null;
            _this.dateNotGreaterThanCurrent = config.notGreaterThanCurrent || false;
            _this.minDate = config.minDate;
            _this.maxDate = config.maxDate;
            _this.tuNgayDataField = config.tuNgayDataField;
            _this.denNgayDataField = config.denNgayDataField;
            return _this;
        }
        return OfDateModel;
    }(OfControlModel));

    var OfNumberModel = /** @class */ (function (_super) {
        __extends(OfNumberModel, _super);
        function OfNumberModel(config) {
            var _this = _super.call(this, config) || this;
            _this.step = 1;
            _this.onlyKeyNumber = false;
            _this.type = 'numberInput';
            _this.min = config.min || null;
            _this.max = config.max || null;
            _this.step = config.step || 1;
            _this.onlyKeyNumber = config.onlyKeyNumber || false;
            _this.maxlength = config.maxlength || null;
            return _this;
        }
        return OfNumberModel;
    }(OfControlModel));

    var OfPwdModel = /** @class */ (function (_super) {
        __extends(OfPwdModel, _super);
        function OfPwdModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'passWordInput';
            _this.placeholder = _this.placeholder || 'Nhập mật khẩu';
            return _this;
        }
        return OfPwdModel;
    }(OfControlModel));

    var OfRadioModel = /** @class */ (function (_super) {
        __extends(OfRadioModel, _super);
        function OfRadioModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'radio';
            _this.items = config.items;
            return _this;
        }
        return OfRadioModel;
    }(OfControlModel));

    var OfSelectBaseModel = /** @class */ (function (_super) {
        __extends(OfSelectBaseModel, _super);
        function OfSelectBaseModel(config) {
            var _this = _super.call(this, config) || this;
            _this.nzAllowClear = true;
            _this.nzMode = 'default';
            _this.options = [];
            _this.itemSelected = null;
            _this.nzMode = (config === null || config === void 0 ? void 0 : config.nzMode) || 'default';
            if (AppUtilityService.isNotNull(config.nzAllowClear)) {
                _this.nzAllowClear = config.nzAllowClear;
            }
            if (_this.nzMode === 'multiple') {
                _this.nzMaxMultipleCount = (config === null || config === void 0 ? void 0 : config.nzMaxMultipleCount) || Number.MAX_VALUE;
            }
            _this.nzMaxTagCount = (config === null || config === void 0 ? void 0 : config.nzMaxTagCount) || 3;
            _this.placeholder = _this.placeholder || '-Chọn-';
            _this.renderOptionFunc = config.renderOptionFunc || null;
            _this.renderSelectedFunc = config.renderSelectedFunc || null;
            if (_this.value) {
                _this.value = '' + _this.value;
            }
            return _this;
        }
        return OfSelectBaseModel;
    }(OfControlModel));

    var OfSelectModel = /** @class */ (function (_super) {
        __extends(OfSelectModel, _super);
        function OfSelectModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'select';
            _this.options = config.options;
            return _this;
        }
        return OfSelectModel;
    }(OfSelectBaseModel));

    var OfSelectApiModel = /** @class */ (function (_super) {
        __extends(OfSelectApiModel, _super);
        function OfSelectApiModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'selectApi';
            _this.keyCache = config.keyCache;
            _this.functionService = config.functionService;
            return _this;
        }
        return OfSelectApiModel;
    }(OfSelectBaseModel));

    var OfSelectAsyncModel = /** @class */ (function (_super) {
        __extends(OfSelectAsyncModel, _super);
        function OfSelectAsyncModel(config) {
            var _this = _super.call(this, config) || this;
            _this.keyCache = '';
            _this.type = 'selectAsync';
            _this.optionsAsync = config.optionsAsync;
            _this.keyCache = config.keyCache;
            return _this;
        }
        return OfSelectAsyncModel;
    }(OfSelectBaseModel));

    var OfSelectCascadeModel = /** @class */ (function (_super) {
        __extends(OfSelectCascadeModel, _super);
        function OfSelectCascadeModel(config) {
            var _this = _super.call(this, config) || this;
            _this.keyCache = '';
            _this.cascadeField = '';
            _this.type = 'selectApiCascade';
            _this.functionService = config.functionService;
            _this.keyCache = config.keyCache;
            _this.cascadeField = config.cascadeField;
            return _this;
        }
        return OfSelectCascadeModel;
    }(OfSelectBaseModel));

    var OfSelectSearchServerModel = /** @class */ (function (_super) {
        __extends(OfSelectSearchServerModel, _super);
        function OfSelectSearchServerModel(config) {
            var _this = _super.call(this, config) || this;
            _this.showPagination = false;
            _this.type = 'selectSearchServer';
            _this.showPagination = config.showPagination || false;
            _this.functionService = config.functionService;
            return _this;
        }
        return OfSelectSearchServerModel;
    }(OfSelectBaseModel));

    var OfSelectAdvancedSearchModel = /** @class */ (function (_super) {
        __extends(OfSelectAdvancedSearchModel, _super);
        function OfSelectAdvancedSearchModel(config) {
            var _this = _super.call(this, config) || this;
            _this.showPagination = false;
            _this.showComponentType = 'drawer';
            _this.type = 'selectAdvancedSearch';
            _this.showPagination = config.showPagination || false;
            _this.functionService = config.functionService;
            _this.componentAdvanced = config.componentAdvanced;
            _this.showComponentType = (config === null || config === void 0 ? void 0 : config.showComponentType) || 'drawer';
            _this.nzDrawerOptions = (config === null || config === void 0 ? void 0 : config.nzDrawerOptions) || null;
            _this.nzModalConfig = (config === null || config === void 0 ? void 0 : config.nzModalConfig) || null;
            return _this;
        }
        return OfSelectAdvancedSearchModel;
    }(OfSelectBaseModel));

    var OfSwitchModel = /** @class */ (function (_super) {
        __extends(OfSwitchModel, _super);
        function OfSwitchModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'switch';
            _this.yesText = config.yesText || null;
            _this.noText = config.noText || null;
            return _this;
        }
        return OfSwitchModel;
    }(OfControlModel));

    var OfTemplateRefModel = /** @class */ (function (_super) {
        __extends(OfTemplateRefModel, _super);
        function OfTemplateRefModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'templateRef';
            _this.controls = config.controls;
            return _this;
        }
        return OfTemplateRefModel;
    }(OfControlModel));

    var OfTextModel = /** @class */ (function (_super) {
        __extends(OfTextModel, _super);
        function OfTextModel(config) {
            var _this = _super.call(this, config) || this;
            _this.type = 'text';
            _this.maxLength = (config === null || config === void 0 ? void 0 : config.maxLength) || null;
            _this.minLength = (config === null || config === void 0 ? void 0 : config.minLength) || null;
            return _this;
        }
        return OfTextModel;
    }(OfControlModel));

    var OfTextAreaModel = /** @class */ (function (_super) {
        __extends(OfTextAreaModel, _super);
        function OfTextAreaModel(config) {
            var _this = _super.call(this, config) || this;
            _this.maxLength = 2000;
            _this.rows = 1;
            _this.type = 'textArea';
            if ((config === null || config === void 0 ? void 0 : config.maxLength) > 0) {
                _this.maxLength = config === null || config === void 0 ? void 0 : config.maxLength;
            }
            _this.rows = config.rows || 1;
            return _this;
        }
        return OfTextAreaModel;
    }(OfControlModel));

    /*
     * Public API Surface of of
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DestroyRxjsService = DestroyRxjsService;
    exports.OfCheckBoxModel = OfCheckBoxModel;
    exports.OfComponentRefModel = OfComponentRefModel;
    exports.OfContentHtmlModel = OfContentHtmlModel;
    exports.OfControlModel = OfControlModel;
    exports.OfCurrencyModel = OfCurrencyModel;
    exports.OfDateModel = OfDateModel;
    exports.OfDynamicComponent = OfDynamicComponent;
    exports.OfExtendControlModel = OfExtendControlModel;
    exports.OfFieldComponent = OfFieldComponent;
    exports.OfModule = OfModule;
    exports.OfNumberModel = OfNumberModel;
    exports.OfPwdModel = OfPwdModel;
    exports.OfRadioModel = OfRadioModel;
    exports.OfSchemaModel = OfSchemaModel;
    exports.OfSelectAdvancedSearchModel = OfSelectAdvancedSearchModel;
    exports.OfSelectApiModel = OfSelectApiModel;
    exports.OfSelectAsyncModel = OfSelectAsyncModel;
    exports.OfSelectCascadeModel = OfSelectCascadeModel;
    exports.OfSelectModel = OfSelectModel;
    exports.OfSelectSearchServerModel = OfSelectSearchServerModel;
    exports.OfSwitchModel = OfSwitchModel;
    exports.OfTemplateRefModel = OfTemplateRefModel;
    exports.OfTextAreaModel = OfTextAreaModel;
    exports.OfTextModel = OfTextModel;
    exports.OfValidErrorComponent = OfValidErrorComponent;
    exports.ɵa = OfCreateControlFormService;
    exports.ɵb = OfValidatorService;
    exports.ɵba = AntIconService;
    exports.ɵbb = OfControlModel;
    exports.ɵbd = OfSelectBaseModel;
    exports.ɵc = DynamicFieldDirective;
    exports.ɵd = OfTextComponent;
    exports.ɵe = ShowValidationErrorPipe;
    exports.ɵf = OfCheckBoxComponent;
    exports.ɵg = OfCurrencyComponent;
    exports.ɵh = OfDatePickerComponent;
    exports.ɵi = OfDataPickerControlComponent;
    exports.ɵj = OfTextAreaComponent;
    exports.ɵk = OfContentHtmlComponent;
    exports.ɵl = OfNumberInputComponent;
    exports.ɵm = NumbersOnlyDirective;
    exports.ɵn = OfPasswordComponent;
    exports.ɵo = OfRadioComponent;
    exports.ɵp = OfSwitchComponent;
    exports.ɵq = OfOptionSelectedPipe;
    exports.ɵr = OfSelectRenderOptionPipe;
    exports.ɵs = OfSelectSearchServerComponent;
    exports.ɵt = OfTemplateRefComponent;
    exports.ɵu = OfSelectComponent;
    exports.ɵv = OfSelectAsyncComponent;
    exports.ɵw = OfSelectApiComponent;
    exports.ɵx = OfSelectCascadeComponent;
    exports.ɵy = OfSelectAdvancedSearchComponent;
    exports.ɵz = AntDesignModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=orendaco-of.umd.js.map
