"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var UserNotFoundError = (function (_super) {
    __extends(UserNotFoundError, _super);
    // callback with a custom error object
    //let getError = cb => cb(new AuthorizationError('there was a problem'))
    // get the error and log the stack trace
    //getError((err) => console.log(err));
    function UserNotFoundError() {
        var _this = _super.call(this) || this;
        _this.customType = "UserNotFoundError";
        //Object.setPrototypeOf(this, Object.getPrototypeOf(this));
        _this.name = 'UserNotFoundError';
        Error.captureStackTrace(_this, UserNotFoundError);
        return _this;
    }
    /*
      constructor(message) {
        super(message);
        //Object.setPrototypeOf(this, Object.getPrototypeOf(this));
    
        this.name = 'AuthorizationError';
        Error.captureStackTrace(this, AuthorizationError);
      }
      */
    UserNotFoundError.prototype.toString = function () {
        return 'User Not Found Error';
    };
    return UserNotFoundError;
}(Error));
exports.UserNotFoundError = UserNotFoundError;
//# sourceMappingURL=UserNotFoundError.js.map