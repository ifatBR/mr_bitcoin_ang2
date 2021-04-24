(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/e7+":
/*!**************************************!*\
  !*** ./src/services/util.service.ts ***!
  \**************************************/
/*! exports provided: utilService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utilService", function() { return utilService; });
const utilService = {
    delay,
    getRandomInt,
    makeId
};
function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Coding Academy\Exercise Submission\week15\Day108-112-AngulrWorkshop\Ex-MisterBitcoin\mrBitcoin\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "3Eri":
/*!**************************************************!*\
  !*** ./src/services/contact-resolver.service.ts ***!
  \**************************************************/
/*! exports provided: ContactResolverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactResolverService", function() { return ContactResolverService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.service */ "l8n7");



class ContactResolverService {
    constructor(contactService) {
        this.contactService = contactService;
    }
    resolve(route) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { id } = route.params;
            const contact = yield this.contactService.getContactById(id);
            return contact;
        });
    }
}
ContactResolverService.ɵfac = function ContactResolverService_Factory(t) { return new (t || ContactResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"])); };
ContactResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ContactResolverService, factory: ContactResolverService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "3W3r":
/*!****************************************************!*\
  !*** ./src/app/pages/Contact/Contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_contact_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/contact.service */ "l8n7");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cmps_Contact_filter_Contact_filter_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/Contact-filter/Contact-filter.component */ "kix1");
/* harmony import */ var _cmps_Contact_list_Contact_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../cmps/Contact-list/Contact-list.component */ "55EH");
/* harmony import */ var _Contact_details_Contact_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Contact-details/Contact-details.component */ "qm13");
/* harmony import */ var _Contact_edit_Contact_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Contact-edit/Contact-edit.component */ "FUNN");








function ContactComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "My contacts");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "contact-filter", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSetFilter", function ContactComponent_div_1_Template_contact_filter_onSetFilter_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSetFilter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "contact-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectContact", function ContactComponent_div_1_Template_contact_list_onSelectContact_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.selectedContactId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contacts", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 1, ctx_r0.contacts$));
} }
function ContactComponent_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "contact-details", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onEdit", function ContactComponent_ng_template_2_div_0_Template_contact_details_onEdit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.isEdit = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contactId", ctx_r6.selectedContactId);
} }
function ContactComponent_ng_template_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "contact-edit", 9);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contactId", ctx_r8.selectedContactId);
} }
function ContactComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ContactComponent_ng_template_2_div_0_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_ng_template_2_ng_template_1_Template, 1, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.isEdit)("ngIfElse", _r7);
} }
class ContactComponent {
    constructor(contactService) {
        this.contactService = contactService;
    }
    loadContacts() {
        this.contactService.loadContacts(this.filterBy);
        this.contacts$ = this.contactService.contacts$;
    }
    onSetFilter(filterBy) {
        this.filterBy = filterBy;
        this.loadContacts();
    }
    ngOnInit() {
        this.loadContacts();
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_services_contact_service__WEBPACK_IMPORTED_MODULE_1__["ContactService"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["contact"]], decls: 4, vars: 2, consts: [[1, "contact"], [4, "ngIf", "ngIfElse"], ["contactDetails", ""], [1, "flex", "space-between", "contact-ctrls"], ["routerLink", "edit", 1, "btn", "add", "add-contact"], [3, "onSetFilter"], [3, "contacts", "onSelectContact"], ["contactEdit", ""], [3, "contactId", "onEdit"], [3, "contactId"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactComponent_div_1_Template, 8, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ContactComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedContactId)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _cmps_Contact_filter_Contact_filter_component__WEBPACK_IMPORTED_MODULE_4__["ContactFilterComponent"], _cmps_Contact_list_Contact_list_component__WEBPACK_IMPORTED_MODULE_5__["ContactListComponent"], _Contact_details_Contact_details_component__WEBPACK_IMPORTED_MODULE_6__["ContactDetailsComponent"], _Contact_edit_Contact_edit_component__WEBPACK_IMPORTED_MODULE_7__["ContactEditComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".contact[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 40px auto;\n  padding-bottom: 80px;\n}\n.contact[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.6rem;\n  margin-bottom: 20px;\n}\n.contact[_ngcontent-%COMP%]   .contact-ctrls[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n@media (max-width: 500px) {\n  .contact[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQUE7QUEwQkEsa0JBQUE7QUN2QkE7RUFDSSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBQUo7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUFSO0FBR0k7RUFDSSxtQkFBQTtBQURSO0FEWEk7RUNBSjtJQWlCUSxXQUFBO0lBQ0EsYUFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEJyZWFrcG9pbnQgbWl4aW5zICovXHJcblxyXG5AbWl4aW4gZm9yLW1vYmlsZS1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3ItbmFycm93LWxheW91dCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1vYmlsZS1icmVha3BvaW50ICsgNDApIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1ub3JtYWwtbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbmFycm93LWJyZWFrcG9pbnQgKyA0MCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLXdpZGUtbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbm9ybWFsLWJyZWFrcG9pbnQgKyA0MCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiBNZWRpYSAgTWl4aW5zICovXHJcbkBtaXhpbiBhc3BlY3QtcmF0aW8oJHdpZHRoLCAkaGVpZ2h0KSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogKCRoZWlnaHQgLyAkd2lkdGgpICogMTAwJTtcclxuICAgIH1cclxuICAgID4gKiB7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICByaWdodDogMDtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgPiBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvLyBNaXhpbiBmb3IgcmVtb3ZpbmcgaG92ZXIgZWZlY3RzIG9uIGlwaG9uZSBzY3JlZW5cclxuICBAbWl4aW4gaG92ZXItc3VwcG9ydGVkIHsgICAgXHJcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKHBvaW50ZXI6IGNvYXJzZSkge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBAY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfSIsIkBpbXBvcnQgJy4uLy4uLy4uL3Njc3Mvc2V0dXAvdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9zZXR1cC9taXhpbnMnO1xyXG5cclxuLmNvbnRhY3Qge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtY3RybHMge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yLW1vYmlsZS1sYXlvdXQge1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIC8vIG1hcmdpbjoyMHB4IDEwcHg7XHJcblxyXG4gICAgfVxyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "4T2p":
/*!*****************************************!*\
  !*** ./src/services/bitcoin.service.ts ***!
  \*****************************************/
/*! exports provided: BitcoinService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitcoinService", function() { return BitcoinService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _storageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageService */ "W0Bf");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class BitcoinService {
    constructor(http) {
        this.http = http;
        this.MARKET_PRICE_KEY = 'marketPrice';
        this.CONFIRMED_TRANSACTIONS_KEY = 'confirmedTransactions';
    }
    getRate(coins) {
        return this.http.get('https://blockchain.info/tobtc?currency=USD&value=1')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => {
            const rate = coins / res;
            return rate.toLocaleString('he-IL');
        }));
    }
    getMarketPrice() {
        const marketPrice = _storageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].load(this.MARKET_PRICE_KEY);
        if (marketPrice && (marketPrice === null || marketPrice === void 0 ? void 0 : marketPrice.length))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(marketPrice);
        // return this.http.get<Array<MarketPriceValue>('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
        return this.http.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.values.map(({ x, y }) => {
            return [(new Date(x * 1000).toLocaleDateString(['ban', 'id'])), y];
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(values => _storageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].store(this.MARKET_PRICE_KEY, values)));
    }
    getConfirmedTransactions() {
        const confirmedTransactions = _storageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].load(this.CONFIRMED_TRANSACTIONS_KEY);
        if (confirmedTransactions && (confirmedTransactions === null || confirmedTransactions === void 0 ? void 0 : confirmedTransactions.length))
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(confirmedTransactions);
        return this.http.get('https://api.blockchain.info/charts/transactions-per-second?timespan=5weeks&rollingAverage=8hours&format=json&cors=true')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(res => res.values.map(({ x, y }) => {
            return [(new Date(x * 1000).toLocaleDateString(['ban', 'id'])), y];
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])(values => _storageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].store(this.CONFIRMED_TRANSACTIONS_KEY, values)));
    }
}
BitcoinService.ɵfac = function BitcoinService_Factory(t) { return new (t || BitcoinService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
BitcoinService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BitcoinService, factory: BitcoinService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "55EH":
/*!*************************************************************!*\
  !*** ./src/app/cmps/Contact-list/Contact-list.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactListComponent", function() { return ContactListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _Contact_preview_Contact_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Contact-preview/Contact-preview.component */ "EU52");




function ContactListComponent_contact_preview_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "contact-preview", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactListComponent_contact_preview_1_Template_contact_preview_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const contact_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onSelectContact(contact_r1._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("contact", contact_r1);
} }
class ContactListComponent {
    constructor(router) {
        this.router = router;
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }
    onSelectContact(contactId) {
        this.router.navigateByUrl('contact/' + contactId);
    }
    trackByFn(contact) {
        return contact._id;
    }
    ngOnInit() {
    }
}
ContactListComponent.ɵfac = function ContactListComponent_Factory(t) { return new (t || ContactListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ContactListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactListComponent, selectors: [["contact-list"]], inputs: { contacts: "contacts" }, decls: 2, vars: 1, consts: [[1, "contact-list"], ["trackBy", "trackByFn", 3, "contact", "click", 4, "ngFor", "ngForOf"], ["trackBy", "trackByFn", 3, "contact", "click"]], template: function ContactListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ContactListComponent_contact_preview_1_Template, 1, 1, "contact-preview", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.contacts);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _Contact_preview_Contact_preview_component__WEBPACK_IMPORTED_MODULE_3__["ContactPreviewComponent"]], styles: [".contact-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 200px);\n  grid-auto-rows: 220px;\n  gap: 20px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: auto;\n}\n@media (max-width: 500px) {\n  .contact-list[_ngcontent-%COMP%] {\n    width: 100%;\n    grid-template-columns: 300px;\n    grid-auto-rows: 340px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3QtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxzQkFBQTtBQTBCQSxrQkFBQTtBQ3ZCQTtFQUNJLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsU0FBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7QUFBSjtBRE5JO0VDQUo7SUFRUSxXQUFBO0lBQ0EsNEJBQUE7SUFDQSxxQkFBQTtFQUVOO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnJlYWtwb2ludCBtaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1icmVha3BvaW50ICsgNDApIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1uYXJyb3ctbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQgKyA0MCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5vcm1hbC1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRuYXJyb3ctYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3Itd2lkZS1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRub3JtYWwtYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhICBNaXhpbnMgKi9cclxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xyXG4gICAgfVxyXG4gICAgPiAqIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA+IGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE1peGluIGZvciByZW1vdmluZyBob3ZlciBlZmVjdHMgb24gaXBob25lIHNjcmVlblxyXG4gIEBtaXhpbiBob3Zlci1zdXBwb3J0ZWQgeyAgICBcclxuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9zZXR1cC92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3NldHVwL21peGlucyc7XHJcblxyXG4uY29udGFjdC1saXN0IHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAyMDBweCk7XHJcbiAgICBncmlkLWF1dG8tcm93czogMjIwcHg7XHJcbiAgICBnYXA6IDIwcHg7XHJcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBAaW5jbHVkZSBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICAzMDBweDtcclxuICAgICAgICBncmlkLWF1dG8tcm93czogMzQwcHg7XHJcblxyXG4gICAgfVxyXG59Il19 */"], changeDetection: 0 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BE/z":
/*!*************************************************!*\
  !*** ./src/app/cmps/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


const _c0 = function () { return { exact: true }; };
class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["header"]], decls: 9, vars: 2, consts: [[1, "flex", "space-between", "header"], [1, "logo"], ["routerLink", "", "routerLinkActive", "active", "title", "Home", 1, "home", 3, "routerLinkActiveOptions"], ["routerLink", "contact", "routerLinkActive", "active", "title", "Contacts", 1, "contact"], ["routerLink", "statistic", "routerLinkActive", "active", "title", "Statistics", 1, "statistic"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Mr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bitcoin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]], styles: ["@charset \"UTF-8\";\n.header[_ngcontent-%COMP%] {\n  padding: 20px 25px;\n  background-color: #8dd6e9;\n  position: relative;\n  z-index: 2;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  color: #f5de5e;\n  font-size: 1.7rem;\n}\n.header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"fa-solid\";\n  color: #fff;\n  text-decoration: none;\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #f5de5e;\n}\n.header[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-inline-end: 30px;\n}\n.header[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #f5de5e;\n}\n.header[_ngcontent-%COMP%]   .home[_ngcontent-%COMP%]::before {\n  content: \"\uF015\";\n}\n.header[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%]::before {\n  content: \"\uF007\";\n}\n.header[_ngcontent-%COMP%]   .statistic[_ngcontent-%COMP%]::before {\n  content: \"\uF1FE\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcc2V0dXBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFDaEI7RUFDSSxrQkFBQTtFQUNBLHlCQ0NHO0VEQUgsa0JBQUE7RUFDQSxVQUFBO0FBQ0o7QUFBSTtFQUNJLGNDRkQ7RURHQyxpQkFBQTtBQUVSO0FBRFE7RUFDSSxXQ1BMO0FEVVA7QUFBSTtFQUNJLHVCQUFBO0VBQ0EsV0NaRDtFRGFDLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUVSO0FBRFE7RUFDSSxjQ2ZMO0FEa0JQO0FBQUk7RUFDSSx1QkFBQTtBQUVSO0FBQUk7RUFDSSxjQ3RCRDtBRHdCUDtBQUFJO0VBQ0ksWUFBQTtBQUVSO0FBQUk7RUFDSSxZQUFBO0FBRVI7QUFBSTtFQUNJLFlBQUE7QUFFUiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uaGVhZGVyIHtcbiAgcGFkZGluZzogMjBweCAyNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGRkNmU5O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG59XG4uaGVhZGVyIC5sb2dvIHtcbiAgY29sb3I6ICNmNWRlNWU7XG4gIGZvbnQtc2l6ZTogMS43cmVtO1xufVxuLmhlYWRlciAubG9nbyBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uaGVhZGVyIGEge1xuICBmb250LWZhbWlseTogXCJmYS1zb2xpZFwiO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG59XG4uaGVhZGVyIGE6aG92ZXIge1xuICBjb2xvcjogI2Y1ZGU1ZTtcbn1cbi5oZWFkZXIgYTpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW4taW5saW5lLWVuZDogMzBweDtcbn1cbi5oZWFkZXIgLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZjVkZTVlO1xufVxuLmhlYWRlciAuaG9tZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLvgJVcIjtcbn1cbi5oZWFkZXIgLmNvbnRhY3Q6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74CHXCI7XG59XG4uaGVhZGVyIC5zdGF0aXN0aWM6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi74e+XCI7XG59IiwiLy8gQ29sb3JzXHJcbiRjbHItYmFzZTogIzE3MmI0ZDtcclxuXHJcbiRjbHIxOiAjZmZmO1xyXG4kY2xyMjogIzhkZDZlOTtcclxuJGNscjM6ICNmNWRlNWU7XHJcbiRjbHI0OiAjZWVlZWVlO1xyXG4kY2xyNTogI2M5YzljOTtcclxuJGNscjY6ICM4MDgwODA7XHJcbiRjbHI3OiAjZmRmZGZiO1xyXG4kY2xyODogI2M2ZGNlMDtcclxuJGNscjk6ICM3YWI5Yzk7XHJcbiRjbHIxMDojZmZiZDA4O1xyXG4kY2xyMTE6I2VjOTc2NjtcclxuXHJcblxyXG4kc3VidGxlLXNoYWRvdzogMHB4IDJweCAzcHggIzAwMDAwMDIzO1xyXG4kdGFibGUtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDM0KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRtb2JpbGUtYnJlYWtwb2ludDogNDYwcHg7XHJcbiRuYXJyb3ctYnJlYWtwb2ludDogNzEwcHg7XHJcbiRub3JtYWwtYnJlYWtwb2ludDogOTYwcHg7XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "EU52":
/*!*******************************************************************!*\
  !*** ./src/app/cmps/Contact-preview/Contact-preview.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContactPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPreviewComponent", function() { return ContactPreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ContactPreviewComponent_img_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 4);
} }
const _c0 = function (a0) { return { visibility: a0 }; };
class ContactPreviewComponent {
    constructor() {
        this.isLoaded = false;
    }
    hideLoader() {
        console.log('loaded');
        this.isLoaded = true;
    }
    ngOnInit() {
    }
}
ContactPreviewComponent.ɵfac = function ContactPreviewComponent_Factory(t) { return new (t || ContactPreviewComponent)(); };
ContactPreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactPreviewComponent, selectors: [["contact-preview"]], inputs: { contact: "contact" }, decls: 6, vars: 7, consts: [[1, "flex", "column", "contact-preview"], [1, "img-container"], [1, "contact-img", 3, "src", "alt", "ngStyle", "load"], ["class", "loader", "src", "https://i.pinimg.com/originals/19/cc/77/19cc777afcca19dda6f4a13ea889d6b6.gif", "alt", "", 4, "ngIf"], ["src", "https://i.pinimg.com/originals/19/cc/77/19cc777afcca19dda6f4a13ea889d6b6.gif", "alt", "", 1, "loader"]], template: function ContactPreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ContactPreviewComponent_Template_img_load_2_listener() { return ctx.hideLoader(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactPreviewComponent_img_3_Template, 1, 0, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx.contact.name, "'s photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "https://i.pravatar.cc/150?u=" + ctx.contact._id, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, !ctx.isLoaded ? "hidden" : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.contact.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".contact-preview[_ngcontent-%COMP%] {\n  border-radius: 10px;\n  border: 1px solid #e6e6e6;\n  height: 100%;\n  justify-content: space-between;\n  background-color: #78cee5;\n  background-color: #fff;\n  cursor: pointer;\n  transition: 0.2s;\n}\n.contact-preview[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%] {\n  border-top-left-radius: inherit;\n  border-top-right-radius: inherit;\n  position: relative;\n  height: 40%;\n  width: 100%;\n  background-color: #8dd6e9;\n}\n.contact-preview[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 70%;\n  border: 5px solid #fff;\n  position: absolute;\n  left: 50%;\n  top: 15px;\n  transform: translateX(-50%);\n  transition: 0.2s;\n}\n.contact-preview[_ngcontent-%COMP%]   .img-container[_ngcontent-%COMP%]   .loader[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n.contact-preview[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 auto 20px;\n  transition: 0.2s;\n  color: #ffbd08;\n  text-shadow: 1px 1px rgba(0, 0, 0, 0.096);\n}\n.contact-preview[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.199);\n}\n.contact-preview[_ngcontent-%COMP%]:hover   .img-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: translateX(-50%) scale(1.1);\n  filter: brightness(120%);\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.199);\n}\n.contact-preview[_ngcontent-%COMP%]:hover   h2[_ngcontent-%COMP%] {\n  color: #ffcb3b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3QtcHJldmlldy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBMEJBLGtCQUFBO0FDdkJBO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JDTkc7RURPSCxlQUFBO0VBb0NBLGdCQUFBO0FBbkNKO0FBQ0k7RUFDSSwrQkFBQTtFQUNBLGdDQUFBO0VBRUEsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUVBLHlCQ2hCRDtBRGVQO0FBR1E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUVBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBRlo7QUFLUTtFQUNJLHNCQ2hDTDtBRDZCUDtBQU9JO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNDOUJEO0VEK0JDLHlDQUFBO0FBTFI7QUFVSTtFQUNJLHlDQUFBO0FBUlI7QUFVUTtFQUNJLHNDQUFBO0VBQ0Esd0JBQUE7RUFDQSx5Q0FBQTtBQVJaO0FBV1E7RUFDSSxjQUFBO0FBVFoiLCJmaWxlIjoiY29udGFjdC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnJlYWtwb2ludCBtaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1icmVha3BvaW50ICsgNDApIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1uYXJyb3ctbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQgKyA0MCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5vcm1hbC1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRuYXJyb3ctYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3Itd2lkZS1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRub3JtYWwtYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhICBNaXhpbnMgKi9cclxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xyXG4gICAgfVxyXG4gICAgPiAqIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA+IGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE1peGluIGZvciByZW1vdmluZyBob3ZlciBlZmVjdHMgb24gaXBob25lIHNjcmVlblxyXG4gIEBtaXhpbiBob3Zlci1zdXBwb3J0ZWQgeyAgICBcclxuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9zZXR1cC92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3NldHVwL21peGlucyc7XHJcblxyXG4uY29udGFjdC1wcmV2aWV3IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGNscjQsIDMlKTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigkY2xyMiwgNSUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNscjE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLmltZy1jb250YWluZXIge1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IGluaGVyaXQ7XHJcblxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyMTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyMjtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCAkY2xyMTtcclxuICAgICAgICAgICAgLy8gYm9yZGVyOiA1cHggZG91YmxlIHJnYigxODIsIDE4MiwgMTgyKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRvcDogMTVweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjbHIxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgIGNvbG9yOiAkY2xyMTA7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA5Nik7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhbnNpdGlvbjogMC4ycztcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMTk5KTtcclxuXHJcbiAgICAgICAgLmltZy1jb250YWluZXIgaW1nIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDEuMSk7XHJcbiAgICAgICAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygxMjAlKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjE5OSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBsaWdodGVuKCRjbHIxMCwgMTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGluY2x1ZGUgZm9yLW1vYmlsZS1sYXlvdXQge31cclxufSIsIi8vIENvbG9yc1xyXG4kY2xyLWJhc2U6ICMxNzJiNGQ7XHJcblxyXG4kY2xyMTogI2ZmZjtcclxuJGNscjI6ICM4ZGQ2ZTk7XHJcbiRjbHIzOiAjZjVkZTVlO1xyXG4kY2xyNDogI2VlZWVlZTtcclxuJGNscjU6ICNjOWM5Yzk7XHJcbiRjbHI2OiAjODA4MDgwO1xyXG4kY2xyNzogI2ZkZmRmYjtcclxuJGNscjg6ICNjNmRjZTA7XHJcbiRjbHI5OiAjN2FiOWM5O1xyXG4kY2xyMTA6I2ZmYmQwODtcclxuJGNscjExOiNlYzk3NjY7XHJcblxyXG5cclxuJHN1YnRsZS1zaGFkb3c6IDBweCAycHggM3B4ICMwMDAwMDAyMztcclxuJHRhYmxlLXNoYWRvdzogMnB4IDJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjAzNCk7XHJcblxyXG4vLyBCcmVha3BvaW50c1xyXG4kbW9iaWxlLWJyZWFrcG9pbnQ6IDQ2MHB4O1xyXG4kbmFycm93LWJyZWFrcG9pbnQ6IDcxMHB4O1xyXG4kbm9ybWFsLWJyZWFrcG9pbnQ6IDk2MHB4O1xyXG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "FUNN":
/*!**************************************************************!*\
  !*** ./src/app/pages/Contact-edit/Contact-edit.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactEditComponent", function() { return ContactEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_contact_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/contact.service */ "l8n7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ContactEditComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactEditComponent_section_0_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.onBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function ContactEditComponent_section_0_Template_form_submit_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onSaveContact(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "Label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "Label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "Label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "E-mail:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r0.form);
} }
class ContactEditComponent {
    constructor(contactService, route, router, fb) {
        this.contactService = contactService;
        this.route = route;
        this.router = router;
        this.fb = fb;
    }
    onSaveContact() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('this.form.value:', this.form.value)
            const updatedContact = Object.assign({}, this.form.value);
            if (this.contact._id)
                updatedContact._id = this.contact._id;
            yield this.contactService.saveContact(updatedContact);
            this.onBack();
        });
    }
    onBack() {
        if (this.contact._id)
            this.router.navigateByUrl('/contact/' + this.contact._id);
        else
            this.router.navigateByUrl('/contact');
    }
    ngOnInit() {
        this.route.data.subscribe(data => {
            this.contact = data.contact;
        });
        this.form = this.fb.group({
            name: this.contact.name,
            phone: this.contact.phone,
            email: this.contact.email
        });
    }
}
ContactEditComponent.ɵfac = function ContactEditComponent_Factory(t) { return new (t || ContactEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_contact_service__WEBPACK_IMPORTED_MODULE_2__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
ContactEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactEditComponent, selectors: [["contact-edit"]], inputs: { contactId: "contactId" }, decls: 1, vars: 1, consts: [["class", "edit", 4, "ngIf"], [1, "edit"], [1, "btn", "back", 3, "click"], [1, "flex", "column", "edit-form", 3, "formGroup", "submit"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name"], ["for", "phone"], ["type", "text", "id", "phone", "formControlName", "phone"], ["for", "email"], ["type", "text", "id", "email", "formControlName", "email"], [1, "btn", "confirm"]], template: function ContactEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, ContactEditComponent_section_0_Template, 14, 1, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.contact);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"]], styles: [".edit[_ngcontent-%COMP%] {\n  top: 0;\n}\n.edit[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%] {\n  position: relative;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 100px auto 0;\n  display: grid;\n  grid-template-columns: 60px 250px;\n  gap: 20px;\n  align-items: center;\n  border-radius: 5px;\n  border: 1px solid #8dd6e9;\n  background-color: #8dd6e9;\n  padding: 50px 30px 40px;\n  color: #fff;\n  font-weight: bold;\n}\n.edit[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  grid-row: 6/7;\n}\n.edit[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 500px) {\n  .edit[_ngcontent-%COMP%]   .edit-form[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    grid-template-columns: 40px 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3QtZWRpdC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBMEJBLGtCQUFBO0FDdkJBO0VBQ0ksTUFBQTtBQUFKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQ1hEO0VEWUMsdUJBQUE7RUFDQSxXQ2REO0VEZUMsaUJBQUE7QUFDUjtBQUFRO0VBQ0ksYUFBQTtBQUVaO0FBQVE7RUFDSSxXQUFBO0FBRVo7QUR0Qkk7RUNFQTtJQXFCUSxXQUFBO0lBQ0EsWUFBQTtJQUNBLCtCQUFBO0VBR1Y7QUFDRiIsImZpbGUiOiJjb250YWN0LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBCcmVha3BvaW50IG1peGlucyAqL1xyXG5cclxuQG1peGluIGZvci1tb2JpbGUtbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQgKyA0MCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5hcnJvdy1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtb2JpbGUtYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3Itbm9ybWFsLWxheW91dCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG5hcnJvdy1icmVha3BvaW50ICsgNDApIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci13aWRlLWxheW91dCB7XHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG5vcm1hbC1icmVha3BvaW50ICsgNDApIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuLyogTWVkaWEgIE1peGlucyAqL1xyXG5AbWl4aW4gYXNwZWN0LXJhdGlvKCR3aWR0aCwgJGhlaWdodCkge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZy10b3A6ICgkaGVpZ2h0IC8gJHdpZHRoKSAqIDEwMCU7XHJcbiAgICB9XHJcbiAgICA+ICoge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGJvdHRvbTogMDtcclxuICAgIH1cclxuICBcclxuICAgID4gaW1nIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gTWl4aW4gZm9yIHJlbW92aW5nIGhvdmVyIGVmZWN0cyBvbiBpcGhvbmUgc2NyZWVuXHJcbiAgQG1peGluIGhvdmVyLXN1cHBvcnRlZCB7ICAgIFxyXG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChwb2ludGVyOiBjb2Fyc2UpIHtcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gIH0iLCJAaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3NldHVwL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3Njc3Mvc2V0dXAvbWl4aW5zJztcclxuXHJcbi5lZGl0e1xyXG4gICAgdG9wOjA7XHJcbiAgICAuZWRpdC1mb3Jte1xyXG4gICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICBtYXJnaW46MTAwcHggYXV0byAwO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDYwcHggMjUwcHg7XHJcbiAgICAgICAgZ2FwOjIwcHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAkY2xyMjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyMjtcclxuICAgICAgICBwYWRkaW5nOjUwcHggMzBweCA0MHB4O1xyXG4gICAgICAgIGNvbG9yOiRjbHIxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIC5idG57XHJcbiAgICAgICAgICAgIGdyaWQtcm93OjYvNztcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAaW5jbHVkZSBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0MHB4IDFmcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gQ29sb3JzXHJcbiRjbHItYmFzZTogIzE3MmI0ZDtcclxuXHJcbiRjbHIxOiAjZmZmO1xyXG4kY2xyMjogIzhkZDZlOTtcclxuJGNscjM6ICNmNWRlNWU7XHJcbiRjbHI0OiAjZWVlZWVlO1xyXG4kY2xyNTogI2M5YzljOTtcclxuJGNscjY6ICM4MDgwODA7XHJcbiRjbHI3OiAjZmRmZGZiO1xyXG4kY2xyODogI2M2ZGNlMDtcclxuJGNscjk6ICM3YWI5Yzk7XHJcbiRjbHIxMDojZmZiZDA4O1xyXG4kY2xyMTE6I2VjOTc2NjtcclxuXHJcblxyXG4kc3VidGxlLXNoYWRvdzogMHB4IDJweCAzcHggIzAwMDAwMDIzO1xyXG4kdGFibGUtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDM0KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRtb2JpbGUtYnJlYWtwb2ludDogNDYwcHg7XHJcbiRuYXJyb3ctYnJlYWtwb2ludDogNzEwcHg7XHJcbiRub3JtYWwtYnJlYWtwb2ludDogOTYwcHg7XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "ITiG":
/*!**************************************!*\
  !*** ./src/services/user.service.ts ***!
  \**************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _storageService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storageService */ "W0Bf");
/* harmony import */ var _util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util.service */ "/e7+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class UserService {
    constructor() {
        this._user$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({ name: '', coins: 0, moves: [] });
        this.user$ = this._user$.asObservable();
        this.LOGGEDIN_USER_KEY = "loggedinUser";
        this.displayMoves = [
            { toId: '6071cb7da166544b0e0c9368', to: 'Ollie Christian', at: 1620162000000, amount: 5 },
            { toId: '6071cb7da166544b0e0c936f', to: 'Lilly Conner', at: 1620594000000, amount: 1 },
            { toId: '6071cb7da166544b0e0c936a', to: 'Glenna Santana', at: 1620853200000, amount: 3 },
        ];
    }
    signup(userName) {
        const newUser = { _id: _util_service__WEBPACK_IMPORTED_MODULE_2__["utilService"].makeId(), name: userName, coins: 100, moves: this.displayMoves };
        this._saveUser(newUser);
        this._user$.next(newUser);
    }
    logout() {
        _storageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].store(this.LOGGEDIN_USER_KEY, null);
        this._user$.next({ name: '', coins: 0, moves: [] });
    }
    checkLoggedIn() {
        const user = this._getUser();
        return user && !!Object.keys(user).length;
    }
    getUserMoves() {
        const user = _storageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].load(this.LOGGEDIN_USER_KEY);
        return user.moves;
    }
    addMove(contact, amount) {
        const user = this._getUser();
        if (user.coins >= amount) {
            user.coins -= amount;
            const move = { toId: contact._id, to: contact.name, at: Date.now(), amount };
            user.moves = [...user.moves, move];
            _storageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].store(this.LOGGEDIN_USER_KEY, user);
            this._user$.next(user);
        }
    }
    _getUser() {
        const user = _storageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].load(this.LOGGEDIN_USER_KEY);
        return user;
    }
    _saveUser(user) {
        _storageService__WEBPACK_IMPORTED_MODULE_1__["storageService"].store(this.LOGGEDIN_USER_KEY, user);
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Jgs5":
/*!**************************************!*\
  !*** ./src/services/http.service.js ***!
  \**************************************/
/*! exports provided: httpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpService", function() { return httpService; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

// import {router} from '@/router'

const BASE_URL =  false
    ? undefined
    : '//localhost:3030/api/'


var axios = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
    withCredentials: true
})

const httpService = {
    get(endpoint, data) {
        return ajax(endpoint, 'GET', data)
    },
    post(endpoint, data) {
        return ajax(endpoint, 'POST', data)
    },
    put(endpoint, data) {
        return ajax(endpoint, 'PUT', data)
    },
    delete(endpoint, data) {
        return ajax(endpoint, 'DELETE', data)
    }
}

async function ajax(endpoint, method = 'GET', data = null) {
    try {
        const res = await axios({
            url: `${BASE_URL}${endpoint}`,
            method,
            data,
            params: (method === 'GET') ? data : null
        })
        return res.data
    } catch (err) {
        console.log(`Had Issues ${method}ing to the backend, endpoint: ${endpoint}, with data: ${data}`)
        console.dir(err)
        // if (err.response && err.response.status === 401) {
            // Depends on routing startegy - hash or history
            // window.location.assign('/#/login')
            // window.location.assign('/login')
            // router.push('/login')
        // }
        throw err
    }
}

/***/ }),

