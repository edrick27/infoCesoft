import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes, PreloadAllModules } from "@angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: 'login',
        loadChildren: './modules/login/login.module#LoginModule'
    },
  
];  


@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
