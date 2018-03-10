import { Component } from "@angular/core";
import {ProjectService} from "./project.service";

@Component({
    selector: 'app-project',
    template: `
        <header class="row spacing">
            <nav class="col-md-12">
                <ul class="nav nav-tabs">
                    <li routerLinkActive="active"><a [routerLink]="['list']">list</a></li>
                    <li routerLinkActive="active"><a [routerLink]="['post']">post</a></li>
                </ul>
            </nav>
        </header>
        <div class="row spacing">
           <router-outlet></router-outlet>
        </div>    
    `
})
export class ProjectComponent {
    constructor(private projectService: ProjectService) {}
}