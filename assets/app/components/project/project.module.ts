import {NgModule} from "@angular/core";
import {ProjectListingComponent} from "./projectListing/projectListing.component";
import {ProjectFormComponent} from "./projectForm/projectForm.component";
import {ProjectSerivce} from "./project.service";
import {projectRoutes} from "./project.routing";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        ProjectFormComponent,
        ProjectListingComponent
    ],
    imports: [
        projectRoutes,
        ReactiveFormsModule
    ],
    providers: [
        ProjectSerivce
    ],
    bootstrap: [

    ]
})

export class ProjectModule {

}