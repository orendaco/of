import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, ViewEncapsulation, Input, Output, ContentChild, NgModule, ChangeDetectionStrategy, Directive, ComponentFactoryResolver, ViewContainerRef, ChangeDetectorRef, ViewChild, forwardRef, ElementRef, HostListener, Pipe } from '@angular/core';
import * as i1 from '@angular/forms';
import { Validators, FormBuilder, NG_VALUE_ACCESSOR, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import * as _ from 'lodash';
import { Subject, BehaviorSubject, fromEvent, of } from 'rxjs';
import * as $ from 'jquery';
import { takeUntil, distinctUntilChanged, filter, debounceTime, map, tap, finalize } from 'rxjs/operators';
import { vi_VN, NZ_I18N, NZ_DATE_LOCALE } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { vi as vi$1 } from 'date-fns/locale';
import { registerLocaleData, CommonModule } from '@angular/common';
import vi from '@angular/common/locales/vi';
import * as AllIcons from '@ant-design/icons-angular/icons';
import { NgZorroAntdModule, NzDrawerService, NzModalService } from 'ng-zorro-antd';
import { __awaiter } from 'tslib';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import * as moment from 'moment';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { TextMaskModule } from 'angular2-text-mask';

class DestroyRxjsService extends Subject {
    ngOnDestroy() {
        this.next();
        this.complete();
    }
}
DestroyRxjsService.decorators = [
    { type: Injectable }
];

class AppUtilityService {
    constructor() {
    }
    static isNullOrEmpty(input) {
        return typeof input === 'undefined' || input === null || input === '';
        // return !(typeof input !== 'undefined' && input && input !== '' && input !== null);
    }
    static isNotNull(input) {
        return !AppUtilityService.isNullOrEmpty(input);
    }
    static getFullTextSearch(str) {
        if (AppUtilityService.isNullOrEmpty(str)) {
            return str;
        }
        str += '';
        str = AppUtilityService.removeDau(str);
        str = str.replace(/\s\s+/g, ' ');
        return str;
    }
    static removeDau(str) {
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
    }
    static isNotAnyItem(input) {
        return AppUtilityService.isNullOrEmpty(input) || input.length === 0;
    }
    static isWhitespace(value) {
        return (value || '').trim().length === 0;
    }
    static searchVietTat(str) {
        if (AppUtilityService.isNullOrEmpty(str)) {
            return str;
        }
        let ret = '';
        const spl = str.split(' ');
        if (AppUtilityService.isNotAnyItem(spl) === false) {
            spl.forEach((s) => {
                if (s.length > 0) {
                    ret = ret + s[0];
                }
            });
        }
        return AppUtilityService.getFullTextSearch(_.cloneDeep(ret));
    }
}
AppUtilityService.decorators = [
    { type: Injectable }
];
AppUtilityService.ctorParameters = () => [];

class OfValidatorService {
    constructor() {
    }
    noWhitespaceValidator(control) {
        if (AppUtilityService.isNullOrEmpty(control.value)) {
            return { whiteSpace: true };
        }
        const v = '' + control.value;
        const isWhitespace = v.trim().length === 0;
        const isValid = !isWhitespace;
        return isValid ? null : { whiteSpace: true };
    }
    emailValidator(control) {
        const value = (control === null || control === void 0 ? void 0 : control.value) || '';
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const isValid = re.test(value);
        return isValid ? null : { email: true };
    }
    passwordValidator(control) {
        const value = (control === null || control === void 0 ? void 0 : control.value) || '';
        const check = value.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/);
        const isValid = !!check;
        return isValid ? null : { password: true };
    }
    phoneValidator(control) {
        const value = (control === null || control === void 0 ? void 0 : control.value) || '';
        const check = value.match(/(09|01[2|6|8|9])+([0-9]{8})\b/);
        const isValid = !!check;
        return isValid ? null : { phone: true };
    }
    focusControlItem(id) {
        const arr = $('#' + id).find('.ord-form-control');
        let flag = true;
        arr.each(function () {
            let txt = $(this).find('.form-control-err').text();
            if (txt) {
                txt = txt.replace(/ /g, '');
            }
            if (flag && AppUtilityService.isNotNull(txt)) {
                $(this).find('.ord-dynamic-input').focus();
                $(this).find('.ant-input-number-input').focus();
                $(this).find('.ant-input').focus();
                $(this).find('.ant-select-selection-search-input').focus();
                if ($(this).find('.ant-radio-input')[0]) {
                    $(this).find('.ant-radio-input')[0].focus();
                }
                flag = false;
            }
        });
    }
    focusFirst(id) {
        const arr = $('#' + id).find('.ord-form-control');
        let flag = true;
        arr.each(function () {
            if (flag) {
                $(this).find('.ord-dynamic-input').focus();
                $(this).find('.ant-input-number-input').focus();
                $(this).find('.ant-input').focus();
                $(this).find('.ant-select-selection-search-input').focus();
                if ($(this).find('.ant-radio-input')[0]) {
                    $(this).find('.ant-radio-input')[0].focus();
                }
                flag = false;
            }
        });
    }
}
OfValidatorService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OfValidatorService_Factory() { return new OfValidatorService(); }, token: OfValidatorService, providedIn: "root" });
OfValidatorService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OfValidatorService.ctorParameters = () => [];

