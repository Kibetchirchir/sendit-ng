import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div><h1> {{ pageTittle }}n</h1><div>My first component </div></div>`
})
export class AppComponent {
  pageTittle: string = 'Send-IT'
}
