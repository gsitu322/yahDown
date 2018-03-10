import {NgModule} from "@angular/core";
import {ProjectListingComponent} from "./projectListing/projectListing.component";
import {ProjectFormComponent} from "./projectForm/projectForm.component";
import {ProjectSerivce} from "./project.service";
import {projectRoutes} from "./project.routing";


@NgModule({
    declarations: [
        ProjectFormComponent,
        ProjectListingComponent,
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