/***/ "L8zA":
/*!*******************************************************!*\
  !*** ./src/app/cmps/move-list/move-list.component.ts ***!
  \*******************************************************/
/*! exports provided: MoveListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveListComponent", function() { return MoveListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function MoveListComponent_ul_3_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "To:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const move_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", move_r1.to, "");
} }
function MoveListComponent_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MoveListComponent_ul_3_p_2_Template, 4, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Amount:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const move_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isShowTo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", move_r1.amount, " BTC,");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 3, move_r1.at, "d/M/yy"), "");
} }
class MoveListComponent {
    constructor() { }
    trackByFn(idx) {
        return idx;
    }
    ngOnInit() {
    }
}
MoveListComponent.ɵfac = function MoveListComponent_Factory(t) { return new (t || MoveListComponent)(); };
MoveListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MoveListComponent, selectors: [["move-list"]], inputs: { moves: "moves", title: "title", isShowTo: "isShowTo", moveClass: "moveClass" }, decls: 4, vars: 4, consts: [["trackBy", "trackByFn(idx)", "class", "clean-list", 4, "ngFor", "ngForOf"], ["trackBy", "trackByFn(idx)", 1, "clean-list"], [1, "flex"], [4, "ngIf"]], template: function MoveListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MoveListComponent_ul_3_Template, 12, 6, "ul", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.moveClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.moves);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]], styles: [".move-list[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.move-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.move-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #808080;\n}\n.move-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-inline-end: 10px;\n}\n.move-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #808080;\n}\n.last-moves[_ngcontent-%COMP%] {\n  color: #fff;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.last-moves[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  margin-inline-end: 30px;\n}\n.last-moves[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n.last-moves[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 0.9rem;\n}\n.last-moves[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:not(:last-of-type) {\n  margin-inline-end: 10px;\n}\n.last-moves[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtb3ZlLWxpc3QuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nzc1xcc2V0dXBcXF92YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJSTtFQUNJLG1CQUFBO0FBSFI7QUFNSTtFQUNJLG1CQUFBO0FBSlI7QUFPSTtFQUNJLGNDTEQ7QURBUDtBQU9RO0VBQ0ksdUJBQUE7QUFMWjtBQVFRO0VBQ0ksZ0NBQUE7QUFOWjtBQVdBO0VBQ0ksV0N2Qkc7RUR5QkgsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVRKO0FBV0k7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FBVFI7QUFZSTtFQUNJLGtCQUFBO0FBVlI7QUFhSTtFQUNJLFdDdkNEO0VEd0NDLGlCQUFBO0FBWFI7QUFhUTtFQUNJLHVCQUFBO0FBWFo7QUFjUTtFQUNJLGlCQUFBO0FBWloiLCJmaWxlIjoibW92ZS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9zZXR1cC92YXJpYWJsZXMnO1xyXG5cclxuLm1vdmUtbGlzdCB7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgY29sb3I6ICRjbHI2O1xyXG5cclxuICAgICAgICAmOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJiBzcGFuIHtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjbHI2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxhc3QtbW92ZXMge1xyXG4gICAgY29sb3I6ICRjbHIxO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDMwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgbGkge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBjb2xvcjogJGNscjE7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcblxyXG4gICAgICAgICY6bm90KDpsYXN0LW9mLXR5cGUpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmIHNwYW4ge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvLyBDb2xvcnNcclxuJGNsci1iYXNlOiAjMTcyYjRkO1xyXG5cclxuJGNscjE6ICNmZmY7XHJcbiRjbHIyOiAjOGRkNmU5O1xyXG4kY2xyMzogI2Y1ZGU1ZTtcclxuJGNscjQ6ICNlZWVlZWU7XHJcbiRjbHI1OiAjYzljOWM5O1xyXG4kY2xyNjogIzgwODA4MDtcclxuJGNscjc6ICNmZGZkZmI7XHJcbiRjbHI4OiAjYzZkY2UwO1xyXG4kY2xyOTogIzdhYjljOTtcclxuJGNscjEwOiNmZmJkMDg7XHJcbiRjbHIxMTojZWM5NzY2O1xyXG5cclxuXHJcbiRzdWJ0bGUtc2hhZG93OiAwcHggMnB4IDNweCAjMDAwMDAwMjM7XHJcbiR0YWJsZS1zaGFkb3c6IDJweCAycHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wMzQpO1xyXG5cclxuLy8gQnJlYWtwb2ludHNcclxuJG1vYmlsZS1icmVha3BvaW50OiA0NjBweDtcclxuJG5hcnJvdy1icmVha3BvaW50OiA3MTBweDtcclxuJG5vcm1hbC1icmVha3BvaW50OiA5NjBweDtcclxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ "Rprr":
/*!*********************************************!*\
  !*** ./src/app/cmps/fund/fund.component.ts ***!
  \*********************************************/
