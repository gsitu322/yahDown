import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {ProjectSerivce} from "../project.service";
import {Router} from "@angular/router";
import {Project} from "../project.model";

@Component({
    selector: 'app-project-form',
    templateUrl: 'projectForm.component.html'
})

export class ProjectFormComponent implements OnInit  {
    myForm: FormGroup;

    constructor(private projectService: ProjectSerivce, private router: Router){}

    onSubmit() {
        console.log(this.myForm);
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