class OfCreateControlFormService {
    constructor(fb, validatorService) {
        this.fb = fb;
        this.validatorService = validatorService;
    }
    createControl(fields) {
        const group = this.fb.group({});
        _.forEach(fields, (field) => {
            this.createField(field, group);
        });
        return group;
    }
    createExtendControl(group, controls) {
        _.forEach(controls, (field) => {
            const f = group.get(field.dataField);
            if (f) {
                return;
            }
            this.createValidations(field);
            const control = this.fb.control(field.value, this.bindValidations(field));
            if (field.disabled) {
                control.disable({ onlySelf: true });
            }
            group.addControl(field.dataField, control);
        });
    }
    getDataFieldAndNameConstrols(fields) {
        const ret = [];
        _.forEach(fields, (f) => {
            ret.push(f.dataField);
            if (f === null || f === void 0 ? void 0 : f.controls) {
                _.forEach(f.controls, ctrl => {
                    ret.push(ctrl.dataField);
                });
            }
        });
        return ret;
    }
    updateControl(fields, group) {
        const lstNameField = this.getDataFieldAndNameConstrols(fields);
        Object.keys(group.controls).forEach(key => {
            const fDataField = lstNameField.indexOf(key) > -1;
            if (!fDataField) {
                group.removeControl(key);
            }
        });
        _.forEach(fields, (field) => {
            const f = group.get(field.dataField);
            if (f) {
                return;
            }
            this.createField(field, group);
        });
    }
    createField(field, group) {
        const ignoreType = ['contentHtml', 'componentRef', 'templateRef'];
        if (ignoreType.indexOf(field.type) > 0) {
            return;
        }
        this.createValidations(field);
        const control = this.fb.control(field.value, this.bindValidations(field));
        if (field.disabled) {
            control.disable({ onlySelf: true });
        }
        group.addControl(field.dataField, control);
    }
    createValidations(field) {
        field.validations = field.validations || [];
        field.validations.forEach(valid => {
            if (valid.name === 'email') {
                valid.validator = this.validatorService.emailValidator;
                valid.message = valid.message || 'Email sai định dạng!';
                return;
            }
            if (valid.name === 'phone') {
                valid.validator = this.validatorService.phoneValidator;
                valid.message = valid.message || 'Số điện thoại không đúng định dạng!';
                return;
            }
            if (valid.name === 'password') {
                valid.validator = this.validatorService.passwordValidator;
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
    }
    bindValidations(field) {
        const validations = field.validations || [];
        if (validations.length > 0) {
            const validList = [];
            validations.forEach(valid => {
                validList.push(valid.validator);
            });
            return Validators.compose(validList);
        }
        return null;
    }
}
OfCreateControlFormService.ɵprov = i0.ɵɵdefineInjectable({ factory: function OfCreateControlFormService_Factory() { return new OfCreateControlFormService(i0.ɵɵinject(i1.FormBuilder), i0.ɵɵinject(OfValidatorService)); }, token: OfCreateControlFormService, providedIn: "root" });
OfCreateControlFormService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
OfCreateControlFormService.ctorParameters = () => [
    { type: FormBuilder },
    { type: OfValidatorService }
];

class OfDynamicComponent {
    constructor(fb, createCtrlService, validatorService, destroy$) {
        this.fb = fb;
        this.createCtrlService = createCtrlService;
        this.validatorService = validatorService;
        this.destroy$ = destroy$;
        this.submitValueEvent = new EventEmitter();
        this.searchEvent = new EventEmitter();
        this.fields = [];
        this.ofFieldTempates = [];
    }
    get value() {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.getRawValue();
    }
    ngOnInit() {
        this.fields = this.schemaModel.fields || [];
        this.form = this.createCtrlService.createControl(this.fields);
        this.schemaModel.form = this.form;
        this.init$();
    }
    reBuilderForm() {
        this.fields = this.schemaModel.fields || [];
        this.createCtrlService.updateControl(this.fields, this.form);
        this.schemaModel.form = this.form;
    }
    init$() {
        this.schemaModel.rebuilder$.pipe(takeUntil(this.destroy$), distinctUntilChanged(), filter(x => x > 0))
            .subscribe(() => {
            this.reBuilderForm();
        });
    }
    trackByField(index, field) {
        return field.dataField;
    }
    onSubmit(isCheckValid = true) {
        this.schemaModel.submitted = true;
        if (!isCheckValid) {
            this.submitValueEvent.emit(this.value);
            return this.value;
        }
        _.forEach(this.fields, (field) => {
            const f = this.form.controls[field.dataField];
            if (f) {
                if (field.hidden) {
                    f.setValidators(null);
                }
                else {
                    f.setValidators(this.createCtrlService.bindValidations(field));
                }
            }
        });
        if (this.form.valid) {
            this.submitValueEvent.emit(this.value);
            return this.value;
        }
        else {
            setTimeout(() => {
                this.validatorService.focusControlItem(this.schemaModel.id);
            }, 500);
            return null;
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.validatorService.focusFirst(this.schemaModel.id);
        }, 500);
    }
    onClickSearchBtn() {
        this.schemaModel.searchBtnBusy = true;
        this.searchEvent.emit(this.value);
        this.schemaModel.searchEvent$.next(this.value);
    }
    disableAll(f = true) {
        this.schemaModel.disableAll(f);
    }
    disableField(name, f = true) {
        this.schemaModel.disableField(name, f);
    }
    addOfFieldTempates(d) {
        this.ofFieldTempates.push(d);
    }
}
OfDynamicComponent.decorators = [
    { type: Component, args: [{
                selector: 'of',
                template: "<form class=\"dynamic-form\" [formGroup]=\"form\">\r\n  <div nz-row [nzGutter]=\"[18, 6]\" [id]=\"schemaModel.id\">\r\n    <ng-content select=\"[topContent]\"></ng-content>\r\n    <ng-container *ngFor=\"let field of fields;trackBy:trackByField\">\r\n      <div nz-col *ngIf=\"!field.hidden\" [nzSpan]=\"field.width\" [ngClass]=\"field.css\">\r\n        <nz-form-label [nzRequired]=\"field.required\" [hidden]=\"field.hiddenLabel\">\r\n          <span [innerHTML]=\"field.label\"></span>\r\n        </nz-form-label>\r\n        <div ofDynamicField [schemaModel]=\"schemaModel\" [field]=\"field\" [group]=\"form\"\r\n             [ofFieldTempates]=\"ofFieldTempates\" (searchEvent)=\"searchEvent.emit($event)\">\r\n        </div>\r\n        <of-valid-error [controlName]=\"field.dataField\"\r\n                        [validations]=\"field?.validations\"\r\n                        [form]=\"form\"\r\n                        [submitted]=\"schemaModel.submitted\"\r\n        ></of-valid-error>\r\n        <!--        <span class=\"form-control-err text-danger\">-->\r\n        <!--              {{this.form.controls[field.dataField]?.errors | showValidationError : field?.validations : schemaModel.submitted}}-->\r\n        <!--        </span>-->\r\n        <div [innerHTML]=\"field.bottomHtml\"></div>\r\n      </div>\r\n    </ng-container>\r\n    <div *ngIf=\"schemaModel.isSearchBox\" nz-col class=\"gutter-row of-btn-search ord-form-control\" [nzSpan]=\"2\">\r\n      <button nz-button nzType=\"primary\"\r\n              [nzLoading]=\"schemaModel.searchBtnBusy\"\r\n              (click)=\"onClickSearchBtn()\">T\u00ECm ki\u1EBFm\r\n      </button>\r\n    </div>\r\n    <ng-content select=\"[bottomContent]\"></ng-content>\r\n  </div>\r\n</form>\r\n",
                encapsulation: ViewEncapsulation.None,
                providers: [DestroyRxjsService],
                styles: [".of-btn-search{max-width:109px}.of-btn-search button{margin-top:25px!important}.ant-form-item-label{padding:0!important;height:25px!important}.ant-form-item-label>label:after{content:\"\"!important}"]
            },] }
];
OfDynamicComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: OfCreateControlFormService },
    { type: OfValidatorService },
    { type: DestroyRxjsService }
];
OfDynamicComponent.propDecorators = {
    schemaModel: [{ type: Input }],
    submitValueEvent: [{ type: Output }],
    searchEvent: [{ type: Output }]
};

class OfFieldComponent {
    constructor(ofDynamic) {
        this.ofDynamic = ofDynamic;
        // map với dataField
        this.id = '';
        this.ofDynamic.addOfFieldTempates(this);
    }
}
OfFieldComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-field',
                template: ``
            },] }
];
OfFieldComponent.ctorParameters = () => [
    { type: OfDynamicComponent }
];
OfFieldComponent.propDecorators = {
    id: [{ type: Input }],
    controlTemplate: [{ type: ContentChild, args: ['control',] }]
};

class AntIconService {
    constructor() {
        this.antDesignIcons = AllIcons;
    }
    icons() {
        const ret = [];
        for (const key of Object.keys(this.antDesignIcons)) {
            ret.push(this.antDesignIcons[key]);
        }
        return ret;
    }
}

registerLocaleData(vi);
const ɵ0 = vi_VN, ɵ1 = new AntIconService().icons(), ɵ2 = vi$1;
class AntDesignModule {
}
AntDesignModule.decorators = [
    { type: NgModule, args: [{
                declarations: [],
                exports: [NgZorroAntdModule],
                providers: [
                    { provide: NZ_I18N, useValue: ɵ0 },
                    { provide: NZ_ICONS, useValue: ɵ1 },
                    { provide: NZ_DATE_LOCALE, useValue: ɵ2 }
                ]
            },] }
];

class OfCheckBoxComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfCheckBoxComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-check-box',
                template: `
      <form [formGroup]="group">
          <label nz-checkbox [formControlName]="field.dataField">{{ field.checkBoxLabel }}</label>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfCheckBoxComponent.ctorParameters = () => [];

var ofCheckBox_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfCheckBoxComponent: OfCheckBoxComponent
});

class DynamicFieldDirective {
    constructor(resolver, container, destroy$) {
        this.resolver = resolver;
        this.container = container;
        this.destroy$ = destroy$;
        this.ofFieldTempates = [];
        this.searchEvent = new EventEmitter();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.mapComponent();
            if (this.component) {
                const factory = this.resolver.resolveComponentFactory(this.component);
                this.componentRef = this.container.createComponent(factory);
                this.componentRef.instance.field = this.field;
                this.componentRef.instance.group = this.group;
                this.componentRef.instance.schemaModel = this.schemaModel;
                if (this.field.type === 'templateRef') {
                    this.componentRef.instance.ofFieldTempates = this.ofFieldTempates;
                }
                if (this.schemaModel.isSearchBox && this.field.type === 'text') {
                    this.componentRef.instance.searchEvent.pipe(takeUntil(this.destroy$)).subscribe(d => {
                        this.searchEvent.emit(d);
                    });
                }
            }
            this.init$();
        });
    }
    mapComponent() {
        return __awaiter(this, void 0, void 0, function* () {
            const type = this.field.type;
            switch (type) {
                case 'checkBox':
                    const { OfCheckBoxComponent } = yield Promise.resolve().then(function () { return ofCheckBox_component; });
                    this.component = OfCheckBoxComponent;
                    break;
                case 'textArea':
                    const { OfTextAreaComponent } = yield Promise.resolve().then(function () { return ofTextArea_component; });
                    this.component = OfTextAreaComponent;
                    break;
                case 'text':
                    const { OfTextComponent } = yield Promise.resolve().then(function () { return ofText_component; });
                    this.component = OfTextComponent;
                    break;
                case 'select':
                    const { OfSelectComponent } = yield Promise.resolve().then(function () { return ofSelect_component; });
                    this.component = OfSelectComponent;
                    break;
                case 'selectAsync':
                    const { OfSelectAsyncComponent } = yield Promise.resolve().then(function () { return ofSelectAsync_component; });
                    this.component = OfSelectAsyncComponent;
                    break;
                case 'selectApi':
                    const { OfSelectApiComponent } = yield Promise.resolve().then(function () { return ofSelectApi_component; });
                    this.component = OfSelectApiComponent;
                    break;
                case 'selectApiCascade':
                    const { OfSelectCascadeComponent } = yield Promise.resolve().then(function () { return ofSelectCascade_component; });
                    this.component = OfSelectCascadeComponent;
                    break;
                case 'selectSearchServer':
                    const { OfSelectSearchServerComponent } = yield Promise.resolve().then(function () { return ofSelectSearchServer_component; });
                    this.component = OfSelectSearchServerComponent;
                    break;
                case 'selectAdvancedSearch':
                    const { OfSelectAdvancedSearchComponent } = yield Promise.resolve().then(function () { return ofSelectAdvancedSearch_component; });
                    this.component = OfSelectAdvancedSearchComponent;
                    break;
                case 'currencyInput':
                    const { OfCurrencyComponent } = yield Promise.resolve().then(function () { return ofCurrency_component; });
                    this.component = OfCurrencyComponent;
                    break;
                case 'datePicker':
                    const { OfDatePickerComponent } = yield Promise.resolve().then(function () { return ofDatePicker_component; });
                    this.component = OfDatePickerComponent;
                    break;
                case 'contentHtml':
                    const { OfContentHtmlComponent } = yield Promise.resolve().then(function () { return ofContentHtml_component; });
                    this.component = OfContentHtmlComponent;
                    break;
                case 'numberInput':
                    const { OfNumberInputComponent } = yield Promise.resolve().then(function () { return ofNumberInput_component; });
                    this.component = OfNumberInputComponent;
                    break;
                case 'passWordInput':
                    const { OfPasswordComponent } = yield Promise.resolve().then(function () { return ofPassword_component; });
                    this.component = OfPasswordComponent;
                    break;
                case 'radio':
                    const { OfRadioComponent } = yield Promise.resolve().then(function () { return ofRadio_component; });
                    this.component = OfRadioComponent;
                    break;
                case 'switch':
                    const { OfSwitchComponent } = yield Promise.resolve().then(function () { return ofSwitch_component; });
                    this.component = OfSwitchComponent;
                    break;
                case 'componentRef':
                    const field = this.field;
                    this.component = field.componentRef;
                    break;
                case 'templateRef':
                    const { OfTemplateRefComponent } = yield Promise.resolve().then(function () { return ofTemplateRef_component; });
                    this.component = OfTemplateRefComponent;
                    break;
            }
        });
    }
    get f() {
        return this.group.get(this.field.dataField) || null;
    }
    init$() {
        if (this.field.hiddenAsync) {
            this.field.hiddenAsync.pipe(takeUntil(this.destroy$))
                .pipe(debounceTime(300))
                .subscribe(d => {
                this.field.hidden = d;
            });
        }
        if (this.field.disabledAsync) {
            this.field.disabledAsync.pipe(takeUntil(this.destroy$))
                .subscribe(d => {
                this.field.disabled = d;
                if (this.f) {
                    if (d) {
                        this.f.disable({ onlySelf: true });
                    }
                    else {
                        this.f.enable({ onlySelf: true });
                    }
                }
                this.disableExtendControl(d);
            });
        }
    }
    disableExtendControl(d) {
        if (!AppUtilityService.isNotAnyItem(this.field.controls)) {
            this.field.controls.forEach(ctrl => {
                ctrl.disabled = d;
                const fControl = this.group.get(ctrl.dataField);
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
    }
}
DynamicFieldDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ofDynamicField]',
                providers: [DestroyRxjsService]
            },] }
];
DynamicFieldDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: DestroyRxjsService }
];
DynamicFieldDirective.propDecorators = {
    schemaModel: [{ type: Input }],
    field: [{ type: Input }],
    group: [{ type: Input }],
    ofFieldTempates: [{ type: Input }],
    searchEvent: [{ type: Output }]
};

class OfTextComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
        this.searchEvent = new EventEmitter();
        this.keyEnter$ = new Subject();
        this.nzSpinning = false;
    }
    ngOnInit() {
        this.keyEnter$.pipe(takeUntil(this.destroy$), debounceTime(500), distinctUntilChanged())
            .subscribe(d => {
            if (this.schemaModel.isSearchBox) {
                this.schemaModel.searchBtnBusy = true;
                this.schemaModel.searchEvent$.next(d);
                this.searchEvent.emit(d);
                this.nzSpinning = false;
            }
        });
    }
    onKeyEnterControl() {
        if (this.schemaModel.isSearchBox) {
            this.nzSpinning = true;
            this.keyEnter$.next(this.group.getRawValue());
        }
    }
}
OfTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-text',
                template: `
      <nz-spin [nzSpinning]="nzSpinning">
          <form [formGroup]="group" (keyup.enter)="onKeyEnterControl()">
              <input [formControlName]="field.dataField" nz-input [disabled]="true" [placeholder]="field.placeholder"
                     maxlength="{{ field?.maxLength }}"/>
          </form>
      </nz-spin>

  `,
                providers: [DestroyRxjsService]
            },] }
];
OfTextComponent.ctorParameters = () => [
    { type: DestroyRxjsService }
];
OfTextComponent.propDecorators = {
    searchEvent: [{ type: Output }]
};

var ofText_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfTextComponent: OfTextComponent
});

class OfCurrencyComponent {
    constructor() {
        this.options = {};
    }
    ngOnInit() {
        this.options = {
            prefix: this.field.prefix,
            suffix: this.field.suffix,
            thousands: '.',
            decimal: ',',
            precision: this.field.precision
        };
    }
}
OfCurrencyComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-currency',
                template: `
      <form [formGroup]="group">
          <input
                  currencyMask
                  nz-input
                  [formControlName]="field.dataField"
                  class="ord-dynamic-input"
                  [disabled]="field.disabled"
                  [placeholder]="field.placeholder"
                  [options]="field"
          />
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
      input::placeholder {
          text-align: left;
      }
  `]
            },] }
];
OfCurrencyComponent.ctorParameters = () => [];

var ofCurrency_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfCurrencyComponent: OfCurrencyComponent
});

class OfDatePickerComponent {
    constructor(destroy$, cdr) {
        this.destroy$ = destroy$;
        this.cdr = cdr;
        this.disabledDate = (current) => {
            var _a;
            if (((_a = this.field) === null || _a === void 0 ? void 0 : _a.dateNotGreaterThanCurrent) && !this.maxDate) {
                this.maxDate = new Date();
            }
            let check = false;
            if (this.minDate) {
                check = check || differenceInCalendarDays(current, this.minDate) < 0;
            }
            if (this.maxDate) {
                check = check || differenceInCalendarDays(current, this.maxDate) > 0;
            }
            return check;
        };
    }
    ngOnInit() {
        this.minDate = this.field.minDate;
        this.maxDate = this.field.maxDate;
        if (this.field.minDateAsync) {
            this.field.minDateAsync.pipe(takeUntil(this.destroy$))
                .subscribe(min => {
                this.setMinDate(min);
            });
        }
        if (this.field.maxDateAsync) {
            this.field.maxDateAsync.pipe(takeUntil(this.destroy$)).subscribe(max => {
                this.setMaxDate(max);
            });
        }
        this.schemaModel.subRender(this.cdr, this.destroy$);
    }
    setMinDate(min) {
        const d = this.convertDate(min);
        if (AppUtilityService.isNullOrEmpty(this.field.minDate)) {
            this.minDate = d;
        }
        else if (AppUtilityService.isNotNull(d) && differenceInCalendarDays(d, this.field.minDate) > 0) {
            this.minDate = d;
        }
        else {
            this.minDate = this.field.minDate;
        }
        this.cdr.detectChanges();
    }
    setMaxDate(max) {
        const d = this.convertDate(max);
        if (AppUtilityService.isNullOrEmpty(this.field.maxDate)) {
            this.maxDate = d;
        }
        else if (AppUtilityService.isNotNull(d) && differenceInCalendarDays(d, this.field.maxDate) < 0) {
            this.maxDate = d;
        }
        else {
            this.maxDate = this.field.maxDate;
        }
        this.cdr.detectChanges();
    }
    convertDate(date) {
        if (moment.isMoment(date)) {
            return date.toDate();
        }
        else {
            return date;
        }
    }
    get f() {
        return this.group.get(this.field.dataField);
    }
    handlerTuNgayChange() {
        if (AppUtilityService.isNotNull(this.field.tuNgayDataField) && this.group.get(this.field.tuNgayDataField)) {
            this.group.get(this.field.tuNgayDataField).valueChanges
                .pipe(takeUntil(this.destroy$)).subscribe(min => {
                this.setMinDate(min);
            });
        }
    }
    handlerDenNgayChange() {
        if (AppUtilityService.isNotNull(this.field.denNgayDataField) && this.group.get(this.field.denNgayDataField)) {
            this.group.get(this.field.denNgayDataField).valueChanges
                .pipe(takeUntil(this.destroy$)).subscribe(max => {
                this.setMaxDate(max);
            });
        }
    }
    ngAfterContentChecked() {
        this.handlerDenNgayChange();
        this.handlerTuNgayChange();
    }
}
OfDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-date-picker',
                template: `
      <form [formGroup]="group">
          <of-date-picker-ctrl #vcDatePicker [formControlName]="field.dataField"
                               [disabled]="field.disabled"
                               [disabledDate]="disabledDate"></of-date-picker-ctrl>
      </form>
  `,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfDatePickerComponent.ctorParameters = () => [
    { type: DestroyRxjsService },
    { type: ChangeDetectorRef }
];
OfDatePickerComponent.propDecorators = {
    vcDatePicker: [{ type: ViewChild, args: ['vcDatePicker',] }]
};

var ofDatePicker_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfDatePickerComponent: OfDatePickerComponent
});

class OfNumberInputComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfNumberInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-number-input',
                template: `
      <form [formGroup]="group">
          <input nz-input *ngIf="field.onlyKeyNumber;else tplNumberInput"
                 numbersOnlyInput [formControlName]="field.dataField"
                 [placeholder]="field.placeholder"
                 maxlength="{{ field.maxlength }}"
          />
          <ng-template #tplNumberInput>
              <nz-input-number [formControlName]="field.dataField"
                               [nzPlaceHolder]="field.placeholder"
                               style="width: 100%"
                               [nzMin]="field.min"
                               [nzMax]="field.max"
                               [nzStep]="field.step">
              </nz-input-number>
          </ng-template>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfNumberInputComponent.ctorParameters = () => [];

