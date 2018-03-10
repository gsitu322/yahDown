import {NgModule} from "@angular/core";
import {ProjectListingComponent} from "./projectListing/projectListing.component";
import {ProjectFormComponent} from "./projectForm/projectForm.component";
import {ProjectSerivce} from "./project.service";
import {ProjectComponent} from "./project.component";
import {projectRoutes} from "./project.routing";


@NgModule({
    declarations: [
        ProjectFormComponent,
        ProjectListingComponent,
        ProjectComponent
    ],
    imports: [
        projectRoutes
    ],
    providers: [
        ProjectSerivce
    ],
    bootstrap: [

    ]
})

export class ProjectModule {

}