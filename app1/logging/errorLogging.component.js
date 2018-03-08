"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var errorLoggingData_1 = require("../logging/data/errorLoggingData");
var ErrorLoggingComponent = (function () {
    function ErrorLoggingComponent() {
        this.pages = 10;
        this.pageSize = 5;
        this.pageNumber = 0;
        this.currentIndex = 1;
        this.pageStart = 1;
        this.inputName = '';
        console.log(errorLoggingData_1.errorLoggingList);
        this.filteredItems = errorLoggingData_1.errorLoggingList;
        this.init();
    }
    ;
    ErrorLoggingComponent.prototype.init = function () {
        this.currentIndex = 1;
        this.pageStart = 1;
        this.pages = 4;
        this.pageNumber = parseInt("" + (this.filteredItems.length / this.pageSize));
        if (this.filteredItems.length % this.pageSize != 0) {
            this.pageNumber++;
        }
        if (this.pageNumber < this.pages) {
            this.pages = this.pageNumber;
        }
        this.refreshItems();
        console.log("this.pageNumber :  " + this.pageNumber);
    };
    ErrorLoggingComponent.prototype.FilterByName = function () {
        var _this = this;
        this.filteredItems = [];
        if (this.inputName != "") {
            errorLoggingData_1.errorLoggingList.forEach(function (element) {
                if (element.firstName.toUpperCase().indexOf(_this.inputName.toUpperCase()) >= 0) {
                    _this.filteredItems.push(element);
                }
            });
        }
        else {
            this.filteredItems = errorLoggingData_1.errorLoggingList;
        }
        console.log(this.filteredItems);
        this.init();
    };
    ErrorLoggingComponent.prototype.fillArray = function () {
        var obj = new Array();
        for (var index = this.pageStart; index < this.pageStart + this.pages; index++) {
            obj.push(index);
        }
        return obj;
    };
    ErrorLoggingComponent.prototype.refreshItems = function () {
        this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
        this.pagesIndex = this.fillArray();
    };
    ErrorLoggingComponent.prototype.prevPage = function () {
        if (this.currentIndex > 1) {
            this.currentIndex--;
        }
        if (this.currentIndex < this.pageStart) {
            this.pageStart = this.currentIndex;
        }
        this.refreshItems();
    };
    ErrorLoggingComponent.prototype.nextPage = function () {
        if (this.currentIndex < this.pageNumber) {
            this.currentIndex++;
        }
        if (this.currentIndex >= (this.pageStart + this.pages)) {
            this.pageStart = this.currentIndex - this.pages + 1;
        }
        this.refreshItems();
    };
    ErrorLoggingComponent.prototype.setPage = function (index) {
        debugger;
        console.log(index);
        this.currentIndex = index;
        this.refreshItems();
    };
    return ErrorLoggingComponent;
}());
ErrorLoggingComponent = __decorate([
    core_1.Component({
        selector: 'my-pagination',
        templateUrl: '/app/logging/errorLogging.component.html',
        // styleUrls: ['/app/logging/errorLogging.component.scss'],
        styles: ['.pagination { margin: 0px !important; }']
    }),
    __metadata("design:paramtypes", [])
], ErrorLoggingComponent);
exports.ErrorLoggingComponent = ErrorLoggingComponent;
//# sourceMappingURL=errorLogging.component.js.map