var ofNumberInput_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfNumberInputComponent: OfNumberInputComponent
});

class OfTextAreaComponent {
}
OfTextAreaComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-text-area',
                template: `
      <form [formGroup]="group">
          <textarea nz-input
                    [formControlName]="field.dataField"
                    [placeholder]="field.placeholder"
                    [rows]="field.rows"
                    maxlength="{{field.maxLength}}"></textarea>
      </form>
  `
            },] }
];

var ofTextArea_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfTextAreaComponent: OfTextAreaComponent
});

const VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => OfDataPickerControlComponent),
    multi: true
};
class OfDataPickerControlComponent {
    constructor() {
        this.placeHolder = 'Ngày/Tháng/Năm';
        this.mask = [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.$destroy = new Subject();
        this.isWriteValue = false;
        this.mouseEvent$ = new Subject();
        this.nzIcon = 'calendar';
        this.nzIcon$ = new BehaviorSubject('calendar');
        // tslint:disable-next-line:variable-name
        this.isShowIconCalendar = true;
        this.isDisabled = false;
        this.control = new FormControl({ value: null, disabled: true });
        this.inputValue = new FormControl({ value: '', disabled: false });
    }
    get value() {
        return this.control.value;
    }
    set value(v) {
        this.control.setValue(v);
    }
    get disabled() {
        return this.isDisabled;
    }
    set disabled(v) {
        this.isDisabled = v;
        if (v === true) {
            this.inputValue.disable();
        }
        else {
            this.inputValue.enable();
        }
    }
    onChange(v) {
    }
    onTouched() {
    }
    onChangeValue(event) {
        this.onChange(event);
    }
    onFocus(event) {
        this.onTouched();
    }
    mouseLeaveMain() {
        this.mouseEvent$.next('mouseLeave');
    }
    mouseEnterMain() {
        this.mouseEvent$.next('mouseEnter');
    }
    ngAfterViewInit() {
        fromEvent(this.refInput.nativeElement, 'click')
            .pipe(debounceTime(222), takeUntil(this.$destroy)).subscribe(() => {
            this.refDate.picker.showOverlay();
            setTimeout(() => {
                this.refInput.nativeElement.focus();
            });
        });
        this.refDate.nzOnOpenChange
            .pipe(takeUntil(this.$destroy))
            .subscribe(o => {
            if (!o) {
                setTimeout(() => {
                    this.refInput.nativeElement.focus();
                });
            }
        });
        this.mouseEvent$.pipe(takeUntil(this.$destroy))
            .pipe(debounceTime(222))
            .pipe(map(d => {
            if (d === 'mouseLeave') {
                return 'calendar';
            }
            if (this.disabled) {
                return 'calendar';
            }
            if (AppUtilityService.isNullOrEmpty(this.control.value)) {
                return 'calendar';
            }
            return 'close-circle';
        })).pipe(tap((icon) => {
            this.nzIcon$.next(icon);
            this.nzIcon = icon;
        })).subscribe();
        this.nzIcon$.next('calendar');
    }
    ngOnDestroy() {
        this.$destroy.next(true);
        this.$destroy.unsubscribe();
    }
    ngOnInit() {
        this.control.valueChanges.pipe(takeUntil(this.$destroy), distinctUntilChanged()).subscribe((result) => {
            if (this.isWriteValue) {
                if (result) {
                    const valueText = moment(result).format('DD/MM/YYYY');
                    this.inputValue.setValue(valueText);
                }
                this.onChangeValue(result);
            }
        });
        this.inputValue.valueChanges.pipe(takeUntil(this.$destroy), distinctUntilChanged(), debounceTime(100)).subscribe(result => {
            try {
                const arrStr = result.split('/');
                if (!isNaN(arrStr[0]) && !isNaN(arrStr[1]) && !isNaN(arrStr[2])) {
                    const date = moment(result, 'DD/MM/YYYY');
                    if (date.isValid()) {
                        if (typeof this.disabledDate === 'function') {
                            if (this.disabledDate(date.toDate())) {
                                this.inputValue.setValue(null);
                            }
                            else {
                                this.control.setValue(date.toDate());
                                this.refDate.picker.hideOverlay();
                            }
                        }
                        else {
                            this.control.setValue(date.toDate());
                            this.refDate.picker.hideOverlay();
                        }
                    }
                    else {
                        this.control.setValue(null);
                    }
                }
                else {
                    this.control.setValue(null);
                }
            }
            catch (e) {
                this.control.setValue(null);
            }
        });
    }
    //#region base ControlValueAccessor
    writeValue(obj) {
        if (obj) {
            const valueText = moment(obj).format('DD/MM/YYYY');
            this.inputValue.setValue(valueText);
            this.value = moment(obj).toDate();
        }
        else {
            this.inputValue.setValue('');
            this.value = null;
        }
        this.isWriteValue = true;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    //#endregion
    onFocusOutInputMask() {
        if (AppUtilityService.isNullOrEmpty(this.control.value)) {
            this.inputValue.setValue(null);
        }
    }
    onClickIcon() {
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
    }
}
OfDataPickerControlComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-date-picker-ctrl',
                template: `
      <div class="main-ora-date" (mouseenter)="mouseEnterMain()" (mouseleave)="mouseLeaveMain()">
          <nz-date-picker class="ora-date" #refDate style="width:100%" [nzPlaceHolder]="placeHolder"
                          [nzDisabled]="disabled"
                          [nzDisabledDate]="disabledDate"
                          tabindex="-1"
                          [formControl]="control"
                          nzFormat="dd/MM/yyyy"></nz-date-picker>
          <input #refInput class="ora-input-date" nz-input (focusout)="onFocusOutInputMask()"
                 [placeholder]="placeHolder"
                 [formControl]="inputValue"
                 [textMask]="{mask: mask}"/>
          <i class="ora-calendar" (click)="onClickIcon()" nz-icon
             [nzType]="nzIcon$ | async"
             nzTheme="outline"></i>
      </div>
  `,
                encapsulation: ViewEncapsulation.None,
                providers: [VALUE_ACCESSOR],
                styles: [`.main-ora-date {
      position: relative;
  }

  .ora-date {
      border: 0;
  }

  .ora-input-date {
      position: absolute;
      top: 0;
      left: 0
  }

  .ora-close {
      position: absolute;
      top: 7px;
      right: 5px;
  }

  .ora-calendar {
      position: absolute;
      top: 7px;
      right: 5px;
  }`]
            },] }
];
OfDataPickerControlComponent.ctorParameters = () => [];
OfDataPickerControlComponent.propDecorators = {
    refDate: [{ type: ViewChild, args: ['refDate',] }],
    refInput: [{ type: ViewChild, args: ['refInput',] }],
    disabledDate: [{ type: Input }],
    placeHolder: [{ type: Input }],
    disabled: [{ type: Input }],
    control: [{ type: Input }]
};

class OfContentHtmlComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfContentHtmlComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-content-html',
                template: `
      <div [innerHTML]="field.content"></div>`,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfContentHtmlComponent.ctorParameters = () => [];

var ofContentHtml_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfContentHtmlComponent: OfContentHtmlComponent
});

class NumbersOnlyDirective {
    // tslint:disable-next-line:variable-name
    constructor(_el) {
        this._el = _el;
    }
    onInputChange(event) {
        const initalValue = this._el.nativeElement.value;
        this._el.nativeElement.value = initalValue.replace(/[^0-9]*/g, '');
        if (initalValue !== this._el.nativeElement.value) {
            event.stopPropagation();
        }
    }
}
NumbersOnlyDirective.decorators = [
    { type: Directive, args: [{
                selector: 'input[numbersOnlyInput]'
            },] }
];
NumbersOnlyDirective.ctorParameters = () => [
    { type: ElementRef }
];
NumbersOnlyDirective.propDecorators = {
    onInputChange: [{ type: HostListener, args: ['input', ['$event'],] }]
};

class OfPasswordComponent {
    constructor() {
        this.passwordVisible = false;
    }
    ngOnInit() {
        this.field.placeholder = this.field.placeholder || 'Nhập mật khẩu';
    }
}
OfPasswordComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-password',
                template: `
      <form [formGroup]="group">
          <nz-input-group nzPrefixIcon="lock" [nzSuffix]="suffixTemplate">
              <input [type]="passwordVisible ? 'text' : 'password'" nz-input placeholder="{{field.placeholder}}"
                     [formControlName]="field.dataField"/>
          </nz-input-group>
          <ng-template #suffixTemplate>
              <i nz-icon [nzType]="passwordVisible ? 'eye-invisible' : 'eye'"
                 (click)="passwordVisible = !passwordVisible"></i>
          </ng-template>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfPasswordComponent.ctorParameters = () => [];

var ofPassword_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfPasswordComponent: OfPasswordComponent
});

class OfRadioComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfRadioComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-radio',
                template: `
      <form [formGroup]="group">
          <nz-radio-group [formControlName]="field.dataField"
                          [nzDisabled]="field.disabled"
                          style="width: 100%">
              <label *ngFor="let op of field.items" nz-radio [nzValue]="op.value">{{ op.label }}</label>
          </nz-radio-group>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfRadioComponent.ctorParameters = () => [];

