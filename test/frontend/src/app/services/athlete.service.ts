import {Injectable} from '@angular/core';
import {Athlete} from '../model/athlete.model';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AthleteService {

    private apiUrl = 'http://localhost:8080/athletes';

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Athlete[]> {
        return this.http.get(this.apiUrl)
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
