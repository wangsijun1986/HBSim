import { NgModule,ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routing } from "./app.routing";
import { HBModule } from './shared/hb.module';
import { AppComponent } from "./app.component";


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    HBModule,
    routing
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers:[]
})
export class AppModule { 
  constructor(public appRef: ApplicationRef) {}
}