var ofRadio_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfRadioComponent: OfRadioComponent
});

class OfSwitchComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
OfSwitchComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-switch',
                template: `
      <form [formGroup]="group">
          <nz-switch [formControlName]="field.dataField"
                     [nzCheckedChildren]="field.yesText ? field.yesText : checkedTemplate"
                     [nzUnCheckedChildren]="field.noText ? field.noText : unCheckedTemplate"
                     [nzDisabled]="field.disabled"
          >
              <ng-template #checkedTemplate><i nz-icon nzType="check"></i></ng-template>
              <ng-template #unCheckedTemplate><i nz-icon nzType="close"></i></ng-template>
          </nz-switch>
      </form>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSwitchComponent.ctorParameters = () => [];

var ofSwitch_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfSwitchComponent: OfSwitchComponent
});

class OfSelectSearchServerComponent {
    constructor(destroy$, cdr) {
        this.destroy$ = destroy$;
        this.cdr = cdr;
        this.options = [];
        this.option$ = new BehaviorSubject([]);
        this.backUpItems = [];
        this.optionDebound$ = this.option$.pipe(debounceTime(222)).pipe(tap(() => {
            this.triggerDetectChanges();
        }));
        this.txtSearch = '';
        this.txtSearch$ = new Subject();
        this.skipCount = 0;
        this.totalItems = 0;
        this.nzPageIndex = 1;
        this.firstOptions = [];
        this.firstTotal = 0;
        this.isLoading = false;
        this.maxResultCount = 12;
    }
    ngOnInit() {
        this.handlerSearch();
    }
    handlerSearch() {
        this.txtSearch$.pipe(takeUntil(this.destroy$))
            .pipe(debounceTime(1000))
            .subscribe(txt => {
            this.txtSearch = txt;
            if (AppUtilityService.isNullOrEmpty(txt)) {
                this.loadFirstOption();
            }
            else {
                this.skipCount = 0;
                this.nzPageIndex = 1;
                this.getOptionsFromBE(txt);
            }
        });
    }
    search(txt) {
        this.txtSearch$.next(txt);
    }
    nzOpenChange(open) {
        if (open) {
            this.loadFirstOption();
        }
    }
    trackBySelect(index, item) {
        return item.value;
    }
    loadFirstOption() {
        var _a;
        if (this.firstTotal > 0) {
            this.totalItems = this.firstTotal;
            this.nzPageIndex = 1;
            let opt = this.firstOptions;
            if ((_a = this.field) === null || _a === void 0 ? void 0 : _a.itemSelected) {
                // tslint:disable-next-line:triple-equals
                const f = opt.find(s => s.value == this.field.itemSelected.value);
                if (AppUtilityService.isNullOrEmpty(f)) {
                    opt = [this.field.itemSelected, ...this.firstOptions];
                }
            }
            this.setOptions(opt);
        }
        else {
            this.getOptionsFromBE('', null, true);
        }
    }
    // tslint:disable-next-line:no-shadowed-variable
    getOptionsFromBE(filter, value, isFirst = false) {
        const getOneId = AppUtilityService.isNotNull(value);
        if (getOneId) {
            filter = '';
            // tslint:disable-next-line:triple-equals
            const f = _.find(this.backUpItems, s => s.value == value);
            if (f) {
                this.setOptions([f]);
                return;
            }
        }
        this.isLoading = true;
        let skipCount = this.skipCount;
        const maxResultCount = (!this.field.showPagination && isFirst) ? 50 : this.maxResultCount;
        if (this.field.showPagination) {
            skipCount = (this.nzPageIndex - 1) * this.maxResultCount;
        }
        const reqBody = {
            filter,
            value,
            maxResultCount,
            skipCount
        };
        this.field.functionService(reqBody)
            .pipe(finalize(() => {
            this.isLoading = false;
        }))
            .subscribe(d => {
            let options = (d === null || d === void 0 ? void 0 : d.items) || [];
            this.backUpItems = [...this.backUpItems, ...options];
            if (isFirst) {
                this.firstOptions = options;
                this.firstTotal = d.totalCount;
            }
            if (getOneId) {
                this.field.itemSelected = (d === null || d === void 0 ? void 0 : d.items[0]) || null;
            }
            if (AppUtilityService.isNullOrEmpty(value)) {
                this.totalItems = (d === null || d === void 0 ? void 0 : d.totalCount) || 0;
            }
            if (skipCount > 0 && !this.field.showPagination) {
                options = [...this.options, ...options];
            }
            this.setOptions(options);
            this.skipCount = reqBody.skipCount + reqBody.maxResultCount;
        });
    }
    setOptions(options) {
        this.options = options;
        this.option$.next(options);
        this.triggerDetectChanges();
    }
    getItemSelected() {
        const value$ = this.group.get(this.field.dataField).valueChanges.pipe(takeUntil(this.destroy$))
            .pipe(tap((v) => {
            if (AppUtilityService.isNullOrEmpty(v)) {
                this.field.itemSelected = null;
            }
            this.triggerDetectChanges();
        })).pipe(filter(s => !AppUtilityService.isNullOrEmpty(s)));
        value$.subscribe(value => {
            var _a;
            // tslint:disable-next-line:triple-equals
            const f = (_a = this.backUpItems) === null || _a === void 0 ? void 0 : _a.find(s => s.value == value);
            if (AppUtilityService.isNotNull(f)) {
                this.field.itemSelected = f;
                this.setOptions([f]);
                return;
            }
            else {
                this.getOptionsFromBE(null, value);
            }
            this.triggerDetectChanges();
        });
    }
    get f() {
        return this.group.get(this.field.dataField);
    }
    ngAfterViewInit() {
        this.getItemSelected();
        this.triggerDetectChanges();
        this.schemaModel.subRender(this.cdr, this.destroy$);
    }
    triggerDetectChanges() {
        setTimeout(() => {
            this.cdr.detectChanges();
        }, 200);
    }
    loadMore() {
        if (this.field.showPagination) {
            return;
        }
        this.isLoading = true;
        if (this.skipCount > this.totalItems) {
            this.isLoading = false;
            return;
        }
        this.getOptionsFromBE(this.txtSearch, null);
    }
    nzPageIndexChange() {
        this.getOptionsFromBE(this.txtSearch);
    }
}
OfSelectSearchServerComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-select-search-server',
                template: "<form [formGroup]=\"group\">\r\n  <nz-select [formControlName]=\"field.dataField\" style=\" width: 100%;\"\r\n             (nzOpenChange)=\"nzOpenChange($event)\"\r\n             (nzScrollToBottom)=\"loadMore()\"\r\n             [nzCustomTemplate]=\"tplSelectedView\"\r\n             [nzOptionHeightPx]=\"26\"\r\n             [nzPlaceHolder]=\"field.placeholder\"\r\n             [nzMode]=\"field.nzMode\" [nzAllowClear]=\"field.nzAllowClear\"\r\n             nzShowSearch nzServerSearch (nzOnSearch)=\"search($event)\"\r\n             [nzMaxMultipleCount]=\"field?.nzMaxMultipleCount\" [nzMaxTagCount]=\"field?.nzMaxTagCount\"\r\n             [nzDropdownRender]=\"renderTemplate\">\r\n    <nz-option [nzCustomContent]=\"true\" *ngFor=\"let option of optionDebound$ | async;trackBy:trackBySelect\"\r\n               [nzLabel]=\"option.displayText\"\r\n               [nzValue]=\"option.value\"\r\n    >\r\n      <span [innerHTML]=\"option.displayText | ofSelectRenderOption: field: option\">\r\n      </span>\r\n    </nz-option>\r\n  </nz-select>\r\n</form>\r\n<ng-template #tplSelectedView let-selected>\r\n  <span [innerHTML]=\"selected.nzValue | ofOptionSelected:selected.nzLabel:field\"></span>\r\n</ng-template>\r\n<ng-template #renderTemplate>\r\n\r\n  <div class=\"select-pagination\" *ngIf=\"field.showPagination\">\r\n    <nz-pagination nzSize=\"small\" [nzPageSize]=\"maxResultCount\" [(nzPageIndex)]=\"nzPageIndex\"\r\n                   (nzPageIndexChange)=\"nzPageIndexChange()\"\r\n                   [nzTotal]=\"totalItems\"></nz-pagination>\r\n  </div>\r\n  <nz-spin *ngIf=\"isLoading\"></nz-spin>\r\n</ng-template>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [DestroyRxjsService],
                encapsulation: ViewEncapsulation.None,
                styles: [":host ::ng-deep .cdk-virtual-scroll-viewport{min-height:120px!important}.select-pagination{margin-top:8px;margin-bottom:3px}"]
            },] }
];
OfSelectSearchServerComponent.ctorParameters = () => [
    { type: DestroyRxjsService },
    { type: ChangeDetectorRef }
];
OfSelectSearchServerComponent.propDecorators = {
    schemaModel: [{ type: Input }],
    field: [{ type: Input }],
    group: [{ type: Input }]
};

var ofSelectSearchServer_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfSelectSearchServerComponent: OfSelectSearchServerComponent
});

class OfTemplateRefComponent {
    constructor(formService) {
        this.formService = formService;
        this.ofFieldTempates = [];
        this.id = Number(new Date());
    }
    ngOnInit() {
        var _a;
        this.formService.createExtendControl(this.group, this.field.controls);
        this.templateRef = (_a = this.ofFieldTempates.find(x => x.id === this.field.dataField)) === null || _a === void 0 ? void 0 : _a.controlTemplate;
    }
}
OfTemplateRefComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-template-ref',
                template: `
      <ng-container [ngTemplateOutlet]="templateRef"
                    [ngTemplateOutletContext]="{ $implicit: { value: id }, group: group,field: field }"></ng-container>
      <span *ngIf="!templateRef" class="text-danger">Chưa có template</span>
  `
            },] }
];
OfTemplateRefComponent.ctorParameters = () => [
    { type: OfCreateControlFormService }
];

var ofTemplateRef_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfTemplateRefComponent: OfTemplateRefComponent
});

class ShowValidationErrorPipe {
    transform(errors, validations, submitted) {
        if (!submitted) {
            return '';
        }
        let err = '';
        if (errors && (validations === null || validations === void 0 ? void 0 : validations.length) > 0) {
            _.forEach(validations, valid => {
                if (errors[valid.name]) {
                    err = valid.message;
                    return false;
                }
            });
        }
        return err;
    }
}
ShowValidationErrorPipe.decorators = [
    { type: Pipe, args: [{
                name: 'showValidationError'
            },] }
];

class OfOptionSelectedPipe {
    transform(value, label, field) {
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
    }
}
OfOptionSelectedPipe.decorators = [
    { type: Pipe, args: [{
                name: 'ofOptionSelected',
                pure: false
            },] }
];

class OfSelectRenderOptionPipe {
    transform(displayText, field, option) {
        return typeof (field.renderOptionFunc) === 'function' ? field === null || field === void 0 ? void 0 : field.renderOptionFunc(option) : displayText;
    }
}
OfSelectRenderOptionPipe.decorators = [
    { type: Pipe, args: [{
                name: 'ofSelectRenderOption'
            },] }
];

class OfSelectComponent {
    constructor(cdr, destroy$) {
        this.cdr = cdr;
        this.destroy$ = destroy$;
        this.options = [];
    }
    ngOnInit() {
        this.setOptionsView(this.field.options);
    }
    trackBySelect(index, item) {
        return item.value;
    }
    search(value) {
        if (AppUtilityService.isWhitespace(value)) {
            this.setOptionsView(this.field.options);
            return;
        }
        const searchTxt = AppUtilityService.getFullTextSearch(value);
        const options = _.filter(this.field.options, (s) => {
            const ftsVietTat = AppUtilityService.searchVietTat(s.displayText);
            const checkVietTat = ftsVietTat.indexOf(searchTxt) > -1;
            if (AppUtilityService.isNullOrEmpty(s.fts)) {
                s.fts = AppUtilityService.getFullTextSearch(s.displayText);
            }
            return s.fts.indexOf(searchTxt) > -1 || checkVietTat;
        });
        this.setOptionsView(options);
    }
    setOptionsView(options) {
        _.forEach(options, opt => {
            opt.fts = AppUtilityService.getFullTextSearch(opt.displayText);
        });
        this.options = options;
        this.getItemSelected();
        this.cdr.detectChanges();
    }
    selectAll() {
        const values = _.map(this.field.options, opt => {
            return opt.value;
        });
        this.group.get(this.field.dataField).patchValue(values);
        this.cdr.detectChanges();
    }
    unSelectAll() {
        this.group.get(this.field.dataField).patchValue(null);
        this.cdr.detectChanges();
    }
    handlerValueDataFieldChange() {
        var _a;
        const f = this.group.get(this.field.dataField);
        if (f) {
            (_a = this.group.get(this.field.dataField)) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(debounceTime(111)).pipe(takeUntil(this.destroy$)).subscribe(v => {
                if (typeof v === 'number') {
                    f.patchValue('' + v);
                }
                this.getItemSelected();
            });
        }
    }
    getItemSelected() {
        const v = this.group.get(this.field.dataField).value;
        if (AppUtilityService.isNullOrEmpty(v)) {
            this.field.itemSelected = null;
            this.cdr.detectChanges();
            return;
        }
        // tslint:disable-next-line:triple-equals
        this.field.itemSelected = _.find(this.options, x => x.value == v);
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.schemaModel.subRender(this.cdr, this.destroy$);
        this.handlerValueDataFieldChange();
    }
}
OfSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-select',
                template: "<form [formGroup]=\"group\">\n  <nz-select [formControlName]=\"field.dataField\" style=\"width: 100%\"\n             [nzCustomTemplate]=\"tplSelectedView\"\n             [nzPlaceHolder]=\"field.placeholder\"\n             [nzMode]=\"field.nzMode\" [nzAllowClear]=\"field.nzAllowClear\"\n             nzShowSearch nzServerSearch (nzOnSearch)=\"search($event)\"\n             [nzMaxMultipleCount]=\"field?.nzMaxMultipleCount\" [nzMaxTagCount]=\"field?.nzMaxTagCount\"\n             [nzDropdownRender]=\"nzDropdownRenderTpl\">\n    <nz-option [nzCustomContent]=\"true\" *ngFor=\"let option of options;trackBy:trackBySelect\"\n               [nzLabel]=\"option.displayText\"\n               [nzValue]=\"option.value\"\n    >\n      <span [innerHTML]=\"option.displayText | ofSelectRenderOption: field: option\">\n      </span>\n    </nz-option>\n  </nz-select>\n</form>\n<ng-template #tplSelectedView let-selected>\n  <span [innerHTML]=\"selected.nzValue | ofOptionSelected:selected.nzLabel:field\"></span>\n</ng-template>\n\n<ng-template #nzDropdownRenderTpl>\n  <div *ngIf=\"field.nzMode === 'multiple' && field.options?.length > 3\">\n    <nz-divider></nz-divider>\n    <div class=\"margin-top-10 margin-left-10 margin-bottom-5\">\n      <button nz-button nzType=\"primary\" (click)=\"selectAll()\" nzSize=\"small\"><i nz-icon nzType=\"plus\"></i> Ch\u1ECDn t\u1EA5t c\u1EA3\n      </button>\n      <button nz-button nzType=\"default\" (click)=\"unSelectAll()\" nzSize=\"small\"><i nz-icon nzType=\"minus\"></i> B\u1ECF ch\u1ECDn\n      </button>\n    </div>\n  </div>\n</ng-template>\n",
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSelectComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: DestroyRxjsService }
];
OfSelectComponent.propDecorators = {
    schemaModel: [{ type: Input }],
    field: [{ type: Input }],
    group: [{ type: Input }]
};

var ofSelect_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfSelectComponent: OfSelectComponent
});

class OfSelectAsyncComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.field.optionsAsync.pipe(takeUntil(this.destroy$)).subscribe(opt => {
                this.field.options = opt;
                if (this.vcSelect) {
                    this.vcSelect.setOptionsView(opt);
                }
            });
        });
    }
}
OfSelectAsyncComponent.decorators = [
    { type: Component, args: [{
                selector: 'select-async',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSelectAsyncComponent.ctorParameters = () => [
    { type: DestroyRxjsService }
];
OfSelectAsyncComponent.propDecorators = {
    vcSelect: [{ type: ViewChild, args: ['vcSelect',] }]
};

var ofSelectAsync_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfSelectAsyncComponent: OfSelectAsyncComponent
});

class OfSelectApiComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
    }
    get hasCacheOption() {
        return !AppUtilityService.isNullOrEmpty(this.field.keyCache);
    }
    get key() {
        return 'selectOpt_' + this.field.keyCache;
    }
    getOptionsFromApi() {
        if (this.hasCacheOption) {
            const cache = sessionStorage.getItem(this.key);
            if (cache) {
                return of(JSON.parse(cache));
            }
        }
        return this.field.functionService;
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.getOptionsFromApi().pipe(takeUntil(this.destroy$))
                .subscribe(opt => {
                if (this.hasCacheOption && !AppUtilityService.isNotAnyItem(opt)) {
                    sessionStorage.setItem(this.key, JSON.stringify(opt));
                }
                this.field.options = opt;
                if (this.vcSelect) {
                    this.vcSelect.setOptionsView(opt);
                }
            });
        });
    }
}
OfSelectApiComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-of-select-api',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSelectApiComponent.ctorParameters = () => [
    { type: DestroyRxjsService }
];
OfSelectApiComponent.propDecorators = {
    vcSelect: [{ type: ViewChild, args: ['vcSelect',] }]
};

var ofSelectApi_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfSelectApiComponent: OfSelectApiComponent
});

class OfSelectCascadeComponent {
    constructor(destroy$) {
        this.destroy$ = destroy$;
    }
    getOptionsFromApi(cascade) {
        if (this.hasCacheOption) {
            const cache = sessionStorage.getItem(this.key(cascade));
            if (cache) {
                return of(JSON.parse(cache));
            }
        }
        return this.field.functionService(cascade);
    }
    get ctrl() {
        return this.group.get(this.field.dataField);
    }
    get hasCacheOption() {
        return !AppUtilityService.isNullOrEmpty(this.field.keyCache);
    }
    key(cascade) {
        return 'selectOpt_' + this.field.keyCache + cascade;
    }
    disableIfCascadeEmpty(cascade) {
        const ctrl = this.group.get(this.field.dataField);
        if (AppUtilityService.isNullOrEmpty(cascade)) {
            ctrl.disable({ onlySelf: true });
        }
        else {
            if (!this.field.disabled) {
                ctrl.enable({ onlySelf: true });
            }
        }
    }
    setOptionsForView(options) {
        if (this.vcSelect) {
            this.vcSelect.setOptionsView(options);
        }
        this.field.options = options;
    }
    checkCurrentValue(options) {
        if (AppUtilityService.isNotNull(this.ctrl.value)) {
            // tslint:disable-next-line:triple-equals
            const f = options.find(x => x.value == this.ctrl.value);
            if (AppUtilityService.isNullOrEmpty(f)) {
                this.ctrl.patchValue(null);
            }
        }
    }
    handlerCascadeChange() {
        var _a;
        const cascadeField = this.group.get((_a = this.field) === null || _a === void 0 ? void 0 : _a.cascadeField);
        if (cascadeField) {
            cascadeField.valueChanges
                .pipe(debounceTime(111), takeUntil(this.destroy$), distinctUntilChanged())
                .subscribe(cascade => {
                this.disableIfCascadeEmpty(cascade);
                const ctrl = this.group.get(this.field.dataField);
                if (AppUtilityService.isNullOrEmpty(cascade)) {
                    ctrl.patchValue(null);
                    this.setOptionsForView([]);
                }
                else {
                    this.getOptionsFromApi(cascade).pipe(takeUntil(this.destroy$))
                        .subscribe(opt => {
                        if (AppUtilityService.isNotAnyItem(opt)) {
                            ctrl.patchValue(null);
                            this.setOptionsForView([]);
                        }
                        else {
                            if (this.hasCacheOption) {
                                sessionStorage.setItem(this.key(cascade), JSON.stringify(opt));
                            }
                            this.setOptionsForView(opt);
                            this.checkCurrentValue(opt);
                        }
                    });
                }
            });
        }
    }
    ngAfterViewInit() {
        setTimeout(() => {
            this.ctrl.disable({ onlySelf: true });
            this.handlerCascadeChange();
        }, 300);
    }
}
OfSelectCascadeComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-select-cascade',
                template: `
      <of-select #vcSelect [schemaModel]="schemaModel" [group]="group" [field]="field"></of-select>`,
                providers: [DestroyRxjsService],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
