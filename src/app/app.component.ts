import { Component } from '@angular/core';
import {AuthorizationError} from './AuthorizationError';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  throwCustomError() {
    throw new AuthorizationError();
  }
}