/*! exports provided: FundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FundComponent", function() { return FundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class FundComponent {
    constructor() {
        this.moveCoins = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    onMoveCoins() {
        this.moveCoins.emit(this.amount);
        this.amount = null;
    }
    ngOnInit() {
    }
}
FundComponent.ɵfac = function FundComponent_Factory(t) { return new (t || FundComponent)(); };
FundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FundComponent, selectors: [["fund"]], outputs: { moveCoins: "moveCoins" }, decls: 6, vars: 1, consts: [[1, "flex", "column", "fund", 3, "submit"], ["for", "amount"], ["type", "number", "min", "0", "id", "amount", "name", "amount", 3, "ngModel", "ngModelChange"], [1, "btn", "confirm"]], template: function FundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FundComponent_Template_form_submit_0_listener() { return ctx.onMoveCoins(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Amount:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function FundComponent_Template_input_ngModelChange_3_listener($event) { return ctx.amount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Move");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.amount);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".fund[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.fund[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.fund[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.fund[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n.fund[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.fund[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmdW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ssbUJBQUE7QUFDTDtBQUNJO0VBQ0ksbUJBQUE7QUFDUjtBQUNJO0VBQ0ksZUFBQTtBQUNSO0FBQ0k7RUFDSSxpQkFBQTtBQUNSO0FBQ0k7RUFDQyxXQUFBO0FBQ0w7QUFDSTtFQUNJLG9CQUFBO0FBQ1IiLCJmaWxlIjoiZnVuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdW5kIHtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICY+KiB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIH1cclxuICAgIGg0e1xyXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtXHJcbiAgICB9XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICAgIGlucHV0e1xyXG4gICAgIHdpZHRoOiAxMDAlOyAgIFxyXG4gICAgfVxyXG4gICAgLmJ0biB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICB9XHJcbn0iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cmps/header/header.component */ "BE/z");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'mrBitcoin';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, consts: [[1, "app"], [1, "router-view"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_cmps_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".app[_ngcontent-%COMP%] {\n  height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQUNKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */", "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluLnNjc3MifQ== */"] });