OfSelectCascadeComponent.ctorParameters = () => [
    { type: DestroyRxjsService }
];
OfSelectCascadeComponent.propDecorators = {
    vcSelect: [{ type: ViewChild, args: ['vcSelect',] }]
};

var ofSelectCascade_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfSelectCascadeComponent: OfSelectCascadeComponent
});

class OfValidErrorComponent {
    constructor() {
        this.submitted = false;
        this.validations = [];
        this.controlName = '';
    }
    get f() {
        return this.form.controls[this.controlName];
    }
}
OfValidErrorComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-valid-error',
                template: `
      <span class="form-control-err text-danger" *ngIf="validations && submitted">
              {{f?.errors | showValidationError : validations : submitted}}
        </span>
  `
            },] }
];
OfValidErrorComponent.propDecorators = {
    submitted: [{ type: Input }],
    validations: [{ type: Input }],
    form: [{ type: Input }],
    controlName: [{ type: Input }]
};

class OfSelectAdvancedSearchComponent {
    constructor(drawerService, modalService) {
        this.drawerService = drawerService;
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    onClickAdvancedBtn() {
        if (this.field.showComponentType === 'drawer') {
            this.openDrawer();
            return;
        }
        if (this.field.showComponentType === 'modal') {
            this.openModal();
            return;
        }
    }
    openDrawer() {
        const drawerRef = this.drawerService.create(Object.assign({ nzTitle: 'Tìm kiếm nâng cao', nzContent: this.field.componentAdvanced, nzPlacement: 'bottom', nzMaskClosable: false, nzHeight: '68vh' }, this.field.nzDrawerOptions));
        drawerRef.afterClose.subscribe(data => {
            this.group.get(this.field.dataField).patchValue(data);
        });
    }
    openModal() {
        const modalRef = this.modalService.create(Object.assign({ nzTitle: 'Tìm kiếm nâng cao', nzContent: this.field.componentAdvanced, nzMaskClosable: false }, this.field.nzModalConfig));
        modalRef.afterClose.subscribe(data => {
            this.group.get(this.field.dataField).patchValue(data);
        });
    }
}
OfSelectAdvancedSearchComponent.decorators = [
    { type: Component, args: [{
                selector: 'of-select-advanced-search',
                template: "<div nz-row>\n  <div nz-col nzFlex=\"1 1 100px\">\n    <of-select-search-server [schemaModel]=\"schemaModel\" [group]=\"group\" [field]=\"field\"></of-select-search-server>\n  </div>\n  <div nz-col nzFlex=\"0 1 32px\">\n    <button nz-button (click)=\"onClickAdvancedBtn()\"\n            style=\"margin-left: -2px;\"\n            [disabled]=\"field.disabled\"\n            nzType=\"primary\" nzSearch>\n      <i nz-icon nzType=\"search\"></i></button>\n  </div>\n</div>\n"
            },] }
];
OfSelectAdvancedSearchComponent.ctorParameters = () => [
    { type: NzDrawerService },
    { type: NzModalService }
];

var ofSelectAdvancedSearch_component = /*#__PURE__*/Object.freeze({
    __proto__: null,
    OfSelectAdvancedSearchComponent: OfSelectAdvancedSearchComponent
});

const Of = [
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
const entryComponents = [
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
class OfModule {
}
OfModule.decorators = [
    { type: NgModule, args: [{
                declarations: [Of, OfValidErrorComponent, OfSelectAdvancedSearchComponent],
                imports: [
                    CommonModule,
                    ReactiveFormsModule,
                    FormsModule,
                    AntDesignModule,
                    CurrencyMaskModule,
                    TextMaskModule
                ],
                exports: [
                    OfDynamicComponent,
                    OfFieldComponent,
                    ReactiveFormsModule,
                    FormsModule,
                    CommonModule,
                    OfValidErrorComponent
                ]
            },] }
];

class OfControlModel {
    constructor(config) {
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
        this.css = `ord-dynamic-input gutter-row ord-form-control field-${this.dataField} ${config.css || ''} `;
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
}

// cấu hình control trong template
class OfExtendControlModel {
    constructor(config) {
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
}

class OfSchemaModel {
    constructor(config) {
        this.layout = 'vertical';
        this.focusFisrtInit = true;
        this.errorNotValid = 'Vui lòng điền đầy đủ thông tin!';
        this.backUpDisables = {};
        this.render$ = new Subject();
        this.isSearchBox = false;
        this.searchBtnBusy = false;
        this.searchEvent$ = new Subject();
        this.rebuilder$ = new Subject();
        this.submitted = false;
        this.fields = config.fields;
        this.id = Number(new Date());
        this.focusFisrtInit = (config === null || config === void 0 ? void 0 : config.focusFisrtInit) || true;
        this.errorNotValid = (config === null || config === void 0 ? void 0 : config.errorNotValid) || 'Vui lòng điền đầy đủ thông tin!';
        this.isSearchBox = (config === null || config === void 0 ? void 0 : config.isSearchBox) || false;
    }
    get value() {
        var _a;
        return ((_a = this.form) === null || _a === void 0 ? void 0 : _a.getRawValue()) || null;
    }
    get valueValid() {
        var _a;
        if ((_a = this.form) === null || _a === void 0 ? void 0 : _a.valid) {
            return this.value;
        }
        return null;
    }
    getField(name) {
        var _a;
        return ((_a = this.fields) === null || _a === void 0 ? void 0 : _a.find(x => x.dataField === name)) || null;
    }
    getFormControl(name) {
        return this.form.get(name);
    }
    disableField(name, f = true) {
        setTimeout(() => {
            const ctr = this.getFormControl(name);
            if (ctr) {
                if (f) {
                    ctr.disable({ onlySelf: true });
                }
                else {
                    ctr.enable({ onlySelf: true });
                }
            }
            // tslint:disable-next-line:no-shadowed-variable
            const field = this.fields.find((f) => f.dataField === name);
            if (field) {
                field.disabled = f;
            }
        });
    }
    disableAll(f = true) {
        if (f) {
            this.backUpDisables = {};
            _.forEach(this.fields, field => {
                if (field.disabled) {
                    this.backUpDisables[field.dataField] = true;
                }
                field.disabled = true;
                const ctr = this.getFormControl(field.dataField);
                if (ctr) {
                    ctr.disable({ onlySelf: true });
                }
            });
            this.triggerRender();
            return;
        }
        _.forEach(this.fields, field => {
            const ctr = this.getFormControl(field.dataField);
            if (ctr) {
                const backUp = this.backUpDisables[field.dataField];
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
    }
    hiddenFields(fields) {
        _.forEach(fields, field => {
            this.getField(field).hidden = true;
        });
    }
    showFields(fields) {
        _.forEach(fields, field => {
            this.getField(field).hidden = false;
        });
    }
    setHidden(fields, hiddens) {
        _.forEach(fields, (field, idx) => {
            this.getField(field).hidden = hiddens[idx];
        });
    }
    setShow(fields, shows) {
        _.forEach(fields, (field, idx) => {
            this.getField(field).hidden = !shows[idx];
        });
    }
    fieldValueChanges(name, time = 100) {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.get(name).valueChanges.pipe(debounceTime(time));
    }
    valueChanges(time = 100) {
        var _a;
        return (_a = this.form) === null || _a === void 0 ? void 0 : _a.valueChanges.pipe(debounceTime(time));
    }
    patchValue(value) {
        Object.keys(value).forEach(name => {
            const f = this.form.get(name);
            if (f) {
                f.patchValue(value[name]);
            }
        });
        this.triggerRender();
    }
    triggerRender() {
        setTimeout(() => {
            this.render$.next(Number(new Date()));
        }, 500);
    }
    subRender(cdr, destroy$) {
        this.render$.pipe(filter(s => s > 0)).pipe(debounceTime(111))
            .pipe(takeUntil(destroy$))
            .subscribe(d => {
            cdr.detectChanges();
        });
    }
    addControls(controls, indexBegin = null) {
        if (indexBegin === null) {
            this.fields = _.concat(this.fields, controls);
        }
        else {
            this.fields = _.flatMap(this.fields, (value, index) => {
                if (index === indexBegin) {
                    return [...controls, value];
                }
                return value;
            });
        }
        this.rebuilder();
    }
    rebuilder() {
        setTimeout(() => {
            this.rebuilder$.next(Number(new Date()));
        });
    }
    search() {
        if (this.searchEvent$) {
            this.searchEvent$.next(this.value);
        }
    }
}

class OfCheckBoxModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.checkBoxLabel = '';
        this.type = 'checkBox';
        this.checkBoxLabel = config.checkBoxLabel;
        this.value = this.value || false;
    }
}

class OfComponentRefModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'componentRef';
        this.componentRef = config.componentRef;
    }
}

class OfContentHtmlModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'contentHtml';
        this.content = config.content || '';
        if (config.isBlank) {
            this.content = '';
        }
    }
}

class OfCurrencyModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'currencyInput';
        this.prefix = config.prefix || ' ';
        this.suffix = config.suffix || ' VNĐ';
        this.precision = config.precision || 0;
    }
}

class OfDateModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'datePicker';
        this.minDateAsync = config.minDateAsync || null;
        this.maxDateAsync = config.maxDateAsync || null;
        this.dateNotGreaterThanCurrent = config.notGreaterThanCurrent || false;
        this.minDate = config.minDate;
        this.maxDate = config.maxDate;
        this.tuNgayDataField = config.tuNgayDataField;
        this.denNgayDataField = config.denNgayDataField;
    }
}

class OfNumberModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.step = 1;
        this.onlyKeyNumber = false;
        this.type = 'numberInput';
        this.min = config.min || null;
        this.max = config.max || null;
        this.step = config.step || 1;
        this.onlyKeyNumber = config.onlyKeyNumber || false;
        this.maxlength = config.maxlength || null;
    }
}

class OfPwdModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'passWordInput';
        this.placeholder = this.placeholder || 'Nhập mật khẩu';
    }
}

class OfRadioModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'radio';
        this.items = config.items;
    }
}

class OfSelectBaseModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.nzAllowClear = true;
        this.nzMode = 'default';
        this.options = [];
        this.itemSelected = null;
        this.nzMode = (config === null || config === void 0 ? void 0 : config.nzMode) || 'default';
        if (AppUtilityService.isNotNull(config.nzAllowClear)) {
            this.nzAllowClear = config.nzAllowClear;
        }
        if (this.nzMode === 'multiple') {
            this.nzMaxMultipleCount = (config === null || config === void 0 ? void 0 : config.nzMaxMultipleCount) || Number.MAX_VALUE;
        }
        this.nzMaxTagCount = (config === null || config === void 0 ? void 0 : config.nzMaxTagCount) || 3;
        this.placeholder = this.placeholder || '-Chọn-';
        this.renderOptionFunc = config.renderOptionFunc || null;
        this.renderSelectedFunc = config.renderSelectedFunc || null;
        if (this.value) {
            this.value = '' + this.value;
        }
    }
}

