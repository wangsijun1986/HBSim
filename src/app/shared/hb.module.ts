import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { Routes,RouterModule} from "@angular/router";
import { MainLayoutComponent } from '../layout/main_layout.component';

@NgModule({
    imports:[
        CommonModule
    ],
    declarations:[MainLayoutComponent]
})
export class HBModule{}