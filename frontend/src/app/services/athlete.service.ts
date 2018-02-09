import {Injectable} from '@angular/core';
import {Athlete} from '../model/athlete.model';
import {HttpHeaders, HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';




@Injectable()
export class AthleteService {
  // static REQUEST_OPTIONS: RequestOptions = new RequestOptions({HttpHeaders: new HttpHeaders({'Content-Type': 'application/json'})});
  // static headers = new HttpHeaders().set('Content-Type', 'application/json');

  private apiRootUrl = 'http://localhost:8080';
  private findAllUrl = this.apiRootUrl + '/athletes';
  private findByIdUrl = this.apiRootUrl + '/athlete';
  private saveUpdateUrl = this.apiRootUrl + '/saveAthlete';
  private deleteUrl = this.apiRootUrl + '/deleteAthlete';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Athlete[]> {
    return this.http.get(this.findAllUrl)
      .catch(this.defaultErrorHandler());
  }

  findById(id: number): Observable<Athlete> {
    return this.http.get(this.findByIdUrl + '/' + id)
      .catch(this.defaultErrorHandler());
  }
  save(athlete: Athlete): Observable<Athlete> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(this.saveUpdateUrl, athlete, {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  delete(athlete: Athlete): Observable<boolean> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.http.post(this.deleteUrl, athlete.id, {headers: headers})
      .catch(this.defaultErrorHandler());
  }

  private defaultErrorHandler() {
    return (error: any) => {
      console.log(error);
      return Observable.throw('Server error');
    };
  }
}
