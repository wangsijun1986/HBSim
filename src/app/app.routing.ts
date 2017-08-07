import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main_layout.component";
import { WebLayoutComponent } from "./layout/web_layout.component";
import { SimLayoutComponent } from "./layout/sim_layout.component";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        data: { pageTitle: "Home" },
        children: [
            {
                path: "website",
                component:WebLayoutComponent
                //data:{ title:"Website Home"}
            },
            {
                path: "sim",
                component: SimLayoutComponent
            },
            {
                path: "",
                redirectTo: "/website",
                pathMatch: "full"
            }
        ]
    }
    // {
    //     path:"**",
    //     component:
    // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { enableTracing: true, useHash: true });