import {NgModule} from "@angular/core";
import {ProjectListingComponent} from "./projectListing/projectListing.component";
import {ProjectFormComponent} from "./projectForm/projectForm.component";
import {ProjectService} from "./project.service";
import {projectRoutes} from "./project.routing";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        ProjectFormComponent,
        ProjectListingComponent
    ],
    imports: [
        projectRoutes,
        ReactiveFormsModule,
    ],
    providers: [
        ProjectService
    ],
    bootstrap: [

    ]
})

export class ProjectModule {

}