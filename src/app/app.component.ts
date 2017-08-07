import { Component,ViewContainerRef } from "@angular/core";

@Component({
  selector: 'my-app',
  template: `<router-outlet></router-outlet>`
})
export class AppComponent { 
  public title = 'app works!';
  public constructor(private viewContainerRef: ViewContainerRef) {}
 }
