"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var core_1 = require("@angular/core");
var AuthorizationError_1 = require("./AuthorizationError");
var CustomErrorHandler = (function (_super) {
    __extends(CustomErrorHandler, _super);
    function CustomErrorHandler() {
        return _super.call(this, false) || this;
    }
    CustomErrorHandler.prototype.handleError = function (error) {
        alert(error.originalError);
        if (error.originalError instanceof AuthorizationError_1.AuthorizationError) {
            alert("if");
            console.info("[CUSTOM ERROR]:::" + error.originalError.toString());
        }
        else {
            alert("else");
            _super.prototype.handleError.call(this, error);
        }
    };
    return CustomErrorHandler;
}(core_1.ErrorHandler));
exports.CustomErrorHandler = CustomErrorHandler;
//# sourceMappingURL=CustomErrorHandler.js.map