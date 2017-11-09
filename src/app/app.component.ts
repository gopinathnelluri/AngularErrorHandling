import { Component } from '@angular/core';
import {AuthorizationError} from './AuthorizationError';
import {UserNotFoundError} from './UserNotFoundError';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  throwCustomError() {
    throw new AuthorizationError();
  }
  throwUserError() {
    throw new UserNotFoundError();
  }
  throwError() {
    throw new Error();
  }
}