/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "ITiG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        let isUserLoggedin = this.userService.checkLoggedIn();
        if (!isUserLoggedin)
            this.router.navigateByUrl('');
        return isUserLoggedin;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "W0Bf":
/*!****************************************!*\
  !*** ./src/services/storageService.ts ***!
  \****************************************/
/*! exports provided: storageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storageService", function() { return storageService; });
function store(key, value) {
    localStorage[key] = JSON.stringify(value);
}
function load(key, defaultValue = null) {
    var value = localStorage[key] || defaultValue;
    return JSON.parse(value);
}
const storageService = {
    store,
    load
};


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _pages_Contact_details_Contact_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Contact-details/Contact-details.component */ "qm13");
/* harmony import */ var _pages_Contact_edit_Contact_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/Contact-edit/Contact-edit.component */ "FUNN");
/* harmony import */ var _pages_Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/Contact/Contact.component */ "3W3r");
/* harmony import */ var _cmps_Contact_filter_Contact_filter_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cmps/Contact-filter/Contact-filter.component */ "kix1");
/* harmony import */ var _cmps_Contact_list_Contact_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cmps/Contact-list/Contact-list.component */ "55EH");
/* harmony import */ var _cmps_Contact_preview_Contact_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cmps/Contact-preview/Contact-preview.component */ "EU52");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "ojyh");
/* harmony import */ var _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./cmps/header/header.component */ "BE/z");
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "v6lb");
/* harmony import */ var _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cmps/chart/chart.component */ "ppaa");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cmps/move-list/move-list.component */ "L8zA");
/* harmony import */ var _cmps_fund_fund_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cmps/fund/fund.component */ "Rprr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ "fXoL");



















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _pages_Contact_details_Contact_details_component__WEBPACK_IMPORTED_MODULE_6__["ContactDetailsComponent"],
        _pages_Contact_edit_Contact_edit_component__WEBPACK_IMPORTED_MODULE_7__["ContactEditComponent"],
        _pages_Contact_Contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
        _cmps_Contact_filter_Contact_filter_component__WEBPACK_IMPORTED_MODULE_9__["ContactFilterComponent"],
        _cmps_Contact_list_Contact_list_component__WEBPACK_IMPORTED_MODULE_10__["ContactListComponent"],
        _cmps_Contact_preview_Contact_preview_component__WEBPACK_IMPORTED_MODULE_11__["ContactPreviewComponent"],
        _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
        _cmps_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
        _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_14__["StatisticsComponent"],
        _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_15__["ChartComponent"],
        _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_16__["MoveListComponent"],
        _cmps_fund_fund_component__WEBPACK_IMPORTED_MODULE_17__["FundComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_2__["GoogleChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "kix1":
/*!*****************************************************************!*\
  !*** ./src/app/cmps/Contact-filter/Contact-filter.component.ts ***!
  \*****************************************************************/
/*! exports provided: ContactFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactFilterComponent", function() { return ContactFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class ContactFilterComponent {
    constructor() {
        this.onSetFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.filterBy = { term: '' };
    }
    ngOnInit() {
    }
}
ContactFilterComponent.ɵfac = function ContactFilterComponent_Factory(t) { return new (t || ContactFilterComponent)(); };
ContactFilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactFilterComponent, selectors: [["contact-filter"]], outputs: { onSetFilter: "onSetFilter" }, decls: 2, vars: 1, consts: [[1, "filter"], ["type", "text", "name", "term", "placeholder", "Search...", 3, "ngModel", "ngModelChange"]], template: function ContactFilterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ContactFilterComponent_Template_input_ngModelChange_1_listener($event) { return ctx.filterBy.term = $event; })("ngModelChange", function ContactFilterComponent_Template_input_ngModelChange_1_listener() { return ctx.onSetFilter.emit(ctx.filterBy); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterBy.term);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YWN0LWZpbHRlci5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });


/***/ }),

