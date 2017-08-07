import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SimLayoutRouting } from "./sim_layout.routing";
import { SimLayoutComponent } from './sim_layout.component';

@NgModule({
    imports:[
        CommonModule,
        SimLayoutRouting
    ],
    declarations:[SimLayoutComponent]
})
export class SimLayoutModule{ }
