import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  backendHost: string = environment.HttpBackendHost;
  constructor() { }
  dataProvider = new ReplaySubject(1);

  getAllQuestions(){
    const url = `${this.backendHost}`
  }
}
