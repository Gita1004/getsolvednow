import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-ask-question',
  templateUrl: './ask-question.component.html',
  styleUrls: ['./ask-question.component.scss']
})
export class AskQuestionComponent {

  richTextForm: FormGroup = this._fb.group({
    title: ['', Validators.required],
    description: [
      ''
    ]
  });

  constructor(private _fb: FormBuilder) {
  }

  get descriptionRichControl() {
    return this.richTextForm.get('description') as FormControl;
  }

}
