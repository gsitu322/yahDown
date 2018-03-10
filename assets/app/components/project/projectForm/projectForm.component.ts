import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ProjectService} from "../project.service";
import {Router} from "@angular/router";
import {Project} from "../project.model";

@Component({
    selector: 'app-project-form',
    templateUrl: 'projectForm.component.html'
})

export class ProjectFormComponent implements OnInit  {
    myForm: FormGroup;

    constructor(private projectService: ProjectService, private router: Router){}

    onSubmit() {
        const project = new Project(
            this.myForm.value.name,
            this.myForm.value.description,
            this.myForm.value.milestones,
            this.myForm.value.technologies
        );

        this.projectService.saveProject(project)
            .subscribe(
                data => console.log(data),
                error => console.error(error)
            );
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            description: new FormControl(null, Validators.required),
            milestones: new FormControl(null, Validators.required),
            technologies: new FormControl(null, Validators.required)
        });
    }
}