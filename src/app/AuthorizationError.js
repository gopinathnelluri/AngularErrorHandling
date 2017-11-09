"use strict";
var AuthorizationError = (function () {
    function AuthorizationError() {
    }
    AuthorizationError.prototype.toString = function () {
        return 'yess !!! You are not authorized to view this content!!!';
    };
    return AuthorizationError;
}());
exports.AuthorizationError = AuthorizationError;
//# sourceMappingURL=AuthorizationError.js.map