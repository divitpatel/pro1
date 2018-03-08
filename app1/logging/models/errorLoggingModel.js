"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ErrorLogging = (function () {
    function ErrorLogging(id, userName, firstName, email, phoneNumber, location, ipAddress, errorLog, date) {
        this.id = id;
        this.userName = userName;
        this.firstName = firstName;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.ipAddress = ipAddress;
        this.errorLog = errorLog;
        this.date = date;
    }
    return ErrorLogging;
}());
exports.ErrorLogging = ErrorLogging;
//# sourceMappingURL=errorLoggingModel.js.map