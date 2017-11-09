import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {AuthorizationError} from './AuthorizationError';
import {UserNotFoundError} from './UserNotFoundError';

@Injectable()
export class CustomErrorHandler extends ErrorHandler {
    constructor(){
        super(false);
    }

    constructor(private injector: Injector) {
        super(false);
    }


    public handleError(error: any): void {
      console.log(error.customType);
        //error.originalError instanceof AuthorizationError){
        if(error.customType == "AuthorizationError"){
          alert("Authorization Error");
          super.handleError(error);
          //console.info(`[CUSTOM ERROR]:::${error.originalError.toString()}`);
        } else if(error.customType == "UserNotFoundError"){
          alert("User Not Found Error");
          super.handleError(error);
          //console.info(`[CUSTOM ERROR]:::${error.originalError.toString()}`);
        } else {
            alert("Basic Global Error");
            super.handleError(error);
        }
    }

}
