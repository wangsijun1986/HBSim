import { NgModule,ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { routing } from "./app.routing";
import { AppComponent } from "./app.component";
import { MainLayoutComponent } from "./layout/main_layout.component";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  declarations: [AppComponent,MainLayoutComponent],
  bootstrap: [AppComponent],
  providers:[]
})
export class AppModule { 
  constructor(public appRef: ApplicationRef) {}
}