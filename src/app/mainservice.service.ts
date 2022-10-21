import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  backendHost: string = environment.HttpBackendHost;
  constructor(private http: HttpClient) { }
  dataProvider = new ReplaySubject(1);

  getAllQuestions(){
    const url = `${this.backendHost}/getquestion`
    return this.http.get(url);
  }
  submitquestion(data:any){
    const url = `${this.backendHost}/create`
    return this.http.post(url,data)
  }
}
