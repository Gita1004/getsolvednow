import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { AskQuestionComponent } from '../pages/ask-question/ask-question.component';
import { DefaultComponent } from '../pages/default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'ask-question',
    component: AskQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultRoutes { }
