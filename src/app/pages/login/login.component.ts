import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  public showForm = 'login';
  private activatedRouteSubscription: Subscription;
  constructor(
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRouteSubscription = this.activatedRoute.queryParamMap.subscribe((paramMap: ParamMap) => {
      this.showForm = paramMap.has('register') ? 'register' : 'login';
    });
  }

  ngOnDestroy(): void {
      if (this.activatedRouteSubscription) {
        this.activatedRouteSubscription.unsubscribe();
      }
  }

}
