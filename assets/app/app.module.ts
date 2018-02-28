import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  }

];

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeComponent
    ],
    imports: [
      BrowserModule,
      RouterModule.forRoot(appRoutes)]
    ],
    bootstrap: [AppComponent],
    exports: [RouterModule]
})
export class AppModule {

}
