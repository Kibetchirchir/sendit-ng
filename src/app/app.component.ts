import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1> {{ pageTittle }}</h1>
  <pm-products></pm-products>
  </div>`
})
export class AppComponent {
  pageTittle: string = 'Send-IT'
}