/***/ "l8n7":
/*!*****************************************!*\
  !*** ./src/services/contact.service.ts ***!
  \*****************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/contact.model */ "mhXE");
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./http.service */ "Jgs5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class ContactService {
    constructor(http) {
        this.http = http;
        this._contacts$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.contacts$ = this._contacts$.asObservable();
        this._contact$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](new _models_contact_model__WEBPACK_IMPORTED_MODULE_2__["Contact"]);
        this.contact$ = this._contacts$.asObservable();
    }
    getEmptyContact() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ name: '', phone: '', email: '' });
    }
    loadContacts(filterBy = { term: '' }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // console.log('got filterBy',filterBy);
            // let params = new HttpParams().set('term', filterBy.term)
            // return this.http.get<any>('http://localhost:3030/api/contact/?term='+filterBy.term)
            // .subscribe(contacts => this._contacts$.next(this._sort(contacts)))
            try {
                var queryStr = !filterBy ? '' : `?term=${filterBy.term}`;
                const contacts = yield _http_service__WEBPACK_IMPORTED_MODULE_3__["httpService"].get(`contact${queryStr}`);
                this._contacts$.next(this._sort(contacts));
            }
            catch (err) {
                console.log(err);
            }
        });
    }
    getNeighborContactId(contactId, diff) {
        let neighborContactId;
        this.contacts$.subscribe(contacts => {
            let contactIdx = contacts.findIndex(({ _id }) => _id === contactId);
            contactIdx += diff;
            if (contactIdx < 0)
                contactIdx = contacts.length - 1;
            else if (contactIdx >= contacts.length)
                contactIdx = 0;
            neighborContactId = (contacts[contactIdx]._id);
        });
        return neighborContactId;
    }
    getContactById(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('id:', id);
            if (!id)
                return this.getEmptyContact();
            const contact = yield _http_service__WEBPACK_IMPORTED_MODULE_3__["httpService"].get(`contact/${id}`);
            return contact;
        });
    }
    deleteContact(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield _http_service__WEBPACK_IMPORTED_MODULE_3__["httpService"].delete(`contact/${id}`);
            return this._contacts$.subscribe(contacts => {
                contacts = contacts.filter(contact => contact._id !== id);
            });
        });
    }
    saveContact(contact) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const savedContact = contact._id ?
                yield _http_service__WEBPACK_IMPORTED_MODULE_3__["httpService"].put(`contact/${contact._id}`, contact) :
                yield _http_service__WEBPACK_IMPORTED_MODULE_3__["httpService"].post(`contact/`, contact);
            return savedContact;
        });
    }
    _sort(contacts) {
        return contacts.sort((a, b) => {
            if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
                return -1;
            }
            if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
                return 1;
            }
            return 0;
        });
    }
}
ContactService.ɵfac = function ContactService_Factory(t) { return new (t || ContactService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
ContactService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ContactService, factory: ContactService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "mhXE":
/*!*************************************!*\
  !*** ./src/models/contact.model.ts ***!
  \*************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony import */ var _services_util_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/util.service */ "/e7+");

class Contact {
    constructor(name = '', email = '', phone = '', _id) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this._id = _id;
    }
    setId() {
        // Implement your own set Id
        this._id = _services_util_service__WEBPACK_IMPORTED_MODULE_0__["utilService"].makeId();
    }
}


/***/ }),

/***/ "ojyh":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_bitcoin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/bitcoin.service */ "4T2p");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/user.service */ "ITiG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../cmps/move-list/move-list.component */ "L8zA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






function HomepageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_div_2_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Hello ", ctx_r0.user.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Coins: ", ctx_r0.user.coins, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rate: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx_r0.rate$), "");
} }
function HomepageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function HomepageComponent_ng_template_3_Template_form_submit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSignup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HomepageComponent_ng_template_3_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.userName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.userName);
} }
class HomepageComponent {
    constructor(bitcoinService, userService) {
        this.bitcoinService = bitcoinService;
        this.userService = userService;
    }
    onSignup() {
        var _a;
        if (!this.userName)
            return;
        this.userService.signup(this.userName);
        // this.userService.signup(this.userName).subscribe(user => { this.user = user })
        this.userName = '';
        this.lastMoves = (this.user.moves.slice(((_a = this.user) === null || _a === void 0 ? void 0 : _a.moves.length) - 3)).reverse();
    }
    onLogout() {
        this.userService.logout();
        // this.userService.logout().subscribe(user => {this.user=user})
        this.lastMoves = [];
    }
    ngOnInit() {
        this.userService.user$.subscribe(user => {
            var _a, _b;
            this.user = user;
            this.lastMoves = ((_a = this.user) === null || _a === void 0 ? void 0 : _a.moves.slice(((_b = this.user) === null || _b === void 0 ? void 0 : _b.moves.length) - 3)).reverse();
        });
        if (this.user.name)
            this.rate$ = this.bitcoinService.getRate(this.user.coins);
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["homepage"]], decls: 6, vars: 6, consts: [[1, "homepage"], [1, "user-info-container"], ["class", "user-info", 4, "ngIf", "ngIfElse"], ["signup", ""], [3, "moves", "title", "isShowTo", "moveClass"], [1, "user-info"], [1, "btn", "warning", 3, "click"], [1, "user-info", "signup", 3, "submit"], ["for", "signup"], ["type", "text", "id", "signup", "name", "name", 3, "ngModel", "ngModelChange"], [1, "btn", "confirm"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HomepageComponent_div_2_Template, 10, 5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomepageComponent_ng_template_3_Template, 6, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "move-list", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user.name)("ngIfElse", _r1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("moves", ctx.lastMoves)("title", "Last moves:")("isShowTo", true)("moveClass", "last-moves");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_4__["MoveListComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".homepage[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  width: 100%;\n  background-image: url('bg3.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position-y: center;\n  background-position-x: center;\n  z-index: 1;\n}\n.homepage[_ngcontent-%COMP%]   .user-info-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  right: 20px;\n  top: 100px;\n  min-width: 18.75rem;\n}\n.homepage[_ngcontent-%COMP%]   .user-info-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding: 20px;\n  border: 1px solid #ffbd08;\n  border-radius: 5px;\n  background-color: #3bb6d5b7;\n}\n.homepage[_ngcontent-%COMP%]   .user-info-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n  background-color: #4ebfdbe3;\n}\n.homepage[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  font-size: 1rem;\n}\n.homepage[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #ec9766;\n  margin-bottom: 0.9rem;\n}\n.homepage[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ffbd08;\n  margin-bottom: 0.5rem;\n}\n.homepage[_ngcontent-%COMP%]   .user-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  float: right;\n  margin-top: 1.2rem;\n}\n.homepage[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 10px;\n  color: #f5de5e;\n  font-weight: bold;\n}\n.homepage[_ngcontent-%COMP%]   .signup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 500px) {\n  .homepage[_ngcontent-%COMP%]   .user-info-container[_ngcontent-%COMP%] {\n    left: 50%;\n    transform: translateX(-50%);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXHNjc3NcXHNldHVwXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0JBQUE7QUEwQkEsa0JBQUE7QUN2QkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtFQUNBLDZCQUFBO0VBQ0EsVUFBQTtBQUFKO0FBQ0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUFRO0VBQ0ksMkJBQUE7RUFBQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUVaO0FBQVE7RUFDSSwyQkFBQTtBQUVaO0FBRUk7RUFFSSxtQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUVRO0VBQ0ksY0MxQkw7RUQyQksscUJBQUE7QUFBWjtBQUVRO0VBQ0ksY0MvQkw7RURnQ0sscUJBQUE7QUFBWjtBQUVRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQVo7QUFNUTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQ3BETDtFRHFESyxpQkFBQTtBQUpaO0FBTVE7RUFDSSxXQUFBO0FBSlo7QUR0REk7RUM4REk7SUFDSSxTQUFBO0lBQ0EsMkJBQUE7RUFMVjtBQUNGIiwiZmlsZSI6ImhvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnJlYWtwb2ludCBtaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1icmVha3BvaW50ICsgNDApIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1uYXJyb3ctbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQgKyA0MCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5vcm1hbC1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRuYXJyb3ctYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3Itd2lkZS1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRub3JtYWwtYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhICBNaXhpbnMgKi9cclxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xyXG4gICAgfVxyXG4gICAgPiAqIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA+IGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE1peGluIGZvciByZW1vdmluZyBob3ZlciBlZmVjdHMgb24gaXBob25lIHNjcmVlblxyXG4gIEBtaXhpbiBob3Zlci1zdXBwb3J0ZWQgeyAgICBcclxuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9zZXR1cC92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3NldHVwL21peGlucyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL3Njc3Mvc2V0dXAvZnVuY3Rpb25zJztcclxuLmhvbWVwYWdle1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2JnMy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlciA7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICAudXNlci1pbmZvLWNvbnRhaW5lcntcclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICByaWdodDoyMHB4O1xyXG4gICAgICAgIHRvcDoxMDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IHJlbSgzMDBweCk7XHJcbiAgICAgICAgPip7XHJcbiAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAkY2xyMTA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzNiYjZkNWI3O1xyXG4gICAgICAgIH1cclxuICAgICAgICA+Kjpob3ZlcntcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRlYmZkYmUzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLnVzZXItaW5mb1xyXG4gICAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206MTBweDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgICAgaDJ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY2xyMTE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206MC45cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgY29sb3I6ICRjbHIxMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTowLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuMnJlbTtcclxuXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICB9XHJcbiAgICAuc2lnbnVwIHtcclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOjEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiRjbHIzO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBpbmNsdWRlIGZvci1tb2JpbGUtbGF5b3V0e1xyXG4gICAgICAgIC51c2VyLWluZm8tY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbGVmdDo1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIH1cclxufVxyXG59IiwiLy8gQ29sb3JzXHJcbiRjbHItYmFzZTogIzE3MmI0ZDtcclxuXHJcbiRjbHIxOiAjZmZmO1xyXG4kY2xyMjogIzhkZDZlOTtcclxuJGNscjM6ICNmNWRlNWU7XHJcbiRjbHI0OiAjZWVlZWVlO1xyXG4kY2xyNTogI2M5YzljOTtcclxuJGNscjY6ICM4MDgwODA7XHJcbiRjbHI3OiAjZmRmZGZiO1xyXG4kY2xyODogI2M2ZGNlMDtcclxuJGNscjk6ICM3YWI5Yzk7XHJcbiRjbHIxMDojZmZiZDA4O1xyXG4kY2xyMTE6I2VjOTc2NjtcclxuXHJcblxyXG4kc3VidGxlLXNoYWRvdzogMHB4IDJweCAzcHggIzAwMDAwMDIzO1xyXG4kdGFibGUtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDM0KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRtb2JpbGUtYnJlYWtwb2ludDogNDYwcHg7XHJcbiRuYXJyb3ctYnJlYWtwb2ludDogNzEwcHg7XHJcbiRub3JtYWwtYnJlYWtwb2ludDogOTYwcHg7XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "ppaa":
/*!***********************************************!*\
  !*** ./src/app/cmps/chart/chart.component.ts ***!
  \***********************************************/
/*! exports provided: ChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartComponent", function() { return ChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-google-charts */ "icpI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ChartComponent {
    constructor() {
        this.options = {
            colors: ['#8dd6e9'],
            backgroundColor: 'transparent',
            hAxis: {
                title: 'Date'
            },
            vAxis: {
                title: ''
            },
            legend: 'left'
        };
        this.type = 'AreaChart';
        this.width = screen.width * 0.95;
        this.height = screen.width * 0.4;
    }
    ngOnInit() {
        this.options.vAxis.title = this.vTitle;
    }
}
ChartComponent.ɵfac = function ChartComponent_Factory(t) { return new (t || ChartComponent)(); };
ChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChartComponent, selectors: [["chart"]], inputs: { title: "title", data: "data", columnNames: "columnNames", vTitle: "vTitle" }, decls: 5, vars: 9, consts: [[1, "chart-headline"], [1, "chart", 3, "type", "data", "width", "height", "options", "columns"]], template: function ChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "google-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.type)("data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 7, ctx.data))("width", ctx.width)("height", ctx.height)("options", ctx.options)("columns", ctx.columnNames);
    } }, directives: [angular_google_charts__WEBPACK_IMPORTED_MODULE_1__["GoogleChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".chart[_ngcontent-%COMP%] {\n  margin: 0px auto;\n}\n.chart-headline[_ngcontent-%COMP%] {\n  margin: auto;\n  text-align: center;\n  position: relative;\n  top: 40px;\n  color: #ffbd08;\n  font-size: 1.5rem;\n}\n@media (max-width: 500px) {\n  .chart[_ngcontent-%COMP%] {\n    margin: 20px auto;\n  }\n\n  .chart-headline[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNoYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBMEJBLGtCQUFBO0FDdkJBO0VBQ0ksZ0JBQUE7QUFBSjtBQUdBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQUo7QURWSTtFQ2NBO0lBQ0ksaUJBQUE7RUFBTjs7RUFJRTtJQUNJLGVBQUE7RUFETjtBQUNGIiwiZmlsZSI6ImNoYXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnJlYWtwb2ludCBtaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1icmVha3BvaW50ICsgNDApIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1uYXJyb3ctbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQgKyA0MCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5vcm1hbC1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRuYXJyb3ctYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3Itd2lkZS1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRub3JtYWwtYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhICBNaXhpbnMgKi9cclxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xyXG4gICAgfVxyXG4gICAgPiAqIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA+IGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE1peGluIGZvciByZW1vdmluZyBob3ZlciBlZmVjdHMgb24gaXBob25lIHNjcmVlblxyXG4gIEBtaXhpbiBob3Zlci1zdXBwb3J0ZWQgeyAgICBcclxuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9zZXR1cC92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3NldHVwL21peGlucyc7XHJcblxyXG4uY2hhcnQge1xyXG4gICAgbWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuLmNoYXJ0LWhlYWRsaW5lIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogNDBweDtcclxuICAgIGNvbG9yOiAkY2xyMTA7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbTtcclxufVxyXG5cclxuQGluY2x1ZGUgZm9yLW1vYmlsZS1sYXlvdXQge1xyXG4gICAgLmNoYXJ0IHtcclxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNoYXJ0LWhlYWRsaW5lIHtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcblxyXG4gICAgfVxyXG5cclxufSJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "qm13":
/*!********************************************************************!*\
  !*** ./src/app/pages/Contact-details/Contact-details.component.ts ***!
  \********************************************************************/
/*! exports provided: ContactDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactDetailsComponent", function() { return ContactDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/services/user.service */ "ITiG");
/* harmony import */ var src_services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/services/contact.service */ "l8n7");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _cmps_fund_fund_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cmps/fund/fund.component */ "Rprr");
/* harmony import */ var _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../cmps/move-list/move-list.component */ "L8zA");









