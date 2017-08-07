import { Routes, RouterModule } from "@angular/router";
import { MainLayoutComponent } from "./layout/main_layout.component";
import { ModuleWithProviders } from "@angular/core";

export const routes: Routes = [
    {
        path: "",
        component: MainLayoutComponent,
        //data: { pageTitle: "HBHome" },
        children: [
            {
                path: "website",
                loadChildren: "app/website/web_layout.module#WebLayoutModule"
                //data:{ title:"Website Home"}
            },
            {
                path: "sim",
                loadChildren: "app/sim/sim_layout.module#SimLayoutModule"
            },
            {
                path: "",
                redirectTo: "/sim",
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