class OfSelectModel extends OfSelectBaseModel {
    constructor(config) {
        super(config);
        this.type = 'select';
        this.options = config.options;
    }
}

class OfSelectApiModel extends OfSelectBaseModel {
    constructor(config) {
        super(config);
        this.type = 'selectApi';
        this.keyCache = config.keyCache;
        this.functionService = config.functionService;
    }
}

class OfSelectAsyncModel extends OfSelectBaseModel {
    constructor(config) {
        super(config);
        this.keyCache = '';
        this.type = 'selectAsync';
        this.optionsAsync = config.optionsAsync;
        this.keyCache = config.keyCache;
    }
}

class OfSelectCascadeModel extends OfSelectBaseModel {
    constructor(config) {
        super(config);
        this.keyCache = '';
        this.cascadeField = '';
        this.type = 'selectApiCascade';
        this.functionService = config.functionService;
        this.keyCache = config.keyCache;
        this.cascadeField = config.cascadeField;
    }
}

class OfSelectSearchServerModel extends OfSelectBaseModel {
    constructor(config) {
        super(config);
        this.showPagination = false;
        this.type = 'selectSearchServer';
        this.showPagination = config.showPagination || false;
        this.functionService = config.functionService;
    }
}

class OfSelectAdvancedSearchModel extends OfSelectBaseModel {
    constructor(config) {
        super(config);
        this.showPagination = false;
        this.showComponentType = 'drawer';
        this.type = 'selectAdvancedSearch';
        this.showPagination = config.showPagination || false;
        this.functionService = config.functionService;
        this.componentAdvanced = config.componentAdvanced;
        this.showComponentType = (config === null || config === void 0 ? void 0 : config.showComponentType) || 'drawer';
        this.nzDrawerOptions = (config === null || config === void 0 ? void 0 : config.nzDrawerOptions) || null;
        this.nzModalConfig = (config === null || config === void 0 ? void 0 : config.nzModalConfig) || null;
    }
}

class OfSwitchModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'switch';
        this.yesText = config.yesText || null;
        this.noText = config.noText || null;
    }
}

class OfTemplateRefModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'templateRef';
        this.controls = config.controls;
    }
}

class OfTextModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.type = 'text';
        this.maxLength = (config === null || config === void 0 ? void 0 : config.maxLength) || null;
        this.minLength = (config === null || config === void 0 ? void 0 : config.minLength) || null;
    }
}

class OfTextAreaModel extends OfControlModel {
    constructor(config) {
        super(config);
        this.maxLength = 2000;
        this.rows = 1;
        this.type = 'textArea';
        if ((config === null || config === void 0 ? void 0 : config.maxLength) > 0) {
            this.maxLength = config === null || config === void 0 ? void 0 : config.maxLength;
        }
        this.rows = config.rows || 1;
    }
}

/*
 * Public API Surface of of
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DestroyRxjsService, OfCheckBoxModel, OfComponentRefModel, OfContentHtmlModel, OfControlModel, OfCurrencyModel, OfDateModel, OfDynamicComponent, OfExtendControlModel, OfFieldComponent, OfModule, OfNumberModel, OfPwdModel, OfRadioModel, OfSchemaModel, OfSelectAdvancedSearchModel, OfSelectApiModel, OfSelectAsyncModel, OfSelectCascadeModel, OfSelectModel, OfSelectSearchServerModel, OfSwitchModel, OfTemplateRefModel, OfTextAreaModel, OfTextModel, OfValidErrorComponent, OfCreateControlFormService as ɵa, OfValidatorService as ɵb, AntIconService as ɵba, OfControlModel as ɵbb, OfSelectBaseModel as ɵbd, DynamicFieldDirective as ɵc, OfTextComponent as ɵd, ShowValidationErrorPipe as ɵe, OfCheckBoxComponent as ɵf, OfCurrencyComponent as ɵg, OfDatePickerComponent as ɵh, OfDataPickerControlComponent as ɵi, OfTextAreaComponent as ɵj, OfContentHtmlComponent as ɵk, OfNumberInputComponent as ɵl, NumbersOnlyDirective as ɵm, OfPasswordComponent as ɵn, OfRadioComponent as ɵo, OfSwitchComponent as ɵp, OfOptionSelectedPipe as ɵq, OfSelectRenderOptionPipe as ɵr, OfSelectSearchServerComponent as ɵs, OfTemplateRefComponent as ɵt, OfSelectComponent as ɵu, OfSelectAsyncComponent as ɵv, OfSelectApiComponent as ɵw, OfSelectCascadeComponent as ɵx, OfSelectAdvancedSearchComponent as ɵy, AntDesignModule as ɵz };
//# sourceMappingURL=orendaco-of.js.map
