import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutes } from '../routes/default.routes';
import { DefaultComponent } from '../pages/default/default.component';
import { AboutComponent } from '../pages/about/about.component';
import { AskQuestionComponent } from '../pages/ask-question/ask-question.component';
import { QuillModule } from 'ngx-quill';
import { RichTextEditorModule } from './rich-text-editor/rich-text-editor.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DefaultComponent, AboutComponent, AskQuestionComponent],
  imports: [
    CommonModule,
    QuillModule.forRoot(),
    RichTextEditorModule,
    ReactiveFormsModule,
    DefaultRoutes
  ]
})
export class DefaultModule { }
