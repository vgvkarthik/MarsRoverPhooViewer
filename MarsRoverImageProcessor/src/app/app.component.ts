import {Component} from '@angular/core';
@Component({
  selector:'my-app',
  template:`<div>
              <h1>{{pageHeader}}</h1>
              <app-marsphotosviewer></app-marsphotosviewer>
              </div>`
})
export class AppComponent{
  pageHeader: string= 'Mars Rover Image';
}