const _c0 = function (a1) { return ["/contact/edit", a1]; };
class ContactDetailsComponent {
    constructor(userService, contactService, router, route, fb) {
        // this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.userService = userService;
        this.contactService = contactService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.form = this.fb.group({
            amount: ''
        });
    }
    onRemoveContact() {
        this.contactService.deleteContact(this.contact._id);
        this.onBack();
    }
    onBack() {
        this.router.navigateByUrl('/contact');
    }
    onMoveCoins(amount) {
        this.userService.addMove(this.contact, amount);
        // this.setContactMoves(this.contact._id)
    }
    setContactMoves(contactId) {
        this.user$ = this.userService.user$;
        this.subscriptionMoves = this.user$.subscribe(user => {
            this.moves = user.moves.filter(({ toId }) => toId === contactId);
        });
    }
    onChangeContact(diff) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const contactId = yield this.contactService.getNeighborContactId(this.contact._id, diff);
            yield this.router.navigateByUrl('/contact/' + contactId);
            this.setContactMoves(contactId);
        });
    }
    ngOnInit() {
        this.subscription = this.route.data.subscribe(data => {
            this.contact = data.contact;
        });
        this.subscriptionMoves = this.route.params.subscribe(params => this.setContactMoves(params.id));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.subscriptionMoves.unsubscribe();
    }
}
ContactDetailsComponent.ɵfac = function ContactDetailsComponent_Factory(t) { return new (t || ContactDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"])); };
ContactDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ContactDetailsComponent, selectors: [["contact-details"]], outputs: { onEdit: "onEdit" }, decls: 24, vars: 12, consts: [[1, "flex", "justify-center", "detail"], [1, "btn", "back", 3, "click"], [1, "flex", "column", "align-center", "space-between", "contact-container"], [1, "contact-info"], [3, "src", "alt"], [1, "btn-container"], [1, "btn", "confirm", 3, "routerLink"], ["type", "button", 1, "btn", "warning", 3, "click"], [1, "move-container"], [3, "moveCoins"], [3, "moves", "title", "isShowTo", "moveClass"], [1, "paging"], [3, "click"]], template: function ContactDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_1_listener() { return ctx.onBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_14_listener() { return ctx.onRemoveContact(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Delete ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "fund", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("moveCoins", function ContactDetailsComponent_Template_fund_moveCoins_17_listener($event) { return ctx.onMoveCoins($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "move-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_20_listener() { return ctx.onChangeContact(-1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ContactDetailsComponent_Template_button_click_22_listener() { return ctx.onChangeContact(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", ctx.contact.name, "'s photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "https://i.pravatar.cc/150?u=" + ctx.contact._id, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contact.phone);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contact.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.contact._id));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("moves", ctx.moves)("title", "Moves")("isShowTo", false)("moveClass", "move-list");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _cmps_fund_fund_component__WEBPACK_IMPORTED_MODULE_6__["FundComponent"], _cmps_move_list_move_list_component__WEBPACK_IMPORTED_MODULE_7__["MoveListComponent"]], styles: [".detail[_ngcontent-%COMP%] {\n  margin-top: 40px;\n  align-items: flex-start;\n  height: -webkit-fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3fr 2fr 3fr;\n  grid-template-rows: 70vh;\n  gap: 30px;\n}\n.detail[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(button) {\n  border-radius: 5px;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100%;\n}\n.detail[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%] {\n  background-color: #8dd6e9;\n  color: #fff;\n  padding: 40px 20px;\n  grid-column: 2/3;\n  width: 100%;\n  text-align: center;\n}\n.detail[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%] {\n  margin-top: 1.9rem;\n}\n.detail[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .btn-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 20px;\n}\n.detail[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   .contact-info[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.detail[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  border: 4px solid #f5de5e;\n  border: 6px solid #fff;\n  margin-bottom: 2.3rem;\n  width: 50%;\n}\n.detail[_ngcontent-%COMP%]   .move-container[_ngcontent-%COMP%] {\n  color: #7ab9c9;\n  border: 1px solid #8dd6e9;\n  background-color: #fff;\n  justify-self: flex-start;\n  padding: 40px 40px;\n  min-width: 60%;\n}\n.detail[_ngcontent-%COMP%]   .paging[_ngcontent-%COMP%] {\n  grid-column: 2/3;\n  margin: auto;\n}\n.detail[_ngcontent-%COMP%]   .paging[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-inline-end: 20px;\n}\n.detail[_ngcontent-%COMP%]   .paging[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  background-color: transparent;\n  border: none;\n  outline: none;\n  color: #808080;\n  font-weight: 400;\n}\n.detail[_ngcontent-%COMP%]   .paging[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:hover {\n  font-weight: bold;\n}\n@media (max-width: 500px) {\n  .detail[_ngcontent-%COMP%] {\n    padding: 0 10px;\n    margin-top: 60px;\n    display: flex;\n    flex-direction: column;\n  }\n  .detail[_ngcontent-%COMP%]   .contact-container[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .detail[_ngcontent-%COMP%]   .move-container[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 40px 20px;\n  }\n  .detail[_ngcontent-%COMP%]   .paging[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX21peGlucy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXGNvbnRhY3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzY3NzXFxzZXR1cFxcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFBO0FBMEJBLGtCQUFBO0FDdkJBO0VBQ0ksZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQUEsd0JBQUE7RUFBQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSx3QkFBQTtFQUNBLFNBQUE7QUFBSjtBQUVJO0VBQ0ksa0JBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0FBQVI7QUFJSTtFQUNJLHlCQ2pCRDtFRGtCQyxXQ25CRDtFRG9CQyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBRlI7QUFJUTtFQUNJLGtCQUFBO0FBRlo7QUFLUTtFQUNJLHVCQUFBO0FBSFo7QUFNUTtFQUNJLFdBQUE7QUFKWjtBQU9RO0VBQ0ksa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FBTFo7QUFTSTtFQUNJLGNDdkNEO0VEd0NDLHlCQUFBO0VBQ0Esc0JDakREO0VEa0RDLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBUFI7QUFZSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQVZSO0FBWVE7RUFDSSx1QkFBQTtBQVZaO0FBYVE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsY0NoRUw7RURpRUssZ0JBQUE7QUFYWjtBQWNRO0VBQ0ksaUJBQUE7QUFaWjtBRDlESTtFQ0FKO0lBK0VRLGVBQUE7SUFDQSxnQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtFQWJOO0VBZU07SUFDSSxtQkFBQTtFQWJWO0VBZ0JNO0lBQ0ksV0FBQTtJQUNBLGtCQUFBO0VBZFY7RUFpQk07SUFDSSxtQkFBQTtFQWZWO0FBQ0YiLCJmaWxlIjoiY29udGFjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQnJlYWtwb2ludCBtaXhpbnMgKi9cclxuXHJcbkBtaXhpbiBmb3ItbW9iaWxlLWxheW91dCB7XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZS1icmVha3BvaW50ICsgNDApIHtcclxuICAgICAgICBAY29udGVudDtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIGZvci1uYXJyb3ctbGF5b3V0IHtcclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbW9iaWxlLWJyZWFrcG9pbnQgKyA0MCkge1xyXG4gICAgICAgIEBjb250ZW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWl4aW4gZm9yLW5vcm1hbC1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRuYXJyb3ctYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiBmb3Itd2lkZS1sYXlvdXQge1xyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRub3JtYWwtYnJlYWtwb2ludCArIDQwKSB7XHJcbiAgICAgICAgQGNvbnRlbnQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhICBNaXhpbnMgKi9cclxuQG1peGluIGFzcGVjdC1yYXRpbygkd2lkdGgsICRoZWlnaHQpIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAoJGhlaWdodCAvICR3aWR0aCkgKiAxMDAlO1xyXG4gICAgfVxyXG4gICAgPiAqIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICA+IGltZyB7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIE1peGluIGZvciByZW1vdmluZyBob3ZlciBlZmVjdHMgb24gaXBob25lIHNjcmVlblxyXG4gIEBtaXhpbiBob3Zlci1zdXBwb3J0ZWQgeyAgICBcclxuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAocG9pbnRlcjogY29hcnNlKSB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIEBjb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9IiwiQGltcG9ydCAnLi4vLi4vLi4vc2Nzcy9zZXR1cC92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi9zY3NzL3NldHVwL21peGlucyc7XHJcblxyXG4uZGV0YWlsIHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDNmciAyZnIgM2ZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHZoO1xyXG4gICAgZ2FwOiAzMHB4O1xyXG5cclxuICAgID4qOm5vdChidXR0b24pIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY2xyMjtcclxuICAgICAgICBjb2xvcjogJGNscjE7XHJcbiAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAuYnRuLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuOXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5idG4tY29udGFpbmVyPio6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1pbmxpbmUtZW5kOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCAkY2xyMztcclxuICAgICAgICAgICAgYm9yZGVyOiA2cHggc29saWQgJGNscjE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuM3JlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1vdmUtY29udGFpbmVyIHtcclxuICAgICAgICBjb2xvcjogJGNscjk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNscjI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNscjE7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDQwcHggNDBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDYwJTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC5wYWdpbmcge1xyXG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICA+Kjpub3QoOmxhc3QtY2hpbGQpIHtcclxuICAgICAgICAgICAgbWFyZ2luLWlubGluZS1lbmQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA+KiB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkY2xyNjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgID4qOmhvdmVyIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBpbmNsdWRlIGZvci1tb2JpbGUtbGF5b3V0IHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgICAgIC5jb250YWN0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW92ZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNDBweCAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnBhZ2luZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLy8gQ29sb3JzXHJcbiRjbHItYmFzZTogIzE3MmI0ZDtcclxuXHJcbiRjbHIxOiAjZmZmO1xyXG4kY2xyMjogIzhkZDZlOTtcclxuJGNscjM6ICNmNWRlNWU7XHJcbiRjbHI0OiAjZWVlZWVlO1xyXG4kY2xyNTogI2M5YzljOTtcclxuJGNscjY6ICM4MDgwODA7XHJcbiRjbHI3OiAjZmRmZGZiO1xyXG4kY2xyODogI2M2ZGNlMDtcclxuJGNscjk6ICM3YWI5Yzk7XHJcbiRjbHIxMDojZmZiZDA4O1xyXG4kY2xyMTE6I2VjOTc2NjtcclxuXHJcblxyXG4kc3VidGxlLXNoYWRvdzogMHB4IDJweCAzcHggIzAwMDAwMDIzO1xyXG4kdGFibGUtc2hhZG93OiAycHggMnB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDM0KTtcclxuXHJcbi8vIEJyZWFrcG9pbnRzXHJcbiRtb2JpbGUtYnJlYWtwb2ludDogNDYwcHg7XHJcbiRuYXJyb3ctYnJlYWtwb2ludDogNzEwcHg7XHJcbiRub3JtYWwtYnJlYWtwb2ludDogOTYwcHg7XHJcbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ "v6lb":
/*!**********************************************************!*\
  !*** ./src/app/pages/statistics/statistics.component.ts ***!
  \**********************************************************/
/*! exports provided: StatisticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function() { return StatisticsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_bitcoin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/bitcoin.service */ "4T2p");
/* harmony import */ var _cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../cmps/chart/chart.component */ "ppaa");



class StatisticsComponent {
    constructor(bitcoinService) {
        this.bitcoinService = bitcoinService;
    }
    ngOnInit() {
        this.marketPrice = this.bitcoinService.getMarketPrice();
        this.confirmedTransactions = this.bitcoinService.getConfirmedTransactions();
    }
}
StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) { return new (t || StatisticsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_bitcoin_service__WEBPACK_IMPORTED_MODULE_1__["BitcoinService"])); };
StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StatisticsComponent, selectors: [["statistics"]], decls: 3, vars: 6, consts: [[3, "data", "title", "vTitle"]], template: function StatisticsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "chart", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.marketPrice)("title", "Market price")("vTitle", "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.confirmedTransactions)("title", "Confirmed transactions")("vTitle", "Transactions");
    } }, directives: [_cmps_chart_chart_component__WEBPACK_IMPORTED_MODULE_2__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGF0aXN0aWNzLmNvbXBvbmVudC5zY3NzIn0= */"], changeDetection: 0 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/services/contact-resolver.service */ "3Eri");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");
/* harmony import */ var _pages_Contact_details_Contact_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Contact-details/Contact-details.component */ "qm13");
/* harmony import */ var _pages_Contact_edit_Contact_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Contact-edit/Contact-edit.component */ "FUNN");
/* harmony import */ var _pages_Contact_Contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Contact/Contact.component */ "3W3r");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "ojyh");
/* harmony import */ var _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/statistics/statistics.component */ "v6lb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");










const routes = [
    { path: 'contact/edit/:id', component: _pages_Contact_edit_Contact_edit_component__WEBPACK_IMPORTED_MODULE_4__["ContactEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], resolve: { contact: src_services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_1__["ContactResolverService"] } },
    { path: 'contact/edit', component: _pages_Contact_edit_Contact_edit_component__WEBPACK_IMPORTED_MODULE_4__["ContactEditComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], resolve: { contact: src_services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_1__["ContactResolverService"] } },
    { path: 'contact/:id', component: _pages_Contact_details_Contact_details_component__WEBPACK_IMPORTED_MODULE_3__["ContactDetailsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]], resolve: { contact: src_services_contact_resolver_service__WEBPACK_IMPORTED_MODULE_1__["ContactResolverService"] } },
    { path: 'contact', component: _pages_Contact_Contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: 'statistic', component: _pages_statistics_statistics_component__WEBPACK_IMPORTED_MODULE_7__["StatisticsComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]] },
    { path: '', component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_6__["HomepageComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map