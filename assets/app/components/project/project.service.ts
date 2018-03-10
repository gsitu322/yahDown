import {Injectable} from "@angular/core";
import {Project} from "./project.model";
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {Response} from "@angular/http";

@Injectable()
export class ProjectService {

    constructor(private http: HttpClient){}

    saveProject(project: Project) {
        const body = JSON.stringify(project);
        const headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this.http.post('/project', body, {headers: headers})
            .map((response: Response) => response)
            .catch((error: Response) => {
                return Observable.throw(error);
            });
    }
}