import {RouterModule, Routes} from "@angular/router";

import {ProjectListingComponent} from "./projectListing/projectListing.component";
import {ProjectFormComponent} from "./projectForm/projectForm.component";

const PROJECT_ROUTES: Routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full'},
    { path: 'list', component: ProjectListingComponent },
    { path: 'post', component: ProjectFormComponent}
];

export const projectRoutes = RouterModule.forChild(PROJECT_ROUTES);