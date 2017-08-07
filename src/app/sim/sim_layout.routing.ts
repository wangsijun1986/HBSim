import { RouterModule, Routes } from '@angular/router';
import { SimLayoutComponent } from './sim_layout.component';
import { ModuleWithProviders} from "@angular/core";

export const SimLayoutRoutes: Routes=[
    {
        path : "",
        component: SimLayoutComponent,
        data:{
            pageTitle:"Sim System"
        }
    },
    {
        path:"home",
        loadChildren:"app/sim/home/home.module#HomeModule"
    }
];

export const SimLayoutRouting : ModuleWithProviders = RouterModule.forChild(SimLayoutRoutes);