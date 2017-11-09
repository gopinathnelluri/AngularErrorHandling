import {ErrorHandler} from '@angular/core';
import {AuthorizationError} from './AuthorizationError';

export class CustomErrorHandler extends ErrorHandler {
    constructor(){
        super(false);
    }
    public handleError(error: any): void {
      alert(error.originalError);
        if(error.originalError instanceof AuthorizationError){
            alert("if");
            console.info(`[CUSTOM ERROR]:::${error.originalError.toString()}`);
        } else {
            alert("else");
            super.handleError(error);
        }
    }
}
