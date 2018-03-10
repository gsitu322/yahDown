import {RouterModule, Routes} from "@angular/router";

import {ProjectListingComponent} from "./projectListing/projectListing.component";
import {ProjectFormComponent} from "./projectForm/projectForm.component";

const PROJECT_ROUTES: Routes = [
    { path: '', redirectTo: 'projects', pathMatch: 'full'},
    { path: 'projects', component: ProjectListingComponent },
    { path: 'projectPost', component: ProjectFormComponent}
];

export const projectRoutes = RouterModule.forChild(PROJECT_ROUTES);