import {BrowserModule} from '@angular/platform-browser';
import {NgModule, ErrorHandler} from '@angular/core';
import {AppComponent} from './app.component';
import {CustomErrorHandler} from './CustomErrorHandler';
@NgModule({
    declarations: [ AppComponent ],
    imports: [ BrowserModule ],
    bootstrap: [ AppComponent ],
    providers: [
        {provide: ErrorHandler, useClass: CustomErrorHandler}
    ]
})
export class AppModule {}
