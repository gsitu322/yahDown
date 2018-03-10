import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { RegisterComponent } from "./components/register/register.component"
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppComponent } from "./app.component";
import { ProjectModule } from "./components/project/project.module";
import { ProjectComponent } from "./components/project/project.component";
import { HttpClientModule } from "@angular/common/http";
const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    { path: 'project', component: ProjectComponent, loadChildren: './components/project/project.module#ProjectModule' },
    {
        path: '**',
        component: HomeComponent
    }
];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent,
        RegisterComponent,
        ProjectComponent,
    ],
    imports: [
        BrowserModule,
        ProjectModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
],
bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule {

}
