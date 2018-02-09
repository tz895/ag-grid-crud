import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/Observable';
import {Country} from '../model/country.model';
import {Sport} from '../model/sport.model';
import {StaticData} from '../model/static-data.model';

@Injectable()
export class StaticDataService {
  static httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  private apiRootUrl = 'http://localhost:8080';

  private countriesUrl = this.apiRootUrl + '/countries';
  private sportsUrl = this.apiRootUrl + '/sports';

  static alphabeticalSort() {
    return (a: StaticData, b: StaticData) => a.name.localeCompare(b.name);
  }

  constructor(private http: HttpClient) {
  }



  countries(): Observable<Country[]> {
    return this.http.get(this.countriesUrl, StaticDataService.httpOptions)
      .catch(this.defaultErrorHandler());
  }

  sports(): Observable<Sport[]> {
    return this.http.get(this.sportsUrl, StaticDataService.httpOptions)
      .catch(this.defaultErrorHandler());
  }

  private defaultErrorHandler() {
    return (error: any) => Observable.throw('Server error');
  }
}
